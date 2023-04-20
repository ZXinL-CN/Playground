<!-- ProSlot.vue -->

<script lang="ts" setup>
import { useSlots, onMounted } from "vue";

const slots = useSlots();

onMounted(() => {
  console.log(slots);
  if (slots?.default) {
    console.log("使用了默认插槽");
  }
  if (slots?.pro) {
    console.log("使用了pro插槽");
  }
});
</script>

<template>
  <div class="slot">
    <slot>这是默认插槽</slot>
    <br />
    <slot name="pro">这是pro插槽</slot>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  margin: 0 auto;
  width: 200px;
  height: 100px;
  border: 5px solid skyblue;
  background-color: pink;
  color: #111;
}
</style>
