import 'nprogress/nprogress.css';

import { createRouter, createWebHashHistory } from 'vue-router';


const User = {
    template: '<div>User asdasdsd</div>'
}
const routes = [
    { path: '/', component: User },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
