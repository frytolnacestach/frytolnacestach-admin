<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového místa" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">

                    <div class="o-form-item">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                 <!-- FORM -->
                                 <form class="o-form-item__form" @submit.prevent="createForm">
                                    <!-- BLOCK - Stálé hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Stálé hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - type_place -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesSpotTypePlace" required />
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
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="imageCover" v-model="placesSpotIDimageCover" />
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="imageHero" v-model="placesSpotIDimageHero" />
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
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotsSeoTagsArray" :key="index">
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
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="state" v-model="placesSpotIDstate" required />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">ID Města <span class="m-label__name-column">(id_city)</span></span>
                                                </label>
                                                <input class="a-input" type="number" min="0" name="city" v-model="placesSpotIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
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
                                                <label class="m-label">
                                                    <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                    <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                                </label>
                                                <input class="a-input" type="text" name="slug" v-model="placesSpotSlug" required />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="name" v-model="placesSpotName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Informace od Chat GPT <span class="m-label__name-column">(information_chatgpt)</span></span>
                                                </label>
                                                <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesSpotInformationChatgpt"></textarea>
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Informace od autora <span class="m-label__name-column">(information_author)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotInformationAuthorArray" :key="index">
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
                                            <!-- Form - information_duration(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Informace o časové náročnosti <span class="m-label__name-column">(information_duration)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <!-- Headline -->
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotInformationDurationArray" :key="index" v-if="placesSpotInformationDurationArray[0]?.headline">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeInformationDurationHeadlineInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <label class="m-label">Title:</label>
                                                                <input class="a-input" type="text" v-model="item.headline.title" />

                                                                <label class="m-label">Perex:</label>
                                                                <input class="a-input" type="text" v-model="item.headline.perex" />
                                                            </div>
                                                        </div>
                                                        <div class="o-form-item__buttons mt-1" v-if="!placesSpotInformationDurationArray[0]?.headline">
                                                            <div class="o-form-item__button">
                                                                <div class="m-button-add">
                                                                    <button class="m-button-add__input" type="button" @click="addInformationDurationHeadlineInput">Přidat hlavičku</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Times -->
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotInformationDurationArray[0].times" :key="index" v-if="placesSpotInformationDurationArray[0]">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeInformationDurationTimesInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Název:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Podnázev:</label>
                                                                    <input class="a-input" type="text" v-model="item.subname" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Hodnota:</label>
                                                                    <input class="a-input" type="text" v-model="item.value" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="o-form-item__buttons mt-1">
                                                            <div class="o-form-item__button">
                                                                <div class="m-button-add">
                                                                    <button class="m-button-add__input" type="button" @click="addInformationDurationTimesInput">Přidat text</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - information_duration(JSON) END -->
                                            <!-- Form - altitude -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Nadmořská výška <span class="m-label__name-column">(altitude)</span></span>
                                                </label>
                                                <input class="a-input" type="number" name="altitude" v-model="placesSpotAltitude" />
                                            </div>
                                            <!-- Form - altitude END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotCoordinatesArray" :key="index">
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
                                                <label class="m-label">
                                                    <span class="m-label__name">Zoom map <span class="m-label__name-column">(zoom)</span></span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotZoomArray" :key="index">
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
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesSpotAffiliateArray" :key="index">
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
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Přidat místo</button>
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

    export default defineComponent({
        name: 'AdminPlacesSpotsCreatePage',

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
                        name: "Místa",
                        url: "/admin/places",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Místa",
                        url: "/admin/places/spots",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: "Přidání nového místa",
                        url: "",
                        status: "span"
                    }
                ],
                placesSpotInformationAuthorArray: [],
                placesSpotInformationDurationHeadlineArray: [],
                placesSpotInformationDurationTimesArray: [],
                placesSpotInformationDurationArray: [],
                placesSpotCoordinatesArray: [],
                placesSpotZoomArray: [],
                placesSpotAffiliateArray: [],
                placesSpotsSeoTagsArray: []
            }
        },

        methods: {
            // seo tags
            addSeoTagsInput() {
                this.placesSpotsSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.placesSpotsSeoTagsArray.splice(index, 1)
            },
            // information author
            addInformationAuthorInput() {
                this.placesSpotInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                });
            },
            removeInformationAuthorInput(index: number) {
                this.placesSpotInformationAuthorArray.splice(index, 1);
            },
            // information durationHeadline
            addInformationDurationHeadlineInput() {
                if (this.placesSpotInformationDurationArray.length === 0) {
                    this.placesSpotInformationDurationArray.push({
                        headline: {
                            title: '',
                            perex: ''
                        }
                    });
                } else if (!this.placesSpotInformationDurationArray[0].hasOwnProperty('headline')) {
                    this.placesSpotInformationDurationArray[0].headline = {
                        title: '',
                        perex: ''
                    };
                }
            },
            removeInformationDurationHeadlineInput(index: number) {
                delete this.placesSpotInformationDurationArray[index].headline;
            },
            // information durationTimes
            addInformationDurationTimesInput() {
                if (this.placesSpotInformationDurationArray.length === 0) {
                    this.placesSpotInformationDurationArray.push({
                        times: [
                            {
                                name: '',
                                subname: '',
                                value: ''
                            }
                        ]
                    });
                } else if (!this.placesSpotInformationDurationArray[0].hasOwnProperty('times')) {
                    this.placesSpotInformationDurationArray[0].times = [{
                        name: '',
                        subname: '',
                        value: ''
                    }];
                } else {
                    this.placesSpotInformationDurationArray[0].times.push({
                        name: '',
                        subname: '',
                        value: ''
                    });
                }
            },
            removeInformationDurationTimesInput(index: number) {
                this.placesSpotInformationDurationArray[0].times.splice(index, 1);
            },
            // coordinates
            addCoordinateInput() {
                this.placesSpotCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesSpotCoordinatesArray.splice(index, 1);
            },
            // Zoom
            addZoomInput() {
                this.placesSpotZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesSpotZoomArray.splice(index, 1);
            },
            // Affiliate
            addAffiliateInput() {
                this.placesSpotAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.placesSpotAffiliateArray.splice(index, 1);
            },
        },

        watch: {
            placesSpotName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesSpotsSeoTags: function (newValue, oldValue) {
                try {
                    this.placesSpotsSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesSpotsSeoTagsArray = []
                }
            },
            placesSpotsSeoTagsArray: function (newValue, oldValue) {
                this.placesSpotsSeoTags = JSON.stringify(newValue)
            },
            placesSpotInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesSpotInformationAuthorArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotInformationAuthorArray = [];
                }
            },
            placesSpotInformationDurationHeadline: function (newValue, oldValue) {
                try {
                    this.placesSpotInformationDurationHeadlineArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotInformationDurationHeadlineArray = [];
                }
            },
            placesSpotInformationDurationTimes: function (newValue, oldValue) {
                try {
                    this.placesSpotInformationDurationTimesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotInformationDurationTimesArray = [];
                }
            },
            placesSpotInformationDuration: function (newValue, oldValue) {
                try {
                    this.placesSpotInformationDurationArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotInformationDurationArray = [];
                }
            },
            placesSpotCoordinates: function (newValue, oldValue) {
                try {
                    this.placesSpotCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotCoordinatesArray = [];
                }
            },
            placesSpotCoordinatesArray: function (newValue, oldValue) {
                this.placesSpotCoordinates = JSON.stringify(newValue);
            },
            placesSpotZoom: function (newValue, oldValue) {
                try {
                    this.placesSpotZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotZoomArray = [];
                }
            },
            placesSpotZoomArray: function (newValue, oldValue) {
                this.placesSpotZoom = JSON.stringify(newValue);
            },
            placesSpotAffiliate: function (newValue, oldValue) {
                try {
                    this.placesSpotAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesSpotAffiliateArray = [];
                }
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Místa - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Místa - vytvoření',
                ogTitle: 'Místa - Místa - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const placesSpotIDstate = ref(null)
            const placesSpotIDcity = ref(null)
            const placesSpotIDimageCover = ref(null)
            const placesSpotIDimageHero = ref(null)
            const placesSpotTypePlace = ref('spot')
            const placesSpotSlug = ref('')
            const placesSpotName = ref('')
            const placesSpotInformationChatgpt = ref('')
            const placesSpotInformationAuthor = ref([])
            const placesSpotInformationAuthorArray = ref([])
            const placesSpotInformationDuration = ref([])
            const placesSpotInformationDurationArray = ref([])
            const placesSpotInformationDurationTimes = ref([])
            const placesSpotInformationDurationTimesArray = ref([])
            const placesSpotAltitude = ref(null)
            const placesSpotsSeoTags = ref([])
            const placesSpotsSeoTagsArray = ref([])
            const placesSpotCoordinates = ref([])
            const placesSpotCoordinatesArray = ref([])
            const placesSpotZoom = ref([])
            const placesSpotZoomArray = ref([])
            const placesSpotAffiliate = ref([])
            const placesSpotAffiliateArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-spot-create`, {
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
                            'information_author': JSON.stringify(placesSpotInformationAuthorArray._value),
                            'information_duration': JSON.stringify(placesSpotInformationDurationArray._value),
                            'altitude': placesSpotAltitude.value,
                            'seo_tags': JSON.stringify(placesSpotsSeoTagsArray._value),
                            'coordinates': JSON.stringify(placesSpotCoordinatesArray._value),
                            'zoom': JSON.stringify(placesSpotZoomArray._value),
                            'affiliate': JSON.stringify(placesSpotAffiliateArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/spots/${placesSpotSlug.value}`)
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
                placesSpotIDstate,
                placesSpotIDcity,
                placesSpotIDimageCover,
                placesSpotIDimageHero,
                placesSpotTypePlace,
                placesSpotSlug,
                placesSpotName,
                placesSpotInformationChatgpt,
                placesSpotInformationAuthor,
                placesSpotInformationAuthorArray,
                placesSpotInformationDuration,
                placesSpotInformationDurationArray,
                placesSpotInformationDurationTimes,
                placesSpotInformationDurationTimesArray,
                placesSpotAltitude,
                placesSpotsSeoTags,
                placesSpotsSeoTagsArray,
                placesSpotCoordinates,
                placesSpotCoordinatesArray,
                placesSpotZoom,
                placesSpotZoomArray,
                placesSpotAffiliate,
                placesSpotAffiliateArray,
                createForm
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