import type { App } from 'vue';
import TestButton from './TestButton';
import { parseName } from '@common/utils/packageInstall';

const components = [TestButton];

const install = (app: App): void => {
	components.forEach(component => {
		app.component(parseName(component), component);
	});
};

export default {
	install,
	TestButton
};
