<template>
	<div>
		{{ name }}
	</div>
	<button @click="handleClick">点击</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
defineOptions({
	name: 'TestButton'
});
const name = ref(0);

function handleClick() {
	name.value = Math.random();
}
</script>
