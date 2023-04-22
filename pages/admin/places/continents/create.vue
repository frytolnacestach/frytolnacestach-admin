<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového kontinentu" />
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
                                            <input class="a-input" type="text" name="slug" v-model="placesContinentSlug" />
                                        </div>
                                                                            
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Name:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesContinentName" />
                                        </div>
                                
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Area:</span>
                                            </label>
                                            <input class="a-input" type="text" name="area" v-model="placesContinentArea" />
                                        </div>
    
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Population:</span>
                                            </label>
                                            <input class="a-input" type="text" name="population" v-model="placesContinentPopulation" />
                                        </div>

                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Population density:</span>
                                            </label>
                                            <input class="a-input" type="text" name="populationDensity" v-model="placesContinentPopulationDensity" />
                                        </div>

                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">States</span>
                                            </label>
                                            <input class="a-input" type="text" name="number_states" v-model="placesContinentNumberStates" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace (Chat GPT):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesContinentInformationCahtgpt"></textarea>
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Cover):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_cover" v-model="placesContinentImageCover" />
                                        </div>

                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Hero):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_hero" v-model="placesContinentImageHero" />
                                        </div>

                                    </div>
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytvořit kontinent</button>
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
        name: 'AdminPlacesContinentsCreatePage',

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
                        name: "Kontinenty",
                        url: "/admin/places/continents",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: "Přidání nového kontinenta",
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
                title: 'Místa - Kontinenty - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Kontinenty - vytvoření',
                ogTitle: 'Místa - Kontinenty - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesContinentSlug = ref('')
            const placesContinentName = ref('')
            const placesContinentArea = ref('')
            const placesContinentPopulation = ref('')
            const placesContinentPopulationDensity = ref('')
            const placesContinentNumberStates = ref('')
            const placesContinentInformationCahtgpt = ref('')
            const placesContinentImageCover = ref('')
            const placesContinentImageHero = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-continent-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': placesContinentSlug.value,
                            'name': placesContinentName.value,
                            'area': placesContinentArea.value,
                            'population': placesContinentPopulation.value,
                            'populationDensity': placesContinentPopulationDensity.value,
                            'number_states': placesContinentNumberStates.value,
                            'information_chatgpt': placesContinentInformationCahtgpt.value,
                            'image_cover': placesContinentImageCover.value,
                            'image_hero': placesContinentImageHero.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/continents/${placesContinentSlug.value}`)
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
            return { successForm, errorForm, placesContinentSlug, placesContinentName, placesContinentArea, placesContinentPopulation, placesContinentPopulationDensity, placesContinentNumberStates, placesContinentInformationCahtgpt, placesContinentImageCover, placesContinentImageHero, createForm }
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