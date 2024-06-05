<template>
    <div class="card">
        <div class="card-header">BoardUpdate</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">
                <div class="form-group row">
                    <label for="btitle" class="col-sm-2 col-form-label">제목</label>
                    <div class="col-sm-10">
                        <input id="btitle" type="text" class="form-control" v-model="board.btitle" />
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
                    <div class="col-sm-10">
                        <textarea id="bcontent" type="text" class="form-control" v-model="board.bcontent"></textarea>
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <label for="battach" class="col-sm-2 col-form-label">첨부그림</label>
                    <div v-if="board.battachoname !== null">
                        <img width="300"
                            :src="`${axios.defaults.baseURL}/board/battach/${bno}?accessToken=${$store.state.accessToken}`" />
                    </div>
                    <div class="col-sm-10">
                        <input id="battach" type="file" class="form-control-file" ref="battach" />
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <input type="submit" class="btn btn-info btn-sm me-2" value="수정" />
                        <input type="button" class="btn btn-info btn-sm" value="취소" @click="handleCancel" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import boardAPI from '@/apis/boardAPI';

//상태 정의
const board = ref({});
const battach = ref(null);

const route = useRoute();
const router = useRouter();
const bno = route.query.bno;
const pageNo = route.query.pageNo;

//bno에 해당하는 게시물을 얻는 함수 정의
async function getBoard(argBno) {
    try {
        const response = await boardAPI.boardRead(argBno);
        board.value = response.data;
    } catch (error) {
        console.log("에러 사유: ", error);
    }
}

//bno에 해당하는 게시물 가져오기
getBoard(bno);

//수정버튼을 클릭했을때 실행하는 함수 정의
async function handleSubmit() {
    //MultiPart 방식으로 RestAPI서버에 데이터를 전송할 경우
    //데이터를 담을 구조체인 FormData객체 생성
    const formData = new FormData();
    formData.append("bno", board.value.bno);
    //문자 파트 넣기
    formData.append("btitle", board.value.btitle);
    formData.append("bcontent", board.value.bcontent);
    //파일 파트 넣기
    //battach라는 DOM객체를 찾아서
    const elementBattach = battach.value;
    console.log(elementBattach);
    //DOM객체에 담긴 파일의 수가 0개 이상이면 파일파트 추가
    if (elementBattach.files.length !== 0) {
        formData.append("battach", elementBattach.files[0]);
    }

    //게시물 수정 요청
    try {
        //BoardAPI-게시글 수정 요청에 formData를 싣는다.
        const response = await boardAPI.boardUpdate(formData);
        console.log("저장된 데이터 : ", response);
        //다시 게시판 목록 화면으로 이동하라
        router.push("/Ch08RestAPI/Exam04Board/BoardList?pageNo="+pageNo);
    } catch (error) {
        console.log("에러 사유: ", error);
    }
}

//취소버튼을 클릭했을때 실행하는 함수 정의
function handleCancel() {
    router.back();
}
</script>

<style scoped></style>