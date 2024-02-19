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

                    <form class="o-form-item" @submit.prevent="createForm">
                        <div class="o-form-item__outer">
                            <div class="o-form-item__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <!-- FORM -->
                                <div class="o-form-item__form">
                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - type -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Typ" nameDB="type" perex="" :required=true />
                                                <div class="m-select">
                                                    <select class="m-select__select" name="platform" v-model="topPlaceType" required>
                                                        <option value="" v-if="!topPlaceIDplace">- Vyber typ místa -</option>
                                                        <option value="continent">Kontinent</option>
                                                        <option value="state">Stát</option>
                                                        <option value="region">Region</option>
                                                        <option value="city">Město</option>
                                                        <option value="spot">Místo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- Form - type END -->
                                            <!-- Form - id_place -->
                                            <div class="o-form-item__item">
                                                <mLabel name="ID místa" nameDB="id_place" :perex="(topPlaceType === '' ? 'Nejdříve je nutné vybrat typ místa' : '')" :required=true />
                                                <mInputIDPlaces :value="topPlaceIDplace" name="idPlace" :type="topPlaceType" :required=true @id-place="handleIDplace" v-if="topPlaceType" />
                                                <input class="a-input" type="number" min="0" name="idPlace" :disabled="topPlaceType === ''" v-model="topPlaceIDplace" required v-else />
                                            </div>
                                            <!-- Form - id_place END -->
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
                                <mButtonForm text="Přidat top místo" />
                            </div>
                        </div>
                        <!-- COMPONENT - Button END -->
                    </form>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import mButtonForm from '@/components/molecules/mButtonForm.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mInputIDPlaces from '@/components/molecules/mInputIDPlaces.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdmintopPlacesCreatePage',

        //COMPONENTS
        components: {
            mButtonForm,
            mHeadlineForm,
            mInputIDPlaces,
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
                        name: "Top místa",
                        url: "/admin/top-places",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Přidání nového místa",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            handleIDplace(newIDplace: number) {
                this.topPlaceIDplace = newIDplace
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Top místa - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Top místa - vytvoření',
                ogTitle: 'Top místa - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const topPlaceID = ref<number | null>(null)
            const topPlaceIDplace = ref<number | null>(null)
            const topPlaceType = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    // request
                    const response = await fetch(`${runTimeConfig.public.baseURL}/top-place-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'id_place': topPlaceIDplace.value,
                            'type': topPlaceType.value
                        })
                    })
                    // response
                    if (response.ok) {
                        console.log('Data byla uložená.')
                        successForm.value = "Data byla uložená."
                        navigateTo(`/admin/top-places`)
                    } else if (response.status === 500) {
                        console.log('Nastala chyba a data nebyla uložena.')
                        errorForm.value = "Nastala chyba a data nebyla uložena."
                    }
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return {
                successForm,
                errorForm,
                topPlaceID,
                topPlaceIDplace,
                topPlaceType,
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
        },

        watch: {
            topPlaceType: function (newValue, oldValue) {
                this.topPlaceIDplace = null
            },
            handleIDplace(newIDplace: number) {
                this.topPlaceIDplace = newIDplace
            }
        },
    })
</script>