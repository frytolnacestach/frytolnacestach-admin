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
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        :name="'hero-130-'"
                        preset="default130"
                        alt="Hero image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        :name="'hero-180-'"
                        preset="default180"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default220"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default250"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default280"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default300"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default340"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default345"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default360"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default374"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default380"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default390"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default420"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default400"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default540"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default550"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default575"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default740"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default767"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default980"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default991"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default1139"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default1219"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default1399"
                        alt="Place image"
                    />
                    <nuxt-img
                        :src="`/storage/_default/hero.png`"
                        preset="default1920"
                        alt="Place image"
                    />
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
                ],
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