<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'Událost ' + eventName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/udalost/' + eventSlug" text="Zobrazit na webu" />

                    <form class="o-form-item" @submit.prevent="editForm" v-if="loadingData">
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
                                                <mInputsSeoTags :value="eventSeoTags" @seo-tags="handleSeoTags" />
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
                                                <mLabel name="Název státu" nameDB="id_state" perex="" :required=false />
                                                <mInputIDPlaces :value="eventIDstate" name="state" type="state" :required=false @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název regionu" nameDB="id_region" perex="" :required=false />
                                                <mInputIDPlaces :value="eventIDregion" name="region" type="region" :required=false @id-place="handleIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název města" nameDB="id_city" perex="" :required=false />
                                                <mInputIDPlaces :value="eventIDcity" name="city" type="city" :required=false @id-place="handleIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název místa" nameDB="id_spot" perex="" :required=false />
                                                <mInputIDPlaces :value="eventIDspot" name="spot" type="spot" :required=false @id-place="handleIDspot" />
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
                                                <aInputSlug :value="eventSlug" :valueCreate="eventName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="eventName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <aTextarea :value="eventDescription" name="description" :required=false @textareaValue="handleDescritpion" />
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - date_start -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum začátku události" nameDB="date_start" perex="" :required=false />
                                                <mInputTimestamptz :value="eventDateStart" @date="handleDateStart" />
                                            </div>
                                            <!-- Form - date_start END -->
                                            <!-- Form - date_end -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum konce události" nameDB="date_end" perex="" :required=false />
                                                <mInputTimestamptz :value="eventDateEnd" @date="handleDateEnd" />
                                            </div>
                                            <!-- Form - date_end END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice místa konání" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="eventCoordinates" :inputsMax="1" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="eventZoom" :inputsMax="1" @zoom="handleZoom" />
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <mInputsAffiliate :value="eventAffiliate" @affiliate="handleAffiliate" />
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ceny" nameDB="prices" perex="" :required=false />
                                                <mInputsPrices :value="eventPrices" @prices="handlePrices" />
                                            </div>
                                            <!-- Form - prices(JSON) END -->
                                            <!-- Form - links(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkazy" nameDB="links" perex="" :required=false />
                                                <mInputsLinks :value="eventLinks" @links="handleLinks" />
                                            </div>
                                            <!-- Form - links(JSON) END -->                   
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
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsAffiliate from '@/components/molecules/mInputsAffiliate.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsLinks from '@/components/molecules/mInputsLinks.vue'
    import mInputsPrices from '@/components/molecules/mInputsPrices.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputTimestamptz from '@/components/molecules/mInputTimestamptz.vue'
    import mInputsZoom from '@/components/molecules/mInputsZoom.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
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
        description: string
        pay_time: string
        price: string
        url: string
        author: string
        author_update: string
        date_create: string
        date_update: string
    }

    interface Links {
        name: string
        link: string
    }

    interface seoTags {
        tag: string
    }

    interface Event {
        id: number
        created_at: string
        updated_at: string
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
        seo_tags: seoTags[]
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
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
            mHeadlineForm,
            mInputIDPlaces,
            mInputImage,
            mInputsAffiliate,
            mInputsCoordinates,
            mInputsLinks,
            mInputsPrices,
            mInputsSeoTags,
            mInputTimestamptz,
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
                ]
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
            // Components input changes
            handleSlug(newSlug: string) {
                this.eventSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.eventIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.eventIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.eventSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDstate(newIDstate: number) {
                this.eventIDstate = newIDstate
            },
            handleIDregion(newIDregion: number) {
                this.eventIDregion = newIDregion
            },
            handleIDcity(newIDcity: number) {
                this.eventIDcity = newIDcity
            },
            handleIDspot(newIDspot: number) {
                this.eventIDspot = newIDspot
            },
            handleDescritpion(newDescription: string) {
                this.eventDescription = newDescription
            },
            handleCoordinates(newCoordinates: string) {
                this.eventCoordinates = JSON.stringify(newCoordinates)
            },
            handleZoom(newZoom: string) {
                this.eventZoom = JSON.stringify(newZoom)
            },
            handleAffiliate(newAffiliate: string) {
                this.eventAffiliate = JSON.stringify(newAffiliate)
            },
            handlePrices(newPrices: string) {
                this.eventPrices = JSON.stringify(newPrices)
            },
            handleLinks(newLinks: string) {
                this.eventLinks = JSON.stringify(newLinks)
            },
            handleDateStart(newDate: string) {
                this.eventDateStart = newDate
            },
            handleDateEnd(newDate: string) {
                this.eventDateEnd = newDate
            }
        },

        watch: {
            eventName: function (newValue, oldValue) {
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
            const eventIDstate = ref<number | null>(null)
            const eventIDregion = ref<number | null>(null)
            const eventIDcity = ref<number | null>(null)
            const eventIDspot = ref<number | null>(null)
            const eventIDimageCover = ref<number | null>(null)
            const eventIDimageHero = ref<number | null>(null)
            const eventDateStart = ref('')
            const eventDateEnd = ref('')
            const eventSlug = ref('')
            const eventName = ref('')
            const eventDescription = ref('')
            const eventSeoTags = ref<never[] | string[]>([])
            const eventCoordinates = ref<never[] | string[]>([])
            const eventZoom = ref<never[] | string[]>([])
            const eventAffiliate = ref<never[] | string[]>([])
            const eventPrices = ref<never[] | string[]>([])
            const eventLinks = ref<never[] | string[]>([])

            //API - Event
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/event/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const Event: Event[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Event) && Event.length > 0) {
                    itemID.value = Event[0].id
                    createdAt.value = Event[0].created_at
                    updatedAt.value = Event[0].updated_at
                    eventIDstate.value = Event[0].id_state
                    eventIDregion.value = Event[0].id_region
                    eventIDcity.value = Event[0].id_city
                    eventIDspot.value = Event[0].id_spot
                    eventIDimageCover.value = Event[0].id_image_cover
                    eventIDimageHero.value = Event[0].id_image_hero
                    eventDateStart.value = Event[0].date_start
                    eventDateEnd.value = Event[0].date_end
                    eventSlug.value = Event[0].slug
                    eventName.value = Event[0].name
                    eventDescription.value = Event[0].description
                    eventSeoTags.value = Event[0].seo_tags ? JSON.stringify(Event[0].seo_tags) : JSON.stringify([])
                    eventCoordinates.value = Event[0].coordinates ? JSON.stringify(Event[0].coordinates) : JSON.stringify([])
                    eventZoom.value = Event[0].zoom ? JSON.stringify(Event[0].zoom) : JSON.stringify([])
                    eventAffiliate.value = Event[0].affiliate ? JSON.stringify(Event[0].affiliate) : JSON.stringify([])
                    eventPrices.value = Event[0].prices ? JSON.stringify(Event[0].prices) : JSON.stringify([])
                    eventLinks.value = Event[0].links ? JSON.stringify(Event[0].links) : JSON.stringify([])
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/event-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
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
                            'seo_tags': eventSeoTags.value,
                            'coordinates': eventCoordinates.value,
                            'zoom': eventZoom.value,
                            'affiliate': eventAffiliate.value,
                            'prices': eventPrices.value,
                            'links': eventLinks.value
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
                eventSeoTags,
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
                eventZoom,
                eventAffiliate,
                eventPrices,
                eventLinks,
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