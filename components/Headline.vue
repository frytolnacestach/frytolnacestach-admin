<template>
    <h1>{{ headline }}</h1>
</template>

<script>
    export default defineComponent({
        name: 'HeadlineComponent',

        props: {
            headline: {}
        }
    })
</script>