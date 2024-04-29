<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Poslání e-mailu" />
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
                                        <mHeadlineForm title="E-mail" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - From -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odeílatel" nameDB="send" perex="E-mailová adresa odesílatele" :required=true />
                                                <input class="a-input" type="text" name="from" v-model="from" required />
                                            </div>
                                            <!-- Form - From END -->

                                            <!-- Form - To -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Přijemce" nameDB="to" perex="E-mailová adresa příjemce" :required=true />
                                                <input class="a-input" type="text" name="to" v-model="to" required />
                                            </div>
                                            <!-- Form - To END -->

                                            <!-- Form - Subject -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Předmět" nameDB="subject" perex="Předmět emailu" :required=true />
                                                <input class="a-input" type="text" name="subject" v-model="subject" required />
                                            </div>
                                            <!-- Form - Subject END -->

                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zpráva" nameDB="message" perex="Zpráva e-mailu" :required=false />
                                                <aTextarea :value="message" name="message" :required=false @textareaValue="handleMessage" />
                                            </div>
                                            <!-- Form - description END -->
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
                                <mButtonForm text="Odeslat e-mail" />
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
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButtonForm from '@/components/molecules/mButtonForm.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminEmailSendPage',

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
                mNavBreadcrumbsArray: [
                    {
                        id: 1,
                        name: "Administrace",
                        url: "/admin",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "E-mail",
                        url: "/admin/email",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Odeslání emailu",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            handleMessage(newMessage: string) {
                this.message = newMessage
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'E-mail - odeslání',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'E-mail - odeslání',
                ogTitle: 'E-mail - odeslání',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })         

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const from = ref('')
            const to = ref('')
            const subject = ref('')
            const message = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/email-send`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'from': from.value,
                            'to': to.value,
                            'subject': subject.value,
                            'message': message.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Email byl odeslán.')
                        successForm.value = "Email byl odeslán."
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a email nebyl odeslán.')
                        errorForm.value = "Nastala chyba a email nebyl odeslána."
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
                from,
                to,
                subject,
                message,
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