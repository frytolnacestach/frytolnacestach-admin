<template>
    <div class="m-logotype">
        <div class="m-logotype__image">
            <div class="m-logotype__image-file">
                <NuxtLink class="m-logotype__image-link" to="/"></NuxtLink>
            </div>
        </div>
        <div class="m-logotype__text">
            <span class="m-logotype__text-main">ADMIN</span>
            <span class="m-logotype__text-sub">Frytol na cestách</span>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmLogotypeComponent'
    })
</script>