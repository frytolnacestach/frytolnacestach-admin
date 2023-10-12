<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Přidání nového obrázku" />
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
                                <form class="o-form-item__form" @submit.prevent="createForm">
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
                                                <input class="a-input" type="text" name="author" v-model="imageAuthor" required />
                                            </div>
                                            <!-- Form - author END -->
                                            <!-- Form - FILE -->
                                            <div class="o-form-item__item">
                                                <mLabel name="Obrázek" nameDB="" perex="" :required=true />
                                                <input type="file" name="image" @change="handleFileChange" required />
                                            </div>
                                            <!-- Form - FILE END -->
                                        </div>
                                    </div>
                                    <!-- BLOCK - Editační hodnoty END -->

                                    <!-- COMPONENT - Button -->
                                    <div class="o-form-item__buttons mt-1">
                                        <div class="o-form-item__button">
                                            <mButton text="Přidat obrázek" />
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
    import mButton from '@/components/molecules/mButton.vue'
    import mHeadlineForm from '@/components/molecules/mHeadlineForm.vue'
    import mLabel from '@/components/molecules/mLabel.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminImagesPage',

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
                        name: "Přidání nového obrázku",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        setup() {

            //CONSTS
            const selectedFile = ref(null)
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
                    console.log(error)
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