<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="languagePhrasesArray && languagePhrasesArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in languagePhrasesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeLanguagePhrasesInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Česky" nameDB="czech" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.czech" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Překlad" nameDB="foreign_original" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.foreign_original" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Překlad v latince" nameDB="foreign_latin" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.foreign_latin" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Fonetický přepis" nameDB="phonetic_transcription" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.phonetic_transcription" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author create" nameDB="author_create" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.author_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author update" nameDB="author_update" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.author_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date create" nameDB="date_create" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date update" nameDB="date_update" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_update" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((languagePhrasesArray && languagePhrasesArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addLanguagePhrasesInput">Přidat frázy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputslanguagePhrasesComponent',

        //COMPONENTS
        components: {
            mLabel
        },

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                languagePhrasesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
            }
        },

        methods: {
            isValidJSON(value) {
                try {
                    JSON.parse(value)
                    return true
                } catch (e) {
                    return false
                }
            },
            addLanguagePhrasesInput() {
                this.languagePhrasesArray.push({
                    czech: '',
                    foreign_original: '',
                    foreign_latin: '',
                    phonetic_transcription: '',
                    author_create: null,
                    author_update: null,
                    date_create: '',
                    date_update: ''
                })
                this.$emit('language-phrases', this.languagePhrasesArray)
            },
            removeLanguagePhrasesInput(index) {
                this.languagePhrasesArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.languagePhrasesArray = JSON.parse(this.value)
            },
            languagePhrasesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('language-phrases', this.languagePhrasesArray)
                }
            }
        }
    })
</script>