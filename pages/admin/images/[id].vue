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

                    <form class="o-form-item" @submit.prevent="editForm">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form" v-if="loadingData">        
                                    <!-- BLOCK - Needitační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Needitační hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - id -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID" nameDB="id" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="id" v-model="itemID" required />
                                            </div>
                                            <!-- Form - id END -->
                                            <!-- Form - created_at -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum vytvoření" nameDB="created_at" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="createdAt" v-model="createdAt" required />
                                            </div>
                                            <!-- Form - created_at END -->
                                            <!-- Form - updated_at -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Datum úpravy" nameDB="updated_at" perex="" :required=true />
                                                <input class="a-input" type="text" disabled="true" name="updatedAt" v-model="updatedAt" required />
                                            </div>
                                            <!-- Form - updated_at END -->
                                            <!-- Form - name END -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" disabled="true" v-model="imageName" required />
                                            </div>
                                            <!-- Form - name END -->
                                            <!-- Form - source -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zdroj" nameDB="source" perex="" :required=true />
                                                <input class="a-input" type="text" name="source" disabled="true" v-model="imageSource" required />
                                            </div>
                                            <!-- Form - source END -->
                                            <!-- Form - type -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ použití" nameDB="type" perex="" :required=true />
                                                <div class="m-select -json">
                                                    <select class="m-select__select" name="statusIucn" v-model="imageType" required>
                                                        <option value="">- Vyber typ použití -</option>
                                                        <option value="continent">Svět - kontinent</option>
                                                        <option value="state">Svět - stát</option>
                                                        <option value="region">Svět - region</option>
                                                        <option value="city">Svět - město</option>
                                                        <option value="spot">Svět - místo</option>
                                                        <option value="article">Člának</option>
                                                        <option value="video">Video</option>
                                                        <option value="event">Událost</option>
                                                        <option value="travelDictionaries">Cestovatelský slovník</option>
                                                        <option value="wallSocket">Elektrická zásuvka</option>
                                                        <option value="fauna">Fauna</option>
                                                        <option value="flora">Flora</option>
                                                        <option value="food">Jídlo</option>
                                                        <option value="chain">Řetězec</option>
                                                        <option value="brand">Značka</option>
                                                        <option value="map">Mapa</option>
                                                        <option value="default">[Aplikace] - Default</option>
                                                        <option value="email">[Aplikace] - Email</option>
                                                        <option value="main">[Aplikace] - Main</option>
                                                        <option value="sizesUsers">[Aplikace] - Uživatel</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- Form - type END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Needitační hodnoty END -->

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
                                            <!-- Form - author -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Autor" nameDB="author" perex="" :required=true />
                                                <input class="a-input" type="text" name="author" v-model="imageAuthor">
                                            </div>    
                                            <!-- Form - author END -->                         
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->
                                </div>
                                <!-- FORM END -->
                            </div>
                        </div>
                        <!-- COMPONENT - Button -->
                        <div class="o-form-item__buttons">
                            <div class="o-form-item__button">
                                <mButtonForm text="Uložit úpravy" />
                            </div>
                        </div>
                        <!-- COMPONENT - Button END -->
                    </form>
                </div>
            </section>

            <section class="t-section mt-4">
                <div class="t-section__inner">
                    <div class="flex flex-center">
                        <div class="o-box -w640 -center -gray -text-center">
                            <span :class="'a-button-file -webpraw mt-2'" @click="createImageWebP('0', imageType, imageSource, imageName, '.webp', 'raw', null, null, null, null)">
                                {{webP ? 'Znovu generovat WebP obrázek' : 'Generovat WebP obrázek'}}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="t-section">
                <div class="t-section__inner">
                    <div class="flex flex-center">
                        <div class="o-box -w640 -gray -text-center">
                            <div class="o-image-version">
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
                                            <tr class="o-image-version__content" v-for="(item, index) in sizes[imageType]" :key="item.prefix">
                                                <td class="o-image-version__td">{{item.width}}</td>
                                                <td class="o-image-version__td">{{item.height}}</td>
                                                <td class="o-image-version__td">{{item.prefix}}</td>
                                                <td class="o-image-version__td">{{item.suffix}}</td>
                                                <td class="o-image-version__td -p0">
                                                    <span class="o-image-version__button">
                                                        <span :class="'a-button-file -variant -data-type-' + imageType + ' -data-index-' + index" @click="createImageWebP(index, imageType, imageSource, imageName, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)">Generovat</span>
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

            <section class="t-section" v-if="!webP">
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
    import mButtonForm from '@/components/molecules/mButtonForm.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface Image {
        id: number
        created_at: string
        updated_at: string
        name: string
        source: string
        type: string
        author: string
    }

    export default defineComponent({
        name: 'AdminImagesIDPage',

        //COMPONENTS
        components: {
            mButtonForm,
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
                ]
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

        setup() {
            const sizes = {
                article: [
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
                brand: [
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
                default: [
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
                event: [
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
                fauna: [
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
                flora: [
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
                food: [
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
                chain: [
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
                main: [
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
                maps: [
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
                travelDictionaries: [
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
                video: [
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
                wallSocket: [
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
                city: [
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
                continent: [
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
                region: [
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
                spot: [
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
                state: [
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
                ]
            }

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
            const createdAt = ref('')
            const updatedAt = ref('')
            const imageName = ref('')
            const imageSource = ref('')
            const imageType = ref('')
            const imageAuthor = ref('')

            // Change class in button
            function addClassToButton(type: string, className: string, dataType: string, dataIndex: string) {
                let buttons
                if (type === 'webp-raw') {
                    buttons = document.querySelectorAll(`.a-button-file.-webpraw`)
                } else if (type === 'webp-new') {
                    buttons = document.querySelectorAll(`.a-button-file.-data-type-${dataType}.-data-index-${dataIndex}`)
                } else if (type === 'webp') {
                    buttons = document.querySelectorAll(`.a-button-file.-data-type-${dataType}.-data-index-${dataIndex}`)
                }

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
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/image-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'PUT',
                        body: JSON.stringify({
                            'id': itemID.value,
                            'name': imageName.value,
                            'source': imageSource.value,
                            'type': imageType.value,
                            'author': imageAuthor.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla upravena.')
                        successForm.value = "Data byla upravena."
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla upravena.')
                        errorForm.value = "Nastala chyba a data nebyla upravena."
                    }
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const existImageWebpRaw = async(dataIndex: string, dataType: string, source: string, name: string, extension: string, type: string, width: number, height: number, prefix: string, suffix: string) => {
                const imageUrl = 'https://image.frytolnacestach.cz/storage' + source + name + '.webp'

                try {
                    const response = await fetch(imageUrl, { method: 'HEAD' });

                    if (response.ok) {
                        webP.value = true;
                        addClassToButton('webp-raw', '-existing', dataType, dataIndex);
                    } else {
                        webP.value = false;
                        addClassToButton('webp-raw', '-no-existing', dataType, dataIndex);
                    }
                } catch (error) {
                    webP.value = false;
                    addClassToButton('webp-raw', '-error', dataType, dataIndex);
                }
            }

            const existImage = async(dataIndex: string, dataType: string, source: string, name: string, extension: string, type: string, width: number, height: number, prefix: string, suffix: string) => {
                const imageUrl = 'https://image.frytolnacestach.cz/storage' + source + (prefix || '') + name + '-' + (width ? width : height) + (suffix !== "-1x" ? suffix : '') + extension;

                try {
                    const response = await fetch(imageUrl, { method: 'HEAD' });

                    if (response.ok) {
                        addClassToButton('webp', '-existing', dataType, dataIndex);
                    } else {
                        addClassToButton('webp', '-no-existing', dataType, dataIndex);
                    }
                } catch (error) {
                    addClassToButton('webp', '-error', dataType, dataIndex);
                }
            }

            const existImageNew = async (dataIndex: string, dataType: string, source: string, name: string, extension: string, width: number, height: number, prefix: string, suffix: string) => {
                const imageUrl = 'https://image.frytolnacestach.cz/storage' + source + (prefix || '') + name + '-' + (width ? width : height) + (suffix !== "-1x" ? suffix : '') + extension;

                try {
                    const response = await fetch(imageUrl, { method: 'HEAD' });

                    if (response.ok) {
                        addClassToButton('webp-new', '-existing', dataType, dataIndex);
                    } else {
                        addClassToButton('webp-new', '-no-existing', dataType, dataIndex);
                    }
                } catch (error) {
                    addClassToButton('webp-new', '-error', dataType, dataIndex);
                }
            }

            const createImageWebP = async (dataIndex: string, dataType: string, source: string, name: string, extension: string, type: string, width: number, height: number, prefix: string, suffix: string) => {
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
                            existImageWebpRaw('0', dataType, source, name, '.webp', 'raw', null, null, null, null)
                        } else {
                            setTimeout(() => {
                                existImageNew(dataIndex, dataType, source, name, extension, width, height, prefix, suffix)
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
                const { data }: { data: any } = await useFetch(`${runTimeConfig.public.baseURL}/image-id/${route.params.id}`)
                const dataAPI: any = data._rawValue
                
                const Image: Image[] = JSON.parse(dataAPI)
                
                if (Array.isArray(Image) && Image.length > 0) {
                    itemID.value = Image[0].id
                    createdAt.value = Image[0].created_at
                    updatedAt.value = Image[0].updated_at
                    imageName.value = Image[0].name
                    imageSource.value = Image[0].source
                    imageType.value = Image[0].type
                    imageAuthor.value = Image[0].author
                    loadingData.value = true
                }

                existImageWebpRaw('0', imageType.value, imageSource.value, imageName.value, '.webp', 'raw', null, null, null, null)
            })()

            onMounted(async () => {
                sizes[imageType.value].forEach((item, index) => {
                    existImage(index, imageType.value, imageSource.value, imageName.value, '.webp', 'resize', item.width, item.height, item.prefix, item.suffix)
                })
            })

            //RETURN
            return {
                successForm,
                errorForm,
                loadingData,
                webP,
                itemID,
                createdAt,
                updatedAt,
                imageName,
                imageSource,
                imageType,
                imageAuthor,
                sizes,
                existImageWebpRaw,
                existImage,
                createImageWebP,
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
        },

        watch: {
            itemID: function (newValue, oldValue) {
                this.updateBreadcrumbs()
            }
        },
    })
</script>