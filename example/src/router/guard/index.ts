import type { Router } from 'vue-router';
// @ts-ignore
import NProgress from 'nprogress';

export function setupRouterGuard(router: Router) {
	createPageGuard(router);
	createNProgressGuard(router);
}

function createPageGuard(router: Router) {
	// @ts-ignore
	router.beforeEach((to, from, next) => {
		// 有没有登录时间
		next();
	});

	router.afterEach(to => {
		if (to.path === '/login') {
		}
	});
}

/**
 * 路由跳转进度条
 * @param router
 */
function createNProgressGuard(router: Router) {
	router.beforeEach(() => {
		NProgress.start();
		return true;
	});

	router.afterEach(() => {
		NProgress.done();
		return true;
	});
}
