import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { d as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-6a088328.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
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
  __name: "success",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    ref(null);
    const Route = useRoute();
    const QueryData = ref({});
    if (Route.fullPath) {
      const DecodedUrl = decodeURIComponent(Route.fullPath);
      const ParamsFromArray = DecodedUrl.split("&");
      const QueryParams = {};
      ParamsFromArray.forEach((param) => {
        const [key, value] = param.split("=");
        QueryParams[key] = value;
      });
      QueryData.value = QueryParams;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("YourOrderHasBeenPlacedSuccessfully"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("YourOrderHasBeenPlacedSuccessfully")), 1)
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
                  createTextVNode(toDisplayString(_ctx.$t("YourOrderHasBeenPlacedSuccessfully")), 1)
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
      _push(`<section class="success-section my-5" data-v-a01e6e70><div class="container doc" id="pdfSection" data-v-a01e6e70><div class="row" data-v-a01e6e70><div class="text-center desc" data-v-a01e6e70> \u2713 ${ssrInterpolate(_ctx.$t("YourOrderHasBeenPlacedSuccessfully"))}</div></div><div class="row my-4" data-v-a01e6e70>`);
      if (unref(QueryData).user) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("Guest"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).user)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).startDate) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("CheckIn"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).startDate)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).endDate) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("CheckOut"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).endDate)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).estate) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("Estate"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).estate)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).phone) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("PhoneNumber"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).phone)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).orderNumber) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("OrderNumber"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).orderNumber)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).adultCount) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("Adult"))}\xA0${ssrInterpolate(_ctx.$t("Count"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).adultCount)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).childCount) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("Child"))}\xA0${ssrInterpolate(_ctx.$t("Count"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(unref(QueryData).childCount)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(QueryData).totalAmount) {
        _push(`<div class="col-lg-4" data-v-a01e6e70><div data-v-a01e6e70><h6 data-v-a01e6e70>${ssrInterpolate(_ctx.$t("Total"))}\xA0${ssrInterpolate(_ctx.$t("Price"))}:</h6></div><div data-v-a01e6e70><p data-v-a01e6e70>${ssrInterpolate(Number((unref(QueryData).totalAmount * 36.5533).toFixed(2)))} \xA0\u20BA </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="container" data-v-a01e6e70><div class="row buttons" data-v-a01e6e70></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const success = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a01e6e70"]]);

export { success as default };
//# sourceMappingURL=success-5a8067d5.mjs.map
