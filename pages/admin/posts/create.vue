<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového článku" />
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
                                            <!-- Form - date -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="date" perex="" :required=true />
                                                <input class="a-input" type="text" name="date" v-model="postDate" />
                                            </div>
                                            <!-- Form - date END -->
                                            <!-- Form - date_update -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum poslední úpravy" nameDB="date_update" perex="" :required=true />
                                                <input class="a-input" type="text" name="dateUpdate" v-model="postDateUpdate" />
                                            </div>
                                            <!-- Form - date_update END -->
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
                                                <mInputImage :value="postIDimageOg" @image="handleImageOg" />
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
                                            <!-- Form - id_continent -->
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
                                                <aInputSlug :value="postSlug" :valueCreate="postTitle" :edit=true @slug="handleSlug" />
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
                                                <input class="a-input" type="text" name="dateInformation" v-model="postDateInformation" />
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
                                </div>
                                <!-- FORM END -->
                            </div>
                        </div>
                        <!-- COMPONENT - Button -->
                        <div class="o-form-item__buttons">
                            <div class="o-form-item__button">
                                <mButtonForm text="Přidat článek" />
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
    import mInputsLocations from '@/components/molecules/mInputsLocations.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsTags from '@/components/molecules/mInputsTags.vue'
    import mInputsTimes from '@/components/molecules/mInputsTimes.vue'
    import mInputsTravels from '@/components/molecules/mInputsTravels.vue'
    import mInputsTripLengths from '@/components/molecules/mInputsTripLengths.vue'
    import mInputsTripPrices from '@/components/molecules/mInputsTripPrices.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPostsCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
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
                        name: "Přidání nového článku",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
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
                this.postIDimageOg = newImage
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
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Články - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Články - vytvoření',
                ogTitle: 'Články - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const postSlug = ref('')
            const postIDcontinent = ref<number | null>(null)
            const postIDstate = ref<number | null>(null)
            const postIDregion = ref<number | null>(null)
            const postIDcity = ref<number | null>(null)
            const postIDspot = ref<number | null>(null)
            const postIDimageCover = ref<number | null>(null)
            const postIDimageHero = ref<number | null>(null)
            const postIDimageMap = ref<number | null>(null)
            const postIDimageOg = ref<number | null>(null)
            const postDate = ref(new Date())
            const postDateUpdate = ref(new Date())
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

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/post-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': postSlug.value,
                            'id_continent': postIDcontinent.value,
                            'id_state': postIDstate.value,
                            'id_region': postIDregion.value,
                            'id_city': postIDcity.value,
                            'id_spot': postIDspot.value,
                            'id_image_cover': postIDimageCover.value,
                            'id_image_hero': postIDimageHero.value,
                            'id_image_map': postIDimageMap.value,
                            'id_image_og': postIDimageOg.value,
                            'date': postDate.value,
                            'date_update': postDateUpdate.value,
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
                            'seo_tags': postSeoTags.value,
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
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/post/${postSlug.value}`)
                    } else if (response.status === 500) {
                        errorForm.value = "Nastala chyba a data nebyla uložena."
                    }
                } catch (err) {
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return {
                successForm,
                errorForm,
                postSlug,
                postIDcontinent,
                postIDstate,
                postIDregion,
                postIDcity,
                postIDspot,
                postIDimageCover,
                postIDimageHero,
                postIDimageMap,
                postIDimageOg,
                postDate,
                postDateUpdate,
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
                postSeoTags,
                postTags,
                postLocations,
                postTravels,
                postPrices,
                postTriplengths,
                postTimes,
                createForm
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