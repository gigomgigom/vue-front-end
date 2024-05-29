import { createStore } from 'vuex'
import counter from "./counter"
//Store 객체를 생성
export default createStore({
  //루트 상태 정의
  state: {
    userId: "여름이야"
  },
  //루트 상태를 읽는 메소드 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    }
  },
  //루트 상태를 변경하는 메소드 정의(동기 방식)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
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
    }
  },
  //루트 하위의 상태를 정의
  modules: {
    counter
  }
});
