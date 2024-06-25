import { _ as __nuxt_component_0, a as __nuxt_component_1, b as _sfc_main$1, c as __nuxt_component_3, d as __nuxt_component_5 } from "./Footer-a70cb120.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
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
import "./nuxt-link-01469011.js";
import "./composables-2c3efc9a.js";
import "./cookie-daf610f3.js";
import "ohash";
import "./AuthComposable-14236e1c.js";
import "./axiosConfig-89e67415.js";
import "axios";
import "./call-center-3ecc2d8e.js";
import "./logout-de4be0e0.js";
import "./nuxt-img-9957c8cb.js";
import "./index-6a088328.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopHeader = __nuxt_component_0;
  const _component_Header = __nuxt_component_1;
  const _component_NuxtSnackbar = _sfc_main$1;
  const _component_Cookie_Accept = __nuxt_component_3;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TopHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_NuxtSnackbar, null, null, _parent));
  _push(ssrRenderComponent(_component_Cookie_Accept, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/authentication.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authentication = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  authentication as default
};
//# sourceMappingURL=authentication-6d8bcbdc.js.map
