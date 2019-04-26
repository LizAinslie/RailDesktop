<template>
	<v-app dark :style='appStyle'>
		<Topbar></Topbar>
		<div id='desktop'>
			<!--<Window title='Hello World!'>-->
			<!--	yeet-->
			<!--</Window>-->
			<!--<Window title='Wew'>-->
			<!--	think thonk-->
			<!--</Window>-->
			<component v-for="(window,pid) in windows" :key="pid" :is="window.component" :pid="pid"></component>
		</div>
		<Taskbar></Taskbar>
	</v-app>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Topbar from './components/Topbar.vue';
	import Taskbar from './components/Taskbar.vue';
	import Window from './components/Window.vue';

	@Component({
		components: {
			Topbar,
			Taskbar,
			Window,
		},
	})
	export default class App extends Vue {
		private get appStyle() {
			const { desktopBackground } = this.$store.state.settings;
			return {
				position: 'relative',
				backgroundColor: desktopBackground === 'default' ? '#303030' : desktopBackground,
			};
		}

		private get windows() {
			return this.$store.state.apps.activeWindows;
		}
	}
</script>

<style lang="less">
</style>
