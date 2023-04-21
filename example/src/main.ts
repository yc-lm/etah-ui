import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
// element样式
import 'element-plus/dist/index.css';
// 公共样式库
//import 'etah-styles/index.scss';
//import './styles/index.scss';
import test from '@packages/index';

function bootstrap() {
	const app = createApp(App);
	setupRouter(app);
	test.install(app);
	app.mount('#app');
}

bootstrap();
