import { createRouter, createWebHistory } from 'vue-router'
import overview from '../views/Overview.vue'

const routes = [{
        path: '/overview',
        name: 'Overview',
        component: overview
    },
    {
        path: '/arts',
        name: 'Arts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Arts.vue')
    },
    {
        path: '/learns',
        name: 'Learns',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Learns.vue')
    },
    {
        path: '/data',
        name: 'Data',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Data.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;