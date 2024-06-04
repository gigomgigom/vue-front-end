<template>
    <div class="card">
        <div class="card-header">Exam03Login</div>
        <div class="card-body">
            <div v-if="$store.state.userId === ''">
                <form @submit.prevent="handleSubmit">
                    <div class="input-group mb-2">
                        <span class="input-group-text">아이디</span>
                        <input type="text" class="form-control" v-model="member.mid">
                    </div>
                    <div class="input-group mb-2">
                        <span class="input-group-text">비밀번호</span>
                        <input type="password" class="form-control" v-model="member.mpassword">
                    </div>
                    <div>
                        <input type="submit" value="로그인" class="btn btn-danger btn-sm me-2" />
                        <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                    </div>
                </form>
            </div>
            <div v-if="$store.state.userId !== ''">
                <button class="btn btn-success btn-sm" @click="handleLogout">로그아웃</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import memberAPI from "@/apis/memberAPI";
import { useStore } from "vuex";

//전역상태(vuex)를 사용하기 위해 store객체를 생성
const store = useStore();

//상태 정의
const member = ref({
    mid: "",
    mpassword: ""
});

//비동기 방식으로 제출하는 함수 정의
async function handleSubmit() {
    try {
        //입력한 폼 데이터를 JSON형식으로 변환
        const data = JSON.parse(JSON.stringify(member.value));
        //RestAPI에 데이터를 전송하고 응답(객체)을 받는다.
        const response = await memberAPI.login(data);
        //만약 받은 응답이 결과가 
        if (response.data.result === "success") {
            const payload = {
                userId: response.data.mid,
                accessToken: response.data.accessToken
            };
            store.dispatch("saveAuth", payload);
        } else {
            console.log("아이디 비밀번호가 틀립니다.");
        }
    } catch (error) {
        console.log(error);
    }
}

function handleReset() {
    member.value.mid = "";
    member.value.mpassword = "";
}

function handleLogout() {
    store.dispatch("deleteAuth");
}

</script>

<style scoped></style>