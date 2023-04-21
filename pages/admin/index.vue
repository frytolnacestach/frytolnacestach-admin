<template>
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

        <section class="t-section py-4">
            <div class="t-section__inner">
                <mNavAdmin :showNav="'full'" />
            </div>
        </section>
    </main>
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'

    export default defineComponent({
        name: 'AdminIndexPage',
        
        //COMPONENTS
        components: {
            oHero,
            mNavAdmin
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
