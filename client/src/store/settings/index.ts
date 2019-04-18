import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { SettingsState } from './types';
import { RootState } from '../types';

export const state: SettingsState = {
	desktopBackground: 'default',
};

const namespaced: boolean = true;

export const settings: Module<SettingsState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations,
};
