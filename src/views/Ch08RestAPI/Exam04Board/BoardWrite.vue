<template>
    <div class="card">
        <div class="card-header">BoardWrite</div>
        <div class="card-body">
            <form @submit.prevent="handleAdd">
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
                    <div class="col-sm-10">
                        <input id="battach" type="file" class="form-control-file" ref="battach" />
                    </div>
                </div>
                <div class="form-group row mt-3">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <input type="submit" class="btn btn-info btn-sm me-2" value="추가" @click="handleSubmit"/>
                        <input type="button" class="btn btn-info btn-sm" value="취소" @click="handleCancel" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import boardAPI from "@/apis/boardAPI";
    import { useRouter } from "vue-router";
    
    //라우터 사용
    const router = useRouter();

    //상태 정의
    const board = ref({
        btitle: "",
        bcontent: ""
    });

    const battach = ref(null);

    //추가버튼을 클릭했을 때 실행
    async function handleSubmit() {
        //MultiPart 방식으로 RestAPI서버에 데이터를 전송할 경우
        //데이터를 담을 구조체인 FormData객체 생성
        const formData = new FormData();
        //문자 파트 넣기
        formData.append("btitle", board.value.btitle);
        formData.append("bcontent", board.value.bcontent);
        //파일 파트 넣기
        //battach라는 DOM객체를 찾아서
        const elementBattach = battach.value;
        //DOM객체에 담긴 파일의 수가 0개 이상이면 파일파트 추가
        if(elementBattach.files.length != 0) {
            formData.append("battach", elementBattach.files[0]);
        }

        //게시물 쓰기 요청
        try {
            //BoardAPI-게시글 작성 요청에 formData를 싣는다.
            const response = await boardAPI.boardWrite(formData);
            console.log("저장된 데이터 : ",response);
            //다시 게시판 목록 화면으로 이동하라(뒤로 가기)
            router.back();
        } catch(error) {
            console.log("에러 사유: ", error);
        }
    }

    //취소 버튼을 클릭했을 때 실행
    function handleCancel() {
        router.back();
    }

</script>

<style scoped></style>