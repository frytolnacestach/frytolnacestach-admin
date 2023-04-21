<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        stát {{ placesStateName }}
                    </h1>
                </div>
            </div>
        </div>

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
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places/states">Státy</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Editace státu - {{ placesStateName }}</span>
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
                            
                            <div class="o-flash-messages" v-if="errorForm">
                                <div class="o-flash-messages__items">
                                    <div class="o-flash-messages__item">
                                        <div class="o-flash-messages__outer">
                                            <div class="o-flash-messages__inner">
                                                <span class="o-flash-messages__text">{{ errorForm }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form class="o-form-edit__form" @submit.prevent="editForm">
                                <div class="o-form-edit__items">
                                    
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="placesStateSlug" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Jméno:</span>
                                        </label>
                                        <input class="a-input" type="text" name="mpz" v-model="placesStateName" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">MPZ:</span>
                                        </label>
                                        <input class="a-input" type="text" name="mpz" v-model="placesStateMpz" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">TLD:</span>
                                        </label>
                                        <input class="a-input" type="text" name="tld" v-model="placesStateTld" />
                                    </div>
                             
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Rozloha:</span>
                                        </label>
                                        <input class="a-input" type="text" name="area" v-model="placesStateArea" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Populace:</span>
                                        </label>
                                        <input class="a-input" type="text" name="population" v-model="placesStatePopulation" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Informace (Chat GPT):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesStateInformationChatgpt"></textarea>
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image (Cover):</span>
                                        </label>
                                        <input class="a-input" type="text" name="image_cover" v-model="placesStateImageCover" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image (Hero):</span>
                                        </label>
                                        <input class="a-input" type="text" name="image_hero" v-model="placesStateImageHero" />
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
    interface PlacesState {
        slug: string
        mpz: string,
        tld: string,
        name: string,
        area: string,
        population: string,
        information_chatgpt: string,
        image_cover: string,
        image_hero: string
    }

    export default defineComponent({
        name: 'AdminPlacesStatesSlugPage',

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Státy - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Státy - úprava',
                ogTitle: 'Místa - Státy - úprava',
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
            const placesStateSlug = ref('')
            const placesStateMpz = ref('')
            const placesStateTld = ref('')
            const placesStateName = ref('')
            const placesStateArea = ref('')
            const placesStatePopulation = ref('')
            const placesStateInformationChatgpt = ref('')
            const placesStateImageCover = ref('')
            const placesStateImageHero = ref('')

            //API - Places State
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-state/${route.params.slug}`)
                
                const PlacesState: PlacesState[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesState) && PlacesState.length > 0) {
                    placesStateSlug.value = PlacesState[0].slug;
                    placesStateMpz.value = PlacesState[0].mpz;
                    placesStateTld.value = PlacesState[0].tld;
                    placesStateName.value = PlacesState[0].name;
                    placesStateArea.value = PlacesState[0].area;
                    placesStatePopulation.value = PlacesState[0].population;
                    placesStateInformationChatgpt.value = PlacesState[0].information_chatgpt;
                    placesStateImageCover.value = PlacesState[0].image_cover;
                    placesStateImageHero.value = PlacesState[0].image_hero;
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-state-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': placesStateSlug.value,
                            'mpz': placesStateMpz.value,
                            'tld': placesStateTld.value,
                            'name': placesStateName.value,
                            'area': placesStateArea.value,
                            'population': placesStatePopulation.value,
                            'information_chatgpt': placesStateInformationChatgpt.value,
                            'image_cover': placesStateImageCover.value,
                            'image_hero': placesStateImageHero.value
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
            return { successForm, errorForm, placesStateSlug, placesStateMpz, placesStateTld, placesStateName, placesStateArea, placesStatePopulation, placesStateInformationChatgpt, placesStateImageCover, placesStateImageHero, editForm }
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