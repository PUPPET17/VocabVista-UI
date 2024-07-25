import {
  axios_default
} from "./chunk-MPYS5INC.js";

// C:/Users/10023/Desktop/fun/VocabVista-UI/node_modules/uniapp-axios-adapter/lib/index.esm.js
var getResponse = (res, config) => {
  const { statusCode, errMsg } = res;
  const response = {
    ...res,
    status: statusCode,
    statusText: errMsg,
    config,
    request: null
  };
  return response;
};
var uniAdapter = (config) => {
  if (!uni) {
    throw new Error("please use this in uni-app project!");
  }
  return new Promise((resolve, reject) => {
    const { baseURL, url, headers, data, params } = config;
    const uniConfig = {
      ...config,
      url: baseURL + url,
      header: JSON.parse(JSON.stringify(headers))
    };
    if (data || params) {
      try {
        uniConfig.data = JSON.parse(data || params);
      } catch (e) {
        uniConfig.data = data || params;
      }
    }
    uni.request({
      ...uniConfig,
      success(res) {
        const response = getResponse(res, config);
        resolve(response);
      },
      fail(res) {
        const response = getResponse(res, config);
        reject(response);
      }
    });
  });
};
var UniAdapter = uniAdapter;
axios_default.defaults.adapter = uniAdapter;
export {
  UniAdapter,
  axios_default as default
};
//# sourceMappingURL=uniapp-axios-adapter.js.map
