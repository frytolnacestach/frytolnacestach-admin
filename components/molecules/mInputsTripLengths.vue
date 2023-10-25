<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in tripLengthsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTripLengthInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Name:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Subname:</label>
                        <input class="a-input" type="text" v-model="item.subname" />
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
                    <button class="m-button-add__input" type="button" @click="addTripLengthInput">Přidat délku</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsTripLengthsComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                tripLengthsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTripLengthInput() {
                this.tripLengthsArray.push({
                    name: '',
                    subname: '',
                    value: ''
                })
                this.$emit('trip-lengths', this.tripLengthsArray)
            },
            removeTripLengthInput(index) {
                this.tripLengthsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.tripLengthsArray = JSON.parse(this.value)
            },
            tripLengthsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('trip-lengths', this.tripLengthsArray)
                }
            }
        }
    })
</script>