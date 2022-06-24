export interface TabsOptions {
    path: string;
    title: string;
    icon?: string;
    close?: boolean;
}
export interface TabsState {
    tabsMenuValue: string;
    tabsMenuList: TabsOptions[];
}
