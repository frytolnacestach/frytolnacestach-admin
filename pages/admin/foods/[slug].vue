<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Jídlo ' + foodName" />
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
                                <form class="o-form-item__form" @submit.prevent="editForm" v-if="loadingData">
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
                                                <mInputImage :value="foodIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="foodIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="foodSeoTags" @seo-tags="handleSeoTags" />
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
                                                <aInputSlug :value="foodSlug" :valueCreate="foodName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="IDčka států" nameDB="ids_states" perex="" :required=false />
                                                <mInputsIDSStates :value="foodIDSstates" @ids-states="handleIDSStates" />
                                            </div>
                                            <!-- Form - ids_states(JSON) END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="foodName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <aTextarea :value="foodDescription" name="description" :required=false @textareaValue="handleDescription" />
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - ingredients -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ingredience" nameDB="ingredients" perex="" :required=false />
                                                <mInputsIngredients :value="foodIngredients" @ingredients="handleIngredients" />
                                            </div>
                                            <!-- Form - ingredients END -->
                                            <!-- Form - recipe -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Recept" nameDB="recipe" perex="" :required=false />
                                                <mInputsRecipe :value="foodRecipe" @recipe="handleRecipe" />
                                            </div>
                                            <!-- Form - recipe END -->
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
    import aInputSlug from '@/components/atoms/aInputSlug.vue'
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputsIDSStates from '@/components/molecules/mInputsIDSStates.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsIngredients from '@/components/molecules/mInputsIngredients.vue'
    import mInputsRecipe from '@/components/molecules/mInputsRecipe.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
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

    interface ingredients {
        name: string
        value: number
        unit: string
    }

    interface recipe {
        step: string
        name: string
        text: string
    }

    interface Food {
        id: number
        created_at: string
        updated_at: string
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
        slug: string
        name: string
        description: string
        ingredients: ingredients[]
        recipe: recipe[]
    }

    export default defineComponent({
        name: 'AdminFoodsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButton,
            mHeadlineForm,
            mInputsIDSStates,
            mInputImage,
            mInputsIngredients,
            mInputsRecipe,
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
                        name: "Jídla",
                        url: "/admin/foods",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace jídla - NÁZEV JÍDLA`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const foodName = this.foodName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace jídla - ${foodName}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.foodSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.foodIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.foodIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.foodSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDSStates(newIDSStates: string) {
                this.foodIDSstates = JSON.stringify(newIDSStates)
            },
            handleDescription(newDescription: string) {
                this.foodDescription = newDescription
            },
            handleIngredients(newIngredients: string) {
                this.foodIngredients = JSON.stringify(newIngredients)
            },
            handleRecipe(newRecipe: string) {
                this.foodRecipe = JSON.stringify(newRecipe)
            }
        },

        watch: {
            foodName: function (newValue, oldValue) {
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
                title: 'Jídlo - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Jídlo - úprava',
                ogTitle: 'Jídlo - úprava',
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
            const foodSlug = ref('')
            const foodIDimageCover = ref<number | null>(null)
            const foodIDimageHero = ref<number | null>(null)
            const foodSeoTags = ref<never[] | string[]>([])
            const foodIDSstates = ref<never[] | string[]>([])
            const foodName = ref('')
            const foodDescription = ref('')
            const foodIngredients = ref<never[] | string[]>([])
            const foodRecipe = ref<never[] | string[]>([])

            //API - food
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/food/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const Food: Food[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Food) && Food.length > 0) {
                    itemID.value = Food[0].id
                    createdAt.value = Food[0].created_at
                    updatedAt.value = Food[0].updated_at
                    foodSlug.value = Food[0].slug
                    foodIDimageCover.value = Food[0].id_image_cover
                    foodIDimageHero.value = Food[0].id_image_hero
                    foodSeoTags.value = Food[0].seo_tags ? JSON.stringify(Food[0].seo_tags) : JSON.stringify([])
                    foodIDSstates.value = Food[0].ids_states ? JSON.stringify(Food[0].ids_states) : JSON.stringify([])
                    foodName.value = Food[0].name
                    foodDescription.value = Food[0].description
                    foodIngredients.value = Food[0].ingredients ? JSON.stringify(Food[0].ingredients) : JSON.stringify([])
                    foodRecipe.value = Food[0].recipe ? JSON.stringify(Food[0].recipe) : JSON.stringify([])
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/food-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'slug': foodSlug.value,
                            'id_image_cover': foodIDimageCover.value,
                            'id_image_hero': foodIDimageHero.value,
                            'seo_tags': foodSeoTags.value,
                            'ids_states': foodIDSstates.value,
                            'name': foodName.value,
                            'description': foodDescription.value,
                            'ingredients': foodIngredients.value,
                            'recipe': foodRecipe.value,
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
                foodSlug,
                foodSeoTags,
                foodIDimageCover,
                foodIDimageHero,
                foodIDSstates,
                foodName,
                foodDescription,
                foodIngredients,
                foodRecipe,
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