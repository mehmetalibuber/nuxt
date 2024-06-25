import { p as publicAssetsURL } from '../../renderer.mjs';
import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { u as useRouter, d as useRoute, h as useI18n } from '../server.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { useSnackbar } from 'file://C:/Projects/nuxt/node_modules/vue3-snackbar/dist/vue3-snackbar.js';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'node:async_hooks';
import 'file://C:/Projects/nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/devalue/index.js';
import 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/scule/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/klona/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Projects/nuxt/node_modules/radix3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Projects/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ipx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import './index-6a088328.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/is-https/dist/index.mjs';

const _imports_0 = "" + publicAssetsURL("assets/images/user/login-md.jpg");
const _imports_1 = "" + publicAssetsURL("assets/images/user/login.jpg");
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const localPath = useLocalePath();
    useCookie("isAuthenticated");
    useSnackbar();
    const LocalePath = useLocalePath();
    useRouter();
    useRoute();
    useI18n();
    useCookie("User", {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "Strict"
    });
    let GuestUserName = ref("");
    let GuestPassword = ref("");
    const LoginProgress = ref(false);
    const ErrorMessage = ref("");
    const SuccessMessage = ref("");
    const VerificationCodePending = ref(true);
    const ShowVerificationCodeInput = ref(false);
    const SendVerificationButton = ref(false);
    const GuestPhoneNumber = ref("");
    const VerificationCode = ref("");
    const ResendVerificationCode = ref(false);
    useCookie("EstateID");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Login"))} - Geccele`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Login")) + " - Geccele", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Login"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Login")) + " - Geccele", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Login"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container-fluid px-0 overflow-hidden" data-v-a779432e><section class="login" data-v-a779432e><div class="container-fluid h-custom px-0" data-v-a779432e><div class="row d-flex justify-content-center align-items-center px-0 full-h" data-v-a779432e><div class="col-lg-6 px-0 d-none d-lg-block" data-v-a779432e><picture data-v-a779432e><source media="(max-width: 1450px)"${ssrRenderAttr("srcset", _imports_0)} data-v-a779432e><source media="(min-width: 1250px)"${ssrRenderAttr("srcset", _imports_1)} data-v-a779432e><img${ssrRenderAttr("src", _imports_1)} alt="login" loading="lazy" data-v-a779432e></picture></div><div class="col-lg-6 py-5" data-v-a779432e><div class="content text-center" data-v-a779432e><h2 data-v-a779432e>${ssrInterpolate(_ctx.$t("Welcome"))}!</h2><p class="opacity-50 m-0" data-v-a779432e>${ssrInterpolate(_ctx.$t("GDPRShortTerm"))}\xA0 `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(LocalePath)("/contracts/gdpr"),
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("GDPR"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("GDPR")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \xA0|\xA0 `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(LocalePath)("/contracts/cookie-policy"),
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("CookiePolicy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("CookiePolicy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="my-2" data-v-a779432e><div style="${ssrRenderStyle({ "height": "20px" })}" data-v-a779432e>`);
      if (unref(SuccessMessage)) {
        _push(`<p class="text-success" data-v-a779432e>${ssrInterpolate(_ctx.$t(unref(SuccessMessage)))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist" data-v-a779432e><li class="nav-item" role="presentation" data-v-a779432e><button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" data-v-a779432e>${ssrInterpolate(_ctx.$t("LoginWithUserInformations"))}</button></li><li class="nav-item" role="presentation" data-v-a779432e><button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" data-v-a779432e>${ssrInterpolate(_ctx.$t("QuickLogin"))}</button></li></ul><div class="tab-content" id="myTabContent" data-v-a779432e><div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab" data-v-a779432e><form class="py-2" data-v-a779432e><div class="form-outline mb-3" data-v-a779432e><input type="email" id="form3Example3" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("EmailAddressOrPhoneNumber"))}${ssrRenderAttr("value", unref(GuestUserName))} data-v-a779432e></div><div class="form-outline mb-3" data-v-a779432e><input type="password" id="form3Example4" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("Password"))}${ssrRenderAttr("value", unref(GuestPassword))} data-v-a779432e></div><div class="d-flex justify-content-between align-items-center" data-v-a779432e><div class="form-check mb-0" data-v-a779432e><input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" data-v-a779432e><label class="form-check-label opacity-50" for="form2Example3" data-v-a779432e>${ssrInterpolate(_ctx.$t("RememberMe"))}</label></div></div><div class="text-center text-lg-start mt-2 pt-2" data-v-a779432e><button type="button" class="btn btn-lg" style="${ssrRenderStyle({ "padding-left": "2.5rem", "padding-right": "2.5rem" })}"${ssrIncludeBooleanAttr(unref(LoginProgress)) ? " disabled" : ""} data-v-a779432e>${ssrInterpolate(_ctx.$t("Login"))}</button><div class="mt-2" data-v-a779432e><div class="text-danger text-center" style="${ssrRenderStyle({ "height": "20px" })}" data-v-a779432e>`);
      if (unref(ErrorMessage)) {
        _push(`<p data-v-a779432e>* ${ssrInterpolate(_ctx.$t(unref(ErrorMessage)))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><p class="mt-5 pt-1 mb-0 text-center" data-v-a779432e>${ssrInterpolate(_ctx.$t("DontHaveAnAccount"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/user/register"),
        class: "link fw-bold",
        title: _ctx.$t("Register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div><div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab" data-v-a779432e><form class="py-2" data-v-a779432e><div class="form-outline mb-3" data-v-a779432e><div class="row phone-space" data-v-a779432e><div class="col-lg-2" data-v-a779432e><select name="" id="" data-v-a779432e><option value="+90" selected data-v-a779432e>+90</option></select></div><div class="col-lg-10" data-v-a779432e><input type="tel" id="phone" maxlength="10" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("PhoneNumberMask"))}${ssrRenderAttr("value", unref(GuestPhoneNumber))} data-v-a779432e></div></div></div>`);
      if (unref(ShowVerificationCodeInput)) {
        _push(`<div class="form-outline mb-3" data-v-a779432e><div class="row" data-v-a779432e><div class="col-lg-6" data-v-a779432e><div class="col" data-v-a779432e><label class="form-label w-100 text-start" for="code" data-v-a779432e>${ssrInterpolate(_ctx.$t("VerificationCode"))}</label><input type="password" id="code" class="form-control form-control-lg w-100"${ssrRenderAttr("placeholder", _ctx.$t("VerificationCode"))}${ssrRenderAttr("value", unref(VerificationCode))}${ssrIncludeBooleanAttr(unref(VerificationCodePending)) ? " disabled" : ""} maxlength="5" data-v-a779432e></div></div><div class="col d-flex align-items-end" data-v-a779432e>`);
        if (unref(SendVerificationButton)) {
          _push(`<span style="${ssrRenderStyle({ "font-size": "14px", "cursor": "pointer", "margin-bottom": "10px", "opacity": "0.8" })}" class="my-2" data-v-a779432e>${ssrInterpolate(_ctx.$t("GetNewCode"))} \u21BA</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex justify-content-between align-items-center" data-v-a779432e>`);
      if (!unref(ResendVerificationCode)) {
        _push(`<span class="send-code-btn btn" data-v-a779432e>${ssrInterpolate(_ctx.$t("GetVerificationCode"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center text-lg-start mt-0 pt-2 mb-2" data-v-a779432e>`);
      if (unref(SendVerificationButton)) {
        _push(`<button type="button" class="verification-bordered-btn btn-lg" style="${ssrRenderStyle({ "padding-left": "2.5rem", "padding-right": "2.5rem" })}"${ssrIncludeBooleanAttr(unref(LoginProgress)) ? " disabled" : ""} data-v-a779432e>${ssrInterpolate(_ctx.$t("Confirm"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-0" data-v-a779432e><div class="text-danger" style="${ssrRenderStyle({ "height": "20px" })}" data-v-a779432e>`);
      if (unref(ErrorMessage)) {
        _push(`<p data-v-a779432e>* ${ssrInterpolate(_ctx.$t(unref(ErrorMessage)))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div></div></div><div data-v-a779432e></div><div data-v-a779432e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/"),
        class: "text-dark opacity-50 text-decoration-none fs-6",
        title: _ctx.$t("BackHome")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2936 ${ssrInterpolate(_ctx.$t("BackHome"))}`);
          } else {
            return [
              createTextVNode("\u2936 " + toDisplayString(_ctx.$t("BackHome")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a779432e"]]);

export { login as default };
//# sourceMappingURL=login-5a2bf658.mjs.map
