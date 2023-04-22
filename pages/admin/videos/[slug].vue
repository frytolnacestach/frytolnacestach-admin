<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero :headline="videoTitle" />
            <!-- SECTION - HERO END -->

            <nav class="m-nav-breadcrumbs">
                <div class="m-nav-breadcrumbs__outer">
                    <div class="m-nav-breadcrumbs__inner">
                        <ul class="m-nav-breadcrumbs__items">
                            <li class="m-nav-breadcrumbs__item">
                                <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                            </li>
                            <li class="m-nav-breadcrumbs__item">
                                <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/videos">Videa</NuxtLink>
                            </li>
                            <li class="m-nav-breadcrumbs__item">
                                <span class="m-nav-breadcrumbs__span">Editace videa - {{ videoTitle }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="t-section my-4">
                <div class="t-section__inner">

                    <div class="o-form-edit">
                        <div class="o-form-edit__outer">
                            <div class="o-form-edit__inner">
                                
                                <!-- SECTION - FlashMassages -->
                                <oFlashMessages :text="errorForm" styleThema=" -error" />
                                <oFlashMessages :text="successForm" styleThema=" -success" />
                                <!-- SECTION - FlashMassages END -->

                                <form class="o-form-edit__form" @submit.prevent="editForm">
                                    <div class="o-form-edit__items">
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Slug:</span>
                                            </label>
                                            <input class="a-input" type="text" name="slug" v-model="videoSlug" />
                                        </div>
                                        <div class="o-form-create__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Platform:</span>
                                            </label>
                                            <select class="m-select" name="platform" v-model="videoPlatform">
                                                <option value="">- Vyber platformu -</option>
                                                <option v-for="platform in platforms" :key="platform.id" :value="platform.id">{{platform.name}}</option>
                                            </select>
                                        </div>
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">Title:</span>
                                            </label>
                                            <input class="a-input" type="text" name="title" v-model="videoTitle" />
                                        </div>
    
                                        <div class="o-form-edit__item">
                                            <label class="m-label">
                                                <span class="m-label__name">URL:</span>
                                            </label>
                                            <input class="a-input" type="text" name="url" v-model="videoUrl" />
                                        </div>               
                                    </div>
                                    <div class="o-form-edit__buttons mt-1">
                                        <div class="o-form-edit__button">
                                            <div class="m-button">
                                                <button class="m-button__input" type="submit">Uložit úpravy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oFlashMessages from '@/components/organisms/oFlashMessages.vue'
    import oHero from '@/components/organisms/oHero.vue'

    interface Platform {
        id: number
        name: string
    }

    interface Video {
        title: string
        platform: string
        slug: string
        url: string
    }

    export default defineComponent({
        name: 'AdminVideosSlugPage',

        //COMPONENTS
        components: {
            oFlashMessages,
            oHero
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Videa - úprava',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Videa - úprava',
                ogTitle: 'Videa - úprava',
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
            const platforms = ref<Platform[]>([])
            const videoSlug = ref('')
            const videoPlatform = ref('')
            const videoTitle = ref('')
            const videoUrl = ref('')

            //API - Video
            ;(async () => {
                const { data: { _rawValue } } = await useFetch(`${runTimeConfig.public.baseURL}/video/${route.params.slug}`)
                
                const video: Video[] = JSON.parse(_rawValue)
                
                if (Array.isArray(video) && video.length > 0 && 'slug' in video[0] && 'platform' in video[0] && 'title' in video[0] && 'url' in video[0]) {
                    videoSlug.value = video[0].slug;
                    videoPlatform.value = video[0].platform;
                    videoTitle.value = video[0].title;
                    videoUrl.value = video[0].url;
                } else {

                }
            })()

            //API - Platform
            ;(async () => {
                fetch(`${runTimeConfig.public.baseURL}/platforms`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => platforms.value = data);
            })()

            //FORM - edit
            const editForm = async () => {
                try {
                    await useFetch(`${runTimeConfig.public.baseURL}/video-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
                            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH"
                        },
                        method: 'POST',
                        body: JSON.stringify({
                            'slug': videoSlug.value,
                            'platform': videoPlatform.value,
                            'title': videoTitle.value,
                            'url': videoUrl.value
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
            return { successForm, errorForm, videoSlug, videoPlatform, videoTitle, videoUrl, platforms, editForm }
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