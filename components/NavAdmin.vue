<template>
    <main>
        <nav class="o-nav-admin">
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

        <h1>MÍSTA</h1>
        <nav class="o-nav-admin">
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
                                <NuxtLink class="o-nav-admin__title" to="/admin/places/administrative-units">Administrativní celky</NuxtLink>
                            </div>
                        </li>
                        <li class="o-nav-admin__item">
                            <div class="o-nav-admin__item-container">
                                <NuxtLink class="o-nav-admin__title" to="/admin/places/states">Státy</NuxtLink>
                            </div>
                        </li>
                        <li class="o-nav-admin__item">
                            <div class="o-nav-admin__item-container">
                                <NuxtLink class="o-nav-admin__title" to="/admin/places/districts">Kraje</NuxtLink>
                            </div>
                        </li>
                        <li class="o-nav-admin__item">
                            <div class="o-nav-admin__item-container">
                                <NuxtLink class="o-nav-admin__title" to="/admin/places/cities">Města</NuxtLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </main>
</template>
