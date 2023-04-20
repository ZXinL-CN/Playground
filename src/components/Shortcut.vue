<script setup lang="ts">
import { useRouter } from "vue-router";
import { routerModules } from "@/cache/routerCache";

const router = useRouter();
function goToPath(path: any) {
  router.push(path);
}
</script>

<template>
  <div class="short-cut">
    <button
      v-for="(mod, index) in routerModules"
      :key="index"
      @click="goToPath(mod.path)"
    >
      {{ mod?.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.short-cut button {
  cursor: pointer;
  width: 100px;
  height: 40px;
  color: var(--bg-color);
  background-color: var(---btn-color);
  box-shadow: 6px 6px 2px -2px #fff;
  transition: all 0.8;
  &:hover {
    box-shadow: 6px 6px 2px 0px #fff;
    font-size: 16px;
    color: aqua;
    transform: translate(-5px, -5px);
  }
  overflow:ellipsis;
}
</style>
