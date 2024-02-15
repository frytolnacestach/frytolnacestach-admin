<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Článek ' + postTitle" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/clanky/' + postSlug" text="Zobrazit na webu" />

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-item__form" @submit.prevent="editForm" v-if="loadingData">
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
                                                <mInputImage :value="postIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="postIDimageHero" @image="handleImageHero" />
                                            </div>
                                            <!-- Form - id_image_hero END -->
                                            <!-- Form - id_image_map -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku mapy" nameDB="id_image_map" perex="" :required=false />
                                                <mInputImage :value="postIDimageMap" @image="handleImageMap" />
                                            </div>
                                            <!-- Form - id_image_map END -->
                                            <!-- Form - id_image_og -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku og" nameDB="id_image_og" perex="" :required=false />
                                                <mInputImage :value="postIDimageOG" @image="handleImageOg" />
                                            </div>
                                            <!-- Form - id_image_og END -->
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
                                                <mInputsSeoTags :value="postSeoTags" @seo-tags="handleSeoTags" />
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
                                            <!-- Form - id_continent -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název kontinentu" nameDB="id_continent" perex="" :required=false />
                                                <mInputIDPlaces :value="postIDcontinent" name="id_continent" type="continent" :required=false @id-place="handleIDcontinent" />
                                            </div>
                                            <!-- Form - id_continent END -->
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název státu" nameDB="id_state" perex="" :required=false />
                                                <mInputIDPlaces :value="postIDstate" name="id_state" type="state" :required=false @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název regionu" nameDB="id_region" perex="" :required=false />
                                                <mInputIDPlaces :value="postIDregion" name="id_region" type="region" :required=false @id-place="handleIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název města" nameDB="id_city" perex="" :required=false />
                                                <mInputIDPlaces :value="postIDcity" name="id_city" type="city" :required=false @id-place="handleIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název místa" nameDB="id_spot" perex="" :required=false />
                                                <mInputIDPlaces :value="postIDspot" name="id_spot" type="spot" :required=false @id-place="handleIDspot" />
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
                                                <aInputSlug :value="postSlug" :valueCreate="postTitle" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - title -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="title" perex="" :required=true />
                                                <input class="a-input" type="text" name="title" v-model="postTitle" required />
                                            </div>
                                            <!-- Form - title END -->
                                            <!-- Form - perex -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="perex" perex="" :required=false />
                                                <input class="a-input" type="text" name="perex" v-model="postPerex" />
                                            </div>
                                            <!-- Form - perex END -->
                                            <!-- Form - text_opener -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text otvírák" nameDB="text_opener" perex="" :required=false />
                                                <aTextarea :value="postTextOpener" name="textOpener" :required=false @textareaValue="handleTextOpener" />
                                            </div>
                                            <!-- Form - text_opener END -->
                                            <!-- Form - text_author -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text autora" nameDB="text_author" perex="" :required=false />
                                                <aTextarea :value="postTextAuthor" name="textAuthor" :required=false @textareaValue="handleTextAuthor" />
                                            </div>
                                            <!-- Form - text_author END -->
                                            <!-- Form - text_wiki -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text z wikipedie" nameDB="text_wiki" perex="" :required=false />
                                                <aTextarea :value="postTextWiki" name="textWiki" :required=false @textareaValue="handleTextWiki" />
                                            </div>
                                            <!-- Form - text_wiki END -->
                                            <!-- Form - review_text -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k hodnocení" nameDB="review_text" perex="" :required=false />
                                                <aTextarea :value="postReviewText" name="reviewText" :required=false @textareaValue="handleReviewText" />
                                            </div>
                                            <!-- Form - review_text END -->
                                            <!-- Form - review_value -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Hodnocení" nameDB="review_value" perex="Ve formátu <i>85 %</i>" :required=false />
                                                <input class="a-input" type="text" name="reviewValue" v-model="postReviewValue" />
                                            </div>
                                            <!-- Form - review_value END -->
                                            <!-- Form - perex_price -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k ceně" nameDB="perex_price" perex="" :required=false />
                                                <input class="a-input" type="text" name="perexPrice" v-model="postPerexPrice" />
                                            </div>
                                            <!-- Form - perex_price END -->
                                            <!-- Form - perex_triplength -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k délce cesty" nameDB="perex_triplength" perex="" :required=false />
                                                <input class="a-input" type="text" name="perexTriplength" v-model="postPerexTriplength" />
                                            </div>
                                            <!-- Form - perex_triplength END -->
                                            <!-- Form - perex_time -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k časové náročnosti" nameDB="perex_time" perex="" :required=false />
                                                <input class="a-input" type="text" name="perexTime" v-model="postPerexTime" />
                                            </div>
                                            <!-- Form - perex_time END -->
                                            <!-- Form - date_information -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum platnosti informací" nameDB="date_information" perex="" :required=false />
                                                <mInputTimestamptz :value="postDateInformation" @date="handleDateInformation" />
                                            </div>
                                            <!-- Form - date_information END -->
                                            <!-- Form - url_youtube -->              
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na video na Youtube" nameDB="url_youtube" perex="" :required=false />
                                                <input class="a-input" type="text" name="urlYoutube" v-model="postUrlYoutube" />
                                            </div>
                                            <!-- Form - url_youtube END -->
                                            <!-- Form - url_wiki -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na wiki" nameDB="url_wiki" perex="" :required=false />
                                                <input class="a-input" type="text" name="urlWiki" v-model="postUrlWiki" />
                                            </div>
                                            <!-- Form - url_wiki END -->
                                            <!-- Form - url_map -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na mapu" nameDB="url_map" perex="" :required=false />
                                                <input class="a-input" type="text" name="urlMap" v-model="postUrlMap" />
                                            </div>
                                            <!-- Form - url_map END -->
                                            <!-- Form - tags(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Tagy" nameDB="tags" perex="" :required=false />
                                                <mInputsTags :value="postTags" @tags="handleTags" />
                                            </div>
                                            <!-- Form - tags(JSON) END -->
                                            <!-- Form - locations(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Lokace" nameDB="locations" perex="" :required=false />
                                                <mInputsLocations :value="postLocations" @locations="handleLocations" />
                                            </div>
                                            <!-- Form - locations(JSON) END -->
                                            <!-- Form - travels(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Způsoby dopravy" nameDB="travels" perex="" :required=false />
                                                <mInputsTravels :value="postTravels" @travels="handleTravels" />
                                            </div>
                                            <!-- Form - travels(JSON) END -->
                                            <!-- Form - prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ceny" nameDB="prices" perex="" :required=false />
                                                <mInputsTripPrices :value="postPrices" @trip-prices="handleTripPrices" />
                                            </div>
                                            <!-- Form - prices(JSON) END -->
                                            <!-- Form - triplengths(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Délka výletu" nameDB="triplengths" perex="" :required=false />
                                                <mInputsTripLengths :value="postTriplengths" @trip-lengths="handleTripLengths" />
                                            </div>
                                            <!-- Form - triplengths(JSON) END -->
                                            <!-- Form - times(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Časová náročnost" nameDB="times" perex="" :required=false />
                                                <mInputsTimes :value="postTimes" @times="handleTimes" />
                                            </div>
                                            <!-- Form - times(JSON) END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Uložit úpravy" />
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
    import mButtonWeb from '@/components/molecules/mButtonWeb.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsLocations from '@/components/molecules/mInputsLocations.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsTags from '@/components/molecules/mInputsTags.vue'
    import mInputsTimes from '@/components/molecules/mInputsTimes.vue'
    import mInputsTravels from '@/components/molecules/mInputsTravels.vue'
    import mInputsTripLengths from '@/components/molecules/mInputsTripLengths.vue'
    import mInputsTripPrices from '@/components/molecules/mInputsTripPrices.vue'
    import mInputTimestamptz from '@/components/molecules/mInputTimestamptz.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    //INTERFACES
    interface Tags {
        name: string
    }

    interface Locations {
        name: string
        type: string
    }

    interface Travels {
        icon: string
        name: string
        text: string
    }

    interface Prices {
        name: string
        subname: string
        value: string
    }

    interface Triplengths {
        name: string
        subname: string
        value: string
    }

    interface Times {
        name: string
        subname: string
        value: string
    }

    interface seoTags {
        tag: string
    }

    interface Post {
        id: number
        created_at: string
        updated_at: string
        id_continent: number
        id_state: number
        id_region: number
        id_city: number
        id_spot: number
        id_image_cover: number
        id_image_hero: number
        id_image_map: number
        id_image_og: number
        slug: string
        date_information: Date
        url_youtube: string
        url_wiki: string
        url_map: string
        title: string
        perex: string
        text_opener: string
        text_author: string
        text_wiki: string
        review_text: string
        review_value: string
        perex_price: string
        perex_triplength: string
        perex_time: string
        seo_tags: seoTags[]
        tags: Tags[]
        locations: Locations[]
        travels: Travels[]
        prices: Prices[]
        triplengths: Triplengths[]
        times: Times[]
    }

    export default defineComponent({
        name: 'AdminPostsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButton,
            mButtonWeb,
            mHeadlineForm,
            mInputIDPlaces,
            mInputImage,
            mInputsLocations,
            mInputsSeoTags,
            mInputsTags,
            mInputsTimes,
            mInputsTravels,
            mInputsTripLengths,
            mInputsTripPrices,
            mInputTimestamptz,
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
                        name: "Články",
                        url: "/admin/posts",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace článku - NÁZEV ČLÁNKU`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const postTitle = this.postTitle
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace článku - ${postTitle}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.postSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.postIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.postIDimageHero = newImage
            },
            handleImageMap(newImage: number) {
                this.postIDimageMap = newImage
            },
            handleImageOg(newImage: number) {
                this.postIDimageOG = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.postSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDcontinent(newIDcontinent: number) {
                this.postIDcontinent = newIDcontinent
            },
            handleIDstate(newIDstate: number) {
                this.postIDstate = newIDstate
            },
            handleIDregion(newIDregion: number) {
                this.postIDregion = newIDregion
            },
            handleIDcity(newIDcity: number) {
                this.postIDcity = newIDcity
            },
            handleIDspot(newIDspot: number) {
                this.postIDspot = newIDspot
            },
            handleTextOpener(newTextOpener: string) {
                this.postTextOpener = newTextOpener
            },
            handleTextAuthor(newTextAuthor: string) {
                this.postTextAuthor = newTextAuthor
            },
            handleTextWiki(newTextWiki: string) {
                this.postTextWiki = newTextWiki
            },
            handleReviewText(newReviewText: string) {
                this.postReviewText = newReviewText
            },
            handleTags(newTags: string) {
                this.postTags = JSON.stringify(newTags)
            },
            handleLocations(newLocations: string) {
                this.postLocations = JSON.stringify(newLocations)
            },
            handleTravels(newTravels: string) {
                this.postTravels = JSON.stringify(newTravels)
            },
            handleTripPrices(newPrices: string) {
                this.postPrices = JSON.stringify(newPrices)
            },
            handleTripLengths(newTripLengths: string) {
                this.postTriplengths = JSON.stringify(newTripLengths)
            },
            handleTimes(newTimes: string) {
                this.postTimes = JSON.stringify(newTimes)
            },
            handleDateInformation(newDate: string) {
                this.postDateInformation = newDate
            }
        },

        watch: {
            postTitle: function (newValue, oldValue) {
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
                title: 'Články - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Články - úprava',
                ogTitle: 'Články - úprava',
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
            const postSlug = ref('')
            const postIDcontinent = ref<number | null>(null)
            const postIDstate = ref<number | null>(null)
            const postIDregion = ref<number | null>(null)
            const postIDcity = ref<number | null>(null)
            const postIDspot = ref<number | null>(null)
            const postIDimageCover = ref<number | null>(null)
            const postIDimageHero = ref<number | null>(null)
            const postIDimageMap = ref<number | null>(null)
            const postIDimageOG = ref<number | null>(null)
            const postDateInformation = ref(new Date())
            const postUrlYoutube = ref('')
            const postUrlWiki = ref('')
            const postUrlMap = ref('')
            const postTitle = ref('')
            const postPerex = ref('')
            const postTextOpener = ref('')
            const postTextAuthor = ref('')
            const postTextWiki = ref('')
            const postReviewText = ref('')
            const postReviewValue = ref('')
            const postPerexPrice = ref('')
            const postPerexTriplength = ref('')
            const postPerexTime = ref('')
            const postSeoTags = ref<never[] | string[]>([])
            const postTags = ref<never[] | string[]>([])
            const postLocations = ref<never[] | string[]>([])
            const postTravels = ref<never[] | string[]>([])
            const postPrices = ref<never[] | string[]>([])
            const postTriplengths = ref<never[] | string[]>([])
            const postTimes = ref<never[] | string[]>([])

            //API - Post
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/post/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const Post: Post[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Post) && Post.length > 0) {
                    itemID.value = Post[0].id
                    createdAt.value = Post[0].created_at
                    updatedAt.value = Post[0].updated_at
                    postSlug.value = Post[0].slug
                    postIDcontinent.value = Post[0].id_continent
                    postIDstate.value = Post[0].id_state
                    postIDregion.value = Post[0].id_region
                    postIDcity.value = Post[0].id_city
                    postIDspot.value = Post[0].id_spot
                    postIDimageCover.value = Post[0].id_image_cover
                    postIDimageHero.value = Post[0].id_image_hero
                    postIDimageMap.value = Post[0].id_image_map
                    postIDimageOG.value = Post[0].id_image_og
                    postDateInformation.value = Post[0].date_information
                    postUrlYoutube.value = Post[0].url_youtube
                    postUrlWiki.value = Post[0].url_wiki
                    postUrlMap.value = Post[0].url_map
                    postTitle.value = Post[0].title
                    postPerex.value = Post[0].perex
                    postTextOpener.value = Post[0].text_opener
                    postTextAuthor.value = Post[0].text_author
                    postTextWiki.value = Post[0].text_wiki
                    postReviewText.value = Post[0].review_text
                    postReviewValue.value = Post[0].review_value
                    postPerexPrice.value = Post[0].perex_price
                    postPerexTriplength.value = Post[0].perex_triplength
                    postPerexTime.value = Post[0].perex_time
                    postSeoTags.value = Post[0].seo_tags ? JSON.stringify(Post[0].seo_tags) : JSON.stringify([])
                    postTags.value = Post[0].tags ? JSON.stringify(Post[0].tags) : JSON.stringify([])
                    postLocations.value = Post[0].locations ? JSON.stringify(Post[0].locations) : JSON.stringify([])
                    postTravels.value = Post[0].travels ? JSON.stringify(Post[0].travels) : JSON.stringify([])
                    postPrices.value = Post[0].prices ? JSON.stringify(Post[0].prices) : JSON.stringify([])
                    postTriplengths.value = Post[0].triplengths ? JSON.stringify(Post[0].triplengths) : JSON.stringify([])
                    postTimes.value = Post[0].times ? JSON.stringify(Post[0].times) : JSON.stringify([])
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/post-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'slug': postSlug.value,
                            'seo_tags': postSeoTags.value,
                            'id_continent': postIDcontinent.value,
                            'id_state': postIDstate.value,
                            'id_region': postIDregion.value,
                            'id_city': postIDcity.value,
                            'id_spot': postIDspot.value,
                            'id_image_cover': postIDimageCover.value,
                            'id_image_hero': postIDimageHero.value,
                            'id_image_map': postIDimageMap.value,
                            'id_image_og': postIDimageOG.value,
                            'date_information': postDateInformation.value,
                            'url_youtube': postUrlYoutube.value,
                            'url_wiki': postUrlWiki.value,
                            'url_map': postUrlMap.value,
                            'title': postTitle.value,
                            'perex': postPerex.value,
                            'text_opener': postTextOpener.value,
                            'text_author': postTextAuthor.value,
                            'text_wiki': postTextWiki.value,
                            'review_text': postReviewText.value,
                            'review_value': postReviewValue.value,
                            'perex_price': postPerexPrice.value,
                            'perex_triplength': postPerexTriplength.value,
                            'perex_time': postPerexTime.value,
                            'tags': postTags.value,
                            'locations': postLocations.value,
                            'travels': postTravels.value,
                            'prices': postPrices.value,
                            'triplengths': postTriplengths.value,
                            'times': postTimes.value,
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
                postSlug,
                postSeoTags,
                postIDcontinent,
                postIDstate,
                postIDregion,
                postIDcity,
                postIDspot,
                postIDimageCover,
                postIDimageHero,
                postIDimageMap,
                postIDimageOG,
                postDateInformation,
                postUrlYoutube,
                postUrlWiki,
                postUrlMap,
                postTitle,
                postPerex,
                postTextOpener,
                postTextAuthor,
                postTextWiki,
                postReviewText,
                postReviewValue,
                postPerexPrice,
                postPerexTriplength,
                postPerexTime,
                postTags,
                postLocations,
                postTravels,
                postPrices,
                postTriplengths,
                postTimes,
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