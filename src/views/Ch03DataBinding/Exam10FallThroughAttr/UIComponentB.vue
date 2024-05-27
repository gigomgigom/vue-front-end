<template>
    <div class="card" :id="$attrs.id">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <div class="mb-2" :class="$attrs.myclass" :style="$attrs.mystyle" @click="$attrs.onClick">
                Content
            </div>
            <div :class="$attrs.myclass" :style="$attrs.mystyle" @click="$emit('click')">
                <!--$emit: 상위 컴포넌트에서 넘겨받은 속성을 이름을 통해 사용할 수 있다.-->
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
    inheritAttrs: false
});

const attrs = useAttrs();

function handleBtn1() {
    //속성으로 전달된 값 얻기
    console.log(JSON.stringify(attrs));
}

function handleBtn2() {
    attrs.onClick(); //속성으로 전달된 핸들러 함수(리스너)를 호출
}
</script>

<style scoped>
    
</style>