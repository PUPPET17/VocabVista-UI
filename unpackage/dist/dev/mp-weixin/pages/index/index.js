"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      nickname: "",
      password: "",
      twice: "",
      nicknameHolder: "昵称",
      passwordHolder: "密码",
      twiceHolder: "确认密码",
      isFlipped: false
    };
  },
  methods: {
    login() {
      this.validateFields();
      if (this.formIsValid()) {
        console.log("Login form submitted:", this.nickname, this.password);
      } else {
        console.log("Validation failed. Login form not submitted.");
      }
    },
    register() {
      this.validateFields();
      this.checkPasswordTwice();
      if (this.formIsValid() && this.twiceHolder == "两次输入的密码不匹配") {
        console.log("Registration form submitted:", this.nickname, this.password);
      } else {
        console.log("Validation failed. Registration form not submitted.");
      }
    },
    validateFields() {
      const specialChars = /[^a-zA-Z0-9]/g;
      this.nicknameHolder = this.nickname.length < 5 || this.nickname.length > 10 || specialChars.test(this.nickname) ? "昵称必须是5-10个字符，不能包含特殊字符" : "";
      this.passwordHolder = this.password.length < 6 || this.password.length > 20 || specialChars.test(this.password) ? "密码必须是6-20个字符，不能包含特殊字符" : "";
    },
    checkPasswordTwice() {
      this.twiceHolder = this.twice !== this.password ? "两次输入的密码不匹配" : "";
    },
    toggleFlip() {
      this.reset();
      this.isFlipped = !this.isFlipped;
    },
    reset() {
      this.nickname = "";
      this.password = "";
      this.twice = "";
      this.nicknameHolder = "昵称";
      this.passwordHolder = "密码";
      this.twiceHolder = "二次确认密码";
    },
    formIsValid() {
      return this.nicknameHolder == "昵称" && this.passwordHolder == "密码";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.nicknameHolder,
    b: $data.nickname,
    c: common_vendor.o(($event) => $data.nickname = $event.detail.value),
    d: $data.passwordHolder,
    e: $data.password,
    f: common_vendor.o(($event) => $data.password = $event.detail.value),
    g: common_vendor.o((...args) => $options.toggleFlip && $options.toggleFlip(...args)),
    h: common_vendor.o((...args) => $options.login && $options.login(...args)),
    i: $data.nicknameHolder,
    j: $data.nickname,
    k: common_vendor.o(($event) => $data.nickname = $event.detail.value),
    l: $data.passwordHolder,
    m: $data.password,
    n: common_vendor.o(($event) => $data.password = $event.detail.value),
    o: $data.twiceHolder,
    p: $data.twice,
    q: common_vendor.o(($event) => $data.twice = $event.detail.value),
    r: common_vendor.o((...args) => $options.toggleFlip && $options.toggleFlip(...args)),
    s: common_vendor.o((...args) => $options.register && $options.register(...args)),
    t: $data.isFlipped ? 1 : ""
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/23963/文档/HBuilderProjects/vocabvista-ui/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
