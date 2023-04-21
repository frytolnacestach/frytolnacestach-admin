export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: 'https://frytolnacestach-api.vercel.app/api'
    }
  },

  css: [
    '@/assets/css/main.scss'
  ],

  plugins: [],

  router: {

  },

  modules: [
    //'@nuxt/image'
  ],

  /*image: {
    dir: '/assets/images-generated'
  }*/
})
