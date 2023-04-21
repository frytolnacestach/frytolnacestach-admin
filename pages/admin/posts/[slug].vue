<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <oHero :headline="'Článek ' + postTitle" />

            <nav class="m-nav-breadcrumbs">
                <div class="m-nav-breadcrumbs__outer">
                    <div class="m-nav-breadcrumbs__inner">
                        <ul class="m-nav-breadcrumbs__items">
                            <li class="m-nav-breadcrumbs__item">
                                <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                            </li>
                            <li class="m-nav-breadcrumbs__item">
                                <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/posts">Články</NuxtLink>
                            </li>
                            <li class="m-nav-breadcrumbs__item">
                                <span class="m-nav-breadcrumbs__span">Editace článku - {{ postTitle }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-edit">
                        <div class="o-form-edit__outer">
                            <div class="o-form-edit__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Dir:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dir" v-model="postDir" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="postSlug" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Path:</span>
                                            </label>
                                            <input class="a-input" type="text" name="path" v-model="postPath" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Date:</span>
                                            </label>
                                            <input class="a-input" type="text" name="date" v-model="postDate" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Data update:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateUpdate" v-model="postDateUpdate" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Date Information:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateInformation" v-model="postDateInformation" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image List:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageList" v-model="postIdImageCover" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Hero:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="postIdImageHero" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Map:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageMap" v-model="postIdImageMap" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Url Youtube:</span>
                                            </label>
                                            <input class="a-input" type="text" name="urlYoutube" v-model="postUrlYoutube" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Url Wiki:</span>
                                            </label>
                                            <input class="a-input" type="text" name="urlWiki" v-model="postUrlWiki" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Url Map:</span>
                                            </label>
                                            <input class="a-input" type="text" name="urlMap" v-model="postUrlMap" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Title:</span>
                                            </label>
                                            <input class="a-input" type="text" name="title" v-model="postTitle" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perex" v-model="postPerex" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text Opener:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textOpener" v-model="postTextOpener"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text Author:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textAuthor" v-model="postTextAuthor"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text Wiki:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textWiki" v-model="postTextWiki"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Review Text:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="reviewText" v-model="postReviewText"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Review Value:</span>
                                            </label>
                                            <input class="a-input" type="text" name="reviewValue" v-model="postReviewValue" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex Price:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perexPrice" v-model="postPerexPrice" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex Triplength:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perexTriplength" v-model="postPerexTriplength" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Perex Time:</span>
                                            </label>
                                            <input class="a-input" type="text" name="perexTime" v-model="postPerexTime" />
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Tags(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="tags" v-model="postTags"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Locations(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="locations" v-model="postLocations"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Travels(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="travels" v-model="postTravels"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Prices(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="prices" v-model="postPrices"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Triplengths(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="triplengths" v-model="postTriplengths"></textarea>
                                        </div>
                                                                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Times(json):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="times" v-model="postTimes"></textarea>
                                        </div>

                                    </div>
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface Post {
        dir: string
        slug: string
        path: string,
        date: Date,
        dateUpdate: Date,
        dateInformation: Date,
        id_image_cover: number,
        id_image_hero: number,
        id_image_map: number,
        urlYoutube: string,
        urlWiki: string,
        urlMap: string,
        title: string,
        perex: string,
        textOpener: string,
        textAuthor: string,
        textWiki: string,
        reviewText: string,
        reviewValue: string,
        perexPrice: string,
        perexTriplength: string,
        perexTime: string,
        tags: string,
        locations: string,
        travels: string,
        prices: string,
        triplengths: string,
        times: string
    }

    export default defineComponent({
        name: 'AdminPostsSlugPage',

        //COMPONENTS
        components: {
            oFlashMessages,
            oHero
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
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            const errorForm = ref('')
            const successForm = ref('')
            const postDir = ref('')
            const postSlug = ref('')
            const postPath = ref('')
            const postDate = ref(new Date())
            const postDateUpdate = ref(new Date())
            const postDateInformation = ref(new Date())
            const postIdImageCover = ref(0)
            const postIdImageHero = ref(0)
            const postIdImageMap = ref(0)
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

            //API - Post
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/post/${route.params.slug}`)
                
                const Post: Post[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Post) && Post.length > 0) {
                    postDir.value = Post[0].dir;
                    postSlug.value = Post[0].slug;
                    postPath.value = Post[0].path;
                    postDate.value = Post[0].date;
                    postDateUpdate.value = Post[0].dateUpdate;
                    postDateInformation.value = Post[0].dateInformation;
                    postIdImageCover.value = Post[0].id_image_cover;
                    postIdImageHero.value = Post[0].id_image_hero;
                    postIdImageMap.value = Post[0].id_image_map;
                    postUrlYoutube.value = Post[0].urlYoutube;
                    postUrlWiki.value = Post[0].urlWiki;
                    postUrlMap.value = Post[0].urlMap;
                    postTitle.value = Post[0].title;
                    postPerex.value = Post[0].perex;
                    postTextOpener.value = Post[0].textOpener;
                    postTextAuthor.value = Post[0].textAuthor;
                    postTextWiki.value = Post[0].textWiki;
                    postReviewText.value = Post[0].reviewText;
                    postReviewValue.value = Post[0].reviewValue;
                    postPerexPrice.value = Post[0].perexPrice;
                    postPerexTriplength.value = Post[0].perexTriplength;
                    postPerexTime.value = Post[0].perexTime;
                    postTags.value = JSON.stringify(Post[0].tags);
                    postLocations.value = JSON.stringify(Post[0].locations);
                    postTravels.value = JSON.stringify(Post[0].travels);
                    postPrices.value = JSON.stringify(Post[0].prices);
                    postTriplengths.value = JSON.stringify(Post[0].triplengths);
                    postTimes.value = JSON.stringify(Post[0].times);
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/post-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'dir': postDir.value,
                            'slug': postSlug.value,
                            'path': postPath.value,
                            'date': postDate.value,
                            'dateUpdate': postDateUpdate.value,
                            'dateInformation': postDateInformation.value,
                            'id_image_cover': postIdImageCover.value,
                            'id_image_hero': postIdImageHero.value,
                            'id_image_map': postIdImageMap.value,
                            'urlYoutube': postUrlYoutube.value,
                            'urlWiki': postUrlWiki.value,
                            'urlMap': postUrlMap.value,
                            'title': postTitle.value,
                            'perex': postPerex.value,
                            'textOpener': postTextOpener.value,
                            'textAuthor': postTextAuthor.value,
                            'textWiki': postTextWiki.value,
                            'reviewText': postReviewText.value,
                            'reviewValue': postReviewValue.value,
                            'perexPrice': postPerexPrice.value,
                            'perexTriplength': postPerexTriplength.value,
                            'perexTime': postPerexTime.value,
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
            return { successForm, errorForm, postDir, postSlug, postPath, postDate, postDateUpdate, postDateInformation, postIdImageCover, postIdImageHero, postIdImageMap, postUrlYoutube, postUrlWiki, postUrlMap, postTitle, postPerex, postTextOpener, postTextAuthor, postTextWiki, postReviewText, postReviewValue, postPerexPrice, postPerexTriplength, postPerexTime, postTags, postLocations, postTravels, postPrices, postTriplengths, postTimes, editForm }
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