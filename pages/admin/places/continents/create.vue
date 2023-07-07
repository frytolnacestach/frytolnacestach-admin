<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového kontinentu" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <div class="o-form-create">
                        <div class="o-form-create__outer">
                            <div class="o-form-create__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-create__form" @submit.prevent="createForm">
                                    <div class="o-form-create__items">
                                        <!-- slug -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="placesContinentSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="imageCover" v-model="placesContinentIDimageCover" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="imageHero" v-model="placesContinentIDimageHero" />
                                        </div>
                                        <!-- other --> 
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="typePlace" disabled="true" v-model="placesContinentTypePlace" required />
                                        </div>                    
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesContinentName" required />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od Chat GPT <span class="m-label__name-column">(information_chatgpt)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesContinentInformationChatgpt"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od autora <span class="m-label__name-column">(information_author)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in placesContinentInformationAuthorArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Text:</label>
                                                                <textarea class="a-textarea" type="text" v-model="item.text"></textarea>
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Date create:</label>
                                                                <input class="a-input" type="text" v-model="item.date_create" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Author create:</label>
                                                                <input class="a-input" type="text" v-model="item.author_create" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Author update:</label>
                                                                <input class="a-input" type="text" v-model="item.author_update" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-create__buttons mt-1">
                                                    <div class="o-form-create__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addInformationAuthorInput">Přidat text</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Rozloha <span class="m-label__name-column">(area)</span></span>
                                            </label>
                                            <input class="a-input" type="number" step=".01" min="0" name="area" v-model="placesContinentArea" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Populace <span class="m-label__name-column">(population)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="population" v-model="placesContinentPopulation" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Hustota populace <span class="m-label__name-column">(population_density)</span></span>
                                            </label>
                                            <input class="a-input" type="number" step=".01" min="0" name="population_density" v-model="placesContinentPopulationDensity" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Počet států <span class="m-label__name-column">(number_states)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="number_states" v-model="placesContinentNumberStates" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in placesContinentCoordinatesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Latitude:</label>
                                                                <input class="a-input" type="number" step=".0000001" v-model="item.latitude" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Longitude:</label>
                                                                <input class="a-input" type="number" step=".0000001" v-model="item.longitude" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-create__buttons mt-1">
                                                    <div class="o-form-create__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnici</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom map <span class="m-label__name-column">(zoom)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in placesContinentZoomArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Google:</label>
                                                                <input class="a-input" type="number" min="0" v-model="item.google" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Booking:</label>
                                                                <input class="a-input" type="number" min="0" v-model="item.booking" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-create__buttons mt-1">
                                                    <div class="o-form-create__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addZoomInput">Přidat zoom</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                              
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytvořit kontinent</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <!-- FORM END -->
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

    export default defineComponent({
        name: 'AdminPlacesContinentsCreatePage',

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
                        name: "Přidání nového kontinenta",
                        url: "",
                        status: "span"
                    }
                ],
                placesContinentInformationAuthorArray: [],
                placesContinentCoordinatesArray: [],
                placesContinentZoomArray: [],
            }
        },

        methods: {
            // information author
            addInformationAuthorInput() {
                this.placesContinentInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                });
            },
            removeInformationAuthorInput(index: number) {
                this.placesContinentInformationAuthorArray.splice(index, 1);
            },
            // coordinates
            addCoordinateInput() {
                this.placesContinentCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesContinentCoordinatesArray.splice(index, 1);
            },
            // zoom
            addZoomInput() {
                this.placesContinentZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesContinentZoomArray.splice(index, 1);
            },
        },

        watch: {
            placesContinentName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesContinentInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesContinentInformationAuthorArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesContinentInformationAuthorArray = [];
                }
            },
            placesContinentCoordinates: function (newValue, oldValue) {
                try {
                    this.placesContinentCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesContinentCoordinatesArray = [];
                }
            },
            placesContinentCoordinatesArray: function (newValue, oldValue) {
                this.placesContinentCoordinates = JSON.stringify(newValue);
            },
            placesContinentZoom: function (newValue, oldValue) {
                try {
                    this.placesContinentZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesContinentZoomArray = [];
                }
            },
            placesContinentZoomArray: function (newValue, oldValue) {
                this.placesContinentZoom = JSON.stringify(newValue);
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Kontinenty - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Kontinenty - vytvoření',
                ogTitle: 'Místa - Kontinenty - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesContinentIDimageCover = ref(null)
            const placesContinentIDimageHero = ref(null)
            const placesContinentTypePlace = ref('continent')
            const placesContinentSlug = ref('')
            const placesContinentName = ref('')
            const placesContinentInformationChatgpt = ref('')
            const placesContinentInformationAuthor = ref([])
            const placesContinentInformationAuthorArray = ref([])
            const placesContinentArea = ref(null)
            const placesContinentPopulation = ref(null)
            const placesContinentPopulationDensity = ref(null)
            const placesContinentNumberStates = ref(null)
            const placesContinentCoordinates = ref([])
            const placesContinentCoordinatesArray = ref([])
            const placesContinentZoom = ref([])
            const placesContinentZoomArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-continent-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_image_cover': placesContinentIDimageCover.value,
                            'id_image_hero': placesContinentIDimageHero.value,
                            'type_place': placesContinentTypePlace.value,
                            'slug': placesContinentSlug.value,
                            'name': placesContinentName.value,
                            'information_chatgpt': placesContinentInformationChatgpt.value,
                            'information_author': JSON.stringify(placesContinentInformationAuthorArray._value),
                            'area': placesContinentArea.value,
                            'population': placesContinentPopulation.value,
                            'population_density': placesContinentPopulationDensity.value,
                            'number_states': placesContinentNumberStates.value,
                            'coordinates': JSON.stringify(placesContinentCoordinatesArray._value),
                            'zoom': JSON.stringify(placesContinentZoomArray._value),
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/continents/${placesContinentSlug.value}`)
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
            return {
                successForm,
                errorForm,
                placesContinentIDimageCover,
                placesContinentIDimageHero,
                placesContinentTypePlace,
                placesContinentSlug,
                placesContinentName,
                placesContinentInformationChatgpt,
                placesContinentInformationAuthor,
                placesContinentInformationAuthorArray,
                placesContinentArea,
                placesContinentPopulation,
                placesContinentPopulationDensity,
                placesContinentNumberStates,
                placesContinentCoordinates,
                placesContinentCoordinatesArray,
                placesContinentZoom,
                placesContinentZoomArray,
                createForm
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