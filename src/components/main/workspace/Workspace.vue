<script setup>
import {useTextbookStore} from "@/stores/textbook.js";
import {useEditorStore} from "@/stores/editor.js";

const textbookStore = useTextbookStore()

const editorStore = useEditorStore()

</script>

<template>
	<div class="ws-core-container">
		<v-md-editor
			:include-level="[1,2, 3, 4]"
			v-model="textbookStore.textbook.content"
			height="100%"
			:mode="editorStore.editorProps.mode"
		></v-md-editor>
	</div>
</template>

<style scoped>
.ws-core-container {
	color: black;
	width: 100%;
	overflow: auto; /* 在这个容器内部提供滚动条 */
	height: calc(100vh - 151px); /* 设置容器高度 */
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}




</style>