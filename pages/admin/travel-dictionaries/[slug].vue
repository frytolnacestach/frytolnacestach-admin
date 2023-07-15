<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Cestovatelský výraz ' + travelDictionaryName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-edit">
                        <div class="o-form-edit__outer">
                            <div class="o-form-edit__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        <!-- slug -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="travelDictionarySlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': travelDictionaryIDimageCoverLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && travelDictionaryIDimageCover" @load="handleImageCoverLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && travelDictionaryIDimageCoverLoad !== travelDictionaryIDimageCoverChange && (travelDictionaryIDimageCover && travelDictionaryIDimageCover !== null && travelDictionaryIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && (!travelDictionaryIDimageCover || travelDictionaryIDimageCover === null || travelDictionaryIDimageCover === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && travelDictionaryIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="travelDictionaryIDimageCoverLoad === travelDictionaryIDimageCoverChange && !imageCover[0] && travelDictionaryIDimageCover && travelDictionaryIDimageCover !== null && travelDictionaryIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && (!travelDictionaryIDimageCover || travelDictionaryIDimageCover === null || travelDictionaryIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="travelDictionaryIDimageCover" @input="handleTravelDictionaryIDimageCoverChange" />
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': travelDictionaryIDimageHeroLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && travelDictionaryIDimageHero" @load="handleImageHeroLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && travelDictionaryIDimageHeroLoad !== travelDictionaryIDimageHeroChange && (travelDictionaryIDimageHero && travelDictionaryIDimageHero !== null && travelDictionaryIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && (!travelDictionaryIDimageHero || travelDictionaryIDimageHero === null || travelDictionaryIDimageHero === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && travelDictionaryIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="travelDictionaryIDimageHeroLoad === travelDictionaryIDimageHeroChange && !imageHero[0] && travelDictionaryIDimageHero && travelDictionaryIDimageHero !== null && travelDictionaryIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && (!travelDictionaryIDimageHero || travelDictionaryIDimageHero === null || travelDictionaryIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="travelDictionaryIDimageHero" @input="handleTravelDictionaryIDimageHeroChange" />
                                            </div>
                                        </div>
                                        <!-- other -->                             
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="travelDictionaryName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="travelDictionaryDescription"></textarea>
                                        </div>             
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
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

    interface TravelDictionaries {
        id_image_cover: number
        id_image_hero: number
        slug: string
        name: string
        description: string
    }

    interface ImageCover {
        id: number
        source: string
        name: string
        type: string
    }

    interface ImageHero {
        id: number
        source: string
        name: string
        type: string
    }

    export default defineComponent({
        name: 'AdminTravelDictionariesSlugPage',

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
                        name: "Cestovatelský slovník",
                        url: "/admin/travel-dictionaries",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace záznamu ve slovníku - NÁZEV POLOŽKY`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const travelDictionaryName = this.travelDictionaryName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace cestovatelského výrazu - ${travelDictionaryName}`
                }
            },
            // change image id
            handleTravelDictionaryIDimageCoverChange() {
                this.travelDictionaryIDimageCoverChange = this.travelDictionaryIDimageCover
                this.travelDictionaryIDimageCoverLoading = true
                this.loadImageCover()
            },
            handleTravelDictionaryIDimageHeroChange() {
                this.travelDictionaryIDimageHeroChange = this.travelDictionaryIDimageHero
                this.travelDictionaryIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.travelDictionaryIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.travelDictionaryIDimageHeroLoading = false;
            },
        },

        watch: {
            travelDictionaryName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Cestovaleský slovník - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Cestovaleský slovník - úprava',
                ogTitle: 'Cestovaleský slovník - úprava',
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
            const travelDictionaryIDimageCover = ref(null)
            const travelDictionaryIDimageHero = ref(null)
            const travelDictionarySlug = ref('')
            const travelDictionaryName = ref('')
            const travelDictionaryDescription = ref('')
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const travelDictionaryIDimageCoverLoad = ref(null)
            const travelDictionaryIDimageCoverLoading = ref(false)
            const travelDictionaryIDimageCoverChange = ref(null)
            const travelDictionaryIDimageHeroLoad = ref(null)
            const travelDictionaryIDimageHeroLoading = ref(false)
            const travelDictionaryIDimageHeroChange = ref(null)

            //API - travelDictionary
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/travel-dictionary/${route.params.slug}`)
                
                const TravelDictionaries: TravelDictionaries[] = JSON.parse(_rawValue)
                
                if (Array.isArray(TravelDictionaries) && TravelDictionaries.length > 0) {
                    travelDictionaryIDimageCover.value = TravelDictionaries[0].id_image_cover;
                    travelDictionaryIDimageHero.value = TravelDictionaries[0].id_image_hero;
                    travelDictionarySlug.value = TravelDictionaries[0].slug;
                    travelDictionaryName.value = TravelDictionaries[0].name;
                    travelDictionaryDescription.value = TravelDictionaries[0].description;

                    // images load ids
                    travelDictionaryIDimageCoverLoad.value = travelDictionaryIDimageCover.value
                    travelDictionaryIDimageCoverChange.value = travelDictionaryIDimageCover.value
                    travelDictionaryIDimageCoverLoading.value = true
                    travelDictionaryIDimageHeroLoad.value = travelDictionaryIDimageHero.value
                    travelDictionaryIDimageHeroChange.value = travelDictionaryIDimageHero.value
                    travelDictionaryIDimageHeroLoading.value = true

                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${travelDictionaryIDimageCover.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageCover.value = data);

                    // Načítání imageHero
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${travelDictionaryIDimageHero.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageHero.value = data);
                } else {

                }
            })()

            const loadImageCover = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${travelDictionaryIDimageCover.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageCover.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageHero = async () => {
                try {
                    // Načítání imageHero
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${travelDictionaryIDimageHero.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageHero.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/travel-dictionary-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_image_cover': travelDictionaryIDimageCover.value,
                            'id_image_hero': travelDictionaryIDimageHero.value,
                            'slug': travelDictionarySlug.value,
                            'name': travelDictionaryName.value,
                            'description': travelDictionaryDescription.value
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
                travelDictionaryIDimageCover,
                travelDictionaryIDimageHero,
                travelDictionarySlug,
                travelDictionaryName,
                travelDictionaryDescription,
                imageCover,
                imageHero,
                travelDictionaryIDimageCoverLoad,
                travelDictionaryIDimageCoverChange,
                travelDictionaryIDimageCoverLoading,
                travelDictionaryIDimageHeroLoad,
                travelDictionaryIDimageHeroChange,
                travelDictionaryIDimageHeroLoading,
                editForm,
                loadImageCover,
                loadImageHero
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