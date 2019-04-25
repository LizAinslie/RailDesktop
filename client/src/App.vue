<template>
	<v-app dark :style='appStyle'>
		<Topbar></Topbar>
		<div id='desktop'>
			<Window title='Hello World!'>
				yeet
			</Window>
			<Window title='Wew'>
				think thonk
			</Window>
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
	get appStyle() {
		const { desktopBackground } = this.$store.state.settings;
		return {
			position: 'relative',
			backgroundColor: desktopBackground === 'default' ? '#303030' : desktopBackground,
		};
	}
}
</script>

<style lang="less">
</style>
