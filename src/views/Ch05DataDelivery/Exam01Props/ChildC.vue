<template>
  <div class="card">
    <div class="card-header">ChildC</div>
    <div class="card-body">
        <p><b>propA : </b>{{ propA }}</p>
        <p><b>propB : </b>{{ propB }}</p>
        <p><b>propC : </b>{{ propC }}</p>
        <p><b>propD : </b>{{ propD }}</p>
        <p><b>propE(기본값 세팅 -> 데이터) : </b>{{ propE }}</p>
        <p><b>propF(기본값 세팅 -> 객체) : </b>{{ propF }}</p>
        <p><b>propG(기본값 세팅 -> 배열) : </b>{{ propG }}</p>
        <p><b>propH : </b>{{ propH() }}</p>
        <p><b>propI : </b>{{ propI }}</p>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
        //문자열만 가능
        propA: String,
        //숫자만 가능
        propB: Number,
        //문자열 또는 숫자만 가능
        propC: [String, Number],
        //문자열만 가능, 필수 데이터
        propD: {
            type: String,
            required: true
        },
        //숫자만 가능, 기본값 3
        propE: {
            type: Number,
            default: 3
        },
        //객체만 가능, 기본값 { message:"HelloWorld"}
        propF: {
            type: Object,
            default() {
                return {message:"HelloWorld"};
            }
        },
        //배열만 가능, 기본값 ["black", "white"]
        propG: {
            type: Array,
            default() {
                return ["black", "white"];
            }
        },
        //함수만 가능, 기본값으로 지정된 함수의 리턴값 출력
        propH: {
            type: Function,
            default() {
                return "기본값을 리턴하는 함수";
            }
        },
        //숫자만 가능, 유효성 검사(검사에 통과 못하면 콘솔창에 경고문구가 뜸)
        propI: {
            type: Number,
            validator(value) {
                return value > 0 && value < 11;
            }
        }
    });
</script>

<style scoped>

</style>