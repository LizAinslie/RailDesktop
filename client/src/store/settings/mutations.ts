import { MutationTree } from 'vuex';
import { SettingsState } from './types';

export const mutations: MutationTree<SettingsState> = {
	updateSettings(state, payload: SettingsState) {
		state.desktopBackground = payload.desktopBackground;
	},
};
