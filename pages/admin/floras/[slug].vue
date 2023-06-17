<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'flora ' + floraName" />
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
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="floraSlug" />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Cover:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageCover" v-model="floraIDimageCover" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Image Hero:</span>
                                            </label>
                                            <input class="a-input" type="text" name="imageHero" v-model="floraIDimageHero" />
                                        </div>
                                        <!-- json -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">IDs states:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="idsStates" v-model="floraIDSstates"></textarea>
                                        </div>
                                        <!-- other -->                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Name:</span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="floraName" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Name Lat:</span>
                                            </label>
                                            <input class="a-input" type="text" name="nameLat" v-model="floraNameLat" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Location:</span>
                                            </label>
                                            <input class="a-input" type="text" name="nameLocation" v-model="floraLocation" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Status IUCN:</span>
                                            </label>
                                            <input class="a-input" type="text" name="nameStatusIusn" v-model="floraStatusIucn" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Status danger:</span>
                                            </label>
                                            <input class="a-input" type="text" name="nameStatusDanger" v-model="floraStatusDanger" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Description:</span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="floraDescription"></textarea>
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

    interface Flora {
        id_image_cover: number
        id_image_hero: number
        ids_states: string
        slug: string
        name: string
        name_lat: string
        location: string
        status_iucn: string
        status_danger: string
        description: string
    }

    export default defineComponent({
        name: 'AdminFlorasSlugPage',

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
                        name: "Flora",
                        url: "/admin/floras",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace flory - NÁZEV FLORY`,
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        methods: {
            updateBreadcrumbs() {
                const floraName = this.floraName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace flory - ${floraName}`
                }
            }
        },

        watch: {
            floraName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Flora - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Flora - úprava',
                ogTitle: 'Flora - úprava',
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
            const floraSlug = ref('')
            const floraIDimageCover = ref(0)
            const floraIDimageHero = ref(0)
            const floraIDSstates = ref('')
            const floraName = ref('')
            const floraNameLat = ref('')
            const floraLocation = ref('')
            const floraStatusIucn = ref('')
            const floraStatusDanger = ref('')
            const floraDescription = ref('')

            //API - flora
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/flora/${route.params.slug}`)
                
                const Flora: Flora[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Flora) && Flora.length > 0) {
                    floraSlug.value = Flora[0].slug;
                    floraIDimageCover.value = Flora[0].id_image_cover;
                    floraIDimageHero.value = Flora[0].id_image_hero;
                    floraIDSstates.value = JSON.stringify(Flora[0].ids_states);
                    floraName.value = Flora[0].name;
                    floraNameLat.value = Flora[0].name_lat;
                    floraLocation.value = Flora[0].location;
                    floraStatusIucn.value = Flora[0].status_iucn;
                    floraStatusDanger.value = Flora[0].status_danger;
                    floraDescription.value = Flora[0].description;
                } else {

                }
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/flora-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': floraSlug.value,
                            'id_image_cover': floraIDimageCover.value,
                            'id_image_hero': floraIDimageHero.value,
                            'ids_states': floraIDSstates.value,
                            'name': floraName.value,
                            'name_lat': floraNameLat.value,
                            'location': floraLocation.value,
                            'status_iucn': floraStatusIucn.value,
                            'status_danger': floraStatusDanger.value,
                            'description': floraDescription.value,
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
            return { successForm, errorForm, floraSlug, floraIDimageCover, floraIDimageHero, floraIDSstates, floraName, floraNameLat, floraLocation, floraStatusIucn, floraStatusDanger, floraDescription, editForm }
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