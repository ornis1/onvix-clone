import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Popover from 'vue-js-popover';

// require('./assets/_variables.css');
Vue.use(Router);
Vue.use(Popover, { tooltip: true });
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
