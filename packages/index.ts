import type { App } from 'vue';
import { parseName } from '@/common/utils/packageInstall';
import TestButton from './test';

const components = [TestButton];

const install = (app: App): void => {
	components.forEach(component => {
		const name = component.name ? component.name : parseName(component);
		console.log(name, component);
		app.component(name, component);
	});
};

export default {
	install,
	TestButton
};
