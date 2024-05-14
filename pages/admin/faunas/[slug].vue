<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'fauna ' + faunaName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner -w640">

                    <mButtonWeb :link="'https://www.frytolnacestach.cz/fauna/' + faunaSlug" text="Zobrazit na webu" />

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
                                                <aInputSlug :value="faunaSlug" :valueCreate="faunaName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
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
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <aTextarea :value="faunaDescription" name="description" :required=false @textareaValue="handleDescription" />
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - location -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Lokace výskytu" nameDB="location" perex="" :required=false />
                                                <input class="a-input" type="text" name="nameLocation" v-model="faunaLocation" />
                                            </div>
                                            <!-- Form - location END -->
                                            <!-- Form - status_iucn -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Status IUCN" nameDB="status_iucn" perex="" :required=false />
                                                <div class="m-select -json">
                                                    <select class="m-select__select" name="statusIucn" v-model="faunaStatusIucn">
                                                        <option value="">- Vyber ohrožení -</option>
                                                        <option value="extinct">EX, vyhynulý taxon</option>
                                                        <option value="extinct-in-the-wild">EW, taxon vyhynulý v přírodě</option>
                                                        <option value="critically-endangered">CR, kriticky ohrožený taxon</option>
                                                        <option value="endangered">EN, ohrožený taxon</option>
                                                        <option value="vulnerable">VU, zranitelný taxon</option>
                                                        <option value="near-threatened">NT, téměř ohrožený taxon</option>
                                                        <option value="least-concern">LC, málo dotčený taxon</option>
                                                        <option value="data-deficient">DD, o taxonu chybí údaje</option>
                                                        <option value="not-evaluated">NE, nevyhodnocený taxon</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- Form - status_iucn END -->
                                            <!-- Form - status_danger -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Status nebezpečnosti" nameDB="status_danger" perex="" :required=false />
                                                <div class="m-radio -json">
                                                    <label class="m-radio__label">
                                                        <input class="m-radio__input" type="radio" v-model="faunaStatusDanger" :value="true" />
                                                        <span class="m-radio__text">Ano</span>
                                                    </label>
                                                    <label class="m-radio__label">
                                                        <input class="m-radio__input" type="radio" v-model="faunaStatusDanger" :value="false" />
                                                        <span class="m-radio__text">Ne</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <!-- Form - status_danger END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Názvy států" nameDB="ids_states" perex="" :required=false />
                                                <mInputsIDSStates :value="faunaIDSstates" type="state" @ids-states="handleIDSStates" />
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
    import mInputsIDSStates from '@/components/molecules/mInputsIDSStates.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
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

    interface Fauna {
        id: number
        created_at: string
        updated_at: string
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        ids_states: IDSstates[]
        slug: string
        name: string
        name_lat: string
        location: string
        status_iucn: string
        status_danger: string
        description: string
    }

    export default defineComponent({
        name: 'AdminFaunasSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
            mButtonWeb,
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
                        name: `Editace fauny - NÁZEV FAUNY`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const faunaName = this.faunaName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace fauny - ${faunaName}`
                }
            },
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

        watch: {
            faunaName: function (newValue, oldValue) {
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
                title: 'Fauna - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Fauna - úprava',
                ogTitle: 'Fauna - úprava',
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

            //API - fauna
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/fauna/${route.params.slug}`)
                const dataAPI: any = data._rawValue

                const Fauna: Fauna[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Fauna) && Fauna.length > 0) {
                    itemID.value = Fauna[0].id
                    createdAt.value = Fauna[0].created_at
                    updatedAt.value = Fauna[0].updated_at
                    faunaSlug.value = Fauna[0].slug
                    faunaIDimageCover.value = Fauna[0].id_image_cover
                    faunaIDimageHero.value = Fauna[0].id_image_hero
                    faunaSeoTags.value = Fauna[0].seo_tags ? JSON.stringify(Fauna[0].seo_tags) : JSON.stringify([])
                    faunaIDSstates.value = Fauna[0].ids_states ? JSON.stringify(Fauna[0].ids_states) : JSON.stringify([])
                    faunaName.value = Fauna[0].name
                    faunaNameLat.value = Fauna[0].name_lat
                    faunaLocation.value = Fauna[0].location
                    faunaStatusIucn.value = Fauna[0].status_iucn
                    faunaStatusDanger.value = Fauna[0].status_danger
                    faunaDescription.value = Fauna[0].description
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/fauna-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
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
                        successForm.value = "Data byla upravena."
                    } else if (response.status === 500) {
                        errorForm.value = "Nastala chyba a data nebyla upravena."
                    }
                } catch (err) {
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
                faunaSlug,
                faunaSeoTags,
                faunaIDimageCover,
                faunaIDimageHero,
                faunaIDSstates,
                faunaName,
                faunaNameLat,
                faunaLocation,
                faunaStatusIucn,
                faunaStatusDanger,
                faunaDescription,
                editForm
            }
        },

        mounted() {
            //Kontrola přihlášení
            let user = localStorage.getItem('user-info')
            if ( !user || user === "undefined" ) {
                //Přesměrování
                const router = useRouter()
                router.push('/login')
            }
        }
    })
</script>