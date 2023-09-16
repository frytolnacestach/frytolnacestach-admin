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
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="videoSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Kontinentu <span class="m-label__name-column">(id_continent)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="id_continent" v-model="videoIDcontinent" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="id_state" v-model="videoIDstate" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Regionu <span class="m-label__name-column">(id_region)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="id_region" v-model="videoIDregion" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Města <span class="m-label__name-column">(id_city)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="id_city" v-model="videoIDcity" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Místa <span class="m-label__name-column">(id_spot)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="id_spot" v-model="videoIDspot" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku <span class="m-label__name-column">(id_image)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="id_image" v-model="videoIDimage" />
                                        </div>
                                        <!-- other -->                       
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Platforma <span class="m-label__name-column">(platform)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <select class="m-select" name="platform" v-model="videoPlatform" required>
                                                <option value="">- Vyber platformu -</option>
                                                <option v-for="platform in platforms" :key="platform.id" :value="platform.id">{{platform.name}}</option>
                                            </select>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Žánr <span class="m-label__name-column">(type)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Například <i>travel</i>, <i>event</i> nebo <i>talk</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="type" v-model="videoType" required />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(title)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="title" v-model="videoTitle" required />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(perex)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="perex" v-model="videoPerex"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkaz <span class="m-label__name-column">(url)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="url" v-model="videoUrl" required />
                                        </div>
                                        <!-- json -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in videoSeoTagsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Tag:</label>
                                                                <input class="a-input" type="text" v-model="item.tag" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-create__buttons mt-1">
                                                    <div class="o-form-create__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--button-->
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Přidat video</button>
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

    //INTERFACES
    interface Platform {
        id: number
        name: string
    }

    export default defineComponent({
        name: 'AdminVideosCreatePage',

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
                ],
                videoSeoTagsArray: []
            }
        },

        methods: {
            // seo tags
            addSeoTagsInput() {
                this.videoSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.videoSeoTagsArray.splice(index, 1)
            }
        },

        watch: {
            videoSeoTags: function (newValue, oldValue) {
                try {
                    this.videoSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.videoSeoTagsArray = []
                }
            },
            videoSeoTagsArray: function (newValue, oldValue) {
                this.videoSeoTags = JSON.stringify(newValue)
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
            const videoSeoTags = ref([])
            const videoSeoTagsArray = ref([])

            //API - Platform
            ;(async () => {
                fetch(`${runTimeConfig.public.baseURL}/platforms`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => platforms.value = data);
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
                            'seo_tags': JSON.stringify(videoSeoTagsArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/videos/${videoSlug.value}`)
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
                videoSeoTagsArray,
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