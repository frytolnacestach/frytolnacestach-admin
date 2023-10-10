<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - základní údaje" />
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
                                   <!-- BLOCK - Základní informace -->
                                   <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Základní informace" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - iam -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Kdo jsem" nameDB="iam" perex="" :required=true />
                                                <textarea class="a-textarea" name="iam" v-model="iam" required></textarea>
                                            </div>
                                            <!-- Form - iam END -->
                                            <!-- Form - donate -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Jak mě podpořit" nameDB="donate" perex="" :required=true />
                                                <textarea class="a-textarea" name="donate" v-model="donate" required></textarea>
                                            </div>
                                            <!-- Form - donate END -->
                                            <!-- Form - cookies -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zásady Cookies" nameDB="cookies" perex="" :required=true />
                                                <textarea class="a-textarea" name="cookies" v-model="cookies" required></textarea>
                                            </div>
                                            <!-- Form - cookies END -->
                                            <!-- Form - conditions -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Obchodní podmínky a zásady ochrany osobních údajů" nameDB="conditions" perex="" :required=true />
                                                <textarea class="a-textarea" name="conditions" v-model="conditions" required></textarea>
                                            </div>
                                            <!-- Form - conditions END -->
                                            <!-- Form - conditions_user -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Obchodní podmínky a zásady ochrany osobních údajů - uživatel" nameDB="conditions_user" perex="" :required=true />
                                                <textarea class="a-textarea" name="conditionsUser" v-model="conditionsUser" required></textarea>
                                            </div>
                                            <!-- Form - conditions_user END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Základní informace END-->
                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Uložit úpravy" />
                                        </div>
                                    </div>
                                    <!-- COMPONENT - Button END -->
                                </form>
                                <!-- FORM END-->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'

    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminBaseIndexPage',

        //COMPONENTS
        components: {
            mButton,
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
            const iam = ref('')
            const donate = ref('')
            const cookies = ref('')
            const conditions = ref('')
            const conditionsUser = ref('')

            //API - Base
            ;(async () => {
                const { data: base } = await useFetch(`${runTimeConfig.public.baseURL}/base`)

                iam.value = JSON.parse(base._rawValue)[0].iam;
                donate.value = JSON.parse(base._rawValue)[0].donate;
                cookies.value = JSON.parse(base._rawValue)[0].cookies;
                conditions.value = JSON.parse(base._rawValue)[0].conditions;
                conditionsUser.value = JSON.parse(base._rawValue)[0].conditions_user;
                loadingData.value = true
            })()

            //API - Base edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/base-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'iam': iam.value,
                            'donate': donate.value,
                            'cookies': cookies.value,
                            'conditions': conditions.value,
                            'conditions_user': conditionsUser.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla uložena"
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
                loadingData,
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
        }
    })
</script>
