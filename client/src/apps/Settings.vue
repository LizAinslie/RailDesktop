<template>
	<Window title='Settings' :pid='pid' :width='400' :height='400'>
		<v-card-title>Settings</v-card-title>
	</Window>
</template>
<script lang='ts'>
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import store from '@/store/index';
	import Window from '@/components/Window.vue';

	const component = {
		name: 'SettingsWindow',
		launchName: 'Settings',
		windowSettings: {
			name: 'Settings',
			open: true,
		},
	};

	store.commit('apps/addMenuApp', {
		name: component.launchName,
		style: {
			color: 'grey',
			icon: 'settings',
		},
		component: component.name,
		windowSettings: component.windowSettings,
	});

	@Component({
		components: {
			Window,
		},
	})
	export default class Settings extends Vue {
		public name: string = component.name;

		@Prop()
		private pid!: number;
	}
</script>
<style lang='less'>
	
</style>