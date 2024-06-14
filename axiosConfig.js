import axios from "axios";

const instance = axios.create({
  timeout: 30000, //timeout
  headers: { "X-Custom-Header": "foobar" },
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["Accept-Language"] = "tr";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    //console.log(response.data.data);
    const ResData = response.data.data;
    if (ResData.numberOfElements === 0 || ResData == "") {
      // window.location.href = "/error";
    }
    return response;
  },
  function (error) {
    // get error codes
    if (error.response) {
      if (error.response.status) {
        const statusCode = error.response.status;
        if (statusCode === 404) {
          //  window.location.href = "/error";
        }
      }
    }
    // Do something with response error
    // return Promise.reject(error); // to catch the returning error, reject has been deprecated
    return error.response.data;
  }
);
export default instance;
