import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as _sfc_main$2, c as __nuxt_component_3, d as __nuxt_component_5 } from "./Footer-61936d79.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-01469011.js";
import { u as useLocalePath } from "./composables-2c3efc9a.js";
import { useSnackbar } from "vue3-snackbar";
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "./ReservationComposable-1557cdd6.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "cookie-es";
import "js-cookie";
import "is-https";
import "./cookie-daf610f3.js";
import "ohash";
import "./AuthComposable-14236e1c.js";
import "./axiosConfig-89e67415.js";
import "axios";
import "./call-center-3ecc2d8e.js";
import "./logout-de4be0e0.js";
import "./nuxt-img-c52e0bac.js";
import "./index-6a088328.js";
const CallbackRequest_vue_vue_type_style_index_0_lang = "";
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
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade",
        id: "callbackModal",
        tabindex: "-1",
        "aria-labelledby": "callbackModalLabel",
        "aria-hidden": "true"
      }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title text-center" id="callbackModalLabel">${ssrInterpolate(_ctx.$t("WeCallYou"))}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row mt-2"><div class="col col-lg-12"><div class="callback-req"><div class="form-group col-lg-12"><label for="message">${ssrInterpolate(_ctx.$t("Message"))}</label><textarea type="text" class="form-control" id="message"${ssrRenderAttr("placeholder", _ctx.$t("TypeMessage"))} maxlength="250">${ssrInterpolate(unref(GuestMessage))}</textarea></div><div class="form-group col-lg-12"><label for="phone">${ssrInterpolate(_ctx.$t("PhoneNumber"))}</label><div class="row"><div class="col-2"><select name="" id=""><option value="">+90</option></select></div><div class="col-lg-10"><input type="tel" class="form-control" id="phone" placeholder="850 242 07 99" maxlength="16"${ssrRenderAttr("value", unref(GuestPhoneNumber))}></div></div></div><div class="form-group col-lg-12"><label for="name">${ssrInterpolate(_ctx.$t("FullName"))}</label><input type="text" class="form-control" id="name"${ssrRenderAttr("placeholder", _ctx.$t("FullName"))} maxlength="32"${ssrRenderAttr("value", unref(GuestName))}></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"${ssrIncludeBooleanAttr(Array.isArray(unref(ContractsAccept)) ? ssrLooseContain(unref(ContractsAccept), null) : unref(ContractsAccept)) ? " checked" : ""}><label class="form-check-label" for="exampleCheck1">${ssrInterpolate(_ctx.$t("GDPRShortTerm"))}  `);
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
      _push(`  |  `);
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
  const _component_TopHeader = __nuxt_component_0$1;
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
export {
  _default as default
};
//# sourceMappingURL=default-bfda995c.js.map
