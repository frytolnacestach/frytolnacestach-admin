<template>
    <main class="t-main">
        <oHero headline="Přidání nového článku" />

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
                            <span class="m-nav-breadcrumbs__span">Přidání nového článku</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section class="t-section mt-4 mb-8">
            <div class="t-section__inner">

                <div class="o-form-create">
                    <div class="o-form-create__outer">
                        <div class="o-form-create__inner">
                            
                            <div class="o-flash-messages" v-if="errorForm">
                                <div class="o-flash-messages__items">
                                    <div class="o-flash-messages__item">
                                        <div class="o-flash-messages__outer">
                                            <div class="o-flash-messages__inner">
                                                <span class="o-flash-messages__text">{{ errorForm }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form class="o-form-create__form" @submit.prevent="createForm">
                                <div class="o-form-create__items">
                                    
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Dir:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dir" v-model="postDir" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="postSlug" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Path:</span>
                                        </label>
                                        <input class="a-input" type="text" name="path" v-model="postPath" />
                                    </div>
                                                                        
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
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image List:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageList" v-model="postImageList" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image Hero:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageHero" v-model="postImageHero" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image Map:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageMap" v-model="postImageMap" />
                                    </div>
                                                                        
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
                                <div class="o-form-create__buttons mt-1">
                                    <div class="o-form-create__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Vytvořit článek</button>
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
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPostsCreatePage',

        //COMPONENTS
        components: {
            oHero
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
            const postDir = ref('')
            const postSlug = ref('')
            const postPath = ref('')
            const postDate = ref('')
            const postDateUpdate = ref('')
            const postDateInformation = ref('')
            const postImageList = ref('')
            const postImageHero = ref('')
            const postImageMap = ref('')
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
                            'dir': postDir.value,
                            'slug': postSlug.value,
                            'path': postPath.value,
                            'date': postDate.value,
                            'dataUpdate': postDateUpdate.value,
                            'dataInformation': postDateInformation.value,
                            'imageList': postImageList.value,
                            'imageHero': postImageHero.value,
                            'imageMap': postImageMap.value,
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
            return { successForm, errorForm, postDir, postSlug, postPath, postDate, postDateUpdate, postDateInformation, postImageList, postImageHero, postImageMap, postUrlYoutube, postUrlWiki, postUrlMap, postTitle, postPerex, postTextOpener, postTextAuthor, postTextWiki, postReviewText, postReviewValue, postPerexPrice, postPerexTriplength, postPerexTime, postTags, postLocations, postTravels, postPrices, postTriplengths, postTimes, createForm }
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