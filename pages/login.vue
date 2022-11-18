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

        <section class="t-section">
            <div class="o-form-login">
                <div class="o-form-login__outer">
                    <div class="o-form-login__inner">
                        
                        <div class="o-flash-messages" v-if="errorForm">
                            <div class="o-flash-messages__items">
                                <div class="o-flash-messages__item">
                                    <div class="o-flash-messages__outer">
                                        <div class="o-flash-messages__inner">
                                            <span class="o-flash-messages__text">{{ errorForm }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form class="o-form-login__form" @submit.prevent="loginForm">
                            <div class="o-form-login__items">
                                <div class="o-form-login__item">
                                    <input class="a-input a-input--big" type="text" name="email" v-model="login.email" placeholder="E-mail"/>
                                </div>
                                <div class="o-form-login__item">
                                    <input class="a-input a-input--big" type="password" name="password" v-model="login.password" placeholder="Heslo"/>
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
import axios from "axios";

    export default {
        name: 'LoginPage',

        data(){
            return {
                login: {
                    email: '',
                    password: ''
                },
                errorForm: ''
            }
        },
        methods: {
            async loginForm(){
                try {
                    let result = await axios.get(`https://frytolnacestach-api.vercel.app/api/login/${this.login.email}/${this.login.password}`)

                    if ( JSON.stringify(result.data.message[0]) != undefined ){
                        if(result.data.status==200) {
                            
                            //set storage
                            localStorage.setItem("user-info",JSON.stringify(result.data.message[0]))
                            
                            //set expires
                            var now = new Date();
                            now.setMonth( now.getMonth() + 1 );
                            let expires = "expires="+ now;
                            
                            //set cookies
                            document.cookie = "FNCADMINemail=" + result.data.message[0].email + ";" + expires;
                            document.cookie = "FNCADMINpass=" + result.data.message[0].password + ";" + expires;
                            
                            let user = localStorage.getItem('user-info')

                            this.$router.push('admin')
                        }
                    } else {
                        this.errorForm = "Uživatelský email nebo heslo je nesprávné"
                        console.log("Uživatelský email nebo heslo je nesprávné")
                    }
                    
                } catch (err) {
                    console.log(err)
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')

            if (user && user != "undefined") {
                this.$router.push('admin')
            }
        }
    }
</script>
