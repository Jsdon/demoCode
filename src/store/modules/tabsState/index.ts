import { defineStore } from 'pinia';

import router from '../../../router';
import { piniaPersistConfig } from '../../../utils/config';
import { TabsState } from './props';


// * 首页地址（默认）
export const HOME_URL: string = "/home";
// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址）
export const TABS_BLACK_LIST: string[] = ["/404", "/layout", "/login"];

export const TabsStore = defineStore({
    id: "TabsState",
    state: (): TabsState => ({
        tabsMenuValue: HOME_URL,
        tabsMenuList: [{ title: "首页", path: HOME_URL, icon: "Menu", close: false }]
    }),
    getters: {},
    actions: {
        // 添加Tabs
        async addTabs(tabItem: any) {
            if (TABS_BLACK_LIST.includes(tabItem.path)) return;
            if (this.tabsMenuList.every((item) => item.path !== tabItem.path)) {
                this.tabsMenuList.push(tabItem);
            }
            this.setTabsMenuValue(tabItem.path);
            router.push(tabItem.path);
        },
        // 删除Tabs
        async removeTabs(tabPath: string) {
            let tabsMenuValue = this.tabsMenuValue;
            const tabsMenuList = this.tabsMenuList;
            if (tabsMenuValue === tabPath) {
                tabsMenuList.forEach((item, index) => {
                    if (item.path !== tabPath) return;
                    const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
                    if (!nextTab) return;
                    tabsMenuValue = nextTab.path;
                    router.push(nextTab.path);
                });
            }
            this.tabsMenuValue = tabsMenuValue;
            this.tabsMenuList = tabsMenuList.filter(item => item.path !== tabPath);
        },
        // 设置当前TabsValue
        async setTabsMenuValue(tabsMenuValue: string) {
            this.tabsMenuValue = tabsMenuValue;
        },
    },
    persist: piniaPersistConfig("TabsState")
})