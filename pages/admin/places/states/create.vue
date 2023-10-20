<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového státu" />
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
                                                <mLabel name="Typ místa" nameDB="type_place" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesStateTypePlace" required />
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
                                                <mLabel name="ID Kontinentu" nameDB="id_continent" perex="" :required=true />
                                                <mInputIDPlaces :value="placesStateIDcontinent" name="id_continent" :required=true @id-place="handleIDcontinent" />
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
                                                <aInputSlug :value="placesStateSlug" :valueCreate="placesStateName" :edit=true @slug="handleSlug" />
                                            </div>
                                            <!-- Form - slug END -->
                                            <!-- Form - id_city_main -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID Hlavního města" nameDB="id_city_main" perex="" :required=false />
                                                <input class="a-input" type="number" min="0" name="city_main" v-model="placesStateIDcityMain" />
                                            </div>
                                            <!-- Form - id_city_main END -->
                                            <!-- Form - ids_neighboring_countries -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Sousední státy" nameDB="ids_neighboring_countries" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStateIDSneighboringCountriesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeIDSneighboringCountrieInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">ID:</label>
                                                                    <input class="a-input" type="number" min="0" v-model="item.id" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addIDSneighboringCountrieInput">Přidat stát</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - ids_neighboring_countries END -->
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="placesStateName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - information_chatgpt -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od Chat GPT" nameDB="information_chatgpt" perex="" :required=false />
                                                <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesStateInformationChatgpt"></textarea>
                                            </div>
                                            <!-- Form - information_chatgpt END -->
                                            <!-- Form - information_author(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Informace od autora" nameDB="information_author" perex="" :required=false />
                                                <mInputsInformationAuthor :value="placesStateInformationAuthor" @information-author="handleInformationAuthor" />
                                            </div>
                                            <!-- Form - information_author(JSON) END -->
                                            <!-- Form - language_phrases(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Jazykové fráze" nameDB="language_phrases" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStateLanguagePhrasesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeLanguagePhrasesInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Česky:</label>
                                                                    <input class="a-input" type="text" v-model="item.czech" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Překlad:</label>
                                                                    <input class="a-input" type="text" v-model="item.foreign" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Překlad arabsky:</label>
                                                                    <input class="a-input" type="text" v-model="item.foreign_arabic" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Fonetický přepis:</label>
                                                                    <input class="a-input" type="text" v-model="item.phonetic_transcription" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addLanguagePhrasesInput">Přidat frázy</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStatePhoneNumbersEmergencyArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removePhoneNumbersEmergencyInput(index)">
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
                                                                <button class="m-button-add__input" type="button" @click="addPhoneNumbersEmergencyInput">Přidat číslo</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - phone_numbers_emergency(JSON) END -->
                                            <!-- Form - currency_name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název měny" nameDB="currency_name" perex="" :required=false />
                                                <input class="a-input" type="text" name="currency_name" v-model="placesStateCurrencyName" />
                                            </div>
                                            <!-- Form - currency_name END -->
                                            <!-- Form - currency_code -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Kód měny" nameDB="currency_code" perex="" :required=false />
                                                <input class="a-input" type="text" name="currency_code" v-model="placesStateCurrencyCode" />
                                            </div>
                                            <!-- Form - currency_code END -->
                                            <!-- Form - money_prices(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Ceny" nameDB="money_prices" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStateMoneyPricesArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeMoneyPriceInput(index)">
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
                                                                <button class="m-button-add__input" type="button" @click="addMoneyPriceInput">Přidat cenu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - money_prices(JSON) END -->
                                            <!-- Form - people_religion(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Náboženství" nameDB="people_religion" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStatePeopleReligionArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removePeopleReligionInput(index)">
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
                                                                <button class="m-button-add__input" type="button" @click="addPeopleReligionInput">Přidat náboženství</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - people_religion(JSON) END -->
                                            <!-- Form - people_nationality(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Národnost" nameDB="people_nationality" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStatePeopleNationalityArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removePeopleNationalityInput(index)">
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
                                                                <button class="m-button-add__input" type="button" @click="addPeopleNationalityInput">Přidat číslo</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - people_nationality(JSON) END -->
                                            <!-- Form - visitors_entry(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Pravidla pro vstup" nameDB="visitors_entry" perex="" :required=false />
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStateVisitorsEntryArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeVisitorsEntryInput(index)">
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
                                                                <button class="m-button-add__input" type="button" @click="addVisitorsEntryInput">Přidat podmínku</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Form - visitors_entry(JSON) END -->
                                            <!-- Form - coordinates(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Souřadnice" nameDB="coordinates" perex="" :required=false />
                                                <mInputsCoordinates :value="placesStateCoordinates" @coordinates="handleCoordinates" />
                                            </div>
                                            <!-- Form - coordinates(JSON) END -->
                                            <!-- Form - zoom(JSON) -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zoom map" nameDB="zoom" perex="" :required=false />
                                                <mInputsZoom :value="placesStateZoom" @zoom="handleZoom" />
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
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStateOrganizationArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeOrganizationInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date:</label>
                                                                    <input class="a-input" type="text" v-model="item.date" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author:</label>
                                                                    <input class="a-input" type="text" v-model="item.author" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author update:</label>
                                                                    <input class="a-input" type="text" v-model="item.author_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date add to organization:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_add_to_organization" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="o-form-item__buttons mt-1">
                                                        <div class="o-form-item__button">
                                                            <div class="m-button-add">
                                                                <button class="m-button-add__input" type="button" @click="addOrganizationInput">Přidat oragnizaci</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in placesStateLinksArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeLinkInput(index)">
                                                                    Odstranit
                                                                </button>
                                                            </div>
                                                            <div class="o-form-item__group-inputs">
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">URL:</label>
                                                                    <input class="a-input" type="text" v-model="item.url" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date:</label>
                                                                    <input class="a-input" type="text" v-model="item.date" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Name:</label>
                                                                    <input class="a-input" type="text" v-model="item.name" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Author:</label>
                                                                    <input class="a-input" type="text" v-model="item.author" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Date update:</label>
                                                                    <input class="a-input" type="text" v-model="item.date_update" />
                                                                </div>
                                                                <div class="o-form-item__group-input">
                                                                    <label class="m-label">Description:</label>
                                                                    <input class="a-input" type="text" v-model="item.description" />
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
                                            <mButton text="Přidat stát" />
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
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mInputImage from '@/components/molecules/mInputImage.vue'
    import mInputsAffiliate from '@/components/molecules/mInputsAffiliate.vue'
    import mInputsAlerts from '@/components/molecules/mInputsAlerts.vue'
    import mInputsApps from '@/components/molecules/mInputsApps.vue'
    import mInputsCoordinates from '@/components/molecules/mInputsCoordinates.vue'
    import mInputsInformationAuthor from '@/components/molecules/mInputsInformationAuthor.vue'
    import mInputsSeoTags from '@/components/molecules/mInputsSeoTags.vue'
    import mInputsZoom from '@/components/molecules/mInputsZoom.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlacesStatesCreatePage',

        //COMPONENTS
        components: {
            aInputSlug,
            mButton,
            mHeadlineForm,
            mInputIDPlaces,
            mInputImage,
            mInputsAffiliate,
            mInputsAlerts,
            mInputsApps,
            mInputsCoordinates,
            mInputsInformationAuthor,
            mInputsSeoTags,
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
                        name: "Přidání nového státu",
                        url: "",
                        status: "span"
                    }
                ],
                placesStateIDSneighboringCountriesArray: [],
                placesStatePhoneNumbersEmergencyArray: [],
                placesStateMoneyPricesArray: [],
                placesStatePeopleReligionArray: [],
                placesStatePeopleNationalityArray: [],
                placesStateVisitorsEntryArray: [],
                placesStateOrganizationArray: [],
                placesStateLinksArray: [],
                placesStateLanguagePhrasesArray: []
            }
        },

        methods: {
            // IDSneighboringCountries
            addIDSneighboringCountrieInput() {
                this.placesStateIDSneighboringCountriesArray.push({
                    id: ''
                })
            },
            removeIDSneighboringCountrieInput(index: number) {
                this.placesStateIDSneighboringCountriesArray.splice(index, 1)
            },
            // PhoneNumbersEmergency
            addPhoneNumbersEmergencyInput() {
                this.placesStatePhoneNumbersEmergencyArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
            },
            removePhoneNumbersEmergencyInput(index: number) {
                this.placesStatePhoneNumbersEmergencyArray.splice(index, 1)
            },
            // MoneyPrices
            addMoneyPriceInput() {
                this.placesStateMoneyPricesArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
            },
            removeMoneyPriceInput(index: number) {
                this.placesStateMoneyPricesArray.splice(index, 1)
            },
            // PeopleReligion
            addPeopleReligionInput() {
                this.placesStatePeopleReligionArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
            },
            removePeopleReligionInput(index: number) {
                this.placesStatePeopleReligionArray.splice(index, 1)
            },
            // PeopleNationality
            addPeopleNationalityInput() {
                this.placesStatePeopleNationalityArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
            },
            removePeopleNationalityInput(index: number) {
                this.placesStatePeopleNationalityArray.splice(index, 1)
            },
            // VisitorsEntry
            addVisitorsEntryInput() {
                this.placesStateVisitorsEntryArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
            },
            removeVisitorsEntryInput(index: number) {
                this.placesStateVisitorsEntryArray.splice(index, 1)
            },
            // Organization
            addOrganizationInput() {
                this.placesStateOrganizationArray.push({
                    date: '',
                    name: '',
                    author: '',
                    date_update: '',
                    author_update: '',
                    date_add_to_organization: ''
                })
            },
            removeOrganizationInput(index: number) {
                this.placesStateOrganizationArray.splice(index, 1)
            },
            // Links
            addLinkInput() {
                this.placesStateLinksArray.push({
                    url: '',
                    date: '',
                    name: '',
                    author: '',
                    date_update: '',
                    description: '',
                    author_update: ''
                })
            },
            removeLinkInput(index: number) {
                this.placesStateLinksArray.splice(index, 1)
            },
            // LanguagePhrases
            addLanguagePhrasesInput() {
                this.placesStateLanguagePhrasesArray.push({
                    czech: '',
                    foreign: '',
                    foreign_arabic: '',
                    phonetic_transcription: ''
                })
            },
            removeLanguagePhrasesInput(index: number) {
                this.placesStateLanguagePhrasesArray.splice(index, 1)
            },
            // Components input changes
            handleSlug(newSlug: string) {
                this.placesStateSlug = newSlug
            },
            handleImageCover(newImage: string) {
                this.placesStateIDimageCover = newImage
            },
            handleImageHero(newImage: string) {
                this.placesStateIDimageHero = newImage
            },
            handleIDcontinent(newImage: string) {
                this.placesStateIDcontinent = newImage
            },
            handleSeoTags(newSeoTags: string) {
                this.placesStateSeoTags = JSON.stringify(newSeoTags)
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
            handleInformationAuthor(newInformationAuthor: string) {
                this.placesStateInformationAuthor = JSON.stringify(newInformationAuthor)
            },
            handleAlerts(newAlerts: string) {
                this.placesStateAlerts = JSON.stringify(newAlerts)
            },
            handleApps(newApps: string) {
                this.placesStateApps = JSON.stringify(newApps)
            }
        },

        watch: {
            placesStateIDSneighboringCountries: function (newValue, oldValue) {
                try {
                    this.placesStateIDSneighboringCountriesArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStateIDSneighboringCountriesArray = []
                }
            },
            placesStateIDSneighboringCountriesArray: function (newValue, oldValue) {
                this.placesStateIDSneighboringCountries = JSON.stringify(newValue)
            },
            placesStatePhoneNumbersEmergency: function (newValue, oldValue) {
                try {
                    this.placesStatePhoneNumbersEmergencyArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStatePhoneNumbersEmergencyArray = []
                }
            },
            placesStatePhoneNumbersEmergencyArray: function (newValue, oldValue) {
                this.placesStatePhoneNumbersEmergency = JSON.stringify(newValue)
            },
            placesStateMoneyPrices: function (newValue, oldValue) {
                try {
                    this.placesStateMoneyPricesArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStateMoneyPricesArray = []
                }
            },
            placesStateMoneyPricesArray: function (newValue, oldValue) {
                this.placesStateMoneyPrices = JSON.stringify(newValue)
            },
            placesStatePeopleReligion: function (newValue, oldValue) {
                try {
                    this.placesStatePeopleReligionArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStatePeopleReligionArray = []
                }
            },
            placesStatePeopleReligionArray: function (newValue, oldValue) {
                this.placesStatePeopleReligion = JSON.stringify(newValue)
            },
            placesStatePeopleNationality: function (newValue, oldValue) {
                try {
                    this.placesStatePeopleNationalityArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStatePeopleNationalityArray = []
                }
            },
            placesStatePeopleNationalityArray: function (newValue, oldValue) {
                this.placesStatePeopleNationality = JSON.stringify(newValue)
            },
            placesStateVisitorsEntry: function (newValue, oldValue) {
                try {
                    this.placesStateVisitorsEntryArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStateVisitorsEntryArray = []
                }
            },
            placesStateVisitorsEntryArray: function (newValue, oldValue) {
                this.placesStateVisitorsEntry = JSON.stringify(newValue)
            },
            placesStateOrganization: function (newValue, oldValue) {
                try {
                    this.placesStateOrganizationArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStateOrganizationArray = []
                }
            },
            placesStateOrganizationArray: function (newValue, oldValue) {
                this.placesStateOrganization = JSON.stringify(newValue)
            },
            placesStateLinks: function (newValue, oldValue) {
                try {
                    this.placesStateLinksArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStateLinksArray = []
                }
            },
            placesStateLinksArray: function (newValue, oldValue) {
                this.placesStateLinks = JSON.stringify(newValue)
            },
            placesStateLanguagePhrases: function (newValue, oldValue) {
                try {
                    this.placesStateLanguagePhrasesArray = JSON.parse(newValue)
                } catch (error) {
                    this.placesStateLanguagePhrasesArray = []
                }
            },
            placesStateLanguagePhrasesArray: function (newValue, oldValue) {
                this.placesStateLanguagePhrases = JSON.stringify(newValue)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Místa - Státy - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Státy - vytvoření',
                ogTitle: 'Místa - Státy - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            // route
            const runTimeConfig = useRuntimeConfig()
            // message
            const errorForm = ref('')
            const successForm = ref('')
            // date
            const placesStateIDcontinent = ref(null)
            const placesStateIDcityMain = ref(null)
            const placesStateIDimageCover = ref(null)
            const placesStateIDimageHero = ref(null)
            const placesStateIDSneighboringCountries = ref([])
            const placesStateIDSneighboringCountriesArray = ref([])
            const placesStateTypePlace = ref('state')
            const placesStateSlug = ref('')
            const placesStateName = ref('')
            const placesStateInformationChatgpt = ref('')
            const placesStateInformationAuthor = ref([])
            const placesStateMpz = ref('')
            const placesStateTld = ref('')
            const placesStateArea = ref(null)
            const placesStatePopulation = ref(null)
            const placesStatePhonePrefix = ref('')
            const placesStateSeoTags = ref([])
            const placesStatePhoneNumbersEmergency = ref([])
            const placesStatePhoneNumbersEmergencyArray = ref([])
            const placesStateCurrencyName = ref('')
            const placesStateCurrencyCode = ref('')
            const placesStateMoneyPrices = ref([])
            const placesStateMoneyPricesArray = ref([])
            const placesStatePeopleReligion = ref([])
            const placesStatePeopleReligionArray = ref([])
            const placesStatePeopleNationality = ref([])
            const placesStatePeopleNationalityArray = ref([])
            const placesStateVisitorsEntry = ref([])
            const placesStateVisitorsEntryArray = ref([])
            const placesStateCoordinates = ref([])
            const placesStateZoom = ref([])
            const placesStateAffiliate = ref([])
            const placesStateAlerts = ref([])
            const placesStateOrganization = ref([])
            const placesStateOrganizationArray = ref([])
            const placesStateApps = ref([])
            const placesStateLinks = ref([])
            const placesStateLinksArray = ref([])
            const placesStateLanguagePhrases = ref([])
            const placesStateLanguagePhrasesArray = ref([])

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/places-state-create`, {
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
                            'ids_neighboring_countries': JSON.stringify(placesStateIDSneighboringCountriesArray._value),
                            'type_place': placesStateTypePlace.value,
                            'slug': placesStateSlug.value,
                            'name': placesStateName.value,
                            'information_chatgpt': placesStateInformationChatgpt.value,
                            'information_author': placesStateInformationAuthor._value,
                            'mpz': placesStateMpz.value,
                            'tld': placesStateTld.value,
                            'area': placesStateArea.value,
                            'population': placesStatePopulation.value,
                            'phone_prefix': placesStatePhonePrefix.value,
                            'phone_numbers_emergency': JSON.stringify(placesStatePhoneNumbersEmergencyArray._value),
                            'currency_name': placesStateCurrencyName.value,
                            'currency_code': placesStateCurrencyCode.value,
                            'seo_tags': placesStateSeoTags._value,
                            'money_prices': JSON.stringify(placesStateMoneyPricesArray._value),
                            'people_religion': JSON.stringify(placesStatePeopleReligionArray._value),
                            'people_nationality': JSON.stringify(placesStatePeopleNationalityArray._value),
                            'visitors_entry': JSON.stringify(placesStateVisitorsEntryArray._value),
                            'coordinates': placesStateCoordinates._value,
                            'zoom': placesStateZoom._value,
                            'affiliate': placesStateAffiliate._value,
                            'alerts': placesStateAlerts._value,
                            'organization': JSON.stringify(placesStateOrganizationArray._value),
                            'apps': placesStateApps._value,
                            'links': JSON.stringify(placesStateLinksArray._value),
                            'language_phrases': JSON.stringify(placesStateLanguagePhrasesArray._value)
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/places/states/${placesStateSlug.value}`)
                    })
                    .catch((error) => {
                        console.log(error)
                        errorForm.value = "Data nebyla upravena nastala chyba při jejich odeslání"
                    })
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
                placesStateIDSneighboringCountriesArray,
                placesStateTypePlace,
                placesStateSlug,
                placesStateName,
                placesStateInformationChatgpt,
                placesStateInformationAuthor,
                placesStateMpz,
                placesStateTld,
                placesStateArea,
                placesStatePopulation,
                placesStatePhonePrefix,
                placesStateSeoTags,
                placesStatePhoneNumbersEmergency,
                placesStatePhoneNumbersEmergencyArray,
                placesStateCurrencyName,
                placesStateCurrencyCode,
                placesStateMoneyPrices,
                placesStateMoneyPricesArray,
                placesStatePeopleReligion,
                placesStatePeopleReligionArray,
                placesStatePeopleNationality,
                placesStatePeopleNationalityArray,
                placesStateVisitorsEntry,
                placesStateVisitorsEntryArray,
                placesStateCoordinates,
                placesStateZoom,
                placesStateAffiliate,
                placesStateAlerts,
                placesStateOrganization,
                placesStateOrganizationArray,
                placesStateApps,
                placesStateLinks,
                placesStateLinksArray,
                placesStateLanguagePhrases,
                placesStateLanguagePhrasesArray,
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