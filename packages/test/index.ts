import type { App, defineComponent } from 'vue';
import TestButton from './TestButton.vue';

TestButton.install = (app: App): void => {
	console.log('button组件注册全局');
	app.component(TestButton.name, TestButton);
};

type IWithInstall = ReturnType<typeof defineComponent> & { install(app: App): void };

const _TestButton: IWithInstall = TestButton;
export default _TestButton;
