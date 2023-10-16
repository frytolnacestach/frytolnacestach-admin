<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového video" />
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
                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" />
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
                                                <mLabel name="ID Kontinentu" nameDB="id_continent" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDcontinent" name="id_continent" :required=false @id-place="handleIDcontinent" />
                                            </div>
                                            <!-- Form - id_continent END -->
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDstate" name="id_state" :required=false @id-place="handleIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Regionu" nameDB="id_region" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDregion" name="id_region" :required=false @id-place="handleIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Města" nameDB="id_city" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDcity" name="id_city" :required=false @id-place="handleIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Místa" nameDB="id_spot" perex="" :required=false />
                                                <mInputIDPlaces :value="videoIDspot" name="id_spot" :required=false @id-place="handleIDspot" />
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
                                                <aInputSlug :value="videoSlug" :valueCreate="videoTitle" :edit=true @slug="handleSlug" />
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
                                            <mButton text="Přidat video" />
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

    export default defineComponent({
        name: 'AdminVideosCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
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
                        url: "/admin/",
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
                        name: "Přidání nového videa",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            // Components input changes
            handleSlug(newSlug: string) {
                this.videoSlug = newSlug
            },
            handleImage(newImage: string) {
                this.videoIDimage = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.videoSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDcontinent(newImage: string) {
                this.videoIDcontinent = newImage
            },
            handleIDstate(newImage: string) {
                this.videoIDstate = newImage
            },
            handleIDregion(newImage: string) {
                this.videoIDregion = newImage
            },
            handleIDcity(newImage: string) {
                this.videoIDcity = newImage
            },
            handleIDspot(newImage: string) {
                this.videoIDspot = newImage
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Videa - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Videa - vytvoření',
                ogTitle: 'Videa - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
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
            const videoSeoTags = ref('')

            //API - Platform
            ;(async () => {
                fetch(`${runTimeConfig.public.baseURL}/platforms`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => platforms.value = data)
            })()

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/video-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': videoSlug.value,
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
                            'url': videoUrl.value,
                            'seo_tags': videoSeoTags._value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/videos/${videoSlug.value}`)
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
                videoSlug,
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
                videoSeoTags,
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