<template>
    <NuxtLayout name="admin">
        <main class="t-main">
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
                                        </div>
                                    </div>
                                    <!-- BLOCK - Stálé hodnoty END -->

                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Image -->
                                            <div class="o-form-item__item mt-1">
                                                <img class="o-form-item__image-file" :src="`https://image.frytolnacestach.cz/storage${imageSource + imageName}.webp`">
                                            </div>
                                            <!-- Image END -->
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
                                            <!-- Form - date_create -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="date_create" perex="" :required=true />
                                                <input class="a-input" type="text" name="dateCreate" disabled="true" v-model="imageDateCreate" required />
                                            </div>
                                            <!-- Form - date_create END -->
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

            <section class="t-section mt-4 mb-2">
                <div class="t-section__inner">
                    <table>
                        <tr>
                            <td><span @click="createWEBPimage('raw', null, null, null, null)">Generovat RAW obrázek</span></td>
                        </tr>
                    </table>
                </div>
            </section>

            <section class="t-section mt-2 mb-4">
                <div class="t-section__inner">
                    <div v-if="imageType === 'default'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesDefault" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'main'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesMain" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'user'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr  v-for="item in sizesUsers" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'map'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesMaps" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'article'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesArticle" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'video'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesVideos" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'state'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesWorldStates" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'region'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesWorldRegions" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'city'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesWorldCities" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'spot'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesWorldSpots" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'continent'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesWorldContinents" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'brand'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesBrands" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'fauna'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesFauna" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'flora'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesFlora" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'food'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesFoods" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'travel_dictionaries'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesTravelDictionaries" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
                    </div>
                    <div v-else-if="imageType === 'event'">
                        <table>
                            <tr>
                                <th>Šířka</th>
                                <th>Výška</th>
                                <th>Prefix</th>
                                <th>Suffix</th>
                                <th>Generování</th>
                            </tr>
                            <tr v-for="item in sizesEvents" :key="item.prefix">
                                <td>{{item.width}}</td>
                                <td>{{item.height}}</td>
                                <td>{{item.prefix}}</td>
                                <td>{{item.suffix}}</td>
                                <td><span @click="createWEBPimage('resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span></td>
                            </tr>
                        </table>
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
                    { width: 320, height: null, prefix: "h-", suffix: null },
                    { width: 340, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 384, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 442, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 620, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 980, height: null, prefix: "h-", suffix: null },
                    { width: 1180, height: null, prefix: "h-", suffix: null },
                    { width: 1360, height: null, prefix: "h-", suffix: null },
                    { width: 1880, height: null, prefix: "h-", suffix: null },
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
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 100, height: null, prefix: "h-", suffix: null },
                    { width: 108, height: null, prefix: "h-", suffix: null },
                    { width: 126, height: null, prefix: "h-", suffix: null },
                    { width: 172, height: null, prefix: "h-", suffix: null },
                    { width: 192, height: null, prefix: "h-", suffix: null },
                    { width: 220, height: null, prefix: "h-", suffix: null },
                    { width: 258, height: null, prefix: "h-", suffix: null },
                    { width: 286, height: null, prefix: "h-", suffix: null },
                    { width: 310, height: null, prefix: "h-", suffix: null },
                    { width: 312, height: null, prefix: "h-", suffix: null },
                    { width: 320, height: null, prefix: "h-", suffix: null },
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 340, height: null, prefix: "h-", suffix: null },
                    { width: 344, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 370, height: null, prefix: "h-", suffix: null },
                    { width: 380, height: null, prefix: "h-", suffix: null },
                    { width: 384, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 430, height: null, prefix: "h-", suffix: null },
                    { width: 440, height: null, prefix: "h-", suffix: null },
                    { width: 442, height: null, prefix: "h-", suffix: null },
                    { width: 468, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 546, height: null, prefix: "h-", suffix: null },
                    { width: 614, height: null, prefix: "h-", suffix: null },
                    { width: 620, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 738, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 962, height: null, prefix: "h-", suffix: null },
                    { width: 980, height: null, prefix: "h-", suffix: null },
                    { width: 1180, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: 1360, height: null, prefix: "h-", suffix: null },
                    { width: 1880, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 226, prefix: "v-", suffix: null },
                    { width: null, height: 264, prefix: "v-", suffix: null },
                    { width: null, height: 314, prefix: "v-", suffix: null },
                    { width: null, height: 332, prefix: "v-", suffix: null },
                    { width: null, height: 354, prefix: "v-", suffix: null },
                    { width: null, height: 380, prefix: "v-", suffix: null },
                    { width: null, height: 424, prefix: "v-", suffix: null },
                    { width: null, height: 40, prefix: "s-", suffix: null },
                    { width: null, height: 50, prefix: "s-", suffix: null },
                    { width: null, height: 70, prefix: "s-", suffix: null },
                    { width: null, height: 166, prefix: "s-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 230, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 256, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 320, prefix: "s-", suffix: null },
                    { width: null, height: 344, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
                    { width: null, height: 370, prefix: "s-", suffix: null },
                    { width: null, height: 430, prefix: "s-", suffix: null },
                    { width: null, height: 556, prefix: "s-", suffix: null },
                    { width: null, height: 738, prefix: "s-", suffix: null },
                    { width: null, height: 962, prefix: "s-", suffix: null },
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
                    { width: 100, height: null, prefix: "h-", suffix: null },
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 310, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1180, height: null, prefix: "h-", suffix: null },
                    { width: 1360, height: null, prefix: "h-", suffix: null },
                    { width: 1880, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 320, prefix: "s-", suffix: null },
                    { width: null, height: 344, prefix: "s-", suffix: null },
                    { width: null, height: 370, prefix: "s-", suffix: null },
                    { width: null, height: 430, prefix: "s-", suffix: null },
                    { width: null, height: 556, prefix: "s-", suffix: null },
                    { width: null, height: 738, prefix: "s-", suffix: null },
                    { width: null, height: 962, prefix: "s-", suffix: null },
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
                    { width: 320, height: null, prefix: "h-", suffix: null },
                    { width: 344, height: null, prefix: "h-", suffix: null },
                    { width: 370, height: null, prefix: "h-", suffix: null },
                    { width: 430, height: null, prefix: "h-", suffix: null },
                    { width: 546, height: null, prefix: "h-", suffix: null },
                    { width: 738, height: null, prefix: "h-", suffix: null },
                    { width: 962, height: null, prefix: "h-", suffix: null },
                    { width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 344 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 370 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 430 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 546 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 738 * 2, height: null, prefix: "h-", suffix: "-2x" },
                    { width: 962 * 2, height: null, prefix: "h-", suffix: "-2x" },
                ],
                sizesTravelDictionaries: [
                    { width: 330, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 172, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 186, height: null, prefix: "s-", suffix: null },
                    { width: 230, height: null, prefix: "s-", suffix: null },
                    { width: 256, height: null, prefix: "s-", suffix: null },
                    { width: 274, height: null, prefix: "s-", suffix: null },
                    { width: 360, height: null, prefix: "s-", suffix: null },
                    { width: 186 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 230 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 256 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 274 * 2, height: null, prefix: "s-", suffix: "-2x" },
                    { width: 360 * 2, height: null, prefix: "s-", suffix: "-2x" }
                ],
                sizesVideos: [
                    { width: 320, height: null, prefix: "h-", suffix: null },
                    { width: 340, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 384, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 442, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 620, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 980, height: null, prefix: "h-", suffix: null },
                    { width: 1180, height: null, prefix: "h-", suffix: null },
                    { width: 1360, height: null, prefix: "h-", suffix: null },
                    { width: 1880, height: null, prefix: "h-", suffix: null },
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
                sizesWorldCities: [
                    { width: 108, height: null, prefix: "h-", suffix: null },
                    { width: 126, height: null, prefix: "h-", suffix: null },
                    { width: 172, height: null, prefix: "h-", suffix: null },
                    { width: 192, height: null, prefix: "h-", suffix: null },
                    { width: 220, height: null, prefix: "h-", suffix: null },
                    { width: 258, height: null, prefix: "h-", suffix: null },
                    { width: 286, height: null, prefix: "h-", suffix: null },
                    { width: 312, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 380, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 440, height: null, prefix: "h-", suffix: null },
                    { width: 468, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 614, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 226, prefix: "v-", suffix: null },
                    { width: null, height: 264, prefix: "v-", suffix: null },
                    { width: null, height: 314, prefix: "v-", suffix: null },
                    { width: null, height: 332, prefix: "v-", suffix: null },
                    { width: null, height: 354, prefix: "v-", suffix: null },
                    { width: null, height: 380, prefix: "v-", suffix: null },
                    { width: null, height: 424, prefix: "v-", suffix: null },
                    { width: null, height: 40, prefix: "s-", suffix: null },
                    { width: null, height: 50, prefix: "s-", suffix: null },
                    { width: null, height: 70, prefix: "s-", suffix: null },
                    { width: null, height: 166, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 256, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 108, height: null, prefix: "h-", suffix: null },
                    { width: 126, height: null, prefix: "h-", suffix: null },
                    { width: 172, height: null, prefix: "h-", suffix: null },
                    { width: 192, height: null, prefix: "h-", suffix: null },
                    { width: 220, height: null, prefix: "h-", suffix: null },
                    { width: 258, height: null, prefix: "h-", suffix: null },
                    { width: 286, height: null, prefix: "h-", suffix: null },
                    { width: 312, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 380, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 440, height: null, prefix: "h-", suffix: null },
                    { width: 468, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 614, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 226, prefix: "v-", suffix: null },
                    { width: null, height: 264, prefix: "v-", suffix: null },
                    { width: null, height: 314, prefix: "v-", suffix: null },
                    { width: null, height: 332, prefix: "v-", suffix: null },
                    { width: null, height: 354, prefix: "v-", suffix: null },
                    { width: null, height: 380, prefix: "v-", suffix: null },
                    { width: null, height: 424, prefix: "v-", suffix: null },
                    { width: null, height: 40, prefix: "s-", suffix: null },
                    { width: null, height: 50, prefix: "s-", suffix: null },
                    { width: null, height: 70, prefix: "s-", suffix: null },
                    { width: null, height: 166, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 256, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 108, height: null, prefix: "h-", suffix: null },
                    { width: 126, height: null, prefix: "h-", suffix: null },
                    { width: 172, height: null, prefix: "h-", suffix: null },
                    { width: 192, height: null, prefix: "h-", suffix: null },
                    { width: 220, height: null, prefix: "h-", suffix: null },
                    { width: 258, height: null, prefix: "h-", suffix: null },
                    { width: 286, height: null, prefix: "h-", suffix: null },
                    { width: 312, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 380, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 440, height: null, prefix: "h-", suffix: null },
                    { width: 468, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 614, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 226, prefix: "v-", suffix: null },
                    { width: null, height: 264, prefix: "v-", suffix: null },
                    { width: null, height: 314, prefix: "v-", suffix: null },
                    { width: null, height: 332, prefix: "v-", suffix: null },
                    { width: null, height: 354, prefix: "v-", suffix: null },
                    { width: null, height: 380, prefix: "v-", suffix: null },
                    { width: null, height: 424, prefix: "v-", suffix: null },
                    { width: null, height: 40, prefix: "s-", suffix: null },
                    { width: null, height: 50, prefix: "s-", suffix: null },
                    { width: null, height: 70, prefix: "s-", suffix: null },
                    { width: null, height: 166, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 256, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 108, height: null, prefix: "h-", suffix: null },
                    { width: 126, height: null, prefix: "h-", suffix: null },
                    { width: 172, height: null, prefix: "h-", suffix: null },
                    { width: 192, height: null, prefix: "h-", suffix: null },
                    { width: 220, height: null, prefix: "h-", suffix: null },
                    { width: 258, height: null, prefix: "h-", suffix: null },
                    { width: 286, height: null, prefix: "h-", suffix: null },
                    { width: 312, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 380, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 440, height: null, prefix: "h-", suffix: null },
                    { width: 468, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 614, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 226, prefix: "v-", suffix: null },
                    { width: null, height: 264, prefix: "v-", suffix: null },
                    { width: null, height: 314, prefix: "v-", suffix: null },
                    { width: null, height: 332, prefix: "v-", suffix: null },
                    { width: null, height: 354, prefix: "v-", suffix: null },
                    { width: null, height: 380, prefix: "v-", suffix: null },
                    { width: null, height: 424, prefix: "v-", suffix: null },
                    { width: null, height: 40, prefix: "s-", suffix: null },
                    { width: null, height: 50, prefix: "s-", suffix: null },
                    { width: null, height: 70, prefix: "s-", suffix: null },
                    { width: null, height: 166, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 256, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
                    { width: 108, height: null, prefix: "h-", suffix: null },
                    { width: 126, height: null, prefix: "h-", suffix: null },
                    { width: 172, height: null, prefix: "h-", suffix: null },
                    { width: 192, height: null, prefix: "h-", suffix: null },
                    { width: 220, height: null, prefix: "h-", suffix: null },
                    { width: 258, height: null, prefix: "h-", suffix: null },
                    { width: 286, height: null, prefix: "h-", suffix: null },
                    { width: 312, height: null, prefix: "h-", suffix: null },
                    { width: 334, height: null, prefix: "h-", suffix: null },
                    { width: 360, height: null, prefix: "h-", suffix: null },
                    { width: 380, height: null, prefix: "h-", suffix: null },
                    { width: 420, height: null, prefix: "h-", suffix: null },
                    { width: 440, height: null, prefix: "h-", suffix: null },
                    { width: 468, height: null, prefix: "h-", suffix: null },
                    { width: 536, height: null, prefix: "h-", suffix: null },
                    { width: 614, height: null, prefix: "h-", suffix: null },
                    { width: 728, height: null, prefix: "h-", suffix: null },
                    { width: 780, height: null, prefix: "h-", suffix: null },
                    { width: 900, height: null, prefix: "h-", suffix: null },
                    { width: 952, height: null, prefix: "h-", suffix: null },
                    { width: 1248, height: null, prefix: "h-", suffix: null },
                    { width: null, height: 226, prefix: "v-", suffix: null },
                    { width: null, height: 264, prefix: "v-", suffix: null },
                    { width: null, height: 314, prefix: "v-", suffix: null },
                    { width: null, height: 332, prefix: "v-", suffix: null },
                    { width: null, height: 354, prefix: "v-", suffix: null },
                    { width: null, height: 380, prefix: "v-", suffix: null },
                    { width: null, height: 424, prefix: "v-", suffix: null },
                    { width: null, height: 40, prefix: "s-", suffix: null },
                    { width: null, height: 50, prefix: "s-", suffix: null },
                    { width: null, height: 70, prefix: "s-", suffix: null },
                    { width: null, height: 166, prefix: "s-", suffix: null },
                    { width: null, height: 186, prefix: "s-", suffix: null },
                    { width: null, height: 210, prefix: "s-", suffix: null },
                    { width: null, height: 224, prefix: "s-", suffix: null },
                    { width: null, height: 240, prefix: "s-", suffix: null },
                    { width: null, height: 256, prefix: "s-", suffix: null },
                    { width: null, height: 274, prefix: "s-", suffix: null },
                    { width: null, height: 306, prefix: "s-", suffix: null },
                    { width: null, height: 360, prefix: "s-", suffix: null },
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
            }
        },

        methods: {
            updateBreadcrumbs() {
                const itemID = this.itemID
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace obrazku - ${itemID}`
                }
            }
        },

        watch: {
            floraID: function (newValue, oldValue) {
                this.updateBreadcrumbs();
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
            // date
            const itemID = ref(null)
            const imageName = ref('')
            const imageSource = ref('')
            const imageDateCreate = ref('')
            const imageType = ref('')
            const imageAuthor = ref('')

            //API - image
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/image-id/${route.params.id}`)
                
                const Image: Image[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Image) && Image.length > 0) {
                    itemID.value = Image[0].id;
                    imageName.value = Image[0].name;
                    imageSource.value = Image[0].source;
                    imageDateCreate.value = Image[0].date_create;
                    imageType.value = Image[0].type;
                    imageAuthor.value = Image[0].author;
                    loadingData.value = true
                } else {

                }
            })()

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

            const createWEBPimage = async (type, width, height, prefix, suffix) => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/image-webp-create?type_create=${type}&name=${encodeURIComponent(imageName.value)}&source=${encodeURIComponent(imageSource.value)}&width=${width}&height=${height}&prefix=${prefix}&suffix=${suffix}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST'
                    })
                    .then(() => {
                        console.log('Obrázek byl vytvořen');
                        successForm.value = "Obrázek byl vytvořen"
                    })
                    .catch((error) => {
                        console.log(error);
                        errorForm.value = "Obrázek nebyl vytvořen, nastala chyba při jeho vytvoření."
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
                imageName,
                imageSource,
                imageDateCreate,
                imageType,
                imageAuthor,
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