import { p as publicAssetsURL } from '../../renderer.mjs';
import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_3 } from './Breadcrumb-8723b3d8.mjs';
import { useSSRContext, ref, withCtx, createTextVNode, toDisplayString, createVNode, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { f as useRuntimeConfig } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0$1 } from './call-center-3ecc2d8e.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'node:async_hooks';
import 'file://C:/Projects/nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/devalue/index.js';
import 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/scule/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/klona/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Projects/nuxt/node_modules/radix3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Projects/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ipx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import './index-6a088328.mjs';
import './nuxt-link-01469011.mjs';
import './composables-2c3efc9a.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue3-snackbar/dist/vue3-snackbar.js';
import 'file://C:/Projects/nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/is-https/dist/index.mjs';

const _imports_0 = "" + publicAssetsURL("assets/images/reservation.jpg");
const _imports_2 = "" + publicAssetsURL("assets/icons/res-okey.png");
const _sfc_main = {
  __name: "how-to-make-a-reservation",
  __ssrInlineRender: true,
  setup(__props) {
    const RuntimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const PhoneNumber = ref("");
    if (RuntimeConfig.public) {
      PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
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
                  _push3(`${ssrInterpolate(_ctx.$t("HowToMakeReservation"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("HowToMakeReservation")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("HowToMakeReservation")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Breadcrumb, {
        PageTitle: _ctx.$t("HowToMakeReservation")
      }, null, _parent));
      _push(`<section class="make-reservation" data-v-a626791e><div class="container my-5" data-v-a626791e><div class="row" data-v-a626791e><div class="col" data-v-a626791e><picture data-v-a626791e><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="reservation" loading="lazy" data-v-a626791e></picture></div></div><div class="row my-4" data-v-a626791e><h2 class="title" data-v-a626791e>Nas\u0131l Rezervasyon Yap\u0131l\u0131r?</h2></div><div class="row" data-v-a626791e><div class="col-lg-6" data-v-a626791e><div class="desc" data-v-a626791e><h2 data-v-a626791e><img${ssrRenderAttr("src", _imports_0$1)} alt="call center" data-v-a626791e> \xA0 \xC7a\u011Fr\u0131 Merkezi ile Rezervasyon </h2><ol data-v-a626791e><li data-v-a626791e><p data-v-a626791e> Rezervasyon yapt\u0131rmak istedi\u011Finiz otel i\xE7in tarih ve ki\u015Fi say\u0131s\u0131n\u0131 belir- terek fiyat bilgisi alabilir, kredi kart\u0131 veya havale ile rezervasyonunuzu k\u0131sa s\xFCrede ger\xE7ekle\u015Ftirebilirsiniz. </p></li><li data-v-a626791e><p data-v-a626791e> EFT / Havale \xF6demelerinde \xF6n rezervasyon olu\u015Fturulduktan sonra taraf\u0131n\u0131za verilecek \xF6n rezervasyon numaran\u0131z ve TC Kimlik numaran\u0131z\u0131 i\u015Flem a\xE7\u0131klamas\u0131 belirterek \xF6demenizi yapabilir ve sonras\u0131nda Seyehat Dan\u0131\u015Fmanlar\u0131m\u0131za onaylatabilirsiniz. </p></li><li data-v-a626791e><p data-v-a626791e> Rezervasyonunuz tamamland\u0131ktan sonra otel giri\u015F belgeniz ve s\xF6zle\u015Fmeniz belirtmi\u015F oldu\u011Funuz e-posta g\xF6nderilecektir. </p></li></ol></div><div class="bottom" data-v-a626791e><div data-v-a626791e><p data-v-a626791e><a${ssrRenderAttr("href", "tel:" + unref(PhoneNumber))}${ssrRenderAttr("title", unref(PhoneNumber))} data-v-a626791e>${ssrInterpolate(unref(PhoneNumber))}</a> nolu \xC7a\u011Fr\u0131 Merkezimizden Seyahat Dan\u0131\u015Fmanlar\u0131m\u0131z arac\u0131l\u0131\u011F\u0131 ile rezervasyon yapt\u0131rabilirsiniz. </p></div></div></div><div class="col-lg-6" data-v-a626791e><div class="desc" data-v-a626791e><h2 data-v-a626791e><img${ssrRenderAttr("src", _imports_2)} alt="call center" data-v-a626791e> \xA0 Online Rezervasyon </h2><ol data-v-a626791e><li data-v-a626791e><p data-v-a626791e>Rezervasyon yapt\u0131rmak istedi\u011Finiz Lokasyon / Oda se\xE7iniz.</p></li><li data-v-a626791e><p data-v-a626791e> Odan\u0131n toplam fiyat\u0131n\u0131 g\xF6rmek i\xE7in \u201CGiri\u015F Tarihi-\xC7\u0131k\u0131\u015F Tarihi\u201D ve \u201CKi\u015Fi\u201D say\u0131s\u0131n\u0131 se\xE7iniz. </p></li><li data-v-a626791e><p data-v-a626791e> Se\xE7ti\u011Finiz tarih ve ki\u015Fi say\u0131s\u0131na uygun olan odalardan oda se\xE7iminizi yaparak \u201C\u0130leri\u201D butonuna basarak devam ediniz ( Baz\u0131 lokasyonlarda birden fazla oda tipi bulunmaktad\u0131r). </p></li><li data-v-a626791e><p data-v-a626791e> Odada kalacak ki\u015Filerin isim soyisim, ileti\u015Fim, fatura ve \xF6deme bilgiler- ini se\xE7iniz. </p></li><li data-v-a626791e><p data-v-a626791e> Kredi kart\u0131 bilgilerinizi yazarak Rezervasyonu Tamamla butonuna basarak rezervasyonunuzu ger\xE7ekle\u015Ftirebilirsiniz. </p></li><li data-v-a626791e><p data-v-a626791e> \u0130\u015Flem sonras\u0131nda e-posta adresinize gelecek olan S\xF6zle\u015Fme ve Confir- mation Belgenizi onaylayarak i\u015Fleminizi tamamlayabilirsiniz </p></li><li data-v-a626791e><p data-v-a626791e> Belgelerinize \xDCye giri\u015F b\xF6l\xFCm\xFCnden olu\u015Fturaca\u011F\u0131n\u0131z kullan\u0131c\u0131 ad\u0131 ve \u015Fifre ile istedi\u011Finiz zaman ula\u015Fabilirsiniz. </p></li></ol></div><div class="bottom" data-v-a626791e><div data-v-a626791e><p data-v-a626791e> www.geccele.com veya \xE7ok yak\u0131nda Mobil uygulamam\u0131zdan 7/24 online rezervasyon yapabilirsiniz. </p></div></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/how-to-make-a-reservation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToMakeAReservation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a626791e"]]);

export { howToMakeAReservation as default };
//# sourceMappingURL=how-to-make-a-reservation-cfdd4676.mjs.map
