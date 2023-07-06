<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Region ' + placesRegionName" />
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

                                <!-- FORM -->
                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        <!-- slug -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="placesRegionSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="placesRegionIDstate" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="placesRegionIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="placesRegionIDimageHero" />
                                        </div>
                                        <!-- other --> 
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="typePlace" v-model="placesRegionTypePlace" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesRegionName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od Chat GPT <span class="m-label__name-column">(information_chatgpt)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesRegionInformationChatgpt"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od autora <span class="m-label__name-column">(information_author)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesRegionInformationAuthorArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Text:</label>
                                                                <textarea class="a-textarea" type="text" v-model="item.text"></textarea>
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date create:</label>
                                                                <input class="a-input" type="text" v-model="item.date_create" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author create:</label>
                                                                <input class="a-input" type="text" v-model="item.author_create" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author update:</label>
                                                                <input class="a-input" type="text" v-model="item.author_update" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addInformationAuthorInput">Přidat text</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesRegionCoordinatesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Latitude:</label>
                                                                <input class="a-input" type="number" step=".0000001" v-model="item.latitude" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Longitude:</label>
                                                                <input class="a-input" type="number" step=".0000001" v-model="item.longitude" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnice</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom map <span class="m-label__name-column">(zoom)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesRegionZoomArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Google:</label>
                                                                <input class="a-input" type="number" v-model="item.google" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Booking:</label>
                                                                <input class="a-input" type="number" v-model="item.booking" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addZoomInput">Přidat zoom</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate <span class="m-label__name-column">(affiliate)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesRegionAffiliateArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeAffiliateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Value:</label>
                                                                <input class="a-input" type="text" v-model="item.value" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affileate</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                          
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
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

    interface InformationAuthor {
        text: string
        date_create: string
        date_update: string
        author_create: string
        author_update: string
    }

    interface Coordinates {
        latitude: number
        longitude: number
    }

    interface Zoom {
        google: number
        booking: number
    }

    interface Affiliate {
        name: string
        value: boolean
    }

    interface PlacesRegion {
        id_state: number
        id_image_cover: number
        id_image_hero: number
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
    }

    export default defineComponent({
        name: 'AdminPlacesRegionsSlugPage',

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
                        name: "Regiony",
                        url: "/admin/places/regions",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: `Editace regionu - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ],
                placesRegionInformationAuthorArray: [],
                placesRegionCoordinatesArray: [],
                placesRegionZoomArray: [],
                placesRegionAffiliateArray: [],
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesRegionName = this.placesRegionName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace region - ${placesRegionName}`
                }
            },
            // information author
            addInformationAuthorInput() {
                this.placesRegionInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                });
            },
            removeInformationAuthorInput(index: number) {
                this.placesRegionInformationAuthorArray.splice(index, 1);
            },
            // coordinates
            addCoordinateInput() {
                this.placesRegionCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesRegionCoordinatesArray.splice(index, 1);
            },
            // Zoom
            addZoomInput() {
                this.placesRegionZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesRegionZoomArray.splice(index, 1);
            },
            // Affiliate
            addAffiliateInput() {
                this.placesRegionAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.placesRegionAffiliateArray.splice(index, 1);
            },
        },

        watch: {
            placesRegionName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesRegionName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesRegionInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesRegionInformationAuthorArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesRegionInformationAuthorArray = [];
                }
            },
            placesRegionCoordinates: function (newValue, oldValue) {
                try {
                    this.placesRegionCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesRegionCoordinatesArray = [];
                }
            },
            placesRegionCoordinatesArray: function (newValue, oldValue) {
                this.placesRegionCoordinates = JSON.stringify(newValue);
            },
            placesRegionZoom: function (newValue, oldValue) {
                try {
                    this.placesRegionZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesRegionZoomArray = [];
                }
            },
            placesRegionZoomArray: function (newValue, oldValue) {
                this.placesRegionZoom = JSON.stringify(newValue);
            },
            placesRegionAffiliate: function (newValue, oldValue) {
                try {
                    this.placesRegionAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesRegionAffiliateArray = [];
                }
            },
            placesRegionAffiliateArray: function (newValue, oldValue) {
                this.placesRegionAffiliate = JSON.stringify(newValue);
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Regiony - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Regiony - úprava',
                ogTitle: 'Místa - Regiony - úprava',
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
            const placesRegionIDstate = ref(null)
            const placesRegionIDimageCover = ref(null)
            const placesRegionIDimageHero = ref(null)
            const placesRegionTypePlace = ref('')
            const placesRegionSlug = ref('')
            const placesRegionName = ref('')
            const placesRegionInformationChatgpt = ref('')
            const placesRegionInformationAuthor = ref('')
            const placesRegionInformationAuthorArray = ref([])
            const placesRegionCoordinates = ref('')
            const placesRegionCoordinatesArray = ref([])
            const placesRegionZoom = ref('')
            const placesRegionZoomArray = ref([])
            const placesRegionAffiliate = ref('')
            const placesRegionAffiliateArray = ref([])

            //API - Places Region
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-region/${route.params.slug}`)
                
                const PlacesRegion: PlacesRegion[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesRegion) && PlacesRegion.length > 0) {
                    placesRegionIDstate.value = PlacesRegion[0].id_state;
                    placesRegionIDimageCover.value = PlacesRegion[0].id_image_cover;
                    placesRegionIDimageHero.value = PlacesRegion[0].id_image_hero;
                    placesRegionTypePlace.value = PlacesRegion[0].type_place;
                    placesRegionSlug.value = PlacesRegion[0].slug;
                    placesRegionName.value = PlacesRegion[0].name;
                    placesRegionInformationChatgpt.value = PlacesRegion[0].information_chatgpt;
                    placesRegionInformationAuthor.value = PlacesRegion[0].information_author ? JSON.stringify(PlacesRegion[0].information_author) : JSON.stringify([]);
                    placesRegionCoordinates.value = PlacesRegion[0].coordinates ? JSON.stringify(PlacesRegion[0].coordinates) : JSON.stringify([]);
                    placesRegionZoom.value = PlacesRegion[0].zoom ? JSON.stringify(PlacesRegion[0].zoom) : JSON.stringify([])
                    placesRegionAffiliate.value = PlacesRegion[0].affiliate ? JSON.stringify(PlacesRegion[0].affiliate) : JSON.stringify([])
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-region-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_state': placesRegionIDstate.value,
                            'id_image_cover': placesRegionIDimageCover.value,
                            'id_image_hero': placesRegionIDimageHero.value,
                            'type_place': placesRegionTypePlace.value,
                            'slug': placesRegionSlug.value,
                            'name': placesRegionName.value,
                            'information_chatgpt': placesRegionInformationChatgpt.value,
                            'information_author': JSON.stringify(placesRegionInformationAuthorArray._value),
                            'coordinates': JSON.stringify(placesRegionCoordinatesArray._value),
                            'zoom': JSON.stringify(placesRegionZoomArray._value),
                            'affiliate': JSON.stringify(placesRegionAffiliateArray._value)
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
            return {
                successForm,
                errorForm,
                placesRegionIDstate,
                placesRegionIDimageCover,
                placesRegionIDimageHero,
                placesRegionTypePlace,
                placesRegionSlug,
                placesRegionName,
                placesRegionInformationChatgpt,
                placesRegionInformationAuthor,
                placesRegionInformationAuthorArray,
                placesRegionCoordinates,
                placesRegionCoordinatesArray,
                placesRegionZoom,
                placesRegionZoomArray,
                placesRegionAffiliate,
                placesRegionAffiliateArray,
                editForm
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