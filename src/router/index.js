// import the View.js router
import { createRouter, createWebHistory } from "vue-router";
// import the pages
import DashboardView from "../pages/DashboardView.vue";
import ProjectView from "../pages/ProjectsView.vue";
import ProjectsView from "../pages/ProjectsView.vue";
import SkillsView from "../pages/SkillsView.vue";

const router = createRouter (
    {
        history: createWebHistory(),

        routes: [
            {
                path: "/",
                component: DashboardView
            },
            {
                path: "/projects",
                component: ProjectsView
            },

             {
                path: "/skills",
                component: SkillsView
            }
        ]
    }
);

export default router;