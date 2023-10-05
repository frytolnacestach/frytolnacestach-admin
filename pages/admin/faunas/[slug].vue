<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'fauna ' + faunaName" />
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
                                                <label class="m-label">
                                                    <span class="m-label__name">ID <span class="m-label__name-column">(id)</span><span class="m-label__name-required">*</span></span>
                                                </label>
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
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                                </label>
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': faunaIDimageCoverLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && faunaIDimageCover" @load="handleImageCoverLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && faunaIDimageCoverLoad !== faunaIDimageCoverChange && (faunaIDimageCover && faunaIDimageCover !== null && faunaIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && (!faunaIDimageCover || faunaIDimageCover === null || faunaIDimageCover === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && faunaIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="faunaIDimageCoverLoad === faunaIDimageCoverChange && !imageCover[0] && faunaIDimageCover && faunaIDimageCover !== null && faunaIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && (!faunaIDimageCover || faunaIDimageCover === null || faunaIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="faunaIDimageCover" @input="handleFaunaIDimageCoverChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                                </label>
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': faunaIDimageHeroLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && faunaIDimageHero" @load="handleImageHeroLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && faunaIDimageHeroLoad !== faunaIDimageHeroChange && (faunaIDimageHero && faunaIDimageHero !== null && faunaIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && (!faunaIDimageHero || faunaIDimageHero === null || faunaIDimageHero === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && faunaIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="faunaIDimageHeroLoad === faunaIDimageHeroChange && !imageHero[0] && faunaIDimageHero && faunaIDimageHero !== null && faunaIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && (!faunaIDimageHero || faunaIDimageHero === null || faunaIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="faunaIDimageHero" @input="handleFaunaIDimageHeroChange" />
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
                                                <label class="m-label">
                                                    <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in faunaSeoTagsArray" :key="index">
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
                                                <label class="m-label">
                                                    <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                    <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                                </label>
                                                <input class="a-input" type="text" name="slug" v-model="faunaSlug" required />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">IDčka států <span class="m-label__name-column">(ids_states)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in faunaIDSstatesArray" :key="index">
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
                                                <label class="m-label">
                                                    <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="name" v-model="faunaName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name_lat -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Název latinsky <span class="m-label__name-column">(name_lat)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameLat" v-model="faunaNameLat" required />
                                            </div>
                                            <!-- Form - name_lat END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                                </label>
                                                <textarea class="a-textarea" type="text" name="description" v-model="faunaDescription"></textarea>
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - location -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Lokace výskytu <span class="m-label__name-column">(location)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameLocation" v-model="faunaLocation" />
                                            </div>
                                            <!-- Form - location END -->
                                            <!-- Form - status_iucn -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Status IUCN <span class="m-label__name-column">(status_iucn)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameStatusIusn" v-model="faunaStatusIucn" />
                                            </div>
                                            <!-- Form - status_iucn END -->
                                            <!-- Form - status_danger -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Status nebezpečnosti <span class="m-label__name-column">(status_danger)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameStatusDanger" v-model="faunaStatusDanger" />
                                            </div>
                                            <!-- Form - status_danger END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
                                            </div>
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
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface IDSstates {
        id: number
    }

    interface seoTags {
        tag: string
    }

    interface Fauna {
        id: number
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
        slug: string
        name: string
        name_lat: string
        location: string
        status_iucn: string
        status_danger: string
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
        name: 'AdminFaunasSlugPage',

        //COMPONENTS
        components: {
            mHeadlineForm,
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
                        name: "Fauna",
                        url: "/admin/faunas",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace fauny - NÁZEV FAUNY`,
                        url: "",
                        status: "span"
                    }
                ],
                faunaIDSstatesArray: [],
                faunaSeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const faunaName = this.faunaName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace fauny - ${faunaName}`
                }
            },
            // change image id
            handleFaunaIDimageCoverChange() {
                this.faunaIDimageCoverChange = this.faunaIDimageCover
                this.faunaIDimageCoverLoading = true
                this.loadImageCover()
            },
            handleFaunaIDimageHeroChange() {
                this.faunaIDimageHeroChange = this.faunaIDimageHero
                this.faunaIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.faunaIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.faunaIDimageHeroLoading = false;
            },
            // seo tags
            addSeoTagsInput() {
                this.faunaSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.faunaSeoTagsArray.splice(index, 1)
            },
            // ids states
            addIDSstateInput() {
                this.faunaIDSstatesArray.push({
                    id: null
                });
            },
            removeIDSstateInput(index: number) {
                this.faunaIDSstatesArray.splice(index, 1);
            }
        },

        watch: {
            faunaName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            faunaSeoTags: function (newValue, oldValue) {
                try {
                    this.faunaSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.faunaSeoTagsArray = []
                }
            },
            faunaSeoTagsArray: function (newValue, oldValue) {
                this.faunaSeoTags = JSON.stringify(newValue)
            },
            faunaIDSstates: function (newValue, oldValue) {
                try {
                    this.faunaIDSstatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.faunaIDSstatesArray = [];
                }
            },
            faunaIDSstatesArray: function (newValue, oldValue) {
                this.faunaIDSstates = JSON.stringify(newValue);
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Fauna - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Fauna - úprava',
                ogTitle: 'Fauna - úprava',
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
            const faunaSlug = ref('')
            const faunaIDimageCover = ref(null)
            const faunaIDimageHero = ref(null)
            const faunaSeoTags = ref([])
            const faunaSeoTagsArray = ref([])
            const faunaIDSstates = ref([])
            const faunaIDSstatesArray = ref([])
            const faunaName = ref('')
            const faunaNameLat = ref('')
            const faunaLocation = ref('')
            const faunaStatusIucn = ref('')
            const faunaStatusDanger = ref('')
            const faunaDescription = ref('')
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const faunaIDimageCoverLoad = ref(null)
            const faunaIDimageCoverLoading = ref(false)
            const faunaIDimageCoverChange = ref(null)
            const faunaIDimageHeroLoad = ref(null)
            const faunaIDimageHeroLoading = ref(false)
            const faunaIDimageHeroChange = ref(null)

            //API - fauna
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/fauna/${route.params.slug}`)
                
                const Fauna: Fauna[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Fauna) && Fauna.length > 0) {
                    itemID.value = Fauna[0].id;
                    faunaSlug.value = Fauna[0].slug;
                    faunaIDimageCover.value = Fauna[0].id_image_cover;
                    faunaIDimageHero.value = Fauna[0].id_image_hero;
                    faunaSeoTags.value = Fauna[0].seo_tags ? JSON.stringify(Fauna[0].seo_tags) : JSON.stringify([]);
                    faunaIDSstates.value = Fauna[0].ids_states ? JSON.stringify(Fauna[0].ids_states) : JSON.stringify([]);
                    faunaName.value = Fauna[0].name;
                    faunaNameLat.value = Fauna[0].name_lat;
                    faunaLocation.value = Fauna[0].location;
                    faunaStatusIucn.value = Fauna[0].status_iucn;
                    faunaStatusDanger.value = Fauna[0].status_danger;
                    faunaDescription.value = Fauna[0].description;

                    // images load ids
                    faunaIDimageCoverLoad.value = faunaIDimageCover.value
                    faunaIDimageCoverChange.value = faunaIDimageCover.value
                    faunaIDimageCoverLoading.value = true
                    faunaIDimageHeroLoad.value = faunaIDimageHero.value
                    faunaIDimageHeroChange.value = faunaIDimageHero.value
                    faunaIDimageHeroLoading.value = true

                    // Načítání imageCover
                    if (faunaIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${faunaIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (faunaIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${faunaIDimageHero.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${faunaIDimageCover.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${faunaIDimageHero.value}`, {
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
                    await useFetch(`${runTimeConfig.public.baseURL}/fauna-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': faunaSlug.value,
                            'id_image_cover': faunaIDimageCover.value,
                            'id_image_hero': faunaIDimageHero.value,
                            'seo_tags': JSON.stringify(faunaSeoTagsArray._value),
                            'ids_states': JSON.stringify(faunaIDSstatesArray._value),
                            'name': faunaName.value,
                            'name_lat': faunaNameLat.value,
                            'location': faunaLocation.value,
                            'status_iucn': faunaStatusIucn.value,
                            'status_danger': faunaStatusDanger.value,
                            'description': faunaDescription.value,
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
                faunaSlug,
                faunaSeoTags,
                faunaSeoTagsArray,
                faunaIDimageCover,
                faunaIDimageHero,
                faunaIDSstates,
                faunaIDSstatesArray,
                faunaName,
                faunaNameLat,
                faunaLocation,
                faunaStatusIucn,
                faunaStatusDanger,
                faunaDescription,
                imageCover,
                imageHero,
                faunaIDimageCoverLoad,
                faunaIDimageCoverChange,
                faunaIDimageCoverLoading,
                faunaIDimageHeroLoad,
                faunaIDimageHeroChange,
                faunaIDimageHeroLoading,
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