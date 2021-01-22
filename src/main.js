import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes'
import ToggleSwitch from 'vuejs-toggle-switch'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import vSelect from 'vue-select'
import VueSocialSharing from 'vue-social-sharing'

// Paper Dependencies
import './assets/css/_init.css'
import './assets/js/_init'

//Helpers
import './helpers/filters'

// Auth Layout
import Auth from './layout/auth/Auth.vue'

// Auth Components
import AuthTopNav from './components/auth/nav/TopNav.vue'
import AuthSideNav from './components/auth/nav/SideNav.vue'
import AuthFooter from './components/auth/footer/Footer.vue'

// Non-Auth Components
import HelloWorld from './components/non-auth/HelloWorld.vue'

//Component Registration
Vue.component('auth', Auth)
Vue.component('auth-topnav', AuthTopNav)
Vue.component('auth-sidenav', AuthSideNav)
Vue.component('auth-footer', AuthFooter)
Vue.component('hello-world', HelloWorld)

//Module Registration
Vue.use(VueSocialSharing)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ToggleSwitch)
Vue.use(VueToast)
Vue.use(vSelect)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  meta: {
    showProgressBar: true,
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
