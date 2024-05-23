<template>
  <div class="card">
    <div class="card-header">HomeView</div>
    <div class="card-body"></div>
    <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script setup>
// @ 는 src폴더의 절대경로가 된다.
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style scoped>
  .home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
</style>
