<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Státy" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <!-- SECTION - NAV Admin -->
            <section class="t-section mt-4 mb-2">
                <div class="t-section__inner">
                    <mNavAdmin :links="mNavAdminArray"/>
                </div>
            </section>
            <!-- SECTION - NAV Admin END -->

            <!-- SECTION - Search -->
            <section class="t-section my-2">
                <div class="t-section__inner">
                    <oSearch type="state" :page=1 :items=100 @search-result="handleSearch" />
                </div>
            </section>
            <!-- SECTION - Search END -->

            <section class="t-section mb-8" v-if="dataLoading">
                <div class="t-section__inner">
                    <skeletonoAdminList />
                </div>
            </section>

            <section class="t-section mb-8" v-if="!dataLoading && !placesStates.length">
                <div class="t-section__inner">
                    <div class="o-admin-list__no-items">Není tu žádná položka</div>
                </div>
            </section>

            <section class="t-section mb-8">
                <div class="t-section__inner">
                    <div class="o-admin-list">
                        <div class="o-admin-list__outer">
                            <div class="o-admin-list__inner">
                                <div class="o-admin-list__items" v-if="placesStates.length">
                                    <div v-for="placesState in placesStates" :key="placesState.id" class="o-admin-list__item">
                                        <span class="o-admin-list__id">{{ placesState.id }}</span>
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/places/states/${placesState.slug}`">{{ placesState.name }}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">
                                            <strong>
                                                Kontinent: {{ placesState.id_continent }}<br>
                                            </strong>
                                            <hr>
                                            {{ placesState.information_chatgpt }}
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
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oHero from '@/components/organisms/oHero.vue'
    import oSearch from '@/components/organisms/oSearch.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'
    import skeletonoAdminList from '@/components/skeleton/skeletonOAdminList.vue'

    interface PlacesStates {
        id: number
        name: string
        slug: string
        id_continent: number
        information_chatgpt: string
    }

    export default defineComponent({
        name: 'AdminPlacesStatesIndexPage',

        //COMPONENTS
        components: {
            mNavBreadcrumbs,
            oHero,
            oSearch,
            mNavAdmin,
            skeletonoAdminList
        },

        data() {
            return {
                mNavAdminArray: [
                    {
                        id: 1,
                        name: "Přidaní státu",
                        url: "/admin/places/states/create"
                    }
                ],
                mNavBreadcrumbsArray: [
                    {
                        id: 1,
                        name: "Administrace",
                        url: "/admin",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "Místa",
                        url: "/admin/places",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Státy",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            handleSearch(newSearch: string) {
                this.placesStates = newSearch
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Státy - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Státy - výpis',
                ogTitle: 'Místa - Státy - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const dataLoading = ref(true)
            const placesStates = ref<PlacesStates[]>([])

            //API - PlaceStates
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/places-states`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    dataLoading.value = false
                    placesStates.value = data
                })
            })

            //RETURN
            return {
                dataLoading,
                placesStates
            }
        },

        mounted() {
            //Kontrola přihlášení
            let user = localStorage.getItem('user-info')
            if ( user && user != "undefined" ) {
                console.log("Jsi přihlášen")
            } else {
                //Přesměrování
                const router = useRouter()
                router.push('/login')
            }
        }
    })
</script>