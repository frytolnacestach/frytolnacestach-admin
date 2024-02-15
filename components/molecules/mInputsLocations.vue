<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="locationsArray && locationsArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in locationsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeLocationInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Type" nameDB="type" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.type" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((locationsArray && locationsArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addLocationInput">Přidat lokaci</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsLocationsComponent',

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
                locationsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addLocationsInput() {
                this.locationsArray.push({
                    name: '',
                    type: ''
                })
                this.$emit('locations', this.locationsArray)
            },
            removeLocationsInput(index) {
                this.locationsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.locationsArray = JSON.parse(this.value)
            },
            locationsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('locations', this.locationsArray)
                }
            }
        }
    })
</script>