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
}).$mount('#app');
