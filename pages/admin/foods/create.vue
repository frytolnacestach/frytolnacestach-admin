<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového jídla" />
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
                                                <aInputSlug :value="foodSlug" :valueCreate="foodName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
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
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Názvy států" nameDB="ids_states" perex="" :required=false />
                                                <mInputsIDSStates :value="foodIDSstates" type="state" @ids-states="handleIDSStates" />
                                            </div>
                                            <!-- Form - ids_states(JSON) END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Přidat jídlo" />
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

    export default defineComponent({
        name: 'AdminfoodsCreatePage',

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
                        name: "Přidání nového jídla",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
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

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Jídlo - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Jídlo - vytvoření',
                ogTitle: 'Jídlo - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const foodSlug = ref('')
            const foodIDimageCover = ref<number | null>(null)
            const foodIDimageHero = ref<number | null>(null)
            const foodSeoTags = ref<never[] | string[]>([])
            const foodIDSstates = ref<never[] | string[]>([])
            const foodName = ref('')
            const foodDescription = ref('')
            const foodIngredients = ref<never[] | string[]>([])
            const foodRecipe = ref<never[] | string[]>([])

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/food-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
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
                        console.log('Data byla uložená.')
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/foods/${foodSlug.value}`)
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
                foodSlug,
                foodIDimageCover,
                foodIDimageHero,
                foodSeoTags,
                foodIDSstates,
                foodName,
                foodDescription,
                foodIngredients,
                foodRecipe,
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