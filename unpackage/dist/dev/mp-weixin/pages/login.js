"use strict";
const common_vendor = require("../common/vendor.js");
const utils_axios = require("../utils/axios.js");
const _sfc_main = {
  data() {
    return {
      nickname: "admin",
      password: "admin",
      twice: "",
      //二次确认密码
      nicknameHolder: "昵称",
      passwordHolder: "密码",
      twiceHolder: "确认密码",
      isFlipped: false,
      interestDomain: ""
    };
  },
  onLoad() {
  },
  onShow() {
  },
  methods: {
    updateInterestDomain(event) {
      this.interestDomain = event.target.value;
    },
    login() {
      this.validateFields();
      if (this.formIsValid()) {
        utils_axios.service.post("/auth/login", {
          username: this.nickname,
          password: this.password
        }).then((response) => {
          localStorage.setItem("token", response.data.token);
          common_vendor.index.switchTab({
            url: "/pages/home"
          });
        }).catch((error) => {
          if (error.response && error.response.status === 401) {
            common_vendor.index.showToast({
              title: "登录失败，请检查您的凭证",
              icon: "none",
              duration: 2e3
            });
          } else {
            console.error("Login failed:", error);
          }
        });
      } else {
        console.log("Validation failed. Login form not submitted.");
      }
    },
    register() {
      this.validateFields();
      this.checkPasswordTwice();
      if (this.formIsValid() && !this.twiceError()) {
        utils_axios.service.post("/auth/register", {
          username: this.nickname,
          password: this.password,
          interestDomain: this.interestDomain
        }).then((response) => {
          if (response.data === 0) {
            common_vendor.index.showToast({
              title: "Registration faild:用户名已存在",
              icon: "none",
              duration: 2e3
            });
            this.nickname = "";
            this.twice = "";
          } else {
            common_vendor.index.showToast({
              title: "Registration Successful",
              icon: "none",
              duration: 2e3
            });
            common_vendor.index.navigateTo({
              url: "/pages/index"
            });
          }
        }).catch((error) => {
          console.error("Registration failed:", error);
        });
      } else {
        console.log("Validation failed. Registration form not submitted.");
        common_vendor.index.showToast({
          title: "Validation failed. Registration form not submitted.",
          icon: "none",
          duration: 2e3
        });
      }
    },
    validateFields() {
      const specialChars = /[^a-zA-Z0-9]/g;
      this.nicknameHolder = "昵称";
      if (this.nickname.length < 5 || this.nickname.length > 10 || specialChars.test(this.nickname)) {
        this.nickname = "";
        this.nicknameHolder = "昵称: 5-10个字符，不能包含特殊符号";
      }
      this.passwordHolder = "密码";
      if (this.password.length < 5 || this.password.length > 20 || specialChars.test(this.password)) {
        this.password = "";
        this.passwordHolder = "密码: 5-20个字符，不能包含特殊符号";
      }
    },
    checkPasswordTwice() {
      this.twiceHolder = "确认密码";
      if (this.twice !== this.password) {
        this.twice = "";
        this.twiceHolder = "两次输入的密码不匹配";
      }
    },
    toggleFlip() {
      this.nickname = "";
      this.password = "";
      this.twice = "";
      this.nicknameHolder = "昵称";
      this.passwordHolder = "密码";
      this.twiceHolder = "确认密码";
      this.isFlipped = !this.isFlipped;
    },
    formIsValid() {
      return this.nicknameHolder === "昵称" && this.passwordHolder === "密码" && this.twiceHolder === "确认密码";
    },
    twiceError() {
      return this.twiceHolder !== "确认密码";
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
    h: common_vendor.o(($event) => $options.login("Home")),
    i: $data.nicknameHolder,
    j: $data.nickname,
    k: common_vendor.o(($event) => $data.nickname = $event.detail.value),
    l: $data.passwordHolder,
    m: $data.password,
    n: common_vendor.o(($event) => $data.password = $event.detail.value),
    o: $data.twiceHolder,
    p: $data.twice,
    q: common_vendor.o(($event) => $data.twice = $event.detail.value),
    r: $data.interestDomain,
    s: common_vendor.o((...args) => $options.updateInterestDomain && $options.updateInterestDomain(...args)),
    t: common_vendor.o((...args) => $options.toggleFlip && $options.toggleFlip(...args)),
    v: common_vendor.o((...args) => $options.register && $options.register(...args)),
    w: $data.isFlipped ? 1 : ""
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/10023/Desktop/fun/VocabVista-UI/pages/login.vue"]]);
wx.createPage(MiniProgramPage);
