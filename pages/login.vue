<template>
    <main class="t-main">
        <br/><br/><br/><br/>
        <section class="t-section">
            <input type="text" v-model="email" placeholder="Enter email"/>
            <input type="password" v-model="password" placeholder="Enter password"/>
            <button v-on:click="login">Login</button>
        </section>
    </main>
</template>

<script>
export default {
  name: 'LoginPage',

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
  }
}
</script>
