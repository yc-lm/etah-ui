<template>
	<div class="flex flex-col h-100p p-t-20 p-l-10 p-r-10 app-menu">
		<MenuItem v-for="item in menuList" :key="item.path" :item="item" />
	</div>
</template>

<script lang="ts" setup>
import { ref, unref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import MenuItem from './MenuItem.vue';
import { getMenuList } from '@example/router/menu';

const route = useRoute();

// 不需要响应式
const menuList = ref(getMenuList());

watchEffect(() => {
	// 不用unref追踪不大路由地址
	const path = unref(route.path);

	menuList.value.forEach(item => {
		item.isActive = false;
		if (path.includes(item.path)) {
			// console.log(path, item.path);
			item.isActive = true;
			return;
		}
	});
});
</script>

<style lang="scss" scoped>
.app-menu {
	box-sizing: border-box;
	//background: $menuBg;
	background-color: #f5f8fa;
}
</style>
