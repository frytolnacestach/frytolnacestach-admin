<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="'Elektrická zásuvka ' + wallSocketName" />
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
                                            <input class="a-input" type="text" name="slug" v-model="wallSocketSlug" required />
                                        </div>
                                        <!-- ids -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku listu <span class="m-label__name-column">(id_image_cover)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': wallSocketIDimageCoverLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageCover[0].source + imageCover[0].name}.webp`" v-if="imageCover[0] && wallSocketIDimageCover" @load="handleImageCoverLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && wallSocketIDimageCoverLoad !== wallSocketIDimageCoverChange && (wallSocketIDimageCover && wallSocketIDimageCover !== null && wallSocketIDimageCover !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageCover[0] && (!wallSocketIDimageCover || wallSocketIDimageCover === null || wallSocketIDimageCover === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && wallSocketIDimageCover">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="wallSocketIDimageCoverLoad === wallSocketIDimageCoverChange && !imageCover[0] && wallSocketIDimageCover && wallSocketIDimageCover !== null && wallSocketIDimageCover !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageCover[0] && (!wallSocketIDimageCover || wallSocketIDimageCover === null || wallSocketIDimageCover === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="wallSocketIDimageCover" @input="handlewallSocketIDimageCoverChange" />
                                            </div>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">ID Obrázku detailu <span class="m-label__name-column">(id_image_hero)</span></span>
                                            </label>
                                            <div class="o-form-edit__image">
                                                <div class="o-form-edit__image-lazyload" :class="{'-loading': wallSocketIDimageHeroLoading}">
                                                    <img class="o-form-edit__image-file -small" :src="`https://image.frytolnacestach.cz/storage${imageHero[0].source + imageHero[0].name}.webp`" v-if="imageHero[0] && wallSocketIDimageHero" @load="handleImageHeroLoad">
                                                </div>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && wallSocketIDimageHeroLoad !== wallSocketIDimageHeroChange && (wallSocketIDimageHero && wallSocketIDimageHero !== null && wallSocketIDimageHero !== 0)">Byl vybrán nový obrázek</span>
                                                <span class="o-form-edit__image-text" v-if="imageHero[0] && (!wallSocketIDimageHero || wallSocketIDimageHero === null || wallSocketIDimageHero === 0)">Obrázek byl odebrán</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && wallSocketIDimageHero">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="wallSocketIDimageHeroLoad === wallSocketIDimageHeroChange && !imageHero[0] && wallSocketIDimageHero && wallSocketIDimageHero !== null && wallSocketIDimageHero !== 0">Vybraní obrázek neexistuje</span>
                                                <span class="o-form-edit__image-text" v-if="!imageHero[0] && (!wallSocketIDimageHero || wallSocketIDimageHero === null || wallSocketIDimageHero === 0)">Zatím nebyl vybrán žádní obrázek</span>
                                                <input class="a-input -c-gray" type="number" min="0" name="imageHero" v-model="wallSocketIDimageHero" @input="handlewallSocketIDimageHeroChange" />
                                            </div>
                                        </div>
                                        <!-- other -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Typ zásuvky <span class="m-label__name-column">(label)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="label" v-model="wallSocketLabel" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Název <span class="m-label__name-column">(name)</span><span class="m-label__name-required">*</span></span>
                                            </label>
                                            <input class="a-input" type="text" name="name" v-model="wallSocketName" required />
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Popis <span class="m-label__name-column">(description)</span></span>
                                            </label>
                                            <textarea class="a-textarea" type="text" name="description" v-model="wallSocketDescription"></textarea>
                                        </div>
                                        <!-- JSON - Seo Tags -->
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">SEO Tagy <span class="m-label__name-column">(seo_tags)</span></span>
                                            </label>
                                            <div class="o-form-edit__group">
                                                <div class="o-form-edit__group-items">
                                                    <div class="o-form-edit__group-item" v-for="(item, index) in wallSocketSeoTagsArray" :key="index">
                                                        <div class="m-button-remove">
                                                            <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                                                                Odstranit
                                                            </button>
                                                        </div>
                                                        <div class="o-form-edit__group-inputs">
                                                            <div class="o-form-edit__group-input">
                                                                <label class="m-label">Tag:</label>
                                                                <input class="a-input" type="text" v-model="item.tag" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="o-form-edit__buttons mt-1">
                                                    <div class="o-form-edit__button">
                                                        <div class="m-button-add">
                                                            <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

    interface seoTags {
        tag: string
    }

    interface wallSocket {
        id_image_cover: number
        id_image_hero: number
        seo_tags: seoTags[]
        slug: string
        label: string
        name: string
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
        name: 'AdminWallSocketsSlugPage',

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
                        name: "Elektrické zásuvky",
                        url: "/admin/wall-sockets",
                        status: "link"
                    },
                    {
                        id: 3,
                        name: `Editace elektrické zásuvky - NÁZEV ELEKTRICKÉ ZÁSUVKY`,
                        url: "",
                        status: "span"
                    }
                ],
                wallSocketSeoTagsArray: []
            }
        },

        methods: {
            updateBreadcrumbs() {
                const wallSocketName = this.wallSocketName
                const breadcrumb = this.mNavBreadcrumbsArray.find(item => item.id === 3)
                
                if (breadcrumb) {
                    breadcrumb.name = `Editace značky - ${wallSocketName}`
                }
            },
            // change image id
            handlewallSocketIDimageCoverChange() {
                this.wallSocketIDimageCoverChange = this.wallSocketIDimageCover
                this.wallSocketIDimageCoverLoading = true
                this.loadImageCover()
            },
            handlewallSocketIDimageHeroChange() {
                this.wallSocketIDimageHeroChange = this.wallSocketIDimageHero
                this.wallSocketIDimageHeroLoading = true
                this.loadImageHero()
            },
            handleImageCoverLoad() {
                this.wallSocketIDimageCoverLoading = false;
            },
            handleImageHeroLoad() {
                this.wallSocketIDimageHeroLoading = false;
            },
            // seo tags
            addSeoTagsInput() {
                this.wallSocketSeoTagsArray.push({
                    tag: ''
                })
            },
            removeSeoTagsInput(index: number) {
                this.wallSocketSeoTagsArray.splice(index, 1)
            }
        },

        watch: {
            wallSocketName: function (newValue, oldValue) {
                this.updateBreadcrumbs();
            },
            wallSocketSeoTags: function (newValue, oldValue) {
                try {
                    this.wallSocketSeoTagsArray = JSON.parse(newValue)
                } catch (error) {
                    this.wallSocketSeoTagsArray = []
                }
            },
            wallSocketSeoTagsArray: function (newValue, oldValue) {
                this.wallSocketSeoTags = JSON.stringify(newValue)
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Elektrická zásuvka - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Elektrická zásuvka - úprava',
                ogTitle: 'Elektrická zásuvka - úprava',
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
            const wallSocketSlug = ref('')
            const wallSocketIDimageCover = ref(null)
            const wallSocketIDimageHero = ref(null)
            const wallSocketSeoTags = ref([])
            const wallSocketSeoTagsArray = ref([])
            const wallSocketLabel = ref('')
            const wallSocketName = ref('')
            const wallSocketDescription = ref('')
            const imageCover = ref<ImageCover[]>([])
            const imageHero = ref<ImageHero[]>([])
            const wallSocketIDimageCoverLoad = ref(null)
            const wallSocketIDimageCoverLoading = ref(false)
            const wallSocketIDimageCoverChange = ref(null)
            const wallSocketIDimageHeroLoad = ref(null)
            const wallSocketIDimageHeroLoading = ref(false)
            const wallSocketIDimageHeroChange = ref(null)

            //API - wallSocket
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/wall-socket/${route.params.slug}`)
                
                const wallSocket: wallSocket[] = JSON.parse(_rawValue)
                
                if (Array.isArray(wallSocket) && wallSocket.length > 0) {
                    wallSocketSlug.value = wallSocket[0].slug;
                    wallSocketIDimageCover.value = wallSocket[0].id_image_cover;
                    wallSocketIDimageHero.value = wallSocket[0].id_image_hero;
                    wallSocketSeoTags.value = wallSocket[0].seo_tags ? JSON.stringify(wallSocket[0].seo_tags) : JSON.stringify([]);
                    wallSocketLabel.value = wallSocket[0].label;
                    wallSocketName.value = wallSocket[0].name;
                    wallSocketDescription.value = wallSocket[0].description;

                    // images load ids
                    wallSocketIDimageCoverLoad.value = wallSocketIDimageCover.value
                    wallSocketIDimageCoverChange.value = wallSocketIDimageCover.value
                    wallSocketIDimageCoverLoading.value = true
                    wallSocketIDimageHeroLoad.value = wallSocketIDimageHero.value
                    wallSocketIDimageHeroChange.value = wallSocketIDimageHero.value
                    wallSocketIDimageHeroLoading.value = true

                    // Načítání imageCover
                    if (wallSocketIDimageCover.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${wallSocketIDimageCover.value}`, {
                        method: 'GET'
                        }).then(res => res.json()).then(data => imageCover.value = data);
                    } else {
                        imageCover.value = [];
                    }

                    // Načítání imageHero
                    if (wallSocketIDimageHero.value) {
                        fetch(`${runTimeConfig.public.baseURL}/image-id/${wallSocketIDimageHero.value}`, {
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
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${wallSocketIDimageCover.value}`, {
                    method: 'GET'
                    }).then(res => res.json()).then(data => imageCover.value = data);
                } catch (err) {
                    console.log(err)
                    errorForm.value = "Chyba připojení k API"
                }
            }

            const loadImageHero = async () => {
                try {
                    // Načítání imageCover
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${wallSocketIDimageHero.value}`, {
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
                    await useFetch(`${runTimeConfig.public.baseURL}/wall-socket-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': wallSocketSlug.value,
                            'id_image_cover': wallSocketIDimageCover.value,
                            'id_image_hero': wallSocketIDimageHero.value,
                            'seo_tags': JSON.stringify(wallSocketSeoTagsArray._value),
                            'label': wallSocketLabel.value,
                            'name': wallSocketName.value,
                            'description': wallSocketDescription.value,
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
                wallSocketSlug,
                wallSocketIDimageCover,
                wallSocketIDimageHero,
                wallSocketSeoTags,
                wallSocketSeoTagsArray,
                wallSocketLabel,
                wallSocketName,
                wallSocketDescription,
                imageCover,
                imageHero,
                wallSocketIDimageCoverLoad,
                wallSocketIDimageCoverChange,
                wallSocketIDimageCoverLoading,
                wallSocketIDimageHeroLoad,
                wallSocketIDimageHeroChange,
                wallSocketIDimageHeroLoading,
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