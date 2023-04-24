<template>
	<div>
		<router-view>
			<template #default="{ Component, route }">
				<component :is="Component" :key="route.fullPath" />
			</template>
		</router-view>
	</div>
</template>

<script setup lang="ts"></script>
