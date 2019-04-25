<template>
	<v-text-field
		clearable
		placeholder='Search'
		prepend-inner-icon='search'
		single-line
		:style='style'
		:color='searchColor'
	/>
</template>

<script lang='ts'>
	import { Component, Vue } from 'vue-property-decorator';
	
	@Component
	export default class SearchBar extends Vue {
		private get style() {
			return {
				bottom: '0 !important',
			};
		}

		private get searchColor() {
			return this.$store.state.settings.desktopBackground;
		}
	}
</script>

<style scoped lang='less'>
	
</style>