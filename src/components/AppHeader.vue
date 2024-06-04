<template>
    <nav class="navbar justify-content-between bg-dark text-white">
        <div>
            <img src="@/assets/logo.png" width="30" height="30" class="ms-2"/>
            <span class="ms-2 text-white">Vue.js</span>
        </div>

        <div class="me-2" >
            <div v-if="$store.state.userId === ''">
                <RouterLink class="btn btn-success btn-sm" to="/Ch08RestAPI/Exam03Login">로그인</RouterLink>
            </div>
            <div v-if="$store.state.userId !== ''">
                <span>UserID : {{ $store.state.userId }}</span>
                <button class="btn btn-success btn-sm ms-3" @click="handleLogout">로그아웃</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const store = useStore();
    const router = useRouter();

    function handleLogout() {
        store.dispatch("deleteAuth");
        router.push("/Ch08RestAPI/Exam03Login");
    }
</script>

<style scoped>

</style>