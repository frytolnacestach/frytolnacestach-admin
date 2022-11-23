<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Administrace - Videa
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
                            <span class="m-nav-breadcrumbs__span">Videa</span>
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
                                        <NuxtLink class="o-nav-operation__title" to="/admin/videos/create">Přidat video</NuxtLink>
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
                            <div class="o-admin-list__items">
                                <div v-for="video in videos" :key="video.id" class="o-admin-list__item">
                                    <h3 class="o-admin-list__title">
                                        <NuxtLink class="o-admin-list__title-link" :to="`/admin/videos/${video.slug}`">{{ video.title}}</NuxtLink>
                                    </h3>
                                    <p class="o-admin-list__perex">{{ video.url }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    name: 'AdminVideosPage',

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    },
    async asyncData({ $axios }) {
        const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos`)
        return { videos }
    }
}
</script>
