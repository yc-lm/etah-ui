<template>
	<div class="flex h-100p">
		<el-container>
			<el-header>
				<Header />
			</el-header>
			<el-container>
				<el-aside width="220px">
					<Menu />
				</el-aside>
				<el-main>
					<Main />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus';
import Header from './header/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
</script>

<style lang="scss" scoped>
.el-header,
.el-main {
	padding: unset;
}
</style>
