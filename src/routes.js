//Auth Pages
import Dashboard from './pages/auth/Dashboard.vue'

//Non-Auth Pages
import Home from './pages/non-auth/Index.vue'

//Custom Pages
import FourOFour from './pages/custom/404.vue'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      showProgressBar: true,
    },
  },

  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    meta: {
      showProgressBar: true,
    },
  },

  {
    name: '404',
    path: '*',
    component: FourOFour,
    meta: {
      showProgressBar: true,
    },
  },
]
