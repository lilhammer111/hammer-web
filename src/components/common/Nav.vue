<script setup>
import {ref} from "vue";
import Divider from "C/common/Divider.vue";
import {useTextbookStore} from "@/stores/textbook.js";

defineProps(['Objs'])

const arrow = ref('arrow_right')


const clickHandle = () => {
	arrow.value = arrow.value === 'arrow_right' ? 'arrow_drop_down' : 'arrow_right'
}

const textbookStore = useTextbookStore()
const titleClickHandle = (id, title)=> {
	textbookStore.getTextbookContentAndVersions(id,title)
}

</script>

<template>
	<div class="nav">
		<div class="category-1" @click="clickHandle">
			<span class="material-symbols-outlined">{{ arrow }}</span>
			<div class="nav-text">
				<slot name="title"></slot>
			</div>
		</div>

		<div class="category-2" v-if="arrow === 'arrow_drop_down'" v-for="o in Objs" @click="titleClickHandle(o.textbookID,o.title)">
			<Divider style="border-color: var(--dart-purple);width: 100%"></Divider>
			# {{ o.title }}
		</div>
		<div style="height: 10px"></div>
	</div>
</template>

<style scoped>
.nav {
	color: var(--dart-purple);
	font-weight: var(--white-font-weight);
	border-radius: 10px;
	background-color: var(--mark-gray);
	margin-top: 10px;
	width: 90%;

	font-family: var(--font-nunito);

}

.category-1 {
	margin: 10px 5px 0;
	display: flex;
	cursor: pointer;
}

.material-symbols-outlined {
	font-variation-settings: 'FILL' 0,
	'wght' 400,
	'GRAD' 0,
	'opsz' 24;
	margin-right: 5px;
}

.nav-text {
	margin-left: 20%;
}

.category-2 {
	font-size: 14px;
	margin: 0 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.category-2:hover {
	font-size: 16px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	word-wrap: break-word;
	white-space:normal;
}
</style>