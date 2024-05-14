<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'Místo ' + placesSpotName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/svet/misto/' + placesSpotSlug" text="Zobrazit na webu" />

                    <form class="o-form-item" @submit.prevent="editForm">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form" v-if="loadingData">
                                    <!-- BLOCK - Needitační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Needitační hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
                                            <!-- Form - created_at -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="created_at" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="createdAt" v-model="createdAt" required />
                                            </div>
                                            <!-- Form - created_at END -->
                                            <!-- Form - updated_at -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum úpravy" nameDB="updated_at" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="updatedAt" v-model="updatedAt" required />
                                            </div>
                                            <!-- Form - updated_at END -->
                                            <!-- Form - type_place -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ místa" nameDB="type_place" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesSpotTypePlace" required />
                                            </div>
                                            <!-- Form - type_place END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Needitační hodnoty END -->

                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="placesSpotIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="placesSpotIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="placesSpotSeoTags" @seo-tags="handleSeoTags" />
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
                                                <mLabel name="Název státu" nameDB="id_state" perex="" :required=true />
                                                <mInputIDPlaces :value="placesSpotIDstate" name="state" type="state" :required=true @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název města" nameDB="id_city" perex="" :required=true />
                                                <mInputIDPlaces :value="placesSpotIDcity" name="city" type="city" :required=true @id-place="handleIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
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
                                                <aInputSlug :value="placesSpotSlug" :valueCreate="placesSpotName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesSpotName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name original -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název originál" nameDB="name_original" perex="" :required=true />
                                                <input class="a-input" type="text" name="name_original" v-model="placesSpotNameOriginal" required />
                                            </div>
                                            <!-- Form - name original END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <aTextarea :value="placesSpotInformationChatgpt" name="information_chatgpt" :required=false @textareaValue="handleInformationChatgpt" />
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesSpotInformationAuthor" :inputsMax="1" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - information_duration(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace o časové náročnosti" nameDB="information_duration" perex="" :required=false />
                                                <mInputsInformationDuration :value="placesSpotInformationDuration" @information-duration="handleInformationDuration" />
                                            </div>
                                            <!-- Form - information_duration(JSON) END -->
                                            <!-- Form - type_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ místa" nameDB="type_spot" perex="" :required=false />
                                                <mInputsTypeSpot :value="placesSpotTypeSpot" @type-spot="handleTypeSpot" />
                                            </div>
                                            <!-- Form - type_spot END -->
                                            <!-- Form - altitude -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Nadmořská výška" nameDB="altitude" perex="" :required=false />
                                                <input class="a-input" type="number" name="altitude" v-model="placesSpotAltitude" />
                                            </div>
                                            <!-- Form - altitude END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="placesSpotCoordinates" :inputsMax="1" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesSpotZoom" :inputsMax="1" @zoom="handleZoom" />
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <mInputsAffiliate :value="placesSpotAffiliate" @affiliate="handleAffiliate" />
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - setting_top -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Patří mezi důležité?" nameDB="setting_top" perex="" :required=false />
                                                <mInputCheckbox :value="settingTop" :inputsMax="1" @checkbox-value="handleSettingTop" />
                                            </div>
                                            <!-- Form - setting_top END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->
                                </div>
                                <!-- FORM END -->
                            </div>
                        </div>
                        <!-- COMPONENT - Button -->
                        <div class="o-form-item__buttons">
                            <div class="o-form-item__button">
                                <mButtonForm text="Uložit úpravy" />
                            </div>
                        </div>
                        <!-- COMPONENT - Button END -->
                    </form>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import aInputSlug from '@/components/atoms/aInputSlug.vue'
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButtonForm from '@/components/molecules/mButtonForm.vue'
    import mButtonWeb from '@/components/molecules/mButtonWeb.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputCheckbox from '@/components/molecules/mInputCheckbox.vue'
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsAffiliate from '@/components/molecules/mInputsAffiliate.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsInformationAuthor from '@/components/molecules/mInputsInformationAuthor.vue'
    import mInputsInformationDuration from '@/components/molecules/mInputsInformationDuration.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsTypeSpot from '@/components/molecules/mInputsTypeSpot.vue'
    import mInputsZoom from '@/components/molecules/mInputsZoom.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface InformationAuthor {
        text: string
        author_create: string
        author_update: string
        date_create: string
        date_update: string
    }

    interface InformationDurationHeadline {
        title: string
        perex: string
    }

    interface InformationDurationTimes {
        name: string
        subname: string
        value: string
    }

    interface InformationDuration {
        headline: InformationDurationHeadline[]
        times: InformationDurationTimes[]
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

    interface seoTags {
        tag: string
    }

    interface typeSpot {
        type: string
    }

    interface PlacesSpot {
        id: number
        created_at: string
        updated_at: string
        id_state: number
        id_city: number
        id_image_cover: number
        id_image_hero: number
        type_place: string
        type_spot: typeSpot[]
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        information_duration: InformationDuration[]
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        altitude: string
        setting_top: boolean
    }

    export default defineComponent({
        name: 'AdminPlacesSpotsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
            mHeadlineForm,
            mInputCheckbox,
            mInputIDPlaces,
            mInputImage,
            mInputsAffiliate,
            mInputsCoordinates,
            mInputsInformationAuthor,
            mInputsInformationDuration,
            mInputsSeoTags,
            mInputsTypeSpot,
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
                        name: "Místo",
                        url: "/admin/places/Spots",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: `Editace státu - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesSpotName = this.placesSpotName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace místa - ${placesSpotName}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesSpotSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.placesSpotIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.placesSpotIDimageHero = newImage
            },
            handleIDcity(newIDcity: number) {
                this.placesSpotIDcity = newIDcity
            },
            handleIDstate(newIDstate: number) {
                this.placesSpotIDstate = newIDstate
            },
            handleSeoTags(newSeoTags: string) {
                this.placesSpotSeoTags = JSON.stringify(newSeoTags)
            },
            handleCoordinates(newCoordinates: string) {
                this.placesSpotCoordinates = JSON.stringify(newCoordinates)
            },
            handleZoom(newZoom: string) {
                this.placesSpotZoom = JSON.stringify(newZoom)
            },
            handleTypeSpot(newTypeSpot: string) {
                this.placesSpotTypeSpot = JSON.stringify(newTypeSpot)
            },
            handleAffiliate(newAffiliate: string) {
                this.placesSpotAffiliate = JSON.stringify(newAffiliate)
            },
            handleInformationChatgpt(newInformationChatgpt: string) {
                this.placesSpotInformationChatgpt = newInformationChatgpt
            },
            handleInformationAuthor(newInformationAuthor: string) {
                this.placesSpotInformationAuthor = JSON.stringify(newInformationAuthor)
            },
            handleInformationDuration(newInformationDuration: string) {
                this.placesSpotInformationDuration = JSON.stringify(newInformationDuration)
            },
            handleSettingTop(newSettingTop: boolean) {
                this.settingTop = newSettingTop
            }
        },

        watch: {
            placesSpotName: function (newValue, oldValue) {
                this.updateBreadcrumbs()
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Místa - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Místa - úprava',
                ogTitle: 'Místa - Místa - úprava',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            // route
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            // message
            const errorForm = ref('')
            const successForm = ref('')
            // variable
            const loadingData = ref(false)
            // date
            const itemID = ref<number | null>(null)
            const createdAt = ref('')
            const updatedAt = ref('')
            const placesSpotIDstate = ref<number | null>(null)
            const placesSpotIDcity = ref<number | null>(null)
            const placesSpotIDimageCover = ref<number | null>(null)
            const placesSpotIDimageHero = ref<number | null>(null)
            const placesSpotTypePlace = ref('spot')
            const placesSpotTypeSpot = ref('')
            const placesSpotSlug = ref('')
            const placesSpotName = ref('')
            const placesSpotNameOriginal = ref('')
            const placesSpotInformationChatgpt = ref('')
            const placesSpotInformationAuthor = ref<never[] | string[]>([])
            const placesSpotInformationDuration = ref<never[] | string[]>([])
            const placesSpotInformationDurationTimes = ref<never[] | string[]>([])
            const placesSpotAltitude = ref<number | null>(null)
            const placesSpotSeoTags = ref<never[] | string[]>([])
            const placesSpotCoordinates = ref<never[] | string[]>([])
            const placesSpotZoom = ref<never[] | string[]>([])
            const placesSpotAffiliate = ref<never[] | string[]>([])
            const settingTop = ref<boolean | null>(null)

            //API - Places Spot
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/places-spot/${route.params.slug}?admin=true`)
                const dataAPI: any = data._rawValue
                
                const PlacesSpot: PlacesSpot[] = JSON.parse(dataAPI)
                
                if (Array.isArray(PlacesSpot) && PlacesSpot.length > 0) {
                    itemID.value = PlacesSpot[0].id
                    createdAt.value = PlacesSpot[0].created_at
                    updatedAt.value = PlacesSpot[0].updated_at
                    placesSpotIDstate.value = PlacesSpot[0].id_state
                    placesSpotIDcity.value = PlacesSpot[0].id_city
                    placesSpotIDimageCover.value = PlacesSpot[0].id_image_cover
                    placesSpotIDimageHero.value = PlacesSpot[0].id_image_hero
                    placesSpotTypePlace.value = PlacesSpot[0].type_place
                    placesSpotTypeSpot.value = PlacesSpot[0].type_spot ? JSON.stringify(PlacesSpot[0].type_spot) : JSON.stringify([])
                    placesSpotSlug.value = PlacesSpot[0].slug
                    placesSpotName.value = PlacesSpot[0].name
                    placesSpotNameOriginal.value = PlacesSpot[0].name_original
                    placesSpotInformationChatgpt.value = PlacesSpot[0].information_chatgpt
                    placesSpotInformationAuthor.value = PlacesSpot[0].information_author ? JSON.stringify(PlacesSpot[0].information_author) : JSON.stringify([])
                    placesSpotInformationDuration.value = PlacesSpot[0].information_duration ? JSON.stringify(PlacesSpot[0].information_duration) : JSON.stringify([])
                    placesSpotInformationDurationTimes.value = PlacesSpot[0].information_duration && PlacesSpot[0].information_duration.times ? JSON.stringify(PlacesSpot[0].information_duration.times) : JSON.stringify([])
                    placesSpotAltitude.value = PlacesSpot[0].altitude
                    placesSpotSeoTags.value = PlacesSpot[0].seo_tags ? JSON.stringify(PlacesSpot[0].seo_tags) : JSON.stringify([])
                    placesSpotCoordinates.value = PlacesSpot[0].coordinates ? JSON.stringify(PlacesSpot[0].coordinates) : JSON.stringify([])
                    placesSpotZoom.value = PlacesSpot[0].zoom ? JSON.stringify(PlacesSpot[0].zoom) : JSON.stringify([])
                    placesSpotAffiliate.value = PlacesSpot[0].affiliate ? JSON.stringify(PlacesSpot[0].affiliate) : JSON.stringify([])
                    settingTop.value = PlacesSpot[0].setting_top
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/places-spot-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'id_state': placesSpotIDstate.value,
                            'id_city': placesSpotIDcity.value,
                            'id_image_cover': placesSpotIDimageCover.value,
                            'id_image_hero': placesSpotIDimageHero.value,
                            'type_place': placesSpotTypePlace.value,
                            'type_spot': placesSpotTypeSpot.value,
                            'slug': placesSpotSlug.value,
                            'name': placesSpotName.value,
                            'name_original': placesSpotNameOriginal.value,
                            'information_chatgpt': placesSpotInformationChatgpt.value,
                            'information_author': placesSpotInformationAuthor.value,
                            'information_duration': placesSpotInformationDuration.value,
                            'altitude': placesSpotAltitude.value,
                            'seo_tags': placesSpotSeoTags.value,
                            'coordinates': placesSpotCoordinates.value,
                            'zoom': placesSpotZoom.value,
                            'affiliate': placesSpotAffiliate.value,
                            'setting_top': settingTop.value,
                            'setting_status_public': 1
                        })
                    })
                    // response
                    if (response.ok) {
                        successForm.value = "Data byla upravena."
                    } else if (response.status === 500) {
                        errorForm.value = "Nastala chyba a data nebyla upravena."
                    }
                } catch (err) {
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return {
                successForm,
                errorForm,
                loadingData,
                itemID,
                createdAt,
                updatedAt,
                placesSpotSeoTags,
                placesSpotIDstate,
                placesSpotIDcity,
                placesSpotIDimageCover,
                placesSpotIDimageHero,
                placesSpotTypePlace,
                placesSpotTypeSpot,
                placesSpotSlug,
                placesSpotName,
                placesSpotNameOriginal,
                placesSpotInformationChatgpt,
                placesSpotInformationAuthor,
                placesSpotInformationDuration,
                placesSpotInformationDurationTimes,
                placesSpotAltitude,
                placesSpotCoordinates,
                placesSpotZoom,
                placesSpotAffiliate,
                settingTop,
                editForm
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