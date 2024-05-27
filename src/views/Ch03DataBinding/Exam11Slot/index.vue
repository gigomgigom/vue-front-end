<template>
    <div class="card">
        <div class="card-header">Exam02NotState</div>
        <div class="card-body">
            <button class="btn btn-info btn-sm me-5" @click="showDialogA">기본 다이얼로그</button>
            <button class="btn btn-info btn-sm me-5" @click="showDialogB">띠드버거</button>
            <button class="btn btn-info btn-sm" @click="showDialogC">로그인 Dialog</button>
        </div>

        <DialogA id="dialogA"/>
        <DialogB id="dialogB" @close="hideDialogB"/>
        <DialogC id="dialogC"/>
    </div>
</template>

<script setup>
    import DialogA from './DialogA.vue';
    import DialogB from './DialogB.vue';
    import DialogC from './DialogC.vue';
    import { onMounted } from 'vue';
    import { Modal } from 'bootstrap';

    //Dialog DOM객체를 담기 위한 변수 선언
    let modalDialogA = null;
    let modalDialogB = null;
    let modalDialogC = null;

    //이 컴포넌트(Exam11Slot 폴더 컴포넌트)가 생성되고, DOM에 부착될때 자동으로 실행되는 콜백함수
    onMounted( () => {
        //각 모달마다 Modal DOM객체를 생성해서 이름에 맞춰 변수에 대입한다.
        modalDialogA = new Modal(document.querySelector("#dialogA"));
        modalDialogB = new Modal(document.querySelector("#dialogB"));
        modalDialogC = new Modal(document.querySelector("#dialogC"));
    });

    function showDialogA() {
        modalDialogA.show();
    }
    function showDialogB() {
        modalDialogB.show();
    }
    function showDialogC() {
        modalDialogC.show();
    }
</script>

<style scoped>
    
</style>