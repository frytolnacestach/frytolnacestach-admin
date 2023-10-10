<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Kontinent ' + placesContinentName" />
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
                                                <input class="a-input" type="text" name="typePlace" disabled="true" v-model="placesContinentTypePlace" required />
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
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': placesContinentIDimageCoverLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && placesContinentIDimageCover" @load="handleImageCoverLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && placesContinentIDimageCoverLoad !== placesContinentIDimageCoverChange && (placesContinentIDimageCover && placesContinentIDimageCover !== null && placesContinentIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && (!placesContinentIDimageCover || placesContinentIDimageCover === null || placesContinentIDimageCover === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && placesContinentIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="placesContinentIDimageCoverLoad === placesContinentIDimageCoverChange && !imageCover[0] && placesContinentIDimageCover && placesContinentIDimageCover !== null && placesContinentIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && (!placesContinentIDimageCover || placesContinentIDimageCover === null || placesContinentIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="placesContinentIDimageCover" @input="handlePlacesContinentIDimageCoverChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': placesContinentIDimageHeroLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && placesContinentIDimageHero" @load="handleImageHeroLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && placesContinentIDimageHeroLoad !== placesContinentIDimageHeroChange && (placesContinentIDimageHero && placesContinentIDimageHero !== null && placesContinentIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && (!placesContinentIDimageHero || placesContinentIDimageHero === null || placesContinentIDimageHero === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && placesContinentIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="placesContinentIDimageHeroLoad === placesContinentIDimageHeroChange && !imageHero[0] && placesContinentIDimageHero && placesContinentIDimageHero !== null && placesContinentIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && (!placesContinentIDimageHero || placesContinentIDimageHero === null || placesContinentIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="placesContinentIDimageHero" @input="handlePlacesContinentIDimageHeroChange" />
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
                                                <mLabel name="SEO Tagy" nameDB="seo_tags" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesContinentSeoTagsArray" :key="index">
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
                                                <mLabel name="Slug" nameDB="slug" perex="Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky" :required=true />
                                                <aInputSlug :value="placesContinentSlug" :valueCreate="placesContinentName" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesContinentName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesContinentInformationChatgpt"></textarea>
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesContinentInformationAuthorArray" :key="index">
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
                                            <!-- Form - area -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Rozloha" nameDB="area" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesContinentArea" />
                                            </div>
                                            <!-- Form - area END -->
                                            <!-- Form - population -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Populace" nameDB="population" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="population" v-model="placesContinentPopulation" />
                                            </div>
                                            <!-- Form - population END -->
                                            <!-- Form - population_density -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Hustota populace" nameDB="population_density" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" step=".01" name="population_density" v-model="placesContinentPopulationDensity" />
                                            </div>
                                            <!-- Form - population_density END -->
                                            <!-- Form - number_states -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Počet států" nameDB="number_states" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="number_states" v-model="placesContinentNumberStates" />
                                            </div>
                                            <!-- Form - number_states END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesContinentCoordinatesArray" :key="index">
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
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesContinentZoomArray" :key="index">
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

    interface seoTags {
        tag: string
    }

    interface PlacesContinent {
        id: number
        id_image_cover: number
        id_image_hero: number
        type_place: string
        slug: string
        name: string
        information_chatgpt: string
        information_author: InformationAuthor[]
        area: number
        population: number
        population_density: number
        number_states: number
        seo_tags: seoTags[]
        coordinates: Coordinates[]
        zoom: Zoom[]
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
        name: 'AdminPlacesContinetsSlugPage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
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
                        name: "Kontinenty",
                        url: "/admin/places/continents",
                        status: "link"
                    },
                    {
                        id: 4,
                        name: `Editace kontinentu - NÁZEV MÍSTA`,
                        url: "",
                        status: "span"
                    }
                ],
                placesContinentInformationAuthorArray: [],
                placesContinentCoordinatesArray: [],
                placesContinentZoomArray: [],
                placesContinentSeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const placesContinentName = this.placesContinentName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 4)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace kontinentu - ${placesContinentName}`
                }
            },
            // change image id
            handlePlacesContinentIDimageCoverChange() {
                this.placesContinentIDimageCoverChange = this.placesContinentIDimageCover
                this.placesContinentIDimageCoverLoading = true
                this.loadImageCover()
            },
            handlePlacesContinentIDimageHeroChange() {
                this.placesContinentIDimageHeroChange = this.placesContinentIDimageHero
                this.placesContinentIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.placesContinentIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.placesContinentIDimageHeroLoading = false;
            },
            // information author
            addInformationAuthorInput() {
                this.placesContinentInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                });
            },
            removeInformationAuthorInput(index: number) {
                this.placesContinentInformationAuthorArray.splice(index, 1);
            },
            // seo tags
            addSeoTagsInput() {
                this.placesContinentSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.placesContinentSeoTagsArray.splice(index, 1)
            },
            // coordinates
            addCoordinateInput() {
                this.placesContinentCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesContinentCoordinatesArray.splice(index, 1);
            },
            // zoom
            addZoomInput() {
                this.placesContinentZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesContinentZoomArray.splice(index, 1);
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesContinentSlug = newSlug
            }
        },

        watch: {
            placesContinentName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesContinentSeoTags: function (newValue, oldValue) {
                try {
                    this.placesContinentSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesContinentSeoTagsArray = []
                }
            },
            placesContinentSeoTagsArray: function (newValue, oldValue) {
                this.placesContinentSeoTags = JSON.stringify(newValue)
            },
            placesContinentInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesContinentInformationAuthorArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesContinentInformationAuthorArray = [];
                }
            },
            placesContinentInformationAuthorArray: function (newValue, oldValue) {
                this.placesContinentInformationAuthor = JSON.stringify(newValue);
            },
            placesContinentCoordinates: function (newValue, oldValue) {
                try {
                    this.placesContinentCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesContinentCoordinatesArray = [];
                }
            },
            placesContinentCoordinatesArray: function (newValue, oldValue) {
                this.placesContinentCoordinates = JSON.stringify(newValue);
            },
            placesContinentZoom: function (newValue, oldValue) {
                try {
                    this.placesContinentZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesContinentZoomArray = [];
                }
            },
            placesContinentZoomArray: function (newValue, oldValue) {
                this.placesContinentZoom = JSON.stringify(newValue);
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Kontinenty - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Kontinenty - úprava',
                ogTitle: 'Místa - Kontinenty - úprava',
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
            const placesContinentIDimageCover = ref(null)
            const placesContinentIDimageHero = ref(null)
            const placesContinentTypePlace = ref('continent')
            const placesContinentSlug = ref('')
            const placesContinentName = ref('')
            const placesContinentInformationChatgpt = ref('')
            const placesContinentInformationAuthor = ref([])
            const placesContinentInformationAuthorArray = ref([])
            const placesContinentArea = ref(null)
            const placesContinentPopulation = ref(null)
            const placesContinentPopulationDensity = ref(null)
            const placesContinentNumberStates = ref(null)
            const placesContinentSeoTags = ref([])
            const placesContinentSeoTagsArray = ref([])
            const placesContinentCoordinates = ref([])
            const placesContinentCoordinatesArray = ref([])
            const placesContinentZoom = ref([])
            const placesContinentZoomArray = ref([])
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const placesContinentIDimageCoverLoad = ref(null)
            const placesContinentIDimageCoverLoading = ref(false)
            const placesContinentIDimageCoverChange = ref(null)
            const placesContinentIDimageHeroLoad = ref(null)
            const placesContinentIDimageHeroLoading = ref(false)
            const placesContinentIDimageHeroChange = ref(null)

            //API - Places Continent
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-continent/${route.params.slug}`)
                
                const PlacesContinent: PlacesContinent[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesContinent) && PlacesContinent.length > 0) {
                    itemID.value = PlacesContinent[0].id;
                    placesContinentIDimageCover.value = PlacesContinent[0].id_image_cover;
                    placesContinentIDimageHero.value = PlacesContinent[0].id_image_hero;
                    placesContinentTypePlace.value = PlacesContinent[0].type_place;
                    placesContinentSlug.value = PlacesContinent[0].slug;
                    placesContinentName.value = PlacesContinent[0].name;
                    placesContinentInformationChatgpt.value = PlacesContinent[0].information_chatgpt;
                    placesContinentInformationAuthor.value = PlacesContinent[0].information_author ? JSON.stringify(PlacesContinent[0].information_author) : JSON.stringify([]);
                    placesContinentArea.value = PlacesContinent[0].area;
                    placesContinentPopulation.value = PlacesContinent[0].population;
                    placesContinentPopulationDensity.value = PlacesContinent[0].population_density;
                    placesContinentNumberStates.value = PlacesContinent[0].number_states;
                    placesContinentSeoTags.value = PlacesContinent[0].seo_tags ? JSON.stringify(PlacesContinent[0].seo_tags) : JSON.stringify([]);
                    placesContinentCoordinates.value = PlacesContinent[0].coordinates ? JSON.stringify(PlacesContinent[0].coordinates) : JSON.stringify([]);
                    placesContinentZoom.value = PlacesContinent[0].zoom ? JSON.stringify(PlacesContinent[0].zoom) : JSON.stringify([]);
                    loadingData.value = true

                    // images load ids
                    placesContinentIDimageCoverLoad.value = placesContinentIDimageCover.value
                    placesContinentIDimageCoverChange.value = placesContinentIDimageCover.value
                    placesContinentIDimageCoverLoading.value = true
                    placesContinentIDimageHeroLoad.value = placesContinentIDimageHero.value
                    placesContinentIDimageHeroChange.value = placesContinentIDimageHero.value
                    placesContinentIDimageHeroLoading.value = true
                    
                    // Načítání imageCover
                    if (placesContinentIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${placesContinentIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (placesContinentIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${placesContinentIDimageHero.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${placesContinentIDimageCover.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${placesContinentIDimageHero.value}`, {
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
                    await useFetch(`${runTimeConfig.public.baseURL}/places-continent-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_image_cover': placesContinentIDimageCover.value,
                            'id_image_hero': placesContinentIDimageHero.value,
                            'type_place': placesContinentTypePlace.value,
                            'slug': placesContinentSlug.value,
                            'name': placesContinentName.value,
                            'information_chatgpt': placesContinentInformationChatgpt.value,
                            'information_author': JSON.stringify(placesContinentInformationAuthorArray._value),
                            'area': placesContinentArea.value,
                            'population': placesContinentPopulation.value,
                            'population_density': placesContinentPopulationDensity.value,
                            'number_states': placesContinentNumberStates.value,
                            'seo_tags': JSON.stringify(placesContinentSeoTagsArray._value),
                            'coordinates': JSON.stringify(placesContinentCoordinatesArray._value),
                            'zoom': JSON.stringify(placesContinentZoomArray._value)
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
                placesContinentSeoTags,
                placesContinentSeoTagsArray,
                placesContinentIDimageCover,
                placesContinentIDimageHero,
                placesContinentTypePlace,
                placesContinentSlug,
                placesContinentName,
                placesContinentInformationChatgpt,
                placesContinentInformationAuthor,
                placesContinentInformationAuthorArray,
                placesContinentArea,
                placesContinentPopulation,
                placesContinentPopulationDensity,
                placesContinentNumberStates,
                placesContinentCoordinates,
                placesContinentCoordinatesArray,
                placesContinentZoom,
                placesContinentZoomArray,
                imageCover,
                imageHero,
                placesContinentIDimageCoverLoad,
                placesContinentIDimageCoverChange,
                placesContinentIDimageCoverLoading,
                placesContinentIDimageHeroLoad,
                placesContinentIDimageHeroChange,
                placesContinentIDimageHeroLoading,
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