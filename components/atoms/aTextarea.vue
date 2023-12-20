<template>
    <textarea class="a-textarea" type="text" :name="name" v-model="textareaValue" :required="required"></textarea>
</template>

<script>
    export default defineComponent({
        name: 'AtomsmTextareaComponent',

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
                textareaValue: this.value
            }
        },

        watch: {
            // Change value
            textareaValue(newValue, oldValue) {
                this.$emit('textareaValue', this.textareaValue)
            }
        }
    })
</script>