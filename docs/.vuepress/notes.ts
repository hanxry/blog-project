import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const varietyItem = defineNoteConfig({
    dir: '1.投资品种',
    link: '/variety/',
    sidebar: 'auto',
})
const marketItem = defineNoteConfig({
    dir: '2.市场观察',
    link: '/market/',
    sidebar: 'auto',
})
const strategyItem = defineNoteConfig({
    dir: '3.投资策略',
    link: '/strategy/',
    sidebar: 'auto',
})
export const notes = defineNotesConfig({
    dir: '盗墓笔记',
    link: '/',
    notes: [varietyItem, marketItem, strategyItem]
})
