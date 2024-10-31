import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '颗粒归仓',
    description: '股票、债券、基金、黄金、房子、车子、人生。。。',

    bundler: viteBundler(),

    theme: plumeTheme({
        // 添加您的部署域名
        // hostname: 'https://your_site_url',

        blog: {
            /**
             * 通过 glob string 配置包含文件，
             * 默认读取 源目录中的所有 `.md` 文件，但会排除 `notes` 配置中用于笔记的目录。
             */
            // include: ['**/*.md'],
            // 如果希望只将源目录下某个目录下的文章读取为博客文章，比如 `blog` 目录，可以配置为：
            include: ['老骥伏枥/**/*.md'],

            /**
             * 通过 glob string 配置排除的文件，相对于 源目录
             */
            exclude: ['.vuepress/', '**/README.md'],

            // 禁用分页
            // pagination: false,
            // 每页显示的文章数量
            pagination: 5,
        },
        sidebar: {
            '/北冥神功/': 'auto'
        },

        plugins: {
            /**
             * Shiki 代码高亮
             * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
             */
            // shiki: {
            // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
            //   languages: ['shell', 'bash', 'typescript', 'javascript'],
            // },

            /**
             * markdown enhance
             * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
             */
            markdownEnhance: {
                demo: true,
                //   include: true,
                //   chart: true,
                //   echarts: true,
                //   mermaid: true,
                //   flowchart: true,
            },

            /**
             *  markdown power
             * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
             */
            // markdownPower: {
            //   pdf: true,
            //   caniuse: true,
            //   plot: true,
            //   bilibili: true,
            //   youtube: true,
            //   icons: true,
            //   codepen: true,
            //   replit: true,
            //   codeSandbox: true,
            //   jsfiddle: true,
            //   repl: {
            //     go: true,
            //     rust: true,
            //     kotlin: true,
            //   },
            // },

            /**
             * 评论 comments
             * @see https://theme-plume.vuejs.press/guide/features/comments/
             */
            // comment: {
            //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            //   comment: true,
            //   repo: '',
            //   repoId: '',
            //   categoryId: '',
            //   mapping: 'pathname',
            //   reactionsEnabled: true,
            //   inputPosition: 'top',
            // },
        },
    }),
})
