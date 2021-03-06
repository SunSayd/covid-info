module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'covid-info',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */


  plugins:['~plugins/vuetify.js'],
  modules: [
    '@nuxtjs/axios',
    'nuxt-leaflet',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
  ],
  styleResources: {
    sass: [
      '~/assets/variables.scss', // путь к вашему файлу
    ],
    css: ["@mdi/font/css/materialdesignicons.css"]
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios','vuetify'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

}

