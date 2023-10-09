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
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
                                            <!-- Form - date -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="date" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="date" v-model="postDate" required />
                                            </div>
                                            <!-- Form - date END -->
                                            <!-- Form - date_update -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum poslední úpravy" nameDB="date_update" perex="" :required=true />
                                                <input class="a-input" type="text" name="dateUpdate" v-model="postDateUpdate" required />
                                            </div>
                                            <!-- Form - date_update END -->
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
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': postIDimageCoverLoading}"></div>
                                                    <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && postIDimageCover" @load="handleImageCoverLoad">
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && postIDimageCoverLoad !== postIDimageCoverChange && (postIDimageCover && postIDimageCover !== null && postIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageCover[0] && (!postIDimageCover || postIDimageCover === null || postIDimageCover === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && postIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="postIDimageCoverLoad === postIDimageCoverChange && !imageCover[0] && postIDimageCover && postIDimageCover !== null && postIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageCover[0] && (!postIDimageCover || postIDimageCover === null || postIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageList" v-model="postIDimageCover" @input="handlepostIDimageCoverChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_cover END -->
                                            <!-- Form - id_image_hero -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku detailu" nameDB="id_image_hero" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': postIDimageHeroLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && postIDimageHero" @load="handleImageHeroLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && postIDimageHeroLoad !== postIDimageHeroChange && (postIDimageHero && postIDimageHero !== null && postIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageHero[0] && (!postIDimageHero || postIDimageHero === null || postIDimageHero === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && postIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="postIDimageHeroLoad === postIDimageHeroChange && !imageHero[0] && postIDimageHero && postIDimageHero !== null && postIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageHero[0] && (!postIDimageHero || postIDimageHero === null || postIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="postIDimageHero" @input="handlepostIDimageHeroChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_hero END -->
                                            <!-- Form - id_image_map -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku mapy" nameDB="id_image_map" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': postIDimageMapLoading}">
                                                        <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageMap[0].source + imageMap[0].name}.webp`" v-if="imageMap[0] && postIDimageMap" @load="handleImageMapLoad">
                                                    </div>
                                                    <span class="o-form-item__image-text" v-if="imageMap[0] && postIDimageMapLoad !== postIDimageMapChange && (postIDimageMap && postIDimageMap !== null && postIDimageMap !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageMap[0] && (!postIDimageMap || postIDimageMap === null || postIDimageMap === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageMap[0] && postIDimageMap">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="postIDimageMapLoad === postIDimageMapChange && !imageMap[0] && postIDimageMap && postIDimageMap !== null && postIDimageMap !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageMap[0] && (!postIDimageMap || postIDimageMap === null || postIDimageMap === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageMap" v-model="postIDimageMap" @input="handlepostIDimageMapChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_map END -->
                                            <!-- Form - id_image_og -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Obrázku og" nameDB="id_image_og" perex="" :required=false />
                                                <div class="o-form-item__image">
                                                    <div class="o-form-item__image-lazyload" :class="{'-loading': postIDimageOGLoading}"></div>
                                                    <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageOG[0].source + imageOG[0].name}.webp`" v-if="imageOG[0] && postIDimageOG" @load="handleImageOGLoad">
                                                    <span class="o-form-item__image-text" v-if="imageOG[0] && postIDimageOGLoad !== postIDimageOGChange && (postIDimageOG && postIDimageOG !== null && postIDimageOG !== 0)">Byl vybrán nový obrázek</span>
                                                    <span class="o-form-item__image-text" v-if="imageOG[0] && (!postIDimageOG || postIDimageOG === null || postIDimageOG === 0)">Obrázek byl odebrán</span>
                                                    <span class="o-form-item__image-text" v-if="!imageOG[0] && postIDimageOG">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="postIDimageOGLoad === postIDimageOGChange && !imageOG[0] && postIDimageOG && postIDimageOG !== null && postIDimageOG !== 0">Vybraní obrázek neexistuje</span>
                                                    <span class="o-form-item__image-text" v-if="!imageOG[0] && (!postIDimageOG || postIDimageOG === null || postIDimageOG === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                    <input class="a-input -c-gray" type="number" min="0" name="imageOg" v-model="postIDimageOG" @input="handlepostIDimageOGChange" />
                                                </div>
                                            </div>
                                            <!-- Form - id_image_og END -->
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
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postSeoTagsArray" :key="index">
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
                                            <!-- Form - id_continent -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Kontinentu" nameDB="id_continent" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_continent" v-model="postIDcontinent" />
                                            </div>
                                            <!-- Form - id_continent END -->
                                            <!-- Form - id_state -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Státu" nameDB="id_state" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_state" v-model="postIDstate" />
                                            </div>
                                            <!-- Form - id_state END -->
                                            <!-- Form - id_region -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Regionu" nameDB="id_region" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_region" v-model="postIDregion" />
                                            </div>
                                            <!-- Form - id_region END -->
                                            <!-- Form - id_city -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Města" nameDB="id_city" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_city" v-model="postIDcity" />
                                            </div>
                                            <!-- Form - id_city END -->
                                            <!-- Form - id_spot -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Místa" nameDB="id_spot" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="id_spot" v-model="postIDspot" />
                                            </div>
                                            <!-- Form - id_spot END -->
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
                                                <aInputSlug :value="postSlug" :valueCreate="postTitle" :edit=false @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - date_information -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum platnosti informací" nameDB="date_information" perex="" :required=false />
                                                <input class="a-input" type="text" name="dateInformation" v-model="postDateInformation" />
                                            </div>
                                            <!-- Form - date_information END -->
                                            <!-- Form - url_youtube -->              
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na video na Youtube" nameDB="url_youtube" perex="" :required=false />
                                                <input class="a-input" type="text" name="urlYoutube" v-model="postUrlYoutube" />
                                            </div>
                                            <!-- Form - url_youtube END -->
                                            <!-- Form - url_wiki -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na wiki" nameDB="url_wiki" perex="" :required=false />
                                                <input class="a-input" type="text" name="urlWiki" v-model="postUrlWiki" />
                                            </div>
                                            <!-- Form - url_wiki END -->
                                            <!-- Form - url_map -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Odkaz na mapu" nameDB="url_map" perex="" :required=false />
                                                <input class="a-input" type="text" name="urlMap" v-model="postUrlMap" />
                                            </div>
                                            <!-- Form - url_map END -->
                                            <!-- Form - title -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="title" perex="" :required=true />
                                                <input class="a-input" type="text" name="title" v-model="postTitle" required />
                                            </div>
                                            <!-- Form - title END -->
                                            <!-- Form - perex -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Popis" nameDB="perex" perex="" :required=false />
                                                <input class="a-input" type="text" name="perex" v-model="postPerex" />
                                            </div>
                                            <!-- Form - perex END -->
                                            <!-- Form - text_opener -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text otvírák" nameDB="text_opener" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="textOpener" v-model="postTextOpener"></textarea>
                                            </div>
                                            <!-- Form - text_opener END -->
                                            <!-- Form - text_author -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text autora" nameDB="text_author" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="textAuthor" v-model="postTextAuthor"></textarea>
                                            </div>
                                            <!-- Form - text_author END -->
                                            <!-- Form - text_wiki -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text z wikipedie" nameDB="text_wiki" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="textWiki" v-model="postTextWiki"></textarea>
                                            </div>
                                            <!-- Form - text_wiki END -->
                                            <!-- Form - review_text -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k hodnocení" nameDB="review_text" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="reviewText" v-model="postReviewText"></textarea>
                                            </div>
                                            <!-- Form - review_text END -->
                                            <!-- Form - review_value -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Hodnocení" nameDB="review_value" perex="Ve formátu <i>85 %</i>" :required=false />
                                                <input class="a-input" type="text" name="reviewValue" v-model="postReviewValue" />
                                            </div>
                                            <!-- Form - review_value END -->
                                            <!-- Form - perex_price -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k ceně" nameDB="perex_price" perex="" :required=false />
                                                <input class="a-input" type="text" name="perexPrice" v-model="postPerexPrice" />
                                            </div>
                                            <!-- Form - perex_price END -->
                                            <!-- Form - perex_triplength -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k délce cesty" nameDB="perex_triplength" perex="" :required=false />
                                                <input class="a-input" type="text" name="perexTriplength" v-model="postPerexTriplength" />
                                            </div>
                                            <!-- Form - perex_triplength END -->
                                            <!-- Form - perex_time -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Text k časové náročnosti" nameDB="perex_time" perex="" :required=false />
                                                <input class="a-input" type="text" name="perexTime" v-model="postPerexTime" />
                                            </div>
                                            <!-- Form - perex_time END -->
                                            <!-- Form - tags(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Tagy" nameDB="tags" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postTagsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeTagInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addTagInput">Přidat tag</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - tags(JSON) END -->
                                            <!-- Form - locations(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Lokace" nameDB="locations" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postLocationsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeLocationInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Type:</label>
                                                                    <input class="a-input" type="text" v-model="item.type" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addLocationInput">Přidat lokaci</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - locations(JSON) END -->
                                            <!-- Form - travels(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Způsoby dopravy" nameDB="travels" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postTravelsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeTravelInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Icon:</label>
                                                                    <input class="a-input" type="text" v-model="item.icon" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Text:</label>
                                                                    <input class="a-input" type="text" v-model="item.text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addTravelInput">Přidat položku</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - travels(JSON) END -->
                                            <!-- Form - prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ceny" nameDB="prices" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postPricesArray" :key="index">
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
                                                                    <label class="m-label">Subname:</label>
                                                                    <input class="a-input" type="text" v-model="item.subname" />
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
                                            <!-- Form - triplengths(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Délka výletu" nameDB="triplengths" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postTriplengthsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeTriplengthInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Subname:</label>
                                                                    <input class="a-input" type="text" v-model="item.subname" />
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
                                                                <button class="m-button-add__input" type="button" @click="addTriplengthInput">Přidat délku</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - triplengths(JSON) END -->
                                            <!-- Form - times(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Časová náročnost" nameDB="times" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in postTimesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeTimeInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Subname:</label>
                                                                    <input class="a-input" type="text" v-model="item.subname" />
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
                                                                <button class="m-button-add__input" type="button" @click="addTimeInput">Přidat čas</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - times(JSON) END -->
                                            <!--TODO: date
                                            <span>TEST: {{ timezoneTest }}</span><br>
                                            <select name="timezone-select" id="timezone-select" v-model="timezone">
                                                <option :value="undefined">Select timezone</option>
                                                <option v-for="zone in timezones" :value="zone" :key="zone">{{ zone }}</option>
                                            </select>
                                            <VueDatePicker v-model="dateNew" locale="cs" show-now-button now-button-label="Aktuální" cancelText="zrušit" selectText="Potvrdit" :timezone="timezone" />-->
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
    //import VueDatePicker from '@vuepic/vue-datepicker';
    //import '@vuepic/vue-datepicker/dist/main.css'

    import aInputSlug from '@/components/atoms/aInputSlug.vue'
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
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

    interface seoTags {
        tag: string
    }

    interface Post {
        id: number
        id_continent: number
        id_state: number
        id_region: number
        id_city: number
        id_spot: number
        id_image_cover: number
        id_image_hero: number
        id_image_map: number
        id_image_og: number
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
        seo_tags: seoTags[]
        tags: Tags[]
        locations: Locations[]
        travels: Travels[]
        prices: Prices[]
        triplengths: Triplengths[]
        times: Times[]
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

    interface ImageMap {
        id: number
        source: string
        name: string
        type: string
    }

    interface ImageOG {
        id: number
        source: string
        name: string
        type: string
    }

    export default defineComponent({
        name: 'AdminPostsSlugPage',

        //COMPONENTS
        components: {
            //VueDatePicker,
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
                postTimeArray: [],
                postSeoTagsArray: []
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
            // change image id
            handlepostIDimageCoverChange() {
                this.postIDimageCoverChange = this.postIDimageCover
                this.postIDimageCoverLoading = true
                this.loadImageCover()
            },
            handlepostIDimageHeroChange() {
                this.postIDimageHeroChange = this.postIDimageHero
                this.postIDimageHeroLoading = true
                this.loadImageHero()
            },
            handlepostIDimageMapChange() {
                this.postIDimageMapChange = this.postIDimageMap
                this.postIDimageMapLoading = true
                this.loadImageMap()
            },
            handlepostIDimageOGChange() {
                this.postIDimageOGChange = this.postIDimageOG
                this.postIDimageOGLoading = true
                this.loadImageOG()
            },
            handleImageCoverLoad() {
                this.postIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.postIDimageHeroLoading = false;
            },
            handleImageMapLoad() {
                this.postIDimageMapLoading = false;
            },
            handleImageOGLoad() {
                this.postIDimageOGLoading = false;
            },
            // seo tags
            addSeoTagsInput() {
                this.postSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.postSeoTagsArray.splice(index, 1)
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
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.postSlug = newSlug
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
            postSeoTags: function (newValue, oldValue) {
                try {
                    this.postSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.postSeoTagsArray = []
                }
            },
            postSeoTagsArray: function (newValue, oldValue) {
                this.postSeoTags = JSON.stringify(newValue)
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
            const itemID = ref(null)
            const postSlug = ref('')
            const postIDcontinent = ref(null)
            const postIDstate = ref(null)
            const postIDregion = ref(null)
            const postIDcity = ref(null)
            const postIDspot = ref(null)
            const postIDimageCover = ref(null)
            const postIDimageHero = ref(null)
            const postIDimageMap = ref(null)
            const postIDimageOG = ref(null)
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
            const postSeoTags = ref([])
            const postSeoTagsArray = ref([])
            const postTags = ref([])
            const postTagsArray = ref([])
            const postLocations = ref([])
            const postLocationsArray = ref([])
            const postTravels = ref([])
            const postTravelsArray = ref([])
            const postPrices = ref([])
            const postPricesArray = ref([])
            const postTriplengths = ref([])
            const postTriplengthsArray = ref([])
            const postTimes= ref([])
            const postTimesArray = ref([])
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const imageMap = ref<ImageMap[]>([])
            const imageOG = ref<ImageOG[]>([])
            const postIDimageCoverLoad = ref(null)
            const postIDimageCoverLoading = ref(false)
            const postIDimageCoverChange = ref(null)
            const postIDimageHeroLoad = ref(null)
            const postIDimageHeroLoading = ref(false)
            const postIDimageHeroChange = ref(null)
            const postIDimageMapLoad = ref(null)
            const postIDimageMapLoading = ref(false)
            const postIDimageMapChange = ref(null)
            const postIDimageOGLoad = ref(null)
            const postIDimageOGLoading = ref(false)
            const postIDimageOGChange = ref(null)

            //API - Post
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/post/${route.params.slug}`)
                
                const Post: Post[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Post) && Post.length > 0) {
                    itemID.value = Post[0].id;
                    postSlug.value = Post[0].slug;
                    postIDcontinent.value = Post[0].id_continent;
                    postIDstate.value = Post[0].id_state;
                    postIDregion.value = Post[0].id_region;
                    postIDcity.value = Post[0].id_city;
                    postIDspot.value = Post[0].id_spot;
                    postIDimageCover.value = Post[0].id_image_cover;
                    postIDimageHero.value = Post[0].id_image_hero;
                    postIDimageMap.value = Post[0].id_image_map;
                    postIDimageOG.value = Post[0].id_image_og;
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
                    postSeoTags.value = Post[0].seo_tags ? JSON.stringify(Post[0].seo_tags) : JSON.stringify([]);
                    postTags.value = Post[0].tags ? JSON.stringify(Post[0].tags) : JSON.stringify([])
                    postLocations.value = Post[0].locations ? JSON.stringify(Post[0].locations) : JSON.stringify([])
                    postTravels.value = Post[0].travels ? JSON.stringify(Post[0].travels) : JSON.stringify([])
                    postPrices.value = Post[0].prices ? JSON.stringify(Post[0].prices) : JSON.stringify([])
                    postTriplengths.value = Post[0].triplengths ? JSON.stringify(Post[0].triplengths) : JSON.stringify([])
                    postTimes.value = Post[0].times ? JSON.stringify(Post[0].times) : JSON.stringify([])

                    // images load ids
                    postIDimageCoverLoad.value = postIDimageCover.value
                    postIDimageCoverChange.value = postIDimageCover.value
                    postIDimageCoverLoading.value = true
                    postIDimageHeroLoad.value = postIDimageHero.value
                    postIDimageHeroChange.value = postIDimageHero.value
                    postIDimageHeroLoading.value = true
                    postIDimageMapLoad.value = postIDimageMap.value
                    postIDimageMapChange.value = postIDimageMap.value
                    postIDimageMapLoading.value = true
                    postIDimageOGLoad.value = postIDimageOG.value
                    postIDimageOGChange.value = postIDimageOG.value
                    postIDimageOGLoading.value = true

                    // Načítání imageCover
                    if (postIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (postIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageHero.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageHero.value = data);
                    } else {
                        imageHero.value = [];
                    }

                    // Načítání imageMap
                    if (postIDimageMap.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageMap.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageMap.value = data);
                    } else {
                        imageMap.value = [];
                    }

                    // Načítání imageOG
                    if (postIDimageOG.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageOG.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageOG.value = data);
                    } else {
                        imageOG.value = [];
                    }
                } else {

                }
            })()

            const loadImageCover = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageCover.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageHero.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageHero.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageMap = async () => {
                try {
                    // Načítání imageMap
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageMap.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageMap.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageOG = async () => {
                try {
                    // Načítání imageOG
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${postIDimageOG.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageOG.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

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
                            'seo_tags': JSON.stringify(postSeoTagsArray._value),
                            'id_continent': postIDcontinent.value,
                            'id_state': postIDstate.value,
                            'id_region': postIDregion.value,
                            'id_city': postIDcity.value,
                            'id_spot': postIDspot.value,
                            'id_image_cover': postIDimageCover.value,
                            'id_image_hero': postIDimageHero.value,
                            'id_image_map': postIDimageMap.value,
                            'id_image_og': postIDimageOG.value,
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
                itemID,
                postSlug,
                postSeoTags,
                postSeoTagsArray,
                postIDcontinent,
                postIDstate,
                postIDregion,
                postIDcity,
                postIDspot,
                postIDimageCover,
                postIDimageHero,
                postIDimageMap,
                postIDimageOG,
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
                imageCover,
                imageHero,
                imageMap,
                imageOG,
                postIDimageCoverLoad,
                postIDimageCoverChange,
                postIDimageCoverLoading,
                postIDimageHeroLoad,
                postIDimageHeroChange,
                postIDimageHeroLoading,
                postIDimageMapLoad,
                postIDimageMapChange,
                postIDimageMapLoading,
                postIDimageOGLoad,
                postIDimageOGChange,
                postIDimageOGLoading,
                editForm,
                loadImageCover,
                loadImageHero,
                loadImageMap,
                loadImageOG
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