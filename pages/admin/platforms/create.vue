<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nové platformy" />
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
                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- slug -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                    <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                                </label>
                                                <input class="a-input" type="text" name="slug" v-model="platformSlug" required />
                                            </div>
                                            <!-- other -->  
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Název platformy <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="name" v-model="platformName" required />
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Můj popis <span class="m-label__name-column">(perex)</span></span>
                                                </label>
                                                <textarea class="a-textarea" type="text" name="perex" v-model="platformPerex"></textarea>
                                            </div>
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Odkaz na profil <span class="m-label__name-column">(url)</span><span class="m-label__name-required">*</span></span>
                                                </label>
                                                <input class="a-input" type="text" name="url" v-model="platformUrl" required />
                                            </div>
                                            <!-- dates -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Datum údajů <span class="m-label__name-column">(date)</span></span>
                                                    <span class="m-label__perex">Datum k jakému platí údaje o platformě ve formátu <i>k 13. Říjnu 2022</i></span>
                                                </label>
                                                <input class="a-input" type="text" name="date" v-model="platformDate" />
                                            </div>
                                            <!-- json -->
                                            <div class="o-form-item__item">
                                                <label class="m-label">
                                                    <span class="m-label__name">Fakta o síťi <span class="m-label__name-column">(facts)</span></span>
                                                    <span class="m-label__perex">Fakta o síťi například datum založení a počet sledujícíh</span>
                                                </label>
                                                <div class="o-form-item__group">
                                                    <div class="o-form-item__group-items">
                                                        <div class="o-form-item__group-item" v-for="(item, index) in platformFactsArray" :key="index">
                                                            <div class="m-button-remove">
                                                                <button class="m-button-remove__input" type="button" @click="removeFactInput(index)">
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
                                                                <button class="m-button-add__input" type="button" @click="addFactInput">Přidat fakt</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Přidat platformu</button>
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
        name: 'AdminPlatformsCreatePage',

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
                        name: "Platformy",
                        url: "/admin/platforms",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: "Přidání nové platforma",
                        url: "",
                        status: "span"
                    }
                ],
                platformFactsArray: []
            }
        },

        methods: {
            addFactInput() {
                this.platformFactsArray.push({
                    name: '',
                    value: ''
                });
            },
            removeFactInput(index: number) {
                this.platformFactsArray.splice(index, 1);
            }
        },

        watch: {
            platformFacts: function (newValue, oldValue) {
                try {
                    this.platformFactsArray = JSON.parse(newValue);
                } catch (error) {
                    this.platformFactsArray = [];
                }
            },
            platformFactsArray: function (newValue, oldValue) {
                this.platformFacts = JSON.stringify(newValue);
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Platformy - vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Platformy - vytvoření',
                ogTitle: 'Platformy - vytvoření',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const platformSlug = ref('')
            const platformName = ref('')
            const platformPerex = ref('')
            const platformUrl = ref('')
            const platformFacts = ref('')
            const platformFactsArray = ref([])
            const platformDate = ref('')

            //FORM - create
            const createForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/platform-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': platformSlug.value,
                            'name': platformName.value,
                            'perex': platformPerex.value,
                            'url': platformUrl.value,
                            'facts': JSON.stringify(platformFactsArray._value),
                            'date': platformDate.value
                        })
                    })
                    .then(() => {
                        console.log('Data byla odeslaná');
                        successForm.value = "Data byla odeslaná"
                        navigateTo(`/admin/platforms/${platformSlug.value}`)
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
                platformSlug,
                platformName,
                platformPerex,
                platformUrl,
                platformFacts,
                platformFactsArray,
                platformDate,
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