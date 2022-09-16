import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueStarRating from "vue-star-rating";

import "bulma";

const app = createApp(App);

app.use(router);
app.component("star-rating", VueStarRating.default);
app.mount("#app");
