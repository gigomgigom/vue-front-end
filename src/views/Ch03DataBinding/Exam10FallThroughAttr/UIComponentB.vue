<template>
    <div class="card" :id="attrs.id">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <div class="mb-2" :class="attrs.class" :style="attrs.style" @click="attrs.onClick">
                Content
            </div>
            <hr/>
            <button class="btn btn-info btn-sm me-2" @click="handleBtn1">버튼1(속성값을 이용)</button>
            <button class="btn btn-info btn-sm" @click="handleBtn2">버튼2(리스너 호출)</button>
        </div>
    </div>
</template>

<script setup>
import { defineOptions, useAttrs } from "vue";

defineOptions ({
    //FallThrough 비활성화
    inheritAttrs: false
});

const attrs = useAttrs();

function handleBtn1() {
    //속성으로 전달된 값 얻기
    console.log(JSON.stringify(attrs));
}

function handleBtn2() {
    console.log('속성으로 전달된 핸들러 함수를 호출한다잇');
    attrs.onClick(); //속성으로 전달된 핸들러 함수(리스너)를 호출
}
</script>

<style scoped>
    
</style>