<template>
    <div class="card">
        <div class="card-header">Exam10FallThroughAttr</div>
        <div class="card-body">
            <UIComponentA id="uiComponentA" myclass="bg-info" mystyle="color:orange" @click="handleClick"/>
            <UIComponentB id="uiComponentB" myclass="bg-info" mystyle="color:orange" @click="handleClick"/>
        </div>
    </div>
</template>
<script setup>
import UIComponentA from "./UIComponentA.vue";
import UIComponentB from "./UIComponentB.vue";

function handleClick() {
    console.log("Exam10FallThroughAttr UIComponentA 클릭했어요우");
}
</script>
<style scoped>
    
</style>