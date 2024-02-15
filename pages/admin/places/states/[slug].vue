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

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <mButtonWeb :link="'https://www.frytolnacestach.cz/svet/stat/' + placesStateSlug" text="Zobrazit na webu" />

                                <!-- FORM -->
                                <form class="o-form-item__form" @submit.prevent="editForm" v-if="loadingData">
                                    <!-- BLOCK - Needitační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Needitační hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
                                            <!-- Form - created_at -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="created_at" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="createdAt" v-model="createdAt" required />
                                            </div>
                                            <!-- Form - created_at END -->
                                            <!-- Form - updated_at -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum úpravy" nameDB="updated_at" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="updatedAt" v-model="updatedAt" required />
                                            </div>
                                            <!-- Form - updated_at END -->
                                            <!-- Form - type_place -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ místa" nameDB="type_place" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesStateTypePlace" required />
                                            </div>
                                            <!-- Form - type_place END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Needitační hodnoty END -->

                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="placesStateIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="placesStateIDimageHero" @image="handleImageHero" />
                                            </div>
                                            <!-- Form - id_image_hero END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Obrázky END -->

                                    <!-- BLOCK - SEO -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="SEO" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - seo_tags -->
                                            <div class="o-form-item__item">
                                                <mLabel name="SEO Tagy" nameDB="seo_tags" perex="" :required=false />
                                                <mInputsSeoTags :value="placesStateSeoTags" @seo-tags="handleSeoTags" />
                                            </div>
                                            <!-- Form - seo_tags END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - SEO END -->

                                    <!-- BLOCK - Geolokační umístění -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Geolokační umístění" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_continent -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název kontinentu" nameDB="id_continent" perex="" :required=true />
                                                <mInputIDPlaces :value="placesStateIDcontinent" name="id_continent" type="continent" :required=true @id-place="handleIDcontinent" />
                                            </div>
                                            <!-- Form - id_continent -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Geolokační umístění END -->

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="placesStateSlug" :valueCreate="placesStateName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesStateName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - name original -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název originál" nameDB="name_original" perex="" :required=true />
                                                <input class="a-input" type="text" name="name_original" v-model="placesStateNameOriginal" required />
                                            </div>
                                            <!-- Form - name original END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <aTextarea :value="placesStateInformationChatgpt" name="information_chatgpt" :required=false @textareaValue="handleInformationChatgpt" />
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesStateInformationAuthor" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - id_city_main -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Hlavního města" nameDB="id_city_main" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="city_main" v-model="placesStateIDcityMain" />
                                            </div>
                                            <!-- Form - id_city_main END -->
                                            <!-- Form - ids_neighboring_countries(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Sousední státy" nameDB="ids_neighboring_countries" perex="" :required=false />
                                                <mInputsIDSNeighboringCountries :value="placesStateIDSneighboringCountries" @ids-neighboring-countries="handleIDSneighboringCountries" />
                                            </div>
                                            <!-- Form - ids_neighboring_countries(JSON) END -->
                                            <!-- Form - language_phrases(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Jazykové fráze" nameDB="language_phrases" perex="" :required=false />
                                                <mInputsLanguagePhrases :value="placesStateLanguagePhrases" @language-phrases="handleLanguagePhrases" />
                                            </div>
                                            <!-- Form - language_phrases(JSON) END -->
                                            <!-- Form - mpz -->
                                            <div class="o-form-item__item">
                                                <mLabel name="MPZ" nameDB="mpz" perex="" :required=false />
                                                <input class="a-input" type="text" name="mpz" v-model="placesStateMpz" />
                                            </div>
                                            <!-- Form - mpz END -->
                                            <!-- Form - tld -->
                                            <div class="o-form-item__item">
                                                <mLabel name="TLD" nameDB="tld" perex="" :required=false />
                                                <input class="a-input" type="text" name="tld" v-model="placesStateTld" />
                                            </div>
                                            <!-- Form - tld END -->
                                            <!-- Form - area -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Rozloha" nameDB="area" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesStateArea" />
                                            </div>
                                            <!-- Form - area END -->
                                            <!-- Form - population -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Populace" nameDB="population" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="population" v-model="placesStatePopulation" />
                                            </div>
                                            <!-- Form - population END -->
                                            <!-- Form - phone_prefix -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Telefonní předvolba" nameDB="phone_prefix" perex="" :required=false />
                                                <input class="a-input" type="text" name="phone_prefix" v-model="placesStatePhonePrefix" />
                                            </div>
                                            <!-- Form - phone_prefix END -->
                                            <!-- Form - phone_numbers_emergency(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Důležitá telefonní čísla" nameDB="phone_numbers_emergency" perex="" :required=false />
                                                <mInputsPhoneNumbersEmergency :value="placesStatePhoneNumbersEmergency" @phoneNumbersEmergency="handlePhoneNumbersEmergency" />
                                            </div>
                                            <!-- Form - phone_numbers_emergency(JSON) END -->
                                            <!-- Form - currency -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Měna" nameDB="currency" perex="" :required=false />
                                                <mInputsCurrency :value="placesStateCurrency" :inputsMax="1" @currency="handleCurrency" />
                                            </div>
                                            <!-- Form - currency END -->
                                            <!-- Form - money_prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ceny" nameDB="money_prices" perex="" :required=false />
                                                <mInputsMoneyPrices :value="placesStateMoneyPrices" @money-prices="handleMoneyPrices" />
                                            </div>
                                            <!-- Form - money_prices(JSON) END -->
                                            <!-- Form - people_religion(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Náboženství" nameDB="people_religion" perex="" :required=false />
                                                <mInputsPeopleReligion :value="placesStatePeopleReligion" @people-religion="handlePeopleReligion" />
                                            </div>
                                            <!-- Form - people_religion(JSON) END -->
                                            <!-- Form - people_nationality(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Národnost" nameDB="people_nationality" perex="" :required=false />
                                                <mInputsPeopleNationality :value="placesStatePeopleNationality" @people-nationality="handlePeopleNationality" />
                                            </div>
                                            <!-- Form - people_nationality(JSON) END -->
                                            <!-- Form - visitors_entry(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Pravidla pro vstup" nameDB="visitors_entry" perex="" :required=false />
                                                <mInputsVisitorsEntry :value="placesStateVisitorsEntry" @visitors-entry="handleVisitorsEntry" />
                                            </div>
                                            <!-- Form - visitors_entry(JSON) END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="placesStateCoordinates" :inputsMax="1" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesStateZoom" :inputsMax="1" @zoom="handleZoom" />
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <mInputsAffiliate :value="placesStateAffiliate" @affiliate="handleAffiliate" />
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - alerts(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Upozornění" nameDB="alerts" perex="" :required=false />
                                                <mInputsAlerts :value="placesStateAlerts" @alerts="handleAlerts" />
                                            </div>
                                            <!-- Form - alerts(JSON) END -->
                                            <!-- Form - organization(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Organizace" nameDB="organization" perex="" :required=false />
                                                <mInputsOrganization :value="placesStateOrganization" @organization="handleOrganization" />
                                            </div>
                                            <!-- Form - organization(JSON) END -->
                                            <!-- Form - apps(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Aplikace" nameDB="apps" perex="" :required=false />
                                                <mInputsApps :value="placesStateApps" @apps="handleApps" />
                                            </div>
                                            <!-- Form - apps(JSON) END -->
                                            <!-- Form - links(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkazy" nameDB="links" perex="" :required=false />
                                                <mInputsLinksPlace :value="placesStateLinks" @links-place="handleLinksPlace" />
                                            </div>
                                            <!-- Form - links(JSON) END -->
                                            <!-- Form - factsPlace(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Fakta o místě" nameDB="facts_place" perex="Fakta o místě" :required=false />
                                                <mInputsFactsPlace :value="placesStateFactsPlace" @factsPlace="handleFactsPlace" />
                                            </div>
                                            <!-- Form - factsPlace(JSON) -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Uložit úpravy" />
                                        </div>
                                    </div>
                                    <!-- COMPONENT - Button END -->
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
    import aInputSlug from '@/components/atoms/aInputSlug.vue'
    import aTextarea from '@/components/atoms/aTextarea.vue'
    import mButton from '@/components/molecules/mButton.vue'
    import mButtonWeb from '@/components/molecules/mButtonWeb.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsAffiliate from '@/components/molecules/mInputsAffiliate.vue'
    import mInputsAlerts from '@/components/molecules/mInputsAlerts.vue'
    import mInputsApps from '@/components/molecules/mInputsApps.vue'
    import mInputsCurrency from '@/components/molecules/mInputsCurrency.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsFactsPlace from '@/components/molecules/mInputsFactsPlace.vue'
    import mInputsIDSNeighboringCountries from '@/components/molecules/mInputsIDSNeighboringCountries.vue'
    import mInputsInformationAuthor from '@/components/molecules/mInputsInformationAuthor.vue'
    import mInputsLanguagePhrases from '@/components/molecules/mInputsLanguagePhrases.vue'
    import mInputsLinksPlace from '@/components/molecules/mInputsLinksPlace.vue'
    import mInputsMoneyPrices from '@/components/molecules/mInputsMoneyPrices.vue'
    import mInputsOrganization from '@/components/molecules/mInputsOrganization.vue'
    import mInputsPeopleNationality from '@/components/molecules/mInputsPeopleNationality.vue'
    import mInputsPeopleReligion from '@/components/molecules/mInputsPeopleReligion.vue'
    import mInputsPhoneNumbersEmergency from '@/components/molecules/mInputsPhoneNumbersEmergency.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsVisitorsEntry from '@/components/molecules/mInputsVisitorsEntry.vue'
    import mInputsZoom from '@/components/molecules/mInputsZoom.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface IDSneighboringCountries {
        id: number
    }

    interface InformationAuthor {
        text: string
        date_create: string
        date_update: string
        author_create: string
        author_update: string
    }

    interface PhoneNumbersEmergency {
        name: string
        value: string
        date_create: string
        date_update: string
        author_create: number
        author_update: number
    }

    interface Currency {
        name: string
        code: string
    }

    interface MoneyPrices {
        name: string
        value: string
        date_create: string
        date_update: string
        author_create: number
        author_update: number
    }

    interface PeopleReligion {
        name: string
        value: string
        date_create: string
        date_update: string
        author_create: number
        author_update: number
    }

    interface PeopleNationality {
        name: string
        value: string
        date_create: string
        date_update: string
        author_create: number
        author_update: number
    }

    interface VisitorsEntry {
        name: string
        value: string
        date_create: string
        date_update: string
        author_create: number
        author_update: number
    }

    interface Coordinates {
        latitude: number
        longitude: number
    }

    interface Zoom {
        google: number
        booking: number
    }

    interface Affiliate {
        name: string
        value: boolean
    }

    interface Alerts {
        name: string
        text: string
        type: string
        author: string
        date_create: string
        date_update: string
        date_start: string
        date_end: string
    }

    interface Organization {
        date: string
        name: string
        author: string
        date_update: string
        author_update: string
        date_add_to_organization: string
    }

    interface Apps {
        url: string
        date: string
        name: string
        author: string
        date_update: string
        description: string
        author_update: string
    }

    interface Links {
        url: string
        date: string
        name: string
        author: string
        date_update: string
        description: string
        author_update: string
    }

    interface seoTags {
        tag: string
    }

    interface LanguagePhrases {
        czech: string
        foreign: string
    }

    interface FactsPlace {
        name: string
        value: string
    }

    interface PlacesState {
        id: number
        created_at: string
        updated_at: string
        id_continent: number
        id_city_main: number
        id_image_cover: number
        id_image_hero: number,
        ids_neighboring_countries: IDSneighboringCountries[]
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        mpz: string
        tld: string
        area: number
        population: number
        phone_prefix: string
        phone_numbers_emergency: PhoneNumbersEmergency[]
        currency: Currency[]
        money_prices: MoneyPrices[]
        people_religion: PeopleReligion[]
        people_nationality: PeopleNationality[]
        visitors_entry: VisitorsEntry[]
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        alerts: Alerts[]
        organization: Organization[]
        apps: Apps[]
        links: Links[]
        language_phrases: LanguagePhrases[]
        factsPlace: FactsPlace[]
    }

    export default defineComponent({
        name: 'AdminPlacesStatesSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            aTextarea,
            mButton,
            mButtonWeb,
            mHeadlineForm,
            mInputIDPlaces,
            mInputImage,
            mInputsAffiliate,
            mInputsAlerts,
            mInputsApps,
            mInputsCurrency,
            mInputsCoordinates,
            mInputsFactsPlace,
            mInputsIDSNeighboringCountries,
            mInputsInformationAuthor,
            mInputsLanguagePhrases,
            mInputsLinksPlace,
            mInputsMoneyPrices,
            mInputsOrganization,
            mInputsPeopleNationality,
            mInputsPeopleReligion,
            mInputsPhoneNumbersEmergency,
            mInputsSeoTags,
            mInputsVisitorsEntry,
            mInputsZoom,
            mLabel,
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
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesStateSlug = newSlug
            },
            handleImageCover(newImage: number) {
                this.placesStateIDimageCover = newImage
            },
            handleImageHero(newImage: number) {
                this.placesStateIDimageHero = newImage
            },
            handleIDcontinent(newIDcontinent: number) {
                this.placesStateIDcontinent = newIDcontinent
            },
            handleSeoTags(newSeoTags: string) {
                this.placesStateSeoTags = JSON.stringify(newSeoTags)
            },
            handleCurrency(newCurrency: string) {
                this.placesStateCurrency = JSON.stringify(newCurrency)
            },
            handleCoordinates(newCoordinates: string) {
                this.placesStateCoordinates = JSON.stringify(newCoordinates)
            },
            handleZoom(newZoom: string) {
                this.placesStateZoom = JSON.stringify(newZoom)
            },
            handleAffiliate(newAffiliate: string) {
                this.placesStateAffiliate = JSON.stringify(newAffiliate)
            },
            handleInformationChatgpt(newInformationChatgpt: string) {
                this.placesStateInformationChatgpt = newInformationChatgpt
            },
            handleInformationAuthor(newInformationAuthor: string) {
                this.placesStateInformationAuthor = JSON.stringify(newInformationAuthor)
            },
            handleAlerts(newAlerts: string) {
                this.placesStateAlerts = JSON.stringify(newAlerts)
            },
            handleApps(newApps: string) {
                this.placesStateApps = JSON.stringify(newApps)
            },
            handleOrganization(newOrganization: string) {
                this.placesStateOrganization = JSON.stringify(newOrganization)
            },
            handlePhoneNumbersEmergency(newPhoneNumbersEmergency: string) {
                this.placesStatePhoneNumbersEmergency = JSON.stringify(newPhoneNumbersEmergency)
            },
            handleVisitorsEntry(newVisitorsEntry: string) {
                this.placesStateVisitorsEntry = JSON.stringify(newVisitorsEntry)
            },
            handleLanguagePhrases(newLanguagePhrases: string) {
                this.placesStateLanguagePhrases = JSON.stringify(newLanguagePhrases)
            },
            handleIDSneighboringCountries(newIDSneighboringCountries: string) {
                this.placesStateIDSneighboringCountries = JSON.stringify(newIDSneighboringCountries)
            },
            handleMoneyPrices(newMoneyPrices: string) {
                this.placesStateMoneyPrices = JSON.stringify(newMoneyPrices)
            },
            handlePeopleReligion(newPeopleReligion: string) {
                this.placesStatePeopleReligion = JSON.stringify(newPeopleReligion)
            },
            handlePeopleNationality(newPeopleNationality: string) {
                this.placesStatePeopleNationality = JSON.stringify(newPeopleNationality)
            },
            handleLinksPlace(newLinksPlace: string) {
                this.placesStateLinks = JSON.stringify(newLinksPlace)
            },
            handleFactsPlace(newFactsPlace: string) {
                this.placesStateFactsPlace = JSON.stringify(newFactsPlace)
            }
        },

        watch: {
            placesStateName: function (newValue, oldValue) {
                this.updateBreadcrumbs()
            }
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
            // route
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            // message
            const errorForm = ref('')
            const successForm = ref('')
            // variable
            const loadingData = ref(false)
            // date
            const itemID = ref<number | null>(null)
            const createdAt = ref('')
            const updatedAt = ref('')
            const placesStateIDcontinent = ref<number | null>(null)
            const placesStateIDcityMain = ref<number | null>(null)
            const placesStateIDimageCover = ref<number | null>(null)
            const placesStateIDimageHero = ref<number | null>(null)
            const placesStateIDSneighboringCountries = ref<never[] | string[]>([])
            const placesStateTypePlace = ref('state')
            const placesStateSlug = ref('')
            const placesStateName = ref('')
            const placesStateNameOriginal = ref('')
            const placesStateInformationChatgpt = ref('')
            const placesStateInformationAuthor = ref<never[] | string[]>([])
            const placesStateMpz = ref('')
            const placesStateTld = ref('')
            const placesStateArea = ref<number | null>(null)
            const placesStatePopulation = ref<number | null>(null)
            const placesStatePhonePrefix = ref('')
            const placesStatePhoneNumbersEmergency = ref<never[] | string[]>([])
            const placesStateCurrency = ref<never[] | string[]>([])
            const placesStateMoneyPrices = ref<never[] | string[]>([])
            const placesStatePeopleReligion = ref<never[] | string[]>([])
            const placesStatePeopleNationality = ref<never[] | string[]>([])
            const placesStateVisitorsEntry = ref<never[] | string[]>([])
            const placesStateSeoTags = ref<never[] | string[]>([])
            const placesStateCoordinates = ref<never[] | string[]>([])
            const placesStateZoom = ref<never[] | string[]>([])
            const placesStateAffiliate = ref<never[] | string[]>([])
            const placesStateAlerts = ref<never[] | string[]>([])
            const placesStateOrganization = ref<never[] | string[]>([])
            const placesStateApps = ref<never[] | string[]>([])
            const placesStateLinks = ref<never[] | string[]>([])
            const placesStateLanguagePhrases = ref<never[] | string[]>([])
            const placesStateFactsPlace = ref<never[] | string[]>([])

            //API - Places State
            ;(async () => {
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/places-state/${route.params.slug}`)
                const dataAPI: any = data._rawValue
                
                const PlacesState: PlacesState[] = JSON.parse(dataAPI)
                
                if (Array.isArray(PlacesState) && PlacesState.length > 0) {
                    itemID.value = PlacesState[0].id
                    createdAt.value = PlacesState[0].created_at
                    updatedAt.value = PlacesState[0].updated_at
                    placesStateIDcontinent.value = PlacesState[0].id_continent
                    placesStateIDcityMain.value = PlacesState[0].id_city_main
                    placesStateIDimageCover.value = PlacesState[0].id_image_cover
                    placesStateIDimageHero.value = PlacesState[0].id_image_hero
                    placesStateIDSneighboringCountries.value = PlacesState[0].ids_neighboring_countries ? JSON.stringify(PlacesState[0].ids_neighboring_countries) : JSON.stringify([])
                    placesStateTypePlace.value = PlacesState[0].type_place
                    placesStateSlug.value = PlacesState[0].slug
                    placesStateName.value = PlacesState[0].name
                    placesStateNameOriginal.value = PlacesState[0].name_original
                    placesStateInformationChatgpt.value = PlacesState[0].information_chatgpt
                    placesStateInformationAuthor.value = PlacesState[0].information_author ? JSON.stringify(PlacesState[0].information_author) : JSON.stringify([])
                    placesStateMpz.value = PlacesState[0].mpz
                    placesStateTld.value = PlacesState[0].tld
                    placesStateArea.value = PlacesState[0].area
                    placesStatePopulation.value = PlacesState[0].population
                    placesStatePhonePrefix.value = PlacesState[0].phone_prefix
                    placesStatePhoneNumbersEmergency.value = PlacesState[0].phone_numbers_emergency ? JSON.stringify(PlacesState[0].phone_numbers_emergency) : JSON.stringify([])
                    placesStateCurrency.value = PlacesState[0].currency ? JSON.stringify(PlacesState[0].currency) : JSON.stringify([])
                    placesStateMoneyPrices.value = PlacesState[0].money_prices ? JSON.stringify(PlacesState[0].money_prices) : JSON.stringify([])
                    placesStatePeopleReligion.value = PlacesState[0].people_religion ? JSON.stringify(PlacesState[0].people_religion) : JSON.stringify([])
                    placesStatePeopleNationality.value = PlacesState[0].people_nationality ? JSON.stringify(PlacesState[0].people_nationality) : JSON.stringify([])
                    placesStateVisitorsEntry.value = PlacesState[0].visitors_entry ? JSON.stringify(PlacesState[0].visitors_entry) : JSON.stringify([])
                    placesStateSeoTags.value = PlacesState[0].seo_tags ? JSON.stringify(PlacesState[0].seo_tags) : JSON.stringify([])
                    placesStateCoordinates.value = PlacesState[0].coordinates ? JSON.stringify(PlacesState[0].coordinates) : JSON.stringify([])
                    placesStateZoom.value = PlacesState[0].zoom ? JSON.stringify(PlacesState[0].zoom) : JSON.stringify([])
                    placesStateAffiliate.value = PlacesState[0].affiliate ? JSON.stringify(PlacesState[0].affiliate) : JSON.stringify([])
                    placesStateAlerts.value = PlacesState[0].alerts ? JSON.stringify(PlacesState[0].alerts) : JSON.stringify([])
                    placesStateOrganization.value = PlacesState[0].organization ? JSON.stringify(PlacesState[0].organization) : JSON.stringify([])
                    placesStateApps.value = PlacesState[0].apps ? JSON.stringify(PlacesState[0].apps) : JSON.stringify([])
                    placesStateLinks.value = PlacesState[0].links ? JSON.stringify(PlacesState[0].links) : JSON.stringify([])
                    placesStateLanguagePhrases.value = PlacesState[0].language_phrases ? JSON.stringify(PlacesState[0].language_phrases) : JSON.stringify([])
                    placesStateFactsPlace.value = PlacesState[0].facts_place ? JSON.stringify(PlacesState[0].facts_place) : JSON.stringify([])
                    loadingData.value = true
                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/places-state-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'id_continent': placesStateIDcontinent.value,
                            'id_city_main': placesStateIDcityMain.value,
                            'id_image_cover': placesStateIDimageCover.value,
                            'id_image_hero': placesStateIDimageHero.value,
                            'ids_neighboring_countries': placesStateIDSneighboringCountries.value,
                            'type_place': placesStateTypePlace.value,
                            'slug': placesStateSlug.value,
                            'name': placesStateName.value,
                            'name_original': placesStateNameOriginal.value,
                            'information_chatgpt': placesStateInformationChatgpt.value,
                            'information_author': placesStateInformationAuthor.value,
                            'mpz': placesStateMpz.value,
                            'tld': placesStateTld.value,
                            'area': placesStateArea.value,
                            'population': placesStatePopulation.value,
                            'phone_prefix': placesStatePhonePrefix.value,
                            'phone_numbers_emergency': placesStatePhoneNumbersEmergency.value,
                            'currency': placesStateCurrency.value,
                            'money_prices': placesStateMoneyPrices.value,
                            'people_religion': placesStatePeopleReligion.value,
                            'people_nationality': placesStatePeopleNationality.value,
                            'visitors_entry': placesStateVisitorsEntry.value,
                            'seo_tags': placesStateSeoTags.value,
                            'coordinates': placesStateCoordinates.value,
                            'zoom': placesStateZoom.value,
                            'affiliate': placesStateAffiliate.value,
                            'alerts': placesStateAlerts.value,
                            'organization': placesStateOrganization.value,
                            'apps': placesStateApps.value,
                            'links': placesStateLinks.value,
                            'language_phrases': placesStateLanguagePhrases.value,
                            'facts_place': placesStateFactsPlace.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla upravena.')
                        successForm.value = "Data byla upravena."
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla upravena.')
                        errorForm.value = "Nastala chyba a data nebyla upravena."
                    }
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return {
                successForm,
                errorForm,
                loadingData,
                itemID,
                createdAt,
                updatedAt,
                placesStateSeoTags,
                placesStateIDcontinent,
                placesStateIDcityMain,
                placesStateIDimageCover,
                placesStateIDimageHero,
                placesStateIDSneighboringCountries,
                placesStateTypePlace,
                placesStateSlug,
                placesStateName,
                placesStateNameOriginal,
                placesStateInformationChatgpt,
                placesStateInformationAuthor,
                placesStateMpz,
                placesStateTld,
                placesStateArea,
                placesStatePopulation,
                placesStatePhonePrefix,
                placesStatePhoneNumbersEmergency,
                placesStateCurrency,
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
                placesStateLanguagePhrases,
                placesStateFactsPlace,
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