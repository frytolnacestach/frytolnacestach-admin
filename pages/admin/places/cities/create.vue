<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového města" />
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
                                    <!-- BLOCK - Stálé hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Stálé hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - type_place -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ místa" nameDB="type_place" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesCityTypePlace" required />
                                            </div>
                                            <!-- Form - type_place END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Stálé hodnoty END -->

                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="placesCityIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="placesCityIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="placesCitySeoTags" @seo-tags="handleSeoTags" />
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
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=true />
                                                <mInputIDPlaces :value="placesCityIDstate" name="state" :required=true @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
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
                                                <aInputSlug :value="placesCitySlug" :valueCreate="placesCityName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - importance -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Významnost" nameDB="importance" perex="" :required=false />
                                                <select class="m-select" name="platform" v-model="placesCityImportance">
                                                    <option :value=null>- Jaká je významnost? -</option>
                                                    <option value="biggest">TOP10 NEJVĚTŠÍ</option>
                                                </select>
                                            </div>
                                            <!-- Form - importance END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesCityName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesCityInformationChatgpt"></textarea>
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityInformationAuthorArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Text:</label>
                                                                    <textarea class="a-textarea" type="text" v-model="item.text"></textarea>
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date create:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_create" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author create:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_create" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author update:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_update" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addInformationAuthorInput">Přidat text</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - population -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Populace" nameDB="population" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="population" v-model="placesCityPopulation" />
                                            </div>
                                            <!-- Form - population END -->
                                            <!-- Form - area -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Rozloha" nameDB="area" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesCityArea" />
                                            </div>
                                            <!-- Form - area END -->
                                            <!-- Form - altitude -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Nadmořská výška" nameDB="altitude" perex="" :required=false />
                                                <input class="a-input" type="number" name="altitude" v-model="placesCityAltitude" />
                                            </div>
                                            <!-- Form - altitude END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="placesCityCoordinates" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesCityZoom" @zoom="handleZoom" />
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <mInputsAffiliate :value="placesCityAffiliate" @affiliate="handleAffiliate" />
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - alerts(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Upozornění" nameDB="alerts" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityAlertsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeAlertInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Text:</label>
                                                                    <input class="a-input" type="text" v-model="item.text" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Type:</label>
                                                                    <input class="a-input" type="text" v-model="item.type" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author:</label>
                                                                    <input class="a-input" type="text" v-model="item.author" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date create:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_create" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date start:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_start" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date end:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_end" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addAlertInput">Přidat upozornění</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - alerts(JSON) END -->
                                            <!-- Form - parking(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Parkování" nameDB="parking" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityParkingArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeParkingInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Description:</label>
                                                                    <input class="a-input" type="text" v-model="item.description" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date:</label>
                                                                    <input class="a-input" type="text" v-model="item.date" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author:</label>
                                                                    <input class="a-input" type="text" v-model="item.author" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author Update:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Pay time:</label>
                                                                    <input class="a-input" type="text" v-model="item.pay_time" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Price:</label>
                                                                    <input class="a-input" type="text" v-model="item.price" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">URL:</label>
                                                                    <input class="a-input" type="text" v-model="item.url" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addParkingInput">Přidat parkování</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - parking(JSON) END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Přidat město" />
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
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsAffiliate from '@/components/molecules/mInputsAffiliate.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsZoom from '@/components/molecules/mInputsZoom.vue'
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
            mInputIDPlaces,
            mInputImage,
            mInputsAffiliate,
            mInputsCoordinates,
            mInputsSeoTags,
            mInputsZoom,
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
                        name: "Místa",
                        url: "/admin/places",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Města",
                        url: "/admin/places/cities",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: "Přidání nového města",
                        url: "",
                        status: "span"
                    }
                ],
                placesCityInformationAuthorArray: [],
                placesCityAlertsArray: [],
                placesCityParkingArray: []
            }
        },

        methods: {
            // information author
            addInformationAuthorInput() {
                this.placesCityInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                })
            },
            removeInformationAuthorInput(index: number) {
                this.placesCityInformationAuthorArray.splice(index, 1)
            },
            // Alerts
            addAlertInput() {
                this.placesCityAlertsArray.push({
                    name: '',
                    text: '',
                    type: '',
                    author: '',
                    date_create: '',
                    date_update: '',
                    date_start: '',
                    date_end: ''
                })
            },
            removeAlertInput(index: number) {
                this.placesCityAlertsArray.splice(index, 1)
            },
            // Parking
            addParkingInput() {
                this.placesCityParkingArray.push({
                    url: '',
                    date: '',
                    name: '',
                    pricE: '',
                    author: '',
                    pay_time: '',
                    date_update: '',
                    description: '',
                    author_update: ''
                })
            },
            removeParkingInput(index: number) {
                this.placesCityParkingArray.splice(index, 1)
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesCitySlug = newSlug
            },
            handleImageCover(newImage: string) {
                this.placesCityIDimageCover = newImage
            },
            handleImageHero(newImage: string) {
                this.placesCityIDimageHero = newImage
            },
            handleIDstate(newImage: string) {
                this.placesCityIDstate = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.placesCitySeoTags = JSON.stringify(newSeoTags)
            },
            handleCoordinates(newCoordinates: string) {
                this.placesCityCoordinates = JSON.stringify(newCoordinates)
            },
            handleZoom(newZoom: string) {
                this.placesCityZoom = JSON.stringify(newZoom)
            },
            handleAffiliate(newAffiliate: string) {
                this.placesCityAffiliate = JSON.stringify(newAffiliate)
            }
        },

        watch: {
            placesCityInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesCityInformationAuthorArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesCityInformationAuthorArray = []
                }
            },
            placesCityAlerts: function (newValue, oldValue) {
                try {
                    this.placesCityAlertsArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesCityAlertsArray = []
                }
            },
            placesCityAlertsArray: function (newValue, oldValue) {
                this.placesCityAlerts = JSON.stringify(newValue)
            },
            placesCityParking: function (newValue, oldValue) {
                try {
                    this.placesCityParkingArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesCityParkingArray = []
                }
            },
            placesCityParkingArray: function (newValue, oldValue) {
                this.placesCityParking = JSON.stringify(newValue)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Města - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Města - vytvoření',
                ogTitle: 'Místa - Města - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesCityIDstate = ref(null)
            const placesCityIDimageCover = ref(null)
            const placesCityIDimageHero = ref(null)
            const placesCityImportance = ref('')
            const placesCityTypePlace = ref('city')
            const placesCitySlug = ref('')
            const placesCityName = ref('')
            const placesCityInformationChatgpt = ref('')
            const placesCityInformationAuthor = ref([])
            const placesCityInformationAuthorArray = ref([])
            const placesCityPopulation = ref(null)
            const placesCityArea = ref(null)
            const placesCityAltitude = ref(null)
            const placesCitySeoTags = ref([])
            const placesCityCoordinates = ref([])
            const placesCityZoom = ref([])
            const placesCityAffiliate = ref([])
            const placesCityAlerts = ref([])
            const placesCityAlertsArray = ref([])
            const placesCityParking = ref([])
            const placesCityParkingArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-city-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_state': placesCityIDstate.value,
                            'id_image_cover': placesCityIDimageCover.value,
                            'id_image_hero': placesCityIDimageHero.value,
                            'importance': placesCityImportance.value,
                            'type_place': placesCityTypePlace.value,
                            'slug': placesCitySlug.value,
                            'name': placesCityName.value,
                            'information_chatgpt': placesCityInformationChatgpt.value,
                            'information_author': JSON.stringify(placesCityInformationAuthorArray._value),
                            'population': placesCityPopulation.value,
                            'area': placesCityArea.value,
                            'altitude': placesCityAltitude.value,
                            'seo_tags': placesCitySeoTags._value,
                            'coordinates': placesCityCoordinates._value,
                            'zoom': placesCityZoom._value,
                            'affiliate': placesCityAffiliate._value,
                            'alerts': JSON.stringify(placesCityAlertsArray._value),
                            'parking': JSON.stringify(placesCityParkingArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/cities/${placesCitySlug.value}`)
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
                placesCityIDstate,
                placesCityIDimageCover,
                placesCityIDimageHero,
                placesCityImportance,
                placesCityTypePlace,
                placesCitySlug,
                placesCityName,
                placesCityInformationChatgpt,
                placesCityInformationAuthor,
                placesCityInformationAuthorArray,
                placesCityPopulation,
                placesCityArea,
                placesCityAltitude,
                placesCitySeoTags,
                placesCityCoordinates,
                placesCityZoom,
                placesCityAffiliate,
                placesCityAlerts,
                placesCityAlertsArray,
                placesCityParking,
                placesCityParkingArray,
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