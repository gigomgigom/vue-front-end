const routes = [
    {
        path: "/Ch06LifeCycleHook/Exam01LifeCycleHook",
        component: () =>  import(/* webpackChunkName: "Ch06LifeCycleHook" */ '@/views/Ch06LifeCycleHook/Exam01LifeCycleHook')
    },
    {
        path: "/Ch06LifeCycleHook/Exam02DomElementRef",
        component: () =>  import(/* webpackChunkName: "Ch06LifeCycleHook" */ '@/views/Ch06LifeCycleHook/Exam02DomElementRef')
    },
];

export default routes;