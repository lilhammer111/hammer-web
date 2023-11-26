import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import path from "path"
import {prismjsPlugin} from "vite-plugin-prismjs";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: 'Icon',
                }),
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
            ],
        }),
        Icons({
            autoInstall: true,
        }),
        prismjsPlugin({
            languages: 'all',
            plugins:['line-numbers'],
            theme:'coy',
            css:true
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            },
            {
                find: 'C',
                replacement: path.resolve(__dirname, 'src/components')
            }
        ]
    }
})
