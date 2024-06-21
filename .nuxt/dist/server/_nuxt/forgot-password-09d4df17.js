import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-01469011.js";
import { withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext } from "vue";
import { u as useLocalePath } from "./composables-2c3efc9a.js";
import "hookable";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./login-cover-a0f4b1ef.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-6a088328.js";
import "../server.mjs";
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
import "ohash";
const forgotPassword_vue_vue_type_style_index_0_scoped_fe3e6fc8_lang = "";
const _sfc_main = {
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const localPath = useLocalePath();
    useCookie("isAuthenticated");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("ForgotPassword"))} - Geccele`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("ForgotPassword")) + " - Geccele", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Forgot Password"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("ForgotPassword")) + " - Geccele", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Forgot Password"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container-fluid px-0 overflow-hidden" data-v-fe3e6fc8><section class="forgot-password" data-v-fe3e6fc8><div class="container-fluid h-custom px-0" data-v-fe3e6fc8><div class="row d-flex justify-content-center align-items-center px-0" data-v-fe3e6fc8><div class="col-lg-6 px-0 d-none d-lg-block" data-v-fe3e6fc8><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="forgot password" data-v-fe3e6fc8></div><div class="col-lg-6" data-v-fe3e6fc8><h2 data-v-fe3e6fc8>${ssrInterpolate(_ctx.$t("ForgotPassword"))}</h2><hr data-v-fe3e6fc8><form data-v-fe3e6fc8><div class="form-outline mb-3" data-v-fe3e6fc8><label class="form-label" for="form3Example3" data-v-fe3e6fc8>${ssrInterpolate(_ctx.$t("EmailAddress"))}</label><input type="email" id="form3Example3" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("EmailAddress"))} data-v-fe3e6fc8></div><div class="text-center text-lg-start mt-4 pt-2" data-v-fe3e6fc8><button type="button" class="btn btn-lg" style="${ssrRenderStyle({ "padding-left": "2.5rem", "padding-right": "2.5rem" })}" data-v-fe3e6fc8>${ssrInterpolate(_ctx.$t("ResetPassword"))}</button><p class="small fw-bold mt-2 pt-1 mb-0" data-v-fe3e6fc8>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/user/login"),
        class: "link-danger",
        title: "Login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("RetunLoginPage"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("RetunLoginPage")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div></div></div></section></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fe3e6fc8"]]);
export {
  forgotPassword as default
};
//# sourceMappingURL=forgot-password-09d4df17.js.map
