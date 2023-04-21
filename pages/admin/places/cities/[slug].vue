<template>
    <main class="t-main">
        <oHero :headline="'Město ' + placesCityName" />

        <nav class="m-nav-breadcrumbs">
            <div class="m-nav-breadcrumbs__outer">
                <div class="m-nav-breadcrumbs__inner">
                    <ul class="m-nav-breadcrumbs__items">
                        <li class="m-nav-breadcrumbs__item">
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places">Místa</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places/cities">Města</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Editace města - {{ placesCityName }}</span>
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
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="placesCitySlug" />
                                    </div>
                             
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Jméno:</span>
                                        </label>
                                        <input class="a-input" type="text" name="name" v-model="placesCityName" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Rozloha:</span>
                                        </label>
                                        <input class="a-input" type="text" name="area" v-model="placesCityArea" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Populace:</span>
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
</template>

<script lang="ts">
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface PlacesCity {
        slug: string
        name: string,
        area: string,
        population: string,
        altitude: string,
        information_chatgpt: string,
        image_cover: string,
        image_hero: string
    }

    export default defineComponent({
        name: 'AdminPlacesCitiesSlugPage',

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
                title: 'Místa - Města - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Města - úprava',
                ogTitle: 'Místa - Města - úprava',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
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

            //API - Places City
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-city/${route.params.slug}`)
                
                const PlacesCity: PlacesCity[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesCity) && PlacesCity.length > 0) {
                    placesCitySlug.value = PlacesCity[0].slug;
                    placesCityName.value = PlacesCity[0].name;
                    placesCityArea.value = PlacesCity[0].area;
                    placesCityPopulation.value = PlacesCity[0].population;
                    placesCityAltitude.value = PlacesCity[0].altitude;
                    placesCityInformationChatgpt.value = PlacesCity[0].information_chatgpt;
                    placesCityImageCover.value = PlacesCity[0].image_cover;
                    placesCityImageHero.value = PlacesCity[0].image_hero;
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-city-edit`, {
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
                            'image_hero': placesCityImageHero.value,
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
            return { successForm, errorForm, placesCitySlug, placesCityName, placesCityArea, placesCityPopulation, placesCityAltitude, placesCityInformationChatgpt, placesCityImageCover, placesCityImageHero, editForm }
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