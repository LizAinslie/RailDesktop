import { MutationTree } from 'vuex';
import Vue from 'vue';
import { AppsState, MenuApp } from './types';

export const mutations: MutationTree<AppsState> = {
	setActiveApp(state, pid: number): void {
		if (!(pid in state.activeWindows)) {
			return;
		}

		state.activeApp = state.activeWindows[pid].active;
	},

	createWindow(state, data: any): void {
		if (data.pid && data.pid in state.activeWindows) {
			state.activeWindows[data.pid].windowSettings.open = true;
			return;
		}

		let pid: number;
		(function setPid(): void {
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
			style: data.style,
		});
	},

	removeWindow(state, name: any): void {
		if (name in state.activeWindows) {
			Vue.delete(state.activeWindows, name);
		}
	},

	setWindowOpen(state, data: any): void {
		if (!(data.pid in state.activeWindows)) {
			return;
		}
		state.activeWindows[data.pid].windowSettings.open = data.open;
	},

	addMenuApp(state, data: MenuApp): void {
		state.menuApps[data.component] = data;
	},
};
