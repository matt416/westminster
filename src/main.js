import Vue from 'vue'
import App from './App.vue'
import './styles/app.sass'

import store from './store'

Vue.config.productionTip = false

window.VueGlobal = new Vue({
	store,
	render: h => h(App)
}).$mount('#app')