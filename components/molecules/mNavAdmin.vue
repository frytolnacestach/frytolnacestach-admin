<template>
    <main>
        <!-- NAVADMIN - Main -->
        <slot name="main">
            <nav class="o-nav-admin" v-if="showNav === 'main' || showNav === 'full'">
                <div class="o-nav-admin__outer">
                    <div class="o-nav-admin__inner">
                        <ul class="o-nav-admin__items">
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/base"><span class="o-nav-admin__span">Základní informace</span></NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/platforms"><span class="o-nav-admin__span">Platformy</span></NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/videos"><span class="o-nav-admin__span">Videa</span></NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/posts"><span class="o-nav-admin__span">Články</span></NuxtLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </slot>
        <!-- NAVADMIN - Main END -->

        <!-- NAVADMIN - Places -->
        <mHeadline :headline="'Místa'" styleGap=" mt-6" v-if="showNav === 'places' || showNav === 'full'" />

        <slot name="places">
            <nav class="o-nav-admin" v-if="showNav === 'places' || showNav === 'full'">
                <div class="o-nav-admin__outer">
                    <div class="o-nav-admin__inner">
                        <ul class="o-nav-admin__items">
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/continents"><span class="o-nav-admin__span">Kontinenty</span></NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/states"><span class="o-nav-admin__span">Státy</span></NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/cities"><span class="o-nav-admin__span">Města</span></NuxtLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </slot>
         <!-- NAVADMIN - Places END -->
    </main>
</template>

<script>
    import mHeadline from '@/components/molecules/mHeadline.vue'

    export default defineComponent({
        name: 'MoleculesmNavAdminComponent',

        components: {
            mHeadline
        },
    
        props: {
            showNav: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                showNav: this.showNav
            }
        },
    })
</script>