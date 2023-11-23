<script setup>
import {ref} from 'vue';
import {onMounted} from "vue";
import {getCaptcha, login, sendMsgCode, register} from "@/api/user.js";
import {useLoginStore} from "@/stores/user.js";
import {useUserInfoStore} from "@/stores/user.js";
import router from "@/routes/index.js";
// 获取短信验证码

const codeDisabled = ref(true)
const alreadySend = ref(false)
const msgTip = ref('获取短信验证码')

const getMsgCode = async (phone) => {
	codeDisabled.value = false
	setTimeout(() => {
		codeDisabled.value = true
	}, 1000 * 3);
	if (!alreadySend.value) {
		alreadySend.value = true
		try {
			await sendMsgCode(phone)
			let num = 60
			const t = setInterval(() => {
				if (num === 1) {
					clearInterval(t)
					msgTip.value = '获取短信验证码'
				} else {
					num -= 1
					msgTip.value = num + '秒'
				}
			}, 1000, 60)
		} catch (err) {
			if (err.response.status === 400) {
				console.log('频繁发送时的错误信息：', err.response.data);
			} else {
				console.log(err);
			}
			alreadySend.value = false
		}
	}
}


const text = ref({
	title: 'Sign in',
	buttonText: 'No account ? Sign up',
})
const isSignIn = ref(true)

const signUpHandle = () => {
	if (isSignIn.value === true) {
		text.value.title = 'Sign Up'
		isSignIn.value = false
		text.value.buttonText = 'Account exists! Sign in'
	} else {
		isSignIn.value = true
		text.value.title = 'Sign In'
		text.value.buttonText = 'No account ? Sign up'
	}
	respError.value.exist = false

}
const form = ref({
	username: '',
	password: '',
	password2: '',
	captcha: '',
	captchaID: '',
	phone: '',
	smsCode: '',
})
const captchaSrc = ref('')

const respError = ref({
	exist: false,
	errorText: ''
})


onMounted(async () => {
	try {
		const response = await getCaptcha()
		console.log(`captcah ID that getCaptcha() responses is { ${response.data["data"]["captchaID"]} }`)
		captchaSrc.value = response.data['data']['picturePath']
		form.value.captchaID = response.data['data']['captchaID']
	} catch (error) {
		console.log("获取验证码失败:", error);
		if (error.message === 'Network Error') await router.push('/404')
	}
})
const loginStore = useLoginStore()
const userStore = useUserInfoStore()


const handleSubmit = async (e) => {
	e.preventDefault(); // 防止表单默认的提交行为
	if (localStorage.getItem('logged') === true) {
		console.log('已登录')
		return
	}
	if (isSignIn.value === true) {
		try {
			const response = await login({
				phone: form.value.phone,
				password: form.value.password,
				captcha: form.value.captcha,
				captchaID: form.value.captchaID
			})

			console.log(`data that login() responses is`,response.data)
			// if login successfully
			// close login modal,
			// change the state of login and logout button and display the right info of users
			if (response.status === 200) {
				loginStore.afterLogin(response.data['accessToken'])

				userStore.afterLogin(response.data['data'])
			}
		} catch (error) {
			// console.log("error is ", error)
			if (error.response.status === 400 || 404) {
				respError.value.exist = true
				respError.value.errorText = "* " + error.response.data.message
			}
		}
		return
	}


	try {
		const response = await register({
			username: form.value.username,
			phone: form.value.phone,
			password: form.value.password,
			captchaID: form.value.captchaID,
			captcha: form.value.captcha,
			smsCode: form.value.smsCode
		})
		// 关闭模态框
		loginStore.loginModalShowed = false
		loginStore.loginButtonDisabled = true

	} catch (e) {
		// 处理错误
		respError.value.exist = true
		respError.value.errorText = 'please check your entry'
	}
}
</script>

