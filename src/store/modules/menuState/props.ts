
interface IMeta {
    title: string
    icon?: string
}
export interface IMenuOptions {
    path: string;
    meta: IMeta;
    children?: IMenuOptions[];
}
/* MenuState */
export interface IMenuState {
    isCollapse: boolean;
    menuList: IMenuOptions[];
}