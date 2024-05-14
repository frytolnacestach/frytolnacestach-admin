<template>
    <NuxtLayout name="default">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Příhlášení" />
            <!-- SECTION - HERO END -->

            <section class="t-section">
                <div class="o-form-login">
                    <div class="o-form-login__outer">
                        <div class="o-form-login__inner">
                            
                            <!-- SECTION - FlashMassages -->
                            <oFlashMessages :text="errorForm" styleThema=" -error" />
                            <oFlashMessages :text="successForm" styleThema=" -success" />
                            <!-- SECTION - FlashMassages END -->

                            <form class="o-form-login__form" @submit.prevent="loginForm">
                                <div class="o-form-login__items">
                                    <div class="o-form-login__item">
                                        <input class="a-input a-input--big" type="text" name="email" v-model="email" placeholder="E-mail"/>
                                    </div>
                                    <div class="o-form-login__item">
                                        <input class="a-input a-input--big" type="password" name="password" v-model="password" placeholder="Heslo"/>
                                    </div>
                                </div>
                                <div class="o-form-login__buttons mt-1">
                                    <div class="o-form-login__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Přihlásit se</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

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

    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '../components/organisms/oHero.vue'

    export default defineComponent({
        name: 'LoginPage',

        //COMPONENTS
        components: {
            oFlashMessages,
            oHero
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'default'
            })
            
            //META HEAD
            useHead({
                title: 'Přihlášení do administrace',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Přihlášení do administrace',
                ogTitle: 'Přihlášení do administrace',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const email = ref('')
            const password = ref('')
            
            //FORM - login
            const loginForm = async () => {

                try {
                    const response = await fetch(`${runTimeConfig.public.baseURL}/login`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        body: JSON.stringify({
                            'email': email.value,
                            'password': password.value
                        })
                    });

                    const login = await response.json()
                    if (login && login.status && login.status === 200) {
                        //set storage
                        localStorage.setItem("user-info", JSON.stringify(login.message[0]))

                        //set expires
                        var now = new Date()
                        now.setMonth(now.getMonth() + 1)
                        let expires = "expires=" + now

                        //set cookies
                        document.cookie = "FNCADMINemail=" + login.message[0].email + ";" + expires
                        document.cookie = "FNCADMINpass=" + login.message[0].password + ";" + expires

                        errorForm.value = ""
                        successForm.value = "Byl jste přihlášen"

                        //Přesměrování
                        await navigateTo('/admin')
                    } else {
                        errorForm.value = "Uživatelský email nebo heslo je nesprávné"
                    }
                } catch (error) {
                    errorForm.value = "Uživatelský email nebo heslo je nesprávné"
                }
            }

            return { successForm, errorForm, email, password, loginForm }
        },

        mounted() {
            //Kontrola přihlášení
            let user = localStorage.getItem('user-info')
            if (user && user != "undefined") {
                //Přesměrování
                const router = useRouter()
                router.push('/admin')
            }
        }
    })
</script>