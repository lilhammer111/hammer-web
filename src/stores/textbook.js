import {defineStore} from "pinia";
import {ref} from "vue";

export const useTextbookStore = defineStore('tb', ()=> {
    const module = ref([
        {
            text:'Trending',
            func:()=>{},
        },
        {
            text:'Authors',
            func:()=>{},
        },
        {
            text:'Academy',
            func:()=>{},
        },
    ])
    const headerIcon = ref([
        {
            icon:'tune',
            text:'Filter',
        },
    ])
    return {headerIcon, module}
})