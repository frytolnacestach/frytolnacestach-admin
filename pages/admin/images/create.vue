<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového obrázku" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section my-4">
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
                                    <!-- BLOCK - Needitační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Needitační hodnoty" />
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - source -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Zdroj" nameDB="source" perex="Nastavuje se podle typu použití" :required=true />
                                                <input class="a-input" type="text" name="source" disabled="true" v-model="imageSource" required />
                                            </div>
                                            <!-- Form - source END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Needitační hodnoty END -->
                                    
                                    <!-- BLOCK - Editační hodnoty -->
                                    <div class="o-form-item__block">
                                        <!-- COMPONENT - Headline form -->
                                        <mHeadlineForm title="Editační hodnoty" styleGap=" mt-2"/>
                                        <!-- COMPONENT - Headline form END -->
                                        <div class="o-form-item__items">
                                            <!-- Form - name -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Název" nameDB="name" perex="" :required=true />
                                                <input class="a-input" type="text" name="name" v-model="imageName" required />
                                            </div>
                                            <!-- Form - name -->
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
                                            <!-- Form - author -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Autor" nameDB="author" perex="" :required=true />
                                                <input class="a-input" type="text" name="author" v-model="imageAuthor" required />
                                            </div>
                                            <!-- Form - author END -->
                                            <!-- Form - FILE -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Obrázek" nameDB="" perex="Podporované formáty jsou (.jpg, .jpeg, .png, .webp)" :required=true />
                                                <input type="file" name="image" accept=".jpg, .jpeg, .png, .webp" @change="handleFileChange" required />
                                            </div>
                                            <!-- Form - FILE END -->
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
                                <mButtonForm text="Přidat obrázek" />
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
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminImagesPage',

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
                        name: "Přidání nového obrázku",
                        url: "",
                        status: "span"
                    }
                ],
                imageSetting: [
                    {
                        type: 'continent',
                        source: '/world/continents/'
                    },
                    {
                        type: 'state',
                        source: '/world/states/'
                    },
                    {
                        type: 'region',
                        source: '/world/regions/'
                    },
                    {
                        type: 'city',
                        source: '/world/cities/'
                    },
                    {
                        type: 'spot',
                        source: '/world/spots/'
                    },
                    {
                        type: 'article',
                        source: '/articles/'
                    },
                    {
                        type: 'video',
                        source: '/videos/'
                    },
                    {
                        type: 'event',
                        source: '/events/'
                    },
                    {
                        type: 'travelDictionaries',
                        source: '/travel_dictionaries/'
                    },
                    {
                        type: 'wallSocket',
                        source: '/wall_sockets/'
                    },
                    {
                        type: 'fauna',
                        source: '/fauna/'
                    },
                    {
                        type: 'flora',
                        source: '/flora/'
                    },
                    {
                        type: 'food',
                        source: '/foods/'
                    },
                    {
                        type: 'chain',
                        source: '/chains/'
                    },
                    {
                        type: 'brand',
                        source: '/brands/'
                    },
                    {
                        type: 'map',
                        source: '/maps/'
                    },
                    {
                        type: 'default',
                        source: '/_default/'
                    },
                    {
                        type: 'email',
                        source: '/_email/'
                    },
                    {
                        type: 'main',
                        source: '/main/'
                    },
                    {
                        type: 'sizesUsers',
                        source: '/users/'
                    }
                ]
            }
        },

        methods: {
            updateSource() {
                const newSource = this.imageSetting.find(setting => setting.type === this.imageType);
                this.imageSource = newSource.source
            }
        },


        setup() {
            //CONSTS
            const selectedFile = ref<number | null>(null)
            const runTimeConfig = useRuntimeConfig()
            const errorForm = ref('')
            const successForm = ref('')
            const imageName = ref('')
            const imageSource = ref('')
            const imageType = ref('')
            const imageAuthor = ref('')

            const handleFileChange = (event) => {
                selectedFile.value = event.target.files[0]
            }


            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Obrázek - Vytvoření',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Obrázek - Vytvoření',
                ogTitle: 'Obrázek - Vytvoření',
                description: 'Přidání nového obrázku pro web.',
                ogDescription: 'Přidání nového obrázku pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //FORM - edit
            const createForm = async () => {
                if (!selectedFile.value) {
                    errorForm.value = 'Prosím vyberte obrázek.'

                    return
                }

                const formData = new FormData()
                formData.append('image', selectedFile.value)
                formData.append('name', imageName.value)
                formData.append('source', imageSource.value)
                formData.append('type', imageType.value)
                formData.append('author', imageAuthor.value)

                try {
                    await fetch(`${runTimeConfig.public.baseURL}/image-create`, {
                        method: 'POST',
                        body: formData,
                    })

                    successForm.value = 'Obrázek byl úspěšně nahrán a vytvořen.'
                    errorForm.value = ''
                } catch (error) {
                    successForm.value = ''
                    errorForm.value = 'Chyba při nahrávání a vytvoření obrázku.'
                }
            }


            return {
                selectedFile,
                successForm,
                errorForm,
                imageName,
                imageSource,
                imageType,
                imageAuthor,
                handleFileChange,
                createForm
            }
        },

        mounted() {
            //Kontrola přihlášení
            let user = localStorage.getItem('user-info')
            if ( !user || user === "undefined" ) {
                //Přesměrování
                const router = useRouter()
                router.push('/login')
            }
        },

        watch: {
            imageType(newVal, oldVal) {
                this.updateSource()
            }
        }
    })
</script>