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
                                                <span class="m-label__name">Slug <span class="m-label__name-column">(slug)</span><span class="m-label__name-required">*</span></span>
                                                <span class="m-label__perex">Slug by měl mít stejné pojmenování jako název avšak ve formátu nazev-polozky</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="floraSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': floraIDimageCoverLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && floraIDimageCover" @load="handleImageCoverLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && floraIDimageCoverLoad !== floraIDimageCoverChange && (floraIDimageCover && floraIDimageCover !== null && floraIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && (!floraIDimageCover || floraIDimageCover === null || floraIDimageCover === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && floraIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="floraIDimageCoverLoad === floraIDimageCoverChange && !imageCover[0] && floraIDimageCover && floraIDimageCover !== null && floraIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && (!floraIDimageCover || floraIDimageCover === null || floraIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="floraIDimageCover" @input="handleFloraIDimageCoverChange" />
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': floraIDimageHeroLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && floraIDimageHero" @load="handleImageHeroLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && floraIDimageHeroLoad !== floraIDimageHeroChange && (floraIDimageHero && floraIDimageHero !== null && floraIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && (!floraIDimageHero || floraIDimageHero === null || floraIDimageHero === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && floraIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="floraIDimageHeroLoad === floraIDimageHeroChange && !imageHero[0] && floraIDimageHero && floraIDimageHero !== null && floraIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && (!floraIDimageHero || floraIDimageHero === null || floraIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="floraIDimageHero" @input="handleFloraIDimageHeroChange" />
                                            </div>
                                        </div>
                                        <!-- json -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">IDčka států <span class="m-label__name-column">(ids_states)</span></span>
                                            </label>

                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in floraIDSstatesArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeIDSstateInput(index)">
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
                                                            <button class="m-button-add__input" type="button" @click="addIDSstateInput">Přidat stát</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- other -->                            
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="floraName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název latinsky <span class="m-label__name-column">(name_lat)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="nameLat" v-model="floraNameLat" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Lokace výskytu <span class="m-label__name-column">(location)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="location" v-model="floraLocation" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Status IUCN <span class="m-label__name-column">(status_iucn)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="statusIusn" v-model="floraStatusIucn" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Status nebezpečnosti <span class="m-label__name-column">(status_danger)</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="statusDanger" v-model="floraStatusDanger" />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
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

    interface IDSstates {
        id: number
    }

    interface Flora {
        id_image_cover: number
        id_image_hero: number
        ids_states: IDSstates[]
        slug: string
        name: string
        name_lat: string
        location: string
        status_iucn: string
        status_danger: string
        description: string
    }

    interface ImageCover {
        id: number
        source: string
        name: string
        type: string
    }

    interface ImageHero {
        id: number
        source: string
        name: string
        type: string
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
                ],
                floraIDSstatesArray: [],
            }
        },

        methods: {
            updateBreadcrumbs() {
                const floraName = this.floraName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace flory - ${floraName}`
                }
            },
            // change image id
            handleFloraIDimageCoverChange() {
                this.floraIDimageCoverChange = this.floraIDimageCover
                this.floraIDimageCoverLoading = true
                this.loadImageCover()
            },
            handleFloraIDimageHeroChange() {
                this.floraIDimageHeroChange = this.floraIDimageHero
                this.floraIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.floraIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.floraIDimageHeroLoading = false;
            },
            // ids states
            addIDSstateInput() {
                this.floraIDSstatesArray.push({
                    id: null
                });
            },
            removeIDSstateInput(index: number) {
                this.floraIDSstatesArray.splice(index, 1);
            }
        },

        watch: {
            floraName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            floraIDSstates: function (newValue, oldValue) {
                try {
                    this.floraIDSstatesArray = JSON.parse(newValue);
                } catch (error) {
                    this.floraIDSstatesArray = [];
                }
            },
            floraIDSstatesArray: function (newValue, oldValue) {
                this.floraIDSstates = JSON.stringify(newValue);
            }
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
            const floraIDimageCover = ref(null)
            const floraIDimageHero = ref(null)
            const floraIDSstates = ref([])
            const floraIDSstatesArray = ref([])
            const floraName = ref('')
            const floraNameLat = ref('')
            const floraLocation = ref('')
            const floraStatusIucn = ref('')
            const floraStatusDanger = ref('')
            const floraDescription = ref('')
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const floraIDimageCoverLoad = ref(null)
            const floraIDimageCoverLoading = ref(false)
            const floraIDimageCoverChange = ref(null)
            const floraIDimageHeroLoad = ref(null)
            const floraIDimageHeroLoading = ref(false)
            const floraIDimageHeroChange = ref(null)

            //API - flora
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/flora/${route.params.slug}`)
                
                const Flora: Flora[] = JSON.parse(_rawValue)
                
                if (Array.isArray(Flora) && Flora.length > 0) {
                    floraSlug.value = Flora[0].slug;
                    floraIDimageCover.value = Flora[0].id_image_cover;
                    floraIDimageHero.value = Flora[0].id_image_hero;
                    floraIDSstates.value = Flora[0].ids_states ? JSON.stringify(Flora[0].ids_states) : JSON.stringify([]);
                    floraName.value = Flora[0].name;
                    floraNameLat.value = Flora[0].name_lat;
                    floraLocation.value = Flora[0].location;
                    floraStatusIucn.value = Flora[0].status_iucn;
                    floraStatusDanger.value = Flora[0].status_danger;
                    floraDescription.value = Flora[0].description;

                    // images load ids
                    floraIDimageCoverLoad.value = floraIDimageCover.value
                    floraIDimageCoverChange.value = floraIDimageCover.value
                    floraIDimageCoverLoading.value = true
                    floraIDimageHeroLoad.value = floraIDimageHero.value
                    floraIDimageHeroChange.value = floraIDimageHero.value
                    floraIDimageHeroLoading.value = true

                    // Načítání imageCover
                    if (floraIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${floraIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (floraIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${floraIDimageHero.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageHero.value = data);
                    } else {
                        imageHero.value = [];
                    }
                } else {

                }
            })()

            const loadImageCover = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${floraIDimageCover.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageCover.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageHero = async () => {
                try {
                    // Načítání imageHero
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${floraIDimageHero.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageHero.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

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
                            'ids_states': JSON.stringify(floraIDSstatesArray._value),
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
            return {
                successForm,
                errorForm,
                floraSlug,
                floraIDimageCover,
                floraIDimageHero,
                floraIDSstates,
                floraIDSstatesArray,
                floraName,
                floraNameLat,
                floraLocation,
                floraStatusIucn,
                floraStatusDanger,
                floraDescription,
                imageCover,
                imageHero,
                floraIDimageCoverLoad,
                floraIDimageCoverChange,
                floraIDimageCoverLoading,
                floraIDimageHeroLoad,
                floraIDimageHeroChange,
                floraIDimageHeroLoading,
                editForm,
                loadImageCover,
                loadImageHero
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