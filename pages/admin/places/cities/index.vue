<template>
    <main class="t-main">
        <oHero headline="Administrace - Města" />

        <nav class="m-nav-breadcrumbs">
            <div class="m-nav-breadcrumbs__outer">
                <div class="m-nav-breadcrumbs__inner">
                    <ul class="m-nav-breadcrumbs__items">
                        <li class="m-nav-breadcrumbs__item">
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/">Administrace</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places">Místa</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Města</span>
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
                                        <NuxtLink class="o-nav-operation__title" to="/admin/places/cities/create">Přidaní města</NuxtLink>
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
                           
                            <div class="o-admin-list__items" v-if="placesCities.length">
                                <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-admin-list__item">
                                    <h3 class="o-admin-list__title">
                                        <NuxtLink class="o-admin-list__title-link" :to="`/admin/places/cities/${placesCity.slug}`">{{ placesCity.name}}</NuxtLink>
                                    </h3>
                                    <p class="o-admin-list__perex">
                                        <strong>
                                            Kontinent: {{ placesCity.id_continent }}<br>
                                            Stát: {{ placesCity.id_state }}<br>
                                            Administrativní celek: {{ placesCity.id_administrative_unit }}<br>
                                            Kraj: {{ placesCity.id_districts }}<br>
                                        </strong>
                                        ____<br>
                                        Rozloha: {{ placesCity.area }} km2<br>
                                        Populace: {{ placesCity.population }}<br>
                                        Nadmořká výška: {{ placesCity.altitude }}<br>
                                    </p>
                                </div>
                            </div>

                            <div class="o-admin-list__no-items" v-if="!placesCities.length">Není tu žádná položka</div>
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
        name: 'AdminPlacesCitiesSlugPage',

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
                title: 'Místa - Města - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Místa - Města - výpis',
                ogTitle: 'Místa - Města - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const placesCities = ref([])

            //API - placesCities
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/places-cities`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => placesCities.value = data);
            })

            //RETURN
            return { placesCities }
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
