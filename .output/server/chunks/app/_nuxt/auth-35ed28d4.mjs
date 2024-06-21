import { l as defineNuxtRouteMiddleware, u as useRouter, m as executeAsync } from '../server.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { H as HelperComposable, i as instance, c as config } from './axiosConfig-89e67415.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-snackbar';
import 'is-https';
import 'vue/server-renderer';
import 'axios';

let CRMHost;
const CRMHostRes = HelperComposable().GetCRMHost();
CRMHostRes.then((res) => {
  CRMHost = res;
}).catch((error) => {
  console.error(error);
});
function AuthComposable() {
  const SendRegisterData = async (data) => {
    let RawData = null;
    if (!data) {
      return "1";
    }
    const AxiosResponse = await instance.post(
      `${CRMHost}/auth/register`,
      data
    );
    if (AxiosResponse.status) {
      return "0";
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const SendLoginData = async (data) => {
    let RawData = null;
    if (!data) {
      return "1";
    }
    const AxiosResponse = await instance.post(`${CRMHost}/auth/login`, data);
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserInformations = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/account`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserReservations = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/reservations`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetLoginVerificationCode = async (number) => {
    let RawData = null;
    if (!number) {
      return "Please Enter Your Phone Number";
    }
    const Website = config.CRM_WEBSITE;
    const LoginData = {
      phone: number,
      webSite: Website
    };
    const AxiosResponse = await instance.post(
      `${CRMHost}/auth/phone`,
      LoginData
    );
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const ConfirmVerificationCode = async (code, number) => {
    let RawData = null;
    if (!code) {
      return "Please Enter Your Phone Verification Code";
    }
    if (!number) {
      return "Please Refresh Page";
    }
    const Website = config.CRM_WEBSITE;
    const AxiosResponse = await instance.get(
      `${CRMHost}/auth/phone?webSite=${Website}&code=${code}&phone=${number}`
    );
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserCoupons = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/coupons `, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const CheckUserCoupon = async (coupon, price, accommodation) => {
    let RawData = null;
    let ReplacementCharacter = "%3F";
    let ReplacedCoupon = "";
    let TrimmedCoupon = "";
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    if (!coupon) {
      return "Please coupon select";
    }
    if (!price) {
      return;
    }
    if (!accommodation) {
      return;
    }
    TrimmedCoupon = coupon.trim();
    ReplacedCoupon = TrimmedCoupon;
    if (TrimmedCoupon[TrimmedCoupon.length - 1] == "?") {
      ReplacedCoupon = TrimmedCoupon.slice(0, -1) + ReplacementCharacter;
    }
    const AxiosResponse = await instance.post(
      `${CRMHost}/coupons/${ReplacedCoupon} `,
      {
        totalAmount: price,
        accommodation
      },
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`
        }
      }
    );
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserGuests = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "error get user guest";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/guest`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  return {
    SendRegisterData,
    SendLoginData,
    GetUserInformations,
    GetUserReservations,
    GetLoginVerificationCode,
    ConfirmVerificationCode,
    GetUserCoupons,
    CheckUserCoupon,
    GetUserGuests
  };
}

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const Router = useRouter();
  const User = useCookie("User");
  const Localization = useCookie("i18n_redirected");
  if (to.fullPath.includes("/login") || to.fullPath.includes("/register")) {
    return;
  }
  const AccessTokesExpiredControl = async () => {
    try {
      const UserData = await AuthComposable().GetUserInformations();
      if (UserData == "Access Denied") {
        await SignOut();
      }
    } catch (error) {
      console.error("Error during token expiry control:", error);
    }
  };
  const SignOut = async () => {
    try {
      if (false)
        ;
    } catch (error) {
      console.error("Error removing access token from localStorage:", error);
    }
    User.value = null;
    await Router.push("/user/login");
  };
  if (!User.value) {
    try {
      const redirectPath = Localization.value && Localization.value.toString() !== "tr" ? `/${Localization.value.toString()}/user/login` : "/user/login";
      if (false)
        ;
      return Router.push(redirectPath);
    } catch (error) {
      console.error("Error during redirection:", error);
    }
  }
  [__temp, __restore] = executeAsync(() => AccessTokesExpiredControl()), await __temp, __restore();
});

export { auth as default };
//# sourceMappingURL=auth-35ed28d4.mjs.map
