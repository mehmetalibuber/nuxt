import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { h as useI18n, u as useRouter } from '../server.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { useSnackbar } from 'file://C:/Projects/nuxt/node_modules/vue3-snackbar/dist/vue3-snackbar.js';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './login-cover-a0f4b1ef.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-6a088328.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/is-https/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Projects/nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/scule/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/klona/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Projects/nuxt/node_modules/radix3/dist/index.mjs';
import 'node:async_hooks';
import 'node:fs';
import 'node:url';
import 'file://C:/Projects/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ipx/dist/index.mjs';
import '../../renderer.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Projects/nuxt/node_modules/devalue/index.js';
import 'file://C:/Projects/nuxt/node_modules/@unhead/ssr/dist/index.mjs';

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useCookie("isAuthenticated");
    const LocalePath = useLocalePath();
    useSnackbar();
    useI18n();
    useRouter();
    let GuestName = ref("");
    let GuestSurname = ref("");
    let GuestEmailAddress = ref("");
    let GuestPhoneNumber = ref("");
    let GuestPassword = ref("");
    let GuestPasswordRepeat = ref("");
    let GuestPrivacyAccept = ref(false);
    const RegisterProgress = ref(false);
    const ErrorMessage = ref("");
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
                  _push3(`${ssrInterpolate(_ctx.$t("Register"))} - Geccele`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Register")) + " - Geccele", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Register"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Register")) + " - Geccele", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Register"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container-fluid px-0 overflow-hidden" data-v-936598b1><section class="register" data-v-936598b1><div class="container-fluid h-custom px-0" data-v-936598b1><div class="row d-flex justify-content-center align-items-center px-0" data-v-936598b1><div class="col-lg-6 px-0 d-none d-lg-block" data-v-936598b1><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="register" data-v-936598b1></div><div class="col-lg-6 form" data-v-936598b1><h2 data-v-936598b1>${ssrInterpolate(_ctx.$t("Register"))}</h2><hr data-v-936598b1><form data-v-936598b1><div class="row" data-v-936598b1><div class="col-lg-6" data-v-936598b1><div class="form-outline mb-3" data-v-936598b1><label class="form-label" for="name" data-v-936598b1>${ssrInterpolate(_ctx.$t("Name"))}</label><input type="text" id="name" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("Name"))} maxlength="28"${ssrRenderAttr("value", unref(GuestName))} data-v-936598b1></div></div><div class="col-lg-6" data-v-936598b1><div class="form-outline mb-3" data-v-936598b1><label class="form-label" for="name" data-v-936598b1>${ssrInterpolate(_ctx.$t("Surname"))}</label><input type="text" id="name" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("Surname"))} maxlength="22"${ssrRenderAttr("value", unref(GuestSurname))} data-v-936598b1></div></div><div class="col-lg-6" data-v-936598b1><div class="form-outline mb-3" data-v-936598b1><label class="form-label" for="email" data-v-936598b1>${ssrInterpolate(_ctx.$t("EmailAddress"))}</label><input type="email" id="email" required class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("EmailAddress"))}${ssrRenderAttr("value", unref(GuestEmailAddress))} data-v-936598b1></div></div><div class="col-lg-6" data-v-936598b1><div class="form-outline mb-3" data-v-936598b1><label class="form-label" for="tel" data-v-936598b1>${ssrInterpolate(_ctx.$t("PhoneNumber"))}</label><div class="row phone-space" data-v-936598b1><div class="col-lg-3" data-v-936598b1><select name="" id="" data-v-936598b1><option value="+90" selected data-v-936598b1>+90</option></select></div><div class="col-lg-9" data-v-936598b1><input type="tel" class="form-control form-control-lg" id="tel"${ssrRenderAttr("placeholder", _ctx.$t("PhoneNumberMask"))} required maxlength="10"${ssrRenderAttr("value", unref(GuestPhoneNumber))} data-v-936598b1></div></div></div></div><div class="col-lg-6" data-v-936598b1><div class="form-outline mb-3" data-v-936598b1><label class="form-label" for="password" data-v-936598b1>${ssrInterpolate(_ctx.$t("Password"))}</label><input type="password" id="password" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("Password"))}${ssrRenderAttr("value", unref(GuestPassword))} data-v-936598b1></div></div><div class="col-lg-6" data-v-936598b1><div class="form-outline mb-3" data-v-936598b1><label class="form-label" for="passwordRepeat" data-v-936598b1>${ssrInterpolate(_ctx.$t("PasswordRepeat"))}</label><input type="password" id="passwordRepeat" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("PasswordRepeat"))}${ssrRenderAttr("value", unref(GuestPasswordRepeat))} data-v-936598b1></div></div></div><div class="d-flex justify-content-between align-items-center" data-v-936598b1><div class="form-check mb-0" data-v-936598b1><input class="form-check-input me-2" type="checkbox" value="" id="gdpr"${ssrIncludeBooleanAttr(Array.isArray(unref(GuestPrivacyAccept)) ? ssrLooseContain(unref(GuestPrivacyAccept), "") : unref(GuestPrivacyAccept)) ? " checked" : ""} data-v-936598b1><label class="form-check-label policy-accept" for="gdpr" data-v-936598b1>`);
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
      _push(` ${ssrInterpolate(_ctx.$t("And"))} `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(LocalePath)("/contracts/privacy-policy"),
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("PrivacyPolicy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("PrivacyPolicy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("Accept"))}</label></div></div><div class="mt-2" data-v-936598b1><div class="text-danger" style="${ssrRenderStyle({ "height": "20px" })}" data-v-936598b1>`);
      if (unref(ErrorMessage)) {
        _push(`<p data-v-936598b1>* ${ssrInterpolate(_ctx.$t(unref(ErrorMessage)))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-center text-lg-start mt-2 pt-2" data-v-936598b1><button type="button" class="btn btn-lg" style="${ssrRenderStyle({ "padding-left": "2.5rem", "padding-right": "2.5rem" })}"${ssrIncludeBooleanAttr(unref(RegisterProgress)) ? " disabled" : ""} data-v-936598b1>${ssrInterpolate(_ctx.$t("Register"))}</button><p class="small fw-bold mt-2 pt-1 mb-0" data-v-936598b1>${ssrInterpolate(_ctx.$t("YouHaveAnAccount"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(LocalePath)("/user/login"),
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Login"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Login")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-936598b1"]]);

export { register as default };
//# sourceMappingURL=register-af60ada2.mjs.map
