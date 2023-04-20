<script lang="ts" setup>
import { ref, computed } from "vue";

const value = ref<string>("HHello\n World FF@F123");
const text = computed(() => value.value.replaceAll(' ', ''));

// 
const getUpperCase = computed(() => {
  return text.value.toLocaleUpperCase();
});

// 
const getLowerCase = computed(() => {
  return text.value.toLocaleLowerCase();
});

// 
const getUnderline_01 = computed(() => {
  return text.value.replace(new RegExp(/([A-Z])/, 'g'), '_$&')
});
// 
const getUnderline_02 = computed(() => {
  return text.value.replace(new RegExp(/(\d+)/, 'g'), '_$&')
});
// 
const getUnderline_03 = computed(() => {
  return text.value.replace(new RegExp(/([A-Z]|\d+)/, 'g'), '_$&')
});
// 
const getUnderline_04 = computed(() => {
  return text.value.replace(new RegExp(/((?<![A-Z\s])[A-Z])/, 'g'), function (match, args, offset, string) {
    return offset === 0 ? match : `_${match}`
  })
});
// 
const getUnderline_05 = computed(() => {
  return text.value.replace(new RegExp(/(\d+)/), function (match, args, offset, string) {
    return `_${match}`
  })
});
</script>

<template>
  <div class="tools">
    <div class="input">
      <div>输入文本</div>
      <textarea v-model="value" cols="60" rows="10"></textarea>
    </div>
    <div class="out-box">
      <div class="output">
        <div>大写转换</div>
        <textarea :value="getUpperCase" rows="10"></textarea>
      </div>
      <div class="output">
        <div>小写转换</div>
        <textarea :value="getLowerCase" rows="10"></textarea>
      </div>
    </div>
    <div class="out-box">
      <div class="output">
        <div>下划线分割-01</div>
        <textarea :value="getUnderline_01" rows="10"></textarea>
      </div>
      <div class="output">
        <div>下划线分割-02</div>
        <textarea :value="getUnderline_02" rows="10"></textarea>
      </div>
      <div class="output">
        <div>下划线分割-03</div>
        <textarea :value="getUnderline_03" rows="10"></textarea>
      </div>
      <div class="output">
        <div>下划线分割-04</div>
        <textarea :value="getUnderline_04" rows="10"></textarea>
      </div>
      <div class="output">
        <div>下划线分割-05</div>
        <textarea :value="getUnderline_05" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tools {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .input {
    border: 5px solid rgb(195, 115, 115);
    align-self: flex-start;
  }

  .out-box {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;

    .output {
      border: 5px solid rgb(115, 186, 195);
      margin: 5px;
    }
  }

}
</style>