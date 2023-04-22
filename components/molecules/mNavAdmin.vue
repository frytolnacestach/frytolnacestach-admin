<template>
    <nav class="o-nav-admin">
        <div class="o-nav-admin__outer">
            <div class="o-nav-admin__inner">
                <ul class="o-nav-admin__items">
                    <li class="o-nav-admin__item" v-for="item in links" :key="item.id">
                        <div class="o-nav-admin__item-container">
                            <NuxtLink class="o-nav-admin__title" :to="item.url">
                                <span class="o-nav-admin__span">{{ item.name }}</span>
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmNavAdminComponent',
    
        props: {
            links: {
                type: Array,
                required: true
            }
        }
    })
</script>