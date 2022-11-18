<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Administrace - Články
                    </h1>
                </div>
            </div>
        </div>

        <section class="t-section">
        
        </section>
    </main>
</template>

<script>

export default {
    name: 'AdminPostPage',

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    }
}
</script>
