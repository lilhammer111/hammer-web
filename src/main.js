import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/routes/index.js";
import { createPinia } from 'pinia'
import {useLoginStore, useUserInfoStore} from "@/stores/user.js";
// v-md-editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
    Hljs: hljs,
    codeHighlightExtensionMap: {
        vue: 'xml',
    },
}).use(createCopyCodePlugin())



const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VueMarkdownEditor)
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
