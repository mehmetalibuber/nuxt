import { _ as __nuxt_component_0, a as __nuxt_component_1, b as _sfc_main$2, c as __nuxt_component_3, d as __nuxt_component_5 } from './Footer-a70cb120.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-01469011.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { useSnackbar } from 'file://C:/Projects/nuxt/node_modules/vue3-snackbar/dist/vue3-snackbar.js';
import { mergeProps, useSSRContext, ref, unref, withCtx, createTextVNode, toDisplayString } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../../renderer.mjs';
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
import '../server.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/is-https/dist/index.mjs';
import './cookie-daf610f3.mjs';
import './call-center-3ecc2d8e.mjs';
import './logout-de4be0e0.mjs';
import './nuxt-img-9957c8cb.mjs';
import './index-6a088328.mjs';

const _sfc_main$1 = {
  __name: "Callback-Request",
  __ssrInlineRender: true,
  setup(__props) {
    const LocalePath = useLocalePath();
    useSnackbar();
    const ContractsAccept = ref(false);
    const ErrorMessage = ref("");
    const GuestName = ref("");
    const GuestPhoneNumber = ref("");
    const GuestMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade",
        id: "callbackModal",
        tabindex: "-1",
        "aria-labelledby": "callbackModalLabel",
        "aria-hidden": "true"
      }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title text-center" id="callbackModalLabel">${ssrInterpolate(_ctx.$t("WeCallYou"))}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row mt-2"><div class="col col-lg-12"><div class="callback-req"><div class="form-group col-lg-12"><label for="message">${ssrInterpolate(_ctx.$t("Message"))}</label><textarea type="text" class="form-control" id="message"${ssrRenderAttr("placeholder", _ctx.$t("TypeMessage"))} maxlength="250">${ssrInterpolate(unref(GuestMessage))}</textarea></div><div class="form-group col-lg-12"><label for="phone">${ssrInterpolate(_ctx.$t("PhoneNumber"))}</label><div class="row"><div class="col-2"><select name="" id=""><option value="">+90</option></select></div><div class="col-lg-10"><input type="tel" class="form-control" id="phone" placeholder="850 242 07 99" maxlength="16"${ssrRenderAttr("value", unref(GuestPhoneNumber))}></div></div></div><div class="form-group col-lg-12"><label for="name">${ssrInterpolate(_ctx.$t("FullName"))}</label><input type="text" class="form-control" id="name"${ssrRenderAttr("placeholder", _ctx.$t("FullName"))} maxlength="32"${ssrRenderAttr("value", unref(GuestName))}></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"${ssrIncludeBooleanAttr(Array.isArray(unref(ContractsAccept)) ? ssrLooseContain(unref(ContractsAccept), null) : unref(ContractsAccept)) ? " checked" : ""}><label class="form-check-label" for="exampleCheck1">${ssrInterpolate(_ctx.$t("GDPRShortTerm"))}\xA0 `);
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
      _push(`</label></div><button type="submit" class="submit-btn btn mt-2"${ssrIncludeBooleanAttr(!unref(ContractsAccept)) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("Send"))}</button><span class="my-1 err-message">${ssrInterpolate(unref(ErrorMessage))}</span></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Callback-Request.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopHeader = __nuxt_component_0;
  const _component_Header = __nuxt_component_1;
  const _component_NuxtSnackbar = _sfc_main$2;
  const _component_Cookie_Accept = __nuxt_component_3;
  const _component_Callback_Request = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "default-layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TopHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_NuxtSnackbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Cookie_Accept, null, null, _parent));
  _push(ssrRenderComponent(_component_Callback_Request, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-9a2299a3.mjs.map
