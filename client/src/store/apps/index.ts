import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AppsState } from './types';
import { RootState } from '../types';

export const state: AppsState = {
	activeApp: 0,
	activeWindows: {},
};

const namespaced: boolean = true;

export const apps: Module<AppsState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations,
};
