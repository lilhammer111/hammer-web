<script setup>

import Header from "@/layout/Header.vue";
import Aside from "@/layout/Aside.vue";
import Main from "@/layout/Main.vue";
</script>

<template>
	<div class="common-layout">
		<el-container class="el-c-container">
			<el-header>
				<Header></Header>
			</el-header>
			<el-container>
				<el-aside class="el-aside" width="70px">
					<Aside></Aside>
				</el-aside>
				<el-main class="el-c-main">
					<Main></Main>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped>
.el-c-container {
	height: 100%;
}

.el-c-main {
	padding: 0;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
}
</style>