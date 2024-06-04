<template>
    <div class="card">
        <div class="card-header">Exam02Join</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">

                <div class="input-group mb-2">
                    <span class="input-group-text">아이디</span>
                    <input type="text" class="form-control" v-model="member.mid">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이름</span>
                    <input type="text" class="form-control" v-model="member.mname">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">비밀번호</span>
                    <input type="password" class="form-control" v-model="member.mpassword">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이메일</span>
                    <input type="text" class="form-control" v-model="member.memail">
                </div>
                <div>
                    <input type="submit" value="가입" class="btn btn-danger btn-sm me-2" />
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import memberAPI from "@/apis/memberAPI";
import { useRouter } from "vue-router";

//라우터 객체 얻기
const router = useRouter();

//상태 정의
const member = ref({
    mid: "",
    mname: "",
    mpassword: "",
    memail: ""
});
//가입 버튼 클릭시 실행
async function handleSubmit() {
    //유효성 검사 생략

    //폼 데이터 객체를 JSON형식으로 변환
    const data = JSON.parse(JSON.stringify(member.value));

    console.group("회원가입 로직 실행");
    console.log(data);
    console.groupEnd();

    try {
        //Axios를 이용해서 Back-End로 회원가입 요청
        const response = await memberAPI.join(data);
        console.log(response.data);
        //메인화면으로 이동
        router.push('/');
        //이전 페이지로 이동
        //router.back();
    } catch (error) {
        console.log("에러 발생 : ", error);
    }

}
//재작성 버튼 클릭시 실행
function handleReset() {
    //상태 데이터를 초기값으로 변환 (템플릿에서도 동시에 반영됨)
    member.value.mid = "";
    member.value.mpassword = "";
    member.value.mname = "";
    member.value.memail = "";
}
</script>

<style scoped></style>