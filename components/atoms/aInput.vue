<template>
    <input class="a-input" :name="name" v-model="inputValue" :required="required" />
</template>

<script>
    export default defineComponent({
        name: 'AtomsmInputComponent',

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
            // Change value
            inputValue(newValue, oldValue) {
                this.$emit('inputValue', this.inputValue)
            }
        }
    })
</script>