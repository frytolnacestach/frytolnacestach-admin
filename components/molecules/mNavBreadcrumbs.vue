<template>
    <nav class="m-nav-breadcrumbs">
        <div class="m-nav-breadcrumbs__outer">
            <div class="m-nav-breadcrumbs__inner">
                <ul class="m-nav-breadcrumbs__items">
                    <li class="m-nav-breadcrumbs__item" v-for="item in links" :key="item.id">
                        <NuxtLink class="m-nav-breadcrumbs__link" :to="item.url" v-if="item.status === 'link'">{{ item.name }}</NuxtLink>
                        <span class="m-nav-breadcrumbs__span" v-else-if="item.status === 'span'">{{ item.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmNavBreadcrumbsComponent',
    
        props: {
            links: {
                type: Array,
                required: true
            }
        }
    })
</script>