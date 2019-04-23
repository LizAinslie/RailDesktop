import Vue from 'vue';
import App from './App.vue';

// Import Plugins
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuex from 'vuex';
import colors from 'vuetify/es5/util/colors';

// Load Plugins
Vue.use(Vuetify, {
	theme: {
		primary: colors.cyan.base,
		secondary: colors.blueGrey.base,
		accent: colors.deepOrange.base,
		error: colors.red.base,
		warning: colors.amber.base,
		info: colors.lightBlue.base,
		success: colors.green.base,
	},
});
// Vue.use(require('vue-moment'));

// Import Vuex Store
import store from './store/index';


Vue.config.productionTip = false;


new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
