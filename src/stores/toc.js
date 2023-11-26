import {defineStore} from "pinia";
import {ref} from "vue";

export const useTocStore = defineStore('toc', () => {
    const tocRef = ref(null)
    const setRef = (ref) => {
        tocRef.value = ref
        toc.value.show = true
    }

    const toc = ref({
        show:false,
        titles:[],
        handleAnchorClick:function (anchor,ref) {
            const {lineIndex} = anchor;

            const heading = ref.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
            const sc = ref.value.$el
            if (heading) {
                console.log("heading is",heading)
                // 注意：如果你使用的是编辑组件的预览模式,则这里的方法名改为 previewScrollToTarget
                ref.value.previewScrollToTarget({
                    target: heading,
                    scrollContainer:window,
                    top:60
                });
            }
        },
        setTitles:function (ref) {
            console.log("set titles function is executing")
            const anchors = ref.value.$el.querySelectorAll('h1,h2,h3');
            const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

            if (!titles.length) {
                toc.value.titles = [];
                return;
            }

            const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

            toc.value.titles = titles.map((el) => ({
                title: el.innerText,
                lineIndex: el.getAttribute('data-v-md-line'),
                indent: hTags.indexOf(el.tagName),
            }));
            console.log("titles is",toc.value.titles)
        }
    })

    return {tocRef,setRef,toc}
})