<template>
    <nav class="m-nav-main">
        <div class="m-nav-main__outer">
            <div class="m-nav-main__inner">
                <ul class="m-nav-main__items">
                    <li class="m-nav-main__item">
                        <NuxtLink class="m-nav-main__link" to="/admin">Administrace</NuxtLink>
                    </li>
                    <li class="m-nav-main__item" v-if="loginStatus">
                        <NuxtLink class="m-nav-main__link" to="/logout">Odhlásit se</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmNevMainComponent',

        data(){
            return {
                loginStatus: ''
            }
        },

        mounted() {
            let user = localStorage.getItem('user-info')

            if (user && user != "undefined") {
                this.loginStatus = "true"
            } else {

            }
        }
    })

    
</script>