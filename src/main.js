// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(VueMaterial);

Vue.material.registerTheme(
  'default', {
    primary: 'blue',
    background: 'white',
  },
  'white', {
    primary: 'white',
  },
);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
