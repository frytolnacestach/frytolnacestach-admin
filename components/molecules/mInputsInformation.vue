<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in informationArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeInformationInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Type:</label>
                        <input class="a-input" type="text" v-model="item.type" />
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
                    <button class="m-button-add__input" type="button" @click="addInformationInput">Přidat information</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputInformationComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                informationArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addInformationInput() {
                this.informationArray.push({
                    type: '',
                    value: ''
                })
                this.$emit('information', this.informationArray)
            },
            removeInformationInput(index) {
                this.informationArray.splice(index, 1)
            },
        },

        watch: {
            value(newValue, oldValue) {
                this.informationArray = JSON.parse(this.value)
            },
            informationArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('information', this.informationArray)
                }
            }
        }
    })
</script>