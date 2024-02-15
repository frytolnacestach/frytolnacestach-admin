<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in recipeArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeRecipeInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Step" nameDB="spet" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.step" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Text" nameDB="text" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addRecipeInput">Přidat krok</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsRecipeComponent',

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
                recipeArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addRecipeInput() {
                this.recipeArray.push({
                    step: '',
                    name: '',
                    text: ''
                })
                this.$emit('recipe', this.recipeArray)
            },
            removeRecipeInput(index) {
                this.recipeArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.recipeArray = JSON.parse(this.value)
            },
            recipeArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('recipe', this.recipeArray)
                }
            }
        }
    })
</script>