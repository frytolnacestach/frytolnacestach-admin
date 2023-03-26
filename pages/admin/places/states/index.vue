<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Administrace - Státy
                    </h1>
                </div>
            </div>
        </div>

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
                            <span class="m-nav-breadcrumbs__span">Státy</span>
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
                                        <NuxtLink class="o-nav-operation__title" to="/admin/places/states/create">Přidaní státu</NuxtLink>
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
                           
                            <div class="o-admin-list__items" v-if="placesStates.length">
                                <div v-for="placesState in placesStates" :key="placesState.id" class="o-admin-list__item">
                                    <h3 class="o-admin-list__title">
                                        <NuxtLink class="o-admin-list__title-link" :to="`/admin/places/states/${placesState.slug}`">{{ placesState.name}}</NuxtLink>
                                    </h3>
                                    <p class="o-admin-list__perex">
                                        <strong>
                                            Kontinent: {{ placesCity.id_continent }}<br>
                                        </strong>
                                        ____<br>
                                        MPZ: {{ placesState.mpz }}<br>
                                        Rozloha: {{ placesState.area }} m2<br>
                                        Populace: {{ placesState.population }}<br>
                                    </p>
                                </div>
                            </div>

                            <div class="o-admin-list__no-items" v-if="!placesStates.length">Není tu žádná položka</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    name: 'AdminPlacesStatesPage',

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    },
    async asyncData({ $axios }) {
        const placesStates = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states`)
        return { placesStates }
    }
}
</script>