<template>
	<div class="signupFrm">
		<div class="wrapper">
			<form action="" class="form" @submit="handleSubmit">
				<h1 class="title">{{ text.title }}</h1>
				<div v-if="!isSignIn" class="inputContainer">
					<input type="text" class="input" placeholder="a" v-model="form.username">
					<label for="" class="label">Username</label>
				</div>

				<div class="inputContainer">
					<input type="text" class="input" placeholder="a" v-model="form.phone">
					<label for="" class="label">Phone Number</label>
				</div>

				<div class="inputContainer">
					<input type="password" class="input" placeholder="a" v-model="form.password">
					<label for="" class="label">Password</label>
				</div>

				<div v-if="!isSignIn" class="inputContainer">
					<input type="password" class="input" placeholder="a" v-model="form.password2">
					<label for="" class="label">Confirm Password</label>
				</div>

				<div v-if="!isSignIn" class="inputContainer">
					<input type="text" class="input" placeholder="a" v-model="form.smsCode">
					<label for="" class="label">SMS Code</label>
					<el-button style="position: absolute;right:0;height: 43px;z-index: 2;top:1px" color="purple"
							   @click="getMsgCode(form.phone)">{{ msgTip }}
					</el-button>
				</div>


				<div class="inputContainer" style="margin-bottom: 0">
					<input type="text" class="input" placeholder="a" v-model="form.captcha">
					<label for="" class="label">Captcha</label>
					<el-image
						style="position: absolute;right:2px;height: 41px;z-index: 2;top:2px;border-radius: 7px;border-color: purple"
						:src="captchaSrc"
					></el-image>
				</div>

				<div class="inputContainer" style="margin-bottom: 0;height: auto">
					<p v-if="respError.exist" style="float: left;font-size: 12px;margin:2px 4px;color: #ff0000">
						{{ respError.errorText }}</p>
				</div>

				<p class="p" style="margin: 10px 0" @click="signUpHandle">
					{{ text.buttonText }}
				</p>

				<input type="submit" class="submitBtn" :value="text.title">

			</form>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	background-color: white;
	font-family: "lato", sans-serif;
}

.signupFrm {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: fixed; /* 固定定位 */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5); /* 透明灰色背景 */
}


.form {
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	background-color: white;
	width: 400px;
	border-radius: 8px;
	padding: 20px 40px;
	box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
}

.title {
	font-size: 50px;
	margin-bottom: 20px;
}

.inputContainer {
	position: relative;
	height: 45px;
	width: 90%;
	margin-bottom: 17px;
}

.inputContainer:last-of-type {
	margin-bottom: 0;
}

.input {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	border: 1px solid #DADCE0;
	border-radius: 7px;
	font-size: 16px;
	padding: 0 20px;
	outline: none;
	background: none;
	z-index: 1;
}


.label {
	position: absolute;
	top: 15px;
	left: 15px;
	padding: 0 4px;
	background-color: white;
	color: #DADCE0;
	font-size: 16px;
	transition: 0.5s;
	z-index: 0;
}

::placeholder {
	color: transparent;
}

.submitBtn {
	display: block;
	padding: 15px 30px;
	width: 90%;
	border: none;
	background-color: purple;
	color: white;
	border-radius: 6px;
	cursor: pointer;
	font-size: 16px;
	margin-top: 10px;
}

.submitBtn:hover {
	background-color: #9867C5;
	transform: translateY(-2px);
}

.input:focus + .label {
	top: -7px;
	left: 3px;
	z-index: 10;
	font-size: 14px;
	font-weight: 600;
	color: purple;
}

.input:not(:placeholder-shown) + .label {
	top: -7px;
	left: 3px;
	z-index: 10;
	font-size: 14px;
	font-weight: 600;
}

.input:focus {
	border: 2px solid purple;
}

.p {
	font-size: 14px;
	color: deepskyblue;
}

.p:hover {
	cursor: pointer;
	color: purple;
}

.message {
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
}
</style>