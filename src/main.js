<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Popover from 'vue-js-popover';
import App from './App';
import router from './router';

require('./assets/styles/_normalize.css');
require('./assets/styles/_colors.css');
require('./assets/styles/_mixins.css');
require('./assets/styles/_customGlobal.css');

Vue.config.productionTip = false;

Vue.use(router);
Vue.use(Popover, { tooltip: true });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
=======
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
>>>>>>> ad8105387c4ba07d226ad209423978aa3dc39c5b
}).$mount('#app');
