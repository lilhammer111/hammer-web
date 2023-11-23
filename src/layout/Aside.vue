<script setup>
import Avatar from "C/login/Avatar.vue";
import SideBar from "C/aside/SideBar.vue";

</script>

<template>
	<div class="aside-container">
		<SideBar></SideBar>
		<Avatar></Avatar>
	</div>
</template>

<style scoped>

.aside-container {
	height: 100%;
	margin-right: 10px;
	display: flex; /* 设置flex布局 */
	flex-direction: column; /* 子项纵向排列 */
	align-items: center; /* 子项在交叉轴上居中对齐 */
	justify-content: space-between; /* 子项在主轴上居中对齐 */
	float: right;
}
</style>