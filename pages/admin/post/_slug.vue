<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Článek
                    </h1>
                </div>
            </div>
        </div>

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
                                            <span class="m-label__name">Dir:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dir" v-model="edit.dir" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="edit.slug" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Path:</span>
                                        </label>
                                        <input class="a-input" type="text" name="path" v-model="edit.path" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Date:</span>
                                        </label>
                                        <input class="a-input" type="text" name="date" v-model="edit.date" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Data update:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dateUpdate" v-model="edit.dateUpdate" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Date Information:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dateInformation" v-model="edit.dateInformation" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image List:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageList" v-model="edit.imageList" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image Hero:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageHero" v-model="edit.imageHero" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image Map:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageMap" v-model="edit.imageMap" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Url Youtube:</span>
                                        </label>
                                        <input class="a-input" type="text" name="urlYoutube" v-model="edit.urlYoutube" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Url Wiki:</span>
                                        </label>
                                        <input class="a-input" type="text" name="urlWiki" v-model="edit.urlWiki" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Url Map:</span>
                                        </label>
                                        <input class="a-input" type="text" name="urlMap" v-model="edit.urlMap" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Title:</span>
                                        </label>
                                        <input class="a-input" type="text" name="title" v-model="edit.title" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perex" v-model="edit.perex" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Text Opener:</span>
                                        </label>
                                        <input class="a-input" type="text" name="textOpener" v-model="edit.textOpener" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Text Author:</span>
                                        </label>
                                        <input class="a-input" type="text" name="textAuthor" v-model="edit.textAuthor" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Text Wiki:</span>
                                        </label>
                                        <input class="a-input" type="text" name="textWiki" v-model="edit.textWiki" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Review Text:</span>
                                        </label>
                                        <input class="a-input" type="text" name="reviewText" v-model="edit.reviewText" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Review Value:</span>
                                        </label>
                                        <input class="a-input" type="text" name="reviewValue" v-model="edit.reviewValue" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex Price:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perexPrice" v-model="edit.perexPrice" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex Triplength:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perexTriplength" v-model="edit.perexTriplength" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex Time:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perexTime" v-model="edit.perexTime" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Tags:</span>
                                        </label>
                                        <input class="a-input" type="text" name="tags" v-model="edit.tags" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Locations:</span>
                                        </label>
                                        <input class="a-input" type="text" name="locations" v-model="edit.locations" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Travels:</span>
                                        </label>
                                        <input class="a-input" type="text" name="travels" v-model="edit.travels" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Prices:</span>
                                        </label>
                                        <input class="a-input" type="text" name="prices" v-model="edit.prices" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Triplengths:</span>
                                        </label>
                                        <input class="a-input" type="text" name="triplengths" v-model="edit.triplengths" />
                                    </div>
                                                                        
                                    <div class="o-form-edit__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Times:</span>
                                        </label>
                                        <input class="a-input" type="text" name="times" v-model="edit.times" />
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

    export default {
        name: 'AdminPostSlugPage',

        data() {
            return {
                edit: {
                    dir: '',
                    slug: '',
                    path: '',
                    date: '',
                    dateUpdate: '',
                    dateInformation: '',
                    imageList: '',
                    imageHero: '',
                    imageMap: '',
                    urlYoutube: '',
                    urlWiki: '',
                    urlMap: '',
                    title: '',
                    perex: '',
                    textOpener: '',
                    textAuthor: '',
                    textWiki: '',
                    reviewText: '',
                    reviewValue: '',
                    perexPrice: '',
                    perexTriplength: '',
                    perexTime: '',
                    tags: '',
                    locations: '',
                    travels: '',
                    prices: '',
                    triplengths: '',
                    times: ''
                },
                errorForm: '',
                post: ''
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')

            if ( user && user != "undefined" ) {

            } else {
                this.$router.push('login')
            }

            this.edit.dir = this.post[0].dir
            this.edit.slug = this.post[0].slug
            this.edit.path = this.post[0].path
            this.edit.date = this.post[0].date
            this.edit.dateUpdate = this.post[0].dateUpdate
            this.edit.dateInformation = this.post[0].dateInformation
            this.edit.imageList = this.post[0].imageList
            this.edit.imageHero = this.post[0].imageHero
            this.edit.imageMap = this.post[0].imageMap
            this.edit.urlYoutube = this.post[0].urlYoutube
            this.edit.urlWiki = this.post[0].urlWiki
            this.edit.urlMap = this.post[0].urlMap
            this.edit.title = this.post[0].title
            this.edit.perex = this.post[0].perex
            this.edit.textOpener = this.post[0].textOpener
            this.edit.textAuthor = this.post[0].textAuthor
            this.edit.textWiki = this.post[0].textWiki
            this.edit.reviewText = this.post[0].reviewText
            this.edit.reviewValue = this.post[0].reviewValue
            this.edit.perexPrice = this.post[0].perexPrice
            this.edit.perexTriplength = this.post[0].perexTriplength
            this.edit.perexTime = this.post[0].perexTime
            this.edit.tags = this.post[0].tags
            this.edit.locations = this.post[0].locations
            this.edit.travels = this.post[0].travels
            this.edit.prices = this.post[0].prices
            this.edit.triplengths = this.post[0].triplengths
            this.edit.times = this.post[0].times
        },  

        async asyncData({ $axios, params }) {
            const post = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/post/${params.slug}`)
            return { post: post }
        }
    }
</script>