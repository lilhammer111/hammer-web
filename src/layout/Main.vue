<script setup>
import CoreFrame from "@/layout/CoreFrame.vue";
import SearchBar from "C/main/SearchBar.vue";
import ToolBar from "C/main/textbook/TextbookHeader.vue";
</script>

<template>
	<el-row align="middle" class="el-row-c-container">
		<el-col :span="4" class="el-col-1">
			<CoreFrame>
				<template v-slot:header>
					<SearchBar></SearchBar>
				</template>
				<template v-slot:router>
					<router-view name="nav"></router-view>
				</template>
			</CoreFrame>
		</el-col>
		<el-col :span="20" class="el-col-2">
			<CoreFrame>
				<template v-slot:header>
						<router-view name="header"></router-view>
				</template>
				<template v-slot:router>
					<router-view name="core"></router-view>
				</template>
			</CoreFrame>
		</el-col>
	</el-row>
</template>

<style scoped>

.el-row-c-container, .el-col-1, .el-col-2 {
	height: 100%;
	background-color: var(--light-gray);
}

.el-col-1 {
	background-color: rgb(55, 26, 57);
}

</style>