<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'Město ' + placesCityName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/svet/mesto/' + placesCitySlug" text="Zobrazit na webu" />

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
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesCityTypePlace" required />
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
                                                <mLabel name="Název státu" nameDB="id_state" perex="" :required=true />
                                                <mInputIDPlaces :value="placesCityIDstate" name="state" type="state" :required=true @id-place="handleIDstate" />
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
                                                <aInputSlug :value="placesCitySlug" :valueCreate="placesCityName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesCityName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name original -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název originál" nameDB="name_original" perex="" :required=true />
                                                <input class="a-input" type="text" name="name_original" v-model="placesCityNameOriginal" required />
                                            </div>
                                            <!-- Form - name original END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <aTextarea :value="placesCityInformationChatgpt" name="information_chatgpt" :required=false @textareaValue="handleInformationChatgpt" />
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesCityInformationAuthor" :inputsMax="1" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - importance -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Významnost" nameDB="importance" perex="" :required=false />
                                                <div class="m-select">
                                                    <select class="m-select__select" name="platform" v-model="placesCityImportance">
                                                        <option :value=null>- Jaká je významnost? -</option>
                                                        <option value="biggest">TOP10 NEJVĚTŠÍ</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- Form - importance END -->
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
                                                <mInputsCoordinates :value="placesCityCoordinates" :inputsMax="1" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesCityZoom" :inputsMax="1" @zoom="handleZoom" />
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
                                                <mInputsAlerts :value="placesCityAlerts" @alerts="handleAlerts" />
                                            </div>
                                            <!-- Form - alerts(JSON) END -->
                                            <!-- Form - parking(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Parkování" nameDB="parking" perex="" :required=false />
                                                <mInputsParking :value="placesCityParking" @parking="handleParking" />
                                            </div>
                                            <!-- Form - parking(JSON) END -->
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
    import mInputsAlerts from '@/components/molecules/mInputsAlerts.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsInformationAuthor from '@/components/molecules/mInputsInformationAuthor.vue'
    import mInputsParking from '@/components/molecules/mInputsParking.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
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

    interface Alerts {
        name: string
        text: string
        type: string
        date_start: string
        date_end: string
        author: number
        author_update: number
        date_create: string
        date_update: string
    }

    interface Parking {
        url: string
        name: string
        price: string
        pay_time: string
        description: string
        author: string
        author_update: string
        date: string
        date_update: string
    }

    interface seoTags {
        tag: string
    }

    interface PlacesCity {
        id: number
        created_at: string
        updated_at: string
        id_state: number
        id_image_cover: number
        id_image_hero: number
        importance: string
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        population: string
        area: string
        altitude: string
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        alerts: Alerts[]
        parking: Parking[]
        setting_top: boolean
    }

    export default defineComponent({
        name: 'AdminPlacesCitiesSlugPage',

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
            mInputsAlerts,
            mInputsCoordinates,
            mInputsInformationAuthor,
            mInputsParking,
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
                        name: `Editace města - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesCityName = this.placesCityName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace města - ${placesCityName}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesCitySlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.placesCityIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.placesCityIDimageHero = newImage
            },
            handleIDstate(newIDstate: number) {
                this.placesCityIDstate = newIDstate
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
            },
            handleInformationChatgpt(newInformationChatgpt: string) {
                this.placesCityInformationChatgpt = newInformationChatgpt
            },
            handleInformationAuthor(newInformationAuthor: string) {
                this.placesCityInformationAuthor = JSON.stringify(newInformationAuthor)
            },
            handleAlerts(newAlerts: string) {
                this.placesCityAlerts = JSON.stringify(newAlerts)
            },
            handleParking(newParking: string) {
                this.placesCityParking = JSON.stringify(newParking)
            },
            handleSettingTop(newSettingTop: boolean) {
                this.settingTop = newSettingTop
            }
        },

        watch: {
            placesCityName: function (newValue, oldValue) {
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
                title: 'Místa - Města - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Města - úprava',
                ogTitle: 'Místa - Města - úprava',
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
            const placesCityIDstate = ref<number | null>(null)
            const placesCityIDimageCover = ref<number | null>(null)
            const placesCityIDimageHero = ref<number | null>(null)
            const placesCityImportance = ref('')
            const placesCityTypePlace = ref('city')
            const placesCitySlug = ref('')
            const placesCityName = ref('')
            const placesCityNameOriginal = ref('')
            const placesCityInformationChatgpt = ref('')
            const placesCityInformationAuthor = ref<never[] | string[]>([])
            const placesCityPopulation = ref<number | null>(null)
            const placesCityArea = ref<number | null>(null)
            const placesCityAltitude = ref<number | null>(null)
            const placesCitySeoTags = ref<never[] | string[]>([])
            const placesCityCoordinates = ref<never[] | string[]>([])
            const placesCityZoom = ref<never[] | string[]>([])
            const placesCityAffiliate = ref<never[] | string[]>([])
            const placesCityAlerts = ref<never[] | string[]>([])
            const placesCityParking = ref<never[] | string[]>([])
            const settingTop = ref<boolean | null>(null)

            //API - Places City
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/places-city/${route.params.slug}?admin=true`)
                const dataAPI: any = data._rawValue
                
                const PlacesCity: PlacesCity[] = JSON.parse(dataAPI)
                
                if (Array.isArray(PlacesCity) && PlacesCity.length > 0) {
                    itemID.value = PlacesCity[0].id
                    createdAt.value = PlacesCity[0].created_at
                    updatedAt.value = PlacesCity[0].updated_at
                    placesCityIDstate.value = PlacesCity[0].id_state
                    placesCityIDimageCover.value = PlacesCity[0].id_image_cover
                    placesCityIDimageHero.value = PlacesCity[0].id_image_hero
                    placesCityImportance.value = PlacesCity[0].importance
                    placesCityTypePlace.value = PlacesCity[0].type_place
                    placesCitySlug.value = PlacesCity[0].slug
                    placesCityName.value = PlacesCity[0].name
                    placesCityNameOriginal.value = PlacesCity[0].name_original
                    placesCityInformationChatgpt.value = PlacesCity[0].information_chatgpt
                    placesCityInformationAuthor.value = PlacesCity[0].information_author ? JSON.stringify(PlacesCity[0].information_author) : JSON.stringify([])
                    placesCityPopulation.value = PlacesCity[0].population
                    placesCityArea.value = PlacesCity[0].area
                    placesCityAltitude.value = PlacesCity[0].altitude
                    placesCitySeoTags.value = PlacesCity[0].seo_tags ? JSON.stringify(PlacesCity[0].seo_tags) : JSON.stringify([])
                    placesCityCoordinates.value = PlacesCity[0].coordinates ? JSON.stringify(PlacesCity[0].coordinates) : JSON.stringify([])
                    placesCityZoom.value = PlacesCity[0].zoom ? JSON.stringify(PlacesCity[0].zoom) : JSON.stringify([])
                    placesCityAffiliate.value = PlacesCity[0].affiliate ? JSON.stringify(PlacesCity[0].affiliate) : JSON.stringify([])
                    placesCityAlerts.value = PlacesCity[0].alerts ? JSON.stringify(PlacesCity[0].alerts) : JSON.stringify([])
                    placesCityParking.value = PlacesCity[0].parking ? JSON.stringify(PlacesCity[0].parking) : JSON.stringify([])
                    settingTop.value = PlacesCity[0].setting_top
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/places-city-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'id_state': placesCityIDstate.value,
                            'id_image_cover': placesCityIDimageCover.value,
                            'id_image_hero': placesCityIDimageHero.value,
                            'importance': placesCityImportance.value,
                            'type_place': placesCityTypePlace.value,
                            'slug': placesCitySlug.value,
                            'name': placesCityName.value,
                            'name_original': placesCityNameOriginal.value,
                            'information_chatgpt': placesCityInformationChatgpt.value,
                            'information_author': placesCityInformationAuthor.value,
                            'population': placesCityPopulation.value,
                            'area': placesCityArea.value,
                            'altitude': placesCityAltitude.value,
                            'seo_tags': placesCitySeoTags.value,
                            'coordinates': placesCityCoordinates.value,
                            'zoom': placesCityZoom.value,
                            'affiliate': placesCityAffiliate.value,
                            'alerts': placesCityAlerts.value,
                            'parking': placesCityParking.value,
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
                placesCitySeoTags,
                placesCityIDstate,
                placesCityIDimageCover,
                placesCityIDimageHero,
                placesCityImportance,
                placesCityTypePlace,
                placesCitySlug,
                placesCityName,
                placesCityNameOriginal,
                placesCityInformationChatgpt,
                placesCityInformationAuthor,
                placesCityPopulation,
                placesCityArea,
                placesCityAltitude,
                placesCityCoordinates,
                placesCityZoom,
                placesCityAffiliate,
                placesCityAlerts,
                placesCityParking,
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