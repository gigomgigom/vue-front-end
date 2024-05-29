<template>
  <div class="card">
    <div class="card-header">Exam03ProvideInject</div>
    <div class="card-body">
        <div>
            <p>data1 : {{ data1 }}</p>
            <p>data2.name1 : {{ data2.name1 }}</p>
            <p>data2.name2 : {{ data2.name2 }}</p>
            <button class="mt-2 btn btn-info btn-sm" @click="changeData">데이터 변경</button>
        </div>
        <hr/>
        <ChildA/>
    </div>
  </div>
</template>

<script setup>
    import { ref, provide } from "vue";
    import ChildA from "./ChildA.vue"

    //상태 설정
    const data1 = ref("parent-value1");
    const data2 = ref({
        name1: "parent-value2",
        name2: "parent-value3"
    });

    //하위 컴포넌트로 데이터를 제공
    provide("message", { data1, data2 });

    //제공받은 데이터(상태)를 변경하는 함수
    function changeData() {
      console.log("상위 컴포넌트에서 상태 데이터를 변경합니다.");
      data1.value = data1.value += "0";
      data2.value.name1 = data2.value.name1 += "0";
      data2.value.name2 = data2.value.name2 += "0";
    }
</script>

<style scoped>

</style>