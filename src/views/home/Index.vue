<script setup lang="ts">
import { ref } from "vue"
import LogoUrl from "@/assets/logo.png"
import Hello from '@/components/Hello.vue'
import DateTime from '@/components/DateTime.vue'
import Shortcut from '@/components/Shortcut.vue'

const count = ref(1)

function onImgClick(d: number) {
  count.value += d
}
</script>

<template>
  <img class="logo" alt="Vue logo" :src="LogoUrl" @click="onImgClick(0.05)" @contextmenu.prevent="onImgClick(-0.05)" />
  <Hello msg="🌲Welcome to Play Ground🌲" />
  <DateTime />
  <Shortcut />
</template>

<style lang="scss" scoped>
img {
  /* border: 1px solid #fff; */
  cursor: pointer;
  /* filter: brightness(v-bind(count)); */
  /* filter: drop-shadow(16px 16px 10px rgb(231, 134, 157)); */
  /* filter: grayscale(0.5); */
  filter: hue-rotate(var(--logo-hue)) brightness(v-bind(count));
  /* clip-path: polygon(0 6%, 100% 0, 100% 50%, 50% 98%) */
  /* filter: invert(); */
  /* filter: opacity(.58); */
  /* filter: saturate(0.8); */
  /* filter: blur(2px) brightness(.5) drop-shadow(16px 16px 10px rgb(231, 134, 157)) grayscale(50%) hue-rotate(100deg) invert() opacity(.58) saturate(0.8) sepia(50%); */
}

.logo {
  animation: 30s color-change infinite ;
}

@keyframes color-change {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
}
</style>
