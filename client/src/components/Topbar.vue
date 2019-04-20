<template>
	<v-system-bar status lights-out dark>
		<v-spacer></v-spacer>
		<v-icon>network_wifi</v-icon>
		<Clock/>
	</v-system-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Clock from './Clock.vue';

@Component({
	components: {
		Clock,
	},
})
export default class Topbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>