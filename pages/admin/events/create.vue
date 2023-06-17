<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nové události" />
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

                                <!-- FORM -->
                                <form class="o-form-create__form" @submit.prevent="createForm">
                                    <div class="o-form-create__items">
                                        <!-- slug -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="eventSlug" />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Stát:</span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="eventIDstate" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Město:</span>
                                            </label>
                                            <input class="a-input" type="text" name="city" v-model="eventIDcity" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Místo:</span>
                                            </label>
                                            <input class="a-input" type="text" name="spot" v-model="eventIDspot" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Cover:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="eventIDimageCover" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Hero:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="eventIDimageHero" />
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum od:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateStart" v-model="eventDateStart" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum do:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateEnd" v-model="eventDateEnd" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Jméno:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="eventName" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="eventDescription"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="coordinates" v-model="eventCoordinates"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="zoom" v-model="eventZoom"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="affiliate" v-model="eventAffiliate"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Cena:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="prices" v-model="eventPrices"></textarea>
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkazy:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="links" v-model="eventLinks"></textarea>
                                        </div>                     
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-create__buttons mt-1">
                                        <div class="o-form-create__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Vytořit událost</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <!-- FORM END -->
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
                        name: "Události",
                        url: "/admin/events",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Přidání nové události",
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
                title: 'Události - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Události - vytvoření',
                ogTitle: 'Události - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const eventIDstate = ref(0)
            const eventIDcity = ref(0)
            const eventIDspot = ref(0)
            const eventIDimageCover = ref(0)
            const eventIDimageHero = ref(0)
            const eventDateStart = ref('')
            const eventDateEnd = ref('')
            const eventSlug = ref('')
            const eventName = ref('')
            const eventDescription = ref('')
            const eventCoordinates = ref('')
            const eventZoom = ref('')
            const eventAffiliate = ref('')
            const eventPrices = ref('')
            const eventLinks = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/event-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_state': eventIDstate.value,
                            'id_city': eventIDcity.value,
                            'id_spot': eventIDspot.value,
                            'id_image_cover': eventIDimageCover.value,
                            'id_image_hero': eventIDimageHero.value,
                            'date_start': eventDateStart.value,
                            'date_end': eventDateEnd.value,
                            'slug': eventSlug.value,
                            'name': eventName.value,
                            'description': eventDescription.value,
                            'coordinates': eventCoordinates.value,
                            'zoom': eventZoom.value,
                            'affiliate': eventAffiliate.value,
                            'prices': eventPrices.value,
                            'links': eventLinks.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/events/${eventSlug.value}`)
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
            return { successForm, errorForm, eventIDstate, eventIDcity, eventIDspot, eventIDimageCover, eventIDimageHero, eventDateStart, eventDateEnd, eventSlug, eventName, eventDescription, eventCoordinates, eventZoom, eventAffiliate, eventPrices, eventLinks, createForm }
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