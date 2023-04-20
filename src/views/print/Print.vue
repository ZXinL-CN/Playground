<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const showPdf = ref(true);
function onPrint() {
  window.print();
  alert("弹出打印窗口")
}
function onChangePDF() {
  showPdf.value = !showPdf.value;
}

const pdfUrl = ref("");
const url = `http://localhost:3000/api/pdf`;
axios
  .get(url, {
    responseType: "blob", //这里是声明期望返回的数据类型，为blob
  })
  .then((res) => {
    pdfUrl.value = window.URL.createObjectURL(res.data);
    console.log(pdfUrl.value);
  });
</script>

<template>
  <div id="print" class="print">
    <div class="left">
      <button class="btn" @click="onPrint">点击打印</button>
      <div class="print-test">打印测试</div>
    </div>
    <div class="right">
      <button class="btn" @click="onChangePDF">点击隐藏/显示PDF</button>
      <button><a href="blob:http://localhost:9600/dfc1f4bc-bbfb-46dc-a337-8afbd27071c1" target="_blank">新窗口查看</a>></button>
      <!-- <object
        v-show="showPdf"
        width="800px"
        height="900px"
        data="/%F0%9F%9A%80Testing%20Ground%F0%9F%9B%B8.pdf"
        type="application/pdf"
      ></object> -->

      <object
        v-show="showPdf"
        width="800px"
        height="900px"
        :data="pdfUrl"
        type="application/pdf"
      />

      <!-- <object
        v-show="showPdf"
        width="800px"
        height="900px"
        data="http://localhost:3000/api/pdf"
        type="application/pdf"
      ></object> -->
      <!-- <object
        v-show="showPdf"
        width="800px"
        height="900px"
        data="http://www-tk-cn-test-wh-tkc.tk.cn/sp-greedy/sit?api_s=document.property&api_m=policy.download&applicantName=F109C20A15B0D70C47C50DE46DF3C35B6CE92CE78C91A99DF81&policyNo=E65BE122CF90DE32BE42A47A115C26D61BE47BF106AE43BE62BF2D38DE18D64AE126D92B19DE6D52DE63CE114DF75C21CE46AE33C69A33C64CF83"
        type="application/pdf"
      >
        <embed
          src="http://www-tk-cn-test-wh-tkc.tk.cn/sp-greedy/sit?api_s=document.property&api_m=policy.download&applicantName=F109C20A15B0D70C47C50DE46DF3C35B6CE92CE78C91A99DF81&policyNo=E65BE122CF90DE32BE42A47A115C26D61BE47BF106AE43BE62BF2D38DE18D64AE126D92B19DE6D52DE63CE114DF75C21CE46AE33C69A33C64CF83"
          type="application/pdf"
        />
      </object> -->
      <!-- <object
        v-show="showPdf"
        width="800px"
        height="900px"
        data="/word.docx"
        type="application/doc"
      ></object> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/print.css" print;
.print {
  display: flex;
  object {
    margin: 5px;
  }
  .left {
    width: 30vw;
    .btn {
      width: 200px;
      height: 60px;
      cursor: pointer;
    }
    .print-test {
      width: 200px;
      height: 200px;
      background-color: seagreen;
    }
  }
  .right {
    display: flex;
    align-items: flex-start;
  }
}
</style>
