import type { App } from 'vue';
import type { defineComponent } from 'vue';

export const withInstall = (component: ReturnType<typeof defineComponent>) => {
	const comp: ReturnType<typeof defineComponent> & { install(app: App): void } = component;
	comp.install = function (app) {
		app.component(comp.displayName || parseName(component), component);
	};
	return comp;
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
