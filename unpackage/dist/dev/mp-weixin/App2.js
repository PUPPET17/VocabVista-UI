"use strict";
const app = require("./main.js");
require("./common/vendor.js");
require("./router/index.js");
wx.createPage(app.MiniProgramPage);
