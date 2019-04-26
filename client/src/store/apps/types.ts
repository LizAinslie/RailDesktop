export interface MenuApp {
	name: string;
	component: string;
	style: {
		icon: string;
		color: string;
	};
	windowSettings: {
		open: boolean;
		name: string;
	};
}

export interface AppsState {
	activeApp: number;
	activeWindows: any;
	maxActive: number;
	menuApps: any;
}
