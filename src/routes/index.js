import {createRouter, createWebHashHistory} from "vue-router";
import NotFound from 'C/common/NotFound.vue'
import Layout from "@/layout/Layout.vue";
import Textbook from "C/main/textbook/Textbook.vue";
import TextbookHeader from "C/main/textbook/TextbookHeader.vue";
import TextbookNav from "C/main/textbook/TextbookNav.vue";
import WorkspaceNav from "C/main/workspace/WorkspaceNav.vue";
import WorkspaceHeader from "C/main/workspace/WorkspaceHeader.vue";
import Workspace from "C/main/workspace/Workspace.vue";


const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path:'textbook',
                components:{
                    nav:TextbookNav,
                    header:TextbookHeader,
                    core:Textbook,
                },
            },
            {
                path:'workspace',
                components:{
                    nav:WorkspaceNav,
                    header:WorkspaceHeader,
                    core:Workspace,
                },
            },
        ]
    },
    {
        path: '/404',
        component: NotFound
    },
    {path: '/:pathMatch(.*)*', name: 'not-found', redirect:'/'},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
