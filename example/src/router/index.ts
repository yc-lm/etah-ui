import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';

// 根路由
const RootRouter: RouteRecordRaw = {
	path: '/',
	name: 'Root',
	redirect: '/home'
};

/*// 登录页面
const LoginRouter: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import(/!* webpackChunkName: "login" *!/ '../views/login.vue'),
    meta: {
        title: '登录'
    }
};

// electron demo
const DemoRouter: RouteRecordRaw = {
    path: '/demo',
    name: 'Demo',
    component: () => import(/!* webpackChunkName: "login" *!/ '../views/demo.vue'),
    meta: {
        title: 'demo'
    }
};

// electron demo
const PlayerRouter: RouteRecordRaw = {
    path: '/player',
    name: 'Player',
    component: () => import(/!* webpackChunkName: "login" *!/ '../views/player.vue'),
    meta: {
        title: 'demo'
    }
};*/

// 不放到菜单的路由名称
export const NO_MENU_ROUTER_NAME = ['Login', 'Root', 'Demo'];

// 通配符页面
// const NotFoundRouter: RouteRecordRaw = {
// 	path: '/404',
// 	name: 'NotFoundRouter',
// 	component: import(/* webpackChunkName: "notfound" */ '../views/404.vue'),
// 	meta: {
// 		title: '页面丢失了'
// 	}
// };

// 自动引入路由
function introduceRouterModules(): RouteRecordRaw[] {
	const menuRouters: RouteRecordRaw[] = [];
	const moduleFiles = require.context('./modules', true, /\.ts$/);
	moduleFiles.keys().forEach(key => {
		menuRouters.push(moduleFiles(key).default);
	});
	return menuRouters;
}

const menuList = introduceRouterModules();

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [RootRouter, ...menuList],
	strict: true
});

export function setupRouter(app: App) {
	app.use(router);
}
