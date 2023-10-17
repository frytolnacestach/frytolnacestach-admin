<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in seoTagsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Tag:</label>
                        <input class="a-input" type="text" v-model="item.tag" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsSeoTagsComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                seoTagsArray: JSON.parse(this.value)
            }
        },

        methods: {
            addSeoTagsInput() {
                this.seoTagsArray.push({
                    tag: ''
                })
                this.$emit('seo-tags', this.seoTagsArray)
            },
            removeSeoTagsInput(index) {
                this.seoTagsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.seoTagsArray = JSON.parse(this.value)
            },
            seoTagsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('seo-tags', this.seoTagsArray)
                }
            }
        }
    })
</script>