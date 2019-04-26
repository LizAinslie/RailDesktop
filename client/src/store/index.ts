import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { settings } from './settings/';
import { apps } from './apps/';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	state: {
		version: '1.0.0',
	},
	modules: {
		settings,
		apps,
	},
	mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if (localStorage.getItem('store') !== null) {
				// Replace the state object with the stored item
				/* tslint:disable */
				this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store')!)));
				/* tslint:enable */
			}
		},
	},
};

export default new Vuex.Store<RootState>(store);
