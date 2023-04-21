<template>
	<div class="main">
		<router-view />
	</div>
</template>

<script lang="ts"></script>

<style lang="scss">
.main {
	//@extend .w-h-100p;
	width: 100%;
	height: 100%;
	min-width: 1150px;
}

#app {
	@extend .main;
}
</style>
