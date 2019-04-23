<template>
	<v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
		<template v-slot:activator='{ on }'>
			<span v-on='on' class='clock'>{{ time }}</span>
		</template>
		
		<v-card>
			<v-list>
				<v-list-tile avatar>
					<v-list-tile-avatar color="primary">
						<v-icon>alarm</v-icon>
					</v-list-tile-avatar>

					<v-list-tile-content>
						<v-list-tile-title>{{ time }}</v-list-tile-title>
						<v-list-tile-sub-title>{{ date }}</v-list-tile-sub-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script lang='ts'>
	import { Component, Vue } from 'vue-property-decorator';
	import dateformat from 'dateformat';
	import Constants from '../Constants';
	
	@Component
	export default class Clock extends Vue {
		private time: string = '';
		private date: string = '';
		private menu: boolean = false;
	
		public mounted() {
			const ws = new WebSocket(Constants.wsUri);
			ws.onmessage = (event: any): void => {
				const payload = JSON.parse(event.data);
	
				// console.log(JSON.stringify(payload));
				// console.log(payload.data.time);
	
				if (payload.type === 'STATUS') {
					const timeString = Constants.timeRegex.exec(payload.data.time)![1];
					const dateString = Constants.dateRegex.exec(payload.data.time)![1];
	
					let type = 'AM';
					const [hour, minute, second] = timeString.split(/:/g);
					let newHour: number = parseInt(hour, 10);

					if (newHour > 12) {
						newHour -= 12;
						type = 'PM';
					}
	
					this.time = `${newHour}:${minute}:${second} ${type}`;
					this.date = dateString.replace(/-/g, '/');
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
	
	.clock {
		&:hover {
			cursor: pointer;
		}
	}
</style>