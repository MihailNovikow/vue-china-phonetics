import MainPage from "../pages/MainPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import PhoneticsPage from "../pages/PhoneticsPage";
import PhoneticsPage1 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-1.vue";
import PhoneticsPage2 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-2.vue";
import PhoneticsPage3 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-3.vue";
import PhoneticsPage4 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-4.vue";
import PhoneticsPage5 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-5.vue";
import PhoneticsPage6 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-6.vue";
import PhoneticsPage7 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-7.vue";
import PhoneticsPage8 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-8.vue";
import PhoneticsPage9 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-9.vue";
import PhoneticsPage10 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-10.vue";
import PhoneticsPage11 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-11.vue";
import PhoneticsPage12 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-12.vue";
import PhoneticsPage13 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-13.vue";
import PhoneticsPage14 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-14.vue";
import PhoneticsPage15 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-15.vue";
import PhoneticsPage16 from "../components/PhoneticsAudio/PhoneticsAudio/PhoneticsAudio-16.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/phonetics",
    component: PhoneticsPage,
  },
  {
    path: "/phonetics1",
    component: PhoneticsPage1,
  },
  {
    path: "/phonetics2",
    component: PhoneticsPage2,
  },
  {
    path: "/phonetics3",
    component: PhoneticsPage3,
  },
  {
    path: "/phonetics4",
    component: PhoneticsPage4,
  },
  {
    path: "/phonetics5",
    component: PhoneticsPage5,
  },
  {
    path: "/phonetics6",
    component: PhoneticsPage6,
  },
  {
    path: "/phonetics7",
    component: PhoneticsPage7,
  },
  {
    path: "/phonetics8",
    component: PhoneticsPage8,
  },
  {
    path: "/phonetics9",
    component: PhoneticsPage9,
  },
  {
    path: "/phonetics10",
    component: PhoneticsPage10,
  },
  {
    path: "/phonetics11",
    component: PhoneticsPage11,
  },
  {
    path: "/phonetics12",
    component: PhoneticsPage2,
  },
  {
    path: "/phonetics2",
    component: PhoneticsPage12,
  },
  {
    path: "/phonetics13",
    component: PhoneticsPage13,
  },
  {
    path: "/phonetics14",
    component: PhoneticsPage14,
  },
  {
    path: "/phonetics15",
    component: PhoneticsPage15,
  },
  {
    path: "/phonetics16",
    component: PhoneticsPage16,
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
