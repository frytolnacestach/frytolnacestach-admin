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

                    <form class="o-form-item" @submit.prevent="createForm">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form">
                                    <!-- BLOCK - Needitační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Needitační hodnoty" />
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
                                                <aInputSlug :value="placesCitySlug" :valueCreate="placesCityName" :edit=true @slug="handleSlug" />
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
                                                <mInputsInformationAuthor :value="placesCityInformationAuthor" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - importance -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Významnost" nameDB="importance" perex="" :required=false />
                                                <select class="m-select" name="platform" v-model="placesCityImportance">
                                                    <option :value=null>- Jaká je významnost? -</option>
                                                    <option value="biggest">TOP10 NEJVĚTŠÍ</option>
                                                </select>
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
                                <mButtonForm text="Přidat město" />
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
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
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

    export default defineComponent({
        name: 'AdminPlacesCitiesCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mHeadlineForm,
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
                        name: "Přidání nového města",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
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
            //start data
            placesCityAffiliate.value = JSON.stringify([{
                name: 'booking',
                value: true
            }])

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/places-city-create`, {
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
                            'parking': placesCityParking.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla uložená.')
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/places/cities/${placesCitySlug.value}`)
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla uložena.')
                        errorForm.value = "Nastala chyba a data nebyla uložena."
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
                placesCitySeoTags,
                placesCityCoordinates,
                placesCityZoom,
                placesCityAffiliate,
                placesCityAlerts,
                placesCityParking,
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