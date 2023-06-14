<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového článku" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <div class="o-form-create">
                        <div class="o-form-create__outer">
                            <div class="o-form-create__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-create__form" @submit.prevent="createForm">
                                    <div class="o-form-create__items">
                                        <!-- slug -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="postSlug" />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Kontinentu:</span>
                                            </label>
                                            <input class="a-input" type="text" name="id_continent" v-model="postIDcontinent" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu:</span>
                                            </label>
                                            <input class="a-input" type="text" name="id_state" v-model="postIDstate" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Regionu:</span>
                                            </label>
                                            <input class="a-input" type="text" name="id_region" v-model="postIDregion" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Města:</span>
                                            </label>
                                            <input class="a-input" type="text" name="id_city" v-model="postIDcity" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Místa:</span>
                                            </label>
                                            <input class="a-input" type="text" name="id_spot" v-model="postIDspot" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image List:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageList" v-model="postIdImageCover" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Hero:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="postIdImageHero" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Map:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageMap" v-model="postIdImageMap" />
                                        </div>
                                        <!-- dates -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Date:</span>
                                            </label>
                                            <input class="a-input" type="text" name="date" v-model="postDate" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Data update:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateUpdate" v-model="postDateUpdate" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Date Information:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateInformation" v-model="postDateInformation" />
                                        </div>
                                        <!-- other -->                
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Url Youtube:</span>
                                            </label>
                                            <input class="a-input" type="text" name="urlYoutube" v-model="postUrlYoutube" />
                                        </div>  
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Url Wiki:</span>
                                            </label>
                                            <input class="a-input" type="text" name="urlWiki" v-model="postUrlWiki" />
                                        </div>  
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Url Map:</span>
                                            </label>
                                            <input class="a-input" type="text" name="urlMap" v-model="postUrlMap" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Title:</span>
                                            </label>
                                            <input class="a-input" type="text" name="title" v-model="postTitle" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perex" v-model="postPerex" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text Opener:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textOpener" v-model="postTextOpener"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text Author:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textAuthor" v-model="postTextAuthor"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text Wiki:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textWiki" v-model="postTextWiki"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Review Text:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="reviewText" v-model="postReviewText"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Review Value:</span>
                                            </label>
                                            <input class="a-input" type="text" name="reviewValue" v-model="postReviewValue" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex Price:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perexPrice" v-model="postPerexPrice" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex Triplength:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perexTriplength" v-model="postPerexTriplength" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex Time:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perexTime" v-model="postPerexTime" />
                                        </div>
                                        <!-- json -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Tags(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="tags" v-model="postTags"></textarea>
                                        </div>                         
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Locations(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="locations" v-model="postLocations"></textarea>
                                        </div>                          
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Travels(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="travels" v-model="postTravels"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Prices(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="prices" v-model="postPrices"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Triplengths(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="triplengths" v-model="postTriplengths"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Times(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="times" v-model="postTimes"></textarea>
                                        </div>
                                    </div>
                                    <!--button-->
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytvořit článek</button>
                                            </div>
                                        </div>
                                    </div>
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
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPostsCreatePage',

        //COMPONENTS
        components: {
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
            const postIDcontinent = ref(0)
            const postIDstate = ref(0)
            const postIDregion = ref(0)
            const postIDcity = ref(0)
            const postIDspot = ref(0)
            const postIdImageCover = ref(0)
            const postIdImageHero = ref(0)
            const postIdImageMap = ref(0)
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
            const postTags = ref('')
            const postLocations = ref('')
            const postTravels = ref('')
            const postPrices = ref('')
            const postTriplengths = ref('')
            const postTimes = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/post-create`, {
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
                            'id_image_cover': postIdImageCover.value,
                            'id_image_hero': postIdImageHero.value,
                            'id_image_map': postIdImageMap.value,
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
                            'tags': postTags.value,
                            'locations': postLocations.value,
                            'travels': postTravels.value,
                            'prices': postPrices.value,
                            'triplengths': postTriplengths.value,
                            'times': postTimes.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/post/${postSlug.value}`)
                    })
                    .catch((error) => {
                        console.log(error);
                        errorForm.value = "Data nebyla upravena nastala chyba při jejich odeslání"
                });
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return { successForm, errorForm, postSlug, postIDcontinent, postIDstate, postIDregion, postIDcity, postIDspot, postIdImageCover, postIdImageHero, postIdImageMap, postDate, postDateUpdate, postDateInformation, postUrlYoutube, postUrlWiki, postUrlMap, postTitle, postPerex, postTextOpener, postTextAuthor, postTextWiki, postReviewText, postReviewValue, postPerexPrice, postPerexTriplength, postPerexTime, postTags, postLocations, postTravels, postPrices, postTriplengths, postTimes, createForm }
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