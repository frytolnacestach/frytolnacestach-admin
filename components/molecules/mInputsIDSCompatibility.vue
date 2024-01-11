<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in IDScompatibilityArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeIDScompatibilityInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="ID" nameDB="id" perex="" type="json" :required=false />
                        <input class="a-input" type="number" min="0" v-model="item.id" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addIDScompatibilityInput">Přidat zásuvku</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsIDSCompatibilityComponent',

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
                IDScompatibilityArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addIDScompatibilityInput() {
                this.IDScompatibilityArray.push({
                    id: null
                })
                this.$emit('ids-compatibility', this.IDScompatibilityArray)
            },
            removeIDScompatibilityInput(index) {
                this.IDScompatibilityArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.IDScompatibilityArray = JSON.parse(this.value)
            },
            IDScompatibilityArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('ids-compatibility', this.IDScompatibilityArray)
                }
            }
        }
    })
</script>