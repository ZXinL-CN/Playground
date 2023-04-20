
<script setup lang="ts">
import { ref } from 'vue';
import dayjs from "dayjs";
import socket from './common/socket.common';
import { ISocket } from './interface/socket.interface';
import { ElNotification } from 'element-plus'

const inputValue = ref('')
const tableInfo = ref<ISocket.TableInfo>({
    columns: [
        {
            prop: 'date',
            label: 'time'
        },
        {
            prop: 'msg',
            label: 'message'
        }
    ],
    data: []
})

socket.on('chat message', function (msg) {
    const msgData = {
        date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        msg: msg,
    }
    tableInfo.value.data.unshift(msgData);
});

socket.on('user connected', function (msg) {
    ElNotification({
        message: "a user connected",
        position: 'bottom-right',
    })
});

socket.on('user disconnected', function (msg) {
    ElNotification({
        message: "a user disconnected",
        position: 'bottom-right',
    })
});

const onSubmit = () => {
    if (inputValue!.value) {
        socket.emit('chat message', inputValue.value);
        inputValue.value = '';
    }
}
</script>

<template>
    <div class="socket">
        <BaseSubmit @submit="onSubmit" v-model="inputValue"></BaseSubmit>
        <BaseTable :data="tableInfo.data" :columns="tableInfo.columns"></BaseTable>
    </div>
</template>

<style lang="scss" scoped>
.socket {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>