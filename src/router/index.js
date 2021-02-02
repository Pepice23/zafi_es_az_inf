import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "@/views/MainMenu";
import CharacterCreator from "@/views/CharacterCreator";

const routes = [
  {
    path: "/",
    name: "MainMenu",
    component: MainMenu
  },
  {
    path: "/creator",
    name: "CCreator",
    component: CharacterCreator
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
