<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Událost ' + eventName" />
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
                                            <input class="a-input" type="text" name="slug" v-model="eventSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="eventIDstate" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Regionu <span class="m-label__name-column">(id_region)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="region" v-model="eventIDregion" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Města <span class="m-label__name-column">(id_city)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="city" v-model="eventIDcity" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Místa <span class="m-label__name-column">(id_spot)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="spot" v-model="eventIDspot" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="eventIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="eventIDimageHero" />
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum začátku události <span class="m-label__name-column">(date_start)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="dateStart" v-model="eventDateStart" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum konce události <span class="m-label__name-column">(date_end)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="dateEnd" v-model="eventDateEnd" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="eventName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="eventDescription"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice místa konání <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in eventCoordinatesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Latitude:</label>
                                                                <input class="a-input" type="text" v-model="item.latitude" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Longitude:</label>
                                                                <input class="a-input" type="text" v-model="item.longitude" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnici</button>
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
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in eventZoomArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Google:</label>
                                                                <input class="a-input" type="text" v-model="item.google" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Booking:</label>
                                                                <input class="a-input" type="text" v-model="item.booking" />
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
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in eventAffiliateArray" :key="index">
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
                                                            <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affiliate</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Ceny <span class="m-label__name-column">(prices)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in eventPricesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removePriceInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Perex:</label>
                                                                <input class="a-input" type="text" v-model="item.perex" />
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
                                                            <button class="m-button-add__input" type="button" @click="addPriceInput">Přidat cenu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkazy <span class="m-label__name-column">(links)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in eventLinksArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeLinkInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Link:</label>
                                                                <input class="a-input" type="text" v-model="item.link" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addLinkInput">Přidat odkaz</button>
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

    interface Prices {
        name: string
        perex: string
        value: string
    }

    interface Links {
        name: string
        link: string
    }

    interface Event {
        id_state: number
        id_region: number
        id_city: number
        id_spot: number
        id_image_cover: number
        id_image_hero: number
        date_start: string
        date_end: string
        slug: string
        name: string
        description: string
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        prices: Prices[]
        links: Links[]
    }

    export default defineComponent({
        name: 'AdminPlacesCitiesSlugPage',

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
                        name: "Událost",
                        url: "/admin/events",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace události - NÁZEV UDÁLOSTI`,
                        url: "",
                        status: "span"
                    }
                ],
                eventCoordinatesArray: [],
                eventZoomArray: [],
                eventAffiliateArray: [],
                eventPricesArray: [],
                eventLinksArray: [],
            }
        },

        methods: {
            updateBreadcrumbs() {
                const eventName = this.eventName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace UDÁLOSTI - ${eventName}`
                }
            },
            // coordinates
            addCoordinateInput() {
                this.eventCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.eventCoordinatesArray.splice(index, 1);
            },
            // zoom
            addZoomInput() {
                this.eventZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.eventZoomArray.splice(index, 1);
            },
            // affiliate
            addAffiliateInput() {
                this.eventAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.eventAffiliateArray.splice(index, 1);
            },
            // prices
            addPriceInput() {
                this.eventPricesArray.push({
                    name: '',
                    perex: '',
                    value: ''
                });
            },
            removePriceInput(index: number) {
                this.eventPricesArray.splice(index, 1);
            },
            // links
            addLinkInput() {
                this.eventLinksArray.push({
                    name: '',
                    link: ''
                });
            },
            removeLinkInput(index: number) {
                this.eventLinksArray.splice(index, 1);
            }
        },

        watch: {
            eventName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            eventCoordinates: function (newValue, oldValue) {
                try {
                    this.eventCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventCoordinatesArray = [];
                }
            },
            eventCoordinatesArray: function (newValue, oldValue) {
                this.eventCoordinates = JSON.stringify(newValue);
            },
            eventZoom: function (newValue, oldValue) {
                try {
                    this.eventZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventZoomArray = [];
                }
            },
            eventZoomArray: function (newValue, oldValue) {
                this.eventZoom = JSON.stringify(newValue);
            },
            eventAffiliate: function (newValue, oldValue) {
                try {
                    this.eventAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventAffiliateArray = [];
                }
            },
            eventAffiliateArray: function (newValue, oldValue) {
                this.eventAffiliate = JSON.stringify(newValue);
            },
            eventPrices: function (newValue, oldValue) {
                try {
                    this.eventPricesArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventPricesArray = [];
                }
            },
            eventPricesArray: function (newValue, oldValue) {
                this.eventPrices = JSON.stringify(newValue);
            },
            eventLinks: function (newValue, oldValue) {
                try {
                    this.eventLinksArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventLinksArray = [];
                }
            },
            eventLinksArray: function (newValue, oldValue) {
                this.eventLinks = JSON.stringify(newValue);
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Události - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Události - úprava',
                ogTitle: 'Události - úprava',
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
            const eventIDstate = ref(null)
            const eventIDregion = ref(null)
            const eventIDcity = ref(null)
            const eventIDspot = ref(null)
            const eventIDimageCover = ref(null)
            const eventIDimageHero = ref(null)
            const eventDateStart = ref('')
            const eventDateEnd = ref('')
            const eventSlug = ref('')
            const eventName = ref('')
            const eventDescription = ref('')
            const eventCoordinates = ref('')
            const eventCoordinatesArray = ref([])
            const eventZoom = ref('')
            const eventZoomArray = ref([])
            const eventAffiliate = ref('')
            const eventAffiliateArray = ref([])
            const eventPrices = ref('')
            const eventPricesArray = ref([])
            const eventLinks = ref('')
            const eventLinksArray = ref([])

            //API - Event
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/event/${route.params.slug}`)
                
                const Event: Event[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Event) && Event.length > 0) {
                    eventIDstate.value = Event[0].id_state;
                    eventIDregion.value = Event[0].id_region;
                    eventIDcity.value = Event[0].id_city;
                    eventIDspot.value = Event[0].id_spot;
                    eventIDimageCover.value = Event[0].id_image_cover;
                    eventIDimageHero.value = Event[0].id_image_hero;
                    eventDateStart.value = Event[0].date_start;
                    eventDateEnd.value = Event[0].date_end;
                    eventSlug.value = Event[0].slug;
                    eventName.value = Event[0].name;
                    eventDescription.value = Event[0].description;
                    eventCoordinates.value = Event[0].coordinates ? JSON.stringify(Event[0].coordinates) : JSON.stringify([]);
                    eventZoom.value = Event[0].zoom ? JSON.stringify(Event[0].zoom) : JSON.stringify([]);
                    eventAffiliate.value = Event[0].affiliate ? JSON.stringify(Event[0].affiliate) : JSON.stringify([]);
                    eventPrices.value = Event[0].prices ? JSON.stringify(Event[0].prices) : JSON.stringify([]);
                    eventLinks.value = Event[0].links ? JSON.stringify(Event[0].links) : JSON.stringify([]);
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/event-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_state': eventIDstate.value,
                            'id_region': eventIDregion.value,
                            'id_city': eventIDcity.value,
                            'id_spot': eventIDspot.value,
                            'id_image_cover': eventIDimageCover.value,
                            'id_image_hero': eventIDimageHero.value,
                            'date_start': eventDateStart.value,
                            'date_end': eventDateEnd.value,
                            'slug': eventSlug.value,
                            'name': eventName.value,
                            'description': eventDescription.value,
                            'coordinates': JSON.stringify(eventCoordinatesArray._value),
                            'zoom': JSON.stringify(eventZoomArray._value),
                            'affiliate': JSON.stringify(eventAffiliateArray._value),
                            'prices': JSON.stringify(eventPricesArray._value),
                            'links': JSON.stringify(eventLinksArray._value)
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
                eventIDstate,
                eventIDregion,
                eventIDcity,
                eventIDspot,
                eventIDimageCover,
                eventIDimageHero,
                eventDateStart,
                eventDateEnd,
                eventSlug,
                eventName,
                eventDescription,
                eventCoordinates,
                eventCoordinatesArray,
                eventZoom,
                eventZoomArray,
                eventAffiliate,
                eventAffiliateArray,
                eventPrices,
                eventPricesArray,
                eventLinks,
                eventLinksArray,
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