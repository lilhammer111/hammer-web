<script setup>
import {ref} from "vue";
import {onMounted} from 'vue'
import {getSubscriptions} from "@/api/textbook.js";

const myTreeRef = ref(null);
const data = ref([
	{
		label: 'Subscription',
		children: [{
			label: "hahah"
		}],
	}
])
const defaultProps = {
	children: 'children',
	label: 'label',
}


onMounted(()=> {

})
const showSubscriptions= (nodeObj, nodeProp, treeNode, eventObj)=> {
}
</script>

<template>
	<el-tree
		:data="data"
		default-expand-all
		:props="defaultProps"
		ref="myTreeRef"
		@node-click="showSubscriptions"/>
</template>

<style scoped>
.el-tree{
	background: none;
}


:deep(.el-tree-node ) {
	--el-tree-node-hover-bg-color: var(--mark-gray);
}

/*:deep(.el-tree-node__children:hover ) {
	--el-tree-node-hover-bg-color: var(--mark-gray);
}*/
</style>