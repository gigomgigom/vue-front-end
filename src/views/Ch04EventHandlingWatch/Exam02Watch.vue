<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>
            <div class="row mb-2">
                <button class="btn btn-info btn-sm mb-3" @click="handleProductObjectChange">product 상태의 객체 교체</button>
                <button class="btn btn-info btn-sm mb-3" @click="handleProductAttrChange">product 상태의 속성값 변경</button>
                <button class="btn btn-info btn-sm" @click="handleProductSpecAttrChange">product 특정 속성값 변경</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, watch } from 'vue';

    //----------------------------------------------------------------------------------
    //상태 생성
    //----------------------------------------------------------------------------------
    //상태 생성 (단순 데이터)
    let userId = ref("");

    //상태 생성 (객체 데이터)
    let product = ref({
        name: "",
        company: "",
        price: 0
    });
    //----------------------------------------------------------------------------------
    //상태 감시
    //----------------------------------------------------------------------------------

    //상태 감시 (단순 데이터)
    watch(userId, (newUserId, oldUserId) => {
        console.group("userId 값 변경 감지");
        console.log("newUserId : " + newUserId);
        console.log("oldUserId : " + oldUserId);
        console.groupEnd();
    });

    //상태 감시 (객체 데이터) 기본 상태 감시
    watch(product, (newProduct, oldProduct) => {
        console.group("객체가 교체되었음 [기본감시상태]");
        console.log("newProduct : ", JSON.parse(JSON.stringify(newProduct)));
        console.log("oldProduct : ", JSON.parse(JSON.stringify(oldProduct)));
        console.groupEnd();
    });

    //상태 감시 (객체 데이터) 옵션 추가
    watch(product, (newProduct, oldProduct) => {
        console.group("객체가 교체되었음 [deep:true 옵션 추가]");
        console.log("newProduct : ", JSON.parse(JSON.stringify(newProduct)));
        console.log("oldProduct : ", JSON.parse(JSON.stringify(oldProduct)));
        console.groupEnd();
    }, { deep:true });

    //상태 감시 (객체 내 지정한 속성 감시)
    watch(() => product.value.price, (newPrice, oldPrice) => {
        console.group("객체 내부 price 속성만 감지");
        console.log("newPrice : " + newPrice);
        console.log("oldPrice : " + oldPrice);
        console.groupEnd();
    });

    //상태 감시 (복수개의 상태를 감시할 경우)
    watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) => {
        console.group("복수개의 상태 데이터 중 하나가 변경되었다.");
        console.log("newUserId : " + newUserId);
        console.log("oldUserId : " + oldUserId);
        console.log("newProduct : ", JSON.parse(JSON.stringify(newProduct)));
        console.log("oldProduct : ", JSON.parse(JSON.stringify(oldProduct)));
        console.groupEnd();
    })
    //----------------------------------------------------------------------------------
    //상태 변경 함수
    //----------------------------------------------------------------------------------
    //상태 변경 함수(객체 교체)
    function handleProductObjectChange() {
        product.value = {
            name: "킹네시스",
            company: "횬다이이이이잉",
            price: 10000
        };
    }

    //상태 변경 함수(객체 속성값 변경)
    function handleProductAttrChange() {
        product.value.name = "귀여운 모닝";
        product.value.company = "와Kia퍄";
    }

    //상태 변경 함수(객체 내 특정 속성값만 변경)
    function handleProductSpecAttrChange() {
        product.value.price= 10000000000000;
    }
</script>
<style scoped></style>