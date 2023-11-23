<script setup>
import {ref} from 'vue'

const input = ref('')

</script>

<template>
	<div class="cat-search-cont">
		<input class="input" type="text">
		<span class="material-symbols-outlined">search</span>
	</div>
</template>

<style scoped>
.cat-search-cont {
	height: 40px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-family: var(--font-nunito);
}

.input {
	margin-top: 5px;
	background-color: rgba(211, 211, 211, 0.5);
	border: 0;
	border-radius: 8px;
	height: 30px;
	width: 90%;
	color: var(--white-font-color);
	font-size: 14px;
}

.input:hover {
	background-color: rgba(211, 211, 211, 0.8)
}

.input:focus{
	border: none;
	outline:2px solid var(--light-blue);
}


.material-symbols-outlined {
	position: absolute;
	top:25%;
	right: 5%;
	color: var(--dart-purple);
}

</style>