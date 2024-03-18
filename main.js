import App from './App'
import axios from 'axios'
import {createRouter ,createWebHistory} from 'vue-router'

const baseURL = "http://localhost:9090"
axios.defaults.baseURL = "http://localhost:9090"

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif