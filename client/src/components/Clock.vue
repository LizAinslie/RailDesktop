<template>
	<v-layout row align-center>
		<v-flex>
			<h2>{{ time }}</h2>
		</v-flex>
	</v-layout>
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
				websocketUrl = `ws://${window.location.hostname}:8081`;
			}
	
			const ws = new WebSocket(websocketUrl);
			ws.onmessage = (event: any): void => {
				const payload = JSON.parse(event.data);
	
				// console.log(JSON.stringify(payload));
				// console.log(payload.data.time);
	
				if (payload.type === 'STATUS') {
					const timeString = /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2}:\d{2})\.\d{3}Z/.exec(payload.data.time)![1];
	
					let type = 'AM';
					const [hour, minute, second] = timeString.split(/:/g);
					let newHour: number = parseInt(hour, 10);

					if (newHour > 12) {
						newHour -= 12;
						type = 'PM';
					}
	
					this.time = `${newHour}:${minute}:${second} ${type}`;
				}
			};
		}
	}
</script>

<style scoped lang='less'>
	h2 {
		color: white;
		user-select: none;
		margin-right: 10px;
	}
</style>