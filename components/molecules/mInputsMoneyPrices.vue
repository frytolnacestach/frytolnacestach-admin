<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in moneyPricesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeMoneyPriceInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Name:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Value:</label>
                        <input class="a-input" type="text" v-model="item.value" />
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
                    <button class="m-button-add__input" type="button" @click="addMoneyPriceInput">Přidat cenu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputMoneyPricesComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                moneyPricesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addMoneyPriceInput() {
                this.moneyPricesArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
                this.$emit('money-prices', this.moneyPricesArray)
            },
            removeMoneyPriceInput(index) {
                this.moneyPricesArray.splice(index, 1)
            },
        },

        watch: {
            value(newValue, oldValue) {
                this.moneyPricesArray = JSON.parse(this.value)
            },
            moneyPricesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('money-prices', this.moneyPricesArray)
                }
            }
        }
    })
</script>