import axios from "axios";
import qs from "qs";

//게시물 목록 가져오기
function getBoardList(pageNo = 1) {
    //GET: Http://localhost/board/list?pageNo=(????)
    return axios.get("/board/list", { params: { pageNo }});
}

//게시물 쓰기
function boardWrite(formData) {
    //multipartFormData로 데이터 전송
    return axios.post("/board/create", formData);
}

export default ({
    getBoardList,
    boardWrite
});