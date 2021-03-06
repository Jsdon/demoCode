import { createPinia, defineStore } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { piniaPersistConfig } from '../utils/config';

interface GlobalState {
    token: string;
    userInfo: any;
}

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id: "GlobalState",
    // state: 返回对象的函数
    state: (): GlobalState => ({
        // token
        token: "",
        // userInfo
        userInfo: "",
    }),
    getters: {},
    actions: {
        // setToken
        setToken(token: string) {
            this.token = token;
        },
        // setUserInfo
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo;
        },
    },
    persist: piniaPersistConfig("GlobalState")
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
