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
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="state" v-model="placesCityIDstate" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': placesCityIDimageCoverLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && placesCityIDimageCover" @load="handleImageCoverLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && placesCityIDimageCoverLoad !== placesCityIDimageCoverChange && (placesCityIDimageCover && placesCityIDimageCover !== null && placesCityIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && (!placesCityIDimageCover || placesCityIDimageCover === null || placesCityIDimageCover === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && placesCityIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="placesCityIDimageCoverLoad === placesCityIDimageCoverChange && !imageCover[0] && placesCityIDimageCover && placesCityIDimageCover !== null && placesCityIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && (!placesCityIDimageCover || placesCityIDimageCover === null || placesCityIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="placesCityIDimageCover" @input="handlePlacesCityIDimageCoverChange" />
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': placesCityIDimageHeroLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && placesCityIDimageHero" @load="handleImageHeroLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && placesCityIDimageHeroLoad !== placesCityIDimageHeroChange && (placesCityIDimageHero && placesCityIDimageHero !== null && placesCityIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && (!placesCityIDimageHero || placesCityIDimageHero === null || placesCityIDimageHero === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && placesCityIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="placesCityIDimageHeroLoad === placesCityIDimageHeroChange && !imageHero[0] && placesCityIDimageHero && placesCityIDimageHero !== null && placesCityIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && (!placesCityIDimageHero || placesCityIDimageHero === null || placesCityIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="placesCityIDimageHero" @input="handlePlacesCityIDimageHeroChange" />
                                            </div>
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Významnost <span class="m-label__name-column">(importance)</span></span>
                                            </label>
                                            <select class="m-select" name="platform" v-model="placesCityImportance">
                                                <option :value=null>- Jaká je významnost? -</option>
                                                <option value="biggest">TOP10 NEJVĚTŠÍ</option>
                                            </select>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesCityTypePlace" required />
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
                                                <span class="m-label__name">Informace od autora <span class="m-label__name-column">(information_author)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesCityInformationAuthorArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Text:</label>
                                                                <textarea class="a-textarea" type="text" v-model="item.text"></textarea>
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date create:</label>
                                                                <input class="a-input" type="text" v-model="item.date_create" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author create:</label>
                                                                <input class="a-input" type="text" v-model="item.author_create" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author update:</label>
                                                                <input class="a-input" type="text" v-model="item.author_update" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addInformationAuthorInput">Přidat text</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Populace <span class="m-label__name-column">(population)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="population" v-model="placesCityPopulation" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Rozloha <span class="m-label__name-column">(area)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesCityArea" />
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Nadmořská výška <span class="m-label__name-column">(altitude)</span></span>
                                            </label>
                                            <input class="a-input" type="number" name="altitude" v-model="placesCityAltitude" />
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesCityCoordinatesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Latitude:</label>
                                                                <input class="a-input" type="number" step=".0000001" v-model="item.latitude" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Longitude:</label>
                                                                <input class="a-input" type="number" step=".0000001" v-model="item.longitude" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnice</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zoom map <span class="m-label__name-column">(zoom)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesCityZoomArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Google:</label>
                                                                <input class="a-input" type="number" min="0" v-model="item.google" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Booking:</label>
                                                                <input class="a-input" type="number" min="0" v-model="item.booking" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addZoomInput">Přidat zoom</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Affiliate <span class="m-label__name-column">(affiliate)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesCityAffiliateArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeAffiliateInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Value:</label>
                                                                <input class="a-input" type="text" v-model="item.value" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affileate</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Upozornění <span class="m-label__name-column">(alerts)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesCityAlertsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeAlertInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Text:</label>
                                                                <input class="a-input" type="text" v-model="item.text" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Type:</label>
                                                                <input class="a-input" type="text" v-model="item.type" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author:</label>
                                                                <input class="a-input" type="text" v-model="item.author" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date create:</label>
                                                                <input class="a-input" type="text" v-model="item.date_create" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date start:</label>
                                                                <input class="a-input" type="text" v-model="item.date_start" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date end:</label>
                                                                <input class="a-input" type="text" v-model="item.date_end" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addAlertInput">Přidat upozornění</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Parkování <span class="m-label__name-column">(parking)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesCityParkingArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeParkingInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Description:</label>
                                                                <input class="a-input" type="text" v-model="item.description" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date:</label>
                                                                <input class="a-input" type="text" v-model="item.date" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author:</label>
                                                                <input class="a-input" type="text" v-model="item.author" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author Update:</label>
                                                                <input class="a-input" type="text" v-model="item.author_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Pay time:</label>
                                                                <input class="a-input" type="text" v-model="item.pay_time" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Price:</label>
                                                                <input class="a-input" type="text" v-model="item.price" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">URL:</label>
                                                                <input class="a-input" type="text" v-model="item.url" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addParkingInput">Přidat parkování</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

    interface PlacesCity {
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
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        alerts: Alerts[]
        parking: Parking[]
    }

    interface ImageCover {
        id: number
        source: string
        name: string
        type: string
    }

    interface ImageHero {
        id: number
        source: string
        name: string
        type: string
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
                ],
                placesCityInformationAuthorArray: [],
                placesCityCoordinatesArray: [],
                placesCityZoomArray: [],
                placesCityAffiliateArray: [],
                placesCityAlertsArray: [],
                placesCityParkingArray: []
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
        },

        watch: {
            placesCityName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesCityName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
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
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            const errorForm = ref('')
            const successForm = ref('')
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
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const placesCityIDimageCoverLoad = ref(null)
            const placesCityIDimageCoverLoading = ref(false)
            const placesCityIDimageCoverChange = ref(null)
            const placesCityIDimageHeroLoad = ref(null)
            const placesCityIDimageHeroLoading = ref(false)
            const placesCityIDimageHeroChange = ref(null)

            //API - Places City
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-city/${route.params.slug}`)
                
                const PlacesCity: PlacesCity[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesCity) && PlacesCity.length > 0) {
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
                    placesCityCoordinates.value = PlacesCity[0].coordinates ? JSON.stringify(PlacesCity[0].coordinates) : JSON.stringify([]);
                    placesCityZoom.value = PlacesCity[0].zoom ? JSON.stringify(PlacesCity[0].zoom) : JSON.stringify([]);
                    placesCityAffiliate.value = PlacesCity[0].affiliate ? JSON.stringify(PlacesCity[0].affiliate) : JSON.stringify([]);
                    placesCityAlerts.value = PlacesCity[0].alerts ? JSON.stringify(PlacesCity[0].alerts) : JSON.stringify([]);
                    placesCityParking.value = PlacesCity[0].parking ? JSON.stringify(PlacesCity[0].parking) : JSON.stringify([]);

                    // images load ids
                    placesCityIDimageCoverLoad.value = placesCityIDimageCover.value
                    placesCityIDimageCoverChange.value = placesCityIDimageCover.value
                    placesCityIDimageCoverLoading.value = true
                    placesCityIDimageHeroLoad.value = placesCityIDimageHero.value
                    placesCityIDimageHeroChange.value = placesCityIDimageHero.value
                    placesCityIDimageHeroLoading.value = true
                    
                    // Načítání imageCover
                    if (placesCityIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${placesCityIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (placesCityIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${placesCityIDimageHero.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageHero.value = data);
                    } else {
                        imageHero.value = [];
                    }
                } else {

                }
            })()

            const loadImageCover = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${placesCityIDimageCover.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageCover.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageHero = async () => {
                try {
                    // Načítání imageHero
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${placesCityIDimageHero.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageHero.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

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
                imageCover,
                imageHero,
                placesCityIDimageCoverLoad,
                placesCityIDimageCoverChange,
                placesCityIDimageCoverLoading,
                placesCityIDimageHeroLoad,
                placesCityIDimageHeroChange,
                placesCityIDimageHeroLoading,
                editForm,
                loadImageCover,
                loadImageHero
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