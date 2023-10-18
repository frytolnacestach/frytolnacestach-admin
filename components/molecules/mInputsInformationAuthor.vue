<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in informationAuthor" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeInformationAuthorInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Text:</label>
                        <textarea class="a-textarea" type="text" v-model="item.text"></textarea>
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date create:</label>
                        <input class="a-input" type="text" v-model="item.date_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date update:</label>
                        <input class="a-input" type="text" v-model="item.date_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Author create:</label>
                        <input class="a-input" type="text" v-model="item.author_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Author update:</label>
                        <input class="a-input" type="text" v-model="item.author_update" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addInformationAuthorInput">Přidat text</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsInformationAuthorComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                informationAuthor: JSON.parse(this.value)
            }
        },

        methods: {
            addInformationAuthorInput() {
                this.informationAuthor.push({
                    text: '',
                    date_create: '',
                    date_update: '',
                    author_create: '',
                    author_update: ''
                })
                this.$emit('information-author', this.informationAuthor)
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