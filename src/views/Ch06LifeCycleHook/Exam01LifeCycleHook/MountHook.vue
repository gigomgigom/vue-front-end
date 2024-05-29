<template>
  <div class="card">
    <div class="card-header">MountHook</div>
    <div class="card-body">

    </div>
  </div>
</template>

<script setup>
    import { onMounted, onUnmounted } from "vue";

    //이 컴포넌트가 Mount되었을때 실행
    onMounted(() => {
        console.log("MountHook 컴포넌트가 Mounted되어서 실행합니다.");
    });
    //이 컴포넌트가 UnMounted되었을때 실행
    onUnmounted(() => {
        console.log("MountHook 컴포넌트가 onUnMounted되어서 실행합니다.");
    });
</script>

<style scoped>

</style>