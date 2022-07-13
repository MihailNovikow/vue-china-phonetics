import MainPage from "../pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import PhoneticsPage from "../pages/PhoneticsPage";



const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/phonetics',
        component: PhoneticsPage
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;