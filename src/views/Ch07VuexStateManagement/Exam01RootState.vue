<template>
  <div class="card">
    <div class="card-header">Exam01RootState</div>
    <div class="card-body">
        <h6>[루트 상태 읽기]</h6>
        <p>userId <b>단방향</b> 바인딩(state) : {{ $store.state.userId }}</p>
        <p>userId <b>단방향</b> 바인딩(getter) : {{ $store.getters.getUserId }}</p>
        <p>userId <b>단방향</b> 바인딩(함수 호출) : {{ getUserId() }}</p>
        <p>userId <b>단방향</b> 바인딩(Computed) : {{ computedUserId }}</p>
        <h6>userId <b>양방향</b> 바인딩 : <input type="text" v-model="$store.state.userId"> </h6>
        <hr/>
        <h6>[루트 상태 변경]</h6>
        <button class="btn btn-info btn-sm me-2" @click="changeByMutation">userId 변경(mutation 동기 방식)</button>
        <button class="btn btn-info btn-sm me-2" @click="changeByAction">userId 변경(Action 비동기 방식)</button>
    </div>
  </div>
</template>

<script setup>
    import { computed } from "vue";
    import { useStore } from "vuex";

    const store = useStore();

    //Store객체 내부 state 또는 getter속성 사용하는 일반 함수
    function getUserId() {
        return store.state.userId;
        //return store.state.getUserId;
    }
    //Store객체 내부 state 또는 getter속성 사용하는 Computed 함수
    const computedUserId = computed(() => {
        return store.state.userId;
        //return store.state.getUserId;
    });

    //동기식(commit 함수)으로 상태를 변경
    function changeByMutation() {
        new Promise((resolve, reject) =>  {
        //서버와 통신작업
        //....3초 소요
        if(true) {
          //로그인 성공
          resolve({result: "success", userId: "봄이야"});
        } else {
          //로그인 실패
          reject({result: "fail", reason: "password is wrong"});
        }
      })
      .then((data) => {
        //작업이 성공적으로 처리가 되었을 경우
        //상태를 변경
        console.group("로그인 성공");
        store.commit("setUserId", data.userId);
        console.groupEnd();
      })
      .catch((error) => {
        //작업이 실패 처리될 경우
        console.log("로그인 실패");
      });
    }
    
    //비동기식(dispatch함수)으로 상태를 변경
    function changeByAction() {
        store.dispatch("loginAction", {userId: "가을이야~"});
    }
</script>

<style scoped>

</style>