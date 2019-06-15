// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Popover from 'vue-js-popover';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import firebase from 'firebase/app';
import App from './App';
import router from './router';
import store from './store/store';
import VueMeta from 'vue-meta';

require('./assets/styles/_normalize.css');
require('./assets/styles/_colors.css');
require('./assets/styles/_mixins.css');
require('./assets/styles/_customGlobal.css');

Vue.config.productionTip = false;
Vue.use(Popover, { tooltip: true });
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

new Vue({
  el: '#app',
  router,
  store,
  created() {
    const config = {
      apiKey: 'AIzaSyBi9QWYQa5MC2GxhDdbuVhVAYEhhmKY9Qg',
      authDomain: 'onvix-clone.firebaseapp.com',
      databaseURL: 'https://onvix-clone.firebaseio.com',
      projectId: 'onvix-clone',
      storageBucket: 'onvix-clone.appspot.com',
      messagingSenderId: '833323653452',
    };

    firebase.initializeApp(config);
    // console.log(firebase);
  },
  render: (h) => h(App),
}).$mount('#app');
