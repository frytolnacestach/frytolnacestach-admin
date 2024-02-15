<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="typeRegionArray && typeRegionArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in typeRegionArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTypeRegionInput(index)">
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
        <div :class="'o-form-item__buttons' + ((typeRegionArray && typeRegionArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addTypeRegionInput">Přidat typ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsTypeRegionComponent',

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
                typeRegionArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTypeRegionInput() {
                this.typeRegionArray.push({
                    type: ''
                })
                this.$emit('type-region', this.typeRegionArray)
            },
            removeTypeRegionInput(index) {
                this.typeRegionArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.typeRegionArray = JSON.parse(this.value)
            },
            typeRegionArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('type-region', this.typeRegionArray)
                }
            }
        }
    })
</script>