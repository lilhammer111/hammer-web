<script setup>
defineProps(['icons'])
</script>

<template>
	<div class="text-container" >
		<div class="header-button" v-for="h in icons" @click="h.func">
			<span class="material-symbols-outlined">{{ h.icon }}</span>
			<span>{{ h.text }}</span>
		</div>
	</div>
</template>

<style scoped>
.text-container {
	height: 40px;
	display: flex;
	justify-content: start;
	align-items: center;
	justify-self: end;
}

.header-button {
	font-size: 14px;
	margin-left: 10px;
	width: 80px;
	padding: 4px 4px 4px 2px;
	border-radius: 5px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 4px;
}

.header-button:hover {
	cursor: pointer;
	background-color: var(--mark-gray);
}

.material-symbols-outlined {
	font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 0;
	color: #605a5a;
	font-size: 24px;
}
</style>