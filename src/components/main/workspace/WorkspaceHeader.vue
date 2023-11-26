<script setup>
import {useWorkspaceStore} from "@/stores/workspace.js";
import {ref} from "vue";
import {useEditorStore} from "@/stores/editor.js";

const workspaceStore = useWorkspaceStore()
const currentVersion = ref(workspaceStore.workspace.currentVersion)

const editorStore = useEditorStore()
</script>

<template>
	<div class="main-header-container">
		<div class="text-container">
			<div>
				<select v-model="currentVersion">
					<option v-for="version in workspaceStore.workspace.versions" :key="version['vid']"
							:value="version['version']">
						{{ version['version'] }}
					</option>
				</select>
			</div>
			<span class="text-title">
				{{ workspaceStore.workspace.title }}
			</span>
		</div>

		<div class="text-container" style="justify-self: end">
			<div class="header-button" v-for="h in editorStore.headerIcon" @click="h.func(editorStore.editorProps)">
				<span class="material-symbols-outlined">{{ h.icon }}</span>
				<span>{{ h.text }}</span>
			</div>
		</div>
	</div>


</template>

<style scoped>
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


.text-title {
	line-height: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.material-symbols-outlined {
	font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 0;
	color: #605a5a;
	font-size: 24px;
}


select {
	padding: 3px;
	margin: 3px 5px;
	border-radius: 4px;
	border: 1px solid #ccc;
}

</style>