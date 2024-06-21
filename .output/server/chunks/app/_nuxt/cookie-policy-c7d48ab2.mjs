import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_3 } from './Breadcrumb-8723b3d8.mjs';
import { useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-6a088328.mjs';
import '../server.mjs';
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
import './nuxt-link-01469011.mjs';
import './composables-2c3efc9a.mjs';

const _sfc_main = {
  __name: "cookie-policy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Breadcrumb = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("CookiePolicy"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("CookiePolicy")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Cookie Policy"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("CookiePolicy")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Cookie Policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Breadcrumb, {
        PageTitle: _ctx.$t("CookiePolicy")
      }, null, _parent));
      _push(`<section data-v-2341e1de><div class="container my-5" data-v-2341e1de><div data-v-2341e1de><h2 data-v-2341e1de></h2><p data-v-2341e1de>${ssrInterpolate(_ctx.$t("CookiePolicyDesc1"))}</p><br data-v-2341e1de><p data-v-2341e1de>${ssrInterpolate(_ctx.$t("CookiePolicyDesc2"))}</p><br data-v-2341e1de><p data-v-2341e1de>${ssrInterpolate(_ctx.$t("CookiePolicyDesc3"))}</p><br data-v-2341e1de><p data-v-2341e1de>${ssrInterpolate(_ctx.$t("CookiePolicyDesc4"))}</p><br data-v-2341e1de><p data-v-2341e1de>${ssrInterpolate(_ctx.$t("CookiePolicyDesc4"))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contracts/cookie-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cookiePolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2341e1de"]]);

export { cookiePolicy as default };
//# sourceMappingURL=cookie-policy-c7d48ab2.mjs.map
