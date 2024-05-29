<template>
  <div class="card">
    <div class="card-header">UpdateHook</div>
    <div class="card-body">
        <p>count : {{ count }}</p>
        <button class="btn btn-success btn-sm me-3" @click="count++">증가</button>
        <button class="btn btn-danger btn-sm" @click="count--">감소</button>
    </div>
  </div>
</template>

<script setup>
    import { onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";

    //상태 생성
    const count = ref(0);

    //이 컴포넌트가 Mount되었을때 실행
    onMounted(() => {
        console.log("UpdateHook 컴포넌트가 Mounted되어서 실행합니다.");
        count.value = 100;
    });
    //이 컴포넌트가 UnMounted되었을때 실행
    onUnmounted(() => {
        console.log("UpdateHook 컴포넌트가 onUnMounted되어서 실행합니다.");
    });

    //이 컴포넌트의 상태가 변경되었을 때
    onBeforeUpdate(() => {
        console.log("UpdateHook 컴포넌트 내부의 Count상태가 ",count.value,"로 변경되었습니다")
    });

    //이 컴포넌트가 변경된 상태로 리렌더링 되었을때
    onUpdated(() => {
        console.log("변경된 상태로 UpdateHook 컴포넌트가 리렌더링이 완료되었습니다.");
        //count.value += 1; 무한루프에 빠지므로 상태 변경 코드를 이 지점에서 실행하면 안된다.
    });
</script>

<style scoped>

</style>