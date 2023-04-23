import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
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
      { src: 'https://code.jquery.com/jquery-3.6.1.min.js', crossorigin: 'anonymous'},
      { src: '/js/js_m-hamburger.js', type: 'text/javascript', defer: 'defer' },
      { src: '/js/js_o-cookies-dialog.js', type: 'text/javascript', defer: 'defer' }
    ]
  },

  runtimeConfig: {
    public: {
      baseURL: 'https://frytolnacestach-api.vercel.app/api'
    }
  },

  css: [
    '@/assets/css/main.scss'
  ],

  modules: [
    '@nuxt/image-edge'
  ],

  buildModules: [
    '@nuxt/image'
  ],

  image: {
    /*frytol: {
      baseURL: "https://image.frytolnacestach.cz"
    },*/
    //dir: '/images-generation',
    //imageDir: '/generated',
    staticFilename: '[publicPath]/images-generation/[name][suffix].[ext]',
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 300,
          height: 'auto',
        }
      },
      heroRetina: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 600,
          height: 'auto',
        },
        "suffix": "-2x"
      }
    }
  }
}

export default config