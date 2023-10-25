<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in tagsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTagInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Name:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addTagInput">Přidat tag</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsTagsComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                tagsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTagInput() {
                this.tagsArray.push({
                    name: ''
                })
                this.$emit('tags', this.tagsArray)
            },
            removeTagInput(index) {
                this.tagsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.tagsArray = JSON.parse(this.value)
            },
            tagsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('tags', this.tagsArray)
                }
            }
        }
    })
</script>