<script setup lang="ts">
import Menu from "./Menu.vue";
</script>

<template>
  <div class="vue-container">
      <Menu></Menu>
      <router-view></router-view>
  </div>
</template>

<style scoped>
.vue-container {
  display: flex;
}
</style>
