import { ActionTree } from 'vuex';
import { AppsState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<AppsState, RootState> = {
	setActiveApp({ commit }, pid): any {
		localStorage.setItem('activeApp', pid);
		commit('setActiveApp', pid);
	},
};
