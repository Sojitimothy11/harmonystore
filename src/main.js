import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";
import AxiosPlugin from "./plugins/axios";
import router from "./router.js";
import registerGlobalComponents from "./plugins/globalComponents";
import store from "./store/index.js";
// import SweetAlert from "./plugins/sweetalert";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(router);
app.use(AxiosPlugin);
app.use(store);
// app.use(SweetAlert)
registerGlobalComponents(app);

app.mount("#app");
