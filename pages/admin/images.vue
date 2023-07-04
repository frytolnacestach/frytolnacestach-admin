<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Generování obrázku" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
            <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">
                    <strong>Generováno pomocí:</strong><br>
                    <p>
                        "build:generated:brands": "node server/images-generated-brands.js"<br>
                        "build:generated:default": "node server/images-generated-default.js"<br>
                        "build:generated:events": "node server/images-generated-events.js"<br>
                        "build:generated:fauna": "node server/images-generated-fauna.js"<br>
                        "build:generated:flora": "node server/images-generated-flora.js"<br>
                        "build:generated:foods": "node server/images-generated-foods.js"<br>
                        "build:generated:main": "node server/images-generated-main.js"<br>
                        "build:generated:maps": "node server/images-generated-maps.js"<br>
                        "build:generated:travel_dictionaries": "node server/images-generated-travel_dictionaries.js"<br>
                        "build:generated:users": "node server/images-generated-users.js"<br>
                        "build:generated:videos": "node server/images-generated-videos.js"<br>
                        "build:generated:world-cities": "node server/images-generated-world-cities.js"<br>
                        "build:generated:world-continents": "node server/images-generated-world-continents.js"<br>
                        "build:generated:world-regions": "node server/images-generated-world-regions.js"<br>
                        "build:generated:world-spots": "node server/images-generated-world-spots.js"<br>
                        "build:generated:world-states": "node server/images-generated-world-states.js"
                    </p>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'
    import oHero from '@/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'AdminImagesPage',

        //COMPONENTS
        components: {
            mNavBreadcrumbs,
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
                        name: "Generování obrázků",
                        url: "",
                        status: "span"
                    },
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
                title: 'Generování velikostí obrázků',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Generování velikostí obrázků',
                ogTitle: 'Generování velikostí obrázků',
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