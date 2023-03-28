<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        stát {{ this.edit.name }}
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
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places/states">Státy</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Editace státu - {{ this.edit.name }}</span>
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
                                            <span class="m-label__name">Jméno:</span>
                                        </label>
                                        <input class="a-input" type="text" name="mpz" v-model="edit.name" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">MPZ:</span>
                                        </label>
                                        <input class="a-input" type="text" name="mpz" v-model="edit.mpz" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">TLD:</span>
                                        </label>
                                        <input class="a-input" type="text" name="tld" v-model="edit.tld" />
                                    </div>
                             
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Rozloha:</span>
                                        </label>
                                        <input class="a-input" type="text" name="area" v-model="edit.area" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Populace:</span>
                                        </label>
                                        <input class="a-input" type="text" name="population" v-model="edit.population" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Informace (Chat GPT):</span>
                                        </label>
                                        <input class="a-input" type="text" name="information_chatgpt" v-model="edit.information_chatgpt" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image (Cover):</span>
                                        </label>
                                        <input class="a-input" type="text" name="image_cover" v-model="edit.image_cover" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image (Hero):</span>
                                        </label>
                                        <input class="a-input" type="text" name="image_hero" v-model="edit.image_hero" />
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
        name: 'AdminPlacesStatesSlugPage',

        data() {
            return {
                edit: {
                    slug: '',
                    mpz: '',
                    tld: '',
                    name: '',
                    area: '',
                    population: '',
                    information_chatgpt: '',
                    image_cover: '',
                    image_hero: ''
                },
                errorForm: '',
                platform: ''
            }
        },
        methods: {
            async editForm(){
                try {
                    let result = await axios.post(`https://frytolnacestach-api.vercel.app/api/places-state-edit`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Headers": "x-access-token, Origin, Content-Type, Accept",
                        },
                        method: 'POST',
                        body: {
                            'slug': this.edit.slug,
                            'mpz': this.edit.mpz,
                            'tld': this.edit.tld,
                            'name': this.edit.name,
                            'area': this.edit.area,
                            'population': this.edit.population,
                            'information_chatgpt': this.edit.information_chatgpt,
                            'image_cover': this.edit.image_cover,
                            'image_hero': this.edit.image_hero
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

            this.edit.slug = this.placesStates[0].slug
            this.edit.mpz = this.placesStates[0].mpz
            this.edit.tld = this.placesStates[0].tld
            this.edit.name = this.placesStates[0].name
            this.edit.area = this.placesStates[0].area
            this.edit.population = this.placesStates[0].population
            this.edit.information_chatgpt = this.placesStates[0].information_chatgpt
            this.edit.image_cover = this.placesStates[0].image_cover
            this.edit.image_hero = this.placesStates[0].image_hero
        },  
        async asyncData({ $axios, params }) {
            const placesStates = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-state/${params.slug}`)
            return { placesStates: placesStates }
        }
    }
</script>