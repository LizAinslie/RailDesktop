<template>
	<v-app dark style='position: relative;'>
		<Topbar></Topbar>
		<div id='desktop'>
			<Window title='Hello World!'>
				yeet
			</Window>
			<Window title='Wew'>
				think thonk
			</Window>
		</div>
		<!--<Taskbar></Taskbar>-->
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Topbar from './components/Topbar.vue';
import Window from './components/Window.vue';

@Component({
	components: {
		Topbar,
		Window,
	},
})
export default class App extends Vue {}
</script>

<style lang="less">
</style>
