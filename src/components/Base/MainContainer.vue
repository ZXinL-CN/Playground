<script setup lang="ts">
import { useSlots } from "vue";
import { useRouter } from "vue-router";
const slots = useSlots();
const router = useRouter();
interface Props {
  returnable?: boolean;
}
const prop = defineProps<Props>();

const emit = defineEmits(["onReturn"]);
function handleReturn() {
  emit("onReturn");
}
</script>
<template>
  <div class="container">
    <div v-if="slots.menu" class="menu-container">
      <slot name="menu" />
    </div>
    <div class="layout">
      <div v-if="slots.top" class="top-bar-container">
        <span v-show="prop.returnable" class="return-btn" @click="handleReturn">
          <i class="iconfont icon-a-icon_fanhuidaohang" />
        </span>
        <div class="top-bar">
          <slot name="top" />
        </div>
      </div>
      <div class="main-container">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  flex: 1;
  display: flex;
  width: 100%;
  .menu-container {
    background-color: #fff;
  }

  .layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    .top-bar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 14px 0;
      width: 100%;
      background-color: transparent;
      .return-btn {
        width: 1.5rem;
        height: 1.25rem;
        // text-align: center;
        cursor: pointer;
      }
      .top-bar {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
      }
    }

    .main-container {
      flex: 1;
      display: flex;
      flex-direction: column;

      min-height: 0%;
      // margin: 20px;
      // margin-top: 0;
      padding: 20px;
      background-color: transparent;
    }
  }
}
</style>
