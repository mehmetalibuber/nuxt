import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { ref, watch, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import "hookable";
import { u as useRouter, h as useI18n, j as useState } from "../server.mjs";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import "./DestinationComposable-6fe85d21.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { j as ja, _ as __nuxt_component_4 } from "./main-6a42e016.js";
/* empty css                  */import { u as useLocalePath } from "./composables-2c3efc9a.js";
import { H as HelperComposable } from "./axiosConfig-89e67415.js";
import { _ as _imports_0$1 } from "./404-not-found-6804e0de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-6a088328.js";
import "@unhead/shared";
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
import "date-fns";
import "axios";
const _imports_0 = "" + __publicAssetsURL("assets/icons/find.svg");
const SearchFilter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  __name: "Search-Filter",
  __ssrInlineRender: true,
  emits: [
    "EmitFilterDestination",
    "EmitTotalElements",
    "EmitCurrentPage"
  ],
  setup(__props, { emit: __emit }) {
    useRouter();
    const { t } = useI18n();
    const CookieFilters = useCookie("Filters");
    const CookieInProgress = useCookie("InProgress");
    useState("Destinations");
    CookieInProgress.value = false;
    ref(0);
    const MinDate = /* @__PURE__ */ new Date();
    const Filters = ref({
      Dates: [],
      UnParsedDates: []
    });
    const Cities = ref({});
    const SelectedCity = ref({
      countryId: 225,
      fipsCode: "07",
      id: 2169,
      latitude: 37.0951672,
      longitude: 31.0793705,
      name: "Antalya"
    });
    ref({
      id: 1,
      name: "Residence"
    });
    const EstateProjects = ref([]);
    const SubCities = ref([]);
    ref([]);
    ref(Number);
    ref({});
    const PropertyDTO = ref({});
    ref({});
    ref(null);
    const ResponsiveItems = ref(false);
    watch(
      () => Filters.value.UnParsedDates,
      (checkin, checkout) => {
        CookieFilters.value.UnParsedDates = [
          checkin.toString(),
          checkout.toString()
        ];
      }
    );
    watch(() => {
      Filters.value;
      SelectedCity.value;
      Cities.value;
      SubCities.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filters my-2" }, _attrs))}><div class="container-fluid accordion accordion-flush" id="accordionFlushExample"><button type="button" class="m-filter-btn d-lg-none d-lg-block">${ssrInterpolate(_ctx.$t("Filters"))} ⇌ </button>`);
      if (unref(ResponsiveItems)) {
        _push(`<div class="row"><div class="col-lg-2 city m-col"><select name="cities" id="cities"><!--[-->`);
        ssrRenderList(unref(Cities), (city) => {
          _push(`<option${ssrRenderAttr("value", city.id)}>${ssrInterpolate(city.name)}</option>`);
        });
        _push(`<!--]--></select></div><div class="col-lg-2 m-col"><div class="accordion-item neighborhoods-side"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">${ssrInterpolate(_ctx.$t("Area"))}</button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><!--[-->`);
        ssrRenderList(unref(SubCities), (subCity) => {
          _push(`<div class="col-lg-12"><div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("name", subCity.name)}${ssrRenderAttr("value", subCity.id)}${ssrRenderAttr("id", subCity.id)}${ssrIncludeBooleanAttr(subCity.checked) ? " checked" : ""}><label class="form-check-label"${ssrRenderAttr("for", subCity.id)}>${ssrInterpolate(subCity.name)}</label></div></div>`);
        });
        _push(`<!--]--></div></div></div></div><div class="col-lg-2 estate m-col"><div class="accordion-item estate-side"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">${ssrInterpolate(_ctx.$t("Residence"))}</button></h2><div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><!--[-->`);
        ssrRenderList(unref(EstateProjects), (project) => {
          _push(`<div class="col-lg-12"><div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("name", project.name)}${ssrRenderAttr("value", project.id)}${ssrRenderAttr("id", "estate-" + project.id)}${ssrIncludeBooleanAttr(project.checked) ? " checked" : ""}><label class="form-check-label"${ssrRenderAttr("for", "estate-" + project.id)}>${ssrInterpolate(project.name)}</label></div></div>`);
        });
        _push(`<!--]--></div></div></div></div><div class="col-lg-3 d-picker">`);
        _push(ssrRenderComponent(unref(ja), {
          modelValue: unref(Filters).Dates,
          "onUpdate:modelValue": ($event) => unref(Filters).Dates = $event,
          range: "",
          "enable-time-picker": false,
          "multi-calendars": { solo: true },
          "auto-apply": "",
          "min-date": unref(MinDate),
          "min-range": "3",
          placeholder: unref(t)("CheckInOut")
        }, null, _parent));
        _push(`</div><div class="col-lg-3 sub-filters"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">${ssrInterpolate(_ctx.$t("MoreDetails"))}</button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body sub"><div class="row"><!--[-->`);
        ssrRenderList(unref(PropertyDTO), (dto, index2) => {
          _push(`<div class="col-lg-2 sub-accordions mt-3"><div><h2>${ssrInterpolate(dto.name)}</h2>`);
          if (dto.propertyDetail) {
            _push(`<div class="sub-accordions-body"><!--[-->`);
            ssrRenderList(dto.propertyDetail, (property) => {
              _push(`<div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("name", property.name)}${ssrRenderAttr("value", property.id)}${ssrRenderAttr("id", "p-" + property.id)}><label class="form-check-label"${ssrRenderAttr("for", "p-" + property.id)}>${ssrInterpolate(property.name)}</label></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div></div></div></div><div class="col-lg-1 apply-btn d-lg-block d-none"><div class="apply-side"><button class="btn w-100 apply" title="Apply Filters"><img${ssrRenderAttr("src", _imports_0)} alt="find"></button></div></div><div class="col-lg-1 apply-btn d-lg-none d-lg-block"><div class="apply-side"><button class="btn w-100 apply" title="Apply Filters"><img${ssrRenderAttr("src", _imports_0)} alt="find"></button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="accordion accordion-flush d-lg-none d-lg-block mobile-filters" id="accordionFlushExample"></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search-Filter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const MapComponent_vue_vue_type_style_index_0_lang = "";
const MapComponent_vue_vue_type_style_index_1_lang = "";
const _sfc_main$2 = {
  __name: "Map-Component",
  __ssrInlineRender: true,
  props: {
    Destinations: {
      type: Array,
      default: () => []
    }
  },
  emits: ["EmitVisibleDestinations"],
  setup(__props, { emit: __emit }) {
    ref([]);
    const props = __props;
    const ImageFilePrefix = ref("");
    const MapRef = ref(null);
    let L;
    const AddMarkers = () => {
      if (props.Destinations.length < 1) {
        return;
      }
      props.Destinations.forEach((destination) => {
        const {
          id,
          name,
          address,
          media,
          numberOfPeople,
          squareMeters,
          estateRoomInfos
        } = destination;
        let ImageURL = "";
        let Bath = 0;
        let Bed = 0;
        estateRoomInfos.forEach((x) => {
          if (x.roomInfoId === 1) {
            Bed = x.value;
          }
          if (x.roomInfoId === 2) {
            Bath = x.value;
          }
        });
        if (media[0]) {
          if (media[0].url) {
            ImageURL = ImageFilePrefix.value + media[0].url;
          } else {
            ImageURL = "/assets/layout/404-not-found.png";
          }
        } else {
          ImageURL = "/assets/layout/404-not-found.png";
        }
        const marker = L.marker([address.latitude, address.longitude]).addTo(
          MapRef.value
        );
        marker.bindPopup(
          `
        <div class="map-popup">
          <img class="map-thumb" src="${ImageURL}" loading="lazy"/>
          <b style="padding: 4px 0 0 0; position: relative; display: block;">${name}</b>
          <div style="margin:4px 0">
            <span> ✓ ${squareMeters} m&sup2;</span>&nbsp;<span> ✓ ${numberOfPeople} kişi</span>
            &nbsp;<span> ✓ ${Bed} yatak</span>&nbsp;<span> ✓ ${Bath} banyo</span>
          </div>
          <div class="row">
            <div class="col d-flex justify-content-start">
              <a href="/destinations/${id}" title="${name}" class="link">İncele ›</a>
            </div>
            <div class="col d-flex justify-content-end">
              <span data-bs-toggle="modal" data-bs-target="#callbackModal" style="align-self:center; cursor:pointer; text-decoration:underline">
                Temsilciye ulaşın
              </span>
            </div>
          </div> 
        </div>
      `
        );
      });
    };
    watch(
      () => props.Destinations,
      () => {
        AddMarkers();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "MapRef",
        ref: MapRef,
        class: "map-container"
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map-Component.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Leaflet",
  __ssrInlineRender: true,
  emits: ["EmitVisibleDestinationsData"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useState("Destinations");
    let Destinations = ref([]);
    const CookieCurrentPage = ref(1);
    const VisibleDestinations = (data) => {
      emit("EmitVisibleDestinationsData", data);
    };
    watch(() => {
      CookieCurrentPage.value;
      Destinations.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Map_Component = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Map_Component, {
        Destinations: unref(Destinations),
        onEmitVisibleDestinations: VisibleDestinations
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Leaflet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _imports_1 = "" + __publicAssetsURL("assets/icons/square-meter.svg");
const _imports_2 = "" + __publicAssetsURL("assets/icons/person.svg");
const index_vue_vue_type_style_index_0_scoped_47d7ed67_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useLocalePath();
    useCookie("Coordinates");
    const CookieFilters = useCookie("Filters");
    const CookieInProgress = useCookie("InProgress");
    CookieInProgress.value = true;
    const StateDestinations = useState("Destinations");
    const CurrentPage = ref(0);
    const TotalElements = ref();
    const TotalPages = ref();
    const Destinations = ref([]);
    const DesData = ref({});
    const ImageFilePrefix = ref("");
    const TotalNights = ref(0);
    const GetTotalNights = () => {
      TotalNights.value = HelperComposable().CalculateNights(
        CookieFilters.value.Dates[0],
        CookieFilters.value.Dates[1]
      );
    };
    const SetStateDestinations = (data) => {
      GetTotalNights();
      Destinations.value = data;
    };
    const SetTotalElements = (data) => {
      TotalElements.value = data;
      TotalPages.value = Math.floor(TotalElements.value / 10);
    };
    const SetCurrentPage = (data) => {
      CurrentPage.value = data;
    };
    watch(() => {
      DesData.value;
      Destinations.value;
      CookieInProgress.value;
      StateDestinations.value;
    });
    const VisibleDestinations = (data) => {
      console.log("EmitVisibleDestinationsData", data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Search_Filter = __nuxt_component_3;
      const _component_Loading = __nuxt_component_4;
      const _component_Leaflet = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("PremiumAccommodation"))} | Geccele`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("PremiumAccommodation")) + " | Geccele", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "keywords",
              content: "geccele, destinations, places to visit in Turkey"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Geccele destinations"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("PremiumAccommodation")) + " | Geccele", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "keywords",
                content: "geccele, destinations, places to visit in Turkey"
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Geccele destinations"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Search_Filter, {
        onEmitFilterDestination: SetStateDestinations,
        onEmitTotalElements: SetTotalElements,
        onEmitCurrentPage: SetCurrentPage
      }, null, _parent));
      _push(`<div class="container-fluid homes-page" data-v-47d7ed67>`);
      if (unref(CookieInProgress)) {
        _push(`<div data-v-47d7ed67>`);
        _push(ssrRenderComponent(_component_Loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-47d7ed67>`);
        if (unref(Destinations).length == 0) {
          _push(`<div data-v-47d7ed67><div class="my-5 mx-4 no-res" data-v-47d7ed67><p class="text-danger" data-v-47d7ed67>* ${ssrInterpolate(_ctx.$t("emptyResForSearchCriteria"))}</p><button class="btn" type="button"${ssrRenderAttr("title", _ctx.$t("ClearFilters"))} data-v-47d7ed67>${ssrInterpolate(_ctx.$t("ClearFilters"))}</button></div></div>`);
        } else {
          _push(`<div class="row pb-5" data-v-47d7ed67><div class="col-xl-7 col-lg-12 mt-2 left-side" data-v-47d7ed67><!--[-->`);
          ssrRenderList(unref(Destinations), (estate) => {
            _push(`<div class="col-xl-6" data-v-47d7ed67><div class="card col-lg-12" data-v-47d7ed67><div class="col container-side" data-v-47d7ed67><div class="col-lg-12" data-v-47d7ed67>`);
            if (estate.media[0]) {
              _push(`<img${ssrRenderAttr("src", unref(ImageFilePrefix) + estate.media[0].url)} class="card-img"${ssrRenderAttr("alt", estate.name)} loading="lazy"${ssrRenderAttr("title", estate.name)} data-v-47d7ed67>`);
            } else {
              _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="card-img" alt="Geccele Not Found" data-v-47d7ed67>`);
            }
            _push(`</div><div class="col-lg-12" data-v-47d7ed67><div class="card-body" data-v-47d7ed67><div class="row" data-v-47d7ed67><div class="col-lg-12 px-3" data-v-47d7ed67>`);
            if (estate.name.length > 85) {
              _push(`<h5 class="card-title"${ssrRenderAttr("title", estate.name)} data-v-47d7ed67>${ssrInterpolate(estate.name.slice(0, 85))}... </h5>`);
            } else {
              _push(`<h5 class="card-title"${ssrRenderAttr("title", estate.name)} data-v-47d7ed67>${ssrInterpolate(estate.name)}</h5>`);
            }
            _push(`<p class="card-text location" data-v-47d7ed67>${ssrInterpolate(estate.address.subCity)} - ${ssrInterpolate(estate.address.city)}</p><div class="row" data-v-47d7ed67><div class="col-lg-2" data-v-47d7ed67><p class="card-text include" data-v-47d7ed67><img${ssrRenderAttr("src", _imports_1)} alt="square" class="s-icons" data-v-47d7ed67><b data-v-47d7ed67>${ssrInterpolate(estate.squareMeters)}</b> m² </p></div><div class="col-lg-2" data-v-47d7ed67><p class="card-text include" data-v-47d7ed67><img${ssrRenderAttr("src", _imports_2)} alt="people" class="s-icons" data-v-47d7ed67><b data-v-47d7ed67>${ssrInterpolate(estate.numberOfPeople)}</b> ${ssrInterpolate(_ctx.$t("People"))}</p></div></div><div class="features" data-v-47d7ed67>`);
            if (estate.estatePropertyDetails) {
              _push(`<ul data-v-47d7ed67><!--[-->`);
              ssrRenderList(estate.estatePropertyDetails.slice(
                0,
                5
              ), (feature) => {
                _push(`<li data-v-47d7ed67> ✓ ${ssrInterpolate(feature.name)}</li>`);
              });
              _push(`<!--]--></ul>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="row bottom" data-v-47d7ed67><div class="col-8" style="${ssrRenderStyle({ "padding-right": "0" })}" data-v-47d7ed67>`);
            if (estate.price) {
              _push(`<span class="price" data-v-47d7ed67>${ssrInterpolate(Math.ceil(
                estate.price.totalAccommodationFee * 36.5533 / unref(TotalNights)
              ).toLocaleString("tr-TR"))} ₺ </span>`);
            } else {
              _push(`<span class="text-danger" data-v-47d7ed67>Price is not found.</span>`);
            }
            if (estate.price) {
              _push(`<small class="opacity-50" data-v-47d7ed67>${ssrInterpolate(_ctx.$t("PricesStartingFrom"))}</small>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="col-4 text-end" data-v-47d7ed67><span class="btn"${ssrRenderAttr("title", estate.name)} data-v-47d7ed67>${ssrInterpolate(_ctx.$t("ViewDetails"))} › </span></div></div></div></div></div></div></div></div></div>`);
          });
          _push(`<!--]--></div><div class="col-lg-5 mt-2 d-none d-xl-block" data-v-47d7ed67><div class="map-side" data-v-47d7ed67>`);
          _push(ssrRenderComponent(_component_Leaflet, { onEmitVisibleDestinationsData: VisibleDestinations }, null, _parent));
          _push(`</div></div><div class="row mt-5" data-v-47d7ed67><div class="col-lg-12" data-v-47d7ed67><div class="pagination" data-v-47d7ed67><button${ssrIncludeBooleanAttr(unref(CurrentPage) === 0) ? " disabled" : ""} data-v-47d7ed67><span data-v-47d7ed67> ‹ </span></button><span data-v-47d7ed67>Page ${ssrInterpolate(unref(CurrentPage))} / ${ssrInterpolate(unref(TotalPages))}</span><button${ssrIncludeBooleanAttr(unref(CurrentPage) === unref(TotalPages)) ? " disabled" : ""} data-v-47d7ed67><span data-v-47d7ed67>›</span></button></div></div></div></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47d7ed67"]]);
export {
  index as default
};
//# sourceMappingURL=index-266838ad.js.map
