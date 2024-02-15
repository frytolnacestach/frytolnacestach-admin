<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in currencyArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeCurrencyInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Code" nameDB="code" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.code" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addCurrencyInput" v-if="currencyArray.length < inputsMax">Přidat měnu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsCurrencyComponent',

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
                currencyArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addCurrencyInput() {
                if (this.currencyArray.length < this.inputsMax) {
                    this.currencyArray.push({
                        name: '',
                        code: ''
                    })
                    this.$emit('currency', this.currencyArray)
                }
            },
            removeCurrencyInput(index) {
                this.currencyArray.splice(index, 1)
            },
        },

        watch: {
            value(newValue, oldValue) {
                this.currencyArray = JSON.parse(this.value)
            },
            currencyArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('currency', this.currencyArray)
                }
            }
        }
    })
</script>