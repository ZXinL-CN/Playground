<script setup lang="ts">
import { LINK_LIST } from "@/constant/link";

defineProps<{ msg?: string }>();
</script>

<template>
  <h1>{{ msg || "hello" }}</h1>
  <p>Use the following command to create a new project:</p>
  <code><span class="not-selectable">$</span> npm init vite@latest</code>
  <p>
    <span v-for="item in LINK_LIST" class="link-block">
      <a class="link-btn notranslate" :href="item.link" target="_blank">{{
        item.label
      }}</a>
      |
    </span>
  </p>
</template>

<style lang="scss" scoped>
.link-block {
  cursor: pointer;
}
</style>
