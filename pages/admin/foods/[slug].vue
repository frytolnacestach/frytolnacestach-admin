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
                                <form class="o-form-item__form" @submit.prevent="editForm">
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
                                            <div class="o-form-item__image">
                                                <div class="o-form-item__image-lazyload" :class="{'-loading': foodIDimageCoverLoading}">
                                                    <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && foodIDimageCover" @load="handleImageCoverLoad">
                                                </div>
                                                <span class="o-form-item__image-text" v-if="imageCover[0] && foodIDimageCoverLoad !== foodIDimageCoverChange && (foodIDimageCover && foodIDimageCover !== null && foodIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-item__image-text" v-if="imageCover[0] && (!foodIDimageCover || foodIDimageCover === null || foodIDimageCover === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-item__image-text" v-if="!imageCover[0] && foodIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-item__image-text" v-if="foodIDimageCoverLoad === foodIDimageCoverChange && !imageCover[0] && foodIDimageCover && foodIDimageCover !== null && foodIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-item__image-text" v-if="!imageCover[0] && (!foodIDimageCover || foodIDimageCover === null || foodIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="foodIDimageCover" @input="handleFoodIDimageCoverChange" />
                                            </div>
                                        </div>
                                        <div class="o-form-item__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <div class="o-form-item__image">
                                                <div class="o-form-item__image-lazyload" :class="{'-loading': foodIDimageHeroLoading}">
                                                    <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && foodIDimageHero" @load="handleImageHeroLoad">
                                                </div>
                                                <span class="o-form-item__image-text" v-if="imageHero[0] && foodIDimageHeroLoad !== foodIDimageHeroChange && (foodIDimageHero && foodIDimageHero !== null && foodIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-item__image-text" v-if="imageHero[0] && (!foodIDimageHero || foodIDimageHero === null || foodIDimageHero === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-item__image-text" v-if="!imageHero[0] && foodIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-item__image-text" v-if="foodIDimageHeroLoad === foodIDimageHeroChange && !imageHero[0] && foodIDimageHero && foodIDimageHero !== null && foodIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-item__image-text" v-if="!imageHero[0] && (!foodIDimageHero || foodIDimageHero === null || foodIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="foodIDimageHero" @input="handleFoodIDimageHeroChange" />
                                            </div>
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

    interface IDSstates {
        id: number
    }

    interface seoTags {
        tag: string
    }

    interface Food {
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
        slug: string
        name: string
        description: string
        ingredients: string
        recipe: string
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
        name: 'AdminFoodsSlugPage',

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
                        name: `Editace jídla - NÁZEV JÍDLA`,
                        url: "",
                        status: "span"
                    }
                ],
                foodIDSstatesArray: [],
                foodSeoTagsArray: []
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
            // change image id
            handleFoodIDimageCoverChange() {
                this.foodIDimageCoverChange = this.foodIDimageCover
                this.foodIDimageCoverLoading = true
                this.loadImageCover()
            },
            handleFoodIDimageHeroChange() {
                this.foodIDimageHeroChange = this.foodIDimageHero
                this.foodIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.foodIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.foodIDimageHeroLoading = false;
            },
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
            foodName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
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
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
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
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const foodIDimageCoverLoad = ref(null)
            const foodIDimageCoverLoading = ref(false)
            const foodIDimageCoverChange = ref(null)
            const foodIDimageHeroLoad = ref(null)
            const foodIDimageHeroLoading = ref(false)
            const foodIDimageHeroChange = ref(null)

            //API - food
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/food/${route.params.slug}`)
                
                const Food: Food[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Food) && Food.length > 0) {
                    foodSlug.value = Food[0].slug;
                    foodIDimageCover.value = Food[0].id_image_cover;
                    foodIDimageHero.value = Food[0].id_image_hero;
                    foodSeoTags.value = Food[0].seo_tags ? JSON.stringify(Food[0].seo_tags) : JSON.stringify([]);
                    foodIDSstates.value = Food[0].ids_states ? JSON.stringify(Food[0].ids_states) : JSON.stringify([]);
                    foodName.value = Food[0].name;
                    foodDescription.value = Food[0].description;
                    foodIngredients.value = Food[0].ingredients ? JSON.stringify(Food[0].ingredients) : JSON.stringify([]);
                    foodRecipe.value = Food[0].recipe;

                    // images load ids
                    foodIDimageCoverLoad.value = foodIDimageCover.value
                    foodIDimageCoverChange.value = foodIDimageCover.value
                    foodIDimageCoverLoading.value = true
                    foodIDimageHeroLoad.value = foodIDimageHero.value
                    foodIDimageHeroChange.value = foodIDimageHero.value
                    foodIDimageHeroLoading.value = true
                    
                    // Načítání imageCover
                    if (foodIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${foodIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (foodIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${foodIDimageHero.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${foodIDimageCover.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${foodIDimageHero.value}`, {
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
                    await useFetch(`${runTimeConfig.public.baseURL}/food-edit`, {
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
                foodSeoTags,
                foodSeoTagsArray,
                foodIDimageCover,
                foodIDimageHero,
                foodIDSstates,
                foodIDSstatesArray,
                foodName,
                foodDescription,
                foodIngredients,
                foodRecipe,
                imageCover,
                imageHero,
                foodIDimageCoverLoad,
                foodIDimageCoverChange,
                foodIDimageCoverLoading,
                foodIDimageHeroLoad,
                foodIDimageHeroChange,
                foodIDimageHeroLoading,
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