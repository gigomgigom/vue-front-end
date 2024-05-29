<template>
  <div class="card">
    <div class="card-header">ChildA</div>
    <div class="card-body">
        <div>
            <p>data1 : {{ message.data1.value }}</p>
            <p>data2.name1 : {{ message.data2.value.name1 }}</p>
            <p>data2.name2 : {{ message.data2.value.name2 }}</p>
        </div>
        <hr/>
        <ChildB/>
    </div>
  </div>
</template>

<script setup>
    import { inject, onMounted } from "vue";
    import ChildB from "./ChildB.vue";

    //상위 컴포넌트에서 Provide한 상태 데이터(message)를 받아오기
    const message = inject("message");

    onMounted(() => {
        //Provide받아온 데이터들을 사용하기
        console.group("Provide받아온 데이터들을 사용하기[index->ChildA]");
        console.log("message에서 받아온 data1의 값 : ", message.data1.value);
        console.log("message에서 받아온 data2의 값 : ", message.data2.value.name1);
        console.log("message에서 받아온 data2의 값 : ", message.data2.value.name2);
        console.groupEnd();
    });
</script>

<style scoped>

</style>