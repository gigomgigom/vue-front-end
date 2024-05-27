<template>
    <div class="card">
        <div class="card-header">Exam05AttrBinding</div>
        <div class="card-body">
            <div class="mb-4">
                <h5>:속성="변수"</h5>
                <a :href="vueHome" class="me-3">뷰 홈페이지</a>
                <RouterLink :to="appHome">홈페이지</RouterLink>
            </div>
            <div class="mb-4">
                <h5>:속성="연산식" | `매개변수화된 문자열`</h5>
                <!-- <img :src="require('/images/photos/' + imgName)" height="150" class="me-2"/>
                <img :src="require(`/images/photos/${imgName}`)" height="150" class="me-2"/> -->
                <img :src="'/images/photos/' + imgName" height="150" class="me-2"/>
                <img :src="`/images/photos/${imgName}`" height="150" class="me-2"/>
            </div>
            <div class="mb-4">
                <h5>:class="변수 | 객체 | 배열"</h5>
                <div class="mb-3 fw-bold">일반 클래스 직접 기입</div>
                <div class="mb-3" :class="className1">변수값을 활용</div>
                <div class="mb-3" :class="[className1, className2, className3]">클래스 속성 배열 사용</div>
                <div class="mb-3" :class="{'fw-bold':true, 'text-danger':true}">객체 속성값으로 클래스 속성 지정</div>
                <div class="mb-3" :class="{'fw-bold':isBold, 'text-danger':isDanger}">객체의 속성값을 변수값으로</div>
            </div>
            <div class="mb-4">
                <h5>:style="변수 | 객체 | 배열"</h5>
                <div style="margin-bottom: 10px; font-weight: bold;">스타일 속성 직접기입</div>
                <div style="margin-bottom: 10px;" :style="[style1, style2]">변수를 담은 배열로 속성 기입</div>
                <div style="margin-bottom: 10px;" :style="{'font-weight':fontWeight, 'color':textColor}">속성들을 담은 객체로 기입</div>
            </div>

            <hr/>

            <button class="btn btn-info btn-sm" @:click="changeData">상태 변수값 변경</button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    let vueHome = ref("http://vuejs.org");
    let appHome = ref("/");

    let imgName = ref("photo1.jpg");

    let className1 = ref("fst-italic");
    let className2 = ref("fw-bold");
    let className3 = ref("text-danger");

    let isBold = ref(false);
    let isDanger = ref(true);

    let style1 = ref("margin-bottom: 10px");
    let style2 = ref("color: green");

    let fontWeight = ref("bold");
    let textColor = ref("red");

    let toggle = ref(true);

    function changeData() {
        if(toggle.value) {
            imgName.value = "photo2.jpg";
            className1.value = "text-warning";
            fontWeight.value = "";
            textColor.value= "#0000ff";
        } else {
            imgName.value = "photo1.jpg";
            className1.value = "text-danger";
            fontWeight.value = "bold";
            textColor.value= "#ff0000";
        }

        toggle.value = !toggle.value;
    }
</script>
<style scoped>
    
</style>