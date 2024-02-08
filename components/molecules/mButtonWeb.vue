<template>
    <div class="m-button-web">
        <a class="m-button-web__link" :href="link" type="submit" target="_blank">{{ text }}</a>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmButtonWebComponent',

        props: {
            text: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    })
</script>
