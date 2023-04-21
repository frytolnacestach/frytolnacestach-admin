<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <oHero headline="Administrace - Videa" />

            <nav class="m-nav-breadcrumbs">
                <div class="m-nav-breadcrumbs__outer">
                    <div class="m-nav-breadcrumbs__inner">
                        <ul class="m-nav-breadcrumbs__items">
                            <li class="m-nav-breadcrumbs__item">
                                <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                            </li>
                            <li class="m-nav-breadcrumbs__item">
                                <span class="m-nav-breadcrumbs__span">Videa</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="t-section my-4">
                <div class="t-section__inner">
                    <nav class="o-nav-operation">
                        <div class="o-nav-operation__outer">
                            <div class="o-nav-operation__inner">
                                <ul class="o-nav-operation__items">
                                    <li class="o-nav-operation__item">
                                        <div class="o-nav-admin__item-container">
                                            <NuxtLink class="o-nav-operation__title" to="/admin/videos/create">Přidat video</NuxtLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

            <section class="t-section mb-8">
                <div class="t-section__inner">
                    <div class="o-admin-list">
                        <div class="o-admin-list__outer">
                            <div class="o-admin-list__inner">
                                <div class="o-admin-list__items">
                                    <div v-for="video  in videos" :key="video.id" class="o-admin-list__item">
                                        <h3 class="o-admin-list__title">
                                            <NuxtLink class="o-admin-list__title-link" :to="`/admin/videos/${video.slug}`">{{ video.title}}</NuxtLink>
                                        </h3>
                                        <p class="o-admin-list__perex">{{ video.url }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'

    interface Video {
        id: number
        title: string
        slug: string
        url: string
    }

    export default defineComponent({
        name: 'AdminVideosIndexPage',

        //COMPONENTS
        components: {
            oHero
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Videa - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Videa - výpis',
                ogTitle: 'Videa - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig();
            const videos = ref<Video[]>([])

            //API - Video
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/videos`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => videos.value = data);
            })

            //RETURN
            return { videos }
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
