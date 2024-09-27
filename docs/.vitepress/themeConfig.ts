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

    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "切换主题",
    returnToTopLabel: "回到顶部",

    socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ],

    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: "文档搜索"
                },
                modal: {
                    displayDetails: "显示详情",
                    resetButtonTitle: "清楚",
                    backButtonTitle: "返回",
                    noResultsText: "未找到相关结果",
                    footer: {
                        closeText: "关闭",
                        selectText: "选择",
                        navigateText: "切换",
                    }
                }
            }
        }
    },

    docFooter: {
        prev: "上一页",
        next: "下一页"
    },

    outline: {
        label: "当前页",
    },

    lastUpdated: {
        text: "最后更新时间"
    },

}

export default themeConfig
