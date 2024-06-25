import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_3 } from './Breadcrumb-8723b3d8.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { f as useRuntimeConfig } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-6a088328.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import './nuxt-link-01469011.mjs';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    const RuntimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const PhoneNumber = ref("");
    const EmailAddress = ref("");
    const GecceleAddress = ref("");
    const GecceleIframe = ref("");
    if (RuntimeConfig.public) {
      PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
      EmailAddress.value = RuntimeConfig.public.EMAIL_ADDRESS;
      GecceleAddress.value = RuntimeConfig.public.GECCELE_ADDRESS;
      GecceleIframe.value = RuntimeConfig.public.GECCELE_IFRAME_URL;
    }
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
                  _push3(`${ssrInterpolate(_ctx.$t("Contact"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Contact")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "geccele contact"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Contact")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "geccele contact"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Breadcrumb, {
        PageTitle: _ctx.$t("Contact")
      }, null, _parent));
      _push(`<section class="container contact-section" data-v-8f4102a1><div class="" data-v-8f4102a1><div class="row" data-v-8f4102a1><div class="col-lg-7" data-v-8f4102a1><div class="col" data-v-8f4102a1><div class="row" data-v-8f4102a1><div class="col-lg-6" data-v-8f4102a1><h2 data-v-8f4102a1>${ssrInterpolate(_ctx.$t("ContactUs"))}</h2><p data-v-8f4102a1>${ssrInterpolate(_ctx.$t("ContactUsDesc"))}</p></div><div class="col-lg-6" data-v-8f4102a1></div></div></div><div class="col" data-v-8f4102a1><div class="row mt-3" data-v-8f4102a1><div class="col-lg-6" data-v-8f4102a1><div class="contact-box" data-v-8f4102a1><h6 data-v-8f4102a1>${ssrInterpolate(_ctx.$t("ContactInfo"))}</h6><p data-v-8f4102a1>${ssrInterpolate(_ctx.$t("ContactInfoDesc"))}</p><a id="tel"${ssrRenderAttr("href", "tel:" + unref(PhoneNumber))}${ssrRenderAttr("title", unref(PhoneNumber))} data-v-8f4102a1>${ssrInterpolate(unref(PhoneNumber))}</a><br data-v-8f4102a1><a id="mail"${ssrRenderAttr("href", "mailto:" + unref(EmailAddress))}${ssrRenderAttr("title", unref(EmailAddress))} data-v-8f4102a1>${ssrInterpolate(unref(EmailAddress))}</a></div></div><div class="col-lg-6" data-v-8f4102a1><div class="contact-box" data-v-8f4102a1><h6 data-v-8f4102a1>${ssrInterpolate(_ctx.$t("HostSupport"))}</h6><p data-v-8f4102a1>${ssrInterpolate(_ctx.$t("HostSupportDesc"))}</p><p data-v-8f4102a1>${ssrInterpolate(unref(GecceleAddress))}</p></div></div><div class="col-lg-6" data-v-8f4102a1></div></div></div></div><div class="col-lg-5" data-v-8f4102a1><iframe${ssrRenderAttr("src", unref(GecceleIframe))} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-8f4102a1></iframe></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f4102a1"]]);

export { contact as default };
//# sourceMappingURL=contact-631c4925.mjs.map
