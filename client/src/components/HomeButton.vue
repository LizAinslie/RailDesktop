<template>
	<v-menu v-model='menu' :close-on-content-click='false' nudge-right='20'>
		<v-btn dark color='error' slot='activator'>
			<v-icon size='35' color='teal'>menu</v-icon>
		</v-btn>
		<v-card>
			<v-list>
				<v-card-title>
					<h3>Applications</h3>
				</v-card-title>
				<v-list-tile v-for="app in apps" :key="app.component">
					<v-btn :color="app.style.color" class="white--text" @click="menu = false; createWindow({ component: app.component, windowSettings: app.windowSettings, style: app.style })" block>
						<span>{{ app.name }}</span>
						<v-icon right>launch</v-icon>
					</v-btn>
				</v-list-tile>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script lang='ts'>
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class HomeButton extends Vue {
		private menu: boolean = false;

		private get apps() {
			return this.$store.state.apps.menuApps;
		}

		private createWindow(data: any): void {
			this.$store.commit('apps/createWindow', data);
		}
	}
</script>

<style scoped lang='less'></style>