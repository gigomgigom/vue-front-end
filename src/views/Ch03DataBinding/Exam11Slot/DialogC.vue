<template>
    <DialogTemplate>
        <template v-slot:header>
            로그인
        </template>
        <template v-slot:body>
            <div class="mb-3">
                <label for="inputEmail" class="form-label">이메일</label>
                <input type="text" class="form-control" id="inputEmail" v-model="inputData.email">
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label">비밀번호</label>
                <input type="password" class="form-control" id="inputPassword" v-model="inputData.password">
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn btn-info btn-warning btn-sm" @click="submit">로그인</button>
            <button class="btn btn-info btn-warning btn-sm" data-bs-dismiss="modal">닫기</button>
        </template>
    </DialogTemplate>
</template>

<script setup>
    import { ref } from "vue";
    import DialogTemplate from "./DialogTemplate.vue";

    const emits = defineEmits(["close"]);

    const inputData = ref({
        email: "",
        password: ""
    });

    function submit() {
        //상태데이터 객체타입(Proxy Object)에서 JSON타입으로 변환시킨다.
        console.log(JSON.parse(JSON.stringify(inputData.value)));
        //FallThrough해서 받은 이벤트 함수를 호출한다.
        emits('close');
    }
</script>

<style scoped></style>