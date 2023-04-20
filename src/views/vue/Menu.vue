<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToNamae(name: any) {
  router.push({ name });
}
</script>

<template>
  <ul class="menu">
    <li v-for="name in ['useSlots', 'useMouse']" :key="name" @click="goToNamae(name)">
      {{ name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu {
  margin: 0;
  margin-right: 10px;
  padding: 0;
  width: 20%;
  list-style: none;
  color: var(--lava-falls);
  background-color: var(--puprle-rose);
  border: 2px solid var(--lava-falls);
  cursor: pointer;
}
</style>
