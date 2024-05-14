<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nové platformy" />
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
                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="platformSlug" :valueCreate="platformName" :edit=true @slug="handleSlug" />
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
                                                <aTextarea :value="platformPerex" name="perex" :required=false @textareaValue="handlePerex" />
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
                                            <!-- Form - facts(JSON) -->
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
                                <mButtonForm text="Přidat platformu" />
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
    import mInputsFacts from '@/components/molecules/mInputsFacts.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlatformsCreatePage',

        //COMPONENTS
        components: {
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
                        name: "Přidání nové platforma",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            // Components input changes
            handleSlug(newSlug: string) {
                this.platformSlug = newSlug
            },
            handlePerex(newPerex: string) {
                this.platformPerex = newPerex
            },
            handleFacts(newFacts: string) {
                this.platformFacts = JSON.stringify(newFacts)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Platformy - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Platformy - vytvoření',
                ogTitle: 'Platformy - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const platformSlug = ref('')
            const platformName = ref('')
            const platformPerex = ref('')
            const platformUrl = ref('')
            const platformFacts = ref('')
            const platformDate = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/platform-create`, {
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
                            'facts': platformFacts.value,
                            'date': platformDate.value
                        })
                    })
                    // response
                    if (response.ok) {
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/platforms/${platformSlug.value}`)
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
                platformSlug,
                platformName,
                platformPerex,
                platformUrl,
                platformFacts,
                platformDate,
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