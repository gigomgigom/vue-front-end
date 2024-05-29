import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Bootstrap 관련 JavaScript와 CSS 로딩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

//App컴포넌트를 <div id="app"></div>태그의 내용으로 추가한다.
createApp(App).use(store).use(router).mount('#app')
