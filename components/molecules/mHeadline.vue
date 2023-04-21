<template>
    <h1>{{ headline }}</h1>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmHeadlineComponent',

        props: {
            headline: {
                type: String,
                required: true
            }
        }
    })
</script>