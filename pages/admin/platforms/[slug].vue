<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Platforma ' + platformName" />
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
                                                <textarea class="a-textarea" type="text" name="perex" v-model="platformPerex"></textarea>
                                            </div>
                                            <!-- Form - perex END -->
                                            <!-- Form - url -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na profil" nameDB="url" perex="" :required=true />
                                                <input class="a-input" type="text" name="url" v-model="platformUrl" required />
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
            aInputSlug,
            mButton,
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
            const platformSlug = ref('')
            const platformName = ref('')
            const platformPerex = ref('')
            const platformUrl = ref('')
            const platformFacts = ref('')
            const platformDate = ref('')

            //API - Platform
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/platform/${route.params.slug}`)
                
                const Platform: Platform[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Platform) && Platform.length > 0) {
                    itemID.value = Platform[0].id
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
                    await useFetch(`${runTimeConfig.public.baseURL}/platform-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': platformSlug.value,
                            'name': platformName.value,
                            'perex': platformPerex.value,
                            'url': platformUrl.value,
                            'facts': platformFacts._value,
                            'date': platformDate.value
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