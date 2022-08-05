import MainPage from '../pages/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PhoneticsPage from '../pages/PhoneticsPage';
import PhoneticsPage1 from '../components/PhoneticsAudio/PhoneticsAudio-1.vue';
import PhoneticsPage2 from '../components/PhoneticsAudio/PhoneticsAudio-2.vue';

const routes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/phonetics',
		component: PhoneticsPage,
	},
	{
		path: '/phonetics1',
		component: PhoneticsPage1,
	},
	{
		path: '/phonetics2',
		component: PhoneticsPage2,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});

export default router;
