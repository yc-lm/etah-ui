<template>
	<div class="flex h-100p">
		<div>
			<header>
				<Header />
			</header>

			<div class="flex">
				<div style="width: 220px">
					<Menu />
				</div>
				<main>
					<Main />
				</main>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Header from './header/headerIndex.vue';
import Menu from './menu/menuIndex.vue';
import Main from './main/mainIndex.vue';
</script>

<style lang="scss" scoped>
.el-header,
.el-main {
	padding: unset;
}
</style>
