<template>
	<v-system-bar status lights-out dark>
		<v-spacer></v-spacer>
		<v-icon>network_wifi</v-icon>
		<v-icon>signal_cellular_null</v-icon>
		<v-icon>battery_full</v-icon>
		<span>{{ time | moment('hh:mm') }}</span>
	</v-system-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse, AxiosError } from 'axios';

@Component
export default class Topbar extends Vue {
	private time: any = Date.now();

	public mounted() {
		setInterval(this.getTime, 1000, this);
	}

	private getTime(): void {
		console.log(process.env.VUE_APP_API_URL)
		axios.get(process.env.API_URL + '/system').then((res: AxiosResponse) => {
			console.log(res);
			this.time = res.data.time;
		}).catch((err: AxiosError) => {
			console.error(err);
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>