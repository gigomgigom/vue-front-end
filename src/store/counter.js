//Store 객체를 생성
export default {
    namespaced: true,

    //루트 상태 정의
    state: {
      count: 100
    },
    //루트 상태를 읽는 메소드 정의
    getters: {
      getCount(state, getters, rootState, rootGetters) {
        return state.count;
      }
    },
    //루트 상태를 변경하는 메소드 정의(동기 방식)
    mutations: {
      setCount(state, payload) {
        state.count += payload;
      }
    },
    //루트 상태를 변경하는 메소드 정의(비동기 방식)
    actions: {
        addAction(context, payload) {
            context.commit("setCount", payload);
        }
      
    },
    //루트 하위의 상태를 정의
    modules: {
    }
  };