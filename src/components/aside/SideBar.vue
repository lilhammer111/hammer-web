<script setup>
import {ref} from "vue";
import router from "@/routes/index.js";


const tabs = ref([
	{icon: 'public', label: 'world'},
	// {icon: 'school', label: 'academy'},
	{icon: 'book', label: 'textbook'},
	{icon: 'rebase_edit', label: 'workspace'},
	{icon: 'send', label: 'message'},
	{icon: 'help', label: 'help'},
	{icon: 'steppers', label: 'more'},
])

const toSecCat = (path) => {
	router.push('/' + path)
}
</script>

<template>
	<div class="sidebar-container">
		<div v-for="tab in tabs" style="display: flex;flex-direction: column;align-items: center">
			<span class="material-symbols-outlined" style="text-align: center" @click="toSecCat(tab.label)">{{
					tab.icon
				}}</span>
			<p class="icon-label">{{ tab.label }}</p>
		</div>
	</div>

</template>

<style scoped>

.sidebar-container {
	font-family: var(--font-nunito);
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px
}

.material-symbols-outlined {
	/*'wght'：控制图标的字体粗细（权重）。*/
	font-variation-settings: 'FILL' 1, 'wght' 100, 'GRAD' 0, 'opsz' 100;
	color: #ffffff;
	font-size: 35px;
	margin-bottom: 5px;
}

.material-symbols-outlined:hover {
	border-radius: 10px;
	background-color: var(--mark-gray);
	cursor: pointer;

	font-size: 40px;
	transition: all 0.2s ease-in-out;
}

.icon-label {
	margin-bottom: 25px;
	font-size: 11px;
	color: white;
	text-align: center;
	font-family: var(--font-nunito);
//font-family: 'Noto Serif SC', serif; font-family: 'Roboto', sans-serif;
}
</style>

