<template>
    <!--<h1 v-if="headline!=null">{{ headline }}</h1>-->
    <h1>TESTUJI 2 - {{ headline }}</h1>
</template>

<script>
    export default {
        name: 'Headline',
        data() {
            return {
                headline: this.headline
            }
        },
    }
</script>