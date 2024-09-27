import {defineConfig} from 'vitepress'
import {groupIconMdPlugin, groupIconVitePlugin} from 'vitepress-plugin-group-icons'
import themeConfig from "./themeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Jazzzy",
    description: "A VitePress Site",
    base: '/jazzzy-blog/',
    head: [['link', {rel: 'icon', href: '/jazzzy-blog/favicon.ico'}]],
    themeConfig: themeConfig,
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    vite: {
        plugins: [
            groupIconVitePlugin({
                customIcon: {
                    'dart': 'vscode-icons:file-type-dartlang',
                }
            })
        ],
    }
})
