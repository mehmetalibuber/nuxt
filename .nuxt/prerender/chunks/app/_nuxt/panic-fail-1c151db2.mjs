import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-01469011.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { d as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-6a088328.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue3-snackbar/dist/vue3-snackbar.js';
import 'file://C:/Projects/nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/is-https/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Projects/nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/scule/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/klona/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Projects/nuxt/node_modules/radix3/dist/index.mjs';
import 'node:async_hooks';
import 'node:fs';
import 'node:url';
import 'file://C:/Projects/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ipx/dist/index.mjs';

const _sfc_main = {
  __name: "panic-fail",
  __ssrInlineRender: true,
  setup(__props) {
    const LocalePath = useLocalePath();
    const Route = useRoute();
    const QueryData = ref({});
    if (Route.query) {
      QueryData.value = Route.query;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("SystemProblemOccurred"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("SystemProblemOccurred")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "geccele"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("SystemProblemOccurred")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "geccele"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="fail-section my-5" data-v-74a27968><div class="container doc" data-v-74a27968><div class="row" data-v-74a27968><div class="text-center desc" data-v-74a27968>${ssrInterpolate(_ctx.$t("SystemProblemOccurred"))}</div></div><div class="row my-4" data-v-74a27968>`);
      if (unref(QueryData).code) {
        _push(`<div class="col-12" data-v-74a27968><h6 data-v-74a27968>${ssrInterpolate(_ctx.$t("ReservationCode"))}: <b data-v-74a27968>${ssrInterpolate(unref(QueryData).code)}</b></h6></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-12" data-v-74a27968>${ssrInterpolate(_ctx.$t("ToGetMoreInfoWithResCode"))}\xA0 `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(LocalePath)("contact"),
        title: _ctx.$t("Contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="container" data-v-74a27968><div class="row buttons" data-v-74a27968>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "col-lg-2 text-start",
        to: unref(LocalePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("BackHome"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("BackHome")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment/panic-fail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const panicFail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-74a27968"]]);

export { panicFail as default };
//# sourceMappingURL=panic-fail-1c151db2.mjs.map
