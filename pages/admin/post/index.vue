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

        <section class="t-section my-4">
            <div class="t-section__inner">
                <nav class="o-nav-operation">
                    <div class="o-nav-operation__outer">
                        <div class="o-nav-operation__inner">
                            <ul class="o-nav-operation__items">
                                <li class="o-nav-operation__item">
                                    <NuxtLink class="o-nav-operation__title" to="/admin/post/create">Vytvoření příspěvku</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="o-article-list">
                    <div class="o-article-list__outer">
                        <div class="o-article-list__inner">
                            <div class="o-article-list__items">
                                <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                                    <h3 class="o-article-list__title">
                                        <NuxtLink class="o-article-list__title-link" :to="`/admin/post/${post.slug}`">{{ post.title }}</NuxtLink>
                                    </h3>
                                    <p class="o-article-list__perex">{{ post.perex }}</p>
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
    name: 'AdminPostPage',

    mounted() {
        let user = localStorage.getItem('user-info')

        if ( user && user != "undefined" ) {

        } else {
            this.$router.push('login')
        }
    },
    async asyncData({ $axios }) {
        const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts`)
        return { posts }
    }
}
</script>
