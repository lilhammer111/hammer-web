<script setup>
import Divider from "C/common/Divider.vue";
</script>

<template>
	<div class="sc-cont">
		<slot name="header"></slot>
		<Divider></Divider>
		<slot name="router"></slot>
	</div>
</template>

<style scoped>
.sc-cont {
	height: 100%;
	font-family: var(--font-nunito);
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
}
</style>