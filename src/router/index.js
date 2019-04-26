import Vue from 'vue';
import Router from 'vue-router';
import store from 'store/store';
import Home from '../components/TheHome';
import Result from '../components/Result';
import Login from '../components/TheLogin';
import MovieDescription from '../components/MovieDescription/MovieDescription';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter(to, from, next) {
        store.getters.checkUser ? next() : next('/login');
      },
    },
    {
      path: '/:type/:id',
      name: 'result',
      component: Result,
      beforeEnter(to, from, next) {
        store.getters.checkUser ? next() : next('/login');
      },
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieDescription,
      beforeEnter(to, from, next) {
        store.getters.checkUser ? next() : next('/login');
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to, from, next) {
        console.log(store.getters.checkUser);

        // store.getters.checkUser;
      },
    },
  ],
  mode: 'history',
});
