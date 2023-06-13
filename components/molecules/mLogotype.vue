<template>
    <div class="m-logotype -server">
        <span class="m-logotype__server">ADMIN</span>
        <div class="m-logotype__image">
            <div class="m-logotype__image-file">
                <NuxtLink class="m-logotype__image-link" to="/" :aria-label="`Zpět na úvodní stránku`"></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmLogotypeComponent'
    })
</script>
