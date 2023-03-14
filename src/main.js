import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router.js";
import store from "./store";
import "materialize-css/dist/js/materialize.min";
createApp(App).use(store).use(router).mount("#app");
