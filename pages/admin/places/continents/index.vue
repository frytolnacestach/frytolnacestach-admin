<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Kontinenty" />
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
                    <oSearch type="continent" :page=1 :items=100 @search-result="handleSearch" />
                </div>
            </section>
            <!-- SECTION - Search END -->

            <section class="t-section mb-8" v-if="dataLoading">
                <div class="t-section__inner">
                    <skeletonoAdminList />
                </div>
            </section>

            <section class="t-section mb-8" v-if="!dataLoading && !placesContinents.length">
                <div class="t-section__inner">
                    <div class="o-admin-list__no-items">Není tu žádná položka</div>
                </div>
            </section>

            <section class="t-section">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION - Pagination -->
            <section class="t-section mt-2 mb-8">
                <div class="t-section__inner">
                    <oPagination type="continent" :page=page :itemsPerPage=itemsPerPage @select-page="handlePagination" />
                </div>
            </section>
            <!-- SECTION - Pagination END -->
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oHero from '@/components/organisms/oHero.vue'
    import oPagination from '@/components/organisms/oPagination.vue'
    import oSearch from '@/components/organisms/oSearch.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'
    import skeletonoAdminList from '@/components/skeleton/skeletonOAdminList.vue'
   
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
            oPagination,
            oSearch,
            mNavAdmin,
            skeletonoAdminList
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

        methods: {
            handleSearch(newSearch: string) {
                this.placesContinents = newSearch
            },
            handlePagination(newPage: string) {
                this.page = newPage
                this.load()
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
            const dataLoading = ref(true)
            const placesContinents = ref<PlacesContinents[]>([])
            let page = ref(1)
            const itemsPerPage = 100

            const load = async () => {
                fetch(`${runTimeConfig.public.baseURL}/places-continents?page=${page.value}&items=${itemsPerPage}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    dataLoading.value = false
                    placesContinents.value = data
                })
            }

            //API - placesContinents
            onMounted(() => {
                load()
            })


            //RETURN
            return {
                dataLoading,
                placesContinents,
                page,
                itemsPerPage,
                load
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