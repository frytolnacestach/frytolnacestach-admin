<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového města" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <div class="o-form-create">
                        <div class="o-form-create__outer">
                            <div class="o-form-create__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <form class="o-form-create__form" @submit.prevent="createForm">
                                    <div class="o-form-create__items">
                                        
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="placesCitySlug" />
                                        </div>
                                                                            
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Name:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesCityName" />
                                        </div>

                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Area:</span>
                                            </label>
                                            <input class="a-input" type="text" name="area" v-model="placesCityArea" />
                                        </div>
    
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Population:</span>
                                            </label>
                                            <input class="a-input" type="text" name="population" v-model="placesCityPopulation" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Nadmořká výška:</span>
                                            </label>
                                            <input class="a-input" type="text" name="altitude" v-model="placesCityAltitude" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace (Chat GPT):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesCityInformationChatgpt"></textarea>
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Cover):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_cover" v-model="placesCityImageCover" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Hero):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_hero" v-model="placesCityImageHero" />
                                        </div>

                                    </div>
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytvořit město</button>
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
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlacesCitiesCreatePage',

        //COMPONENTS
        components: {
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
                        name: "Místa",
                        url: "/admin/places",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Města",
                        url: "/admin/places/cities",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: "Přidání nového města",
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
                title: 'Místa - Města - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Města - vytvoření',
                ogTitle: 'Místa - Města - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesCitySlug = ref('')
            const placesCityName = ref('')
            const placesCityArea = ref('')
            const placesCityPopulation = ref('')
            const placesCityAltitude = ref('')
            const placesCityInformationChatgpt = ref('')
            const placesCityImageCover = ref('')
            const placesCityImageHero = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-city-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': placesCitySlug.value,
                            'name': placesCityName.value,
                            'area': placesCityArea.value,
                            'population': placesCityPopulation.value,
                            'altitude': placesCityAltitude.value,
                            'information_chatgpt': placesCityInformationChatgpt.value,
                            'image_cover': placesCityImageCover.value,
                            'image_hero': placesCityImageHero.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/cities/${placesCitySlug.value}`)
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
            return { successForm, errorForm, placesCitySlug, placesCityName, placesCityArea, placesCityPopulation, placesCityAltitude, placesCityInformationChatgpt, placesCityImageCover, placesCityImageHero, createForm }
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