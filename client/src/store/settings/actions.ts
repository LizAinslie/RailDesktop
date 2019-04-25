import { ActionTree } from 'vuex';
import { SettingsState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SettingsState, RootState> = {
	updateSettings({ commit }, newSettings): any {
		commit('updateSettings', newSettings);
	},
};
