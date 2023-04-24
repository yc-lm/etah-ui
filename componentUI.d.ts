import Vue from 'vue';

declare class UIComponent extends Vue {
	static install(vue: typeof Vue): void;
}

export interface InstallationOptions {
	locale?: any;
	lang?: any;
}

export const version: string;

export const locale: (l: any) => void;

export function install(vue: typeof Vue, options: InstallationOptions): void;

export declare class TestButton extends UIComponent {}
