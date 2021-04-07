/**
 * Import Libraries
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Use Plugins
 */
Vue.use(VueRouter)

/**
 * Home View
 */
import Home from '../views/home'

/**
 * Home View
 */
import Ballot from '../views/ballot'
import BallotNew from '../views/ballot/new'
import BallotId from '../views/ballot/id'

/**
 * Auth View
 */
import Auth from '../views/auth'

/**
 * Help View
 */
import Help from '../views/help'

/**
 * Error View
 */
import Error    from '../views/error'
import Error401 from '../views/error/401'
import Error404 from '../views/error/404'

/**
 * Export Vue Router
 */
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'ballot',
      path: '/ballot',
      component: Ballot,
      meta: {
        requiresAuth: true
      },
      children: [{
        name: 'ballot/new',
        path: 'new',
        component: BallotNew,
        meta: {
          requiresAuth: true
        }
      }, {
        name: 'ballot/id',
        path: ':id',
        component: BallotId,
        meta: {
          requiresAuth: true
        }
      }]
    },
    {
      path: '/help',
      component: Help,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'auth',
      path: '/auth',
      component: Auth,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'error',
      path: '/error',
      component: Error,
      meta: {
        requiresAuth: false
      },
      children: [{
        name: 'error/401',
        path: '401',
        component: Error401,
        meta: {
          requiresAuth: false
        }
      }, {
        name: 'error/404',
        path: '404',
        component: Error404,
        meta: {
          requiresAuth: false
        }
      }]
    }
  ]
})
