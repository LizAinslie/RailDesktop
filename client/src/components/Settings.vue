<template>
	<v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
		<template v-slot:activator='{ on }'>
			<v-icon class='settingsBtn' v-on='on'>settings</v-icon>
		</template>

		<v-card>
			<v-list>
				<v-list-tile avatar>
					<v-list-tile-avatar color="primary">
						<v-icon>settings</v-icon>
					</v-list-tile-avatar>

					<v-list-tile-content>
						<v-list-tile-title>Settings</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile avatar>
					<v-list-tile-content>
						<v-list-tile-title>Desktop Background</v-list-tile-title>
					</v-list-tile-content>

					<v-menu v-model="colorMenu" :close-on-content-click="false" offset-x>
						<template v-slot:activator='{ on }'>
							<v-list-tile-avatar :color='color' v-on='on' />
						</template>

						<v-card>
							<color-picker
								theme='dark'
								:color='color'
								@changeColor='onDesktopBackgroundColor'
							/>
						</v-card>
					</v-menu>
				</v-list-tile>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script lang='ts'>
	import { Component, Vue } from 'vue-property-decorator';
	import dateformat from 'dateformat';
	import Constants from '../Constants';
	import colorPicker from './ColorPicker.vue';

	@Component({
		components: {
			colorPicker,
		},
	})
	export default class Settings extends Vue {
		private menu: boolean = false;
		private colorMenu: boolean = false;

		private onDesktopBackgroundColor(color: any) {
			// console.log(color.rgba.r, color.rgba.g, color.rgba.b);
			this.$store.commit('settings/updateSettings', {
				...this.$store.state.settings,
				desktopBackground: `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`,
			});
		}

		private get color() {
			return this.$store.state.settings.desktopBackground;
		}
	}
</script>

<style scoped lang='less'>
	.settingsBtn {
		&:hover {
			cursor: pointer;
		}
	}
</style>