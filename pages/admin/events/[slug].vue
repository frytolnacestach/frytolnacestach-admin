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

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <form class="o-form-item__form" @submit.prevent="editForm">
                                    <!-- BLOCK - Stálé hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Stálé hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID <span class="m-label__name-column">(id)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
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
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                                </label>
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': eventIDimageCoverLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && eventIDimageCover" @load="handleImageCoverLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && eventIDimageCoverLoad !== eventIDimageCoverChange && (eventIDimageCover && eventIDimageCover !== null && eventIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && (!eventIDimageCover || eventIDimageCover === null || eventIDimageCover === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && eventIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="eventIDimageCoverLoad === eventIDimageCoverChange && !imageCover[0] && eventIDimageCover && eventIDimageCover !== null && eventIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && (!eventIDimageCover || eventIDimageCover === null || eventIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="eventIDimageCover" @input="handleEventIDimageCoverChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                                </label>
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': eventIDimageHeroLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && eventIDimageHero" @load="handleImageHeroLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && eventIDimageHeroLoad !== eventIDimageHeroChange && (eventIDimageHero && eventIDimageHero !== null && eventIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && (!eventIDimageHero || eventIDimageHero === null || eventIDimageHero === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && eventIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="eventIDimageHeroLoad === eventIDimageHeroChange && !imageHero[0] && eventIDimageHero && eventIDimageHero !== null && eventIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && (!eventIDimageHero || eventIDimageHero === null || eventIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="eventIDimageHero" @input="handleEventIDimageHeroChange" />
                                                </div>
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
                                                <label class="m-label">
                                                    <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventSeoTagsArray" :key="index">
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

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - slug -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                    <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                                </label>
                                                <input class="a-input" type="text" name="slug" v-model="eventSlug" required />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="state" v-model="eventIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Regionu <span class="m-label__name-column">(id_region)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="region" v-model="eventIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Města <span class="m-label__name-column">(id_city)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="city" v-model="eventIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Místa <span class="m-label__name-column">(id_spot)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="spot" v-model="eventIDspot" />
                                            </div>
                                            <!-- Form - id_spot END -->
                                            <!-- Form - date_start -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Datum začátku události <span class="m-label__name-column">(date_start)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="dateStart" v-model="eventDateStart" />
                                            </div>
                                            <!-- Form - date_start END -->
                                            <!-- Form - date_end -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Datum konce události <span class="m-label__name-column">(date_end)</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="dateEnd" v-model="eventDateEnd" />
                                            </div>
                                            <!-- Form - date_end END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="name" v-model="eventName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - description -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                                </label>
                                                <textarea class="a-textarea" type="text" name="description" v-model="eventDescription"></textarea>
                                            </div>
                                            <!-- Form - description END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Souřadnice místa konání <span class="m-label__name-column">(coordinates)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventCoordinatesArray" :key="index">
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
                                                                <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnici</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Zoom map <span class="m-label__name-column">(zoom)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventZoomArray" :key="index">
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
                                                <label class="m-label">
                                                    <span class="m-label__name">Affiliate <span class="m-label__name-column">(affiliate)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventAffiliateArray" :key="index">
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
                                                                <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affiliate</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - affiliate(JSON) END -->
                                            <!-- Form - prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Ceny <span class="m-label__name-column">(prices)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventPricesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removePriceInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Perex:</label>
                                                                    <input class="a-input" type="text" v-model="item.perex" />
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
                                                                <button class="m-button-add__input" type="button" @click="addPriceInput">Přidat cenu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - prices(JSON) END -->
                                            <!-- Form - links(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Odkazy <span class="m-label__name-column">(links)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in eventLinksArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeLinkInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Link:</label>
                                                                    <input class="a-input" type="text" v-model="item.link" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addLinkInput">Přidat odkaz</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - links(JSON) END -->                   
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
                                            </div>
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
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

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

    interface Prices {
        name: string
        perex: string
        value: string
    }

    interface Links {
        name: string
        link: string
    }

    interface seoTags {
        tag: string
    }

    interface Event {
        id: number
        id_state: number
        id_region: number
        id_city: number
        id_spot: number
        id_image_cover: number
        id_image_hero: number
        date_start: string
        date_end: string
        slug: string
        name: string
        description: string
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        prices: Prices[]
        links: Links[]
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
            mHeadlineForm,
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
                ],
                eventCoordinatesArray: [],
                eventZoomArray: [],
                eventAffiliateArray: [],
                eventPricesArray: [],
                eventLinksArray: [],
                eventSeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const eventName = this.eventName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace UDÁLOSTI - ${eventName}`
                }
            },
            // change image id
            handleEventIDimageCoverChange() {
                this.eventIDimageCoverChange = this.eventIDimageCover
                this.eventIDimageCoverLoading = true
                this.loadImageCover()
            },
            handleEventIDimageHeroChange() {
                this.eventIDimageHeroChange = this.eventIDimageHero
                this.eventIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.eventIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.eventIDimageHeroLoading = false;
            },
            // seo tags
            addSeoTagsInput() {
                this.eventSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.eventSeoTagsArray.splice(index, 1)
            },
            // coordinates
            addCoordinateInput() {
                this.eventCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.eventCoordinatesArray.splice(index, 1);
            },
            // zoom
            addZoomInput() {
                this.eventZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.eventZoomArray.splice(index, 1);
            },
            // affiliate
            addAffiliateInput() {
                this.eventAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.eventAffiliateArray.splice(index, 1);
            },
            // prices
            addPriceInput() {
                this.eventPricesArray.push({
                    name: '',
                    perex: '',
                    value: ''
                });
            },
            removePriceInput(index: number) {
                this.eventPricesArray.splice(index, 1);
            },
            // links
            addLinkInput() {
                this.eventLinksArray.push({
                    name: '',
                    link: ''
                });
            },
            removeLinkInput(index: number) {
                this.eventLinksArray.splice(index, 1);
            }
        },

        watch: {
            eventName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            eventSeoTags: function (newValue, oldValue) {
                try {
                    this.eventSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.eventSeoTagsArray = []
                }
            },
            eventSeoTagsArray: function (newValue, oldValue) {
                this.eventSeoTags = JSON.stringify(newValue)
            },
            eventCoordinates: function (newValue, oldValue) {
                try {
                    this.eventCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventCoordinatesArray = [];
                }
            },
            eventCoordinatesArray: function (newValue, oldValue) {
                this.eventCoordinates = JSON.stringify(newValue);
            },
            eventZoom: function (newValue, oldValue) {
                try {
                    this.eventZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventZoomArray = [];
                }
            },
            eventZoomArray: function (newValue, oldValue) {
                this.eventZoom = JSON.stringify(newValue);
            },
            eventAffiliate: function (newValue, oldValue) {
                try {
                    this.eventAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventAffiliateArray = [];
                }
            },
            eventAffiliateArray: function (newValue, oldValue) {
                this.eventAffiliate = JSON.stringify(newValue);
            },
            eventPrices: function (newValue, oldValue) {
                try {
                    this.eventPricesArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventPricesArray = [];
                }
            },
            eventPricesArray: function (newValue, oldValue) {
                this.eventPrices = JSON.stringify(newValue);
            },
            eventLinks: function (newValue, oldValue) {
                try {
                    this.eventLinksArray = JSON.parse(newValue);
                } catch (error) {
                    this.eventLinksArray = [];
                }
            },
            eventLinksArray: function (newValue, oldValue) {
                this.eventLinks = JSON.stringify(newValue);
            }
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
            const itemID = ref(null)
            const eventIDstate = ref(null)
            const eventIDregion = ref(null)
            const eventIDcity = ref(null)
            const eventIDspot = ref(null)
            const eventIDimageCover = ref(null)
            const eventIDimageHero = ref(null)
            const eventDateStart = ref('')
            const eventDateEnd = ref('')
            const eventSlug = ref('')
            const eventName = ref('')
            const eventDescription = ref('')
            const eventSeoTags = ref([])
            const eventSeoTagsArray = ref([])
            const eventCoordinates = ref([])
            const eventCoordinatesArray = ref([])
            const eventZoom = ref([])
            const eventZoomArray = ref([])
            const eventAffiliate = ref([])
            const eventAffiliateArray = ref([])
            const eventPrices = ref([])
            const eventPricesArray = ref([])
            const eventLinks = ref([])
            const eventLinksArray = ref([])
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const eventIDimageCoverLoad = ref(null)
            const eventIDimageCoverLoading = ref(false)
            const eventIDimageCoverChange = ref(null)
            const eventIDimageHeroLoad = ref(null)
            const eventIDimageHeroLoading = ref(false)
            const eventIDimageHeroChange = ref(null)

            //API - Event
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/event/${route.params.slug}`)
                
                const Event: Event[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Event) && Event.length > 0) {
                    itemID.value = Event[0].id;
                    eventIDstate.value = Event[0].id_state;
                    eventIDregion.value = Event[0].id_region;
                    eventIDcity.value = Event[0].id_city;
                    eventIDspot.value = Event[0].id_spot;
                    eventIDimageCover.value = Event[0].id_image_cover;
                    eventIDimageHero.value = Event[0].id_image_hero;
                    eventDateStart.value = Event[0].date_start;
                    eventDateEnd.value = Event[0].date_end;
                    eventSlug.value = Event[0].slug;
                    eventName.value = Event[0].name;
                    eventDescription.value = Event[0].description;
                    eventSeoTags.value = Event[0].seo_tags ? JSON.stringify(Event[0].seo_tags) : JSON.stringify([]);
                    eventCoordinates.value = Event[0].coordinates ? JSON.stringify(Event[0].coordinates) : JSON.stringify([]);
                    eventZoom.value = Event[0].zoom ? JSON.stringify(Event[0].zoom) : JSON.stringify([]);
                    eventAffiliate.value = Event[0].affiliate ? JSON.stringify(Event[0].affiliate) : JSON.stringify([]);
                    eventPrices.value = Event[0].prices ? JSON.stringify(Event[0].prices) : JSON.stringify([]);
                    eventLinks.value = Event[0].links ? JSON.stringify(Event[0].links) : JSON.stringify([]);

                    // images load ids
                    eventIDimageCoverLoad.value = eventIDimageCover.value
                    eventIDimageCoverChange.value = eventIDimageCover.value
                    eventIDimageCoverLoading.value = true
                    eventIDimageHeroLoad.value = eventIDimageHero.value
                    eventIDimageHeroChange.value = eventIDimageHero.value
                    eventIDimageHeroLoading.value = true
                    
                    // Načítání imageCover
                    if (eventIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${eventIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (eventIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${eventIDimageHero.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${eventIDimageCover.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${eventIDimageHero.value}`, {
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
                            'id_region': eventIDregion.value,
                            'id_city': eventIDcity.value,
                            'id_spot': eventIDspot.value,
                            'id_image_cover': eventIDimageCover.value,
                            'id_image_hero': eventIDimageHero.value,
                            'date_start': eventDateStart.value,
                            'date_end': eventDateEnd.value,
                            'slug': eventSlug.value,
                            'name': eventName.value,
                            'description': eventDescription.value,
                            'seo_tags': JSON.stringify(eventSeoTagsArray._value),
                            'coordinates': JSON.stringify(eventCoordinatesArray._value),
                            'zoom': JSON.stringify(eventZoomArray._value),
                            'affiliate': JSON.stringify(eventAffiliateArray._value),
                            'prices': JSON.stringify(eventPricesArray._value),
                            'links': JSON.stringify(eventLinksArray._value)
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
                itemID,
                eventSeoTags,
                eventSeoTagsArray,
                eventIDstate,
                eventIDregion,
                eventIDcity,
                eventIDspot,
                eventIDimageCover,
                eventIDimageHero,
                eventDateStart,
                eventDateEnd,
                eventSlug,
                eventName,
                eventDescription,
                eventCoordinates,
                eventCoordinatesArray,
                eventZoom,
                eventZoomArray,
                eventAffiliate,
                eventAffiliateArray,
                eventPrices,
                eventPricesArray,
                eventLinks,
                eventLinksArray,
                imageCover,
                imageHero,
                eventIDimageCoverLoad,
                eventIDimageCoverChange,
                eventIDimageCoverLoading,
                eventIDimageHeroLoad,
                eventIDimageHeroChange,
                eventIDimageHeroLoading,
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