<script lang="ts" setup>
import { reactive, computed } from "vue";

const form: any = reactive({
  M: {
    x: 100,
    y: 220,
  },
  C: {
    x1: 20,
    y1: 20,
    x2: 160,
    y2: 20,
    x: 300,
    y: 220,
  },
  S: {
    x1: 350,
    y1: 40,
    x: 550,
    y: 60,
  }
});

const lineForm: any = reactive({
  L1: {
    x1: computed(() => form.M.x),
    y1: computed(() => form.M.y),
    x2: computed(() => form.C.x1),
    y2: computed(() => form.C.y1),
  },
  L2: {
    x1: computed(() => form.C.x),
    y1: computed(() => form.C.y),
    x2: computed(() => form.C.x2),
    y2: computed(() => form.C.y2),
  },
  L3: {
    x1: computed(() => form.C.x),
    y1: computed(() => form.C.y),
    x2: computed(() => (2 * form.C.x - form.C.x2)),
    y2: computed(() => (2 * form.C.y - form.C.y2)),
  },
  L4: {
    x1: computed(() => form.S.x),
    y1: computed(() => form.S.y),
    x2: computed(() => form.S.x1),
    y2: computed(() => form.S.y1),
  },
});

const circleForm: any = reactive({
  L1_start: {
    cx: computed(() => lineForm.L1.x1),
    cy: computed(() => lineForm.L1.y1),
  },
  L1_end: {
    cx: computed(() => lineForm.L1.x2),
    cy: computed(() => lineForm.L1.y2),
  },
  L2_start: {
    cx: computed(() => lineForm.L2.x1),
    cy: computed(() => lineForm.L2.y1),
  },
  C3: {
    cx: computed(() => form.C.x),
    cy: computed(() => form.C.y),
  },
  C4: {
    cx: computed(() => form.C.x2),
    cy: computed(() => form.C.y2),
  },
  C5: {
    cx: computed(() => form.S.x),
    cy: computed(() => form.S.y),
  },
  C6: {
    cx: computed(() => form.S.x1),
    cy: computed(() => form.S.y1),
  },
  C7: {
    cx: computed(() => form.C.x),
    cy: computed(() => form.C.y),
  },
  C8: {
    cx: computed(() => (2 * form.C.x - form.C.x2)),
    cy: computed(() => (2 * form.C.y - form.C.y2)),
  },
});

const getDatta = computed(() => {
  return `M${form.M.x} ${form.M.y} 
  C${form.C.x1} ${form.C.y1},
   ${form.C.x2} ${form.C.y2},
   ${form.C.x} ${form.C.y},
  S${form.S.x1} ${form.S.y1},
  ${form.S.x} ${form.S.y},`
});
</script>

<template>
  <div class="svg">
    <div class="svg-content">
      <svg width="700" height="500" style="border: 1px solid black; background-color: teal">
        <path :d="getDatta" fill="none" stroke="black"></path>
        <g>
          <line :x1="lineForm.L1.x1" :y1="lineForm.L1.y1" :x2="lineForm.L1.x2" :y2="lineForm.L1.y2" stroke="red" />
          <circle :cx="circleForm.L1_start.cx" :cy="circleForm.L1_start.cy" r="3" fill="red" />
          <circle :cx="circleForm.L1_end.cx" :cy="circleForm.L1_end.cy" r="3" fill="red" />
        </g>
        <g>
          <line :x1="lineForm.L2.x1" :y1="lineForm.L2.y1" :x2="lineForm.L2.x2" :y2="lineForm.L2.y2" stroke="red" />
          <circle :cx="circleForm.C3.cx" :cy="circleForm.C3.cy" r="3" fill="red" />
          <circle :cx="circleForm.C4.cx" :cy="circleForm.C4.cy" r="3" fill="red" />
        </g>
        <g>
          <line :x1="lineForm.L3.x1" :y1="lineForm.L3.y1" :x2="lineForm.L3.x2" :y2="lineForm.L3.y2" stroke="blue" />
          <circle :cx="circleForm.C5.cx" :cy="circleForm.C5.cy" r="3" fill="red" />
          <circle :cx="circleForm.C6.cx" :cy="circleForm.C6.cy" r="3" fill="red" />
        </g>
        <g>
          <line :x1="lineForm.L4.x1" :y1="lineForm.L4.y1" :x2="lineForm.L4.x2" :y2="lineForm.L4.y2" stroke="red" />
          <circle :cx="circleForm.C7.cx" :cy="circleForm.C7.cy" r="3" fill="red" />
          <circle :cx="circleForm.C8.cx" :cy="circleForm.C8.cy" r="3" fill="red" />
        </g>
      </svg>
    </div>
    <div class="from-content">
      <el-form :model="form" label-width="120px" label-position="top">
        <el-form-item label="MoveTo:">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="form.M.x" placeholder="MoveTo X" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="form.M.y" placeholder="MoveTo Y" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="CurveTo:">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="form.C.x1" placeholder="CurveTo X1" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="form.C.y1" placeholder="CurveTo Y1" />
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="form.C.x2" placeholder="CurveTo X2" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="form.C.y2" placeholder="CurveTo Y2" />
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="form.C.x" placeholder="CurveTo X" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="form.C.y" placeholder="CurveTo Y" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="Smooth CurveTo:">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="form.S.x1" placeholder="Smooth CurveTo X1" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="form.S.y1" placeholder="Smooth CurveTo Y1" />
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="form.S.x" placeholder="Smooth CurveTo X" />
            </el-col>
            <el-col :span="12">
              <el-input v-model="form.S.y" placeholder="Smooth CurveTo Y" />
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.svg {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .svg-content {
    width: 400px;
    flex: 1;
  }

  .from-content {
    .el-form {
      display: flex;

      .el-form-item {
        border: 2px solid salmon;
        padding: 0 2px;
      }
    }

    background-color: rgb(244, 244, 244);
  }
}
</style>