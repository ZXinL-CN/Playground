<script setup lang="ts">
import { reactive } from "vue";
const classMap:any = reactive({
  bounce: ["box"],
  flash: ["box"],
  pulse: ["box"],
  rubberBand: ["box"],
  shakeX: ["box"],
  shakeY: ["box"],
  headShake: ["box"],
  swing: ["box"],
  tada: ["box"],
  wobble: ["box"],
  jello: ["box"],
  heartBeat: ["box"],
  backInDown: ["box"],
  backInLeft: ["box"],
  backInRight: ["box"],
  backInUp: ["box"],
  backOutDown: ["box"],
  backOutLeft: ["box"],
  backOutRight: ["box"],
  backOutUp: ["box"],
  bounceIn: ["box"],
  bounceInDown: ["box"],
  bounceInLeft: ["box"],
  bounceInRight: ["box"],
  bounceInUp: ["box"],
  bounceOut: ["box"],
  bounceOutLeft: ["box"],
  bounceOutRight: ["box"],
  bounceOutDown: ["box"],
  bounceOutUp: ["box"],
  fadeIn: ["box"],
  fadeInDown: ["box"],
  fadeInDownBig: ["box"],
  fadeInLeft: ["box"],
  fadeInLeftBig: ["box"],
  fadeInRight: ["box"],
  fadeInRightBig: ["box"],
  fadeInUp: ["box"],
  fadeInUpBig: ["box"],
  fadeInTopLeft: ["box"],
  fadeInTopRight: ["box"],
  fadeInBottomLeft: ["box"],
  fadeInBottomRight: ["box"],
  fadeOut: ["box"],
  fadeOutDown: ["box"],
  fadeOutDownBig: ["box"],
  fadeOutLeft: ["box"],
  fadeOutLeftBig: ["box"],
  fadeOutRight: ["box"],
  fadeOutRightBig: ["box"],
  fadeOutUp: ["box"],
  fadeOutUpBig: ["box"],
  fadeOutTopLeft: ["box"],
  fadeOutTopRight: ["box"],
  fadeOutBottomLeft: ["box"],
  fadeOutBottomRight: ["box"],
  flip: ["box"],
  flipInX: ["box"],
  flipInY: ["box"],
  flipOutX: ["box"],
  flipOutY: ["box"],
  lightSpeedInRight: ["box"],
  lightSpeedInLeft: ["box"],
  lightSpeedOutLeft: ["box"],
  lightSpeedOutRight: ["box"],
  rotateOut: ["box"],
  rotateOutDownLeft: ["box"],
  rotateOutDownRight: ["box"],
  rotateOutUpLeft: ["box"],
  rotateOutUpRight: ["box"],
  hinge: ["box"],
  jackInTheBox: ["box"],
  rollIn: ["box"],
  rollOut: ["box"],
  zoomIn: ["box"],
  zoomInDown: ["box"],
  zoomInLeft: ["box"],
  zoomInRight: ["box"],
  zoomInUp: ["box"],
  zoomOut: ["box"],
  zoomOutDown: ["box"],
  zoomOutLeft: ["box"],
  zoomOutRight: ["box"],
  zoomOutUp: ["box"],
  slideInDown: ["box"],
  slideInLeft: ["box"],
  slideInRight: ["box"],
  slideInUp: ["box"],
  slideOutDown: ["box"],
  slideOutLeft: ["box"],
  slideOutRight: ["box"],
  slideOutUp: ["box"],
});
type classNameType = keyof typeof classMap;
function onClick(className: classNameType) {
  if (className) {
    classMap[className] = [`box`, `animate__animated`, `animate__${String(className)}`];
  }
  setTimeout(() => {
    classMap[className] = ["box"];
  }, 1000);
}
</script>

<template>
  <div class="animation">
    <h3><a href="https://animate.style/" target="_blank">Animation.css</a></h3>
    <div class="animation-list">
      <div
        v-for="item in Object.keys(classMap)"
        :class="classMap[item]"
        @click="onClick(item as classNameType)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animation {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .animation-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 280px;
      height: 240px;
      border: 1px solid #ccc;
      margin: 5px;
      cursor: pointer;
      user-select: none;
    }
  }
}

</style>
