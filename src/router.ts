import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Articles from "./components/Articles.vue";
import Article from "./components/Article.vue";
import {config} from "./config.ts";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/articles', component: Articles },
  { path: '/' + config.permalink, component: Article },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
