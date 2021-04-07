/**
 * Import External CSS
 */
import 'buefy/dist/buefy.css'

/**
 * Import Libraries
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

/**
 * Import Plugins
 */
import router from './router'
import store from './store'

/**
 * Import App
 */
import app from './app.vue'

/**
 * Use Plugins
 */
Vue.use(VueRouter)
Vue.use(Buefy)

/**
 * Vue Config Object
 */
Vue.config.productionTip = false

/**
 * Router Guard
 */
router.beforeEach(async(to, from, next) => {
  /**
   * Check if MetaMask is actually installed in the browser
   */
  if (typeof window.ethereum === 'undefined' && to.name !== 'error/404') {
    return next({
      name: 'error/404',
      query: {
        metamask: true
      }
    })
  }

  /**
   * Requires Authentication
   * @type {boolean}
   */
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  /**
   * Check if MetaMask is enabled on the website
   * Whitelist this website to use the account
   */
  if (requiresAuth) {
    let address
    try {
      address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      store.commit('setUser', {
        address: address[0]
      })

      return next()
    } catch (e) {
      return next('error/401')
    }
  }

  return next()
})

/**
 * Export Vue Instance
 */
export default new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
