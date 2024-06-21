import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { _ as __nuxt_component_3 } from "./Breadcrumb-8723b3d8.js";
import { withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-6a088328.js";
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
const cancellationAndRefundConditions_vue_vue_type_style_index_0_scoped_9fc780ff_lang = "";
const _sfc_main = {
  __name: "cancellation-and-refund-conditions",
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
                  _push3(`${ssrInterpolate(_ctx.$t("CancellationAndRefundConditions"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("CancellationAndRefundConditions")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Cancellation And Refund Conditions"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("CancellationAndRefundConditions")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Cancellation And Refund Conditions"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Breadcrumb, {
        PageTitle: _ctx.$t("CancellationAndRefundConditions")
      }, null, _parent));
      _push(`<section data-v-9fc780ff><div class="container my-5" data-v-9fc780ff><div data-v-9fc780ff><h2 data-v-9fc780ff></h2><p data-v-9fc780ff>${ssrInterpolate(_ctx.$t("CancellationAndRefundConditionsDesc1"))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contracts/cancellation-and-refund-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cancellationAndRefundConditions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fc780ff"]]);
export {
  cancellationAndRefundConditions as default
};
//# sourceMappingURL=cancellation-and-refund-conditions-c7e643da.js.map
