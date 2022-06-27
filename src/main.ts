import { createApp } from "vue";
import App from "./App.vue";
// import * as Cesium from "cesium";
// import "cesium/Build/Cesium/Widgets/widgets.css";
import VueCesium from "vue-cesium";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(Antd);

app.use(VueCesium);
// app.use(VueCesium, {
//   cesiumPath: "https://unpkg.com/cesium@1.94.3/Build/Cesium/Cesium.js",
// });

app.mount("#app");
