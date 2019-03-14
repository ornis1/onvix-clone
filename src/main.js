import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';

Vue.use(Router);

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
