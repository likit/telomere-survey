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
        path: '/form/clock',
        name: 'Clock',
        meta: {
            title: 'Clock Drawing',
            requiresAuth: true,
        },
        component: () => import('../views/Clock.vue')
    },
    {
        path: '/form/mna',
        name: 'MNA',
        meta: {
            title: 'MNA',
            requiresAuth: true,
        },
        component: () => import('../views/MNA.vue')
    },
    {
        path: '/form/adl',
        name: 'ADL',
        meta: {
            title: 'ADL',
            requiresAuth: true,
        },
        component: () => import('../views/ADL.vue')
    },
    {
        path: '/form/iadl',
        name: 'IADL',
        meta: {
            title: 'IADL',
            requiresAuth: true,
        },
        component: () => import('../views/IADL.vue')
    },
    {
        path: '/form/9q',
        name: '9Q',
        meta: {
            title: '9Q',
            requiresAuth: true,
        },
        component: () => import('../views/9Q.vue')
    },
    {
        path: '/form/kihon',
        name: 'Kihon',
        meta: {
            title: 'Kihon',
            requiresAuth: true,
        },
        component: () => import('../views/Kihon.vue')
    },
    {
        path: '/form/eq-5d-5l',
        name: 'EQ-5D-5L',
        meta: {
            title: 'EQ-5D-5L',
            requiresAuth: true,
        },
        component: () => import('../views/EQ-5D-5L.vue')
    },
    {
        path: '/form/gpaq',
        name: 'GPAQ',
        meta: {
            title: 'GPAQ',
            requiresAuth: true,
        },
        component: () => import('../views/GPAQ.vue')
    },
    {
        path: '/form/exhaustion',
        name: 'Exhaustion',
        meta: {
            title: 'Exhaustion',
            requiresAuth: true,
        },
        component: () => import('../views/Exhaustion.vue')
    },
    {
        path: '/form/evaluation',
        name: 'Evaluation',
        meta: {
            title: 'Evaluation',
            requiresAuth: true,
        },
        component: () => import('../views/Evaluation.vue')
    },
    {
        path: '/form/sarcf',
        name: 'SARCF',
        meta: {
            title: 'SARCF',
            requiresAuth: true,
        },
        component: () => import('../views/SARCF.vue')
    },
    {
        path: '/province',
        name: 'Province',
        meta: {
            title: 'Province Selection',
            requiresAuth: true,
        },
        component: () => import('../views/Province.vue')
    },
    {
        path: '/form/search',
        name: 'RecordSearch',
        meta: {
            title: 'Record Search',
            requiresAuth: true,
        },
        component: () => import('../views/RecordSearch.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/form/follow-up/records',
        name: 'FollowUpRecordSearch',
        meta: {
            title: 'Follow-Up Index Page',
            requiresAuth: true,
        },
        component: () => import('../views/FollowUpRecordSearch.vue')
    },
    {
        path: '/form/follow-up',
        name: 'FollowUpMain',
        meta: {
            title: 'Follow-Up Main Page',
            requiresAuth: true,
        },
        component: () => import('../views/FollowUpMain.vue')
    },
    {
        path: '/form/follow-up/personal',
        name: 'FollowUpPersonal',
        meta: {
            title: 'Follow-Up Personal Page',
            requiresAuth: true,
        },
        component: () => import('../views/FollowUpPersonal.vue')
    },
    {
        path: '/form/follow-up/frail-scale',
        name: 'FRAILScale',
        meta: {
            title: 'Follow-Up FRAIL Scale Page',
            requiresAuth: true,
        },
        component: () => import('../views/FrailScale.vue')
    },
    {
        path: '/form/follow-up/bia',
        name: 'FollowUpBIA',
        meta: {
            title: 'Follow-Up BIA Page',
            requiresAuth: true,
        },
        component: () => import('../views/FollowUpBIA.vue')
    },
    {
        path: '/form/follow-up/badl',
        name: 'FollowUpBADL',
        meta: {
            title: 'Follow-Up BADL Page',
            requiresAuth: true,
        },
        component: () => import('../views/ADL.vue')
    },
    {
        path: '/form/follow-up/clock',
        name: 'FollowUpClock',
        meta: {
            title: 'Follow-Up Clock Page',
            requiresAuth: true,
        },
        component: () => import('../views/Clock.vue')
    },
    {
        path: '/form/follow-up/iadl',
        name: 'FollowUpIADL',
        meta: {
            title: 'Follow-Up IADL Page',
            requiresAuth: true,
        },
        component: () => import('../views/IADL.vue')
    },
    {
        path: '/form/follow-up/mna',
        name: 'FollowUpMNA',
        meta: {
            title: 'Follow-Up MNA Page',
            requiresAuth: true,
        },
        component: () => import('../views/MNA.vue')
    },
    {
        path: '/form/follow-up/minicog',
        name: 'FollowUpMiniCog',
        meta: {
            title: 'Follow-Up Mini Cog Page',
            requiresAuth: true,
        },
        component: () => import('../views/MiniCog.vue')
    },
    {
        path: '/form/follow-up/exhaustion',
        name: 'FollowUpExhaustion',
        meta: {
            title: 'Follow-Up Exhaustion Page',
            requiresAuth: true,
        },
        component: () => import('../views/Exhaustion.vue')
    },
    {
        path: '/form/follow-up/GPAQ',
        name: 'FollowUpGPAQ',
        meta: {
            title: 'Follow-Up GPAQ Page',
            requiresAuth: true,
        },
        component: () => import('../views/GPAQ.vue')
    },
    {
        path: '/form/follow-up/EQ-5D-5L',
        name: 'FollowUpEQ-5D-5L',
        meta: {
            title: 'Follow-Up EQ-5D-5L Page',
            requiresAuth: true,
        },
        component: () => import('../views/EQ-5D-5L.vue')
    },
    {
        path: '/form/follow-up/Behavior',
        name: 'FollowUpBehavior',
        meta: {
            title: 'Follow-Up Bahavior Page',
            requiresAuth: true,
        },
        component: () => import('../views/Behavior.vue')
    },
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