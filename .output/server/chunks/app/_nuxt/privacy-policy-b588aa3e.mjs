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
  __name: "privacy-policy",
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
                  _push3(`${ssrInterpolate(_ctx.$t("PrivacyPolicy"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("PrivacyPolicy")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Privacy Policy"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("PrivacyPolicy")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Privacy Policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Breadcrumb, {
        PageTitle: _ctx.$t("PrivacyPolicy")
      }, null, _parent));
      _push(`<section data-v-a02a741f><div class="container my-5" data-v-a02a741f><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle1"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc1"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle2"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc2"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle3"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc3"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle4"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc4"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle5"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc5"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle6"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc6"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle7"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc7"))}</p></div><div data-v-a02a741f><h2 data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyTitle8"))}</h2><p data-v-a02a741f>${ssrInterpolate(_ctx.$t("PrivacyPolicyDesc8"))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contracts/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a02a741f"]]);

export { privacyPolicy as default };
//# sourceMappingURL=privacy-policy-b588aa3e.mjs.map
