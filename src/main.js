import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
require('./assets/_variables.css');
// import 'swiper/dist/css/swiper.css';
Vue.use(Router);
// Vue.use(VueAwesomeSwiper);
const router = new Router({
	routes: [
		{
			path: '/',
			component: App,
		},
	],
});

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
