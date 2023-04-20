<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function Jump(name: string) {
  router.push({ name: name })
}
</script>

<template>
  <div class="game">
    <button @click="Jump('gobang')">Gobang</button>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
