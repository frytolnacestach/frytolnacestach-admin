<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Kontinenty" />
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

            <section class="t-section mb-8">
                <div class="t-section__inner">
                    <div class="o-admin-list">
                        <div class="o-admin-list__outer">
                            <div class="o-admin-list__inner">
                            
                                <div class="o-admin-list__items" v-if="placesContinents.length">
                                    <div v-for="placesContinent in placesContinents" :key="placesContinent.id" class="o-admin-list__item">
                                        <span class="o-admin-list__id">{{ placesContinent.id }}</span>
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/places/continents/${placesContinent.slug}`">{{ placesContinent.name }}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">
                                            {{ placesContinent.information_chatgpt }}
                                        </p>
                                    </div>
                                </div>

                                <div class="o-admin-list__no-items" v-if="!placesContinents.length">Není tu žádná položka</div>
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
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'
   
    interface PlacesContinents {
        id: number
        name: string
        slug: string
        information_chatgpt: string
    }

    export default defineComponent({
        name: 'AdminPlacesContinetnsIndexPage',

        //COMPONENTS
        components: {
            mNavBreadcrumbs,
            oHero,
            mNavAdmin
        },

        data() {
            return {
                mNavAdminArray: [
                    {
                        id: 1,
                        name: "Přidaní kontinentu",
                        url: "/admin/places/continents/create"
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
                        name: "Kontinenty",
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
                title: 'Místa - Kontinenty - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Kontinenty - výpis',
                ogTitle: 'Místa - Kontinenty - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const placesContinents = ref<PlacesContinents[]>([])

            //API - placesContinents
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/places-continents`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => placesContinents.value = data);
            })

            //RETURN
            return { placesContinents }
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