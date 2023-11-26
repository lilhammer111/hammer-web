<script setup>
import {useWorkspaceStore} from "@/stores/workspace.js";
import {useEditorStore} from "@/stores/editor.js";
import {useTocStore} from "@/stores/toc.js";
import {ref,onMounted} from "vue";

const workspaceStore = useWorkspaceStore()
const editorStore = useEditorStore()
const previewRef = ref(null);
const tocStore = useTocStore()

onMounted(()=>{
	tocStore.setRef(previewRef)
	console.log("workspace was mounted")
})
</script>

<template>
	<div class="ws-core-container">
		<v-md-editor
			:include-level="[1,2, 3, 4]"
			v-model="workspaceStore.workspace.content"
			:mode="editorStore.editorProps.mode"
			ref="previewRef"
		></v-md-editor>
	</div>
</template>

<style scoped>
.ws-core-container {
	display: flex;
	flex-direction: row;
	color: black;
	width: 100%;
	overflow: auto; /* 在这个容器内部提供滚动条 */
	height: calc(100vh - 151px); /* 设置容器高度 */
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>