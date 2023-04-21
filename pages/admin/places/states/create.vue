<template>
    <main class="t-main">
        <oHero headline="Přidání nového státu" />

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
                            <span class="m-nav-breadcrumbs__span">Přidání nového státu</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section class="t-section mt-4 mb-8">
            <div class="t-section__inner">

                <div class="o-form-create">
                    <div class="o-form-create__outer">
                        <div class="o-form-create__inner">
                            
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

                            <form class="o-form-create__form" @submit.prevent="createForm">
                                <div class="o-form-create__items">
                                    
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="placesStateSlug" />
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
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Name:</span>
                                        </label>
                                        <input class="a-input" type="text" name="name" v-model="placesStateName" />
                                    </div>

                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Area:</span>
                                        </label>
                                        <input class="a-input" type="text" name="area" v-model="placesStateArea" />
                                    </div>
  
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Population:</span>
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
                                <div class="o-form-create__buttons mt-1">
                                    <div class="o-form-create__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Vytvořit stát</button>
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
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlacesStatesCreatePage',

        //COMPONENTS
        components: {
            oHero
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Státy - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Státy - vytvoření',
                ogTitle: 'Místa - Státy - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
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

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-state-create`, {
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
                        navigateTo(`/admin/places/states/${placesStateSlug.value}`)
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
            return { successForm, errorForm, placesStateSlug, placesStateMpz, placesStateTld, placesStateName, placesStateArea, placesStatePopulation, placesStateInformationChatgpt, placesStateImageCover, placesStateImageHero, createForm }
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