<script setup>
import {useTextbookStore} from "@/stores/textbook.js";
import {ref,onMounted} from "vue";

const textbookStore = useTextbookStore()
const currentVersion = ref(textbookStore.textbook.currentVersion)
</script>

<template>
	<!--	<div class="main-header-container">-->
	<!--		<div class="tool-icon"></div>-->
	<!--	</div>-->
	<div class="main-header-container">
		<div class="text-container">
			<span class="title-style">Title</span>
			<span class="text-title">
				{{textbookStore.textbook.title}}
			</span>
			<div>
				<select v-model="currentVersion">
					<option v-for="version in textbookStore.textbook.versions" :key="version['vid']" :value="version['version']">
						{{ version['version'] }}
					</option>
				</select>
			</div>
		</div>
		<div class="text-container" style="justify-self: end">

			<el-tooltip content="delete the work">
				<span class="material-symbols-outlined">delete</span>
			</el-tooltip>

			<el-tooltip content="edit / save">
				<span class="material-symbols-outlined">edit</span>
			</el-tooltip>

			<el-tooltip content="publish">
				<span class="material-symbols-outlined">new_releases</span>
			</el-tooltip>
			<el-tooltip content="upload local file">
				<span class="material-symbols-outlined">upload_file</span>
			</el-tooltip>

			<el-tooltip content="show menu">
				<span class="material-symbols-outlined">menu</span>
			</el-tooltip>


		</div>
	</div>


</template>

<style scoped>
.main-header-container {
	height: 40px;
	color: black;
	width: 100%;
	display: grid;
	grid-template-columns: 50%   50%;
	grid-template-rows: 40px; /* 自动行高 */
}

.text-container {
	height: 40px;
	display: flex;
	justify-content: start;
	align-items: center;
}

.title-style {
	color: white;
	font-size: 12px;
	background-color: var(--lightest-purple);
	border-radius: 4px;
	padding: 2px 3px;
	margin-right: 5px;
}

.text-title {
	line-height: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.material-symbols-outlined {
	font-variation-settings: 'FILL' 0, 'wght' 350, 'GRAD' 0, 'opsz' 24;
	color: #605a5a;
	font-size: 24px;
	padding: 5px;

}

.material-symbols-outlined:hover {
	cursor: pointer;
	background-color: var(--light-gray);
	border-radius: 6px;
}
select {
	padding: 3px;
	margin: 3px 5px;
	border-radius: 4px;
	border: 1px solid #ccc;
}

</style>