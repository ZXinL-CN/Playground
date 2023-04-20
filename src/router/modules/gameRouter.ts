export default {
  path: '/game',
  name: 'game',
  component: () => import('@/views/game/Game.vue'),
  children: [
    {
      path: '/gobang',
      name: 'gobang',
      component: () => import('@/views/game/components/Gobang.vue'),
    }
  ]
}
