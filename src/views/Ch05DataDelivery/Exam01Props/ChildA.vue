<template>
  <div class="card">
    <div class="card-header">ChildA</div>
    <div class="card-body" :class="props.prop1">
        <p><b>props.prop1 || prop1 :</b> {{ props.prop1 }}, {{ prop1 }}</p>
        <p><b>props.prop2 || prop2 :</b> {{ props.prop2 }}, {{ prop2 }}</p>
        <p><b>props.productNo || productNo :</b> {{ props.productNo }}, {{ productNo }}</p>
        <p><b>props.productKind || productKind :</b> {{ props.productKind }}, {{ productKind }}</p>
        <p><b>props.productPrice || productPrice :</b> {{ props.productPrice }}, {{ productPrice }}</p>
        <p><b>props.objectProp.name || objectProp.age :</b> {{ props.objectProp.name }}, {{ objectProp.age }}</p>
        <p><b>props.arrayProp[0] || arrayProp[1] :</b> {{ props.arrayProp[0] }}, {{ arrayProp[1] }}</p>
        <p><b>props.funProp() || funProp() :</b> {{ props.funProp() }}, {{ funProp() }}</p>
    </div>
  </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    const props = defineProps([
        "prop1", "prop2", 
        "productNo", "product-kind", 
        "productPrice", "objectProp",
        "arrayProp", "funProp"
    ])

    onMounted(() => {
        console.group("상위 컴포넌트에게 받아온 데이터 By A컴포넌트");
        console.log("prop1 : ", props.prop1);
        console.log("prop2 : ", props.prop2);
        console.log("productNo : ", props.productNo, typeof(props.productNo));
        console.log("productKind : ", props.productKind);
        console.log("productPrice : ", props.productPrice, typeof(props.productPrice));
        console.log("objectProp : ", props.objectProp);
        console.log("arrayProp : ", props.arrayProp);
        console.log("funProp : ", props.funProp());
        console.groupEnd();
    });
    
</script>

<style scoped>

</style>