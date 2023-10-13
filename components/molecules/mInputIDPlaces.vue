<template>
    <input class="a-input" type="number" min="0" :name="name" v-model="id" :required="required" />
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputIDPlaceComponent',

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
                id: this.value
            }
        },

        watch: {
            // Change image ID
            id(newValue, oldValue) {
                this.$emit('id-place', this.id)
            }
        },
    })
</script>