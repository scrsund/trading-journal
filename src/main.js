import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
// import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);

app.use(store);
app.mount("#app");
