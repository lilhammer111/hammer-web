<script setup>
import {useWorkspaceStore} from "@/stores/workspace.js";
import RightHeader from "C/common/header/RightHeader.vue";
import {useTextbookStore} from "@/stores/textbook.js";

const textbookStore=useTextbookStore()
</script>

<template>
<div class="main-header-container">
	<div class="module-container">
		<span class="module-text" v-for="m in textbookStore.module" @click="m.func"> {{ m.text}}</span>
	</div>

	<RightHeader :icons="textbookStore.headerIcon"></RightHeader>
</div>
</template>

<style scoped>
.module-container {
	font-size:var(--xl-font-size);
	margin-left: 5px;
	display: flex;
	justify-content: start;
	align-items: center;
}

.module-text {
	margin-right: 20px;
	color: var(--light-purple);
}
.module-text:hover {
	cursor: pointer;
	font-weight: bold;
	color: var(--text-hover-purple);
	text-decoration: 1px var(--text-hover-purple) underline;
}

</style>