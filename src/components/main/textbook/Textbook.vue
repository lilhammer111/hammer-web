<script setup>



</script>

<template>
	<div class="core-tb-container">
		<div class="core-data-display-container">
		</div>


		<el-pagination
			class="pagination"
			background layout="prev, pager, next"
			:total="100"
			hide-on-single-page
		/>
	</div>
</template>

<style scoped>
.core-tb-container {
	height: 100%;
	display: flex;
	justify-content: space-around;
}

.core-data-display-container {
}

.pagination {
	position: fixed;
	bottom: 20px;
}
:deep() {
	--el-color-primary:rgb(160, 75, 182);
	--el-pagination-button-bg-color:rgba(241, 239, 239, 0.8);
	--el-disabled-bg-color:rgba(241, 239, 239, 0.8);
}


</style>