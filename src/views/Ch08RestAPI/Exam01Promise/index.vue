<template>
  <div class="card">
    <div class="card-header">Exam01Promise</div>
    <div class="card-body">
      <div>
        <button class="btn btn-info btn-sm me-2" @click="handleBtn1">비동기 작업1</button>
        <button class="btn btn-info btn-sm me-2" @click="handleBtn2">비동기 작업2</button>
        <div class="mt-3">
          <div v-if="loading" class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="mt-3">
          <div v-if="!loading">{{ result }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

//상태 정의
const loading = ref(false);
const result = ref("결과가 나오는 부분");

function asyncWork() {
  //3초 후에 응답이 오는 Promise 생성
  const promise = new Promise((resolve, reject) => {
    //3초 후에, 첫번째 매개값인 람다식이 실행된다.
    setTimeout(() => {
      //성공적으로 처리했을 경우
      resolve("성공 응답 내용");
      //실패 처리할 경우
      //reject("실패 응답 내용");
    }, 3000);
  });

  return promise;
}

//비동기 처리
function handleBtn1() {
  if(loading.value) {
    alert("wait!");
  } else {
    console.log("handleBtn1() 시작");
    loading.value = true;
    asyncWork()
    //resolve()를 호출할때 then실행
    .then((data) => {
      console.log("성공 결과 :", data);
    })
    //reject()를 호출할때 catch실행
    .catch((error) => {
      console.log("실패 결과 : ", error);
    })
    //resolve든 reject든 응답이 왔을때 무조건 실행된다.
    .finally(() => {
      console.log("마무리 작업 실행");
    });
    loading.value = false;
    console.log("handleBtn1() 끝");
  }
}

function handleBtn2() {
  if (loading.value) {
    alert("기다려!");
  } else {
    console.log("handleBtn2() 시작");
    useAsyncWork();
    console.log("handleBtn2() 끝끝");
  }
}

async function useAsyncWork() {
  try {
    loading.value = true;
    const data = await asyncWork();
    //성공시 resolve가 data로 대입
    console.log("성공 결과 :", data);
    loading.value = false;
  } catch (error) {
    //실패시 reject가 error에 대입
    console.log("실패 결과: ", error);
    loading.value = false;
  }
  console.log("마무리 작업 실행");
}
</script>

<style scoped></style>