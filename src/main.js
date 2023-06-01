import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router';

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')