<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="informationAuthor && informationAuthor.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in informationAuthor" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Text" nameDB="text" perex="" type="json" :required=false />
                        <textarea class="a-textarea -json" type="text" v-model="item.text"></textarea>
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
        <div :class="'o-form-item__buttons' + ((informationAuthor && informationAuthor.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addInformationAuthorInput" v-if="informationAuthor.length < inputsMax">Přidat text</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsInformationAuthorComponent',

        //COMPONENTS
        components: {
            mLabel
        },

        props: {
            value: {
                type: Array,
                required: true
            },
            inputsMax: {
                type: Number,
                required: false
            }
        },

        data() {
            return {
                informationAuthor: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addInformationAuthorInput() {
                if (this.informationAuthor.length < this.inputsMax) {
                    this.informationAuthor.push({
                        text: '',
                        author_create: '',
                        author_update: '',
                        date_create: '',
                        date_update: ''
                    })
                    this.$emit('information-author', this.informationAuthor)
                }
            },
            removeInformationAuthorInput(index) {
                this.informationAuthor.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.informationAuthor = JSON.parse(this.value)
            },
            informationAuthor: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('information-author', this.informationAuthor)
                }
            }
        }
    })
</script>