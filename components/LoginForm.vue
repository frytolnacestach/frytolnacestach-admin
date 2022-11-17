<template>
    <section class="t-section">
        <div class="o-form-login">
            <div class="o-form-login__outer">
                <div class="o-form-login__inner">
                    <form class="o-form-login__form">
                        <div class="o-form-login__items">
                            <div class="o-form-login__item">
                                <input class="a-input" type="text" v-model="email" placeholder="E-mail"/>
                            </div>
                            <div class="o-form-login__item">
                                <input class="a-input" type="password" v-model="password" placeholder="Heslo"/>
                            </div>
                        </div>
                        <div class="o-form-login__buttons mt-1">
                            <div class="o-form-login__button">
                                <div class="m-button">
                                    <button class="m-button__input" v-on:click="login">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginForm',

    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let result = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/login/${this.email}/${this.password}`)

            if(result.status==200 && result.data.length>0) {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                $this.$router.push({name:'Home'})
            }
            console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        
        if (user) {
            $this.router.push({name: 'Home'})
        }
    }
}
</script>
