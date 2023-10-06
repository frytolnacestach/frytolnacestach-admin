<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Cestovatelský slovník" />
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
                                <div class="o-admin-list__items">
                                    <div v-for="travelDictionary in travelDictionaries" :key="travelDictionary.id" class="o-admin-list__item">
                                        <span class="o-admin-list__id">{{ travelDictionary.id }}</span>
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/travel-dictionaries/${travelDictionary.slug}`">{{ travelDictionary.name }}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">{{ travelDictionary.description }}</p>
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
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'

    interface TravelDictionaries {
        id: number
        name: string
        slug: string
        description: string
    }

    export default defineComponent({
        name: 'AdminTravelDictionariesIndexPage',

        //COMPONENTS
        components: {
            mNavAdmin,
            mNavBreadcrumbs,
            oHero
        },

        data() {
            return {
                mNavAdminArray: [
                    {
                        id: 1,
                        name: "Přidat položku do slovníku",
                        url: "/admin/travel-dictionaries/create"
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
                        name: "Cestovatelský slovník",
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
                title: 'Cestovatelský slovník - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Cestovaleský slovník - výpis',
                ogTitle: 'Cestovaleský slovník - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const travelDictionaries = ref<TravelDictionaries[]>([])

            //API - TravelDictionaries
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/travel-dictionaries`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => travelDictionaries.value = data);
            })

            //RETURN
            return { travelDictionaries }
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
