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

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                 <!-- FORM -->
                                 <form class="o-form-item__form" @submit.prevent="createForm">
                                    <!-- BLOCK - Needitační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Needitační hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
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
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=true />
                                                <mInputIDPlaces :value="placesSpotIDstate" name="state" :required=true @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Města" nameDB="id_city" perex="" :required=false />
                                                <mInputIDPlaces :value="placesSpotIDcity" name="city" :required=true @id-place="handleIDcity" />
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
                                                <aInputSlug :value="placesSpotSlug" :valueCreate="placesSpotName" :edit=true @slug="handleSlug" />
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
                                            <!-- Form - type_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ místa" nameDB="type_spot" perex="" :required=true />
                                                <mInputsTypeSpot :value="placesSpotTypeSpot" @type-spot="handleTypeSpot" />
                                            </div>
                                            <!-- Form - type_spot END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <aTextarea :value="placesSpotInformationChatgpt" name="information_chatgpt" :required=false @textareaValue="handleInformationChatgpt" />
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesSpotInformationAuthor" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - information_duration(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace o časové náročnosti" nameDB="information_duration" perex="" :required=false />
                                                <mInputsInformationDuration :value="placesSpotInformationDuration" @information-duration="handleInformationDuration" />
                                            </div>
                                            <!-- Form - information_duration(JSON) END -->
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
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Přidat místo" />
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
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
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

    export default defineComponent({
        name: 'AdminPlacesSpotsCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButton,
            mHeadlineForm,
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
                ]
            }
        },

        methods: {
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
            }
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
            const placesSpotsSeoTags = ref<never[] | string[]>([])
            const placesSpotCoordinates = ref<never[] | string[]>([])
            const placesSpotZoom = ref<never[] | string[]>([])
            const placesSpotAffiliate = ref<never[] | string[]>([])

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
                            'type_spot': placesSpotTypeSpot.value,
                            'slug': placesSpotSlug.value,
                            'name': placesSpotName.value,
                            'name_original': placesSpotNameOriginal.value,
                            'information_chatgpt': placesSpotInformationChatgpt.value,
                            'information_author': placesSpotInformationAuthor.value,
                            'information_duration': placesSpotInformationDuration.value,
                            'altitude': placesSpotAltitude.value,
                            'seo_tags': placesSpotsSeoTags.value,
                            'coordinates': placesSpotCoordinates.value,
                            'zoom': placesSpotZoom.value,
                            'affiliate': placesSpotAffiliate.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/spots/${placesSpotSlug.value}`)
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
                placesSpotsSeoTags,
                placesSpotCoordinates,
                placesSpotZoom,
                placesSpotAffiliate,
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