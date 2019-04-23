<template>
	<div class='window' v-bind:style="{ width: width ? width : '350px', height: height ? height : '200px' }" v-draggable='draggableValue' v-on:click='changeZIndex()'>
		<v-card class='inner'>
			<v-system-bar window dark class='systemBar' :ref='handleRef'>
				{{ title }}
				<v-spacer />
				<v-icon>remove</v-icon>
				<v-icon>close</v-icon>
			</v-system-bar>
			<slot />
		</v-card>
	</div>
</template>

<script lang='ts'>
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import { Draggable, DraggableValue } from 'draggable-vue-directive';
	const jenga = require('@/jenga');
	
	@Component({
		directives: {
			Draggable,
		},
	})
	export default class Window extends Vue {
		private draggableValue: DraggableValue = {};
		private handleRef: string = 'handleId';

		@Prop()
		private title!: string;

		@Prop()
		private width?: number;

		@Prop()
		private height?: number;

		public mounted() {
			this.draggableValue.handle = this.$refs[this.handleRef] as HTMLElement;
			this.draggableValue.boundingElement = this.$parent.$el as HTMLElement;
		}

		private changeZIndex() {
			jenga.bringToFront(this.$el);
		}
	}
</script>

<style scoped lang='less'>
	.systemBar {
		user-select: none;
	}
	
	.window {
		position: absolute;
		
		& .inner {
			height: 100%;
		}
	}
</style>