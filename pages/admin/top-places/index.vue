<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Top místa" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
                <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <!-- SECTION - NAV Admin -->
            <section class="t-section my-4">
                <div class="t-section__inner">
                    <mNavAdmin :links="mNavAdminArray"/>
                </div>
            </section>
            <!-- SECTION - NAV Admin END -->

            <section class="t-section mb-8" v-if="dataLoading">
                <div class="t-section__inner">
                    <skeletonoAdminList />
                </div>
            </section>

            <section class="t-section mb-8" v-if="!dataLoading && !topPlaces.length">
                <div class="t-section__inner">
                    <div class="o-admin-list__no-items">Není tu žádná položka</div>
                </div>
            </section>

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">
                    <div class="o-admin-list">
                        <div class="o-admin-list__outer">
                            <div class="o-admin-list__inner">
                                <div class="o-admin-list__items">
                                    <div v-for="topPlace  in topPlaces" :key="topPlace.id" class="o-admin-list__item">
                                        <span class="o-admin-list__id">{{ topPlace.id }}</span>
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/top-places/${topPlace.id}`">{{ topPlace.id}}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">
                                            ID Místo: {{ topPlace.id_place }}<br>
                                            Type: {{ topPlace.type }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import skeletonoAdminList from '@/components/skeleton/skeletonOAdminList.vue'

    //INTERFACES
    interface topPlaces {
        id: number
        id_place: number
        type: string
    }

    export default defineComponent({
        name: 'AdminTopPlacesIndexPage',

        //COMPONENTS
        components: {
            mNavBreadcrumbs,
            mNavAdmin,
            oHero,
            skeletonoAdminList
        },

        data() {
            return {
                mNavAdminArray: [
                    {
                        id: 1,
                        name: "Přidat místo",
                        url: "/admin/top-places/create"
                    }
                ],
                mNavBreadcrumbsArray: [
                    {
                        id: 1,
                        name: "Administrace",
                        url: "/admin/",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "Top místa",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Top místa - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Top místa - výpis',
                ogTitle: 'Top místa - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const dataLoading = ref(true)
            const topPlaces = ref<topPlaces[]>([])

            //API - Users
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/top-places`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    dataLoading.value = false
                    topPlaces.value = data
                })
            })

            //RETURN
            return {
                dataLoading,
                topPlaces
            }
        },

        mounted() {
            //Kontrola přihlášení
            let user = localStorage.getItem('user-info')
            if ( !user || user === "undefined" ) {
                //Přesměrování
                const router = useRouter()
                router.push('/login')
            }
        }
    })
</script>
