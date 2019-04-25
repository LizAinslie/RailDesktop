<template>
	<transition name="fade" @after-leave="$emit('close')" @after-enter="$emit('open')">
		<div ref='window' class='window' :style='styleWindow' v-draggable='draggableValue' @mousedown='activate'>
			<v-card class='inner'>
				<v-system-bar window dark class='systemBar' :ref='handleRef'>
					{{ title }}
					<v-spacer />
					<v-icon>remove</v-icon>
					<v-icon class='systemBar__btn' @click='closeBtnClick'>close</v-icon>
				</v-system-bar>
				<slot />
			</v-card>
		</div>
	</transition>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Draggable, DraggableValue } from 'draggable-vue-directive';
import ZElement from '../ZElement';
import { windows } from '../windows';

const instances: Window[] = [];

@Component({
	directives: {
		Draggable,
	},
})
export default class Window extends Vue {
	public zElement!: ZElement;

	private draggableValue: DraggableValue = {};
	private handleRef: string = 'handleId';
	private zIndex: any = 'auto';

	@Prop({ type: Boolean, default: true })
	private isOpen!: boolean;

	@Prop({ default: '' })
	private title!: string;

	@Prop()
	private width?: number;

	@Prop()
	private height?: number;

	public mounted() {
		this.draggableValue.handle = this.$refs[this.handleRef] as HTMLElement;
		this.draggableValue.boundingElement = this.$parent.$el as HTMLElement;

		instances.push(this);
		this.zElement = new ZElement(0, (zIndex: any) => this.zIndex = `${zIndex}`);
		windows.add(this);
	}

	public beforeDestroy() {
		windows.delete(this);
		this.zElement.unregister();
		instances.splice(instances.indexOf(this), 1);
	}

	private activate() {
		this.zElement.raise();
	}

	private get styleWindow() {
		return {
			width: this.width ? `${this.width}px` : '350px',
			height: this.height ? `${this.height}px` : '200px',
			zIndex: this.zIndex,
			display: this.isOpen ? 'default' : 'none',
		};
	}

	@Watch('isOpen')
	private onIsOpenChange(isOpen: boolean) {
		if (isOpen) {
			this.activate();
		}
	}

	private closeBtnClick() {
		this.$emit('update:isOpen', false);
	}
}
</script>

<style scoped lang='less'>
	.systemBar {
		user-select: none;
		
		&__btn {
			cursor: pointer;
		}
	}
	
	.window {
		position: absolute;
		
		& .inner {
			height: 100%;
		}
	}
</style>