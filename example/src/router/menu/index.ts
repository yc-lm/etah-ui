/**
 * 左侧菜单
 * 不写根据路由自动生成了，赶时间.
 * 可以参考路由引入方式自动引入，结构更清晰
 */

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

const menuList = [
	{
		path: '/blackboardSetting',
		name: '板书设置',
		icon: 'blackboard'
	},
	{
		path: '/displayOutput',
		name: '显示输出',
		icon: 'displayOutput'
	},
	{
		path: '/networkConfiguration',
		name: '网络配置',
		icon: 'networkConfiguration'
	},
	{
		path: '/platformBinding',
		name: '平台绑定',
		icon: 'platformBinding'
	},
	// {
	// 	path: '/simulationDebugging',
	// 	name: '模拟调试',
	// 	icon: 'simulationDebugging'
	// },
	// {
	// 	path: '/dataStatistics',
	// 	name: '数据统计',
	// 	icon: ''
	// },
	{
		path: '/systemInfo',
		name: '系统信息',
		icon: 'systemInfo'
	}
] as IMenuItem[];

export function getMenuList() {
	return menuList.map(item => ({
		...item,
		isActive: false
	}));
}
