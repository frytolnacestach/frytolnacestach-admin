<template>
    <input class="a-input" :name="name" v-model="inputValue" :required="required" />
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputComponent',

        props: {
            value: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            required: {
                type: Boolean,
                required: false
            }
        },

        data() {
            return {
                inputValue: this.value
            }
        },

        watch: {
            // Change image ID
            inputValue(newValue, oldValue) {
                this.$emit('inputValue', this.inputValue)
            }
        }
    })
</script>