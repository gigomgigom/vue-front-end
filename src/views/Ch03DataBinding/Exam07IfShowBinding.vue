<template>
    <div class="card">
        <div class="card-header">Exam06InnerHtmlBinding</div>
        <div class="card-body">
            <div id="div1" v-if="isPhoto" class="mb-2">
                <img src="/images/photos/photo1.jpg" height="150"/>
            </div>
            <div id="div2" v-show="isPhoto" class="mb-2">
                <img src="/images/photos/photo2.jpg" height="150"/>
            </div>
            <hr/>
            <button @click="changeData" class="btn btn-info btn-sm">보이냐 안보이냐?</button>
        </div>
    </div>
</template>
<script setup>
    import {ref} from "vue";

    let isPhoto = ref(true);

    function changeData() {
        isPhoto.value = !isPhoto.value;
    }
</script>
<style scoped>
    
</style>