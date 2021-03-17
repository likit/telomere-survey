import Vue from 'vue';
import VueRouter from "vue-router";
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'MainPage',
        meta: {
            title: 'Main Page',
            requiresAuth: true,
        },
        component: () => import('../views/MainPage.vue')
    },
    {
        path: '/',
        name: 'Profile',
        meta: {
            title: 'Profile',
            requiresAuth: true,
        },
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/form',
        name: 'FormMain',
        meta: {
            title: 'Form Main Page',
            requiresAuth: true,
        },
        component: () => import('../views/FormMain.vue')
    },
    {
        path: '/form/personal',
        name: 'Personal',
        meta: {
            title: 'Personal Data Page',
            requiresAuth: true,
        },
        component: () => import('../views/Personal.vue')
    },
    {
        path: '/form/charlson',
        name: 'Charlson',
        meta: {
            title: 'Charlson Comorbidity Index',
            requiresAuth: true,
        },
        component: () => import('../views/Charlson.vue')
    },
    {
        path: '/form/minicog',
        name: 'MiniCog',
        meta: {
            title: 'Mini Cog',
            requiresAuth: true,
        },
        component: () => import('../views/MiniCog.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from , next)=>{
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    if(requiresAuth === true && auth.currentUser === null) {
        next('/login')
    } else {
        next()
    }
})

export default router