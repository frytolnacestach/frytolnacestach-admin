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
                        <form class="o-form-login__form" @submit.prevent="loginForm">
                            <div class="o-form-login__items">
                                <div class="o-form-login__item">
                                    <input class="a-input" type="text" name="email" v-model="login.email" placeholder="E-mail"/>
                                </div>
                                <div class="o-form-login__item">
                                    <input class="a-input" type="password" name="password" v-model="login.password" placeholder="Heslo"/>
                                </div>
                            </div>
                            <div class="o-form-login__buttons mt-1">
                                <div class="o-form-login__button">
                                    <div class="m-button">
                                        <button class="m-button__input" type="submit">Login</button>
                                    </div>

                                    test: {{ post[0] }}
                                </div>
                            </div>
                        </form>
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
                login: {
                    email: '',
                    password: ''
                },
                post: ''
            }
        },
        methods: {
            async loginForm(){
                try {
                    let result = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/login/${this.login.email}/${this.login.password}`)
                    
                    var now = new Date();
                    now.setMonth( now.getMonth() + 1 );
                    let expires = "expires="+ now;
                    
                    document.cookie = "FFFtestResult=1;" + expires;

                    if(result.status==200 && result.data.length>0) {
                        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                        $this.$router.push({name:'Home'})
                    }
                    console.warn(result)
                    
                } catch (err) {
                    console.log(err)
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')

            if (user) {
                $this.router.push({name: 'Home'})
            }
        },
        async asyncData() {
            //const post = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/login/michal.fryc@seznam.cz/Tohleneniheslo`)
            const post = {"id":2,"email":"michal.fryc@seznam.cz","password":"Tohleneniheslo"}
            return { post: post }
        }
    }
</script>
