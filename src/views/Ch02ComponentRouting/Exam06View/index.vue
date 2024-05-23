<template>
    <div class="card">
        <div class="card-header">Exam06View</div>
        <div class="card-body">
            <h5>경로 변수(파라미터)로 전달</h5>
            <ul>
                <li>
                    <router-link :to="`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`">Exam07View/${kind1}/${color1}</router-link>
                </li>
                <li>
                    <button class="btn btn-info btn-sm" @click="goUrlWithParam()">Exam07View/freeboard/blue</button>
                </li>
            </ul>

            <h5>쿼리스트링으로 전달</h5>
            <ul>
                <li>
                    <router-link :to="`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`">Exam07View?kind=${kind2}&color=${color2}</router-link>
                </li>
                <li>
                    <button class="btn btn-info btn-sm" @click="goUrlWithQueryString()">Exam07View?kind=freeboard&color=blue</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

let kind1 = "freeboard";
let color1 = "blue";
let kind2 = "notice";
let color2 = "red";

function goUrlWithParam() {
    router.push(`/Ch02ComponentRouting/Exam07View/${kind1}/${color1}`);
}
function goUrlWithQueryString() {
    router.push(`/Ch02ComponentRouting/Exam07View?kind=${kind2}&color=${color2}`);
}
</script>

<style scoped>
    
</style>