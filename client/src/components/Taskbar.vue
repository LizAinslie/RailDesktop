<template>
	<v-bottom-nav app color="black" :value="true" class="text-xs-right">
		<v-layout>
			<v-spacer />
			<Clock />
		</v-layout>
	</v-bottom-nav>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Clock from '@/components/Clock.vue';

	@Component({
		components: {
			Clock,
		},
	})
	export default class Taskbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
