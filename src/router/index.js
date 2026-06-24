// import the View.js router
import { createRouter, createWebHistory } from "vue-router";
// import the pages
import DasboardView from "../pages/DashboardView.vue";
import ProjectView from "../pages/ProjectsView.vue";
import ProjectsView from "../pages/ProjectsView.vue";

const router = createRouter (
    {
        history: createWebHistory(),

        routes: [
            {
                path: "/",
                component: DasboardView
            },
            {
                path: "/projects",
                component: ProjectsView
            }
        ]
    }
);

export default router;