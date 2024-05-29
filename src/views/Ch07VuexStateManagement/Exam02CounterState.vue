<template>
  <div class="card">
    <div class="card-header">Exam02CounterState</div>
    <div class="card-body">
        <h6>[counter 상태 읽기]</h6>
        <p>count <b>단방향</b> 바인딩(state) : {{ $store.state.counter.count }}</p>
        <p>count <b>단방향</b> 바인딩(getter) : {{ $store.getters["counter/getCount"] }}</p>
        <p>count <b>단방향</b> 바인딩(일반함수) : {{ getCount() }}</p>
        <p>count <b>단방향</b> 바인딩(computed) : {{ computedCount }}</p>
        <h6>count <b>양방향</b> 바인딩 : <input type="text" v-model="$store.state.counter.count"> </h6>
        <hr/>
        <h6>[counter 상태 변경]</h6>
        <button class="btn btn-info btn-sm me-2" @click="changeByMutation">count 변경(mutation 동기 방식)</button>
        <button class="btn btn-info btn-sm me-2" @click="changeByAction">count 변경(Action 비동기 방식)</button>
      </div>
  </div>
</template>

<script setup>
    import { computed } from "vue";
    import { useStore } from "vuex";

    const store = useStore();

    function getCount() {
      return store.state.counter.count;
      //return store.getters["counter/getCount"]
    }
    
    const computedCount = computed(() => {
      return store.state.counter.count;
      //return store.getters["counter/getCount"]
    })

    function changeByMutation() {
      store.commit("counter/setCount", 10);
    }

    function changeByAction() {
      store.dispatch("counter/addAction", 20);
    }

</script>

<style scoped>

</style>