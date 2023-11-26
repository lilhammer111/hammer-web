import {defineStore} from 'pinia'
import {ref} from "vue";
import {getWork, getWorkContent} from "@/api/workspace.js";

export const useWorkspaceStore = defineStore('textbook', () => {
    const workspace = ref({
        title:'',
        content:'',
        currentVersion:'',
        versions: [],
    })

    const works = ref([])

    const getTextbookContentAndVersions = (tid, title) => {
        getWorkContent(tid).then(resp => {
            // console.log("latestTextbook is ",resp.data['data'])
            workspace.value.content = resp.data['data']['latestTextbook']['content']
            workspace.value.title = title
            workspace.value.currentVersion = resp.data['data']['latestTextbook']['version']

            console.log("allVersions is ",resp.data['data'])
            workspace.value.versions = resp.data['data']['allVersions']
        }).catch(e => {
            console.log("getTextbookContentAndVersions()'s error is", e)
        })
    }


    return { workspace,works, getTextbookContentAndVersions}
})