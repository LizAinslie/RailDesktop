import { ActionTree } from 'vuex';
import { SettingsState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SettingsState, RootState> = {
	updateSettings({ commit }, newSettings): any {
		localStorage.setItem('settings', newSettings);
		commit('updateSettings', newSettings);
	},
};
