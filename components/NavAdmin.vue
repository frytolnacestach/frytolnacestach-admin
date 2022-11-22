<template>
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
                            <NuxtLink class="o-nav-admin__title" to="/admin/post">Články</NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
