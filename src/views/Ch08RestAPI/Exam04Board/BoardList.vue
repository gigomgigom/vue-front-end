<template>
  <div class="card">
    <div class="card-header">BoardList</div>
    <div class="card-body">
        <div class="mb-3" v-if="$store.state.userId !== ''">
            <RouterLink to="/Ch08RestAPI/Exam04Board/BoardWrite" class="btn btn-success btn-sm">글쓰기</RouterLink>
        </div>

        <table class="table table-striped table-bordered">
            <thead>
                <th class="text-center" style="width:70px">번호</th>
                <th class="text-center">제목</th>
                <th class="text-center" style="width: 90px">글쓴이</th>
                <th class="text-center" style="width:120px">날짜</th>
                <th class="text-center" style="width:70px">조회수</th>
            </thead>
            <tbody>
                <tr v-for="board in page.boards" :key="board.bno">
                    <td class="text-center">{{ board.bno }}</td>
                    <td><RouterLink :to="`/Ch08RestAPI/Exam04Board/BoardRead?bno=${board.bno}&pageNo=${pageNo}`">{{ board.btitle }}</RouterLink></td>
                    <td class="text-center">{{ board.bwriter }}</td>
                    <td class="text-center">{{ new Date(board.bdate).toLocaleDateString() }}</td>
                    <td class="text-center">{{ board.bhitcount }}</td>
                </tr>
                <tr>
                    <td colspan="5" class="text-center">
                        <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                        <button v-if="page.pager.groupNo>1" class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(page.pager.startPageNo--)">이전</button>
                        <button v-for="pageNo in page.pager.pageArray" :key="pageNo" 
                        :class="(page.pager.pageNo === pageNo)?'btn-danger':'btn-outline-success'"
                        class="btn btn-sm me-1"
                        @click="changePageNo(pageNo)">
                            {{ pageNo }}
                        </button>
                        <button v-if="page.pager.groupNo<page.pager.totalGroupNo" class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(page.pager.endPageNo+1)">다음</button>
                        <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(page.pager.totalPageNo)">맨끝</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import boardAPI from "@/apis/boardAPI";
import { useRoute, useRouter } from "vue-router";

//상태 정의
let page = ref({
    boards: [],
    pager: {}
});

//GET 방식으로 전달된 파라미터값얻기
//http://localhost:8080/Exam04Board/BoardList?pageNo=(?????)
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);


//게시물 목록을 가져오는 메소드 정의
async function getBoardList(pageNo) {
    try {
        const response = await boardAPI.getBoardList(pageNo);
        page.value.boards = response.data.boards;
        page.value.pager = response.data.pager;
    } catch(error) {
        console.log("에러사유 : ",error);
    }
}

//게시물 목록 가져오기
getBoardList(pageNo.value);

//페이지의 버튼을 클릭했을 때 해당 페이지로 이동하는 함수 정의
const router = useRouter();

//페이지 번호를 변경하는 함수 정의
function changePageNo(argPageNo) {
    router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${argPageNo}`);
}

//요청 경로의 변경을 감시
watch(route, (newRoute, oldRoute) => {
    //만약 조건식에 0이 아닌 값이 들어간다면 true
    if(newRoute.query.pageNo) {
        //새로운 pageNo에 해당하는 BoardList를 받아온다.
        getBoardList(newRoute.query.pageNo);
        //pageNo 상태의 값을 변경한다.
        pageNo.value = newRoute.query.pageNo;
    } else {
        //URL 이동시 pageNo param이 넘어오지 않았다면 pageNo가 1인 boardList를 가져와라
        getBoardList(1);
        pageNo.value = 1;
    }
});
</script>

<style scoped>

</style>