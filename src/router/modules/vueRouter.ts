export default {
    path: '/vue',
    name: 'vue',
    component: () => import('@/views/vue/Vue.vue'),
    children: [
        {
            path: 'useSlots',
            name: 'useSlots',
            component: () => import('@/views/vue/useSlots/UseSlots.vue'),
        },
        {
            path: 'useMouse',
            name: 'useMouse',
            component: () => import('@/views/vue/useMouse/UseMouse.vue'),
        },
    ]
}
