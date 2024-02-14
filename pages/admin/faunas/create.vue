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
                                                <mInputsSeoTags :value="faunaSeoTags" @seo-tags="handleSeoTags" />
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
                                                <mInputsIDSStates :value="faunaIDSstates" type="state" @ids-states="handleIDSStates" />
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
                                                <aTextarea :value="faunaDescription" name="description" :required=false @textareaValue="handleDescription" />
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
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputsIDSStates from '@/components/molecules/mInputsIDSStates.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminFaunasCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButton,
            mHeadlineForm,
            mInputsIDSStates,
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
                ]
            }
        },

        methods: {
            // Components input changes
            handleSlug(newSlug: string) {
                this.faunaSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.faunaIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.faunaIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.faunaSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDSStates(newIDSStates: string) {
                this.faunaIDSstates = JSON.stringify(newIDSStates)
            },
            handleDescription(newDescription: string) {
                this.faunaDescription = newDescription
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
            const faunaIDimageCover = ref<number | null>(null)
            const faunaIDimageHero = ref<number | null>(null)
            const faunaSeoTags = ref<never[] | string[]>([])
            const faunaIDSstates = ref<never[] | string[]>([])
            const faunaName = ref('')
            const faunaNameLat = ref('')
            const faunaLocation = ref('')
            const faunaStatusIucn = ref('')
            const faunaStatusDanger = ref('')
            const faunaDescription = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/fauna-create`, {
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
                            'seo_tags': faunaSeoTags.value,
                            'ids_states': faunaIDSstates.value,
                            'name': faunaName.value,
                            'name_lat': faunaNameLat.value,
                            'location': faunaLocation.value,
                            'status_iucn': faunaStatusIucn.value,
                            'status_danger': faunaStatusDanger.value,
                            'description': faunaDescription.value,
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla uložená.')
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/faunas/${faunaSlug.value}`)
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla uložena.')
                        errorForm.value = "Nastala chyba a data nebyla uložena."
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
                faunaSlug,
                faunaIDimageCover,
                faunaIDimageHero,
                faunaSeoTags,
                faunaIDSstates,
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