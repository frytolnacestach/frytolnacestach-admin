<template>
    <main>
        <slot name="main">
            <nav class="o-nav-admin" v-if="showNav === 'main'">
                <div class="o-nav-admin__outer">
                    <div class="o-nav-admin__inner">
                        <ul class="o-nav-admin__items">
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/base">Základní informace</NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/platforms">Platformy</NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/videos">Videa</NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/posts">Články</NuxtLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </slot>

        <slot name="places">
            <nav class="o-nav-admin" v-if="showNav === 'places'">
                <div class="o-nav-admin__outer">
                    <div class="o-nav-admin__inner">
                        <ul class="o-nav-admin__items">
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/continents">Kontinenty</NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/states">Státy</NuxtLink>
                                </div>
                            </li>
                            <!--
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/administrative-units">Administrativní celky</NuxtLink>
                                </div>
                            </li>
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/districts">Kraje</NuxtLink>
                                </div>
                            </li>
                            -->
                            <li class="o-nav-admin__item">
                                <div class="o-nav-admin__item-container">
                                    <NuxtLink class="o-nav-admin__title" to="/admin/places/cities">Města</NuxtLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </slot>
    </main>
</template>

<script>
    export default {
        name: 'NavAdmin',
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
    }
</script>