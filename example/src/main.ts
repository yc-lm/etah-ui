import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
// ant-design样式
import 'ant-design-vue/dist/antd.variable.min.css';
import '@/common/styles/index.scss';
import test from '@packages/index';

function bootstrap() {
	const app = createApp(App);
	setupRouter(app);
	test.install(app);
	app.mount('#app');
}

bootstrap();
