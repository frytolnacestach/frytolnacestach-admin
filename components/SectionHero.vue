<template>
    <div class="o-hero o-hero--small">
        <div class="o-hero__outer">
            <div class="o-hero__inner">
                <h1 class="o-hero__headline">{{ headline }}</h1>
                <p class="o-hero__perex">{{ perex }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SectionHeroComponent',

        props: [
            'headline',
            'perex'
        ]
    })
</script>