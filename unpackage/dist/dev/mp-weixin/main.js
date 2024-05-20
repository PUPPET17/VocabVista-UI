"use strict";
const common_vendor = require("./common/vendor.js");
const router_index = require("./router/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./App2.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
if (!Array) {
  const _component_router_view = common_vendor.resolveComponent("router-view");
  _component_router_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/23963/文档/HBuilderProjects/vocabvista-ui/App.vue"]]);
common_vendor.axios.defaults.baseURL = "http://localhost:9090";
const app = common_vendor.createApp(MiniProgramPage);
app.use(router_index.router);
app.mount("#app");
exports.MiniProgramPage = MiniProgramPage;
