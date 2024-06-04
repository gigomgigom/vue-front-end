import axios from "axios";
import qs from "qs";

//회원가입
function join(member) {
    /*
    전송할 데이터 형식(JSON)
    member = {
        mid: "blueskii",
        mname: "심영조",
        mpassword: "12345",
        memail: "blueskii@naver.com"
    }
    */

    //POST방식, raw/JSON방식으로 전달(RestAPI에서는 요청URL매핑된 컨트롤러 메소드의 매개변수 앞에 RequestBody 어노테이션을 붙인다.)
    return axios.post(
        //요청할 RestAPI URL
        "/member/join",
        //요청할때 보낼 데이터(매개값)
        member
    );
}

//로그인
function login(member) {
    /*
    전송할 데이터 형식(객체) -> 쿼리스트링으로 변환 예정
    member = {
        mid: "blueskii",
        mpassword: "12345"
    }
    */
    //POST방식, QueryString(mid=blueskii&mpassword=12345) 방식으로 전달
    return axios.post(
        "/member/login",
        //JavaScript 객체를 QueryString으로 변환
        qs.stringify(member)
    );
}

//정의한 두 함수를 내보낸다.
export default ({
    join,
    login
});