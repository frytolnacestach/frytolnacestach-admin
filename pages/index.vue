<template>
    <NuxtLayout name="default">
        <main class="t-main">
            <!-- SECTION - HERO big -->
            <oHeroBig headline="ADMIN" perex="Frytol na cestách" />
            <!-- SECTION - HERO big END -->
        </main>
    </NuxtLayout>
</template>

<script lang="ts">

    import oHeroBig from '../components/organisms/oHeroBig.vue'

    export default defineComponent({
        name: 'IndexPage',

        //COMPONENTS
        components: {
            oHeroBig
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'default'
            })

            //META HEAD
            useHead({
                title: 'Administrace webu Frytol na cestách',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Administrace webu Frytol na cestách',
                ogTitle: 'Administrace webu Frytol na cestách',
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
                console.log("Nejsi přihlášen")
            }
        }
    })
</script>