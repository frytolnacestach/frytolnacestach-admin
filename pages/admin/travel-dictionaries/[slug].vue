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
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/cestovatelsky-slovnik/' + travelDictionarySlug" text="Zobrazit na webu" />

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
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="travelDictionaryIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="travelDictionaryIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="travelDictionarySeoTags" @seo-tags="handleSeoTags" />
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
                                                <aInputSlug :value="travelDictionarySlug" :valueCreate="travelDictionaryName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="travelDictionaryName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <aTextarea :value="travelDictionaryDescription" name="description" :required=false @textareaValue="handleTravelDictionaryDescription" />
                                            </div>
                                            <!-- Form - description END-->
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
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface seoTags {
        tag: string
    }

    interface TravelDictionaries {
        id: number
        created_at: string
        updated_at: string
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        slug: string
        name: string
        description: string
    }

    export default defineComponent({
        name: 'AdminTravelDictionariesSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
            mHeadlineForm,
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
            // Components input changes
            handleSlug(newSlug: string) {
                this.travelDictionarySlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.travelDictionaryIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.travelDictionaryIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.travelDictionarySeoTags = JSON.stringify(newSeoTags)
            },
            handleTravelDictionaryDescription(newDescription: string) {
                this.travelDictionaryDescription = newDescription
            }
        },

        watch: {
            travelDictionaryName: function (newValue, oldValue) {
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
            const travelDictionaryIDimageCover = ref<number | null>(null)
            const travelDictionaryIDimageHero = ref<number | null>(null)
            const travelDictionarySlug = ref('')
            const travelDictionaryName = ref('')
            const travelDictionaryDescription = ref('')
            const travelDictionarySeoTags = ref<never[] | string[]>([])

            //API - travelDictionary
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/travel-dictionary/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const TravelDictionaries: TravelDictionaries[] = JSON.parse(dataAPI)
                
                if (Array.isArray(TravelDictionaries) && TravelDictionaries.length > 0) {
                    itemID.value = TravelDictionaries[0].id
                    createdAt.value = TravelDictionaries[0].created_at
                    updatedAt.value = TravelDictionaries[0].updated_at
                    travelDictionaryIDimageCover.value = TravelDictionaries[0].id_image_cover
                    travelDictionaryIDimageHero.value = TravelDictionaries[0].id_image_hero
                    travelDictionarySlug.value = TravelDictionaries[0].slug
                    travelDictionaryName.value = TravelDictionaries[0].name
                    travelDictionaryDescription.value = TravelDictionaries[0].description
                    travelDictionarySeoTags.value = TravelDictionaries[0].seo_tags ? JSON.stringify(TravelDictionaries[0].seo_tags) : JSON.stringify([])
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/travel-dictionary-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'id_image_cover': travelDictionaryIDimageCover.value,
                            'id_image_hero': travelDictionaryIDimageHero.value,
                            'slug': travelDictionarySlug.value,
                            'name': travelDictionaryName.value,
                            'description': travelDictionaryDescription.value,
                            'seo_tags': travelDictionarySeoTags.value
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
                travelDictionarySeoTags,
                travelDictionaryIDimageCover,
                travelDictionaryIDimageHero,
                travelDictionarySlug,
                travelDictionaryName,
                travelDictionaryDescription,
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