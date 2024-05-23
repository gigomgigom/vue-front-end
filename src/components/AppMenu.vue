<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Ch01. Vue 시작
                </button>
            </h2>
            <div id="collapse1" class="accordion-collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                    Ch02. Component & Routing
                </button>
            </h2>
            <div id="collapse2" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam01View" class="nav-link">Exam01View : 뷰 컴포넌트(싱글 파일
                                컴포넌트 SFC)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam02View" class="nav-link">Exam02View : 뷰 컴포넌트(폴더
                                컴포넌트)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam03View" class="nav-link">Exam03View : UI 컴포넌트(공용 및
                                로컬)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam04View" class="nav-link">Exam04View : 뷰이동</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam05View" class="nav-link">Exam05View : 중첩된 라우트</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam06View" class="nav-link">Exam06View : URL 데이터 전달</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>