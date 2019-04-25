import { GetterTree } from 'vuex';
import { AppsState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AppsState, RootState> = {
	activeApp(state): number {
		return state.activeApp;
	},
};
