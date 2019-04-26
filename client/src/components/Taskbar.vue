<template>
	<v-bottom-nav app color='black' :value='true'>
		<!--<v-layout row align-left :style='searchStyle'>-->
		<!--	<SearchBar />-->
		<!--</v-layout>-->
		<HomeButton />
		<TaskbarItem v-for='(window,active) in windows' :key='active' :pid='parseInt(window.pid)' :window='window'></TaskbarItem>
		<v-spacer />
	</v-bottom-nav>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import SearchBar from './SearchBar.vue';
	import TaskbarItem from './TaskbarItem.vue';
	import HomeButton from './HomeButton.vue';
	
	@Component({
		components: {
			SearchBar,
			TaskbarItem,
			HomeButton,
		},
	})
	export default class Taskbar extends Vue {
		private get searchStyle() {
			return {
				maxWidth: '300px',
				marginLeft: '1rem',
			};
		}

		private get windows() {
			const data: any = this.$store.state.apps.activeWindows;
			const newWindows: any = {};
			for (const key in data) {
				newWindows[data[key].active] = data[key];
			}
			return newWindows;
		}

		private get active() {
			return this.$store.state.apps.activeApp;
		}

		private set active(app) {
			this.$store.commit('apps/setActiveApp', app);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
