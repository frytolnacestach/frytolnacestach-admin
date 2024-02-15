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
                        <mLabel name="Google" nameDB="google" perex="" type="json" :required=false />
                        <input class="a-input -json" type="number" min="0" v-model="item.google" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Booking" nameDB="booking" perex="" type="json" :required=false />
                        <input class="a-input -json" type="number" min="0" v-model="item.booking" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addZoomInput" v-if="zoomArray.length < inputsMax">Přidat zoom</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsZoomComponent',

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
                if (this.zoomArray.length < this.inputsMax) {
                    this.zoomArray.push({
                        google: null,
                        booking: null
                    })
                    this.$emit('zoom', this.zoomArray)
                }
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