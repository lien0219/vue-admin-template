import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;
// api接口
import API from "@/api";
import CategorySelect from "@/components/CategorySelect";
Vue.prototype.$API = API;
// 注册全局组件
Vue.component(CategorySelect.name, CategorySelect);
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
