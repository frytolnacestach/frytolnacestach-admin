<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in IDSstatesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeIDSstateInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">ID:</label>
                        <input class="a-input" type="number" min="0" v-model="item.id" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addIDSstateInput">Přidat stát</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsIDSStatesComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                IDSstatesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addIDSstateInput() {
                this.IDSstatesArray.push({
                    id: null
                })
                this.$emit('ids-states', this.IDSstatesArray)
            },
            removeIDSstateInput(index) {
                this.IDSstatesArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.IDSstatesArray = JSON.parse(this.value)
            },
            IDSstatesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('ids-states', this.IDSstatesArray)
                }
            }
        }
    })
</script>