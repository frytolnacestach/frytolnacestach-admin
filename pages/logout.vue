<template>
    <NuxtLayout name="default">
        <main class="t-main -pt-menu">
            <!-- SECTION - HERO -->
            <oHero headline="Odhlášení" />
            <!-- SECTION - HERO END -->
        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oHero from '../components/organisms/oHero.vue'

    export default defineComponent({
        name: 'LogoutPage',

        //COMPONENTS
        components: {
            oHero
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'default'
            })

            //META HEAD
            useHead({
                title: 'Odhlášení z administrace',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Odhlášení z administrace',
                ogTitle: 'Odhlášení z administrace',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })
        },

        mounted() {
            //Nastavení user-info
            localStorage.setItem("user-info","undefined")
            
            //Delete cookies
            document.cookie = "FNCADMINemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCADMINpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"

            //Přesměrování
            const router = useRouter()
            router.push('/login')
        }
    })
</script>
