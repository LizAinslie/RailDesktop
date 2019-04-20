<template>
	<span>{{ time }}</span>
</template>

<script lang='ts'>
	import { Component, Vue } from 'vue-property-decorator';
	import dateformat from 'dateformat';
	
	@Component
	export default class Clock extends Vue {
		private time: any = null;
	
		public mounted() {
			let websocketUrl: string = '';
	
			if (process.env.NODE_ENV === 'development') {
				websocketUrl = `wss://${window.location.hostname}:8081`;
			}
	
			const ws = new WebSocket(websocketUrl);
			ws.onmessage = (event: any): void => {
				const payload = JSON.parse(event.data);
	
				// console.log(JSON.stringify(payload));
				// console.log(payload.data.time);
	
				if (payload.type === 'TIME') {
					const timeString = /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2}:\d{2})\.\d{3}Z/.exec(payload.data.time)![1];
	
					let type = 'AM';
					const [hour, minute, second] = timeString.split(/:/g);
					let newHour: number = parseInt(hour, 10);
					const newMinute: number = parseInt(minute, 10);
	
					if (newHour > 12) {
						newHour -= 12;
						type = 'PM';
					}
	
					this.time = `${newHour}:${newMinute} ${type}`;
				}
			};
		}
	}
</script>

<style scoped lang='less'>
	
</style>