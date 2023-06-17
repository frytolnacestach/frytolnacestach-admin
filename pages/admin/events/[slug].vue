<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Událost ' + eventName" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-edit">
                        <div class="o-form-edit__outer">
                            <div class="o-form-edit__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        <!-- slug -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="eventSlug" />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Stát:</span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="eventIDstate" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Město:</span>
                                            </label>
                                            <input class="a-input" type="text" name="city" v-model="eventIDcity" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Místo:</span>
                                            </label>
                                            <input class="a-input" type="text" name="spot" v-model="eventIDspot" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Cover:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="eventIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Hero:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="eventIDimageHero" />
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum od:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateStart" v-model="eventDateStart" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum do:</span>
                                            </label>
                                            <input class="a-input" type="text" name="dateEnd" v-model="eventDateEnd" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Jméno:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="eventName" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="eventDescription"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="coordinates" v-model="eventCoordinates"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="zoom" v-model="eventZoom"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="affiliate" v-model="eventAffiliate"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Cena:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="prices" v-model="eventPrices"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkazy:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="links" v-model="eventLinks"></textarea>
                                        </div>                     
                                    </div>
                                    <!-- button -->
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
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

    interface Event {
        id_state: number
        id_city: number
        id_spot: number
        id_image_cover: number
        id_image_hero: number
        date_start: string
        date_end: string
        slug: string
        name: string
        description: string
        coordinates: string
        zoom: string
        affiliate: string
        prices: string
        links: string
    }

    export default defineComponent({
        name: 'AdminPlacesCitiesSlugPage',

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
                        name: "Událost",
                        url: "/admin/events",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace události - NÁZEV UDÁLOSTI`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const eventName = this.eventName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace UDÁLOSTI - ${eventName}`
                }
            }
        },

        watch: {
            eventName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Události - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Události - úprava',
                ogTitle: 'Události - úprava',
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

            //API - Event
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/event/${route.params.slug}`)
                
                const Event: Event[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Event) && Event.length > 0) {
                    eventIDstate.value = Event[0].id_state;
                    eventIDcity.value = Event[0].id_city;
                    eventIDspot.value = Event[0].id_spot;
                    eventIDimageCover.value = Event[0].id_image_cover;
                    eventIDimageHero.value = Event[0].id_image_hero;
                    eventDateStart.value = Event[0].date_start;
                    eventDateEnd.value = Event[0].date_end;
                    eventSlug.value = Event[0].slug;
                    eventName.value = Event[0].name;
                    eventDescription.value = Event[0].description;
                    eventCoordinates.value = JSON.stringify(Event[0].coordinates);
                    eventZoom.value = JSON.stringify(Event[0].zoom);
                    eventAffiliate.value = JSON.stringify(Event[0].affiliate);
                    eventPrices.value = JSON.stringify(Event[0].prices);
                    eventLinks.value = JSON.stringify(Event[0].links);
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/event-edit`, {
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
            return { successForm, errorForm, eventIDstate, eventIDcity, eventIDspot, eventIDimageCover, eventIDimageHero, eventDateStart, eventDateEnd, eventSlug, eventName, eventDescription, eventCoordinates, eventZoom, eventAffiliate, eventPrices, eventLinks, editForm }
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