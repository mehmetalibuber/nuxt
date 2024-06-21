import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'vue';
import { u as useCookie } from './cookie-daf610f3.mjs';
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

const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const LocalePath = useLocalePath();
    useCookie("Filters");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("PageNotFound"))} - Geccele`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("PageNotFound")) + " - Geccele", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Page not found"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("PageNotFound")) + " - Geccele", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Page not found"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="err-section" data-v-34039b15><div class="container" data-v-34039b15><div class="row" data-v-34039b15><div class="col-lg-3 text-end" data-v-34039b15><h1 data-v-34039b15>:(</h1></div><div class="col-lg-9" data-v-34039b15><h2 data-v-34039b15>OOPS - ${ssrInterpolate(_ctx.$t("PageNotFoundYouAreLooking"))}</h2><p data-v-34039b15>${ssrInterpolate(_ctx.$t("PageNotFoundYouAreLookingDesc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(LocalePath)("/")
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
      _push(`</div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34039b15"]]);

export { error as default };
//# sourceMappingURL=error-e2af3821.mjs.map
