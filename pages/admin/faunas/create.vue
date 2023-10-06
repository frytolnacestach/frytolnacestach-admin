<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nové fauny" />
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
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="imageCover" v-model="faunaIDimageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="imageHero" v-model="faunaIDimageHero" />
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
                                            <!-- slug -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                    <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                                </label>
                                                <input class="a-input" type="text" name="slug" v-model="faunaSlug" required />
                                            </div>
                                            <!-- json -->
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
                                            <!-- other -->                            
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="name" v-model="faunaName" required />
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Název latinsky <span class="m-label__name-column">(name_lat)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameLat" v-model="faunaNameLat" required />
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Lokace výskytu <span class="m-label__name-column">(location)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameLocation" v-model="faunaLocation" />
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Status IUCN <span class="m-label__name-column">(status_iucn)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameStatusIucn" v-model="faunaStatusIucn" />
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Status nebezpečnosti <span class="m-label__name-column">(status_danger)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="nameStatusDanger" v-model="faunaStatusDanger" />
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                                </label>
                                                <textarea class="a-textarea" type="text" name="description" v-model="faunaDescription"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Přidat faunu</button>
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

    export default defineComponent({
        name: 'AdminFaunasCreatePage',

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
                        name: "Přidání nové fauny",
                        url: "",
                        status: "span"
                    }
                ],
                faunaIDSstatesArray: [],
                faunaSeoTagsArray: []
            }
        },

        methods: {
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
                title: 'Fauna - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Fauna - vytvoření',
                ogTitle: 'Fauna - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
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

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/fauna-create`, {
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
                        navigateTo(`/admin/faunas/${faunaSlug.value}`)
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
                faunaSlug,
                faunaIDimageCover,
                faunaIDimageHero,
                faunaSeoTags,
                faunaSeoTagsArray,
                faunaIDSstates,
                faunaIDSstatesArray,
                faunaName,
                faunaNameLat,
                faunaLocation,
                faunaStatusIucn,
                faunaStatusDanger,
                faunaDescription,
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