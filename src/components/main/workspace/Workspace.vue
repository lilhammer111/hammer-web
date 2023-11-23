<script setup>
import {useTextbookStore} from "@/stores/textbook.js";

const textbookStore = useTextbookStore()
</script>

<template>
	<div class="ws-core-container">
		<v-md-preview :text="textbookStore.textbook.content"></v-md-preview>
	</div>
</template>

<style scoped>
.ws-core-container {
	color: black;
	width: 100%;
	max-height: 85vh; /* 占据视口高度的80% */
	overflow-y: auto;
	padding:0 10px;
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>