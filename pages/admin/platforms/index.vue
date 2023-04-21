<template>
    <main class="t-main">
        <oHero headline="Administrace - Platformy" />

        <nav class="m-nav-breadcrumbs">
            <div class="m-nav-breadcrumbs__outer">
                <div class="m-nav-breadcrumbs__inner">
                    <ul class="m-nav-breadcrumbs__items">
                        <li class="m-nav-breadcrumbs__item">
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Platformy</span>
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
                                        <NuxtLink class="o-nav-operation__title" to="/admin/platforms/create">Přidat platformu</NuxtLink>
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
                                <div v-for="platform in platforms" :key="platform.id" class="o-admin-list__item">
                                    <h3 class="o-admin-list__title">
                                        <NuxtLink class="o-admin-list__title-link" :to="`/admin/platforms/${platform.slug}`">{{ platform.name}}</NuxtLink>
                                    </h3>
                                    <p class="o-admin-list__perex">{{ platform.perex }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminPlatformsIndexPage',

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
                title: 'Platformy - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Platformy - výpis',
                ogTitle: 'Platformy - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const platforms = ref([])

            //API - Platforms
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/platforms`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => platforms.value = data);
            })

            //RETURN
            return { platforms }
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
