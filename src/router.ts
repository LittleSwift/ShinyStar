import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/route/Home.vue';
import About from './components/route/About.vue';
import Articles from "./components/route/Articles.vue";
import Article from "./components/route/Article.vue";
import {config} from "./config";
import Search from "~/components/route/Search.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/articles', component: Articles },
  { path: '/' + config.permalink, component: Article },
  { path: '/search', component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
