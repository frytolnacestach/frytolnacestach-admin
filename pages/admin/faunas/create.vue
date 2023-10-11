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
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="faunaIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="faunaIDimageHero" @image="handleImageHero" />
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
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="faunaSlug" :valueCreate="faunaName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - ids_states -->
                                            <div class="o-form-item__item">
                                                <mLabel name="IDčka států" nameDB="ids_states" perex="" :required=false />
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
                                            <!-- Form - ids_states END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="faunaName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name_lat -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název latinsky" nameDB="name_lat" perex="" :required=true />
                                                <input class="a-input" type="text" name="nameLat" v-model="faunaNameLat" required />
                                            </div>
                                            <!-- Form - name_lat END -->
                                            <!-- Form - location -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Lokace výskytu" nameDB="location" perex="" :required=false />
                                                <input class="a-input" type="text" name="nameLocation" v-model="faunaLocation" />
                                            </div>
                                            <!-- Form - location END -->
                                            <!-- Form - status_iucn -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Status IUCN" nameDB="status_iucn" perex="" :required=false />
                                                <input class="a-input" type="text" name="nameStatusIucn" v-model="faunaStatusIucn" />
                                            </div>
                                            <!-- Form - status_iucn END -->
                                            <!-- Form - status_danger -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Status nebezpečnosti" nameDB="status_danger" perex="" :required=false />
                                                <input class="a-input" type="text" name="nameStatusDanger" v-model="faunaStatusDanger" />
                                            </div>
                                            <!-- Form - status_danger END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="description" v-model="faunaDescription"></textarea>
                                            </div>
                                            <!-- Form - description END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Přidat faunu" />
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
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminFaunasCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
            mInputImage,
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
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.faunaSlug = newSlug
            },
            handleImageCover(newImage: string) {
                this.faunaIDimageCover = newImage
            },
            handleImageHero(newImage: string) {
                this.faunaIDimageHero = newImage
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