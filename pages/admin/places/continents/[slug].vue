<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Kontinent ' + placesContinentName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-edit">
                        <div class="o-form-edit__outer">
                            <div class="o-form-edit__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="placesContinentSlug" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Jméno:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesContinentName" />
                                        </div>
                                
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Rozloha:</span>
                                            </label>
                                            <input class="a-input" type="text" name="area" v-model="placesContinentArea" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Populace:</span>
                                            </label>
                                            <input class="a-input" type="text" name="population" v-model="placesContinentPopulation" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Hustota populace:</span>
                                            </label>
                                            <input class="a-input" type="text" name="population_density" v-model="placesContinentPopulationDensity" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Počet států:</span>
                                            </label>
                                            <input class="a-input" type="text" name="number_states" v-model="placesContinentNumberStates" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace (Chat GPT):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesContinentInformationChatgpt"></textarea>
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Cover):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_cover" v-model="placesContinentIdImageCover" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Hero):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_hero" v-model="placesContinentIdImageHero" />
                                        </div>
                                                                        
                                    </div>
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'
    
    interface PlacesContinent {
        slug: string
        name: string,
        area: string,
        population: string,
        populationDensity: string,
        number_states: string,
        altitude: string,
        information_chatgpt: string,
        id_image_cover: number,
        id_image_hero: number,
    }

    export default defineComponent({
        name: 'AdminPlacesContinetsSlugPage',

        //COMPONENTS
        components: {
            mNavBreadcrumbs,
            oFlashMessages,
            oHero
        },

        data() {
            return {
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
                        url: "/admin/places/continents",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: `Editace kontinentu - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesContinentName = this.placesContinentName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace kontinentu - ${placesContinentName}`
                }
            }
        },

        watch: {
            placesContinentName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Kontinenty - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Kontinenty - úprava',
                ogTitle: 'Místa - Kontinenty - úprava',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            const errorForm = ref('')
            const successForm = ref('')
            const placesContinentSlug = ref('')
            const placesContinentName = ref('')
            const placesContinentArea = ref('')
            const placesContinentPopulation = ref('')
            const placesContinentPopulationDensity = ref('')
            const placesContinentNumberStates = ref('')
            const placesContinentInformationChatgpt = ref('')
            const placesContinentIdImageCover = ref(0)
            const placesContinentIdImageHero = ref(0)

            //API - Places Continent
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-continent/${route.params.slug}`)
                
                const PlacesContinent: PlacesContinent[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesContinent) && PlacesContinent.length > 0) {
                    placesContinentSlug.value = PlacesContinent[0].slug;
                    placesContinentName.value = PlacesContinent[0].name;
                    placesContinentArea.value = PlacesContinent[0].population;
                    placesContinentPopulation.value = PlacesContinent[0].populationDensity;
                    placesContinentPopulationDensity.value = PlacesContinent[0].number_states;
                    placesContinentNumberStates.value = PlacesContinent[0].altitude;
                    placesContinentInformationChatgpt.value = PlacesContinent[0].information_chatgpt;
                    placesContinentIdImageCover.value = PlacesContinent[0].id_image_cover;
                    placesContinentIdImageHero.value = PlacesContinent[0].id_image_hero;
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-continent-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': placesContinentSlug.value,
                            'name': placesContinentName.value,
                            'area': placesContinentArea.value,
                            'population': placesContinentPopulation.value,
                            'populationDensity': placesContinentPopulationDensity.value,
                            'number_states': placesContinentNumberStates.value,
                            'information_chatgpt': placesContinentInformationChatgpt.value,
                            'image_cover': placesContinentIdImageCover.value,
                            'image_hero': placesContinentIdImageHero.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                    })
                    .catch((error) => {
                        console.log(error);
                        errorForm.value = "Data nebyla upravena nastala chyba při jejich odeslání"
                });
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return { successForm, errorForm, placesContinentSlug, placesContinentName, placesContinentArea, placesContinentPopulation, placesContinentPopulationDensity, placesContinentNumberStates, placesContinentInformationChatgpt, placesContinentIdImageCover, placesContinentIdImageHero, editForm }
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