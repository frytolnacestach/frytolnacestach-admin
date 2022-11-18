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

        <section class="t-section py-4">
            <div class="t-section__inner">
                <NavAdmin />
            </div>
        </section>
    </main>
</template>

<script>

import NavAdmin from '../../components/NavAdmin.vue'

export default {
    name: 'AdminPage',
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
