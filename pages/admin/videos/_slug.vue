<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        video {{ this.edit.title }}
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
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/posts">Videa</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Editace videa - {{ this.edit.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section class="t-section my-4">
            <div class="t-section__inner">

                <div class="o-form-edit">
                    <div class="o-form-edit__outer">
                        <div class="o-form-edit__inner">
                            
                            <div class="o-flash-messages" v-if="errorForm">
                                <div class="o-flash-messages__items">
                                    <div class="o-flash-messages__item">
                                        <div class="o-flash-messages__outer">
                                            <div class="o-flash-messages__inner">
                                                <span class="o-flash-messages__text">{{ errorForm }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form class="o-form-edit__form" @submit.prevent="editForm">
                                <div class="o-form-edit__items">
                                    
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="edit.slug" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Platform:</span>
                                        </label>
                                        <input class="a-input" type="text" name="platform" v-model="edit.platform" />
                                    </div>
                             
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Title:</span>
                                        </label>
                                        <input class="a-input" type="text" name="title" v-model="edit.title" />
                                    </div>
  
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">URL:</span>
                                        </label>
                                        <input class="a-input" type="text" name="url" v-model="edit.url" />
                                    </div>
                                                                    
                                </div>
                                <div class="o-form-edit__buttons mt-1">
                                    <div class="o-form-edit__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Uložit úpravy</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'AdminPlatformsSlugPage',

        data() {
            return {
                edit: {
                    slug: '',
                    platform: '',
                    title: '',
                    url: ''
                },
                errorForm: '',
                video: ''
            }
        },
        methods: {
            async editForm(){
                try {
                    let result = await axios.post(`https://frytolnacestach-api.vercel.app/api/video-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Headers": "x-access-token, Origin, Content-Type, Accept",
                        },
                        method: 'POST',
                        body: {
                            'slug': this.edit.slug,
                            'name': this.edit.platform,
                            'perex': this.edit.title,
                            'url': this.edit.url
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                } catch (err) {
                    console.log(err)
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')

            if ( user && user != "undefined" ) {

            } else {
                this.$router.push('login')
            }

            this.edit.slug = this.video[0].slug
            this.edit.platform = this.video[0].platform
            this.edit.title = this.video[0].title
            this.edit.url = this.video[0].url
        },  
        async asyncData({ $axios, params }) {
            const video = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/video/${params.slug}`)
            return { video: video }
        }
    }
</script>