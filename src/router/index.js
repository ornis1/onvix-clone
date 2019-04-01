import Vue from 'vue';
import Router from 'vue-router';
import MainScreen from 'MainScreen';
import App from '../App';
import Login from '../Login';
import MovieDescription from '../components/MovieDescription/MovieDescription';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainScreen,
    },
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/MovieDescription/:id',
      component: MovieDescription,
    },
  ],
});
