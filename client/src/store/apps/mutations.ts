import { MutationTree } from 'vuex';
import Vue from 'vue';
import { AppsState } from './types';

export const mutations: MutationTree<AppsState> = {
	setActiveApp(state, pid: number) {
		if (!(pid in state.activeWindows)) {
			return;
		}

		state.activeApp = state.activeWindows[pid].active;
	},

	createWindow(state, data: any) {
		if (data.pid && data.pid in state.activeWindows) {
			state.activeWindows[data.pid].windowSettings.open = true;
			return;
		}

		let pid: number;
		(function setPid() {
			pid = Math.floor(Math.random() * (999999 - 100000)) + 100000;
			if (pid in state.activeWindows) {
				setPid();
			}
		})();

		Vue.set(state.activeWindows, pid, {
			component: data.component,
			windowSettings: Object.assign({}, data.windowSettings),
			pid,
			active: state.maxActive++,
		});
	},
	removeWindow(state, name: any) {
		if (name in state.activeWindows) {
			Vue.delete(state.activeWindows, name);
		}
	},
	setWindowOpen(state, data: any) {
		if (!(data.pid in state.activeWindows)) {
			return;
		}
		state.activeWindows[data.pid].windowSettings.open = data.open;
	},
};
