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
                                    <div class="o-form-item__items">
                                        <!-- slug -->
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="foodSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="imageCover" v-model="foodIDimageCover" />
                                        </div>
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="imageHero" v-model="foodIDimageHero" />
                                        </div>
                                        <!-- json -->
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                            </label>
                                            <div class="o-form-item__group">
                                                <div class="o-form-item__group-items">
                                                    <div class="o-form-item__group-item" v-for="(item, index) in foodSeoTagsArray" :key="index">
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
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">IDčka států <span class="m-label__name-column">(ids_states)</span></span>
                                            </label>

                                            <div class="o-form-item__group">
                                                <div class="o-form-item__group-items">
                                                    <div class="o-form-item__group-item" v-for="(item, index) in foodIDSstatesArray" :key="index">
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
                                            <input class="a-input" type="text" name="name" v-model="foodName" required />
                                        </div>
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="foodDescription"></textarea>
                                        </div>
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Ingredience <span class="m-label__name-column">(ingredients)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="ingredients" v-model="foodIngredients"></textarea>
                                        </div>
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Recept <span class="m-label__name-column">(recipe)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="recipe" v-model="foodRecipe"></textarea>
                                        </div>                       
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytvořit jídlo</button>
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

    export default defineComponent({
        name: 'AdminfoodsCreatePage',

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
                ],
                foodIDSstatesArray: [],
                foodSeoTagsArray: []
            }
        },

        methods: {
            // seo tags
            addSeoTagsInput() {
                this.foodSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.foodSeoTagsArray.splice(index, 1)
            },
            // ids states
            addIDSstateInput() {
                this.foodIDSstatesArray.push({
                    id: null
                });
            },
            removeIDSstateInput(index: number) {
                this.foodIDSstatesArray.splice(index, 1);
            }
        },

        watch: {
            foodSeoTags: function (newValue, oldValue) {
                try {
                    this.foodSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.foodSeoTagsArray = []
                }
            },
            foodSeoTagsArray: function (newValue, oldValue) {
                this.foodSeoTags = JSON.stringify(newValue)
            },
            foodIDSstates: function (newValue, oldValue) {
                try {
                    this.foodIDSstatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.foodIDSstatesArray = [];
                }
            },
            foodIDSstatesArray: function (newValue, oldValue) {
                this.foodIDSstates = JSON.stringify(newValue);
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
            const foodIDimageCover = ref(null)
            const foodIDimageHero = ref(null)
            const foodSeoTags = ref([])
            const foodSeoTagsArray = ref([])
            const foodIDSstates = ref([])
            const foodIDSstatesArray = ref([])
            const foodName = ref('')
            const foodDescription = ref('')
            const foodIngredients = ref('')
            const foodRecipe = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/food-create`, {
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
                            'seo_tags': JSON.stringify(foodSeoTagsArray._value),
                            'ids_states': JSON.stringify(foodIDSstatesArray._value),
                            'name': foodName.value,
                            'description': foodDescription.value,
                            'ingredients': foodIngredients.value,
                            'recipe': foodRecipe.value,
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/foods/${foodSlug.value}`)
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
                foodSlug,
                foodIDimageCover,
                foodIDimageHero,
                foodSeoTags,
                foodSeoTagsArray,
                foodIDSstates,
                foodIDSstatesArray,
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