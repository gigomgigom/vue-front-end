<template>
  <div class="card">
    <div class="card-header">Exam02DomElementRef</div>
    <div class="card-body">
        <div>
            <h6>[DOM 요소 참조]</h6>
            <p>data : {{ data }}</p>
            <hr/>
            <div class="d-flex">
                <input id="input1" ref="input1Ref" type="text" style="line-height: 25px;"/>
                <button class="btn btn-info btn-sm ms-1" @click="setData">입력 양식값 변경</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from "vue";

    //상태 데이터 선언
    const data = ref("summer");

    const input1Ref = ref(null);

    function setData() {
        //방법1 - querySelector()를 통해서 DOM 요소를 찾기
        //const input1 = document.querySelector("#input1");
        //input태그에 입력한 값을 상태 데이터(data)에 대입한다.
        //data.value = input1.value;
//-----------------------------------------------------------------------------------------------------
        //방법2 - ref속성 이용
        //초기에 input1Ref 상태 데이터에는 null값이 담기게 된다.
        //ref속성값을 input1Ref로 갖는 DOM객체가 생성이 되면
        //자동으로 해당 DOM객체가 input1Ref 데이터에 대입된다.
        data.value = input1Ref.value.value;
    }

</script>

<style scoped>

</style>