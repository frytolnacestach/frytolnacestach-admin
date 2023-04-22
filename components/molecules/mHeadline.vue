<template>
    <div :class="'m-headline' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '') + (styleGap ? styleGap : '')">
        <h2 class="m-headline__title">{{ headline }}</h2>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmHeadlineComponent',

        props: {
            headline: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            },
            styleAlign: {
                type: String,
                required: false
            },
            styleGap: {
                type: String,
                required: false
            }
        }
    })
</script>