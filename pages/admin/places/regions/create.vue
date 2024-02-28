<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového regionu" />
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
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesRegionTypePlace" required />
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
                                                <mInputImage :value="placesRegionIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="placesRegionIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="placesRegionSeoTags" @seo-tags="handleSeoTags" />
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
                                                <mInputIDPlaces :value="placesRegionIDstate" name="state" type="state" :required=true @id-place="handleIDstate" />
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
                                                <aInputSlug :value="placesRegionSlug" :valueCreate="placesRegionName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesRegionName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name original -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název originál" nameDB="name_original" perex="" :required=true />
                                                <input class="a-input" type="text" name="name_original" v-model="placesRegionNameOriginal" required />
                                            </div>
                                            <!-- Form - name original END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <aTextarea :value="placesRegionInformationChatgpt" name="information_chatgpt" :required=false @textareaValue="handleInformationChatgpt" />
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesRegionInformationAuthor" :inputsMax="1" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="placesRegionCoordinates" :inputsMax="1" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - type_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ regionu" nameDB="type_region" perex="" :required=false />
                                                <mInputsTypeRegion :value="placesRegionTypeRegion" @type-region="handleTypeRegion" />
                                            </div>
                                            <!-- Form - type_region END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesRegionZoom" :inputsMax="1" @zoom="handleZoom" />
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <mInputsAffiliate :value="placesRegionAffiliate" @affiliate="handleAffiliate" />
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
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
                                <mButtonForm text="Přidat region" />
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
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsInformationAuthor from '@/components/molecules/mInputsInformationAuthor.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsTypeRegion from '@/components/molecules/mInputsTypeRegion.vue'
    import mInputsZoom from '@/components/molecules/mInputsZoom.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlacesRegionsCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mHeadlineForm,
            mInputIDPlaces,
            mInputImage,
            mInputsAffiliate,
            mInputsCoordinates,
            mInputsInformationAuthor,
            mInputsSeoTags,
            mInputsTypeRegion,
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
                        name: "Regiony",
                        url: "/admin/places/regions",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: "Přidání nového regionu",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesRegionSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.placesRegionIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.placesRegionIDimageHero = newImage
            },
            handleIDstate(newIDstate: number) {
                this.placesRegionIDstate = newIDstate
            },
            handleSeoTags(newSeoTags: string) {
                this.placesRegionSeoTags = JSON.stringify(newSeoTags)
            },
            handleTypeRegion(newTypeRegion: string) {
                this.placesRegionTypeRegion = JSON.stringify(newTypeRegion)
            },
            handleCoordinates(newCoordinates: string) {
                this.placesRegionCoordinates = JSON.stringify(newCoordinates)
            },
            handleZoom(newZoom: string) {
                this.placesRegionZoom = JSON.stringify(newZoom)
            },
            handleAffiliate(newAffiliate: string) {
                this.placesRegionAffiliate = JSON.stringify(newAffiliate)
            },
            handleInformationChatgpt(newInformationChatgpt: string) {
                this.placesRegionInformationChatgpt = newInformationChatgpt
            },
            handleInformationAuthor(newInformationAuthor: string) {
                this.placesRegionInformationAuthor = JSON.stringify(newInformationAuthor)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Regiony - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Regiony - vytvoření',
                ogTitle: 'Místa - Regiony - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesRegionIDstate = ref<number | null>(null)
            const placesRegionIDimageCover = ref<number | null>(null)
            const placesRegionIDimageHero = ref<number | null>(null)
            const placesRegionTypePlace = ref('region')
            const placesRegionTypeRegion = ref('')
            const placesRegionSlug = ref('')
            const placesRegionName = ref('')
            const placesRegionNameOriginal = ref('')
            const placesRegionInformationChatgpt = ref('')
            const placesRegionInformationAuthor = ref<never[] | string[]>([])
            const placesRegionSeoTags = ref<never[] | string[]>([])
            const placesRegionCoordinates = ref<never[] | string[]>([])
            const placesRegionZoom = ref<never[] | string[]>([])
            const placesRegionAffiliate = ref<never[] | string[]>([])
            //start data
            placesRegionAffiliate.value = JSON.stringify([{
                name: 'booking',
                value: true
            }])

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/places-region-create`, {
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
                            'type_region': placesRegionTypeRegion.value,
                            'slug': placesRegionSlug.value,
                            'name': placesRegionName.value,
                            'name_original': placesRegionNameOriginal.value,
                            'information_chatgpt': placesRegionInformationChatgpt.value,
                            'information_author': placesRegionInformationAuthor.value,
                            'seo_tags': placesRegionSeoTags.value,
                            'coordinates': placesRegionCoordinates.value,
                            'zoom': placesRegionZoom.value,
                            'affiliate': placesRegionAffiliate.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla uložená.')
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/places/regions/${placesRegionSlug.value}`)
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
                placesRegionIDstate,
                placesRegionIDimageCover,
                placesRegionIDimageHero,
                placesRegionTypePlace,
                placesRegionTypeRegion,
                placesRegionSlug,
                placesRegionName,
                placesRegionNameOriginal,
                placesRegionInformationChatgpt,
                placesRegionInformationAuthor,
                placesRegionSeoTags,
                placesRegionCoordinates,
                placesRegionZoom,
                placesRegionAffiliate,
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