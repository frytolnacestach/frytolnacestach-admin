<template>
    <div class="o-hero-big">
        <div class="o-hero-big__outer">
            <div class="o-hero-big__inner">
                <h1 class="o-hero-big__headline">
                    {{ headline }}
                </h1>
                <p class="o-hero-big__perex">{{ perex }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'OrganismsoHeroBigComponent',

        props: {
            headline: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: true
            }
        }
    })
</script>