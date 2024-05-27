<template>
    <div class="card" :id="$attrs.id">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <div :class="$attrs.myclass" :style="$attrs.mystyle">
                Content
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineOptions } from "vue";
defineOptions ({
    inheritAttrs: false
});
</script>

<style scoped>
    
</style>