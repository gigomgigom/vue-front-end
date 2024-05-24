const routes = [
    {
        path: "/Ch03DataBinding/Exam01Expressions",
        component: () =>  import(/* webpackChunkName: "Ch03DataBinding" */ '@/views/Ch03DataBinding/Exam01Expressions.vue')
    },
    {
        path: "/Ch03DataBinding/Exam02NotState",
        component: () =>  import(/* webpackChunkName: "Ch03DataBinding" */ '@/views/Ch03DataBinding/Exam02NotState.vue')
    },
    {
        path: "/Ch03DataBinding/Exam03State",
        component: () =>  import(/* webpackChunkName: "Ch03DataBinding" */ '@/views/Ch03DataBinding/Exam03State.vue')
    },
    {
        path: "/Ch03DataBinding/Exam04ComputedFunBinding",
        component: () =>  import(/* webpackChunkName: "Ch03DataBinding" */ '@/views/Ch03DataBinding/Exam04ComputedFunBinding.vue')
    }
];

export default routes;