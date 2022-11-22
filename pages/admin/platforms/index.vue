<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Administrace - Platformy
                    </h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: 'AdminPlatformsPage',

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    },
    async asyncData({ $axios }) {
        const platforms = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/platforms`)
        return { platforms }
    }
}
</script>
