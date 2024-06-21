import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { j as ja, _ as __nuxt_component_4$1 } from "./main-6a42e016.js";
import { h as useI18n, u as useRouter, j as useState, d as useRoute } from "../server.mjs";
import { ref, watch, unref, isRef, useSSRContext, mergeProps, withCtx, createVNode, defineComponent, computed, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import "hookable";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import { u as useLocalePath } from "./composables-2c3efc9a.js";
import { R as ReservationComposable } from "./ReservationComposable-1557cdd6.js";
import { H as HelperComposable } from "./axiosConfig-89e67415.js";
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { GoogleMap, Marker } from "vue3-google-map";
import "./DestinationComposable-6fe85d21.js";
import { _ as _imports_2$1 } from "./detail-maps-e66f1e74.js";
import { VueperSlides, VueperSlide } from "vueperslides";
/* empty css                       */import VueEasyLightbox from "vue-easy-lightbox";
import "./index-6a088328.js";
import "@unhead/shared";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "date-fns";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "vue3-snackbar";
import "@vue/devtools-api";
import "cookie-es";
import "js-cookie";
import "is-https";
import "ohash";
import "axios";
const _imports_0$1 = "" + __publicAssetsURL("assets/icons/error.png");
const CheckAvailability_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "Check-Availability",
  __ssrInlineRender: true,
  props: {
    EstateID: String
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const Router = useRouter();
    const InProgress = ref(false);
    const CookieFilters = useCookie("Filters");
    const EstateInfo = useState("EstateInfo");
    const CookieEstateID = useCookie("EstateID");
    const ShowInfoSection = ref(false);
    const ShowPaymentStep = ref(false);
    const MinDate = /* @__PURE__ */ new Date();
    const Dates = ref([]);
    const ErrorMessage = ref("");
    const TotalPrice = ref(0);
    const TotalAccommodationFee = ref(0);
    const CleaningFee = ref(0);
    const TaxAmount = ref(0);
    const TaxRate = ref(0);
    const LocalePath = useLocalePath();
    const MinRange = ref("");
    const AutoRange = ref("");
    const TotalNights = ref(0);
    const EstateMinAccommodation = ref(0);
    const CheckAvailability = async (item) => {
      InProgress.value = true;
      ErrorMessage.value = "";
      if ((item2) => 0) {
        if (item === 0) {
          if (!Dates.value) {
            if (ShowInfoSection.value) {
              ShowInfoSection.value = false;
            }
            if (ShowPaymentStep.value) {
              ShowPaymentStep.value = false;
            }
            InProgress.value = false;
            return ErrorMessage.value = `* ${t(
              "PleaseSelectCheckInCheckOutDates"
            )}`;
          }
          const CheckIn = Dates.value[0];
          const CheckOut = Dates.value[1];
          CookieFilters.value.Dates[0] = CheckIn;
          CookieFilters.value.Dates[1] = CheckOut;
          const CheckReq = await ReservationComposable().CheckAvailability(
            CheckIn,
            CheckOut
          );
          if (CheckReq) {
            if (CheckReq.data) {
              const CheckReqData = CheckReq.data;
              TotalPrice.value = CheckReqData.total;
              CleaningFee.value = CheckReqData.cleaningFee;
              TaxAmount.value = CheckReqData.taxRate.taxAmount;
              TaxRate.value = CheckReqData.taxRate.taxRate;
              TotalAccommodationFee.value = CheckReqData.totalAccommodationFee;
              TotalNights.value = HelperComposable().CalculateNights(
                CookieFilters.value.Dates[0],
                CookieFilters.value.Dates[1]
              );
              EstateMinAccommodation.value = EstateInfo.value.minAccommodation;
              if (EstateMinAccommodation.value > TotalNights.value) {
                ShowInfoSection.value = false;
                ShowPaymentStep.value = false;
                InProgress.value = false;
                return ErrorMessage.value = `* Bu mülk için min. konaklama süresi ${EstateMinAccommodation.value} gecedir.`;
              }
              ShowInfoSection.value = true;
              ShowPaymentStep.value = true;
              InProgress.value = false;
            } else {
              if (ShowPaymentStep.value) {
                ShowPaymentStep.value = false;
              }
              ShowInfoSection.value = false;
              InProgress.value = false;
              return ErrorMessage.value = `* ${CheckReq}`;
            }
          }
        }
        if (item === 1) {
          CookieEstateID.value = props.EstateID;
          Router.push(LocalePath("/payment"));
        }
      }
    };
    watch(
      () => Dates.value,
      () => {
        CheckAvailability(0);
      }
    );
    watch(() => {
      ShowInfoSection.value;
      TotalPrice.value;
      CleaningFee.value;
      TaxAmount.value;
      TaxRate.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="check-availability w-100"><div><span>${ssrInterpolate(_ctx.$t("CheckAvailability"))}</span>`);
      _push(ssrRenderComponent(unref(ja), {
        modelValue: unref(Dates),
        "onUpdate:modelValue": ($event) => isRef(Dates) ? Dates.value = $event : null,
        range: "",
        "enable-time-picker": false,
        "multi-calendars": { solo: true },
        "auto-apply": "",
        "min-date": unref(MinDate),
        "min-range": unref(MinRange),
        "auto-range": unref(AutoRange),
        placeholder: _ctx.$t("CheckInOut"),
        class: "d-picker",
        locale: "tr",
        "model-type": "yyyy-MM-dd"
      }, null, _parent));
      _push(`</div><div><div class="check-availability-info">`);
      if (unref(ShowInfoSection)) {
        _push(`<div class="container"><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("AccommodationFee"))}:</span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(TotalAccommodationFee) * 36.5533).toLocaleString(
          "tr-TR"
        ))}  ₺</span></div></div><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("TaxRate"))}:</span></div><div class="col"><span>${ssrInterpolate(unref(TaxRate))}  %</span></div></div><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("TaxAmount"))}:</span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(TaxAmount) * 36.5533).toLocaleString("tr-TR"))}  ₺</span></div></div><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("CleaningFee"))}: </span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(CleaningFee) * 36.5533).toLocaleString("tr-TR"))}  ₺</span></div></div><div class="row total-price"><div class="col"><span>${ssrInterpolate(_ctx.$t("Total"))} ${ssrInterpolate(_ctx.$t("Price"))}:</span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(TotalPrice) * 36.5533).toLocaleString("tr-TR"))}  ₺ </span></div></div></div>`);
      } else {
        _push(`<div class="container mt-2 text-danger"><span>${ssrInterpolate(unref(ErrorMessage))}</span></div>`);
      }
      _push(`</div></div><div class="col btn-box"><div class="col-lg-12"></div><div class="col-lg-12">`);
      if (unref(ShowPaymentStep)) {
        _push(`<button type="button" class="btn second"${ssrRenderAttr("title", _ctx.$t("Reservation"))}${ssrIncludeBooleanAttr(unref(InProgress)) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("Reservation"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-12"><button type="button" class="call-back-btn w-100" data-bs-toggle="modal" data-bs-target="#callbackModal"><div class="row d-flex justify-content-around align-items-center"><div class="col-lg-12">Temsilciye Ulaşın</div></div></button></div></div></div><div class="modal fade" id="checkAvailabilityModal" tabindex="-1" aria-labelledby="checkAvailabilityModal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><img${ssrRenderAttr("src", _imports_0$1)} alt="error"></div><div class="modal-body"><div class="col"><h2>HATA</h2></div><div class="col"><p> Bu mülk için min. konaklama süresi ${ssrInterpolate(unref(EstateMinAccommodation))} gecedir. </p></div></div><div class="modal-footer"><button class="btn" type="button" data-bs-dismiss="modal" aria-label="Close"> Tamam </button></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Check-Availability.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Google-Maps-Marker",
  __ssrInlineRender: true,
  setup(__props) {
    useCookie("Coordinates");
    const Coordinates = ref({ lat: 1, lng: 1 });
    watch(() => {
      Coordinates.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(GoogleMap), mergeProps({
        center: unref(Coordinates),
        zoom: 15,
        apiKey: "AIzaSyB1jnI1NLP_vSzfjXBGYAUb9R99s0S4rVE",
        style: { "width": "100%", "height": "350px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Marker), {
              options: { position: unref(Coordinates) }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Marker), {
                options: { position: unref(Coordinates) }
              }, null, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Google-Maps-Marker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _imports_0 = "" + __publicAssetsURL("assets/icons/bed.svg");
const _imports_1 = "" + __publicAssetsURL("assets/icons/bath.svg");
const _imports_2 = "" + __publicAssetsURL("assets/icons/wc.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    useLocalePath();
    useCookie("Filters");
    useCookie("Coordinates");
    useState("EstateInfo");
    const EstateID = useCookie("EstateID");
    const PageTitle = ref("Geccele");
    const InProgress = ref(true);
    let Details = ref({});
    let Address = ref({});
    let District = ref({});
    let City = ref({});
    let Country = ref({});
    ref();
    const ImageFilePrefix = ref("");
    const ScreenWidth = ref(Number);
    const CurrentIndex = ref(0);
    const ShowGallery = ref(false);
    const ImagesGalleryURL = computed(() => {
      return Details.value.media ? Details.value.media.map((slide) => ImageFilePrefix.value + slide.url) : [];
    });
    watch(() => {
      Details.value;
      Address.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Loading = __nuxt_component_4$1;
      const _component_CheckAvailability = __nuxt_component_4;
      const _component_Google_Maps_Marker = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(PageTitle))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(PageTitle)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "keywords",
              content: "geccele"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "geccele"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(PageTitle)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "keywords",
                content: "geccele"
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
      _push(`<div class="container-fluid mb-5 p-0 detail-section">`);
      if (unref(InProgress)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div class="detail-slider">`);
        if (unref(Details).media.length > 0) {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(VueperSlides), {
            class: "no-shadow",
            "visible-slides": 2,
            "slide-multiple": false,
            "slide-ratio": 1 / 3,
            gap: 1,
            "arrows-outside": false,
            "dragging-distance": 70,
            lazyLoadOnDrag: true,
            fractions: true,
            bullets: false,
            breakpoints: {
              700: { visibleSlides: 1 }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(Details).media, (slide, i) => {
                  _push2(ssrRenderComponent(unref(VueperSlide), {
                    key: i,
                    image: unref(ImageFilePrefix) + slide.url
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(Details).media, (slide, i) => {
                    return openBlock(), createBlock(unref(VueperSlide), {
                      key: i,
                      image: unref(ImageFilePrefix) + slide.url
                    }, null, 8, ["image"]);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="d-none d-lg-block gallery-btn" title="Tam Ekran"> ☩ </button>`);
        if (unref(ScreenWidth) < 996) {
          _push(`<div class="container py-3"><div class="col-md-12 check-availability-section">`);
          _push(ssrRenderComponent(_component_CheckAvailability, { EstateID: unref(EstateID) }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="container"><div class="row mt-5"><div class="col-lg-8"><div class="top-details"><h1>${ssrInterpolate(unref(Details).name)} <br></h1><p>${ssrInterpolate(unref(Details).description)} <br></p></div></div>`);
        if (unref(ScreenWidth) > 996) {
          _push(`<div class="col-lg-4 check-availability-section">`);
          _push(ssrRenderComponent(_component_CheckAvailability, { EstateID: unref(EstateID) }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="row general-infos mt-5"><div class="col-lg-8"><div class="estate-infos"><div class="d-block">`);
        if (unref(Details).squareMeters) {
          _push(`<span class="square-meter">${ssrInterpolate(_ctx.$t("RoomSquareMeters"))}: <b>${ssrInterpolate(unref(Details).squareMeters)}</b></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`   `);
        if (unref(Details).numberOfPeople) {
          _push(`<span class="square-meter">${ssrInterpolate(_ctx.$t("MaxGuest"))}: <b>${ssrInterpolate(unref(Details).numberOfPeople)}</b></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="boxes"><div class="row"><!--[-->`);
        ssrRenderList(unref(Details).estateRoomInfos, (roomInfo) => {
          _push(`<div class="col-lg-2"><div class="col text-center"><figure>`);
          if (roomInfo.roomInfoId == 1) {
            _push(`<img${ssrRenderAttr("src", _imports_0)} alt="bed">`);
          } else {
            _push(`<!---->`);
          }
          if (roomInfo.roomInfoId == 2) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="bath">`);
          } else {
            _push(`<!---->`);
          }
          if (roomInfo.roomInfoId == 3) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="wc">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figure><span>${ssrInterpolate(roomInfo.name)}: ${ssrInterpolate(roomInfo.value)}</span></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
        if (unref(Details).property.length > 0) {
          _push(`<div><h2 class="mt-5">${ssrInterpolate(_ctx.$t("AllFeatures"))}</h2><div class="detail-features"><!--[-->`);
          ssrRenderList(unref(Details).property, (detail) => {
            _push(`<div>${ssrInterpolate(detail.name)} <br><!--[-->`);
            ssrRenderList(detail.propertyDetail, (info) => {
              _push(`<span> ✓ ${ssrInterpolate(info.name)}</span>`);
            });
            _push(`<!--]--></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-lg-4"><div class="maps-side"><figure data-bs-toggle="modal" data-bs-target="#google-maps-modal"${ssrRenderAttr("title", _ctx.$t("SeeOnMap"))}><img class="img-thumbnail"${ssrRenderAttr("src", _imports_2$1)} alt="map"><figcaption>${ssrInterpolate(_ctx.$t("SeeOnMap"))}</figcaption></figure><p>${ssrInterpolate(unref(Address).detail)}</p><p>${ssrInterpolate(unref(District))} / ${ssrInterpolate(unref(City))} / ${ssrInterpolate(unref(Country))}</p></div></div></div></div></div>`);
      }
      _push(`</div><div class="modal fade" id="google-maps-modal" tabindex="-1" aria-labelledby="google-maps-modal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="google-maps-modal-label">${ssrInterpolate(unref(Details).name)}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"${ssrRenderAttr("title", _ctx.$t("Close"))}></button></div><div class="modal-body">`);
      _push(ssrRenderComponent(_component_Google_Maps_Marker, null, null, _parent));
      _push(`</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"${ssrRenderAttr("title", _ctx.$t("Close"))}>${ssrInterpolate(_ctx.$t("Close"))}</button></div></div></div></div>`);
      _push(ssrRenderComponent(unref(VueEasyLightbox), {
        visible: unref(ShowGallery),
        imgs: unref(ImagesGalleryURL),
        index: unref(CurrentIndex),
        onHide: ($event) => ShowGallery.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _id__vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-a66d1317.js.map
