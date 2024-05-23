<template>
    <div class="card">
        <div class="card-header">Exam07View</div>
        <div class="card-body">
            <h5>경로 변수(파라미터)로 전달된 데이터</h5>
            <p>전달된 게시판 종류 : {{ route.params.kind }}</p>
            <p>전달된 색상 이름 : {{ route.params.color }}</p>

            <h5 class="mt-5">쿼리 스트링으로 전달된 데이터</h5>
            <p>전달된 게시판 종류 : {{ route.query.kind }}</p>
            <p>전달된 색상 이름 : {{ route.query.color }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
//전달된 데이터를 담은 객체
const route = useRoute();

console.log('경로 변수(Param)으로 받아온 값 :' + route.params.kind);
console.log('경로 변수(Param)으로 받아온 값 :' + route.params.color);

console.log('쿼리스트링으로 받아온 값 :' + route.query.kind);
console.log('쿼리스트링으로 받아온 값 :' + route.query.color);

</script>

<style scope>
    
</style>