<template>
  <div class="card">
    <div class="card-header">BoardRead</div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-6">
                <p>bno: {{ board.bno }}</p>
                <p>btitle: {{ board.btitle }}</p>
                <p>bcontent: {{ board.bcontent }}</p>
                <p>bwriter: {{ board.bwriter }}</p>
                <p>bdate: {{ board.bdate }}</p>
                <p>bhitcount: {{ board.bhitcount }}</p>
            </div>
            <div class="col-md-6">
                <!--방법 1-->
                <!-- <img v-if="battach != null" width="300" :src="battach"/> -->
                <!--방법 2-->
                <img v-if="battach != null" width="300" :src="`${axios.defaults.baseURL}/board/battach/${bno}?accessToken=${$store.state.accessToken}`"/>
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn-sm btn-info me-2" @click="goBoardList">목록</button>
            <span v-if="$store.state.userId === board.bwriter">
                <button class="btn btn-sm btn-warning me-2" @click="goBoardUpdate">수정</button>
                <button class="btn btn-sm btn-danger" @click="handleRemove">삭제</button>
            </span>
        </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import boardAPI from '@/apis/boardAPI';
import { useStore } from "vuex";

//상태 정의
const board = ref({});
const battach = ref(null);

//QueryString으로 전달된 bno값을 얻기 위해 라우트 객체 사용
const route = useRoute();
const bno = route.query.bno;
const pageNo = route.query.pageNo;

//bno에 해당하는 게시물을 얻는 함수 정의
async function getBoard(argBno) {
    try {
        const response = await boardAPI.boardRead(argBno);
        board.value = response.data;
        if(board.value.battachoname != null) {
            //문자 데이터를 가져오고 나서(비동기) 파일 데이터를 가져오는것이(비동기) 비교적 더 빠르다.
            getAttach(argBno);
        }
    } catch(error) {
        console.log("에러 사유: ",  error);
    }
}

//첨부파일 다운로드
async function getAttach(argBno) {
    try {
        const response = await boardAPI.boardAttachDownload(argBno);
        const blob = response.data;
        //파일을 ObjectUrl로 변환해서 src태그에 넣을 수 있도록 함.
        battach.value = URL.createObjectURL(blob);
    } catch(error) {
        console.log("에러 사유: ", error)
    }
}

//만약 로그인하지 않은 사용자가 게시물을 조회하려고 하면 접근을 막고 로그인 페이지로 이동하기

//로그인 여부(상태)를 알고 있는 store 객체 생성
const store = useStore();
//페이지 이동을 위한 router객체 생성
const router = useRouter();

if(store.state.userId !== '') {
    //bno에 해당하는 게시물 가져오기
    getBoard(bno);
} else {
    router.push("/Ch08RestAPI/Exam03Login");
}

//게시물 목록 화면으로 이동
function goBoardList() {
    router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${pageNo}`);
}

//게시물 수정 화면으로 이동
function goBoardUpdate() {
    router.push(`/Ch08RestAPI/Exam04Board/BoardUpdate?bno=${bno}&pageNo=${pageNo}`);
}

//게시물 삭제
async function handleRemove() {
    try {
        await boardAPI.boardDelete(bno);
        router.back();
    } catch(error) {
        console.log("error사유: ",error);
    }
}

</script>

<style scoped>

</style>