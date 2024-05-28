<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <!--Exam10FallThrough의 함수 호출-->
            <div :class="props.class" :style="props.style" @click="emits('click')">Content</div>

            <!--UIComponentA의 함수 호출-->
            <button class="mt-2 btn btn-info btn-sm" @click="handleClick">버튼</button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["class", "style"]);
    const emits = defineEmits(["click"]);

    function handleClick() {
        //컴포넌트의 속성값을 가져오기
        console.log('클래스는 ' + props.class + ', 스타일은 ' + props.style.color);
        //컴포넌트의 click이벤트를 발생시킨다.
        emits('click');
    }
</script>

<style scoped>
    
</style>