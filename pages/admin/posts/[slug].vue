<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Článek ' + postTitle" />
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
                                            <input class="a-input" type="text" name="slug" v-model="postSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Kontinentu <span class="m-label__name-column">(id_continent)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="id_continent" v-model="postIDcontinent" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Státu <span class="m-label__name-column">(id_state)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="id_state" v-model="postIDstate" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Regionu <span class="m-label__name-column">(id_region)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="id_region" v-model="postIDregion" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Města <span class="m-label__name-column">(id_city)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="id_city" v-model="postIDcity" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Místa <span class="m-label__name-column">(id_spot)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="id_spot" v-model="postIDspot" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageList" v-model="postIdImageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="postIdImageHero" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku mapy <span class="m-label__name-column">(id_image_map)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="imageMap" v-model="postIdImageMap" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku og <span class="m-label__name-column">(id_image_og)</span></span>
                                            </label>
                                            <!--<input class="a-input" type="text" name="imageOg" v-model="postIdImageOg" />-->
                                        </div>
                                        <!-- dates -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum vytvoření <span class="m-label__name-column">(date)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="date" v-model="postDate" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum poslední úpravy <span class="m-label__name-column">(date_update)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="dateUpdate" v-model="postDateUpdate" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum platnosti informací <span class="m-label__name-column">(date_onformation)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="dateInformation" v-model="postDateInformation" />
                                        </div>
                                        <!-- other -->                
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkaz na video na Youtube <span class="m-label__name-column">(url_youtube)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="urlYoutube" v-model="postUrlYoutube" />
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkaz na wiki <span class="m-label__name-column">(url_wiki)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="urlWiki" v-model="postUrlWiki" />
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkaz na mapu <span class="m-label__name-column">(url_map)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="urlMap" v-model="postUrlMap" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(title)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="title" v-model="postTitle" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(perex)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="perex" v-model="postPerex" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text otvírák <span class="m-label__name-column">(text_opener)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textOpener" v-model="postTextOpener"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text autora <span class="m-label__name-column">(text_author)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textAuthor" v-model="postTextAuthor"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text z wikipedie <span class="m-label__name-column">(text_wiki)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="textWiki" v-model="postTextWiki"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text k hodnocení <span class="m-label__name-column">(review_text)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="reviewText" v-model="postReviewText"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Hodnocení <span class="m-label__name-column">(review_value)</span></span>
                                                <span class="m-label__perex">Ve formátu <i>85 %</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="reviewValue" v-model="postReviewValue" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text k ceně <span class="m-label__name-column">(perex_price)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="perexPrice" v-model="postPerexPrice" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text k délce cesty <span class="m-label__name-column">(perex_triplength)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="perexTriplength" v-model="postPerexTriplength" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Text k časové náročnosti <span class="m-label__name-column">(perex_time)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="perexTime" v-model="postPerexTime" />
                                        </div>
                                        <!-- json -->
                                        <!-- json - tags -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Tagy <span class="m-label__name-column">(tags)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in postTagsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeTagInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addTagInput">Přidat tag</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- json - location -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Lokace <span class="m-label__name-column">(locations)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in postLocationsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeLocationInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Type:</label>
                                                                <input class="a-input" type="text" v-model="item.type" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addLocationInput">Přidat lokaci</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- json - travels -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Způsoby dopravy <span class="m-label__name-column">(travels)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in postTravelsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeTravelInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Icon:</label>
                                                                <input class="a-input" type="text" v-model="item.icon" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Text:</label>
                                                                <input class="a-input" type="text" v-model="item.text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addTravelInput">Přidat položku</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- json - prices -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Ceny <span class="m-label__name-column">(prices)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in postPricesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removePriceInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Subname:</label>
                                                                <input class="a-input" type="text" v-model="item.subname" />
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
                                                            <button class="m-button-add__input" type="button" @click="addPriceInput">Přidat cenu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- json - triplengths -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Dělka výletu <span class="m-label__name-column">(triplengths)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in postTriplengthsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeTriplengthInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Subname:</label>
                                                                <input class="a-input" type="text" v-model="item.subname" />
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
                                                            <button class="m-button-add__input" type="button" @click="addTriplengthInput">Přidat délku</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- json - times -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Časová náročnost <span class="m-label__name-column">(times)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in postTimesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeTimeInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Subname:</label>
                                                                <input class="a-input" type="text" v-model="item.subname" />
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
                                                            <button class="m-button-add__input" type="button" @click="addTimeInput">Přidat čas</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--TODO: date
                                        <span>TEST: {{ timezoneTest }}</span><br>
                                        <select name="timezone-select" id="timezone-select" v-model="timezone">
                                            <option :value="undefined">Select timezone</option>
                                            <option v-for="zone in timezones" :value="zone" :key="zone">{{ zone }}</option>
                                        </select>
                                        <VueDatePicker v-model="dateNew" locale="cs" show-now-button now-button-label="Aktuální" cancelText="zrušit" selectText="Potvrdit" :timezone="timezone" />-->
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
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    //INTERFACES
    interface Tags {
        name: string
    }

    interface Locations {
        name: string
        type: string
    }

    interface Travels {
        icon: string
        name: string
        text: string
    }

    interface Prices {
        name: string
        subname: string
        value: string
    }

    interface Triplengths {
        name: string
        subname: string
        value: string
    }

    interface Times {
        name: string
        subname: string
        value: string
    }

    interface Post {
        id_continent: number
        id_state: number
        id_region: number
        id_city: number
        id_spot: number
        id_image_cover: number
        id_image_hero: number
        id_image_map: number
        slug: string
        date: Date
        date_update: Date
        date_information: Date
        url_youtube: string
        url_wiki: string
        url_map: string
        title: string
        perex: string
        text_opener: string
        text_author: string
        text_wiki: string
        review_text: string
        review_value: string
        perex_price: string
        perex_triplength: string
        perex_time: string
        tags: Tags[]
        locations: Location[]
        travels: Travels[]
        prices: Prices[]
        triplengths: Triplengths[]
        times: Times[]
    }

    export default defineComponent({
        name: 'AdminPostsSlugPage',

        //COMPONENTS
        components: {
            VueDatePicker,
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
                        name: "Články",
                        url: "/admin/posts",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace článku - NÁZEV ČLÁNKU`,
                        url: "",
                        status: "span"
                    }
                ],
                postTagsArray: [],
                postLocationsArray: [],
                postTravelsArray: [],
                postPricesArray: [],
                postTriplengthsArray: [],
                postTimeArray: []
                /*timezones: [
                    'Pacific/Midway', // -11
                    'America/Adak', // -10,
                    'Pacific/Gambier', // -9
                    'America/Los_Angeles', // -8
                    'America/Denver', // -7
                    'America/Chicago', // -6
                    'America/New_York', // -5
                    'America/Santiago', // -4
                    'America/Sao_Paulo', // -3
                    'America/Noronha', // -2
                    'Atlantic/Cape_Verde', // -1
                    'UTC', // utc
                    'Europe/Brussels', //+1
                    'Africa/Cairo', // +2
                    'Europe/Minsk', // +3
                    'Europe/Moscow', // +4
                    'Asia/Tashkent', // +5
                    'Asia/Dhaka', // +6
                    'Asia/Novosibirsk', // +7
                    'Australia/Perth', // +8
                    'Asia/Tokyo', // +9
                    'Australia/Hobart', // +10
                    'Asia/Vladivostok', // +11
                    'Pacific/Auckland', // +12
                ],
                dateNew: "2022-10-22T18:13:50+00:00",
                timezoneTest: "2022-10-22T18:13:50+00:00",
                timezoneAfter: this.timeZone("2022-10-22T18:13:50+00:00"),
                timezoneAfter2: this.timeZone("2022-10-22T18:13:50+00:00"),
                timezoneAfter: this.timezoneAfter2,
                timezone: 'Europe/Brussels'*/
            }
        },

        methods: {
            updateBreadcrumbs() {
                const postTitle = this.postTitle
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace článku - ${postTitle}`
                }
            },
            // tags
            addTagInput() {
                this.postTagsArray.push({
                    name: ''
                });
            },
            removeTagInput(index: number) {
                this.postTagsArray.splice(index, 1);
            },
            // locations
            addLocationInput() {
                this.postLocationsArray.push({
                    name: '',
                    type: ''
                });
            },
            removeLocationInput(index: number) {
                this.postLocationsArray.splice(index, 1);
            },
            // travels
            addTravelInput() {
                this.postTravelsArray.push({
                    icon: '',
                    name: '',
                    text: ''
                });
            },
            removeTravelInput(index: number) {
                this.postTravelsArray.splice(index, 1);
            },
            // prices
            addPriceInput() {
                this.postPricesArray.push({
                    name: '',
                    subname: '',
                    value: ''
                });
            },
            removePriceInput(index: number) {
                this.postPricesArray.splice(index, 1);
            },
            // triplengths
            addTriplengthInput() {
                this.postTriplengthsArray.push({
                    name: '',
                    subname: '',
                    value: ''
                });
            },
            removeTriplengthInput(index: number) {
                this.postTriplengthsArray.splice(index, 1);
            },
            // times
            addTimeInput() {
                this.postTimesArray.push({
                    name: '',
                    subname: '',
                    value: ''
                });
            },
            removeTimeInput(index: number) {
                this.postTimesArray.splice(index, 1);
            }

            /*timeZone(timeZoneRaw: any) {
                const timestamp = timeZoneRaw;
                const date = new Date(timestamp);
                const timezone = date.toTimeString().substr(9, 6);

                return timezone;
            },

            timeZone2(timeZoneRaw: any) {
                const timestamp = timeZoneRaw;
                const date = new Date(timestamp);
                const timezone = date.getTimezoneOffset()

                return timezone;
            }*/
        },

        watch: {
            postTitle: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            postTags: function (newValue, oldValue) {
                try {
                    this.postTagsArray = JSON.parse(newValue);
                } catch (error) {
                    this.postTagsArray = [];
                }
            },
            postTagsArray: function (newValue, oldValue) {
                this.postTags = JSON.stringify(newValue);
            },
            postLocations: function (newValue, oldValue) {
                try {
                    this.postLocationsArray = JSON.parse(newValue);
                } catch (error) {
                    this.postLocationsArray = [];
                }
            },
            postLocationsArray: function (newValue, oldValue) {
                this.postLocations = JSON.stringify(newValue);
            },
            postTravels: function (newValue, oldValue) {
                try {
                    this.postTravelsArray = JSON.parse(newValue);
                } catch (error) {
                    this.postTravelsArray = [];
                }
            },
            postTravelsArray: function (newValue, oldValue) {
                this.postTravels = JSON.stringify(newValue);
            },
            postPrices: function (newValue, oldValue) {
                try {
                    this.postPricesArray = JSON.parse(newValue);
                } catch (error) {
                    this.postPricesArray = [];
                }
            },
            postPricesArray: function (newValue, oldValue) {
                this.postPrices = JSON.stringify(newValue);
            },
            postTriplengths: function (newValue, oldValue) {
                try {
                    this.postTriplengthsArray = JSON.parse(newValue);
                } catch (error) {
                    this.postTriplengthsArray = [];
                }
            },
            postTriplengthsArray: function (newValue, oldValue) {
                this.postTriplengths = JSON.stringify(newValue);
            },
            postTimes: function (newValue, oldValue) {
                try {
                    this.postTimesArray = JSON.parse(newValue);
                } catch (error) {
                    this.postTimesArray = [];
                }
            },
            postTimesArray: function (newValue, oldValue) {
                this.postTimes = JSON.stringify(newValue);
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Články - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Články - úprava',
                ogTitle: 'Články - úprava',
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
            const postSlug = ref('')
            const postIDcontinent = ref(null)
            const postIDstate = ref(null)
            const postIDregion = ref(null)
            const postIDcity = ref(null)
            const postIDspot = ref(null)
            const postIdImageCover = ref(null)
            const postIdImageHero = ref(null)
            const postIdImageMap = ref(null)
            const postDate = ref(new Date())
            const postDateUpdate = ref(new Date())
            const postDateInformation = ref(new Date())
            const postUrlYoutube = ref('')
            const postUrlWiki = ref('')
            const postUrlMap = ref('')
            const postTitle = ref('')
            const postPerex = ref('')
            const postTextOpener = ref('')
            const postTextAuthor = ref('')
            const postTextWiki = ref('')
            const postReviewText = ref('')
            const postReviewValue = ref('')
            const postPerexPrice = ref('')
            const postPerexTriplength = ref('')
            const postPerexTime = ref('')
            const postTags = ref('')
            const postTagsArray = ref([])
            const postLocations = ref('')
            const postLocationsArray = ref([])
            const postTravels = ref('')
            const postTravelsArray = ref([])
            const postPrices = ref('')
            const postPricesArray = ref([])
            const postTriplengths = ref('')
            const postTriplengthsArray = ref([])
            const postTimes = ref('')
            const postTimesArray = ref([])

            //API - Post
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/post/${route.params.slug}`)
                
                const Post: Post[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Post) && Post.length > 0) {
                    postSlug.value = Post[0].slug;
                    postIDcontinent.value = Post[0].id_continent;
                    postIDstate.value = Post[0].id_state;
                    postIDregion.value = Post[0].id_region;
                    postIDcity.value = Post[0].id_city;
                    postIDspot.value = Post[0].id_spot;
                    postIdImageCover.value = Post[0].id_image_cover;
                    postIdImageHero.value = Post[0].id_image_hero;
                    postIdImageMap.value = Post[0].id_image_map;
                    postDate.value = Post[0].date;
                    postDateUpdate.value = Post[0].date_update;
                    postDateInformation.value = Post[0].date_information;
                    postUrlYoutube.value = Post[0].url_youtube;
                    postUrlWiki.value = Post[0].url_wiki;
                    postUrlMap.value = Post[0].url_map;
                    postTitle.value = Post[0].title;
                    postPerex.value = Post[0].perex;
                    postTextOpener.value = Post[0].text_opener;
                    postTextAuthor.value = Post[0].text_author;
                    postTextWiki.value = Post[0].text_wiki;
                    postReviewText.value = Post[0].review_text;
                    postReviewValue.value = Post[0].review_value;
                    postPerexPrice.value = Post[0].perex_price;
                    postPerexTriplength.value = Post[0].perex_triplength;
                    postPerexTime.value = Post[0].perex_time;
                    postTags.value = Post[0].tags ? JSON.stringify(Post[0].tags) : JSON.stringify([])
                    postLocations.value = Post[0].locations ? JSON.stringify(Post[0].locations) : JSON.stringify([])
                    postTravels.value = Post[0].travels ? JSON.stringify(Post[0].travels) : JSON.stringify([])
                    postPrices.value = Post[0].prices ? JSON.stringify(Post[0].prices) : JSON.stringify([])
                    postTriplengths.value = Post[0].triplengths ? JSON.stringify(Post[0].triplengths) : JSON.stringify([])
                    postTimes.value = Post[0].times ? JSON.stringify(Post[0].times) : JSON.stringify([])
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/post-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': postSlug.value,
                            'id_continent': postIDcontinent.value,
                            'id_state': postIDstate.value,
                            'id_region': postIDregion.value,
                            'id_city': postIDcity.value,
                            'id_spot': postIDspot.value,
                            'id_image_cover': postIdImageCover.value,
                            'id_image_hero': postIdImageHero.value,
                            'id_image_map': postIdImageMap.value,
                            //'date': postDate.value.toISOString(),
                            'date': postDate.value,
                            'date_update': postDateUpdate.value,
                            'date_information': postDateInformation.value,
                            'url_youtube': postUrlYoutube.value,
                            'url_wiki': postUrlWiki.value,
                            'url_map': postUrlMap.value,
                            'title': postTitle.value,
                            'perex': postPerex.value,
                            'text_opener': postTextOpener.value,
                            'text_author': postTextAuthor.value,
                            'text_wiki': postTextWiki.value,
                            'review_text': postReviewText.value,
                            'review_value': postReviewValue.value,
                            'perex_price': postPerexPrice.value,
                            'perex_triplength': postPerexTriplength.value,
                            'perex_time': postPerexTime.value,
                            'tags': JSON.stringify(postTagsArray._value),
                            'locations': JSON.stringify(postLocationsArray._value),
                            'travels': JSON.stringify(postTravelsArray._value),
                            'prices': JSON.stringify(postPricesArray._value),
                            'triplengths': JSON.stringify(postTriplengthsArray._value),
                            'times': JSON.stringify(postTimesArray._value),
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
                postSlug,
                postIDcontinent,
                postIDstate,
                postIDregion,
                postIDcity,
                postIDspot,
                postIdImageCover,
                postIdImageHero,
                postIdImageMap,
                postDate,
                postDateUpdate,
                postDateInformation,
                postUrlYoutube,
                postUrlWiki,
                postUrlMap,
                postTitle,
                postPerex,
                postTextOpener,
                postTextAuthor,
                postTextWiki,
                postReviewText,
                postReviewValue,
                postPerexPrice,
                postPerexTriplength,
                postPerexTime,
                postTags,
                postTagsArray,
                postLocations,
                postLocationsArray,
                postTravels,
                postTravelsArray,
                postPrices,
                postPricesArray,
                postTriplengths,
                postTriplengthsArray,
                postTimes,
                postTimesArray,
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