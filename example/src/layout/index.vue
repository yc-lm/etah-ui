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
