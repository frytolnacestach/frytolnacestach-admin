<template>
    <div class="o-hero">
        <div class="o-hero__outer">
            <div class="o-hero__inner">
                <h1 class="o-hero__headline">
                    {{ headline }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'OrganismsoHeroComponent',
        props: {
            headline: {
                type: String,
                required: true
            }
        },
    })
</script>