import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/TheHome';
import Result from '../components/Result';
import Profile from '../components/Profile/Profile';
import Login from '../components/TheLogin';
import MovieDescription from '../components/MovieDescription/MovieDescription';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/actor/:id',
      name: 'actor',
      component: Result,
    },
    {
      path: '/genre/:id',
      name: 'genre',
      component: Result,
    },
    {
      path: '/director/:id',
      name: 'director',
      component: Result,
    },
    {
      path: '/search',
      name: 'search',
      component: Result,
    },
    {
      path: '/:type/:id',
      name: 'result',
      component: Result,
    },
    {
      path: '/collections/:category',
      name: 'collections',
      component: Result,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieDescription,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      component: Profile,
    },
  ],
  mode: 'history',
});
