import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Exam01View from '@/views/Ch02ComponentRouting/Exam01View.vue';
import Exam03View from '@/views/Ch02ComponentRouting/Exam03View';
import Exam04View from '@/views/Ch02ComponentRouting/Exam04View';
import Exam05View from '@/views/Ch02ComponentRouting/Exam05View';
import Exam06View from '@/views/Ch02ComponentRouting/Exam06View';
import Exam07View from '@/views/Ch02ComponentRouting/Exam07View';
import UIComponentA from '@/components/Ch02ComponentRouting/UIComponentA.vue';
import UIComponentB from '@/components/Ch02ComponentRouting/UIComponentB.vue';
import UIComponentC from '@/components/Ch02ComponentRouting/UIComponentC.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Ch02ComponentRouting/Exam01View',
    component: Exam01View
  },
  {
    path: '/Ch02ComponentRouting/Exam02View',
    component: () => import(/* webpackChunkName: "exam02view" */ '@/views/Ch02ComponentRouting/Exam02View')
  },
  {
    path: '/Ch02ComponentRouting/Exam03View',
    component: Exam03View
  },
  {
    path: '/Ch02ComponentRouting/Exam04View',
    component: Exam04View
  },
  {
    path: '/Ch02ComponentRouting/Exam05View',
    component: Exam05View,
    redirect: '/Ch02ComponentRouting/Exam05View/UIComponentA',
    children: [
      {
        path: "UIComponentA", //부모 컴포넌트 요청 경로의 하위 요소를 명시해준다.
        component: UIComponentA
      },
      {
        path: "UIComponentB",
        component: UIComponentB
      },
      {
        path: "UIComponentC",
        component: UIComponentC
      },
    ]
  },
  {
    path: '/Ch02ComponentRouting/Exam06View',
    component: Exam06View
  },
  {
    //? : 앞의 파라미터는 없어도 된다라는 뜻
    //?가 없으면 파라미터는 필수적으로 받아야한다.
    //kind, color : 데이터를 받기 위한 변수
    path: '/Ch02ComponentRouting/Exam07View/:kind?/:color?',
    component: Exam07View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
