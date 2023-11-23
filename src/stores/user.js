import {defineStore} from 'pinia'
import {ref} from "vue";


export const useLoginStore = defineStore('login', () => {
    const loginObj = ref({
        loginModalShowed: false,
        loginButtonDisabled: false,
    })


    const afterLogin = (token) => {
        loginObj.value.loginModalShowed = false
        loginObj.value.loginButtonDisabled = true
        localStorage.setItem('token', token)
    }

    const refresh = () =>{
        const logged = localStorage.getItem('logged')
        console.log("logged flag in local storage: ",logged)
        if (logged) {
            const loggedFlag = JSON.parse(logged)
            loginObj.value.loginButtonDisabled = true
        }
    }

    return {loginObj, afterLogin, refresh}
})


export const useUserInfoStore = defineStore('user', () => {
    const userObj = ref({
        profile: 'Your profile description',
        username: 'Username',
        email: 'your email',
        avatarPath: 'avatarPath',
    })
    const afterLogin = (data)=>{
        userObj.value.username = data['username']
        userObj.value.profile = data['profile']
        userObj.value.email = data['email']
        userObj.value.avatarPath = data['avatarPath']
    }
    const $reset = () => {
        userObj.value.email = 'your email< reset >'
        userObj.value.profile = 'Your profile description< reset >'
        userObj.value.username = 'Username < reset >'
        userObj.value.avatarPath = 'avatarPath < reset >'
    }

    const refresh = () =>{
        const userInfo = localStorage.getItem('user_info')
        console.log("user info in local storage: ",userInfo)
        // user info in local storage:  {"userObj":{"profile":"","username":"lilhammer111","email":""}}

        if (userInfo) {
            // 解析userInfo字符串为JavaScript对象
            const userInfoObj = JSON.parse(userInfo)

            userObj.value.username = userInfoObj.userObj.username;
            userObj.value.email = userInfoObj.userObj.email;
            userObj.value.profile = userInfoObj.userObj.profile;
            userObj.value.avatarPath = userInfoObj.userObj.avatarPath;
        }
    }

    return {userObj, $reset,afterLogin,refresh}
})




