<template>
	<v-bottom-nav app color="black" :value="true">
		<v-layout row align-left :style='searchStyle'>
			<SearchBar />
		</v-layout>
		<v-spacer />
	</v-bottom-nav>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import SearchBar from './SearchBar.vue';
	
	@Component({
		components: {
			SearchBar,
		},
	})
	export default class Taskbar extends Vue {
		private get searchStyle() {
			return {
				maxWidth: '300px',
				marginLeft: '1rem',
			};
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
