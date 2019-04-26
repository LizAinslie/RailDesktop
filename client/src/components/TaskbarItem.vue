<template>
	<v-btn v-if="pid" dark color="error" slot="activator" @click="open" :value="window.active">
		<span>{{ window.windowSettings.name }}</span>
	</v-btn>
</template>
<script lang='ts'>
	import { Component, Vue, Prop } from 'vue-property-decorator';
	
	@Component
	export default class TaskbarItem extends Vue {
		@Prop()
		private window: any;

		@Prop()
		private pid!: number;

		private open() {
			if (!(this.pid in this.$store.state.apps.activeWindows)) {
				return;
			}

			if (this.isActive && this.isOpen) {
				return this.isOpen = false;
			}

			if (this.isOpen) {
				this.isOpen = false;
			}
			this.$store.commit('apps/setActiveApp', this.pid);
			setTimeout(() => {
				this.isOpen = true;
			}, 1);
		}

		private mounted() {
			this.$store.commit('apps/setActiveApp', this.pid);
		}

		private get isOpen() {
			return this.$store.state.apps.activeWindows[this.pid].windowSettings.open;
		}

		private set isOpen(open) {
			this.$store.commit('apps/setWindowOpen', {
				pid: this.pid,
				open,
			});
		}

		private get isActive() {
			return this.$store.state.apps.activeApp === this.window.active;
		}
	}
</script>
<style lang='less'>
	
</style>