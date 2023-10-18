<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in zoomArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeZoomInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Google:</label>
                        <input class="a-input" type="number" min="0" v-model="item.google" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Booking:</label>
                        <input class="a-input" type="number" min="0" v-model="item.booking" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addZoomInput">Přidat zoom</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsZoomComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                zoomArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addZoomInput() {
                this.zoomArray.push({
                    google: null,
                    booking: null
                })
                this.$emit('zoom', this.zoomArray)
            },
            removeZoomInput(index) {
                this.zoomArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.zoomArray = JSON.parse(this.value)
            },
            zoomArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('zoom', this.zoomArray)
                }
            }
        }
    })
</script>