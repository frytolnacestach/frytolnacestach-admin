<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in parkingArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeParkingInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Description" nameDB="description" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.description" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date" nameDB="date" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.date" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author" nameDB="author" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.author" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author update" nameDB="author_update" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.author_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date update" nameDB="date_update" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.date_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Pay time" nameDB="pay_time" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.pay_time" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Price" nameDB="price" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.price" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="URL" nameDB="url" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.url" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addParkingInput">Přidat parkování</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsparkingComponent',

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
                parkingArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addParkingInput() {
                this.parkingArray.push({
                    url: '',
                    date: '',
                    name: '',
                    price: '',
                    author: '',
                    pay_time: '',
                    date_update: '',
                    description: '',
                    author_update: ''
                })
                this.$emit('parking', this.parkingArray)
            },
            removeParkingInput(index) {
                this.parkingArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.parkingArray = JSON.parse(this.value)
            },
            parkingArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('parking', this.parkingArray)
                }
            }
        }
    })
</script>