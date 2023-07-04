<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Město ' + placesCityName" />
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
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="placesCitySlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="state" v-model="placesCityIDstate" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="placesCityIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="placesCityIDimageHero" />
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="typePlace" v-model="placesCityTypePlace" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesCityName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od Chat GPT <span class="m-label__name-column">(information_chatgpt)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesCityInformationChatgpt"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Populace <span class="m-label__name-column">(population)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="population" v-model="placesCityPopulation" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Rozloha <span class="m-label__name-column">(area)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="area" v-model="placesCityArea" />
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Nadmořská výška <span class="m-label__name-column">(altitude)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="altitude" v-model="placesCityAltitude" />
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="coordinates" v-model="placesCityCoordinates"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom map <span class="m-label__name-column">(zoom)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="zoom" v-model="placesCityZoom"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate <span class="m-label__name-column">(affiliate)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="affiliate" v-model="placesCityAffiliate"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Upozornění <span class="m-label__name-column">(alerts)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="alerts" v-model="placesCityAlerts"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Parkování <span class="m-label__name-column">(parking)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="parking" v-model="placesCityParking"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Je město mezi top10 největšími? <span class="m-label__name-column">(biggest)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="biggest" v-model="placesCityBiggest" />
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

    interface PlacesCity {
        id_state: number
        id_image_cover: number
        id_image_hero: number
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        population: string
        area: string
        altitude: string
        coordinates: string
        zoom: string
        affiliate: string
        alerts: string
        parking: string
        biggest: string
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
                        name: `Editace města - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesCityName = this.placesCityName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace města - ${placesCityName}`
                }
            }
        },

        watch: {
            placesCityName: function (newValue, oldValue) {
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
            const placesCityIDstate = ref(0)
            const placesCityIDimageCover = ref(0)
            const placesCityIDimageHero = ref(0)
            const placesCityTypePlace = ref('')
            const placesCitySlug = ref('')
            const placesCityName = ref('')
            const placesCityInformationChatgpt = ref('')
            const placesCityPopulation = ref('')
            const placesCityArea = ref('')
            const placesCityAltitude = ref('')
            const placesCityCoordinates = ref('')
            const placesCityZoom = ref('')
            const placesCityAffiliate = ref('')
            const placesCityAlerts = ref('')
            const placesCityParking = ref('')
            const placesCityBiggest = ref('')

            //API - Places City
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-city/${route.params.slug}`)
                
                const PlacesCity: PlacesCity[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesCity) && PlacesCity.length > 0) {
                    placesCityIDstate.value = PlacesCity[0].id_state;
                    placesCityIDimageCover.value = PlacesCity[0].id_image_cover;
                    placesCityIDimageHero.value = PlacesCity[0].id_image_hero;
                    placesCityTypePlace.value = PlacesCity[0].type_place;
                    placesCitySlug.value = PlacesCity[0].slug;
                    placesCityName.value = PlacesCity[0].name;
                    placesCityInformationChatgpt.value = PlacesCity[0].information_chatgpt;
                    placesCityPopulation.value = PlacesCity[0].population;
                    placesCityArea.value = PlacesCity[0].area;
                    placesCityAltitude.value = PlacesCity[0].altitude;
                    placesCityCoordinates.value = JSON.stringify(PlacesCity[0].coordinates);
                    placesCityZoom.value = JSON.stringify(PlacesCity[0].zoom);
                    placesCityAffiliate.value = JSON.stringify(PlacesCity[0].affiliate);
                    placesCityAlerts.value = JSON.stringify(PlacesCity[0].alerts);
                    placesCityParking.value = JSON.stringify(PlacesCity[0].parking);
                    placesCityBiggest.value = PlacesCity[0].biggest;
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
                            'id_state': placesCityIDstate.value,
                            'id_image_cover': placesCityIDimageCover.value,
                            'id_image_hero': placesCityIDimageHero.value,
                            'type_place': placesCityTypePlace.value,
                            'slug': placesCitySlug.value,
                            'name': placesCityName.value,
                            'information_chatgpt': placesCityInformationChatgpt.value,
                            'population': placesCityPopulation.value,
                            'area': placesCityArea.value,
                            'altitude': placesCityAltitude.value,
                            'coordinates': placesCityCoordinates.value,
                            'zoom': placesCityZoom.value,
                            'affiliate': placesCityAffiliate.value,
                            'alerts': placesCityAlerts.value,
                            'parking': placesCityParking.value,
                            'biggest': placesCityBiggest.value
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
            return { successForm, errorForm, placesCityIDstate, placesCityIDimageCover, placesCityIDimageHero, placesCityTypePlace, placesCitySlug, placesCityName, placesCityInformationChatgpt, placesCityPopulation, placesCityArea, placesCityAltitude, placesCityCoordinates, placesCityZoom, placesCityAffiliate, placesCityAlerts, placesCityParking, placesCityBiggest, editForm }
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