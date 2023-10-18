<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in affiliateArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeAffiliateInput(index)">
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
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addAffiliateInput">Přidat affileate</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsAffiliateComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                affiliateArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addAffiliateInput() {
                this.affiliateArray.push({
                    name: '',
                    value: true
                })
                this.$emit('affiliate', this.affiliateArray)
            },
            removeAffiliateInput(index) {
                this.affiliateArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.affiliateArray = JSON.parse(this.value)
            },
            affiliateArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('affiliate', this.affiliateArray)
                }
            }
        }
    })
</script>