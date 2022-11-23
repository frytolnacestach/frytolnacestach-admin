<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Platforma {{ this.edit.name }}
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
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/posts">Platformy</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Editace platformy - {{ this.edit.name }}</span>
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
                                            <span class="m-label__name">Name:</span>
                                        </label>
                                        <input class="a-input" type="text" name="name" v-model="edit.name" />
                                    </div>
                             
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex:</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="perex" v-model="edit.perex"></textarea>
                                    </div>
  
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">URL:</span>
                                        </label>
                                        <input class="a-input" type="text" name="url" v-model="edit.url" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Facts(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="facts" v-model="edit.facts"></textarea>
                                    </div>
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Date:</span>
                                        </label>
                                        <input class="a-input" type="text" name="date" v-model="edit.date" />
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
                    name: '',
                    perex: '',
                    url: '',
                    facts: '',
                    date: ''
                },
                errorForm: '',
                post: ''
            }
        },
        methods: {
            async editForm(){
                try {
                    let result = await axios.post(`https://frytolnacestach-api.vercel.app/api/platform-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Headers": "x-access-token, Origin, Content-Type, Accept",
                        },
                        method: 'POST',
                        body: {
                            'slug': this.edit.slug,
                            'name': this.edit.name,
                            'perex': this.edit.perex,
                            'url': this.edit.url,
                            'facts': this.edit.facts,
                            'date': this.edit.date
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

            this.edit.slug = this.platforms[0].slug
            this.edit.name = this.platforms[0].name
            this.edit.perex = this.platforms[0].perex
            this.edit.url = this.platforms[0].url
            this.edit.facts = this.platforms[0].facts
            this.edit.date = this.platforms[0].date
        },  
        async asyncData({ $axios }) {
            const platforms = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/platform/${params.slug}`)
            return { platforms }
        }
    }
</script>