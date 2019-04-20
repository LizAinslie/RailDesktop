import Vue from 'vue';
import App from './App.vue';

// Import Plugins
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuex from 'vuex';

// Load Plugins
Vue.use(Vuex);
Vue.use(Vuetify);
// Vue.use(require('vue-moment'));

// Import Vuex Store
import store from './store/index';


Vue.config.productionTip = false;


new Vue({
	// store,
	render: (h) => h(App),
}).$mount('#app');
