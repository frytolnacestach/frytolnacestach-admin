<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="videoTitle" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-item__form" @submit.prevent="editForm">
                                    <!-- BLOCK - Stálé hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Stálé hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Stálé hodnoty END -->

                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku" nameDB="id_image" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': videoIDimageLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${image[0].source + image[0].name}.webp`" v-if="image[0] && videoIDimage" @load="handleImageLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="image[0] && videoIDimageLoad !== videoIDimageChange && (videoIDimage && videoIDimage !== null && videoIDimage !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="image[0] && (!videoIDimage || videoIDimage === null || videoIDimage === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!image[0] && videoIDimage">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="videoIDimageLoad === videoIDimageChange && !image[0] && videoIDimage && videoIDimage !== null && videoIDimage !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!image[0] && (!videoIDimage || videoIDimage === null || videoIDimage === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="id_image" v-model="videoIDimage" @input="handleVideoIDimageChange" />
                                                </div>
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
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in videoSeoTagsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Tag:</label>
                                                                    <input class="a-input" type="text" v-model="item.tag" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                <mLabel name="ID Kontinentu" nameDB="id_continent" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_continent" v-model="videoIDcontinent" />
                                            </div>
                                            <!-- Form - id_continent END -->
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_state" v-model="videoIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Regionu" nameDB="id_region" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_region" v-model="videoIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Města" nameDB="id_city" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_city" v-model="videoIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Místa" nameDB="id_spot" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_spot" v-model="videoIDspot" />
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
                                                <aInputSlug :value="videoSlug" :valueCreate="videoTitle" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - platform -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Platforma" nameDB="platform" perex="" :required=true />
                                                <select class="m-select" name="platform" v-model="videoPlatform" required>
                                                    <option value="">- Vyber platformu -</option>
                                                    <option v-for="platform in platforms" :key="platform.id" :value="platform.id">{{platform.name}}</option>
                                                </select>
                                            </div>
                                            <!-- Form - platform END -->
                                            <!-- Form - type -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Žánr" nameDB="type" perex="Například <i>travel</i>, <i>event</i> nebo <i>talk</i>" :required=true />
                                                <input class="a-input" type="text" name="type" v-model="videoType" required />
                                            </div>
                                            <!-- Form - type END -->
                                            <!-- Form - title -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="title" perex="" :required=true />
                                                <input class="a-input" type="text" name="title" v-model="videoTitle" required />
                                            </div>
                                            <!-- Form - title END -->
                                            <!-- Form - perex -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="perex" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="perex" v-model="videoPerex"></textarea>
                                            </div>
                                            <!-- Form - perex END -->
                                            <!-- Form - url -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz" nameDB="url" perex="" :required=true />
                                                <input class="a-input" type="text" name="url" v-model="videoUrl" required />
                                            </div>
                                            <!-- Form - url END -->
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
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    //INTERFACES
    interface Platform {
        id: number
        name: string
    }

    interface seoTags {
        tag: string
    }

    interface Video {
        id: number
        slug: string
        id_continent: number
        id_state: number
        id_region: number
        id_city: number
        id_spot: number
        id_image: number
        platform: string
        type: string
        title: string
        perex: string
        url: string
        seo_tags: seoTags[]
    }

    interface Image {
        id: number
        source: string
        name: string
        type: string
    }

    export default defineComponent({
        name: 'AdminVideosSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
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
                        name: "Videa",
                        url: "/admin/videos",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace videa - NÁZEV VIDEA`,
                        url: "",
                        status: "span"
                    }
                ],
                videoSeoTags: '',
                videoSeoTagsArray: [] as { 
                    tag: string 
                }[]
            }
        },

        methods: {
            // breadcrumbs - update title name
            updateBreadcrumbs() {
                const videoTitle = this.videoTitle
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace videa - ${videoTitle}`
                }
            },
            // Input - change image id
            handleVideoIDimageChange() {
                this.videoIDimageChange = this.videoIDimage
                this.videoIDimageLoading = true
                this.loadImage()
            },
            handleImageLoad() {
                this.videoIDimageLoading = false;
            },
            // Input - seo tags
            addSeoTagsInput() {
                this.videoSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.videoSeoTagsArray.splice(index, 1)
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.videoSlug = newSlug
            }
        },

        watch: {
            // breadcrumbs - title name
            videoTitle: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            // seo tags
            videoSeoTags: function (newValue, oldValue) {
                try {
                    this.videoSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.videoSeoTagsArray = []
                }
            },
            videoSeoTagsArray: function (newValue, oldValue) {
                this.videoSeoTags = JSON.stringify(this.videoSeoTagsArray)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Videa - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Videa - úprava',
                ogTitle: 'Videa - úprava',
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
            const itemID = ref(null)
            const platforms = ref<Platform[]>([])
            const videoSlug = ref('')
            const videoIDcontinent = ref(null)
            const videoIDstate = ref(null)
            const videoIDregion = ref(null)
            const videoIDcity = ref(null)
            const videoIDspot = ref(null)
            const videoIDimage = ref(null)
            const videoPlatform = ref('')
            const videoType = ref('')
            const videoTitle = ref('')
            const videoPerex = ref('')
            const videoUrl = ref('')
            const image = ref<Image[]>([])
            const videoIDimageLoad = ref(null)
            const videoIDimageLoading = ref(false)
            const videoIDimageChange = ref(null)
            const videoSeoTags = ref('')
            const videoSeoTagsArray = ref([])

            //API - Video
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/video/${route.params.slug}`)
                
                const Video: Video[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Video) && Video.length > 0 && 'slug' in Video[0] && 'platform' in Video[0] && 'title' in Video[0] && 'url' in Video[0]) {
                    itemID.value = Video[0].id;
                    videoSlug.value = Video[0].slug;
                    videoIDcontinent.value = Video[0].id_continent;
                    videoIDstate.value = Video[0].id_state;
                    videoIDregion.value = Video[0].id_region;
                    videoIDcity.value = Video[0].id_city;
                    videoIDspot.value = Video[0].id_spot;
                    videoIDimage.value = Video[0].id_image;
                    videoPlatform.value = Video[0].platform;
                    videoType.value = Video[0].type;
                    videoTitle.value = Video[0].title;
                    videoPerex.value = Video[0].perex;
                    videoUrl.value = Video[0].url;
                    videoSeoTags.value = Video[0].seo_tags ? JSON.stringify(Video[0].seo_tags) : JSON.stringify([]);

                    // images load ids
                    videoIDimageLoad.value = videoIDimage.value
                    videoIDimageChange.value = videoIDimage.value
                    videoIDimageLoading.value = true

                    // Načítání image
                    if (videoIDimage.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${videoIDimage.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => image.value = data);
                    } else {
                        image.value = [];
                    }
                } else {

                }
            })()

            const loadImage = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${videoIDimage.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => image.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //API - Platform
            ;(async () => {
                fetch(`${runTimeConfig.public.baseURL}/platforms`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => platforms.value = data);
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/video-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': videoSlug.value,
                            'seo_tags': JSON.stringify(videoSeoTagsArray._value),
                            'id_continent': videoIDcontinent.value,
                            'id_state': videoIDstate.value,
                            'id_region': videoIDregion.value,
                            'id_city': videoIDcity.value,
                            'id_spot': videoIDspot.value,
                            'id_image': videoIDimage.value,
                            'platform': videoPlatform.value,
                            'type': videoType.value,
                            'title': videoTitle.value,
                            'perex': videoPerex.value,
                            'url': videoUrl.value
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
            return {
                successForm,
                errorForm,
                itemID,
                videoSlug,
                videoSeoTags,
                videoSeoTagsArray,
                videoIDcontinent,
                videoIDstate,
                videoIDregion,
                videoIDcity,
                videoIDspot,
                videoIDimage,
                videoPlatform,
                videoType,
                videoTitle,
                videoPerex,
                videoUrl,
                platforms,
                image,
                videoIDimageLoad,
                videoIDimageChange,
                videoIDimageLoading,
                editForm,
                loadImage
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