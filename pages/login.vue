<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Přihlášení do administrace
                    </h1>
                </div>
            </div>
        </div>
        <!--<LoginForm />-->

        <section class="t-section">
            <div class="o-form-login">
                <div class="o-form-login__outer">
                    <div class="o-form-login__inner">
                        <!--<form class="o-form-login__form" @submit.prevent="login">-->
                            <div class="o-form-login__items">
                                <div class="o-form-login__item">
                                    <input class="a-input" type="text" name="email" v-model="email" placeholder="E-mail"/>
                                </div>
                                <div class="o-form-login__item">
                                    <input class="a-input" type="password" name="password" v-model="password" placeholder="Heslo"/>
                                </div>
                            </div>
                            <div class="o-form-login__buttons mt-1">
                                <div class="o-form-login__button">
                                    <div class="m-button">
                                        <button class="m-button__input" type="submit" @click="login">Login</button>
                                    </div>

                                    test: {{ result }} 
                                    test2: {{ post[0] }}
                                </div>
                            </div>
                        <!--</form>-->
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    //import LoginForm from '../components/LoginForm.vue'

    export default {
        name: 'LoginPage',

        data(){
            return {
                email: '',
                password: '',
                result: 'sdfsd',
                post: ''
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
                
                result = {"id":1,"email":"michal.fryc@seznam.cz","password":"Testheslo"}
                return result 
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')

            if (user) {
                $this.router.push({name: 'Home'})
            }
        },
        async asyncData({ $axios }) {
            const post = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/login/michal.fryc@seznam.cz/Testheslo`)
            return { post: post }
        }
    }
</script>
