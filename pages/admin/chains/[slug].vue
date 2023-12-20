<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Řetězec ' + chainName" />
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
                                    <!-- BLOCK - Stálé hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Stálé hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
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
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="chainIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="chainIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="chainSeoTags" @seo-tags="handleSeoTags" />
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
                                                <aInputSlug :value="chainSlug" :valueCreate="chainName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="IDčka států" nameDB="ids_states" perex="" :required=false />
                                                <mInputsIDSStates :value="chainIDSstates" @ids-states="handleIDSStates" />
                                            </div>
                                            <!-- Form - ids_states(JSON) END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="chainName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="description" v-model="chainDescription"></textarea>
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - information(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace" nameDB="information" perex="" :required=false />
                                                <mInputsInformation :value="chainInformation" @information="handleInformation" />
                                            </div>
                                            <!-- Form - information(JSON) END -->
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
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputsIDSStates from '@/components/molecules/mInputsIDSStates.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsInformation from '@/components/molecules/mInputsInformation.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface seoTags {
        tag: string
    }

    interface IDSstates {
        id: number
    }

    interface Information {
        type: string
        value: string
    }

    interface Chain {
        id: number
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
        slug: string
        name: string
        description: string
        information: Information[]
    }

    export default defineComponent({
        name: 'AdminChainsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
            mInputsIDSStates,
            mInputImage,
            mInputsInformation,
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
                        name: "Řetězce",
                        url: "/admin/chains",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace řetězce - NÁZEV ŘETĚZCE`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const chainName = this.chainName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace značky - ${chainName}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.chainSlug = newSlug
            },
            handleImageCover(newImage: string) {
                this.chainIDimageCover = newImage
            },
            handleImageHero(newImage: string) {
                this.chainIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.chainSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDSStates(newIDSStates: string) {
                this.chainIDSstates = JSON.stringify(newIDSStates)
            },
            handleInformation(newInformation: string) {
                this.chainInformation = JSON.stringify(newInformation)
            }
        },

        watch: {
            chainName: function (newValue, oldValue) {
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
                title: 'Řetězec - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Řetězec - úprava',
                ogTitle: 'Řetězec - úprava',
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
            const chainSlug = ref('')
            const chainIDimageCover = ref<number | null>(null)
            const chainIDimageHero = ref<number | null>(null)
            const chainIDSstates = ref<never[] | string[]>([])
            const chainInformation = ref<never[] | string[]>([])
            const chainSeoTags = ref<never[] | string[]>([])
            const chainName = ref('')
            const chainDescription = ref('')

            //API - chain
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/chain/${route.params.slug}`)
                
                const Chain: Chain[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Chain) && Chain.length > 0) {
                    itemID.value = Chain[0].id
                    chainSlug.value = Chain[0].slug
                    chainIDimageCover.value = Chain[0].id_image_cover
                    chainIDimageHero.value = Chain[0].id_image_hero
                    chainInformation.value = Chain[0].information ? JSON.stringify(Chain[0].information) : JSON.stringify([])
                    chainSeoTags.value = Chain[0].seo_tags ? JSON.stringify(Chain[0].seo_tags) : JSON.stringify([])
                    chainIDSstates.value = Chain[0].ids_states ? JSON.stringify(Chain[0].ids_states) : JSON.stringify([])
                    chainName.value = Chain[0].name
                    chainDescription.value = Chain[0].description
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/chain-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': chainSlug.value,
                            'id_image_cover': chainIDimageCover.value,
                            'id_image_hero': chainIDimageHero.value,
                            'information': chainInformation._value,
                            'seo_tags': chainSeoTags._value,
                            'ids_states': chainIDSstates._value,
                            'name': chainName.value,
                            'description': chainDescription.value,
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
                    })
                    .catch((error) => {
                        console.log(error)
                        errorForm.value = "Data nebyla upravena nastala chyba při jejich odeslání"
                    })
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
                chainSlug,
                chainIDimageCover,
                chainIDimageHero,
                chainIDSstates,
                chainInformation,
                chainSeoTags,
                chainName,
                chainDescription,
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