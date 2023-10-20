<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in appsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeAppInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">URL:</label>
                        <input class="a-input" type="text" v-model="item.url" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date:</label>
                        <input class="a-input" type="text" v-model="item.date" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Name:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Author:</label>
                        <input class="a-input" type="text" v-model="item.author" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date update:</label>
                        <input class="a-input" type="text" v-model="item.date_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Description:</label>
                        <input class="a-input" type="text" v-model="item.description" />
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
                    <button class="m-button-add__input" type="button" @click="addAppInput">Přidat aplikaci</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsAppsComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                appsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addAppInput() {
                this.appsArray.push({
                    url: '',
                    date: '',
                    name: '',
                    author: '',
                    date_update: '',
                    description: '',
                    author_update: ''
                })
                this.$emit('apps', this.appsArray)
            },
            removeAppInput(index) {
                this.appsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.appsArray = JSON.parse(this.value)
            },
            appsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('apps', this.appsArray)
                }
            }
        }
    })
</script>