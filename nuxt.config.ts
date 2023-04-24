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
    /*
    TODO: FUTURE
    frytol: {
      baseURL: "https://image.frytolnacestach.cz"
    },
    */
    //dir: '/images-generation',
    //imageDir: '/generated',
    staticFilename: '[publicPath]/images-generation/[name][suffix].[ext]',
    presets: {
      default130: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 130,
          height: 'auto',
        }
      },
      default180: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 180,
          height: 'auto',
        }
      },
      default220: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 220,
          height: 'auto',
        }
      },
      default250: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 250,
          height: 'auto',
        }
      },
      default280: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 280,
          height: 'auto',
        }
      },
      default300: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 300,
          height: 'auto',
        }
      },
      default340: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 340,
          height: 'auto',
        }
      },
      default345: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 345,
          height: 'auto',
        }
      },
      default360: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 360,
          height: 'auto',
        }
      },
      default374: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 374,
          height: 'auto',
        }
      },
      default380: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 380,
          height: 'auto',
        }
      },
      default390: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 390,
          height: 'auto',
        }
      },
      default400: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 400,
          height: 'auto',
        }
      },
      default420: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 420,
          height: 'auto',
        }
      },
      default540: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 540,
          height: 'auto',
        }
      },
      default550: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 550,
          height: 'auto',
        }
      },
      default575: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 575,
          height: 'auto',
        }
      },
      default740: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 740,
          height: 'auto',
        }
      },
      default767: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 767,
          height: 'auto',
        }
      },
      default980: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 980,
          height: 'auto',
        }
      },
      default991: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 991,
          height: 'auto',
        }
      },
      default1139: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 1139,
          height: 'auto',
        }
      },
      default1219: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 1219,
          height: 'auto',
        }
      },
      default1399: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 1399,
          height: 'auto',
        }
      },
      default1920: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 1920,
          height: 'auto',
        }
      },
    }
  }
}
export default config