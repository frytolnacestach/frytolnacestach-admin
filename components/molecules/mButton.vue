<template>
    <div class="m-button">
        <button class="m-button__input" type="submit">{{ text }}</button>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmButtonComponent',

        props: {
            text: {
                type: String,
                required: true
            }
        }
    })
</script>
