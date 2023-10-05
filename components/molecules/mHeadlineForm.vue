<template>
    <div :class="'m-headline-form' + (styleGap ? styleGap : '')">
        <h2 class="m-headline-form__title">{{ title }}</h2>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmHeadlineFormComponent',

        props: {
            title: {
                type: String,
                required: true
            },
            styleGap: {
                type: String,
                required: false
            }
        }
    })
</script>