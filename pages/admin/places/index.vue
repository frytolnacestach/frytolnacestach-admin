<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Administrace
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
                            <span class="m-nav-breadcrumbs__span">Místa</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section class="t-section py-4">
            <div class="t-section__inner">
                <NavAdmin :showNav="2" />
            </div>
        </section>
    </main>
</template>

<script>

import NavAdmin from '../../../components/NavAdmin.vue'

export default {
    name: 'AdminPlacesPage',
    components: {
        NavAdmin
    },

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    }
}
</script>
