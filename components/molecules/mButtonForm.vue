<template>
    <div class="m-button-form">
        <button class="m-button-form__input" type="submit">{{ text }}</button>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmButtonFormComponent',

        props: {
            text: {
                type: String,
                required: true
            }
        }
    })
</script>
