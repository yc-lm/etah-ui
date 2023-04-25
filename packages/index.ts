import type { App } from 'vue';
import TestButton from './TestButton';

const components = [TestButton];

const install = (app: App): void => {
	components.forEach(component => {
		app.component(component.name, component);
	});
};

export default {
	install,
	TestButton
};
