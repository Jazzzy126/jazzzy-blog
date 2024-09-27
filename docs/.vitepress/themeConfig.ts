import {DefaultTheme} from "vitepress";

const themeConfig: DefaultTheme.Config = {
    nav: [
        {text: '首页', link: '/'},
        {
            text: '分类', items: [
                {text: 'flutter', link: '/flutter/api'},
                {text: 'uniapp', link: '/uniapp/api'},
            ]
        },
    ],

    sidebar: [
        {text: "介绍", link: '/introduction'},
        {
            text: "flutter", items: [
                {text: 'api', link: '/flutter/api'},
                {
                    text: "路由",
                    items: [
                        {text: '路由跳转方式', link: '/flutter/router/way'},
                        {text: '命名路由传递参数', link: '/flutter/router/pushNamed-arguments'},
                    ]
                },
            ]
        },
        {
            text: "uniapp", items: [
                {text: 'api', link: '/uniapp/api'},
            ]
        },

    ],

    socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ],

    search: {
        provider: 'local'
    },

    docFooter: {
        prev: "上一页",
        next: "下一页"
    },

    outline: {
        label: "当前页"
    }
}

export default themeConfig
