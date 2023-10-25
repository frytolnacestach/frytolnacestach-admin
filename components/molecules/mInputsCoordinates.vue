<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in coordinatesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeCoordinateInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Latitude" nameDB="latitude" perex="" type="json" :required=false />
                        <input class="a-input" type="number" step=".0000001" v-model="item.latitude" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Longitude" nameDB="longitude" perex="" type="json" :required=false />
                        <input class="a-input" type="number" step=".0000001" v-model="item.longitude" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addCoordinateInput">Přidat souřadnice</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsCoordinatesComponent',

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
                coordinatesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addCoordinateInput() {
                this.coordinatesArray.push({
                    latitude: null,
                    longitude: null
                })
                this.$emit('coordinates', this.coordinatesArray)
            },
            removeCoordinateInput(index) {
                this.coordinatesArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.coordinatesArray = JSON.parse(this.value)
            },
            coordinatesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('coordinates', this.coordinatesArray)
                }
            }
        }
    })
</script>