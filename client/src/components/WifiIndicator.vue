<template>
	<v-icon>{{ wifi ? "signal_wifi_4_bar" : "signal_wifi_0_bar" }}</v-icon>
</template>

<script lang='ts'>
	import { Component, Vue } from 'vue-property-decorator';
	import Constants from '@/Constants';

	@Component
	export default class WifiIndicator extends Vue {
		private wifi: boolean = false;
	
		public mounted() {
			const ws = new WebSocket(Constants.wsUri);
			ws.onmessage = (event: any): void => {
				const payload = JSON.parse(event.data);
	
				// console.log(JSON.stringify(payload));
				// console.log(payload.data.time);
	
				if (payload.type === 'STATUS') {
					this.wifi = payload.data.hasInternet;
				}
			};
		}
	}
</script>

<style scoped lang='less'></style>