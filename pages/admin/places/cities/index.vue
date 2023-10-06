<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Města" />
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
                            
                                <div class="o-admin-list__items" v-if="placesCities.length">
                                    <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-admin-list__item">
                                        <span class="o-admin-list__id">{{ placesCity.id }}</span>
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/places/cities/${placesCity.slug}`">{{ placesCity.name }}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">
                                            <strong>
                                                Stát: {{ placesCity.id_state }}<br>
                                            </strong>
                                            <hr>
                                            {{ placesCity.information_chatgpt }}<br>
                                        </p>
                                    </div>
                                </div>

                                <div class="o-admin-list__no-items" v-if="!placesCities.length">Není tu žádná položka</div>
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

    interface PlacesCities {
        id: number
        name: string
        slug: string
        id_state: number
        information_chatgpt: string
    }

    export default defineComponent({
        name: 'AdminPlacesCitiesSlugPage',

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
                        name: "Přidaní města",
                        url: "/admin/places/cities/create"
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
                        name: "Města",
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
                title: 'Místa - Města - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Města - výpis',
                ogTitle: 'Místa - Města - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const placesCities = ref<PlacesCities[]>([])

            //API - placesCities
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/places-cities`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => placesCities.value = data);
            })

            //RETURN
            return { placesCities }
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
