<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nové flory" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <form class="o-form-item" @submit.prevent="createForm">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form">
                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="floraIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="floraIDimageHero" @image="handleImageHero" />
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
                                                <mInputsSeoTags :value="floraSeoTags" @seo-tags="handleSeoTags" />
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
                                                <aInputSlug :value="floraSlug" :valueCreate="floraName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="floraName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name_lat -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název latinsky" nameDB="name_lat" perex="" :required=true />
                                                <input class="a-input" type="text" name="nameLat" v-model="floraNameLat" required />
                                            </div>
                                            <!-- Form - name_lat END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="description" perex="" :required=false />
                                                <aTextarea :value="floraDescription" name="description" :required=false @textareaValue="handleDescription" />
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - location -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Lokace výskytu" nameDB="location" perex="" :required=false />
                                                <input class="a-input" type="text" name="location" v-model="floraLocation" />
                                            </div>
                                            <!-- Form - location END -->
                                            <!-- Form - status_iucn -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Status IUCN" nameDB="status_iucn" perex="" :required=false />
                                                <div class="m-select -json">
                                                    <select class="m-select__select" name="statusIucn" v-model="floraStatusIucn">
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
                                                        <input class="m-radio__input" type="radio" v-model="floraStatusDanger" :value="true" />
                                                        <span class="m-radio__text">Ano</span>
                                                    </label>
                                                    <label class="m-radio__label">
                                                        <input class="m-radio__input" type="radio" v-model="floraStatusDanger" :value="false" />
                                                        <span class="m-radio__text">Ne</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <!-- Form - status_danger END -->
                                            <!-- Form - ids_states(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Názvy států" nameDB="ids_states" perex="" :required=false />
                                                <mInputsIDSStates :value="floraIDSstates" type="state" @ids-states="handleIDSStates" />
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
                                <mButtonForm text="Přidat faunu" />
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
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputsIDSStates from '@/components/molecules/mInputsIDSStates.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminFlorasCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButtonForm,
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
                        name: "Flora",
                        url: "/admin/floras",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Přidání nové flory",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            // Components input changes
            handleSlug(newSlug: string) {
                this.floraSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.floraIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.floraIDimageHero = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.floraSeoTags = JSON.stringify(newSeoTags)
            },
            handleIDSStates(newIDSStates: string) {
                this.floraIDSstates = JSON.stringify(newIDSStates)
            },
            handleDescription(newDescription: string) {
                this.floraDescription = newDescription
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Flora - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Flora - vytvoření',
                ogTitle: 'Flora - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const floraSlug = ref('')
            const floraIDimageCover = ref<number | null>(null)
            const floraIDimageHero = ref<number | null>(null)
            const floraSeoTags = ref<never[] | string[]>([])
            const floraIDSstates = ref<never[] | string[]>([])
            const floraName = ref('')
            const floraNameLat = ref('')
            const floraLocation = ref('')
            const floraStatusIucn = ref('')
            const floraStatusDanger = ref('')
            const floraDescription = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/flora-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': floraSlug.value,
                            'id_image_cover': floraIDimageCover.value,
                            'id_image_hero': floraIDimageHero.value,
                            'seo_tags': floraSeoTags.value,
                            'ids_states': floraIDSstates.value,
                            'name': floraName.value,
                            'name_lat': floraNameLat.value,
                            'location': floraLocation.value,
                            'status_iucn': floraStatusIucn.value,
                            'status_danger': floraStatusDanger.value,
                            'description': floraDescription.value,
                        })
                    })
                    // response
                    if (response.ok) {
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/floras/${floraSlug.value}`)
                    } else if (response.status === 500) {
                        errorForm.value = "Nastala chyba a data nebyla uložena."
                    }
                } catch (err) {
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return {
                successForm,
                errorForm,
                floraSlug,
                floraIDimageCover,
                floraIDimageHero,
                floraSeoTags,
                floraIDSstates,
                floraName,
                floraNameLat,
                floraLocation,
                floraStatusIucn,
                floraStatusDanger,
                floraDescription,
                createForm
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