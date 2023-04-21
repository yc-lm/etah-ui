import type { RouteRecordRaw } from 'vue-router';
import Layout from '@example/layout/index.vue';

const ViewInfo: RouteRecordRaw = {
	path: '/home',
	name: 'Home',
	component: Layout,
	redirect: '/home/index',
	children: [
		{
			path: 'index',
			name: 'index',
			component: () => import(/* webpackChunkName: "PictureSet" */ '@example/views/home/index.vue'),
			meta: {
				title: '首页'
			}
		}
	]
};

export default ViewInfo;
