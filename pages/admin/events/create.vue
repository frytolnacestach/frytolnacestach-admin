<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nové události" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-item__form" @submit.prevent="createForm">
                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="eventIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="eventIDimageHero" @image="handleImageHero" />
                                            </div>
                                            <!-- Form - id_image_hero END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Obrázky END -->

                                    <!-- BLOCK - SEO -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="SEO" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - seo_tags -->
                                            <div class="o-form-item__item">
                                                <mLabel name="SEO Tagy" nameDB="seo_tags" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventSeoTagsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Tag:</label>
                                                                    <input class="a-input" type="text" v-model="item.tag" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - seo_tags END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - SEO END -->

                                    <!-- BLOCK - Geolokační umístění -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Geolokační umístění" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="state" v-model="eventIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Regionu" nameDB="id_region" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="region" v-model="eventIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Města" nameDB="id_city" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="city" v-model="eventIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Místa" nameDB="id_spot" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="spot" v-model="eventIDspot" />
                                            </div>
                                            <!-- Form - id_spot END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Geolokační umístění END -->

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="eventSlug" :valueCreate="eventName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - date_start -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum začátku události" nameDB="date_start" perex="" :required=false />
                                                <input class="a-input" type="text" name="dateStart" v-model="eventDateStart" />
                                            </div>
                                            <!-- Form - date_start END -->
                                            <!-- Form - date_end -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum konce události" nameDB="date_end" perex="" :required=false />
                                                <input class="a-input" type="text" name="dateEnd" v-model="eventDateEnd" />
                                            </div>
                                            <!-- Form - date_end END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="eventName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="description" v-model="eventDescription"></textarea>
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice místa konání" nameDB="coordinates" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventCoordinatesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Latitude:</label>
                                                                    <input class="a-input" type="number" step=".0000001" v-model="item.latitude" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Longitude:</label>
                                                                    <input class="a-input" type="number" step=".0000001" v-model="item.longitude" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnici</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - coordinates(JSON) -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventZoomArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Google:</label>
                                                                    <input class="a-input" type="number" min="0" v-model="item.google" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Booking:</label>
                                                                    <input class="a-input" type="number" min="0" v-model="item.booking" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addZoomInput">Přidat zoom</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventAffiliateArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeAffiliateInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Value:</label>
                                                                    <input class="a-input" type="text" v-model="item.value" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affiliate</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ceny" nameDB="prices" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventPricesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removePriceInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Perex:</label>
                                                                    <input class="a-input" type="text" v-model="item.perex" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Value:</label>
                                                                    <input class="a-input" type="text" v-model="item.value" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addPriceInput">Přidat cenu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - prices(JSON) END -->
                                            <!-- Form - links(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkazy" nameDB="links" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventLinksArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeLinkInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Link:</label>
                                                                    <input class="a-input" type="text" v-model="item.link" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addLinkInput">Přidat odkaz</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - links(JSON) END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Přidat událost" />
                                        </div>
                                    </div>
                                    <!-- COMPONENT - Button END -->
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
    import aInputSlug from '@/components/atoms/aInputSlug.vue'
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlacesCitiesCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
            mInputImage,
            mLabel,
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
                        name: "Události",
                        url: "/admin/events",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Přidání nové události",
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
            // seo tags
            addSeoTagsInput() {
                this.eventSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.eventSeoTagsArray.splice(index, 1)
            },
            // coordinates
            addCoordinateInput() {
                this.eventCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                })
            },
            removeCoordinateInput(index: number) {
                this.eventCoordinatesArray.splice(index, 1)
            },
            // zoom
            addZoomInput() {
                this.eventZoomArray.push({
                    google: null,
                    booking: null
                })
            },
            removeZoomInput(index: number) {
                this.eventZoomArray.splice(index, 1)
            },
            // affiliate
            addAffiliateInput() {
                this.eventAffiliateArray.push({
                    name: '',
                    value: true
                })
            },
            removeAffiliateInput(index: number) {
                this.eventAffiliateArray.splice(index, 1)
            },
            // prices
            addPriceInput() {
                this.eventPricesArray.push({
                    name: '',
                    perex: '',
                    value: ''
                })
            },
            removePriceInput(index: number) {
                this.eventPricesArray.splice(index, 1)
            },
            // links
            addLinkInput() {
                this.eventLinksArray.push({
                    name: '',
                    link: ''
                })
            },
            removeLinkInput(index: number) {
                this.eventLinksArray.splice(index, 1)
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.eventSlug = newSlug
            },
            handleImageCover(newImage: string) {
                this.eventIDimageCover = newImage
            },
            handleImageHero(newImage: string) {
                this.eventIDimageHero = newImage
            }
        },

        watch: {
            eventSeoTags: function (newValue, oldValue) {
                try {
                    this.eventSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventSeoTagsArray = []
                }
            },
            eventSeoTagsArray: function (newValue, oldValue) {
                this.eventSeoTags = JSON.stringify(newValue)
            },
            eventCoordinates: function (newValue, oldValue) {
                try {
                    this.eventCoordinatesArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventCoordinatesArray = []
                }
            },
            eventCoordinatesArray: function (newValue, oldValue) {
                this.eventCoordinates = JSON.stringify(newValue)
            },
            eventZoom: function (newValue, oldValue) {
                try {
                    this.eventZoomArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventZoomArray = []
                }
            },
            eventZoomArray: function (newValue, oldValue) {
                this.eventZoom = JSON.stringify(newValue)
            },
            eventAffiliate: function (newValue, oldValue) {
                try {
                    this.eventAffiliateArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventAffiliateArray = []
                }
            },
            eventAffiliateArray: function (newValue, oldValue) {
                this.eventAffiliate = JSON.stringify(newValue)
            },
            eventPrices: function (newValue, oldValue) {
                try {
                    this.eventPricesArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventPricesArray = []
                }
            },
            eventPricesArray: function (newValue, oldValue) {
                this.eventPrices = JSON.stringify(newValue)
            },
            eventLinks: function (newValue, oldValue) {
                try {
                    this.eventLinksArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventLinksArray = []
                }
            },
            eventLinksArray: function (newValue, oldValue) {
                this.eventLinks = JSON.stringify(newValue)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Události - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Události - vytvoření',
                ogTitle: 'Události - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
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
            const eventSeoTags = ref([])
            const eventSeoTagsArray = ref([])
            const eventCoordinates = ref([])
            const eventCoordinatesArray = ref([])
            const eventZoom = ref([])
            const eventZoomArray = ref([])
            const eventAffiliate = ref([])
            const eventAffiliateArray = ref([])
            const eventPrices = ref([])
            const eventPricesArray = ref([])
            const eventLinks = ref([])
            const eventLinksArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/event-create`, {
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
                            'seo_tags': JSON.stringify(eventSeoTagsArray._value),
                            'coordinates': JSON.stringify(eventCoordinatesArray._value),
                            'zoom': JSON.stringify(eventZoomArray._value),
                            'affiliate': JSON.stringify(eventAffiliateArray._value),
                            'prices': JSON.stringify(eventPricesArray._value),
                            'links': JSON.stringify(eventLinksArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/events/${eventSlug.value}`)
                    })
                    .catch((error) => {
                        console.log(error)
                        errorForm.value = "Data nebyla upravena nastala chyba při jejich odeslání"
                    })
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
                eventSeoTags,
                eventSeoTagsArray,
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