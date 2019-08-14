// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';

// eslint-disable-next-line import/first
import 'bootstrap';
import './assets/main.scss';

Vue.use(Vuex);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  // eslint-disable-next-line no-undef
  router,
  store,
  components: { App },
  template: '<App/>',
});
