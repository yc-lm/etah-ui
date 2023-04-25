import type { App } from 'vue';
import type { defineComponent } from 'vue';

export const withInstall = (component: ReturnType<typeof defineComponent>, alias?: string) => {
	component.install = (app: App): void => {
		app.component(component.name, component);
		if (alias) {
			app.config.globalProperties[alias] = component;
		}
	};

	type IWithInstall = ReturnType<typeof defineComponent> & { install(app: App): void };

	const _component: IWithInstall = component;

	return _component;
};

export function parseName(component: ReturnType<typeof defineComponent>) {
	const filePath = component.__file;

	if (component.__name) {
		return component.__name;
	}
	if (filePath) {
		const filePathArr = filePath.split('/');
		const filename = filePathArr[filePathArr.length - 1];
		const filenameArr = filename.split('.');
		return filenameArr.length > 1 ? filenameArr[0] : '';
	}
}
