import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import EducationView from "../views/EducationView.vue";
import ProjectView from "../views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/experience",
      name: "experience",
      component: ExperienceView,
    },
    {
      path: "/education",
      name: "education",
      component: EducationView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectView,
    },
  ],
});

export default router;
