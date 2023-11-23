import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/routes/index.js";
import { createPinia } from 'pinia'
import {useLoginStore, useUserInfoStore} from "@/stores/user.js";
// v-md-editor
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlight js
import hljs from 'highlight.js'

VMdPreview.use(githubTheme, {
    Hljs: hljs,
})


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VMdPreview)
app.mount('#app')


const loginStore = useLoginStore()

loginStore.$subscribe((mutation, state) => {
    console.log("state in loginStore $subscribe: ", state)
    localStorage.setItem('logged', JSON.stringify(state.loginObj.loginButtonDisabled))
})

const userStore = useUserInfoStore()

userStore.$subscribe((mutation, state) => {
    console.log("state in userStore $subscribe: ", state)
    localStorage.setItem('user_info', JSON.stringify(state))

})
