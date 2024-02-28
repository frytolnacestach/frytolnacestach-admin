<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - základní údaje" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <form class="o-form-item" @submit.prevent="editForm" v-if="loadingData">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form">
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

                                   <!-- BLOCK - Základní informace -->
                                   <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Základní informace" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - iam -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Kdo jsem" nameDB="iam" perex="" :required=true />
                                                <aTextarea :value="iam" name="iam" :required=true @textareaValue="handleIam" />
                                            </div>
                                            <!-- Form - iam END -->
                                            <!-- Form - donate -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Jak mě podpořit" nameDB="donate" perex="" :required=true />
                                                <aTextarea :value="donate" name="donate" :required=true @textareaValue="handleDonate" />
                                            </div>
                                            <!-- Form - donate END -->
                                            <!-- Form - cookies -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zásady Cookies" nameDB="cookies" perex="" :required=true />
                                                <aTextarea :value="cookies" name="cookies" :required=true @textareaValue="handleCookies" />
                                            </div>
                                            <!-- Form - cookies END -->
                                            <!-- Form - conditions -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Obchodní podmínky a zásady ochrany osobních údajů" nameDB="conditions" perex="" :required=true />
                                                <aTextarea :value="conditions" name="conditions" :required=true @textareaValue="handleConditions" />
                                            </div>
                                            <!-- Form - conditions END -->
                                            <!-- Form - conditions_user -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Obchodní podmínky a zásady ochrany osobních údajů - uživatel" nameDB="conditions_user" perex="" :required=true />
                                                <aTextarea :value="conditionsUser" name="conditionsUser" :required=true @textareaValue="handleConditionsUser" />
                                            </div>
                                            <!-- Form - conditions_user END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Základní informace END-->
                                </div>
                                <!-- FORM END-->
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
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'

    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButtonForm from '@/components/molecules/mButtonForm.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface Base {
        id: number
        created_at: string
        updated_at: string
        iam: string
        donate: string
        cookies: string
        conditions: string
        conditions_user: string
    }

    export default defineComponent({
        name: 'AdminBaseIndexPage',

        //COMPONENTS
        components: {
            aTextarea,
            mButtonForm,
            mHeadlineForm,
            mLabel,
            mNavBreadcrumbs,
            oFlashMessages,
            oHero
        },

        data() {
            return {
                mNavAdminArray: [
                    {
                        id: 1,
                        name: "Přidat video",
                        url: "/admin/videos/create"
                    }
                ],
                mNavBreadcrumbsArray: [
                    {
                        id: 1,
                        name: "Administrace",
                        url: "/admin/",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "Základní údaje",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        setup() {
             //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Základní informace',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Základní informace',
                ogTitle: 'Základní informace',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            // route
            const runTimeConfig = useRuntimeConfig()
            // message
            const errorForm = ref('')
            const successForm = ref('')
            // variable
            const loadingData = ref(false)
            // date
            const itemID = ref<number | null>(null)
            const createdAt = ref('')
            const updatedAt = ref('')
            const iam = ref('')
            const donate = ref('')
            const cookies = ref('')
            const conditions = ref('')
            const conditionsUser = ref('')

            //API - Base
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/base`)
                const dataAPI: any = data._rawValue
                
                const Base: Base[] = JSON.parse(dataAPI)

                if (Array.isArray(Base) && Base.length > 0) {
                    itemID.value = Base[0].id
                    createdAt.value = Base[0].created_at
                    updatedAt.value = Base[0].updated_at
                    iam.value = Base[0].iam
                    donate.value = Base[0].donate
                    cookies.value = Base[0].cookies
                    conditions.value = Base[0].conditions
                    conditionsUser.value = Base[0].conditions_user
                }
                loadingData.value = true
            })()

            //API - Base edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/base-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'iam': iam.value,
                            'donate': donate.value,
                            'cookies': cookies.value,
                            'conditions': conditions.value,
                            'conditions_user': conditionsUser.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla uložená.')
                        successForm.value = "Data byla odeslaná"
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla uložena.')
                        errorForm.value = "Nastala chyba a data nebyla uložena."
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
                iam,
                donate,
                cookies,
                conditions,
                conditionsUser,
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
        },

        methods: {
            handleIam(newIam: string) {
                this.iam = newIam
            },
            handleDonate(newDonate: string) {
                this.donate = newDonate
            },
            handleCookies(newCookies: string) {
                this.cookies = newCookies
            },
            handleConditions(newConditions: string) {
                this.conditions = newConditions
            },
            handleConditionsUser(newConditionsUser: string) {
                this.conditionsUser = newConditionsUser
            }
        }
    })
</script>
