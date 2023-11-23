<script setup>
import Login from "C/login/Login.vue";
import {onMounted, ref} from "vue";
import {useLoginStore} from "@/stores/user.js";
import {useUserInfoStore} from "@/stores/user.js";
import Divider from "C/common/Divider.vue";

const userStore = useUserInfoStore()
const loginStore = useLoginStore()


onMounted(() => {
userStore.refresh()
	loginStore.refresh()
})

const handleLogout = () => {
	loginStore.loginObj.loginButtonDisabled = false
	userStore.$reset()
	localStorage.removeItem('token')
}
</script>

<template>
	<Teleport to="body">
		<Login v-if="loginStore.loginObj.loginModalShowed"></Login>
	</Teleport>
	<el-popover
		placement="right"
		:width="350"
		popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
	>
		<template #reference>
			<img src="@/assets/img.png" alt="avatar" class="avatar">
		</template>
		<template #default>
			<div
				class="demo-rich-content"
				style="display: flex; gap: 16px; flex-direction: column"
			>

				<div style="display: flex;flex-direction: row;justify-content: space-around;align-items: center">
					<img src="@/assets/img.png" alt="avatar" class="avatar" style="margin-bottom: 8px;width: 80px" sizes="400">
					<div >
						<div
							class="demo-rich-content__name"
							style="margin: 0; font-weight: 500"
						>
							<h4 style="color: black">Username:<br></h4>{{ userStore.userObj.username }}
						</div>
						<div
							class="demo-rich-content__mention"
							style="margin: 0; font-size: 14px; color: var(--el-color-info)"
						>
							<h4 style="color: black">Email:<br></h4>{{ userStore.userObj.email }}
						</div>
					</div>
				</div>


				<div class="demo-rich-content__desc" style="margin: 0">
					<h4 style="color: black">Profile:<br></h4>
					{{ userStore.userObj.profile }}
				</div>
				<Divider></Divider>

				<div style="display: flex;flex-direction: row;justify-content: space-around;align-items: center">
					<el-button
						style=" font-size:18px;font-family: inherit"
						type=''
						link
						:disabled="loginStore.loginObj.loginButtonDisabled"
						@click="loginStore.loginObj.loginModalShowed = true"
					>login
					</el-button>
					<el-button
						style=" font-size:18px;font-family: inherit"
						type=''
						link
						:disabled="!loginStore.loginObj.loginButtonDisabled"
						@click="handleLogout"
					>logout
					</el-button>
				</div>
			</div>
		</template>
	</el-popover>


</template>

<style scoped>
.avatar {
	border-radius: 10px;
	background-color: rgba(247, 248, 252, 0.2);
	fill: white;
	margin-bottom: 25px;
	width: 40px;
}


</style>