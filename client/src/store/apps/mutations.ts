import { MutationTree } from 'vuex';
import { AppsState } from './types';

export const mutations: MutationTree<AppsState> = {
	setActiveApp(state, pid: any) {
		if (!(pid in state.activeWindows)) {
			return;
		}

		state.activeApp = state.activeWindows[pid].active;
	},
};
