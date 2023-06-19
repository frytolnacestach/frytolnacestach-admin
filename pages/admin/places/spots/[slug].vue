<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Místo ' + placesSpotName" />
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
                                            <input class="a-input" type="text" name="slug" v-model="placesSpotSlug" />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Stát:</span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="placesSpotIDstate" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Město:</span>
                                            </label>
                                            <input class="a-input" type="text" name="city" v-model="placesSpotIDcity" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Cover:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="placesSpotIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Hero:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="placesSpotIDimageHero" />
                                        </div>
                                        <!-- other --> 
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Jméno:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesSpotName" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace (Chat GPT):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesSpotInformationChatgpt"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Nadmořská výška:</span>
                                            </label>
                                            <input class="a-input" type="text" name="altitude" v-model="placesSpotAltitude" />
                                        </div> 
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="coordinates" v-model="placesSpotCoordinates"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="zoom" v-model="placesSpotZoom"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="affiliate" v-model="placesSpotAffiliate"></textarea>
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

    interface PlacesSpot {
        id_state: number
        id_city: number
        id_image_cover: number
        id_image_hero: number
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        coordinates: string
        zoom: string
        affiliate: string
        altitude: string
    }

    export default defineComponent({
        name: 'AdminPlacesSpotsSlugPage',

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
                        name: "Místo",
                        url: "/admin/places/Spots",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: `Editace státu - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesSpotName = this.placesSpotName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace místa - ${placesSpotName}`
                }
            }
        },

        watch: {
            placesSpotName: function (newValue, oldValue) {
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
                title: 'Místa - Místa - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Místa - úprava',
                ogTitle: 'Místa - Místa - úprava',
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
            const placesSpotIDstate = ref(0)
            const placesSpotIDcity = ref(0)
            const placesSpotIDimageCover = ref(0)
            const placesSpotIDimageHero = ref(0)
            const placesSpotTypePlace = ref('')
            const placesSpotSlug = ref('')
            const placesSpotName = ref('')
            const placesSpotInformationChatgpt = ref('')
            const placesSpotAltitude = ref('')
            const placesSpotCoordinates = ref('')
            const placesSpotZoom = ref('')
            const placesSpotAffiliate = ref('')

            //API - Places Spot
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-spot/${route.params.slug}`)
                
                const PlacesSpot: PlacesSpot[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesSpot) && PlacesSpot.length > 0) {
                    placesSpotIDstate.value = PlacesSpot[0].id_state;
                    placesSpotIDcity.value = PlacesSpot[0].id_city;
                    placesSpotIDimageCover.value = PlacesSpot[0].id_image_cover;
                    placesSpotIDimageHero.value = PlacesSpot[0].id_image_hero;
                    placesSpotTypePlace.value = PlacesSpot[0].type_place;
                    placesSpotSlug.value = PlacesSpot[0].slug;
                    placesSpotName.value = PlacesSpot[0].name;
                    placesSpotInformationChatgpt.value = PlacesSpot[0].information_chatgpt;
                    placesSpotAltitude.value = PlacesSpot[0].altitude;
                    placesSpotCoordinates.value = JSON.stringify(PlacesSpot[0].coordinates);
                    placesSpotZoom.value = JSON.stringify(PlacesSpot[0].zoom);
                    placesSpotAffiliate.value = JSON.stringify(PlacesSpot[0].affiliate);
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-spot-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_state': placesSpotIDstate.value,
                            'id_city': placesSpotIDcity.value,
                            'id_image_cover': placesSpotIDimageCover.value,
                            'id_image_hero': placesSpotIDimageHero.value,
                            'type_place': placesSpotTypePlace.value,
                            'slug': placesSpotSlug.value,
                            'name': placesSpotName.value,
                            'information_chatgpt': placesSpotInformationChatgpt.value,
                            'altitude': placesSpotAltitude.value,
                            'coordinates': placesSpotCoordinates.value,
                            'zoom': placesSpotZoom.value,
                            'affiliate': placesSpotAffiliate.value,
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
            return { successForm, errorForm, placesSpotIDstate, placesSpotIDcity, placesSpotIDimageCover, placesSpotIDimageHero, placesSpotTypePlace, placesSpotSlug, placesSpotName, placesSpotInformationChatgpt, placesSpotAltitude, placesSpotCoordinates, placesSpotZoom, placesSpotAffiliate, editForm }
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