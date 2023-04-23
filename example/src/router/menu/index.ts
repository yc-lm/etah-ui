/**
 * 左侧菜单
 * 不写根据路由自动生成了，赶时间.
 * 可以参考路由引入方式自动引入，结构更清晰
 */
import HomeRouters from '@example/router/modules/view';

interface IMenuItem {
	// 绑定的路由路劲
	path: string;
	// 菜单名称
	name: string;
	// 菜单的展示图标
	icon: string;
	// 是否选中
	isActive?: boolean;
}

const menuList: IMenuItem[] = [];

export function getMenuList() {
	const homeBaseUrl = HomeRouters.path;
	HomeRouters.children?.forEach((item: any) => {
		const path = homeBaseUrl + '/' + item.path;
		menuList.push({
			path,
			name: item.name,
			icon: '',
			isActive: false
		});
	});
	return menuList;
}
