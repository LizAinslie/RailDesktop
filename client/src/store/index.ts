import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { settings } from './settings/index';

const store: StoreOptions<RootState> = {
	state: {
		version: '1.0.0',
	},
	modules: {
		settings,
	},
};

export default new Vuex.Store<RootState>(store);
