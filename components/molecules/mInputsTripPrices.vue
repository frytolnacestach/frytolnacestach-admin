<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in tripPricesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTripPriceInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Surname" nameDB="surname" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.subname" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Value" nameDB="value" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.value" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addTripPriceInput">Přidat cenu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsTripPricesComponent',

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
                tripPricesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTripPriceInput() {
                this.tripPricesArray.push({
                    name: '',
                    subname: '',
                    value: ''
                })
                this.$emit('trip-prices', this.tripPricesArray)
            },
            removeTripPriceInput(index) {
                this.tripPricesArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.tripPricesArray = JSON.parse(this.value)
            },
            tripPricesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('trip-prices', this.tripPricesArray)
                }
            }
        }
    })
</script>