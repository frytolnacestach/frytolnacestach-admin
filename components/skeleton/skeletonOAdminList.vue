<template>
    <div class="skeleton-o-admin-list">
        <div class="skeleton-o-admin-list__outer">
            <div class="skeleton-o-admin-list__inner">
                <div class="skeleton-o-admin-list__items">
                    <span v-for="index in 3" :key="index" class="skeleton-o-admin-list__item loading-image"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'SkeletonoAdminList'
    })
</script>