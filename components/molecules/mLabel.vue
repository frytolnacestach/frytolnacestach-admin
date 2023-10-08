<template>
    <label class="m-label">
        <span class="m-label__name">
            {{ name }}
            <span class="m-label__name-column" v-if="nameDB"> ({{ nameDB }})</span>
            <span class="m-label__name-required" v-if="required">*</span>
        </span>
        <span class="m-label__perex" v-if="perex" v-html="perex"></span>
    </label>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmLabelComponent',

        props: {
            name: {
                type: String,
                required: true
            },
            nameDB: {
                type: String,
                required: false
            },
            perex: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                required: false
            }
        }
    })
</script>
