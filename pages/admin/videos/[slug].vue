<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="videoTitle" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/videa/' + videoSlug" text="Zobrazit na webu" />

                    <form class="o-form-item" @submit.prevent="editForm">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form" v-if="loadingData">
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
                                            <!-- Form - id_image -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku" nameDB="id_image" perex="" :required=false />
                                                <mInputImage :value="videoIDimage" @image="handleImage" />
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
                                                <mInputsSeoTags :value="videoSeoTags" @seo-tags="handleSeoTags" />
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
                                                <mLabel nname="Název kontinentu" nameDB="id_continent" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDcontinent" name="id_continent" type="continent" :required=false @id-place="handleIDcontinent" />
                                            </div>
                                            <!-- Form - id_continent END -->
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název státu" nameDB="id_state" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDstate" name="id_state" type="state" :required=false @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název regionu" nameDB="id_region" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDregion" name="id_region" type="region" :required=false @id-place="handleIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název města" nameDB="id_city" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDcity" name="id_city" type="city" :required=false @id-place="handleIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název místa" nameDB="id_spot" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDspot" name="id_spot" type="spot" :required=false @id-place="handleIDspot" />
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
                                            <!-- Form - title -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="title" perex="" :required=true />
                                                <input class="a-input" type="text" name="title" v-model="videoTitle" required />
                                            </div>
                                            <!-- Form - title END -->
                                            <!-- Form - perex -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="perex" perex="" :required=false />
                                                <aTextarea :value="videoPerex" name="perex" :required=false @textareaValue="handlePerex" />
                                            </div>
                                            <!-- Form - perex END -->
                                            <!-- Form - platform -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Platforma" nameDB="platform" perex="" :required=true />
                                                <div class="m-select">
                                                    <select class="m-select__select" name="platform" v-model="videoPlatform" required>
                                                        <option value="">- Vyber platformu -</option>
                                                        <option v-for="platform in platforms" :key="platform.id" :value="platform.id">{{platform.name}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- Form - platform END -->
                                            <!-- Form - type -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Žánr" nameDB="type" perex="Například <i>travel</i>, <i>event</i> nebo <i>talk</i>" :required=true />
                                                <input class="a-input" type="text" name="type" v-model="videoType" required />
                                            </div>
                                            <!-- Form - type END -->
                                            <!-- Form - url -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz" nameDB="url" perex="" :required=true />
                                                <input class="a-input" type="text" name="url" v-model="videoUrl" required />
                                            </div>
                                            <!-- Form - url END -->
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
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
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
        created_at: string
        updated_at: string
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

    export default defineComponent({
        name: 'AdminVideosSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
            mHeadlineForm,
            mInputIDPlaces,
            mInputImage,
            mInputsSeoTags,
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
                ]
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
            // Components input changes
            handleSlug(newSlug: string) {
                this.videoSlug = newSlug
            },
            handleImage(newImage: number) {
                this.videoIDimage = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.videoSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDcontinent(newIDcontinent: number) {
                this.videoIDcontinent = newIDcontinent
            },
            handleIDstate(newIDstate: number) {
                this.videoIDstate = newIDstate
            },
            handleIDregion(newIDregion: number) {
                this.videoIDregion = newIDregion
            },
            handleIDcity(newIDcity: number) {
                this.videoIDcity = newIDcity
            },
            handleIDspot(newIDspot: number) {
                this.videoIDspot = newIDspot
            },
            handlePerex(newPerex: string) {
                this.videoPerex = newPerex
            }
        },

        watch: {
            // breadcrumbs - title name
            videoTitle: function (newValue, oldValue) {
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
            const platforms = ref<Platform[]>([])
            const videoSlug = ref('')
            const videoIDcontinent = ref<number | null>(null)
            const videoIDstate = ref<number | null>(null)
            const videoIDregion = ref<number | null>(null)
            const videoIDcity = ref<number | null>(null)
            const videoIDspot = ref<number | null>(null)
            const videoIDimage = ref<number | null>(null)
            const videoPlatform = ref('')
            const videoType = ref('')
            const videoTitle = ref('')
            const videoPerex = ref('')
            const videoUrl = ref('')
            const videoSeoTags = ref('')

            //API - Video
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/video/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const Video: Video[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Video) && Video.length > 0 && 'slug' in Video[0] && 'platform' in Video[0] && 'title' in Video[0] && 'url' in Video[0]) {
                    itemID.value = Video[0].id
                    createdAt.value = Video[0].created_at
                    updatedAt.value = Video[0].updated_at
                    videoSlug.value = Video[0].slug
                    videoIDcontinent.value = Video[0].id_continent
                    videoIDstate.value = Video[0].id_state
                    videoIDregion.value = Video[0].id_region
                    videoIDcity.value = Video[0].id_city
                    videoIDspot.value = Video[0].id_spot
                    videoIDimage.value = Video[0].id_image
                    videoPlatform.value = Video[0].platform
                    videoType.value = Video[0].type
                    videoTitle.value = Video[0].title
                    videoPerex.value = Video[0].perex
                    videoUrl.value = Video[0].url
                    videoSeoTags.value = Video[0].seo_tags ? JSON.stringify(Video[0].seo_tags) : JSON.stringify([])
                    loadingData.value = true
                }
            })()

            //API - Platform
            ;(async () => {
                fetch(`${runTimeConfig.public.baseURL}/platforms`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => platforms.value = data)
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/video-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'slug': videoSlug.value,
                            'seo_tags': videoSeoTags.value,
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
                videoSlug,
                videoSeoTags,
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