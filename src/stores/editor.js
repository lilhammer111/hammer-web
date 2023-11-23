import {defineStore} from "pinia";
import {ref} from "vue";

export const useEditorStore = defineStore('editor', ()=> {
    const editorProps = ref({
        mode:'preview'
    })
    const headerIcon =ref([
        {
            icon: 'draw',
            text: 'Edit',
            func: function (editorP) {
                editorP.mode = editorP.mode === 'editable' ? 'preview' : 'editable'
                this.text = this.text === 'Edit' ? 'Preview' : 'Edit'
                this.icon = this.icon === 'draw' ? 'view_timeline' : 'draw'
            }
        },
        {
            icon: 'new_releases',
            text: 'Release',
            func:function (){
                console.log(this.text)
            }
        },
    ])
    return {editorProps, headerIcon}
})
