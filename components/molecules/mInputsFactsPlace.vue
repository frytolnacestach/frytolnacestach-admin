<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="factsPlaceArray && factsPlaceArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in factsPlaceArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeFactPlaceInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Value" nameDB="value" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.value" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((factsPlaceArray && factsPlaceArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addFactPlaceInput">Přidat fakt</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsFactsPlaceComponent',

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
                factsPlaceArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addFactPlaceInput() {
                this.factsPlaceArray.push({
                    name: ''
                })
                this.$emit('factsPlace', this.factsPlaceArray)
            },
            removeFactPlaceInput(index) {
                this.factsPlaceArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.factsPlaceArray = JSON.parse(this.value)
            },
            factsPlaceArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('factsPlace', this.factsPlaceArray)
                }
            }
        }
    })
</script>