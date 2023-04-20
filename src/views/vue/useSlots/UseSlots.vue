<script setup lang="ts">
import ProSlot from "./components/ProSlot.vue";
</script>

<template>
  <div class="use-slots">
    <h1>slot使用</h1>
    <ProSlot>
      这些内容由默认由默认插槽渲染
      <!-- <template #pro> 这些内容将由pro插槽渲染 </template> -->
    </ProSlot>
  </div>
</template>

<style lang="scss" scoped></style>
