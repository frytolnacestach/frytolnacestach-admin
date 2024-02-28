<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'Elektrická zásuvka ' + wallSocketName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/elektricka-zasuvka/' + wallSocketSlug" text="Zobrazit na webu" />

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
                                                <mInputImage :value="wallSocketIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="wallSocketIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="wallSocketSeoTags" @seo-tags="handleSeoTags" />
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
                                                <aInputSlug :value="wallSocketSlug" :valueCreate="wallSocketName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->                        
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="wallSocketName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - label -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ zásuvky" nameDB="label" perex="" :required=true />
                                                <input class="a-input" type="text" name="label" v-model="wallSocketLabel" required />
                                            </div>
                                            <!-- Form - label END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <aTextarea :value="wallSocketDescription" name="description" :required=false @textareaValue="handleDescription" />
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - ids_compatibility(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="IDčka zásuvek" nameDB="ids_compatibility" perex="" :required=false />
                                                <mInputsIDSCompatibility :value="wallSocketIDScompatibility" @ids-compatibility="handleIDSCompatibility" />
                                            </div>
                                            <!-- Form - ids_compatibility(JSON) END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Názvy států" nameDB="ids_states" perex="" :required=false />
                                                <mInputsIDSStates :value="wallSocketIDSstates" type="state" @ids-states="handleIDSStates" />
                                            </div>
                                            <!-- Form - ids_states(JSON) END -->
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
    import mInputsIDSCompatibility from '@/components/molecules/mInputsIDSCompatibility.vue'
    import mInputsIDSStates from '@/components/molecules/mInputsIDSStates.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface seoTags {
        tag: string
    }

    interface IDScompatibility {
        id: number
    }

    interface IDSstates {
        id: number
    }

    interface WallSocket {
        id: number
        created_at: string
        updated_at: string
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_compatibility: IDScompatibility[]
        ids_states: IDSstates[]
        slug: string
        label: string
        name: string
        description: string
    }

    export default defineComponent({
        name: 'AdminWallSocketsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
            mHeadlineForm,
            mInputsIDSCompatibility,
            mInputsIDSStates,
            mInputImage,
            mInputsSeoTags,
            mNavBreadcrumbs,
            mLabel,
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
                        name: "Elektrické zásuvky",
                        url: "/admin/wall-sockets",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace elektrické zásuvky - NÁZEV ELEKTRICKÉ ZÁSUVKY`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const wallSocketName = this.wallSocketName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace značky - ${wallSocketName}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.wallSocketSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.wallSocketIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.wallSocketIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.wallSocketSeoTags = JSON.stringify(newSeoTags)
            },
            handleDescription(newDescription: string) {
                this.wallSocketDescription = newDescription
            },
            handleIDSStates(newIDSStates: string) {
                this.wallSocketIDSstates = JSON.stringify(newIDSStates)
            },
            handleIDSCompatibility(newIDSCompatibility: string) {
                this.wallSocketIDScompatibility = JSON.stringify(newIDSCompatibility)
            }
        },

        watch: {
            wallSocketName: function (newValue, oldValue) {
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
                title: 'Elektrická zásuvka - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Elektrická zásuvka - úprava',
                ogTitle: 'Elektrická zásuvka - úprava',
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
            const wallSocketSlug = ref('')
            const wallSocketIDimageCover = ref<number | null>(null)
            const wallSocketIDimageHero = ref<number | null>(null)
            const wallSocketIDScompatibility = ref<never[] | string[]>([])
            const wallSocketIDSstates = ref<never[] | string[]>([])
            const wallSocketSeoTags = ref<never[] | string[]>([])
            const wallSocketLabel = ref('')
            const wallSocketName = ref('')
            const wallSocketDescription = ref('')

            //API - wallSocket
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/wall-socket/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const WallSocket: WallSocket[] = JSON.parse(dataAPI)
                
                if (Array.isArray(WallSocket) && WallSocket.length > 0) {
                    itemID.value = WallSocket[0].id
                    createdAt.value = WallSocket[0].created_at
                    updatedAt.value = WallSocket[0].updated_at
                    wallSocketSlug.value = WallSocket[0].slug
                    wallSocketIDimageCover.value = WallSocket[0].id_image_cover
                    wallSocketIDimageHero.value = WallSocket[0].id_image_hero
                    wallSocketSeoTags.value = WallSocket[0].seo_tags ? JSON.stringify(WallSocket[0].seo_tags) : JSON.stringify([])
                    wallSocketIDScompatibility.value = WallSocket[0].ids_compatibility ? JSON.stringify(WallSocket[0].ids_compatibility) : JSON.stringify([])
                    wallSocketIDSstates.value = WallSocket[0].ids_states ? JSON.stringify(WallSocket[0].ids_states) : JSON.stringify([])
                    wallSocketLabel.value = WallSocket[0].label
                    wallSocketName.value = WallSocket[0].name
                    wallSocketDescription.value = WallSocket[0].description
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/wall-socket-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'slug': wallSocketSlug.value,
                            'id_image_cover': wallSocketIDimageCover.value,
                            'id_image_hero': wallSocketIDimageHero.value,
                            'seo_tags': wallSocketSeoTags.value,
                            'ids_compatibility': wallSocketIDScompatibility.value,
                            'ids_states': wallSocketIDSstates.value,
                            'label': wallSocketLabel.value,
                            'name': wallSocketName.value,
                            'description': wallSocketDescription.value,
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
                wallSocketSlug,
                wallSocketIDimageCover,
                wallSocketIDimageHero,
                wallSocketIDScompatibility,
                wallSocketIDSstates,
                wallSocketSeoTags,
                wallSocketLabel,
                wallSocketName,
                wallSocketDescription,
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