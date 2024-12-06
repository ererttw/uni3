"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("hello3333");
    const change = async () => {
      title.value = "sdf";
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: common_vendor.o(change)
      };
    };
  }
};
wx.createPage(_sfc_main);
