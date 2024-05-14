<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Města" />
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
                    <oSearch type="city" :page=1 :items=100 @search-result="handleSearch" />
                </div>
            </section>
            <!-- SECTION - Search END -->

            <section class="t-section mb-8" v-if="dataLoading">
                <div class="t-section__inner">
                    <skeletonoAdminList />
                </div>
            </section>

            <section class="t-section mb-8" v-if="!dataLoading && !placesCities.length">
                <div class="t-section__inner">
                    <div class="o-admin-list__no-items">Není tu žádná položka</div>
                </div>
            </section>

            <section class="t-section">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION - Pagination -->
            <section class="t-section mt-2 mb-8">
                <div class="t-section__inner">
                    <oPagination type="city" :page=page :itemsPerPage=itemsPerPage @select-page="handlePagination" />
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

        methods: {
            handleSearch(newSearch: string) {
                this.placesCities = newSearch
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
            const dataLoading = ref(true)
            const placesCities = ref<PlacesCities[]>([])
            let page = ref(1)
            const itemsPerPage = 100

            const load = async () => {
                fetch(`${runTimeConfig.public.baseURL}/places-cities?admin=true&page=${page.value}&items=${itemsPerPage}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    dataLoading.value = false
                    placesCities.value = data
                })
            }

            //API - placesContinents
            onMounted(() => {
                load()
            })


            //RETURN
            return {
                dataLoading,
                placesCities,
                page,
                itemsPerPage,
                load
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
