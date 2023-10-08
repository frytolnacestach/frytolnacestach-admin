<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Značka ' + brandName" />
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
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': brandIDimageCoverLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && brandIDimageCover" @load="handleImageCoverLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && brandIDimageCoverLoad !== brandIDimageCoverChange && (brandIDimageCover && brandIDimageCover !== null && brandIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && (!brandIDimageCover || brandIDimageCover === null || brandIDimageCover === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && brandIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="brandIDimageCoverLoad === brandIDimageCoverChange && !imageCover[0] && brandIDimageCover && brandIDimageCover !== null && brandIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && (!brandIDimageCover || brandIDimageCover === null || brandIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="brandIDimageCover" @input="handleBrandIDimageCoverChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': brandIDimageHeroLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && brandIDimageHero" @load="handleImageHeroLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && brandIDimageHeroLoad !== brandIDimageHeroChange && (brandIDimageHero && brandIDimageHero !== null && brandIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && (!brandIDimageHero || brandIDimageHero === null || brandIDimageHero === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && brandIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="brandIDimageHeroLoad === brandIDimageHeroChange && !imageHero[0] && brandIDimageHero && brandIDimageHero !== null && brandIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && (!brandIDimageHero || brandIDimageHero === null || brandIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="brandIDimageHero" @input="handleBrandIDimageHeroChange" />
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
                                                        <div class="o-form-item__group-item" v-for="(item, index) in brandSeoTagsArray" :key="index">
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

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <input class="a-input" type="text" name="slug" v-model="brandSlug" required />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="IDčka států" nameDB="ids_states" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in brandIDSstatesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeIDSstateInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">ID:</label>
                                                                    <input class="a-input" type="number" min="0" v-model="item.id" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addIDSstateInput">Přidat stát</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - ids_states(JSON) END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="brandName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="description" v-model="brandDescription"></textarea>
                                            </div>
                                            <!-- Form - description END -->
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
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'


    interface IDSstates {
        id: number
    }

    interface seoTags {
        tag: string
    }

    interface Brand {
        id: number
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
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
        name: 'AdminBrandsSlugPage',

        //COMPONENTS
        components: {
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
                        name: "Značky",
                        url: "/admin/brands",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace značku - NÁZEV ZNAČKY`,
                        url: "",
                        status: "span"
                    }
                ],
                brandIDSstatesArray: [],
                brandSeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const brandName = this.brandName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace značky - ${brandName}`
                }
            },
            // change image id
            handleBrandIDimageCoverChange() {
                this.brandIDimageCoverChange = this.brandIDimageCover
                this.brandIDimageCoverLoading = true
                this.loadImageCover()
            },
            handleBrandIDimageHeroChange() {
                this.brandIDimageHeroChange = this.brandIDimageHero
                this.brandIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.brandIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.brandIDimageHeroLoading = false;
            },
            // seo tags
            addSeoTagsInput() {
                this.brandSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.brandSeoTagsArray.splice(index, 1)
            },
            // ids states
            addIDSstateInput() {
                this.brandIDSstatesArray.push({
                    id: null
                });
            },
            removeIDSstateInput(index: number) {
                this.brandIDSstatesArray.splice(index, 1);
            }
        },

        watch: {
            brandName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            brandSeoTags: function (newValue, oldValue) {
                try {
                    this.brandSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.brandSeoTagsArray = []
                }
            },
            brandSeoTagsArray: function (newValue, oldValue) {
                this.brandSeoTags = JSON.stringify(newValue)
            },
            brandIDSstates: function (newValue, oldValue) {
                try {
                    this.brandIDSstatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.brandIDSstatesArray = [];
                }
            },
            brandIDSstatesArray: function (newValue, oldValue) {
                this.brandIDSstates = JSON.stringify(newValue);
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Značka - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Značka - úprava',
                ogTitle: 'Značka - úprava',
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
            const brandSlug = ref('')
            const brandIDimageCover = ref(null)
            const brandIDimageHero = ref(null)
            const brandSeoTags = ref([])
            const brandSeoTagsArray = ref([])
            const brandIDSstates = ref([])
            const brandIDSstatesArray = ref([])
            const brandName = ref('')
            const brandDescription = ref('')
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const brandIDimageCoverLoad = ref(null)
            const brandIDimageCoverLoading = ref(false)
            const brandIDimageCoverChange = ref(null)
            const brandIDimageHeroLoad = ref(null)
            const brandIDimageHeroLoading = ref(false)
            const brandIDimageHeroChange = ref(null)

            //API - Brand
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/brand/${route.params.slug}`)
                
                const Brand: Brand[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Brand) && Brand.length > 0) {
                    itemID.value = Brand[0].id;
                    brandSlug.value = Brand[0].slug;
                    brandIDimageCover.value = Brand[0].id_image_cover;
                    brandIDimageHero.value = Brand[0].id_image_hero;
                    brandSeoTags.value = Brand[0].seo_tags ? JSON.stringify(Brand[0].seo_tags) : JSON.stringify([]);
                    brandIDSstates.value = Brand[0].ids_states ? JSON.stringify(Brand[0].ids_states) : JSON.stringify([]);
                    brandName.value = Brand[0].name;
                    brandDescription.value = Brand[0].description;

                    // images load ids
                    brandIDimageCoverLoad.value = brandIDimageCover.value
                    brandIDimageCoverChange.value = brandIDimageCover.value
                    brandIDimageCoverLoading.value = true
                    brandIDimageHeroLoad.value = brandIDimageHero.value
                    brandIDimageHeroChange.value = brandIDimageHero.value
                    brandIDimageHeroLoading.value = true

                    // Načítání imageCover
                    if (brandIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${brandIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (brandIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${brandIDimageHero.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${brandIDimageCover.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${brandIDimageHero.value}`, {
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
                    await useFetch(`${runTimeConfig.public.baseURL}/brand-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': brandSlug.value,
                            'id_image_cover': brandIDimageCover.value,
                            'id_image_hero': brandIDimageHero.value,
                            'seo_tags': JSON.stringify(brandSeoTagsArray._value),
                            'ids_states': JSON.stringify(brandIDSstatesArray._value),
                            'name': brandName.value,
                            'description': brandDescription.value,
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
                brandSlug,
                brandIDimageCover,
                brandIDimageHero,
                brandSeoTags,
                brandSeoTagsArray,
                brandIDSstates,
                brandIDSstatesArray,
                brandName,
                brandDescription,
                imageCover,
                imageHero,
                brandIDimageCoverLoad,
                brandIDimageCoverChange,
                brandIDimageCoverLoading,
                brandIDimageHeroLoad,
                brandIDimageHeroChange,
                brandIDimageHeroLoading,
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