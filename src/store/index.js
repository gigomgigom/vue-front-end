import { createStore } from 'vuex'
import counter from "./counter"
import axiosConfig from '@/apis/axiosConfig';

//Store 객체를 생성
export default createStore({
  //루트 상태 정의
  state: {
    userId: "",
    accessToken: ""
  },
  //루트 상태를 읽는 메소드 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },
    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },
  //루트 상태를 변경하는 메소드 정의(동기 방식)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },
  //루트 상태를 변경하는 메소드 정의(비동기 방식)
  actions: {
    loginAction(context, payload) {
      new Promise((resolve, reject) =>  {
        //서버와 통신작업
        //....3초 소요
        if(true) {
          //로그인 성공
          resolve({result: "success", user:payload});
        } else {
          //로그인 실패
          reject({result: "fail", reason: "password is wrong"});
        }
      })
      .then((data) => {
        //작업이 성공적으로 처리가 되었을 경우
        //상태를 변경
        console.group("로그인 성공");
        context.commit("setUserId", data.user.userId);
        console.groupEnd();
      })
      .catch((error) => {
        //작업이 실패 처리될 경우
        console.log("로그인 실패");
      });
    },
    //브라우저가 재실행될때 인증 정보를 전역상태로 복구
    loadAuth(context, payload) {
      context.commit("setUserId", localStorage.getItem("userId") || ""); //로컬 스토리지에 저장되어있는 AccessToken을 가져온다. (만약 존재하지 않을 시 ""을 대입하라.)
      //로컬 스토리지에 저장되어있는 accessToken을 가져온다.
      const accessToken = localStorage.getItem("accessToken")||"";
      //vuex 상태(accessToken)에 set
      context.commit("setAccessToken", accessToken);
      //Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken !== "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },
    //로그인을 성공했을 때 인증 정보를 전역 상태 및 로컬 스토리지에 저장
    saveAuth(context, payload) {
      /*
      payload = {
        userId: "user",
        accessToken: "xxxx.yyyy.zzzz"
      }
      */
      //전역 상태값 변경
      context.commit("setUserId", payload.userId);
      context.commit("setAccessToken", payload.accessToken);
      //로컬 스토리지에 저장
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("accessToken", payload.accessToken);
      //Axios 요청 공통 헤더에 인증정보를 추가하기
      axiosConfig.addAuthHeader(payload.accessToken);
    },
    //로그아웃을 할 때 인증 정보를 모두 삭제한다.
    deleteAuth(context, payload) {
      //vuex 상태 초기화
      context.commit("setUserId", "");
      context.commit("setAccessToken", "");
      //로컬 스토리지에 존재하는 인증정보 삭제
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      //Axios 요청 공통 헤더에 인증 정보 제거
      axiosConfig.removeAuthHeader();
    }

  },
  //루트 하위의 상태를 정의
  modules: {
    counter
  }
});
