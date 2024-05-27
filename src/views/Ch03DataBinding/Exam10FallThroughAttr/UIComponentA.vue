<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div :class="myclass" :style="mystyle" @click="onClick">Content</div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["myclass", "mystyle"]);
    const events = defineEmits(["onClick"]);
</script>

<style scoped>
    
</style>