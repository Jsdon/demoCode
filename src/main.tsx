import './assets/styles/base.less';
import './assets/styles/element.less';
import 'element-plus/dist/index.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createApp } from 'vue';


import pinia from './store';
import { Login } from './views/login';
import { router } from './router/index';
import { APP1 } from './App';

const app = createApp(() => <APP1 />)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 去掉控制台vue的官方警告信息
app.config.warnHandler = () => null

app.use(router).use(pinia).use(ElementPlus, { locale: zhCn, });
app.mount('#app');