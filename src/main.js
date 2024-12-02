import { createApp } from 'vue';

// import axios from "./plugins/axios";
// import VueAxios from "vue-axios";
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app')

// app.use(VueAxios, axios);
// app.provide("axios", app.config.globalProperties.axios);

