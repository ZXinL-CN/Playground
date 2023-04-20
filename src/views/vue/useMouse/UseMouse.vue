<script setup lang="ts">
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    toRefs,
    withDefaults
} from "vue";
import { useMouse } from '@/hooks/useMouse'



onMounted(() => {
    console.log('执行UseMouse.vue的 onMounted 2');
})

onBeforeMount(() => {
    console.log('执行UseMouse.vue的 onBeforeMount');
})

const { } = useMouse()

onMounted(() => {
    console.log('执行UseMouse.vue的 onMounted 1');
})

onBeforeUpdate(() => {
    console.log('执行UseMouse.vue的 onBeforeUpdate');
})

onUpdated(() => {
    console.log('执行UseMouse.vue的 onUpdated');
})

const props = withDefaults(defineProps<{
    name?: string
}>(), {
    name: 'zs'
})
const { name } = toRefs(props)

console.log(name);
onBeforeUnmount(() => {
    console.log('执行UseMouse.vue的 onBeforeUnmount');
})

onUnmounted(() => {
    console.log('执行UseMouse.vue的 onUnmounted');
})

</script>

<template>Mouse position is at: {{ }}, {{ }}</template>