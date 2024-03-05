<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'Kontinent ' + placesContinentName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/svet/kontinent/' + placesContinentSlug" text="Zobrazit na webu" />

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
                                                <input class="a-input" type="text" name="typePlace" disabled="true" v-model="placesContinentTypePlace" required />
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
                                                <mInputImage :value="placesContinentIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="placesContinentIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="placesContinentSeoTags" @seo-tags="handleSeoTags" />
                                            </div>
                                            <!-- Form - seo_tags END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - SEO END -->

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="placesContinentSlug" :valueCreate="placesContinentName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesContinentName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name original -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název originál" nameDB="name_original" perex="" :required=true />
                                                <input class="a-input" type="text" name="name_original" v-model="placesContinentNameOriginal" required />
                                            </div>
                                            <!-- Form - name original END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <aTextarea :value="placesContinentInformationChatgpt" name="information_chatgpt" :required=false @textareaValue="handleInformationChatgpt" />
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesContinentInformationAuthor" :inputsMax="1" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - area -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Rozloha" nameDB="area" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesContinentArea" />
                                            </div>
                                            <!-- Form - area END -->
                                            <!-- Form - population -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Populace" nameDB="population" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="population" v-model="placesContinentPopulation" />
                                            </div>
                                            <!-- Form - population END -->
                                            <!-- Form - population_density -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Hustota populace" nameDB="population_density" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="population_density" v-model="placesContinentPopulationDensity" />
                                            </div>
                                            <!-- Form - population_density END -->
                                            <!-- Form - number_states -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Počet států" nameDB="number_states" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="number_states" v-model="placesContinentNumberStates" />
                                            </div>
                                            <!-- Form - number_states END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="placesContinentCoordinates" :inputsMax="1" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesContinentZoom" :inputsMax="1" @zoom="handleZoom" />
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
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
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsInformationAuthor from '@/components/molecules/mInputsInformationAuthor.vue'
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

    interface seoTags {
        tag: string
    }

    interface PlacesContinent {
        id: number
        created_at: string
        updated_at: string
        id_image_cover: number
        id_image_hero: number
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        area: number
        population: number
        population_density: number
        number_states: number
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        setting_top: boolean
    }

    export default defineComponent({
        name: 'AdminPlacesContinetsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
            mHeadlineForm,
            mInputCheckbox,
            mInputImage,
            mInputsCoordinates,
            mInputsInformationAuthor,
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
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesContinentSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.placesContinentIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.placesContinentIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.placesContinentSeoTags = JSON.stringify(newSeoTags)
            },
            handleCoordinates(newCoordinates: string) {
                this.placesContinentCoordinates = JSON.stringify(newCoordinates)
            },
            handleZoom(newZoom: string) {
                this.placesContinentZoom = JSON.stringify(newZoom)
            },
            handleInformationChatgpt(newInformationChatgpt: string) {
                this.placesContinentInformationChatgpt = newInformationChatgpt
            },
            handleInformationAuthor(newInformationAuthor: string) {
                this.placesContinentInformationAuthor = JSON.stringify(newInformationAuthor)
            },
            handleSettingTop(newSettingTop: boolean) {
                this.settingTop = newSettingTop
            }
        },

        watch: {
            placesContinentName: function (newValue, oldValue) {
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
            const placesContinentIDimageCover = ref<number | null>(null)
            const placesContinentIDimageHero = ref<number | null>(null)
            const placesContinentTypePlace = ref('continent')
            const placesContinentSlug = ref('')
            const placesContinentName = ref('')
            const placesContinentNameOriginal = ref('')
            const placesContinentInformationChatgpt = ref('')
            const placesContinentInformationAuthor = ref<never[] | string[]>([])
            const placesContinentArea = ref<number | null>(null)
            const placesContinentPopulation = ref<number | null>(null)
            const placesContinentPopulationDensity = ref<number | null>(null)
            const placesContinentNumberStates = ref<number | null>(null)
            const placesContinentSeoTags = ref<never[] | string[]>([])
            const placesContinentCoordinates = ref<never[] | string[]>([])
            const placesContinentZoom = ref<never[] | string[]>([])
            const settingTop = ref<boolean | null>(null)

            //API - Places Continent
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/places-continent/${route.params.slug}?admin=true`)
                const dataAPI: any = data._rawValue
                
                const PlacesContinent: PlacesContinent[] = JSON.parse(dataAPI)
                
                if (Array.isArray(PlacesContinent) && PlacesContinent.length > 0) {
                    itemID.value = PlacesContinent[0].id
                    createdAt.value = PlacesContinent[0].created_at
                    updatedAt.value = PlacesContinent[0].updated_at
                    placesContinentIDimageCover.value = PlacesContinent[0].id_image_cover
                    placesContinentIDimageHero.value = PlacesContinent[0].id_image_hero
                    placesContinentTypePlace.value = PlacesContinent[0].type_place
                    placesContinentSlug.value = PlacesContinent[0].slug
                    placesContinentName.value = PlacesContinent[0].name
                    placesContinentNameOriginal.value = PlacesContinent[0].name_original
                    placesContinentInformationChatgpt.value = PlacesContinent[0].information_chatgpt
                    placesContinentInformationAuthor.value = PlacesContinent[0].information_author ? JSON.stringify(PlacesContinent[0].information_author) : JSON.stringify([])
                    placesContinentArea.value = PlacesContinent[0].area
                    placesContinentPopulation.value = PlacesContinent[0].population
                    placesContinentPopulationDensity.value = PlacesContinent[0].population_density
                    placesContinentNumberStates.value = PlacesContinent[0].number_states
                    placesContinentSeoTags.value = PlacesContinent[0].seo_tags ? JSON.stringify(PlacesContinent[0].seo_tags) : JSON.stringify([])
                    placesContinentCoordinates.value = PlacesContinent[0].coordinates ? JSON.stringify(PlacesContinent[0].coordinates) : JSON.stringify([])
                    placesContinentZoom.value = PlacesContinent[0].zoom ? JSON.stringify(PlacesContinent[0].zoom) : JSON.stringify([])
                    settingTop.value = PlacesContinent[0].setting_top
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/places-continent-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'id_image_cover': placesContinentIDimageCover.value,
                            'id_image_hero': placesContinentIDimageHero.value,
                            'type_place': placesContinentTypePlace.value,
                            'slug': placesContinentSlug.value,
                            'name': placesContinentName.value,
                            'name_original': placesContinentNameOriginal.value,
                            'information_chatgpt': placesContinentInformationChatgpt.value,
                            'information_author': placesContinentInformationAuthor.value,
                            'area': placesContinentArea.value,
                            'population': placesContinentPopulation.value,
                            'population_density': placesContinentPopulationDensity.value,
                            'number_states': placesContinentNumberStates.value,
                            'seo_tags': placesContinentSeoTags.value,
                            'coordinates': placesContinentCoordinates.value,
                            'zoom': placesContinentZoom.value,
                            'setting_top': settingTop.value,
                            'setting_status_public': 1
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla upravena.')
                        successForm.value = "Data byla upravena."
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla upravena.')
                        errorForm.value = "Nastala chyba a data nebyla upravena."
                    }
                } catch (err) {
                    console.log(err)
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
                placesContinentSeoTags,
                placesContinentIDimageCover,
                placesContinentIDimageHero,
                placesContinentTypePlace,
                placesContinentSlug,
                placesContinentName,
                placesContinentNameOriginal,
                placesContinentInformationChatgpt,
                placesContinentInformationAuthor,
                placesContinentArea,
                placesContinentPopulation,
                placesContinentPopulationDensity,
                placesContinentNumberStates,
                placesContinentCoordinates,
                placesContinentZoom,
                settingTop,
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