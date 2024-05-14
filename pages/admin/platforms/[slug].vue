<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero :headline="'Platforma ' + platformName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner">

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

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="platformSlug" :valueCreate="platformName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název platformy" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="platformName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - perex -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Můj popis" nameDB="perex" perex="" :required=false />
                                                <aTextarea :value="platformPerex" name="perex" :required=true @textareaValue="handlePerex" />
                                            </div>
                                            <!-- Form - perex END -->
                                            <!-- Form - url -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na profil" nameDB="url" perex="" :required=true />
                                                <aInput :value="platformUrl" name="url" :required=true @inputValue="handleUrl" />
                                            </div>
                                            <!-- Form - url END -->
                                            <!-- Form - date -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum údajů" nameDB="date" perex="Datum k jakému platí údaje o platformě ve formátu <i>k 13. Říjnu 2022</i>" :required=false />
                                                <input class="a-input" type="text" name="date" v-model="platformDate" />
                                            </div>
                                            <!-- Form - date END -->
                                            <!-- Form - facts(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Fakta o síťi" nameDB="facts" perex="Fakta o síťi například datum založení a počet sledujícíh" :required=false />
                                                <mInputsFacts :value="platformFacts" @facts="handleFacts" />
                                            </div> 
                                            <!-- Form - facts(JSON) END -->                                                                       
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
    import aInput from '@/components/atoms/aInput.vue'
    import aInputSlug from '@/components/atoms/aInputSlug.vue'
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButtonForm from '@/components/molecules/mButtonForm.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputsFacts from '@/components/molecules/mInputsFacts.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface PlatformFact {
        name: string
        value: string
    }

    interface Platform {
        id: number
        created_at: string
        updated_at: string
        slug: string
        name: string
        perex: string
        url: string
        facts: PlatformFact[]
        date: string
    }

    export default defineComponent({
        name: 'AdminPlatformsSlugPage',

        //COMPONENTS
        components: {
            aInput,
            aInputSlug,
            aTextarea,
            mButtonForm,
            mHeadlineForm,
            mInputsFacts,
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
                        name: "Platformy",
                        url: "/admin/platforms",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace platformy - NÁZEV PLATFORMY`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const platformName = this.platformName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace platformy - ${platformName}`
                }
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.platformSlug = newSlug
            },
            handlePerex(newPerex: string) {
                this.platformPerex = newPerex
            },
            handleUrl(newUrl: string) {
                this.platformUrl = newUrl
            },
            handleFacts(newFacts: string) {
                this.platformFacts = JSON.stringify(newFacts)
            }
        },

        watch: {
            platformName: function (newValue, oldValue) {
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
                title: 'Platformy - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Platformy - úprava',
                ogTitle: 'Platformy - úprava',
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
            const platformSlug = ref('')
            const platformName = ref('')
            const platformPerex = ref('')
            const platformUrl = ref('')
            const platformFacts = ref('')
            const platformDate = ref('')

            //API - Platform
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/platform/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const Platform: Platform[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Platform) && Platform.length > 0) {
                    itemID.value = Platform[0].id
                    createdAt.value = Platform[0].created_at
                    updatedAt.value = Platform[0].updated_at
                    platformSlug.value = Platform[0].slug
                    platformName.value = Platform[0].name
                    platformPerex.value = Platform[0].perex
                    platformUrl.value = Platform[0].url
                    platformFacts.value = Platform[0].facts ? JSON.stringify(Platform[0].facts) : JSON.stringify([])
                    platformDate.value = Platform[0].date
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/platform-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'slug': platformSlug.value,
                            'name': platformName.value,
                            'perex': platformPerex.value,
                            'url': platformUrl.value,
                            'facts': platformFacts.value,
                            'date': platformDate.value
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
                platformSlug,
                platformName,
                platformPerex,
                platformUrl,
                platformFacts,
                platformDate,
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