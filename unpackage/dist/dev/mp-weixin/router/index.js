"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main$1 = {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  created() {
  }
};
if (!Array) {
  const _component_router_link = common_vendor.resolveComponent("router-link");
  _component_router_link();
}
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      to: "/"
    })
  };
}
const Home = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/23963/文档/HBuilderProjects/vocabvista-ui/pages/home.vue"]]);
const router$1 = common_vendor.useRouter();
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
    login(url) {
      this.validateFields();
      if (this.formIsValid()) {
        console.log(this.$route.path);
        common_vendor.axios.post("/auth/login", {
          username: this.nickname,
          password: this.password
        }).then((response) => {
          console.log("Login successful", response.data);
        });
        router$1.push({ name: url }).then(() => {
          console.log(this.$route.path);
        }).catch((error) => {
          console.error(error);
        });
        console.log(this.$route.path);
      } else {
        console.log("Validation failed. Login form not submitted.");
      }
    },
    register() {
      this.validateFields();
      this.checkPasswordTwice();
      if (this.formIsValid() && !this.twiceError()) {
        common_vendor.axios.post("/auth/register", {
          username: this.nickname,
          password: this.password
        }).then((response) => {
          console.log("Registration successful:", response.data);
        });
      } else {
        console.log("Validation failed. Registration form not submitted.");
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
      if (this.password.length < 6 || this.password.length > 20 || specialChars.test(this.password)) {
        this.password = "";
        this.passwordHolder = "密码: 6-20个字符，不能包含特殊符号";
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
    r: common_vendor.o((...args) => $options.toggleFlip && $options.toggleFlip(...args)),
    s: common_vendor.o((...args) => $options.register && $options.register(...args)),
    t: $data.isFlipped ? 1 : ""
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/23963/文档/HBuilderProjects/vocabvista-ui/pages/index/index.vue"]]);
const router = common_vendor.createRouter({
  history: common_vendor.createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: MiniProgramPage
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});
exports.MiniProgramPage = MiniProgramPage;
exports.router = router;
