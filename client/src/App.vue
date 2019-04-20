<template>
	<v-app dark>
		<!--<Topbar></Topbar>-->
		<Taskbar></Taskbar>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Taskbar from './components/Taskbar.vue';

@Component({
	components: {
		Taskbar,
	},
})
export default class App extends Vue {}
</script>

<style lang="less">
</style>
