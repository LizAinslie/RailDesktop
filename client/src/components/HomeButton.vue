<template>
	<v-menu v-model='menu' :close-on-content-click='false' nudge-right='20'>
		<v-btn dark color='error' slot='activator'>
			<v-icon size='35' color='teal'>menu</v-icon>
		</v-btn>
		<v-card>
			<v-list>
				<v-list-tile>
					
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
	}
</script>

<style scoped lang='less'></style>