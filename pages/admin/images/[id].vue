<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'obrazek ' + imageID" />
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
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID <span class="m-label__name-column">(id)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="number" min="0" disabled="true" name="id" v-model="imageID" required />
                                        </div>
                                        <!-- other -->                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="imageName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Zdroj <span class="m-label__name-column">(source)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="source" v-model="imageSource" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Datum vytvoření <span class="m-label__name-column">(date_create)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="dateCreate" disabled="true" v-model="imageDateCreate" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ použití <span class="m-label__name-column">(type)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="type" v-model="imageType" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Autor <span class="m-label__name-column">(author)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="author" v-model="imageAuthor">
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

            <section class="t-section my-4">
                <div class="t-section__inner">
                    <span @click="createWEBPimage">TEST OBRÁZKU</span>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface Image {
        id: number
        name: string
        source: string
        date_create: string
        ltype: string
        author: string
    }

    export default defineComponent({
        name: 'AdminImagesIDPage',

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
                const imageID = this.imageID
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace obrazku - ${imageID}`
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
            const runTimeConfig = useRuntimeConfig()
            const route = useRoute()
            const errorForm = ref('')
            const successForm = ref('')
            const imageID = ref(null)
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
                    imageID.value = Image[0].id;
                    imageName.value = Image[0].name;
                    imageSource.value = Image[0].source;
                    imageDateCreate.value = Image[0].date_create;
                    imageType.value = Image[0].type;
                    imageAuthor.value = Image[0].author;
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
                            //'id': imageID.value,
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

            const createWEBPimage = async () => {
                try {
                    const nameTest = "test"
                    const sourceTest = "/aaatest"
                    await useFetch(`${runTimeConfig.public.baseURL}/image-webp-create?raw=true&name=${encodeURIComponent(nameTest)}&source=${encodeURIComponent(sourceTest)}&width=952&height=null&prefix=h-&subfix=null`, {
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
                imageID,
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