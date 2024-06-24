"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./utils/axios.js");
if (!Math) {
  "./pages/index.js";
  "./pages/home.js";
  "./pages/dashboard.js";
  "./pages/mine.js";
  "./pages/word.js";
  "./component/infoCard.js";
  "./pages/review.js";
}
const _sfc_main = {
  // onLaunch: function() {
  // 	console.log('App Launch')
  // },
  // onShow: function() {
  // 	console.log('App Show')
  // },
  // onHide: function() {
  // 	console.log('App Hide')
  // }
};
if (!Array) {
  const _component_router_view = common_vendor.resolveComponent("router-view");
  _component_router_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/10023/Desktop/fun/VocabVista-UI/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
