<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Přidání nového kontinentu
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
                            <NuxtLink class="m-nav-breadcrumbs__link" to="/admin/places/continents">Kontinenty</NuxtLink>
                        </li>
                        <li class="m-nav-breadcrumbs__item">
                            <span class="m-nav-breadcrumbs__span">Přidání nového kontinentu</span>
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

                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Population density:</span>
                                        </label>
                                        <input class="a-input" type="text" name="populationDensity" v-model="create.populationDensity" />
                                    </div>

                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">States</span>
                                        </label>
                                        <input class="a-input" type="text" name="number_states" v-model="create.number_states" />
                                    </div>

                                </div>
                                <div class="o-form-create__buttons mt-1">
                                    <div class="o-form-create__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Vytvořit kontinent</button>
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
        name: 'AdminPlacesContinentsCreatePage',

        data() {
            return {
                create: {
                    slug: '',
                    name: '',
                    area: '',
                    population: '',
                    populationDensity: '',
                    number_states: ''
                },
                errorForm: ''
            }
        },
        methods: {
            async createForm(){
                try {
                    let result = await axios.post(`https://frytolnacestach-api.vercel.app/api/places-continent-create`, {
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
                            'populationDensity': this.create.populationDensity,
                            'number_states': this.create.number_states
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        this.$router.push(`/admin/places/continents/${this.create.slug}`)
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
            this.create.populationDensity = '',
            this.create.number_states = ''
        }
    }
</script>