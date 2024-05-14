<template>
    <NuxtLayout name="admin">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <!-- SECTION - NAV Admin + HEADLINE -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <mNavAdmin :links="mNavAdminArrayMain"/>

                    <mHeadline :headline="'Blog'" styleGap=" mt-6" />
                    <mNavAdmin :links="mNavAdminArrayBlog"/>

                    <mHeadline :headline="'Seznamy pro místa'" styleGap=" mt-6" />
                    <mNavAdmin :links="mNavAdminArrayLists"/>

                    <mHeadline :headline="'Místa'" styleGap=" mt-6" />
                    <mNavAdmin :links="mNavAdminArrayPlaces"/>
                </div>
            </section>
            <!-- SECTION - NAV Admin + HEADLINE END -->

        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import mHeadline from '@/components/molecules/mHeadline.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminIndexPage',
        
        //COMPONENTS
        components: {
            mNavBreadcrumbs,
            mHeadline,
            mNavAdmin,
            oHero
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
                        name: "Obrázky",
                        url: "/admin/images"
                    },
                    {
                        id: 4,
                        name: "Uživatelé",
                        url: "/admin/users"
                    },
                    {
                        id: 5,
                        name: "Top místa",
                        url: "/admin/top-places"
                    },
                    {
                        id: 6,
                        name: "E-mail",
                        url: "/admin/email"
                    }
                ],
                mNavAdminArrayBlog: [
                    {
                        id: 1,
                        name: "Videa",
                        url: "/admin/videos"
                    },
                    {
                        id: 2,
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
                        name: "Regiony",
                        url: "/admin/places/regions"
                    },
                    {
                        id: 4,
                        name: "Města",
                        url: "/admin/places/cities"
                    },
                    {
                        id: 5,
                        name: "Místa",
                        url: "/admin/places/spots"
                    }
                ],
                mNavAdminArrayLists: [
                    {
                        id: 1,
                        name: "Flora",
                        url: "/admin/floras"
                    },
                    {
                        id: 2,
                        name: "Fauna",
                        url: "/admin/faunas"
                    },
                    {
                        id: 3,
                        name: "Značky",
                        url: "/admin/brands"
                    },
                    {
                        id: 4,
                        name: "Tradiční jídla",
                        url: "/admin/foods"
                    },
                    {
                        id: 5,
                        name: "Cestovatelský slovník",
                        url: "/admin/travel-dictionaries"
                    },
                    {
                        id: 6,
                        name: "Události",
                        url: "/admin/events"
                    },
                    {
                        id: 7,
                        name: "Řetězce",
                        url: "/admin/chains"
                    },
                    {
                        id: 8,
                        name: "Elektrické zásuvky",
                        url: "/admin/wall-sockets"
                    }
                ],
                mNavBreadcrumbsArray: [
                    {
                        id: 1,
                        name: "Administrace",
                        url: "",
                        status: "span"
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
            if ( !user || user === "undefined" ) {
                //Přesměrování
                const router = useRouter()
                router.push('/login')
            }
        }
    })
</script>
