<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="informationArray && informationArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in informationArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeInformationInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Type" nameDB="type" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.type" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Value" nameDB="value" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.value" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((informationArray && informationArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addInformationInput">Přidat information</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsInformationComponent',

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