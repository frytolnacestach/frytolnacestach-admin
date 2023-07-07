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
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu <i>nazev-polozky</i></span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="placesStateSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Kontinentu <span class="m-label__name-column">(id_continent)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="image_hero" v-model="placesStateIDcontinent" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Hlavního města <span class="m-label__name-column">(id_city_main)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="city_main" v-model="placesStateIDcityMain" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="image_cover" v-model="placesStateIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="image_hero" v-model="placesStateIDimageHero" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Sousední státy <span class="m-label__name-column">(ids_neighboring_countries)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateIDSneighboringCountriesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeIDSneighboringCountrieInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">ID:</label>
                                                                <input class="a-input" type="number" min="0" v-model="item.id" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addIDSneighboringCountrieInput">Přidat stát</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ místa <span class="m-label__name-column">(type_place)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" disabled="true" name="typePlace" v-model="placesStateTypePlace" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="placesStateName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od Chat GPT <span class="m-label__name-column">(information_chatgpt)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="placesStateInformationChatgpt"></textarea>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Informace od autora <span class="m-label__name-column">(information_author)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateInformationAuthorArray" :key="index">
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
                                                <span class="m-label__name">MPZ <span class="m-label__name-column">(mpz)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="mpz" v-model="placesStateMpz" />
                                        </div>                               
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">TLD <span class="m-label__name-column">(tld)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="tld" v-model="placesStateTld" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Rozloha <span class="m-label__name-column">(area)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" step=".01" name="area" v-model="placesStateArea" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Populace <span class="m-label__name-column">(population)</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" name="population" v-model="placesStatePopulation" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Telefonní předvolba <span class="m-label__name-column">(phone_prefix)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="phone_prefix" v-model="placesStatePhonePrefix" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Důležitá telefonní čísla <span class="m-label__name-column">(phone_numbers_emergency)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStatePhoneNumbersEmergencyArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removePhoneNumbersEmergencyInput(index)">
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
                                                            <button class="m-button-add__input" type="button" @click="addPhoneNumbersEmergencyInput">Přidat číslo</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název měny <span class="m-label__name-column">(currency_name)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="currency_name" v-model="placesStateCurrencyName" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Kód měny <span class="m-label__name-column">(currency_code)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="currency_code" v-model="placesStateCurrencyCode" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Ceny <span class="m-label__name-column">(money_prices)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateMoneyPricesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeMoneyPriceInput(index)">
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
                                                            <button class="m-button-add__input" type="button" @click="addMoneyPriceInput">Přidat cenu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Náboženství <span class="m-label__name-column">(people_religion)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStatePeopleReligionArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removePeopleReligionInput(index)">
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
                                                            <button class="m-button-add__input" type="button" @click="addPeopleReligionInput">Přidat náboženství</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Národnost <span class="m-label__name-column">(people_nationality)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStatePeopleNationalityArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removePeopleNationalityInput(index)">
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
                                                            <button class="m-button-add__input" type="button" @click="addPeopleNationalityInput">Přidat číslo</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Pravidla pro vstup <span class="m-label__name-column">(visitors_entry)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateVisitorsEntryArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeVisitorsEntryInput(index)">
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
                                                            <button class="m-button-add__input" type="button" @click="addVisitorsEntryInput">Přidat podmínku</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Souřadnice <span class="m-label__name-column">(coordinates)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateCoordinatesArray" :key="index">
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
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateZoomArray" :key="index">
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
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateAffiliateArray" :key="index">
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
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateAlertsArray" :key="index">
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
                                                <span class="m-label__name">Organizace <span class="m-label__name-column">(organization)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateOrganizationArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeOrganizationInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date:</label>
                                                                <input class="a-input" type="text" v-model="item.date" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author:</label>
                                                                <input class="a-input" type="text" v-model="item.author" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author update:</label>
                                                                <input class="a-input" type="text" v-model="item.author_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date add to organization:</label>
                                                                <input class="a-input" type="text" v-model="item.date_add_to_organization" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addOrganizationInput">Přidat oragnizaci</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Aplikace <span class="m-label__name-column">(apps)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateAppsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeAppInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">URL:</label>
                                                                <input class="a-input" type="text" v-model="item.url" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date:</label>
                                                                <input class="a-input" type="text" v-model="item.date" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author:</label>
                                                                <input class="a-input" type="text" v-model="item.author" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Description:</label>
                                                                <input class="a-input" type="text" v-model="item.description" />
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
                                                            <button class="m-button-add__input" type="button" @click="addAppInput">Přidat aplikaci</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Odkazy <span class="m-label__name-column">(links)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in placesStateLinksArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeLinkInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">URL:</label>
                                                                <input class="a-input" type="text" v-model="item.url" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date:</label>
                                                                <input class="a-input" type="text" v-model="item.date" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Name:</label>
                                                                <input class="a-input" type="text" v-model="item.name" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Author:</label>
                                                                <input class="a-input" type="text" v-model="item.author" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Date update:</label>
                                                                <input class="a-input" type="text" v-model="item.date_update" />
                                                            </div>
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Description:</label>
                                                                <input class="a-input" type="text" v-model="item.description" />
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
                                                            <button class="m-button-add__input" type="button" @click="addLinkInput">Přidat odkaz</button>
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

    interface PlacesState {
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
        currency_name: string
        currency_code: string
        money_prices: MoneyPrices[]
        people_religion: PeopleReligion[]
        people_nationality: PeopleNationality[]
        visitors_entry: VisitorsEntry[]
        coordinates: Coordinates[]
        zoom: Zoom[]
        affiliate: Affiliate[]
        alerts: Alerts[]
        organization: Organization[]
        apps: Apps[]
        links: Links[]
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
                ],
                placesStateIDSneighboringCountriesArray: [],
                placesStateInformationAuthorArray: [],
                placesStatePhoneNumbersEmergencyArray: [],
                placesStateMoneyPricesArray: [],
                placesStatePeopleReligionArray: [],
                placesStatePeopleNationalityArray: [],
                placesStateVisitorsEntryArray: [],
                placesStateCoordinatesArray: [],
                placesStateZoomArray: [],
                placesStateAffiliateArray: [],
                placesStateAlertsArray: [],
                placesStateOrganizationArray: [],
                placesStateAppsArray: [],
                placesStateLinksArray: []
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
            // IDSneighboringCountries
            addIDSneighboringCountrieInput() {
                this.placesStateIDSneighboringCountriesArray.push({
                    id: null
                });
            },
            removeIDSneighboringCountrieInput(index: number) {
                this.placesStateIDSneighboringCountriesArray.splice(index, 1);
            },
            // information author
            addInformationAuthorInput() {
                this.placesStateInformationAuthorArray.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                });
            },
            removeInformationAuthorInput(index: number) {
                this.placesStateInformationAuthorArray.splice(index, 1);
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
                });
            },
            removePhoneNumbersEmergencyInput(index: number) {
                this.placesStatePhoneNumbersEmergencyArray.splice(index, 1);
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
                });
            },
            removeMoneyPriceInput(index: number) {
                this.placesStateMoneyPricesArray.splice(index, 1);
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
                });
            },
            removePeopleReligionInput(index: number) {
                this.placesStatePeopleReligionArray.splice(index, 1);
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
                });
            },
            removePeopleNationalityInput(index: number) {
                this.placesStatePeopleNationalityArray.splice(index, 1);
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
                });
            },
            removeVisitorsEntryInput(index: number) {
                this.placesStateVisitorsEntryArray.splice(index, 1);
            },
            // coordinates
            addCoordinateInput() {
                this.placesStateCoordinatesArray.push({
                    latitude: null,
                    longitude: null
                });
            },
            removeCoordinateInput(index: number) {
                this.placesStateCoordinatesArray.splice(index, 1);
            },
            // Zoom
            addZoomInput() {
                this.placesStateZoomArray.push({
                    google: null,
                    booking: null
                });
            },
            removeZoomInput(index: number) {
                this.placesStateZoomArray.splice(index, 1);
            },
            // Affiliate
            addAffiliateInput() {
                this.placesStateAffiliateArray.push({
                    name: '',
                    value: true
                });
            },
            removeAffiliateInput(index: number) {
                this.placesStateAffiliateArray.splice(index, 1);
            },
            // Alerts
            addAlertInput() {
                this.placesStateAlertsArray.push({
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
                this.placesStateAlertsArray.splice(index, 1);
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
                });
            },
            removeOrganizationInput(index: number) {
                this.placesStateOrganizationArray.splice(index, 1);
            },
            // Apps
            addAppInput() {
                this.placesStateAppsArray.push({
                    url: '',
                    date: '',
                    name: '',
                    author: '',
                    date_update: '',
                    description: '',
                    author_update: ''
                });
            },
            removeAppInput(index: number) {
                this.placesStateAppsArray.splice(index, 1);
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
                });
            },
            removeLinkInput(index: number) {
                this.placesStateLinksArray.splice(index, 1);
            },
        },

        watch: {
            placesStateName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesStateName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            placesStateInformationAuthor: function (newValue, oldValue) {
                try {
                    this.placesStateInformationAuthorArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateInformationAuthorArray = [];
                }
            },
            placesStateIDSneighboringCountries: function (newValue, oldValue) {
                try {
                    this.placesStateIDSneighboringCountriesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateIDSneighboringCountriesArray = [];
                }
            },
            placesStateIDSneighboringCountriesArray: function (newValue, oldValue) {
                this.placesStateIDSneighboringCountries = JSON.stringify(newValue);
            },
            placesStatePhoneNumbersEmergency: function (newValue, oldValue) {
                try {
                    this.placesStatePhoneNumbersEmergencyArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStatePhoneNumbersEmergencyArray = [];
                }
            },
            placesStatePhoneNumbersEmergencyArray: function (newValue, oldValue) {
                this.placesStatePhoneNumbersEmergency = JSON.stringify(newValue);
            },
            placesStateMoneyPrices: function (newValue, oldValue) {
                try {
                    this.placesStateMoneyPricesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateMoneyPricesArray = [];
                }
            },
            placesStateMoneyPricesArray: function (newValue, oldValue) {
                this.placesStateMoneyPrices = JSON.stringify(newValue);
            },
            placesStatePeopleReligion: function (newValue, oldValue) {
                try {
                    this.placesStatePeopleReligionArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStatePeopleReligionArray = [];
                }
            },
            placesStatePeopleReligionArray: function (newValue, oldValue) {
                this.placesStatePeopleReligion = JSON.stringify(newValue);
            },
            placesStatePeopleNationality: function (newValue, oldValue) {
                try {
                    this.placesStatePeopleNationalityArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStatePeopleNationalityArray = [];
                }
            },
            placesStatePeopleNationalityArray: function (newValue, oldValue) {
                this.placesStatePeopleNationality = JSON.stringify(newValue);
            },
            placesStateVisitorsEntry: function (newValue, oldValue) {
                try {
                    this.placesStateVisitorsEntryArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateVisitorsEntryArray = [];
                }
            },
            placesStateVisitorsEntryArray: function (newValue, oldValue) {
                this.placesStateVisitorsEntry = JSON.stringify(newValue);
            },
            placesStateCoordinates: function (newValue, oldValue) {
                try {
                    this.placesStateCoordinatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateCoordinatesArray = [];
                }
            },
            placesStateCoordinatesArray: function (newValue, oldValue) {
                this.placesStateCoordinates = JSON.stringify(newValue);
            },
            placesStateZoom: function (newValue, oldValue) {
                try {
                    this.placesStateZoomArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateZoomArray = [];
                }
            },
            placesStateZoomArray: function (newValue, oldValue) {
                this.placesStateZoom = JSON.stringify(newValue);
            },
            placesStateAffiliate: function (newValue, oldValue) {
                try {
                    this.placesStateAffiliateArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateAffiliateArray = [];
                }
            },
            placesStateAffiliateArray: function (newValue, oldValue) {
                this.placesStateAffiliate = JSON.stringify(newValue);
            },
            placesStateAlerts: function (newValue, oldValue) {
                try {
                    this.placesStateAlertsArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateAlertsArray = [];
                }
            },
            placesStateAlertsArray: function (newValue, oldValue) {
                this.placesStateAlerts = JSON.stringify(newValue);
            },
            placesStateOrganization: function (newValue, oldValue) {
                try {
                    this.placesStateOrganizationArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateOrganizationArray = [];
                }
            },
            placesStateOrganizationArray: function (newValue, oldValue) {
                this.placesStateOrganization = JSON.stringify(newValue);
            },
            placesStateApps: function (newValue, oldValue) {
                try {
                    this.placesStateAppsArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateAppsArray = [];
                }
            },
            placesStateAppsArray: function (newValue, oldValue) {
                this.placesStateApps = JSON.stringify(newValue);
            },
            placesStateLinks: function (newValue, oldValue) {
                try {
                    this.placesStateLinksArray = JSON.parse(newValue);
                } catch (error) {
                    this.placesStateLinksArray = [];
                }
            },
            placesStateLinksArray: function (newValue, oldValue) {
                this.placesStateLinks = JSON.stringify(newValue);
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
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            const errorForm = ref('')
            const successForm = ref('')
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
            const placesStateInformationAuthorArray = ref([])
            const placesStateMpz = ref('')
            const placesStateTld = ref('')
            const placesStateArea = ref(null)
            const placesStatePopulation = ref(null)
            const placesStatePhonePrefix = ref('')
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
            const placesStateCoordinatesArray = ref([])
            const placesStateZoom = ref([])
            const placesStateZoomArray = ref([])
            const placesStateAffiliate = ref([])
            const placesStateAffiliateArray = ref([])
            const placesStateAlerts = ref([])
            const placesStateAlertsArray = ref([])
            const placesStateOrganization = ref([])
            const placesStateOrganizationArray = ref([])
            const placesStateApps = ref([])
            const placesStateAppsArray = ref([])
            const placesStateLinks = ref([])
            const placesStateLinksArray = ref([])

            //API - Places State
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/places-state/${route.params.slug}`)
                
                const PlacesState: PlacesState[] = JSON.parse(_rawValue)
                
                if (Array.isArray(PlacesState) && PlacesState.length > 0) {
                    placesStateIDcontinent.value = PlacesState[0].id_continent;
                    placesStateIDcityMain.value = PlacesState[0].id_city_main;
                    placesStateIDimageCover.value = PlacesState[0].id_image_cover;
                    placesStateIDimageHero.value = PlacesState[0].id_image_hero;
                    placesStateIDSneighboringCountries.value = PlacesState[0].ids_neighboring_countries ? JSON.stringify(PlacesState[0].ids_neighboring_countries) : JSON.stringify([])
                    placesStateTypePlace.value = PlacesState[0].type_place;
                    placesStateSlug.value = PlacesState[0].slug;
                    placesStateName.value = PlacesState[0].name;
                    placesStateInformationChatgpt.value = PlacesState[0].information_chatgpt;
                    placesStateInformationAuthor.value = PlacesState[0].information_author ? JSON.stringify(PlacesState[0].information_author) : JSON.stringify([]);
                    placesStateMpz.value = PlacesState[0].mpz;
                    placesStateTld.value = PlacesState[0].tld;
                    placesStateArea.value = PlacesState[0].area;
                    placesStatePopulation.value = PlacesState[0].population;
                    placesStatePhonePrefix.value = PlacesState[0].phone_prefix;
                    placesStatePhoneNumbersEmergency.value = PlacesState[0].phone_numbers_emergency ? JSON.stringify(PlacesState[0].phone_numbers_emergency) : JSON.stringify([])
                    placesStateCurrencyName.value = PlacesState[0].currency_name;
                    placesStateCurrencyCode.value = PlacesState[0].currency_code;
                    placesStateMoneyPrices.value = PlacesState[0].money_prices ? JSON.stringify(PlacesState[0].money_prices) : JSON.stringify([])
                    placesStatePeopleReligion.value = PlacesState[0].people_religion ? JSON.stringify(PlacesState[0].people_religion) : JSON.stringify([])
                    placesStatePeopleNationality.value = PlacesState[0].people_nationality ? JSON.stringify(PlacesState[0].people_nationality) : JSON.stringify([])
                    placesStateVisitorsEntry.value = PlacesState[0].visitors_entry ? JSON.stringify(PlacesState[0].visitors_entry) : JSON.stringify([])
                    placesStateCoordinates.value = PlacesState[0].coordinates ? JSON.stringify(PlacesState[0].coordinates) : JSON.stringify([])
                    placesStateZoom.value = PlacesState[0].zoom ? JSON.stringify(PlacesState[0].zoom) : JSON.stringify([])
                    placesStateAffiliate.value = PlacesState[0].affiliate ? JSON.stringify(PlacesState[0].affiliate) : JSON.stringify([])
                    placesStateAlerts.value = PlacesState[0].alerts ? JSON.stringify(PlacesState[0].alerts) : JSON.stringify([])
                    placesStateOrganization.value = PlacesState[0].organization ? JSON.stringify(PlacesState[0].organization) : JSON.stringify([])
                    placesStateApps.value = PlacesState[0].apps ? JSON.stringify(PlacesState[0].apps) : JSON.stringify([])
                    placesStateLinks.value = PlacesState[0].links ? JSON.stringify(PlacesState[0].links) : JSON.stringify([])
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
                            'ids_neighboring_countries': JSON.stringify(placesStateIDSneighboringCountriesArray._value),
                            'type_place': placesStateTypePlace.value,
                            'slug': placesStateSlug.value,
                            'name': placesStateName.value,
                            'information_chatgpt': placesStateInformationChatgpt.value,
                            'information_author': JSON.stringify(placesStateInformationAuthorArray._value),
                            'mpz': placesStateMpz.value,
                            'tld': placesStateTld.value,
                            'area': placesStateArea.value,
                            'population': placesStatePopulation.value,
                            'phone_prefix': placesStatePhonePrefix.value,
                            'phone_numbers_emergency': JSON.stringify(placesStatePhoneNumbersEmergencyArray._value),
                            'currency_name': placesStateCurrencyName.value,
                            'currency_code': placesStateCurrencyCode.value,
                            'money_prices': JSON.stringify(placesStateMoneyPricesArray._value),
                            'people_religion': JSON.stringify(placesStatePeopleReligionArray._value),
                            'people_nationality': JSON.stringify(placesStatePeopleNationalityArray._value),
                            'visitors_entry': JSON.stringify(placesStateVisitorsEntryArray._value),
                            'coordinates': JSON.stringify(placesStateCoordinatesArray._value),
                            'zoom': JSON.stringify(placesStateZoomArray._value),
                            'affiliate': JSON.stringify(placesStateAffiliateArray._value),
                            'alerts': JSON.stringify(placesStateAlertsArray._value),
                            'organization': JSON.stringify(placesStateOrganizationArray._value),
                            'apps': JSON.stringify(placesStateAppsArray._value),
                            'links': JSON.stringify(placesStateLinksArray._value)
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
                placesStateIDSneighboringCountriesArray,
                placesStateTypePlace,
                placesStateSlug,
                placesStateName,
                placesStateInformationChatgpt,
                placesStateInformationAuthor,
                placesStateInformationAuthorArray,
                placesStateMpz,
                placesStateTld,
                placesStateArea,
                placesStatePopulation,
                placesStatePhonePrefix,
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
                placesStateCoordinatesArray,
                placesStateZoom,
                placesStateZoomArray,
                placesStateAffiliate,
                placesStateAffiliateArray,
                placesStateAlerts,
                placesStateAlertsArray,
                placesStateOrganization,
                placesStateOrganizationArray,
                placesStateApps,
                placesStateAppsArray,
                placesStateLinks,
                placesStateLinksArray,
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