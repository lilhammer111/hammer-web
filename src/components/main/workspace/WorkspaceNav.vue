<script setup>
import {onMounted, ref} from "vue";
import {getWork} from "@/api/workspace.js";
import Divider from "C/common/Divider.vue";
import {useTextbookStore} from "@/stores/textbook.js";


const arrow = ref('arrow_right')


const textbookStore = useTextbookStore()
const titleClickHandle = (id, title) => {
	textbookStore.getTextbookContentAndVersions(id, title)
}

// const textbookStore = useTextbookStore()
const works = ref([])

onMounted(() => {
	getWork().then(resp => {
		// inspect the resp
		// console.log("work list resp is",resp)
		// business logic
		for (const d of resp.data.data) {
			const tempWork = {
				title: d.title,
				textbookID: d['ID'],
			}
			works.value.push(tempWork)
		}
	}).catch(err => {
		console.log("getWork()'s error is", err)
	})
})

</script>

<template>
	<div class="nav">
		<div class="category-1" @click="arrow= arrow=== 'arrow_right' ? 'arrow_drop_down' : 'arrow_right'">
			<span class="material-symbols-outlined">{{ arrow }}</span>
			<div class="nav-text">
				Work
			</div>
		</div>

		<div class="category-2" v-if="arrow === 'arrow_drop_down'" v-for="o in works"
			 @click="titleClickHandle(o.textbookID,o.title)">
			<Divider style="border-color: var(--dart-purple);width: 100%"></Divider>
			# {{ o.title }}
		</div>
		<div style="height: 10px"></div>
	</div>

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

.nav-op-container > .material-symbols-outlined {
	font-variation-settings: 'FILL' 0, 'wght' 350, 'GRAD' 0, 'opsz' 24;
	color: var(--mark-gray);
	font-size: 50px;
	margin: 15px;
}

.nav-op-container > .material-symbols-outlined:hover {
	background-color: var(--light-gray);
	border-radius: 25px;
	color: var(--dart-purple);
	cursor: pointer;
}


.nav {
	color: var(--dart-purple);
	font-weight: var(--white-font-weight);
	border-radius: 10px;
	background-color: var(--mark-gray);
	margin-top: 10px;
	width: 90%;

	font-family: var(--font-nunito);

}

.category-1 {
	margin: 10px 5px 0;
	display: flex;
	cursor: pointer;
}

.category-1 > .material-symbols-outlined {
	font-variation-settings: 'FILL' 0,
	'wght' 400,
	'GRAD' 0,
	'opsz' 24;
	margin-right: 5px;
}

.nav-text {
	margin-left: 20%;
}

.category-2 {
	font-size: 14px;
	margin: 0 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.category-2:hover {
	font-size: 16px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	word-wrap: break-word;
	white-space: normal;
}
</style>