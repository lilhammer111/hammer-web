import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/routes/index.js";
import { createPinia } from 'pinia'
import {useLoginStore, useUserInfoStore} from "@/stores/user.js";
// v-md-editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// vuepress theme
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// code copy
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// code highlight
import Prism from 'prismjs';
// menu
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import {useTocStore} from "@/stores/toc.js";

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
    extend(md){
        md.use(markdownItTocDoneRight,{
            callback: (html, ast) => {
                const tocStore = useTocStore()
                tocStore.h = html
            }
        })
    }
}).use(createCopyCodePlugin())



const app = createApp(App)
app.use(router).use(createPinia()).use(VueMarkdownEditor).mount('#app')


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
