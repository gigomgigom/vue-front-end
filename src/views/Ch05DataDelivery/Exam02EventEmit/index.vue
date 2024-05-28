<template>
  <div class="card">
    <div class="card-header">Exam02Emits</div>
    <div class="card-body">
        <Child 
          @child-event-1="handleChildEvent1" @child-event-2="handleChildEvent2"
          @increment-event="handleIncrementEvent" @decrement-event="handleDecrementEvent"
          :counter="counter"
        />
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue";
    import Child from "./Child.vue";

    function handleChildEvent1(arg) {
      console.group("child-event-1 이벤트 발생");
      console.log("handleChildEvent1 함수 실행");
      console.log("arg: ", arg);
      console.groupEnd();
    }

    function handleChildEvent2(arg1, arg2) {
      console.group("child-event-2 이벤트 발생");
      console.log("handleChildEvent2 함수 실행");
      console.log("arg1: ", arg1);
      console.log("arg2: ", arg2);
      console.groupEnd();
    }

    //상태 정의
    const counter = ref(0);

    //상태값 증가
    function handleIncrementEvent(amount) {
      counter.value += amount;
    }

    //상태값 감소
    function handleDecrementEvent(amount) {
      counter.value -= amount;
    }
</script>

<style scoped>

</style>