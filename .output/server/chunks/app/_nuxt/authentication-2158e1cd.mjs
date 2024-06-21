import { _ as __nuxt_component_0, a as __nuxt_component_1, b as _sfc_main$2, c as __nuxt_component_3, d as __nuxt_component_5 } from './Footer-61936d79.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../../handlers/renderer.mjs';
import 'node:async_hooks';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../server.mjs';
import 'vue-router';
import 'vue3-snackbar';
import 'is-https';
import './nuxt-link-01469011.mjs';
import './composables-2c3efc9a.mjs';
import './cookie-daf610f3.mjs';
import './call-center-3ecc2d8e.mjs';
import './logout-de4be0e0.mjs';
import './nuxt-img-c52e0bac.mjs';
import './index-6a088328.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopHeader = __nuxt_component_0;
  const _component_Header = __nuxt_component_1;
  const _component_NuxtSnackbar = _sfc_main$2;
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

export { authentication as default };
//# sourceMappingURL=authentication-2158e1cd.mjs.map
