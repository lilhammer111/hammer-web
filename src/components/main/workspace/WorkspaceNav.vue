<script setup>
import Nav from "C/common/Nav.vue";
import {onMounted, ref} from "vue";
import {useTextbookStore} from "@/stores/textbook.js";

const textbookStore = useTextbookStore()
const notes = ref('')

onMounted(() => {
	textbookStore.getWorkList()
})


</script>

<template>
	<Nav :Objs="notes" >
		<template #title>Note</template>
	</Nav>
	<Nav  :Objs="textbookStore.works">
		<template #title>Work</template>
	</Nav>
	<div class="nav-op-container">
		<el-tooltip content="create a new work" placement="right">
			<span class="material-symbols-outlined">add</span>
		</el-tooltip>
	</div>

</template>

<style scoped>
.nav-op-container {
	position: absolute;
	bottom: 0;
	left: 0;
}

.material-symbols-outlined {
	font-variation-settings: 'FILL' 0, 'wght' 350, 'GRAD' 0, 'opsz' 24;
	color: var(--mark-gray);
	font-size: 50px;
	margin: 15px;
}

.material-symbols-outlined:hover {
	background-color: var(--light-gray);
	border-radius: 25px;
	color: var(--dart-purple);
	cursor: pointer;
}
</style>