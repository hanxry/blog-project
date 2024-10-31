import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '老骥伏枥', link: '/blog/'},
    {
        text: '盗墓笔记',
        items: [
            {text: '投资品种', link: '/盗墓笔记/1.投资品种/README.md'},
            {text: '市场观察', link: '/盗墓笔记/2.市场观察/README.md'},
            {text: '投资策略', link: '/盗墓笔记/3.投资策略/README.md'}
        ]
    },

    {text: '北冥神功', link: '/北冥神功/README.md'},
    {text: '关于本站', link: '/about/'},
])
