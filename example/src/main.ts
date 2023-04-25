import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
// ant-design样式
import 'ant-design-vue/dist/antd.variable.min.css';
// 公共样式库
import 'etah-styles/index.scss';
//import './styles/index.scss';
/*import test from '@packages/index';*/

function bootstrap() {
	const app = createApp(App);
	setupRouter(app);
	//test.install(app);
	app.mount('#app');
}

bootstrap();
