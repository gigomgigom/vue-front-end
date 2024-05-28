<template>
  <div class="card">
    <div class="card-header">ChildB</div>
    <div class="card-body">
        <p><b>productNo</b> : {{ props.productNo }}</p>
        <p><b>productKind</b> : {{ props.productKind }}</p>
        <p><b>product</b> : {{ props.product }}</p>
        <p><b>no</b> : {{ props.no }}</p>
        <p><b>kind</b> : {{ props.kind }}</p>
    </div>
  </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    const props = defineProps([
        "productNo", "productKind",
        "product", "no", "kind"
    ]);

    onMounted( () => {
        console.group("상위 컴포넌트에게 받아온 데이터 By B컴포넌트");
        console.log("productNo : ", props.productNo);
        console.log("productKind : ", props.productKind);
        console.log("product : ", JSON.parse(JSON.stringify(props.product)));
        console.log("no : ", props.no);
        console.log("kind : ", props.kind);
        console.groupEnd();
    });
        
</script>

<style scoped>

</style>