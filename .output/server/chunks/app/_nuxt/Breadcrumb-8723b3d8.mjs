import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    PageTitle: String
  },
  setup(__props) {
    const localPath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb" }, _attrs))} data-v-f27c2455><div class="container-fluid" data-v-f27c2455><div class="d-flex justify-content-center align-items-center" data-v-f27c2455><span data-v-f27c2455>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/"),
        title: _ctx.$t("Home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span data-v-f27c2455>\xA0/\xA0</span><span data-v-f27c2455>${ssrInterpolate(_ctx.$t(__props.PageTitle))}</span></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f27c2455"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Breadcrumb-8723b3d8.mjs.map
