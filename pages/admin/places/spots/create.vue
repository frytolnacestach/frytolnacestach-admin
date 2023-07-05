<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového místa" />
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
                                            <input class="a-input" type="text" name="slug" v-model="placesSpotSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="placesSpotIDstate" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Města <span class="m-label__name-column">(id_city)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="city" v-model="placesSpotIDcity" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="placesSpotIDimageCover" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="placesSpotIDimageHero" />
                                        </div>
                                        <!-- other --> 
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="typePlace" v-model="placesSpotTypePlace" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesSpotName" required />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od Chat GPT <span class="m-label__name-column">(information_chatgpt)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesSpotInformationChatgpt"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Nadmořská výška <span class="m-label__name-column">(altitude)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="altitude" v-model="placesSpotAltitude" />
                                        </div>  
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in placesSpotCoordinatesArray" :key="index">
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
                                                            <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnice</button>
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
                                                    <div class="o-form-create__group-item" v-for="(item, index) in placesSpotZoomArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Google:</label>
                                                                <input class="a-input" type="number" v-model="item.google" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Booking:</label>
                                                                <input class="a-input" type="number" v-model="item.booking" />
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
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate <span class="m-label__name-column">(affiliate)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in placesSpotAffiliateArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeAffiliateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Value:</label>
                                                                <input class="a-input" type="text" v-model="item.value" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-create__buttons mt-1">
                                                    <div class="o-form-create__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affileate</button>
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
                                                <button class="m-button__input" type="submit">Vytvořit místo</button>
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
        name: 'AdminPlacesSpotsCreatePage',

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
                        name: "Místa",
                        url: "/admin/places/spots",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: "Přidání nového místa",
                        url: "",
                        status: "span"
                    }
                ],
                placesSpotCoordinatesArray: [],
                placesSpotZoomArray: [],
                placesSpotAffiliateArray: []
            }
        },

        methods: {
            // coordinates
            addCoordinateInput() {
                this.placesSpotCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesSpotCoordinatesArray.splice(index, 1);
            },
            // Zoom
            addZoomInput() {
                this.placesSpotZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesSpotZoomArray.splice(index, 1);
            },
            // Affiliate
            addAffiliateInput() {
                this.placesSpotAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.placesSpotAffiliateArray.splice(index, 1);
            },
        },

        watch: {
            placesSpotCoordinates: function (newValue, oldValue) {
                try {
                    this.placesSpotCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotCoordinatesArray = [];
                }
            },
            placesSpotCoordinatesArray: function (newValue, oldValue) {
                this.placesSpotCoordinates = JSON.stringify(newValue);
            },
            placesSpotZoom: function (newValue, oldValue) {
                try {
                    this.placesSpotZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotZoomArray = [];
                }
            },
            placesSpotZoomArray: function (newValue, oldValue) {
                this.placesSpotZoom = JSON.stringify(newValue);
            },
            placesSpotAffiliate: function (newValue, oldValue) {
                try {
                    this.placesSpotAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotAffiliateArray = [];
                }
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Místa - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Místa - vytvoření',
                ogTitle: 'Místa - Místa - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesSpotIDstate = ref(null)
            const placesSpotIDcity = ref(null)
            const placesSpotIDimageCover = ref(null)
            const placesSpotIDimageHero = ref(null)
            const placesSpotTypePlace = ref('')
            const placesSpotSlug = ref('')
            const placesSpotName = ref('')
            const placesSpotInformationChatgpt = ref('')
            const placesSpotAltitude = ref('')
            const placesSpotCoordinates = ref('')
            const placesSpotCoordinatesArray = ref([])
            const placesSpotZoom = ref('')
            const placesSpotZoomArray = ref([])
            const placesSpotAffiliate = ref('')
            const placesSpotAffiliateArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-spot-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_state': placesSpotIDstate.value,
                            'id_city': placesSpotIDcity.value,
                            'id_image_cover': placesSpotIDimageCover.value,
                            'id_image_hero': placesSpotIDimageHero.value,
                            'type_place': placesSpotTypePlace.value,
                            'slug': placesSpotSlug.value,
                            'name': placesSpotName.value,
                            'information_chatgpt': placesSpotInformationChatgpt.value,
                            'altitude': placesSpotAltitude.value,
                            'coordinates': JSON.stringify(placesSpotCoordinatesArray._value),
                            'zoom': JSON.stringify(placesSpotZoomArray._value),
                            'affiliate': JSON.stringify(placesSpotAffiliateArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/spots/${placesSpotSlug.value}`)
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
                placesSpotIDstate,
                placesSpotIDcity,
                placesSpotIDimageCover,
                placesSpotIDimageHero,
                placesSpotTypePlace,
                placesSpotSlug,
                placesSpotName,
                placesSpotInformationChatgpt,
                placesSpotAltitude,
                placesSpotCoordinates,
                placesSpotCoordinatesArray,
                placesSpotZoom,
                placesSpotZoomArray,
                placesSpotAffiliate,
                placesSpotAffiliateArray,
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