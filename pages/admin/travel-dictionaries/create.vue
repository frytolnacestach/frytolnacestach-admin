<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání výrazu do cestovatelskýho slovníku" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <div class="o-form-create">
                        <div class="o-form-create__outer">
                            <div class="o-form-create__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-create__form" @submit.prevent="createForm">
                                    <div class="o-form-create__items">
                                        <!-- slug -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="travelDictionarySlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="imageCover" v-model="travelDictionaryIDimageCover" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="imageHero" v-model="travelDictionaryIDimageHero" />
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                            </label>
                                            <div class="o-form-create__group">
                                                <div class="o-form-create__group-items">
                                                    <div class="o-form-create__group-item" v-for="(item, index) in travelDictionarySeoTagsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-create__group-inputs">
                                                            <div class="o-form-create__group-input">
                                                                <label class="m-label">Tag:</label>
                                                                <input class="a-input" type="text" v-model="item.tag" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-create__buttons mt-1">
                                                    <div class="o-form-create__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="travelDictionaryName" required />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="travelDictionaryDescription"></textarea>
                                        </div>                       
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytvořit položku ve slovníku</button>
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
        name: 'AdminTravelDictionariesCreatePage',

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
                        name: "Cestovatelský slovní",
                        url: "/admin/travel-dictionaries",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Přidání nového výrazu do cestovatelského slovníku",
                        url: "",
                        status: "span"
                    }
                ],
                travelDictionarySeoTagsArray: []
            }
        },

        methods: {
            // seo tags
            addSeoTagsInput() {
                this.travelDictionarySeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.travelDictionarySeoTagsArray.splice(index, 1)
            }
        },

        watch: {
            travelDictionarySeoTags: function (newValue, oldValue) {
                try {
                    this.travelDictionarySeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.travelDictionarySeoTagsArray = []
                }
            },
            travelDictionarySeoTagsArray: function (newValue, oldValue) {
                this.travelDictionarySeoTags = JSON.stringify(newValue)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Cestovatelský slovník - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Cestovaleský slovník - vytvoření',
                ogTitle: 'Cestovaleský slovník - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const travelDictionaryIDimageCover = ref(null)
            const travelDictionaryIDimageHero = ref(null)
            const travelDictionarySlug = ref('')
            const travelDictionaryName = ref('')
            const travelDictionaryDescription = ref('')
            const travelDictionarySeoTags = ref([])
            const travelDictionarySeoTagsArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/travel-dictionary-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_image_cover': travelDictionaryIDimageCover.value,
                            'id_image_hero': travelDictionaryIDimageHero.value,
                            'slug': travelDictionarySlug.value,
                            'name': travelDictionaryName.value,
                            'description': travelDictionaryDescription.value,
                            'seo_tags': JSON.stringify(travelDictionarySeoTagsArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/travel-dictionaries/${travelDictionarySlug.value}`)
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
                travelDictionaryIDimageCover,
                travelDictionaryIDimageHero,
                travelDictionarySlug,
                travelDictionaryName,
                travelDictionaryDescription,
                travelDictionarySeoTags,
                travelDictionarySeoTagsArray,
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