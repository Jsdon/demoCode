import { defineStore } from 'pinia';

import { piniaPersistConfig } from '../../../utils/config';
import { IMenuOptions, IMenuState } from './props';

// MenuStore
export const MenuStore = defineStore({
    id: "MenuState",
    state: (): IMenuState => ({
        // menu collapse
        isCollapse: false,
        // menu List
        menuList: []
    }),
    getters: {},
    actions: {
        async setCollapse() {
            this.isCollapse = !this.isCollapse;
        },
        async setMenuList(menuList: IMenuOptions[]) {
            this.menuList = menuList;
        }
    },
    persist: piniaPersistConfig("MenuState"),
});
