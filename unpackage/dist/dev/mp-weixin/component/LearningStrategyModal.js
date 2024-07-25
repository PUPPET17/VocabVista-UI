"use strict";
const common_vendor = require("../common/vendor.js");
const utils_axios = require("../utils/axios.js");
const _sfc_main = {
  name: "LearningStrategyModal",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dictId: "",
      count: ""
    };
  },
  methods: {
    updateDictId(event) {
      this.dictId = event.target.value;
    },
    updateCount(event) {
      this.count = event.target.value;
    },
    onConfirm() {
      utils_axios.service.post("/word/setLearningStrategy", {
        dictId: this.dictId,
        radius: this.count
      }).then((response) => {
        console.log("Learning strategy set successfully", response.data);
        utils_axios.service.post("/word/getWordList").then((response2) => {
          this.jsonData = response2.data;
          common_vendor.index.removeStorage({
            key: "wordData",
            success: function(res) {
              console.log("success");
            }
          });
          common_vendor.index.setStorageSync("wordData", JSON.stringify(response2.data));
          common_vendor.index.showToast({
            title: "学习策略设置成功",
            icon: "success",
            duration: 2e3
          });
        }).catch((error) => {
          console.error("Error fetching data:", error);
        });
      }).catch((error) => {
        console.error("Error setting learning strategy:", error);
        common_vendor.index.showToast({
          title: "学习策略设置失败",
          icon: "none",
          duration: 2e3
        });
      });
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
    b: $data.dictId,
    c: common_vendor.o((...args) => $options.updateDictId && $options.updateDictId(...args)),
    d: $data.count,
    e: common_vendor.o((...args) => $options.updateCount && $options.updateCount(...args)),
    f: common_vendor.o((...args) => $options.onCancel && $options.onCancel(...args)),
    g: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-40b5a808"], ["__file", "C:/Users/10023/Desktop/fun/VocabVista-UI/component/LearningStrategyModal.vue"]]);
wx.createComponent(Component);
