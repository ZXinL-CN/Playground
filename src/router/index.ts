
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { routerModules } from '@/cache/routerCache'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/Index.vue')
    },
    ...routerModules
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router