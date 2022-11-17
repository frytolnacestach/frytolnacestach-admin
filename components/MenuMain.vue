<template>
    <header class="t-header">
        <div class="o-header">
            <div class="o-header__outer">
                <div class="o-header__inner">
                    <div class="o-header__nav">
                        <nav class="m-nav-main">
                            <div class="m-nav-main__outer">
                                <div class="m-nav-main__inner">
                                    <ul class="m-nav-main__items">
                                        <li class="m-nav-main__item">
                                            <NuxtLink class="m-nav-main__link" to="/admin">Administrace</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'MenuMain'
    }
</script>