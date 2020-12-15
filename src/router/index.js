import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard.vue'

const routes = [{
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;