<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Vytvoření článku
                    </h1>
                </div>
            </div>
        </div>

        <section class="t-section my-4">
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
                                            <span class="m-label__name">Dir:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dir" v-model="create.dir" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Slug:</span>
                                        </label>
                                        <input class="a-input" type="text" name="slug" v-model="create.slug" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Path:</span>
                                        </label>
                                        <input class="a-input" type="text" name="path" v-model="create.path" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Date:</span>
                                        </label>
                                        <input class="a-input" type="text" name="date" v-model="create.date" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Data update:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dateUpdate" v-model="create.dateUpdate" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Date Information:</span>
                                        </label>
                                        <input class="a-input" type="text" name="dateInformation" v-model="create.dateInformation" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image List:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageList" v-model="create.imageList" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image Hero:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageHero" v-model="create.imageHero" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Image Map:</span>
                                        </label>
                                        <input class="a-input" type="text" name="imageMap" v-model="create.imageMap" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Url Youtube:</span>
                                        </label>
                                        <input class="a-input" type="text" name="urlYoutube" v-model="create.urlYoutube" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Url Wiki:</span>
                                        </label>
                                        <input class="a-input" type="text" name="urlWiki" v-model="create.urlWiki" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Url Map:</span>
                                        </label>
                                        <input class="a-input" type="text" name="urlMap" v-model="create.urlMap" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Title:</span>
                                        </label>
                                        <input class="a-input" type="text" name="title" v-model="create.title" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perex" v-model="create.perex" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Text Opener:</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="textOpener" v-model="create.textOpener"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Text Author:</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="textAuthor" v-model="create.textAuthor"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Text Wiki:</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="textWiki" v-model="create.textWiki"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Review Text:</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="reviewText" v-model="create.reviewText"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Review Value:</span>
                                        </label>
                                        <input class="a-input" type="text" name="reviewValue" v-model="create.reviewValue" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex Price:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perexPrice" v-model="create.perexPrice" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex Triplength:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perexTriplength" v-model="create.perexTriplength" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Perex Time:</span>
                                        </label>
                                        <input class="a-input" type="text" name="perexTime" v-model="create.perexTime" />
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Tags(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="tags" v-model="create.tags"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Locations(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="locations" v-model="create.locations"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Travels(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="travels" v-model="create.travels"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Prices(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="prices" v-model="create.prices"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Triplengths(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="triplengths" v-model="create.triplengths"></textarea>
                                    </div>
                                                                        
                                    <div class="o-form-create__item">
                                        <label class="m-label">
                                            <span class="m-label__name">Times(json):</span>
                                        </label>
                                        <textarea class="a-textarea" type="text" name="times" v-model="create.times"></textarea>
                                    </div>

                                </div>
                                <div class="o-form-create__buttons mt-1">
                                    <div class="o-form-create__button">
                                        <div class="m-button">
                                            <button class="m-button__input" type="submit">Vytvořit článek</button>
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
        name: 'AdminPostSlugPage',

        data() {
            return {
                create: {
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
                errorForm: ''
            }
        },
        methods: {
            async createForm(){
                try {
                    let result = await axios.post(`https://frytolnacestach-api.vercel.app/api/create-post`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Headers": "x-access-token, Origin, Content-Type, Accept",
                        },
                        method: 'POST',
                        body: {
                            'dir': this.create.dir,
                            'slug': this.create.slug,
                            'path': this.create.path,
                            'date': this.create.date,
                            'dataUpdate': this.create.dateUpdate,
                            'dataInformation': this.create.dateInformation,
                            'imageList': this.create.imageList,
                            'imageHero': this.create.imageHero,
                            'imageMap': this.create.imageMap,
                            'urlYoutube': this.create.urlYoutube,
                            'urlWiki': this.create.urlWiki,
                            'urlMap': this.create.urlMap,
                            'title': this.create.title,
                            'perex': this.create.perex,
                            'textOpener': this.create.textOpener,
                            'textAuthor': this.create.textAuthor,
                            'textWiki': this.create.textWiki,
                            'reviewText': this.create.reviewText,
                            'reviewValue': this.create.reviewValue,
                            'perexPrice': this.create.perexPrice,
                            'perexTriplength': this.create.perexTriplength,
                            'perexTime': this.create.perexTime,
                            'tags': this.create.tags,
                            'locations': this.create.locations,
                            'travels': this.create.travels,
                            'prices': this.create.prices,
                            'triplengths': this.create.triplengths,
                            'times': this.create.times
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                    if(result.data.status == 201) {
                        alert("Článek byl vytvořen")

                        this.$router.push(`/admin/post/${this.create.slug}`)
                    } else {
                        alert("Článek nebyl vytvořen")
                    }
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

            this.create.dir = ''
            this.create.slug = ''
            this.create.path = ''
            this.create.date = ''
            this.create.dateUpdate = ''
            this.create.dateInformation = ''
            this.create.imageList = ''
            this.create.imageHero = ''
            this.create.imageMap = ''
            this.create.urlYoutube = ''
            this.create.urlWiki = ''
            this.create.urlMap = ''
            this.create.title = ''
            this.create.perex = ''
            this.create.textOpener = ''
            this.create.textAuthor = ''
            this.create.textWiki = ''
            this.create.reviewText = ''
            this.create.reviewValue = ''
            this.create.perexPrice = ''
            this.create.perexTriplength = ''
            this.create.perexTime = ''
            this.create.tags = null
            this.create.locations = null
            this.create.travels = null
            this.create.prices = null
            this.create.triplengths = null
            this.create.times = null
        }
    }
</script>