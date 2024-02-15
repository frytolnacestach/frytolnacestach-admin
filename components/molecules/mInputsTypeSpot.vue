<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="typeSpotArray && typeSpotArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in typeSpotArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTypeSpotInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Typ" nameDB="type" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.type" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((typeSpotArray && typeSpotArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addTypeSpotInput">Přidat typ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsTypeSpotComponent',

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
                typeSpotArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTypeSpotInput() {
                this.typeSpotArray.push({
                    type: ''
                })
                this.$emit('type-spot', this.typeSpotArray)
            },
            removeTypeSpotInput(index) {
                this.typeSpotArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.typeSpotArray = JSON.parse(this.value)
            },
            typeSpotArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('type-spot', this.typeSpotArray)
                }
            }
        }
    })
</script>