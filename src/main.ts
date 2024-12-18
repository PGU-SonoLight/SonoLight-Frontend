import "@a/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@m/Router";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

