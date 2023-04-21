<template>
	<div
		:class="[
			'flex align-center h-40 brs4 m-b-10 p-l-20 menu-item',
			item.isActive ? 'bg-b-blue col-b-white' : 'col-b-title'
		]"
		@click="handleMenuItem(item.path)"
	>
		<SvgIcon size="13" :name="item.icon" />

		<div class="m-l-16 f-s-14 l-h-19 f-w-600">{{ item.name }}</div>
	</div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	item: {
		required: true,
		type: Object
	}
});

const { push } = useRouter();

function handleMenuItem(path) {
	push(path);
}
</script>

<style lang="scss" scoped>
.menu-item {
	cursor: pointer;
}
</style>
