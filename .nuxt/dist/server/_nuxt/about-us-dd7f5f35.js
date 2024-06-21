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
const aboutUs_vue_vue_type_style_index_0_scoped_a9b431d4_lang = "";
const _sfc_main = {
  __name: "about-us",
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
                  _push3(`${ssrInterpolate(_ctx.$t("AboutUs"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("AboutUs")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "about geccele"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("AboutUs")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "about geccele"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Breadcrumb, {
        PageTitle: _ctx.$t("AboutUs")
      }, null, _parent));
      _push(`<section data-v-a9b431d4><div class="container my-5" data-v-a9b431d4><div data-v-a9b431d4><h2 data-v-a9b431d4>${ssrInterpolate(_ctx.$t("AboutUsTitle1"))}</h2><p data-v-a9b431d4>${ssrInterpolate(_ctx.$t("AboutUsDesc1"))}</p></div><div data-v-a9b431d4><h2 data-v-a9b431d4>${ssrInterpolate(_ctx.$t("AboutUsTitle2"))}</h2><p data-v-a9b431d4>${ssrInterpolate(_ctx.$t("AboutUsDesc2"))} <br data-v-a9b431d4><br data-v-a9b431d4> ${ssrInterpolate(_ctx.$t("AboutUsDesc3"))}</p><p class="m-0" data-v-a9b431d4>${ssrInterpolate(_ctx.$t("ForMoreInformation"))}</p><a class="tech-direct" href="https://geccele.tech" title="Geccele Tech" target="_blank" data-v-a9b431d4>Geccele Tech</a></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9b431d4"]]);
export {
  aboutUs as default
};
//# sourceMappingURL=about-us-dd7f5f35.js.map
