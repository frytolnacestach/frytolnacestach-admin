<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <oHero headline="Administrace - základní údaje" />

            <nav class="m-nav-breadcrumbs">
                <div class="m-nav-breadcrumbs__outer">
                    <div class="m-nav-breadcrumbs__inner">
                        <ul class="m-nav-breadcrumbs__items">
                            <li class="m-nav-breadcrumbs__item">
                                <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                            </li>
                            <li class="m-nav-breadcrumbs__item">
                                <span class="m-nav-breadcrumbs__span">Základní údaje</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-edit">
                        <div class="o-form-edit__outer">
                            <div class="o-form-edit__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Kdo jsem:</span>
                                            </label>
                                            <textarea class="a-textarea" name="iam" v-model="iam"></textarea>
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Jak mě podpořit:</span>
                                            </label>
                                            <textarea class="a-textarea" name="donate" v-model="donate"></textarea>
                                        </div>

                                    </div>
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminBaseIndexPage',

        //COMPONENTS
        components: {
            oFlashMessages,
            oHero
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
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const iam = ref('')
            const donate = ref('')

            //API - Base
            ;(async () => {
                const { data: base } = await useFetch(`${runTimeConfig.public.baseURL}/base`)

                iam.value = JSON.parse(base._rawValue)[0].iam;
                donate.value = JSON.parse(base._rawValue)[0].donate;
            })()

            //FORM - edit
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
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
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
            return { successForm, errorForm, iam, donate, editForm }
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
