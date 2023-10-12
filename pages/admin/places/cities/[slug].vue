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

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-item__form" @submit.prevent="editForm" v-if="loadingData">
                                    <!-- BLOCK - Stálé hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Stálé hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
                                            <!-- Form - type_place -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ místa" nameDB="type_place" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesCityTypePlace" required />
                                            </div>
                                            <!-- Form - type_place END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Stálé hodnoty END -->

                                    <!-- BLOCK - Obrázky -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Obrázky" styleGap=" mt-2" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id_image_cover -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku listu" nameDB="id_image_cover" perex="" :required=false />
                                                <mInputImage :value="placesCityIDimageCover" @image="handleImageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <mInputImage :value="placesCityIDimageHero" @image="handleImageHero" />
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
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCitySeoTagsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Tag:</label>
                                                                    <input class="a-input" type="text" v-model="item.tag" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=true />
                                                <input class="a-input" type="number" min="0" name="state" v-model="placesCityIDstate" required />
                                            </div>
                                            <!-- Form - id_state END -->
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
                                                <aInputSlug :value="placesCitySlug" :valueCreate="placesCityName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - importance -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Významnost" nameDB="importance" perex="" :required=false />
                                                <select class="m-select" name="platform" v-model="placesCityImportance">
                                                    <option :value=null>- Jaká je významnost? -</option>
                                                    <option value="biggest">TOP10 NEJVĚTŠÍ</option>
                                                </select>
                                            </div>
                                            <!-- Form - importance END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesCityName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesCityInformationChatgpt"></textarea>
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityInformationAuthorArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Text:</label>
                                                                    <textarea class="a-textarea" type="text" v-model="item.text"></textarea>
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date create:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_create" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author create:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_create" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author update:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_update" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addInformationAuthorInput">Přidat text</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - population -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Populace" nameDB="population" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="population" v-model="placesCityPopulation" />
                                            </div>
                                            <!-- Form - population END -->
                                            <!-- Form - area -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Rozloha" nameDB="area" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesCityArea" />
                                            </div>
                                            <!-- Form - area END -->
                                            <!-- Form - altitude -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Nadmořská výška" nameDB="altitude" perex="" :required=false />
                                                <input class="a-input" type="number" name="altitude" v-model="placesCityAltitude" />
                                            </div>
                                            <!-- Form - altitude END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityCoordinatesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Latitude:</label>
                                                                    <input class="a-input" type="number" step=".0000001" v-model="item.latitude" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Longitude:</label>
                                                                    <input class="a-input" type="number" step=".0000001" v-model="item.longitude" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnice</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityZoomArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Google:</label>
                                                                    <input class="a-input" type="number" min="0" v-model="item.google" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Booking:</label>
                                                                    <input class="a-input" type="number" min="0" v-model="item.booking" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addZoomInput">Přidat zoom</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - zoom(JSON) END -->
                                            <!-- Form - affiliate(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Affiliate" nameDB="affiliate" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityAffiliateArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeAffiliateInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Value:</label>
                                                                    <input class="a-input" type="text" v-model="item.value" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affileate</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - alerts(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Upozornění" nameDB="alerts" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityAlertsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeAlertInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Text:</label>
                                                                    <input class="a-input" type="text" v-model="item.text" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Type:</label>
                                                                    <input class="a-input" type="text" v-model="item.type" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author:</label>
                                                                    <input class="a-input" type="text" v-model="item.author" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date create:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_create" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date start:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_start" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date end:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_end" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addAlertInput">Přidat upozornění</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - alerts(JSON) END -->
                                            <!-- Form - parking(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Parkování" nameDB="parking" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesCityParkingArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeParkingInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Description:</label>
                                                                    <input class="a-input" type="text" v-model="item.description" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date:</label>
                                                                    <input class="a-input" type="text" v-model="item.date" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author:</label>
                                                                    <input class="a-input" type="text" v-model="item.author" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author Update:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Pay time:</label>
                                                                    <input class="a-input" type="text" v-model="item.pay_time" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Price:</label>
                                                                    <input class="a-input" type="text" v-model="item.price" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">URL:</label>
                                                                    <input class="a-input" type="text" v-model="item.url" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addParkingInput">Přidat parkování</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - parking(JSON) END -->         
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
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface InformationAuthor {
        text: string
        date_create: string
        date_update: string
        author_create: string
        author_update: string
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

    interface Parking {
        url: string
        date: string
        name: string
        pricE: string
        author: string
        pay_time: string
        date_update: string
        description: string
        author_update: string
    }

    interface seoTags {
        tag: string
    }

    interface PlacesCity {
        id: number
        id_state: number
        id_image_cover: number
        id_image_hero: number
        importance: string
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        population: string
        area: string
        altitude: string
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        alerts: Alerts[]
        parking: Parking[]
    }

    export default defineComponent({
        name: 'AdminPlacesCitiesSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
            mInputImage,
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
                ],
                placesCityInformationAuthorArray: [],
                placesCityCoordinatesArray: [],
                placesCityZoomArray: [],
                placesCityAffiliateArray: [],
                placesCityAlertsArray: [],
                placesCityParkingArray: [],
                placesCitySeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesCityName = this.placesCityName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace města - ${placesCityName}`
                }
            },
            // change image id
            handlePlacesCityIDimageCoverChange() {
                this.placesCityIDimageCoverChange = this.placesCityIDimageCover
                this.placesCityIDimageCoverLoading = true
                this.loadImageCover()
            },
            handlePlacesCityIDimageHeroChange() {
                this.placesCityIDimageHeroChange = this.placesCityIDimageHero
                this.placesCityIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.placesCityIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.placesCityIDimageHeroLoading = false;
            },
            // information author
            addInformationAuthorInput() {
                this.placesCityInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                });
            },
            removeInformationAuthorInput(index: number) {
                this.placesCityInformationAuthorArray.splice(index, 1);
            },
            // seo tags
            addSeoTagsInput() {
                this.placesCitySeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.placesCitySeoTagsArray.splice(index, 1)
            },
            // coordinates
            addCoordinateInput() {
                this.placesCityCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesCityCoordinatesArray.splice(index, 1);
            },
            // Zoom
            addZoomInput() {
                this.placesCityZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesCityZoomArray.splice(index, 1);
            },
            // Affiliate
            addAffiliateInput() {
                this.placesCityAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.placesCityAffiliateArray.splice(index, 1);
            },
            // Alerts
            addAlertInput() {
                this.placesCityAlertsArray.push({
                    name: '',
                    text: '',
                    type: '',
                    author: '',
                    date_create: '',
                    date_update: '',
                    date_start: '',
                    date_end: ''
                });
            },
            removeAlertInput(index: number) {
                this.placesCityAlertsArray.splice(index, 1);
            },
            // Parking
            addParkingInput() {
                this.placesCityParkingArray.push({
                    url: '',
                    date: '',
                    name: '',
                    pricE: '',
                    author: '',
                    pay_time: '',
                    date_update: '',
                    description: '',
                    author_update: ''
                });
            },
            removeParkingInput(index: number) {
                this.placesCityParkingArray.splice(index, 1);
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesCitySlug = newSlug
            },
            handleImageCover(newImage: string) {
                this.placesCityIDimageCover = newImage
            },
            handleImageHero(newImage: string) {
                this.placesCityIDimageHero = newImage
            }
        },

        watch: {
            placesCityName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesCitySeoTags: function (newValue, oldValue) {
                try {
                    this.placesCitySeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesCitySeoTagsArray = []
                }
            },
            placesCitySeoTagsArray: function (newValue, oldValue) {
                this.placesCitySeoTags = JSON.stringify(newValue)
            },
            placesCityInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesCityInformationAuthorArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesCityInformationAuthorArray = [];
                }
            },
            placesCityCoordinates: function (newValue, oldValue) {
                try {
                    this.placesCityCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesCityCoordinatesArray = [];
                }
            },
            placesCityCoordinatesArray: function (newValue, oldValue) {
                this.placesCityCoordinates = JSON.stringify(newValue);
            },
            placesCityZoom: function (newValue, oldValue) {
                try {
                    this.placesCityZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesCityZoomArray = [];
                }
            },
            placesCityZoomArray: function (newValue, oldValue) {
                this.placesCityZoom = JSON.stringify(newValue);
            },
            placesCityAffiliate: function (newValue, oldValue) {
                try {
                    this.placesCityAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesCityAffiliateArray = [];
                }
            },
            placesCityAffiliateArray: function (newValue, oldValue) {
                this.placesCityAffiliate = JSON.stringify(newValue);
            },
            placesCityAlerts: function (newValue, oldValue) {
                try {
                    this.placesCityAlertsArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesCityAlertsArray = [];
                }
            },
            placesCityAlertsArray: function (newValue, oldValue) {
                this.placesCityAlerts = JSON.stringify(newValue);
            },
            placesCityParking: function (newValue, oldValue) {
                try {
                    this.placesCityParkingArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesCityParkingArray = [];
                }
            },
            placesCityParkingArray: function (newValue, oldValue) {
                this.placesCityParking = JSON.stringify(newValue);
            }
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
            // route
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            // message
            const errorForm = ref('')
            const successForm = ref('')
            // variable
            const loadingData = ref(false)
            // date
            const itemID = ref(null)
            const placesCityIDstate = ref(null)
            const placesCityIDimageCover = ref(null)
            const placesCityIDimageHero = ref(null)
            const placesCityImportance = ref('')
            const placesCityTypePlace = ref('city')
            const placesCitySlug = ref('')
            const placesCityName = ref('')
            const placesCityInformationChatgpt = ref('')
            const placesCityInformationAuthor = ref([])
            const placesCityInformationAuthorArray = ref([])
            const placesCityPopulation = ref(null)
            const placesCityArea = ref(null)
            const placesCityAltitude = ref(null)
            const placesCitySeoTags = ref([])
            const placesCitySeoTagsArray = ref([])
            const placesCityCoordinates = ref([])
            const placesCityCoordinatesArray = ref([])
            const placesCityZoom = ref([])
            const placesCityZoomArray = ref([])
            const placesCityAffiliate = ref([])
            const placesCityAffiliateArray = ref([])
            const placesCityAlerts = ref([])
            const placesCityAlertsArray = ref([])
            const placesCityParking = ref([])
            const placesCityParkingArray = ref([])

            //API - Places City
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-city/${route.params.slug}`)
                
                const PlacesCity: PlacesCity[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesCity) && PlacesCity.length > 0) {
                    itemID.value = PlacesCity[0].id;
                    placesCityIDstate.value = PlacesCity[0].id_state;
                    placesCityIDimageCover.value = PlacesCity[0].id_image_cover;
                    placesCityIDimageHero.value = PlacesCity[0].id_image_hero;
                    placesCityImportance.value = PlacesCity[0].importance;
                    placesCityTypePlace.value = PlacesCity[0].type_place;
                    placesCitySlug.value = PlacesCity[0].slug;
                    placesCityName.value = PlacesCity[0].name;
                    placesCityInformationChatgpt.value = PlacesCity[0].information_chatgpt;
                    placesCityInformationAuthor.value = PlacesCity[0].information_author ? JSON.stringify(PlacesCity[0].information_author) : JSON.stringify([]);
                    placesCityPopulation.value = PlacesCity[0].population;
                    placesCityArea.value = PlacesCity[0].area;
                    placesCityAltitude.value = PlacesCity[0].altitude;
                    placesCitySeoTags.value = PlacesCity[0].seo_tags ? JSON.stringify(PlacesCity[0].seo_tags) : JSON.stringify([]);
                    placesCityCoordinates.value = PlacesCity[0].coordinates ? JSON.stringify(PlacesCity[0].coordinates) : JSON.stringify([]);
                    placesCityZoom.value = PlacesCity[0].zoom ? JSON.stringify(PlacesCity[0].zoom) : JSON.stringify([]);
                    placesCityAffiliate.value = PlacesCity[0].affiliate ? JSON.stringify(PlacesCity[0].affiliate) : JSON.stringify([]);
                    placesCityAlerts.value = PlacesCity[0].alerts ? JSON.stringify(PlacesCity[0].alerts) : JSON.stringify([]);
                    placesCityParking.value = PlacesCity[0].parking ? JSON.stringify(PlacesCity[0].parking) : JSON.stringify([]);
                    loadingData.value = true
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
                            'importance': placesCityImportance.value,
                            'type_place': placesCityTypePlace.value,
                            'slug': placesCitySlug.value,
                            'name': placesCityName.value,
                            'information_chatgpt': placesCityInformationChatgpt.value,
                            'information_author': JSON.stringify(placesCityInformationAuthorArray._value),
                            'population': placesCityPopulation.value,
                            'area': placesCityArea.value,
                            'altitude': placesCityAltitude.value,
                            'seo_tags': JSON.stringify(placesCitySeoTagsArray._value),
                            'coordinates': JSON.stringify(placesCityCoordinatesArray._value),
                            'zoom': JSON.stringify(placesCityZoomArray._value),
                            'affiliate': JSON.stringify(placesCityAffiliateArray._value),
                            'alerts': JSON.stringify(placesCityAlertsArray._value),
                            'parking': JSON.stringify(placesCityParkingArray._value)
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
                loadingData,
                itemID,
                placesCitySeoTags,
                placesCitySeoTagsArray,
                placesCityIDstate,
                placesCityIDimageCover,
                placesCityIDimageHero,
                placesCityImportance,
                placesCityTypePlace,
                placesCitySlug,
                placesCityName,
                placesCityInformationChatgpt,
                placesCityInformationAuthor,
                placesCityInformationAuthorArray,
                placesCityPopulation,
                placesCityArea,
                placesCityAltitude,
                placesCityCoordinates,
                placesCityCoordinatesArray,
                placesCityZoom,
                placesCityZoomArray,
                placesCityAffiliate,
                placesCityAffiliateArray,
                placesCityAlerts,
                placesCityAlertsArray,
                placesCityParking,
                placesCityParkingArray,
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