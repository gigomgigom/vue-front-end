<template>
    <div class="card">
        <div class="card-header">Exam01EventHandling</div>
        <div class="card-body">
            <h6>[이벤트 처리]</h6>
            <div class="mb-3">
                <button class="btn btn-danger btn-sm me-2" @click="handleBtn1">함수참조</button>
                <button class="btn btn-danger btn-sm me-2" @click="handleBtn2('vue is good', $event)">함수호출</button>
            </div>
            <hr />
            <!--단방향 바인딩 (UI변경시 상태 데이터가 변경되지않음 그래서 상태데이터를 변경시켜주는 함수를 호출했다.)-->
            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <input class="form-control" type="text" name="userID" :value="userID" @keyup="handleInput($event)" />
            </div>
            <!--양방향 바인딩 (v-model 사용)-->
            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <input class="form-control" type="text" name="userID" v-model="userID" />
            </div>
            <div>
                입력한 내용은 : {{ userID }}
            </div>
            <hr />
            <div class="d-flex flex-column">
                <h6>[이벤트 수식어 사용]</h6>
                <a href="https://vuejs.org">외부링크(vue공식홈페이지)</a>
                <a href="" @click.prevent="handleLink">링크(a태그)로 JavaScript실행</a>
                <hr/>
                <form class="my-3" action="https://vuejs.org/guide/introduction.html" @submit.prevent="handleForm">
                    <div class="input-group mb-3">
                        <span class="input-group-text">이메일</span>
                        <input type="email" class="form-control" v-model="userEmail">
                    </div>
                    <div>입력내용: {{ userEmail }}</div>
                    <input type="submit" value="제출" class="btn btn-success btn-sm mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let userID = ref("");
let userEmail = ref("");

//참조되는 함수
function handleBtn1() {
    console.log("handleBtn1() 실행");
}
//호출되는 함수
function handleBtn2(arg, event) {
    console.log("handleBtn2() 실행");
    console.log("arg : " + arg);
    //event가 발생한 DOM element
    console.log("event.target : ", event.target);
}

//단방향 데이터 전달을 할 경우 수동으로 상태데이터 값을 변경해주는 메소드
function handleInput(event) {
    console.log("event.taget.name : " + event.target.name);
    console.log("event.target.value : " + event.target.value);
    userID.value = event.target.value;
}

//a태그에서 클릭이벤트 발생시 호출하는 함수
function handleLink() {
    console.log("handleLink 함수 호출했다 이말이야~");
}

//Form submit이벤트 발생시 호출되는 함수
function handleForm() {
    console.log(userEmail.value);
}
</script>
<style scoped></style>