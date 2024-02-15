<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="seoTagsArray && seoTagsArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in seoTagsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeSeoTagsInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Tag" nameDB="tag" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.tag" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((seoTagsArray && seoTagsArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addSeoTagsInput">Přidat tag</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsSeoTagsComponent',

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
                seoTagsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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