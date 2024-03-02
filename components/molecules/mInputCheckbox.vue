<template>
    <div class="m-input-checkbox">
        <label class="m-input-checkbox__label">
            <input class="m-input-checkbox__input" type="checkbox" id="checkbox" v-model="checkboxValue" />
            <span class="m-input-checkbox__checkbox"></span>
        </label>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputCheckboxComponent',

        props: {
            value: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                checkboxValue: this.value
            }
        },

        watch: {
            // Change value
            checkboxValue(newValue, oldValue) {
                this.$emit('checkbox-value', this.checkboxValue)
            }
        }
    })
</script>