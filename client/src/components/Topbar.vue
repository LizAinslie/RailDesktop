<template>
	<v-system-bar status lights-out dark>
		<Settings />
		<v-spacer></v-spacer>
		<WifiIndicator />
		<Clock />
	</v-system-bar>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Clock from './Clock.vue';
import Settings from './Settings.vue';
import WifiIndicator from './WifiIndicator.vue';

@Component({
	components: {
		Clock,
		Settings,
		WifiIndicator,
	},
})
export default class Topbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>