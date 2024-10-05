import { createApp } from 'vue';
import './assets/global.css';
import router from "./router.ts";
import App from "./components/App.vue";

const app = createApp(App);
app.use(router);
app.mount('#app');
