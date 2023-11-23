import {defineStore} from 'pinia'
import {ref} from "vue";
import {getWork, getWorkContent} from "@/api/workspace.js";

export const useTextbookStore = defineStore('textbook', () => {
    const textbook = ref({
        title:'',
        content:'',
        currentVersion:'',
        versions: [],
    })

    const works = ref([])

    const getTextbookContentAndVersions = (tid, title) => {
        getWorkContent(tid).then(resp => {
            // console.log("latestTextbook is ",resp.data['data'])
            textbook.value.content = resp.data['data']['latestTextbook']['content']
            textbook.value.title = title
            textbook.value.currentVersion = resp.data['data']['latestTextbook']['version']

            console.log("allVersions is ",resp.data['data'])
            textbook.value.versions = resp.data['data']['allVersions']
        }).catch(e => {
            console.log("getTextbookContentAndVersions()'s error is", e)
        })
    }
    return {textbook,works, getTextbookContentAndVersions}
})