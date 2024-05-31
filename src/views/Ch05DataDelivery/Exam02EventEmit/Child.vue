<template>
  <div class="card">
    <div class="card-header">Child</div>
    <div class="card-body">
        <h6>[자식 -> 부모]</h6>
        <button class="btn btn-danger btn-sm me-2" @click="$emit('child-event-1', data1)">child-event-1 이벤트 발생</button>
        <button class="btn btn-danger btn-sm" @click="handleChildEvent2">child-event-2 이벤트 발생</button>
    </div>
    <div class="card-body">
        <h6>[자식 -> 부모 -> 자식]</h6>
        <button class="btn btn-danger btn-sm me-2" @click="handleIncrementEvent">증가(increment-event 발생)</button>
        <button class="btn btn-danger btn-sm" @click="handleDecrementEvent">감소(decrement-event 발생)</button>
        <p class="mt-3">Counter : {{ props.counter }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    //자식이 부모에게 전달할 상태 데이터를 정의
    let data1 = ref("value1");
    let data2 = ref("value2");

    const emits = defineEmits(["child-event-1", "child-event-2", "increment-event", "decrement-event"]);
    const props = defineProps(["counter"]);

    function handleChildEvent2() {
        emits("child-event-2", data1.value, data2.value);
    }

    function handleIncrementEvent() {
        emits("increment-event", 1);
    }

    function handleDecrementEvent() {
        emits("decrement-event", 1);
    }
</script>

<style scoped>

</style>