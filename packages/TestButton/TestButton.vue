<template>
	<div>
		{{ name }}
		<span>testbutton</span>
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
	console.log(1111);
	name.value = Math.random();
}
</script>
