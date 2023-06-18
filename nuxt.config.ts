// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  app: {
    head: {
      title: 'Administrace Frytol na cestách',
      htmlAttrs: {
        lang: 'cs'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Administrace Frytol na cestách' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'author', content: 'Michal Fryč' },
        { name: 'keywords', content: 'Administrace Frytol na cestách' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/apple-touch-icon.png' },
        { rel: 'icon', type:'image/png', sizes: '32x32', href: '/images/favicons/favicon-32x32.png' },
        { rel: 'icon', type:'image/png', sizes: '16x16', href: '/images/favicons/favicon-16x16.png' },
        { rel: 'manifest', sizes: '180x180', href: '/images/favicons/site.webmanifest' }
      ],
      script: [
        { src: '/js/js_m-hamburger.js', type: 'text/javascript', async: true },
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseURL: 'https://frytolnacestach-api.vercel.app/api'
    }
  },

  css: [
    '@/assets/css/main.scss'
  ],

  build: {
      transpile: ['@vuepic/vue-datepicker']
  },

  devtools: { enabled: true }
})

