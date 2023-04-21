<template>
    <footer class="t-footer">
        <div class="o-footer">
            <div class="o-footer__nav">
                <nav class="m-nav-footer">
                    <div class="m-nav-footer__outer">
                        <div class="m-nav-footer__inner">
                            <ul class="m-nav-footer__items">
                                <li class="m-nav-footer__item">
                                    <NuxtLink class="m-nav-footer__link" to="/">Úvod</NuxtLink>
                                </li>
                                <li class="m-nav-footer__item">
                                    <NuxtLink class="m-nav-footer__link" to="/admin">Administrace</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="o-footer__copyright">
                <div class="o-copyright">
                    <div class="o-copyright__outer">
                        <div class="o-copyright__inner">
                            <span class="o-copyright__text">&copy; Všechna práva vyhrazena Frytol na cestách</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default defineComponent({
        name: 'ComponentFooterComponent'
    })
</script>