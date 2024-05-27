<template>
    <DialogTemplate>
        <template v-slot:header>
            알림 이이이이잉띠드버거
        </template>
        <template v-slot:body>
            <p>아이씨 왜저래!</p>
        </template>
        <template v-slot:footer>
            <button class="btn btn-info btn-warning btn-sm" @click="confirm">확인</button>
        </template>
    </DialogTemplate>
</template>

<script setup>
import DialogTemplate from "./DialogTemplate.vue";


</script>

<style scoped>
    
</style>