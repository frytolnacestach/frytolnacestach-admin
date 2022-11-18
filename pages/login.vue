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
                console.log("test btn")
                try {
                    console.log("test btn try")
                    let result = {"status":200,"message":[{"id":1,"email":"michal.fryc@seznam.cz","password":"Testheslo"}]}
                    //let result = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/login/${this.login.email}/${this.login.password}`)

                    if(result.status==200) {
                        console.log("test btn 200")
                        
                        //set storage
                        localStorage.setItem("user-info",JSON.stringify(result.message[0]))
                        $this.$router.push({name:'Home'})
                        
                        //set expires
                        var now = new Date();
                        now.setMonth( now.getMonth() + 1 );
                        let expires = "expires="+ now;
                        
                        //set cookies
                        document.cookie = "FNCADMINemail=TEST" + result.message[0].email + ";" + expires;
                        document.cookie = "FNCADMINpass=TEST" + result.message[0].password + ";" + expires;
                    }
                    console.warn(result)
                    
                } catch (err) {
                    console.log("test btn err")
                    console.log(err)
                }
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
