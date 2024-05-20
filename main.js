import App from './App'
import axios from 'axios'
import router from './router'
import { createApp } from 'vue'

const baseURL = "http://localhost:9090"
axios.defaults.baseURL = "http://localhost:9090"

// createApp(App)
//   .use(router) // 使用路由
//   .mount('#app');

const app = createApp(App)
// 确保 _use_ 路由实例使
// 整个应用支持路由。
app.use(router)

app.mount('#app')

// // #ifndef VUE3
// import Vue from 'vue'
// import './uni.promisify.adaptor'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
//   ...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif