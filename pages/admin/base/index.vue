<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Administrace - základní údaje
                    </h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: 'AdminBasePage',

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    },
    async asyncData({ $axios }) {
        const base = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/base`)
        return { base }
    }
}
</script>
