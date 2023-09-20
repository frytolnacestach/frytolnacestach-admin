<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Řetězec ' + chainName" />
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
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="chainSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': chainIDimageCoverLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && chainIDimageCover" @load="handleImageCoverLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && chainIDimageCoverLoad !== chainIDimageCoverChange && (chainIDimageCover && chainIDimageCover !== null && chainIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && (!chainIDimageCover || chainIDimageCover === null || chainIDimageCover === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && chainIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="chainIDimageCoverLoad === chainIDimageCoverChange && !imageCover[0] && chainIDimageCover && chainIDimageCover !== null && chainIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && (!chainIDimageCover || chainIDimageCover === null || chainIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="chainIDimageCover" @input="handlechainIDimageCoverChange" />
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': chainIDimageHeroLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && chainIDimageHero" @load="handleImageHeroLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && chainIDimageHeroLoad !== chainIDimageHeroChange && (chainIDimageHero && chainIDimageHero !== null && chainIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && (!chainIDimageHero || chainIDimageHero === null || chainIDimageHero === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && chainIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="chainIDimageHeroLoad === chainIDimageHeroChange && !imageHero[0] && chainIDimageHero && chainIDimageHero !== null && chainIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && (!chainIDimageHero || chainIDimageHero === null || chainIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="chainIDimageHero" @input="handlechainIDimageHeroChange" />
                                            </div>
                                        </div>
                                        <!-- other -->                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="chainName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="chainDescription"></textarea>
                                        </div>
                                        <!-- JSON -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace <span class="m-label__name-column">(information)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in chainInformationArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeInformationInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Type:</label>
                                                                <input class="a-input" type="text" v-model="item.type" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Value:</label>
                                                                <input class="a-input" type="text" v-model="item.value" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addInformationInput">Přidat information</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- JSON - Seo Tags -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in chainSeoTagsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Tag:</label>
                                                                <input class="a-input" type="text" v-model="item.tag" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- JSON -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">IDčka států <span class="m-label__name-column">(ids_states)</span></span>
                                            </label>
                                            
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in chainIDSstatesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeIDSstateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">ID:</label>
                                                                <input class="a-input" type="number" min="0" v-model="item.id" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addIDSstateInput">Přidat stát</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

    interface seoTags {
        tag: string
    }

    interface IDSstates {
        id: number
    }

    interface Information {
        type: string
        value: string
    }

    interface Chain {
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
        slug: string
        name: string
        description: string
        information: Information[]
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
        name: 'AdminChainsSlugPage',

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
                        name: "Řetězce",
                        url: "/admin/chains",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace řetězce - NÁZEV ŘETĚZCE`,
                        url: "",
                        status: "span"
                    }
                ],
                chainInformationArray: [],
                chainSeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const chainName = this.chainName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace značky - ${chainName}`
                }
            },
            // change image id
            handlechainIDimageCoverChange() {
                this.chainIDimageCoverChange = this.chainIDimageCover
                this.chainIDimageCoverLoading = true
                this.loadImageCover()
            },
            handlechainIDimageHeroChange() {
                this.chainIDimageHeroChange = this.chainIDimageHero
                this.chainIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.chainIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.chainIDimageHeroLoading = false;
            },
            // Information
            addInformationInput() {
                this.chainInformationArray.push({
                    type: '',
                    value: ''
                })
            },
            removeInformationInput(index: number) {
                this.chainInformationArray.splice(index, 1)
            },
            // seo tags
            addSeoTagsInput() {
                this.chainSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.chainSeoTagsArray.splice(index, 1)
            },
            // ids states
            addIDSstateInput() {
                this.chainIDSstatesArray.push({
                    id: null
                });
            },
            removeIDSstateInput(index: number) {
                this.chainIDSstatesArray.splice(index, 1);
            }
        },

        watch: {
            chainName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            // Information
            chainInformation: function (newValue, oldValue) {
                try {
                    this.chainInformationArray = JSON.parse(newValue)
                } catch (error) {
                    this.chainInformationArray = []
                }
            },
            chainInformationArray: function (newValue, oldValue) {
                this.chainInformation = JSON.stringify(newValue)
            },
            // seo tags
            chainSeoTags: function (newValue, oldValue) {
                try {
                    this.chainSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.chainSeoTagsArray = []
                }
            },
            chainSeoTagsArray: function (newValue, oldValue) {
                this.chainSeoTags = JSON.stringify(newValue)
            },
            // IDS states
            chainIDSstates: function (newValue, oldValue) {
                try {
                    this.chainIDSstatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.chainIDSstatesArray = [];
                }
            },
            chainIDSstatesArray: function (newValue, oldValue) {
                this.chainIDSstates = JSON.stringify(newValue);
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Řetězec - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Řetězec - úprava',
                ogTitle: 'Řetězec - úprava',
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
            const chainSlug = ref('')
            const chainIDimageCover = ref(null)
            const chainIDimageHero = ref(null)
            const chainIDSstates = ref([])
            const chainIDSstatesArray = ref([])
            const chainInformation = ref([])
            const chainInformationArray = ref([])
            const chainSeoTags = ref([])
            const chainSeoTagsArray = ref([])
            const chainName = ref('')
            const chainDescription = ref('')
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const chainIDimageCoverLoad = ref(null)
            const chainIDimageCoverLoading = ref(false)
            const chainIDimageCoverChange = ref(null)
            const chainIDimageHeroLoad = ref(null)
            const chainIDimageHeroLoading = ref(false)
            const chainIDimageHeroChange = ref(null)

            //API - chain
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/chain/${route.params.slug}`)
                
                const Chain: Chain[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Chain) && Chain.length > 0) {
                    chainSlug.value = Chain[0].slug;
                    chainIDimageCover.value = Chain[0].id_image_cover;
                    chainIDimageHero.value = Chain[0].id_image_hero;
                    chainInformation.value = Chain[0].information ? JSON.stringify(Chain[0].information) : JSON.stringify([]);
                    chainSeoTags.value = Chain[0].seo_tags ? JSON.stringify(Chain[0].seo_tags) : JSON.stringify([]);
                    ChainIDSstates.value = Chain[0].ids_states ? JSON.stringify(Chain[0].ids_states) : JSON.stringify([]);
                    chainName.value = Chain[0].name;
                    chainDescription.value = Chain[0].description;

                    // images load ids
                    chainIDimageCoverLoad.value = chainIDimageCover.value
                    chainIDimageCoverChange.value = chainIDimageCover.value
                    chainIDimageCoverLoading.value = true
                    chainIDimageHeroLoad.value = chainIDimageHero.value
                    chainIDimageHeroChange.value = chainIDimageHero.value
                    chainIDimageHeroLoading.value = true

                    // Načítání imageCover
                    if (chainIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${chainIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (chainIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${chainIDimageHero.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageHero.value = data);
                    } else {
                        imageHero.value = [];
                    }
                } else {

                }
            })()

            const loadImageCover = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${chainIDimageCover.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageCover.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageHero = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${chainIDimageHero.value}`, {
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
                    await useFetch(`${runTimeConfig.public.baseURL}/chain-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': chainSlug.value,
                            'id_image_cover': chainIDimageCover.value,
                            'id_image_hero': chainIDimageHero.value,
                            'information': JSON.stringify(chainInformationArray._value),
                            'seo_tags': JSON.stringify(chainSeoTagsArray._value),
                            'ids_states': JSON.stringify(chainsIDSstatesArray._value),
                            'name': chainName.value,
                            'description': chainDescription.value,
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
                chainSlug,
                chainIDimageCover,
                chainIDimageHero,
                chainIDSstates,
                chainIDSstatesArray,
                chainInformation,
                chainInformationArray,
                chainSeoTags,
                chainSeoTagsArray,
                chainName,
                chainDescription,
                imageCover,
                imageHero,
                chainIDimageCoverLoad,
                chainIDimageCoverChange,
                chainIDimageCoverLoading,
                chainIDimageHeroLoad,
                chainIDimageHeroChange,
                chainIDimageHeroLoading,
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