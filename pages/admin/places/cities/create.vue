<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Přidání nového města
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
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places/cities">Města</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Přidání nového města</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section class="t-section mt-4 mb-8">
            <div class="t-section__inner">

                <div class="o-form-create">
                    <div class="o-form-create__outer">
                        <div class="o-form-create__inner">
                            
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

                            <form class="o-form-create__form" @submit.prevent="createForm">
                                <div class="o-form-create__items">
                                    
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="create.slug" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Name:</span>
                                        </label>
                                        <input class="a-input" type="text" name="name" v-model="create.name" />
                                    </div>

                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Area:</span>
                                        </label>
                                        <input class="a-input" type="text" name="area" v-model="create.area" />
                                    </div>
  
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Population:</span>
                                        </label>
                                        <input class="a-input" type="text" name="population" v-model="create.population" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Nadmořká výška:</span>
                                        </label>
                                        <input class="a-input" type="text" name="altitude" v-model="create.altitude" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Informace (Chat GPT):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="information_chatgpt" v-model="create.information_chatgpt"></textarea>
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image (Cover):</span>
                                        </label>
                                        <input class="a-input" type="text" name="image_cover" v-model="create.image_cover" />
                                    </div>

                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image (Hero):</span>
                                        </label>
                                        <input class="a-input" type="text" name="image_hero" v-model="create.image_hero" />
                                    </div>

                                </div>
                                <div class="o-form-create__buttons mt-1">
                                    <div class="o-form-create__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Vytvořit město</button>
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
        name: 'AdminPlacesCitiesCreatePage',

        data() {
            return {
                create: {
                    slug: '',
                    name: '',
                    area: '',
                    population: '',
                    altitude: '',
                    information_chatgpt: '',
                    image_cover: '',
                    image_hero: ''
                },
                errorForm: ''
            }
        },
        methods: {
            async createForm(){
                try {
                    let result = await axios.post(`https://frytolnacestach-api.vercel.app/api/places-city-create`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Headers": "x-access-token, Origin, Content-Type, Accept",
                        },
                        method: 'POST',
                        body: {
                            'slug': this.create.slug,
                            'name': this.create.name,
                            'area': this.create.area,
                            'population': this.create.population,
                            'altitude': this.create.altitude,
                            'information_chatgpt': this.create.information_chatgpt,
                            'image_cover': this.create.image_cover,
                            'image_hero': this.create.image_hero
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        this.$router.push(`/admin/places/cities/${this.create.slug}`)
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

            this.create.slug = ''
            this.create.name = ''
            this.create.area = ''
            this.create.population = ''
            this.create.altitude = ''
            this.create.information_chatgpt = ''
            this.create.image_cover = ''
            this.create.image_hero = ''
        }
    }
</script>