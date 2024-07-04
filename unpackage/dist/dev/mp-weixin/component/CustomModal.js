"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "CustomModal",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    modalContent: String
  },
  methods: {
    onConfirm() {
      this.$emit("confirm");
    },
    onCancel() {
      this.$emit("cancel");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.isVisible
  }, $props.isVisible ? {
    b: common_vendor.t($props.modalContent),
    c: common_vendor.o((...args) => $options.onCancel && $options.onCancel(...args)),
    d: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-928831b7"], ["__file", "C:/Users/10023/Desktop/fun/VocabVista-UI/component/CustomModal.vue"]]);
wx.createComponent(Component);
