export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'learning-app-spa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
    /**
      When issuing a request to baseURL that needs to pass authentication headers to
      the backend, 'credentials' should be set to 'true'
    */
    credentials: true, // default value of withCredentials is fale
    
    // This is where to hit the server
    baseUrl: 'http://127.0.0.1:8000'
  },

  auth: {
      redirect: {
        login: '/login',
        logout: '/',
        callback: '/login',
        home: '/'
      },
      strategies: {
        laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://127.0.0.1:8000',
        endpoints: {
           login: { url: '/api/login', method: 'post' }
        },
        tokenRequired: false,
        tokenType: false
        }
     },
     localStorage: false
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
