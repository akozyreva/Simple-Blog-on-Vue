import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import { routes } from './routes';


import store from './store'

axios.defaults.baseURL = 'https://blog-9734f.firebaseio.com/blog.json';

export const eventBus = new Vue({
	methods: {
		sendMsgToModal(msg) {
			this.$emit('textMsg', msg);
		}
	}
});

Vue.use(VueRouter);
const router = new VueRouter({
	routes: routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
