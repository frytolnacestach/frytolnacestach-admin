<template>
    <NuxtLayout name="admin">
        <main class="t-main pb-4">
            <!-- SECTION - HERO -->
            <oHero :headline="'obrazek ' + itemID" />
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
                                            <!-- Form - date_create -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="date_create" perex="" :required=true />
                                                <input class="a-input" type="text" name="dateCreate" disabled="true" v-model="imageDateCreate" required />
                                            </div>
                                            <!-- Form - date_create END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Stálé hodnoty END -->

                                    <!-- BLOCK - Náhled obrázku -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Náhled obrázku" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Image -->
                                            <div class="o-form-item__item mt-1">
                                                <img class="o-form-item__image-file" :src="`https://image.frytolnacestach.cz/storage${imageSource + imageName}.webp`">
                                            </div>
                                            <!-- Image END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Náhled obrázku END -->

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - name END -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="imageName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - source -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zdroj" nameDB="source" perex="" :required=true />
                                                <input class="a-input" type="text" name="source" v-model="imageSource" required />
                                            </div>
                                            <!-- Form - source END -->
                                            <!-- Form - type -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ použití" nameDB="type" perex="" :required=true />
                                                <input class="a-input" type="text" name="type" v-model="imageType" required />
                                            </div>
                                            <!-- Form - type END -->
                                            <!-- Form - author -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Autor" nameDB="author" perex="" :required=true />
                                                <input class="a-input" type="text" name="author" v-model="imageAuthor">
                                            </div>    
                                            <!-- Form - author END -->                         
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

            <section class="t-section mt-4">
                <div class="t-section__inner">
                    <div class="flex flex-center">
                        <div class="o-box -w640 -center -gray -text-center">
                            <span :class="'a-button-file ' + (webP ? ' -existing' : ' -no-existing') + ' mt-2'" @click="createWEBPimage('0', imageType, imageSource, imageName, '.webp', 'raw', null, null, null, null)">{{webP ? 'Znovu generovat WebP obrázek' : 'Generovat WebP obrázek'}}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="t-section" v-if="webP">
                <div class="t-section__inner">
                    <div class="flex flex-center">
                        <div class="o-box -w640 -gray -text-center">
                            <div class="o-image-version" v-if="imageType === 'default'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesDefault" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'main'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesMain" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'user'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesUsers" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'map'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesMaps" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'article'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesArticle" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'video'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesVideos" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'state'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesWorldStates" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'region'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesWorldRegions" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'city'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesWorldCities" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'spot'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesWorldSpots" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'continent'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesWorldContinents" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'brand'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr>
                                                <th>Šířka</th>
                                                <th>Výška</th>
                                                <th>Prefix</th>
                                                <th>Suffix</th>
                                                <th>Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesBrands" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'fauna'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesFauna" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'flora'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesFlora" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'food'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesFoods" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'chain'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesChains" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'wall-socket'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesWallSockets" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'travel_dictionaries'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesTravelDictionaries" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="o-image-version" v-else-if="imageType === 'event'">
                                <div class="o-image-version__outer">
                                    <div class="o-image-version__inner">
                                        <table class="o-image-version__table">
                                            <tr class="o-image-version__header">
                                                <th class="o-image-version__th">Šířka</th>
                                                <th class="o-image-version__th">Výška</th>
                                                <th class="o-image-version__th">Prefix</th>
                                                <th class="o-image-version__th">Suffix</th>
                                                <th class="o-image-version__th">Generování</th>
                                            </tr>
                                            <tr class="o-image-version__content" v-for="(item, index) in sizesEvents" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index + imageExists(index, imageType, imageSource, imageName, '.webp', item.width, item.height, item.prefix, item.suffix)" @click="createWEBPimage(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
                                                    </span>
                                                </td>                                            
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="t-section" v-else>
                <div class="t-section__inner">
                    <div class="flex flex-center">
                        <div class="o-box -w640 -center -gray -text-center">
                            Aby bylo možné generovat další varianty je nejdříve nutné vygenerovat webP variantu.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface Image {
        id: number
        name: string
        source: string
        date_create: string
        type: string
        author: string
    }

    export default defineComponent({
        name: 'AdminImagesIDPage',

        //COMPONENTS
        components: {
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
                        name: "Obrázky",
                        url: "/admin/images",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace obrázku - ID obrázku`,
                        url: "",
                        status: "span"
                    }
                ],
                sizesArticle: [
                    { width: 320, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 340, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 384, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 442, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 620, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 980, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1180, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1880, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 340 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 384 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 442 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 620 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 980 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1180 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1880 * 2, height: null, prefix: "h-", suffix: "-2x" }
                ],
                sizesBrands: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesDefault: [
                    { width: 100, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 108, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 126, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 172, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 192, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 220, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 258, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 286, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 310, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 312, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 320, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 340, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 344, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 370, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 380, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 384, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 430, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 440, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 442, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 468, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 546, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 614, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 620, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 738, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 962, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 980, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1180, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1880, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 226, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 264, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 314, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 332, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 354, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 380, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 424, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 40, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 50, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 70, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 166, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 230, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 256, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 320, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 344, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 370, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 430, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 556, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 738, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 962, prefix: "s-", suffix: "-1x" },
                    { width: 100 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 310 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 340 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 344 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 370 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 384 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 430 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 442 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 546 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 620 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 738 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 962 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 980 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1180 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1880 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 230 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 320 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 344 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 370 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 430 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 556 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 738 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 962 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesEvents: [
                    { width: 100, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 100 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesFauna: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesFlora: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesFoods: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesChains: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesMain: [
                    { width: 310, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1180, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1880, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 320, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 344, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 370, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 430, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 556, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 738, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 962, prefix: "s-", suffix: "-1x" },
                    { width: 310 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1180 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1880 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 320 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 344 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 370 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 430 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 556 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 738 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 962 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesMaps: [
                    { width: 320, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 344, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 370, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 430, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 546, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 738, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 962, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 344 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 370 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 430 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 546 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 738 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 962 * 2, height: null, prefix: "h-", suffix: "-2x" },
                ],
                sizesTravelDictionaries: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesUsers: [
                    { width: 186, height: null, prefix: "s-", suffix: "-1x" },
                    { width: 230, height: null, prefix: "s-", suffix: "-1x" },
                    { width: 256, height: null, prefix: "s-", suffix: "-1x" },
                    { width: 274, height: null, prefix: "s-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "s-", suffix: "-1x" },
                    { width: 186 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 230 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 256 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 274 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "s-", suffix: "-2x" }
                ],
                sizesVideos: [
                    { width: 320, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 340, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 384, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 442, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 620, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 980, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1180, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1880, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 340 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 384 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 442 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 620 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 980 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1180 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1880 * 2, height: null, prefix: "h-", suffix: "-2x" }
                ],
                sizesWallSockets: [
                    { width: 330, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 172, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesWorldCities: [
                    { width: 108, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 126, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 172, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 192, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 220, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 258, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 286, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 312, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 380, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 440, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 468, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 614, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 226, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 264, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 314, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 332, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 354, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 380, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 424, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 40, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 50, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 70, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 166, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 256, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesWorldContinents: [
                    { width: 108, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 126, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 172, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 192, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 220, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 258, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 286, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 312, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 380, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 440, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 468, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 614, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 226, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 264, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 314, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 332, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 354, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 380, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 424, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 40, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 50, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 70, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 166, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 256, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesWorldRegions: [
                    { width: 108, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 126, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 172, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 192, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 220, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 258, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 286, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 312, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 380, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 440, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 468, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 614, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 226, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 264, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 314, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 332, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 354, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 380, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 424, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 40, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 50, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 70, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 166, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 256, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesWorldSpots: [
                    { width: 108, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 126, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 172, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 192, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 220, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 258, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 286, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 312, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 380, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 440, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 468, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 614, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 226, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 264, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 314, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 332, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 354, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 380, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 424, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 40, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 50, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 70, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 166, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 256, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                sizesWorldStates: [
                    { width: 108, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 126, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 172, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 192, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 220, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 258, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 286, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 312, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 334, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 360, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 380, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 420, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 440, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 468, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 536, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 614, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 728, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 780, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 900, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 952, height: null, prefix: "h-", suffix: "-1x" },
                    { width: 1248, height: null, prefix: "h-", suffix: "-1x" },
                    { width: null, height: 226, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 264, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 314, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 332, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 354, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 380, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 424, prefix: "v-", suffix: "-1x" },
                    { width: null, height: 40, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 50, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 70, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 166, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 186, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 210, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 224, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 240, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 256, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 274, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 306, prefix: "s-", suffix: "-1x" },
                    { width: null, height: 360, prefix: "s-", suffix: "-1x" },
                    { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
                    { width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
                    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
                ],
                webP: false
            }
        },

        mounted() {
            
        },

        methods: {
            updateBreadcrumbs() {
                const itemID = this.itemID
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace obrazku - ${itemID}`
                }
            },

            imageExists(dataIndex: string, dataType: string, source: string, name: string, extension: string, width: number, height: number, prefix: string, suffix: string) {
                const imageUrl = 'https://image.frytolnacestach.cz/storage' + source + (prefix || '') + name + '-' + (width ? width : height) + (suffix !== "-1x" ? suffix : '') + extension

                const xhr = new XMLHttpRequest()
                xhr.open('HEAD', imageUrl, false)

                try {
                    xhr.send()
                    if (xhr.status === 200) {
                        return " -existing"
                    } else {
                        return " -no-existing"
                    }
                } catch (error) {
                    return " -error"
                }
            }
        },

        watch: {
            floraID: function (newValue, oldValue) {
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
                title: 'Obrázek - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Obrázek - úprava',
                ogTitle: 'Obrázek - úprava',
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
            const webP = ref(false)
            // date
            const itemID = ref<number | null>(null)
            const imageName = ref('')
            const imageSource = ref('')
            const imageDateCreate = ref('')
            const imageType = ref('')
            const imageAuthor = ref('')

            // Change class in button
            function addClassToButton(className: string, dataType: string, dataIndex: string) {
                const buttons = document.querySelectorAll(`.a-button-file.-data-type-${dataType}.-data-index-${dataIndex}`)
                buttons.forEach((button) => {
                    button.classList.remove('-loading')
                    button.classList.remove('-existing')
                    button.classList.remove('-no-existing')
                    button.classList.remove('-error')
                    button.classList.add(className)
                })
            }

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/image-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            //'id': itemID.value,
                            'name': imageName.value,
                            'source': imageSource.value,
                            'date_create': imageDateCreate.value,
                            'type': imageType.value,
                            'author': imageAuthor.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná')
                        successForm.value = "Data byla odeslaná"
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

            const imageWebpExists = async () => {
                const imageUrl = 'https://image.frytolnacestach.cz/storage' + imageSource.value + imageName.value + '.webP'
                const xhr = new XMLHttpRequest()
                xhr.open('HEAD', imageUrl, false)

                try {
                    xhr.send();
                    if (xhr.status === 200) {
                        webP.value = true
                    } else {
                        webP.value = false
                    }
                } catch (error) {
                    webP.value = false
                }
            }

            const imageExistsNew = async (dataIndex: string, dataType: string, source: string, name: string, extension: string, width: number, height: number, prefix: string, suffix: string) => {
                const imageUrl = 'https://image.frytolnacestach.cz/storage' + source + (prefix || '') + name + '-' + (width ? width : height) + (suffix !== "-1x" ? suffix : '') + extension

                const xhr = new XMLHttpRequest()
                xhr.open('HEAD', imageUrl, false)

                try {
                    xhr.send()
                    if (xhr.status === 200) {
                        addClassToButton('-existing', dataType, dataIndex)
                    } else {
                        addClassToButton('-no-existing', dataType, dataIndex)
                    }
                } catch (error) {
                    addClassToButton('-error', dataType, dataIndex)
                }
            }

            const createWEBPimage = async (dataIndex: string, dataType: string, source: string, name: string, extension: string, type: string, width: number, height: number, prefix: string, suffix: string) => {
                try {
                    if (type === "resize") {
                        const buttons = document.querySelectorAll(`.a-button-file.-data-type-${dataType}.-data-index-${dataIndex}`)
                        buttons.forEach((button) => {
                            button.classList.remove('-existing')
                            button.classList.remove('-no-existing')
                            button.classList.remove('-error')
                            button.classList.add('-loading')
                        })
                    }
                    
                    await useFetch(`${runTimeConfig.public.baseURL}/image-webp-create?type_create=${type}&name=${encodeURIComponent(name)}&source=${encodeURIComponent(source)}&width=${width}&height=${height}&prefix=${prefix}&suffix=${suffix}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST'
                    })
                    .then(() => {
                        console.log('Obrázek byl vytvořen')
                        successForm.value = "Obrázek byl vytvořen"

                        if (type === "raw") {
                            imageWebpExists()
                        } else {
                            setTimeout(() => {
                                imageExistsNew(dataIndex, dataType, source, name, extension, width, height, prefix, suffix)
                            }, 5000)
                        }
                    })
                    .catch((error) => {
                        const buttons = document.querySelectorAll(`.a-button-file.-data-type-${dataType}.-data-index-${dataIndex}`)
                        buttons.forEach((button) => {
                            button.classList.remove('-loading')
                            button.classList.add('-error')
                        })

                        console.log(error)
                        errorForm.value = "Obrázek nebyl vytvořen, nastala chyba při jeho vytvoření."
                    })
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //API - image
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/image-id/${route.params.id}`)
                
                const Image: Image[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Image) && Image.length > 0) {
                    itemID.value = Image[0].id
                    imageName.value = Image[0].name
                    imageSource.value = Image[0].source
                    imageDateCreate.value = Image[0].date_create
                    imageType.value = Image[0].type
                    imageAuthor.value = Image[0].author
                    loadingData.value = true
                }

                imageWebpExists()
            })()

            //RETURN
            return {
                successForm,
                errorForm,
                loadingData,
                webP,
                itemID,
                imageName,
                imageSource,
                imageDateCreate,
                imageType,
                imageAuthor,
                imageWebpExists,
                createWEBPimage,
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