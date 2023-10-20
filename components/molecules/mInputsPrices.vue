<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in pricesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removePriceInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Name:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Text:</label>
                        <input class="a-input" type="text" v-model="item.text" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Type:</label>
                        <input class="a-input" type="text" v-model="item.type" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Author:</label>
                        <input class="a-input" type="text" v-model="item.author" />
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
                        <label class="m-label">Date start:</label>
                        <input class="a-input" type="text" v-model="item.date_start" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date end:</label>
                        <input class="a-input" type="text" v-model="item.date_end" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addPriceInput">Přidat cenu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsPricesComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                pricesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addPriceInput() {
                this.pricesArray.push({
                    name: '',
                    perex: '',
                    value: ''
                })
                this.$emit('prices', this.pricesArray)
            },
            removePriceInput(index) {
                this.pricesArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.pricesArray = JSON.parse(this.value)
            },
            pricesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('prices', this.pricesArray)
                }
            }
        }
    })
</script>