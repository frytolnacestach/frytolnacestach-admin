<template>
    <div class="o-flash-messages" v-if="text" >
        <div class="o-flash-messages__items">
            <div :class="'o-flash-messages__item' + (styleThema ? styleThema : '')">
                <div class="o-flash-messages__outer">
                    <div class="o-flash-messages__inner">
                        <span class="o-flash-messages__text">{{text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'OrganismsoHeroComponent',

        props: {
            text: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>