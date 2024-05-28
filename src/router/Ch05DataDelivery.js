const routes = [
    {
        path: "/Ch05DataDelivery/Exam01Props",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam01Props')
    },
    {
        path: "/Ch05DataDelivery/Exam02EventEmits",
        component: () =>  import(/* webpackChunkName: "Ch05DataDelivery" */ '@/views/Ch05DataDelivery/Exam02EventEmit')
    },
];

export default routes;