<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <oHero headline="Administrace" />

            <nav class="m-nav-breadcrumbs">
                <div class="m-nav-breadcrumbs__outer">
                    <div class="m-nav-breadcrumbs__inner">
                        <ul class="m-nav-breadcrumbs__items">
                            <li class="m-nav-breadcrumbs__item">
                                <span class="m-nav-breadcrumbs__span">Administrace</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- SECTION - NAV Admin + HEADLINE -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <mNavAdmin :links="mNavAdminArrayMain"/>

                    <mHeadline :headline="'Místa'" styleGap=" mt-6" />
                    <mNavAdmin :links="mNavAdminArrayPlaces"/>
                </div>
            </section>
            <!-- SECTION - NAV Admin + HEADLINE END -->

        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'
    import mHeadline from '@/components/molecules/mHeadline.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'

    export default defineComponent({
        name: 'AdminIndexPage',
        
        //COMPONENTS
        components: {
            oHero,
            mHeadline,
            mNavAdmin
        },

        data() {
            return {
                mNavAdminArrayMain: [
                    {
                        id: 1,
                        name: "Základní informace",
                        url: "/admin/base"
                    },
                    {
                        id: 2,
                        name: "Platformy",
                        url: "/admin/platforms"
                    },
                    {
                        id: 3,
                        name: "Videa",
                        url: "/admin/videos"
                    },
                    {
                        id: 4,
                        name: "Články",
                        url: "/admin/posts"
                    }
                ],
                mNavAdminArrayPlaces: [
                    {
                        id: 1,
                        name: "Kontinenty",
                        url: "/admin/places/continents"
                    },
                    {
                        id: 2,
                        name: "Státy",
                        url: "/admin/places/states"
                    },
                    {
                        id: 3,
                        name: "Města",
                        url: "/admin/places/cities"
                    }
                ]
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Rozcestník administrace',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Rozcestník administrace',
                ogTitle: 'Rozcestník administrace',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })
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
