import { l as defineNuxtRouteMiddleware, u as useRouter, m as executeAsync } from "../server.mjs";
import "vue";
import "hookable";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import { A as AuthComposable } from "./AuthComposable-14236e1c.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "vue3-snackbar";
import "@vue/devtools-api";
import "cookie-es";
import "js-cookie";
import "is-https";
import "vue/server-renderer";
import "ohash";
import "./axiosConfig-89e67415.js";
import "axios";
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
export {
  auth as default
};
//# sourceMappingURL=auth-35ed28d4.js.map
