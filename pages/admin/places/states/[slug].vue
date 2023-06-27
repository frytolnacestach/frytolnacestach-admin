<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Stát ' + placesStateName" />
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
                                            <input class="a-input" type="text" name="slug" v-model="placesStateSlug" />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Kontinent:</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_hero" v-model="placesStateIDcontinent" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Hlavní město:</span>
                                            </label>
                                            <input class="a-input" type="text" name="city_main" v-model="placesStateIDcityMain" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Cover):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_cover" v-model="placesStateIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image (Hero):</span>
                                            </label>
                                            <input class="a-input" type="text" name="image_hero" v-model="placesStateIDimageHero" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Sousední státy:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="neighboring_countries" v-model="placesStateIDSneighboringCountries"></textarea>
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Jméno:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesStateName" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace (Chat GPT):</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesStateInformationChatgpt"></textarea>
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
                                                <span class="m-label__name">Telefonní předvolba:</span>
                                            </label>
                                            <input class="a-input" type="text" name="phone_prefix" v-model="placesStatePhonePrefix" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Důležitá telefonní čísla:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="phone_numbers_emergency" v-model="placesStatePhoneNumbersEmergency"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název měny:</span>
                                            </label>
                                            <input class="a-input" type="text" name="currency_name" v-model="placesStateCurrencyName" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Kód měny:</span>
                                            </label>
                                            <input class="a-input" type="text" name="currency_code" v-model="placesStateCurrencyCode" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Ceny:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="money_prices" v-model="placesStateMoneyPrices"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Náboženství:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="people_religion" v-model="placesStatePeopleReligion"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Národnost:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="people_nationality" v-model="placesStatePeopleNationality"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Návštěvnická pravidla:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="visitors_entry" v-model="placesStateVisitorsEntry"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="coordinates" v-model="placesStateCoordinates"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="zoom" v-model="placesStateZoom"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="affiliate" v-model="placesStateAffiliate"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Alerty:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="alerts" v-model="placesStateAlerts"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Organizace:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="organization" v-model="placesStateOrganization"></textarea>
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Aplikace:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="apps" v-model="placesStateApps"></textarea>
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkazy:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="links" v-model="placesStateLinks"></textarea>
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

    interface PlacesState {
        id_continent: number
        id_city_main: number
        id_image_cover: number
        id_image_hero: number,
        ids_neighboring_countries: number
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        mpz: string
        tld: string
        area: number
        population: number
        phone_prefix: string
        phone_numbers_emergency: string
        currency_name: string
        currency_code: string
        money_prices: string
        people_religion: string
        people_nationality: string
        visitors_entry: string
        coordinates: string
        zoom: string
        affiliate: string
        alerts: string
        organization: string
        apps: string
        links: string
    }

    export default defineComponent({
        name: 'AdminPlacesStatesSlugPage',

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
                        name: "Státy",
                        url: "/admin/places/states",
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
                const placesStateName = this.placesStateName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace státu - ${placesStateName}`
                }
            }
        },

        watch: {
            placesStateName: function (newValue, oldValue) {
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
            const placesStateIDcontinent = ref(0)
            const placesStateIDcityMain = ref(0)
            const placesStateIDimageCover = ref(0)
            const placesStateIDimageHero = ref(0)
            const placesStateIDSneighboringCountries = ref('')
            const placesStateTypePlace = ref('')
            const placesStateSlug = ref('')
            const placesStateName = ref('')
            const placesStateInformationChatgpt = ref('')
            const placesStateMpz = ref('')
            const placesStateTld = ref('')
            const placesStateArea = ref(0)
            const placesStatePopulation = ref(0)
            const placesStatePhonePrefix = ref('')
            const placesStatePhoneNumbersEmergency = ref('')
            const placesStateCurrencyName = ref('')
            const placesStateCurrencyCode = ref('')
            const placesStateMoneyPrices = ref('')
            const placesStatePeopleReligion = ref('')
            const placesStatePeopleNationality = ref('')
            const placesStateVisitorsEntry = ref('')
            const placesStateCoordinates = ref('')
            const placesStateZoom = ref('')
            const placesStateAffiliate = ref('')
            const placesStateAlerts = ref('')
            const placesStateOrganization = ref('')
            const placesStateApps = ref('')
            const placesStateLinks = ref('')

            //API - Places State
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-state/${route.params.slug}`)
                
                const PlacesState: PlacesState[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesState) && PlacesState.length > 0) {
                    placesStateIDcontinent.value = PlacesState[0].id_continent;
                    placesStateIDcityMain.value = PlacesState[0].id_city_main;
                    placesStateIDimageCover.value = PlacesState[0].id_image_cover;
                    placesStateIDimageHero.value = PlacesState[0].id_image_hero;
                    placesStateIDSneighboringCountries.value = JSON.stringify(PlacesState[0].ids_neighboring_countries);
                    placesStateTypePlace.value = PlacesState[0].type_place;
                    placesStateSlug.value = PlacesState[0].slug;
                    placesStateName.value = PlacesState[0].name;
                    placesStateInformationChatgpt.value = PlacesState[0].information_chatgpt;
                    placesStateMpz.value = PlacesState[0].mpz;
                    placesStateTld.value = PlacesState[0].tld;
                    placesStateArea.value = PlacesState[0].area;
                    placesStatePopulation.value = PlacesState[0].population;
                    placesStatePhonePrefix.value = PlacesState[0].phone_prefix;
                    placesStatePhoneNumbersEmergency.value = JSON.stringify(PlacesState[0].phone_numbers_emergency);
                    placesStateCurrencyName.value = PlacesState[0].currency_name;
                    placesStateCurrencyCode.value = PlacesState[0].currency_code;
                    placesStateMoneyPrices.value = JSON.stringify(PlacesState[0].money_prices);
                    placesStatePeopleReligion.value = JSON.stringify(PlacesState[0].people_religion);
                    placesStatePeopleNationality.value = JSON.stringify(PlacesState[0].people_nationality);
                    placesStateVisitorsEntry.value = JSON.stringify(PlacesState[0].visitors_entry);
                    placesStateCoordinates.value = JSON.stringify(PlacesState[0].coordinates);
                    placesStateZoom.value = JSON.stringify(PlacesState[0].zoom);
                    placesStateAffiliate.value = JSON.stringify(PlacesState[0].affiliate);
                    placesStateAlerts.value = JSON.stringify(PlacesState[0].alerts);
                    placesStateOrganization.value = JSON.stringify(PlacesState[0].organization);
                    placesStateApps.value = JSON.stringify(PlacesState[0].apps);
                    placesStateLinks.value = JSON.stringify(PlacesState[0].links);
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
                            'id_continent': placesStateIDcontinent.value,
                            'id_city_main': placesStateIDcityMain.value,
                            'id_image_cover': placesStateIDimageCover.value,
                            'id_image_hero': placesStateIDimageHero.value,
                            'ids_neighboring_countries': placesStateIDSneighboringCountries.value,
                            'type_place': placesStateTypePlace.value,
                            'slug': placesStateSlug.value,
                            'name': placesStateName.value,
                            'information_chatgpt': placesStateInformationChatgpt.value,
                            'mpz': placesStateMpz.value,
                            'tld': placesStateTld.value,
                            'area': placesStateArea.value,
                            'population': placesStatePopulation.value,
                            'phone_prefix': placesStatePhonePrefix.value,
                            'phone_numbers_emergency': placesStatePhoneNumbersEmergency.value,
                            'currency_name': placesStateCurrencyName.value,
                            'currency_code': placesStateCurrencyCode.value,
                            'money_prices': placesStateMoneyPrices.value,
                            'people_religion': placesStatePeopleReligion.value,
                            'people_nationality': placesStatePeopleNationality.value,
                            'visitors_entry': placesStateVisitorsEntry.value,
                            'coordinates': placesStateCoordinates.value,
                            'zoom': placesStateZoom.value,
                            'affiliate': placesStateAffiliate.value,
                            'alerts': placesStateAlerts.value,
                            'organization': placesStateOrganization.value,
                            'apps': placesStateApps.value,
                            'links': placesStateLinks.value
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
            return {
                successForm, 
                errorForm, 
                placesStateIDcontinent,
                placesStateIDcityMain,
                placesStateIDimageCover,
                placesStateIDimageHero,
                placesStateIDSneighboringCountries,
                placesStateTypePlace,
                placesStateSlug,
                placesStateName,
                placesStateInformationChatgpt,
                placesStateMpz,
                placesStateTld,
                placesStateArea,
                placesStatePopulation,
                placesStatePhonePrefix,
                placesStatePhoneNumbersEmergency,
                placesStateCurrencyName,
                placesStateCurrencyCode,
                placesStateMoneyPrices,
                placesStatePeopleReligion,
                placesStatePeopleNationality,
                placesStateVisitorsEntry,
                placesStateCoordinates,
                placesStateZoom,
                placesStateAffiliate,
                placesStateAlerts,
                placesStateOrganization,
                placesStateApps,
                placesStateLinks,
                editForm
            }
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