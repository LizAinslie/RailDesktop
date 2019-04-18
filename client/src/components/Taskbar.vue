<template>
	<v-bottom-nav app color="black" :value="true">
		<v-layout>
			Test Text
		</v-layout>
	</v-bottom-nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Taskbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
