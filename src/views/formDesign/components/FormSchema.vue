<template>
    <form @submit.prevent="onSubmit">
        <div v-for="field in fields" :key="field.name">
            <label :for="field.name">{{ field.title }}</label>
            <input :type="field.type" :name="field.name" v-model="formData[field.name]" :required="isRequired(field)"
                :pattern="field.pattern">
        </div>
        <button type="submit">提交</button>
    </form>
</template>
  
<script lang="ts">
import { defineComponent, PropType, ref, computed, watchEffect, onMounted, onBeforeMount } from 'vue';

interface Field {
    name: string;
    title: string;
    type: string;
    pattern?: string;
}

interface FormData {
    [key: string]: string;
}

export default defineComponent({
    name: 'MyForm',
    props: {
        schema: {
            type: Object as PropType<{ [key: string]: any }>,
            required: true,
        },
    },
    setup(props) {

        const fields = computed(() => props.schema.properties);
        const formData = ref<FormData>({
            age: "",
            email:"",
            name:"",
        });

        function onSubmit() {
            // 将表单数据发送到后端
            console.log(formData.value);
        }

        function isRequired(field: Field) {
            return props.schema.required.includes(field.name);
        }

        onBeforeMount(() => {
            // 初始化表单数据
            // for (const [key, value] of Object.entries<any>(props.schema.properties)) {
            //     formData.value[key] = value.default || '';
            // }
        });

        return {
            fields,
            formData,
            onSubmit,
            isRequired,
        };
    },
});
</script>