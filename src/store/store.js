import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import user from './user';
import movie from './movie';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, common, movie },
});
