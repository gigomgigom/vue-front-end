import axios from "axios";

//기본 경로 설정
axios.defaults.baseURL = "http://localhost";

//AccessToken을 받고나서 다음 요청시 다시 AccessToken을 전달할 수 있도록 설정
//로그인 성공했을 때 호출
function addAuthHeader(accessToken) {
    //common 객체에 동적 속성으로 Authorization을 추가
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

//공통 요청 헤더에서 Authorization 헤더 삭제
//로그아웃시 호출
function removeAuthHeader() {
    //common 객체의 Authorization 속성을 삭제한다.
    delete axios.defaults.headers.common["Authorization"];
}

//로컬 스토리지에 AccessToken을 저장하는 코드
function saveAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
}

//로컬 스토리지에 있는 AccessToken을 읽기
function readAccessToken() {
    const accessToken = localStorage.getItem("accessToken") || "";
    return accessToken;
}

//로컬 스토리지에 있는 AccessToken을 읽고 공통 헤더에 추가
function loadAccessToken() {
    //앞의 값이 초기값을 갖는 구조가 된다면 뒤의 값으로 대체해서 들어가게된다.
    const accessToken = localStorage.getItem("accessToken") || "";
    if(accessToken != "") {
        addAuthHeader(accessToken);
    } else {
        console.log("AccessToken doesn't exist at File System");
    }
}

export default {
    addAuthHeader,
    removeAuthHeader,
    saveAccessToken,
    readAccessToken,
    loadAccessToken
}