<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Místa" />
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
                            
                                <div class="o-admin-list__items" v-if="placesSpots.length">
                                    <div v-for="placesSpot in placesSpots" :key="placesSpot.id" class="o-admin-list__item">
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/places/spots/${placesSpot.slug}`">{{ placesSpot.name }}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">
                                            <strong>
                                                Stát: {{ placesSpot.id_state }}<br>
                                                Město: {{ placesSpot.id_city }}
                                            </strong>
                                            <hr>
                                            {{ placesSpot.information_chatgpt }}
                                        </p>
                                    </div>
                                </div>

                                <div class="o-admin-list__no-items" v-if="!placesSpots.length">Není tu žádná položka</div>
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

    interface PlacesSpots {
        id: number
        name: string
        slug: string
        id_state: number
        id_city: number
        information_chatgpt: string
    }

    export default defineComponent({
        name: 'AdminPlacesSpotsIndexPage',

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
                        name: "Přidaní státu",
                        url: "/admin/places/spots/create"
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
                        name: "Místa",
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
                title: 'Místa - Místa - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Místa - výpis',
                ogTitle: 'Místa - Místa - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const placesSpots = ref<PlacesSpots[]>([])

            //API - PlaceSpots
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/places-spots`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => placesSpots.value = data);
            })

            //RETURN
            return { placesSpots }
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