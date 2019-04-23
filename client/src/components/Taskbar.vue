<template>
	<v-bottom-nav app color="black" :value="true" class="text-xs-right">
		<v-layout>
			<v-spacer />
			<WifiIndicator />
			<Clock />
		</v-layout>
	</v-bottom-nav>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Clock from '@/components/Clock.vue';
	import WifiIndicator from '@/components/WifiIndicator.vue';

	@Component({
		components: {
			Clock,
			WifiIndicator,
		},
	})
	export default class Taskbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
