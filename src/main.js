import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { firestorePlugin } from 'vuefire';
import dotenv from 'dotenv';

dotenv.config();

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
