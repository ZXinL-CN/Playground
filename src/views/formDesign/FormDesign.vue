<template>
    <FormSchema :schema="schema"></FormSchema>
</template>
  
<script lang="ts" setup>
import FormSchema from './components/FormSchema.vue';
const schema = {
    "title": "用户信息表单",
    "type": "object",
    "properties": {
        "name": {
            "type": "input",
            "title": "姓名"
        },
        "age": {
            "type": "number",
            "title": "年龄"
        },
        "email": {
            "type": "input",
            "title": "邮箱",
            "format": "email"
        }
    },
    "required": ["name", "age", "email"]
}

</script>