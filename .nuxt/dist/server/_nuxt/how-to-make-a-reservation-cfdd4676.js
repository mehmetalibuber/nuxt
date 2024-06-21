import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { _ as __nuxt_component_3 } from "./Breadcrumb-8723b3d8.js";
import { ref, withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext } from "vue";
import { f as useRuntimeConfig } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./call-center-3ecc2d8e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-6a088328.js";
import "@unhead/shared";
import "./nuxt-link-01469011.js";
import "ufo";
import "hookable";
import "./composables-2c3efc9a.js";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "vue3-snackbar";
import "@vue/devtools-api";
import "cookie-es";
import "is-https";
const _imports_0 = "" + __publicAssetsURL("assets/images/reservation.jpg");
const _imports_2 = "" + __publicAssetsURL("assets/icons/res-okey.png");
const howToMakeAReservation_vue_vue_type_style_index_0_scoped_a626791e_lang = "";
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
      _push(`<section class="make-reservation" data-v-a626791e><div class="container my-5" data-v-a626791e><div class="row" data-v-a626791e><div class="col" data-v-a626791e><picture data-v-a626791e><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="reservation" loading="lazy" data-v-a626791e></picture></div></div><div class="row my-4" data-v-a626791e><h2 class="title" data-v-a626791e>Nasıl Rezervasyon Yapılır?</h2></div><div class="row" data-v-a626791e><div class="col-lg-6" data-v-a626791e><div class="desc" data-v-a626791e><h2 data-v-a626791e><img${ssrRenderAttr("src", _imports_0$1)} alt="call center" data-v-a626791e>   Çağrı Merkezi ile Rezervasyon </h2><ol data-v-a626791e><li data-v-a626791e><p data-v-a626791e> Rezervasyon yaptırmak istediğiniz otel için tarih ve kişi sayısını belir- terek fiyat bilgisi alabilir, kredi kartı veya havale ile rezervasyonunuzu kısa sürede gerçekleştirebilirsiniz. </p></li><li data-v-a626791e><p data-v-a626791e> EFT / Havale ödemelerinde ön rezervasyon oluşturulduktan sonra tarafınıza verilecek ön rezervasyon numaranız ve TC Kimlik numaranızı işlem açıklaması belirterek ödemenizi yapabilir ve sonrasında Seyehat Danışmanlarımıza onaylatabilirsiniz. </p></li><li data-v-a626791e><p data-v-a626791e> Rezervasyonunuz tamamlandıktan sonra otel giriş belgeniz ve sözleşmeniz belirtmiş olduğunuz e-posta gönderilecektir. </p></li></ol></div><div class="bottom" data-v-a626791e><div data-v-a626791e><p data-v-a626791e><a${ssrRenderAttr("href", "tel:" + unref(PhoneNumber))}${ssrRenderAttr("title", unref(PhoneNumber))} data-v-a626791e>${ssrInterpolate(unref(PhoneNumber))}</a> nolu Çağrı Merkezimizden Seyahat Danışmanlarımız aracılığı ile rezervasyon yaptırabilirsiniz. </p></div></div></div><div class="col-lg-6" data-v-a626791e><div class="desc" data-v-a626791e><h2 data-v-a626791e><img${ssrRenderAttr("src", _imports_2)} alt="call center" data-v-a626791e>   Online Rezervasyon </h2><ol data-v-a626791e><li data-v-a626791e><p data-v-a626791e>Rezervasyon yaptırmak istediğiniz Lokasyon / Oda seçiniz.</p></li><li data-v-a626791e><p data-v-a626791e> Odanın toplam fiyatını görmek için “Giriş Tarihi-Çıkış Tarihi” ve “Kişi” sayısını seçiniz. </p></li><li data-v-a626791e><p data-v-a626791e> Seçtiğiniz tarih ve kişi sayısına uygun olan odalardan oda seçiminizi yaparak “İleri” butonuna basarak devam ediniz ( Bazı lokasyonlarda birden fazla oda tipi bulunmaktadır). </p></li><li data-v-a626791e><p data-v-a626791e> Odada kalacak kişilerin isim soyisim, iletişim, fatura ve ödeme bilgiler- ini seçiniz. </p></li><li data-v-a626791e><p data-v-a626791e> Kredi kartı bilgilerinizi yazarak Rezervasyonu Tamamla butonuna basarak rezervasyonunuzu gerçekleştirebilirsiniz. </p></li><li data-v-a626791e><p data-v-a626791e> İşlem sonrasında e-posta adresinize gelecek olan Sözleşme ve Confir- mation Belgenizi onaylayarak işleminizi tamamlayabilirsiniz </p></li><li data-v-a626791e><p data-v-a626791e> Belgelerinize Üye giriş bölümünden oluşturacağınız kullanıcı adı ve şifre ile istediğiniz zaman ulaşabilirsiniz. </p></li></ol></div><div class="bottom" data-v-a626791e><div data-v-a626791e><p data-v-a626791e> www.geccele.com veya çok yakında Mobil uygulamamızdan 7/24 online rezervasyon yapabilirsiniz. </p></div></div></div></div></div></section><!--]-->`);
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
export {
  howToMakeAReservation as default
};
//# sourceMappingURL=how-to-make-a-reservation-cfdd4676.js.map
