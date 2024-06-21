import { ref, watch, mergeProps, useSSRContext } from "vue";
import "hookable";
import { j as useState } from "../server.mjs";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import "./DestinationComposable-6fe85d21.js";
import { ssrRenderAttrs } from "vue/server-renderer";
/* empty css                  */import "ofetch";
import "#internal/nitro";
import "unctx";
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
import "ohash";
import "./axiosConfig-89e67415.js";
import "axios";
const leaflet_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "leaflet",
  __ssrInlineRender: true,
  setup(__props) {
    useState("Destinations");
    const MapRef = ref(null);
    const districtMarkers = ref([]);
    const detailedMarkers = ref({});
    const Destinations = ref([]);
    useCookie("Filters");
    watch(() => Destinations.value, updateMarkers, { deep: true });
    function updateMarkers() {
      const L = window.L;
      const groupedBySubCity = Destinations.value.reduce((acc, destination) => {
        const subCity = destination.address.subCity;
        if (!acc[subCity])
          acc[subCity] = [];
        acc[subCity].push(destination);
        return acc;
      }, {});
      Object.keys(groupedBySubCity).forEach((subCity) => {
        const destinationsInSubCity = groupedBySubCity[subCity];
        const firstDestination = destinationsInSubCity[0];
        const latitude = parseFloat(firstDestination.address.latitude);
        const longitude = parseFloat(firstDestination.address.longitude);
        if (latitude && longitude) {
          const marker = L.marker([latitude, longitude], {
            icon: L.divIcon({
              className: "city-marker",
              html: `${destinationsInSubCity.length}`
            })
          }).addTo(MapRef.value).bindPopup(`${subCity}: ${destinationsInSubCity.length} yer`).on("click", () => {
            MapRef.value.setView([latitude, longitude], 12);
            showDetailedMarkers(subCity);
          });
          districtMarkers.value.push(marker);
          detailedMarkers.value[subCity] = [];
        }
      });
    }
    function showDetailedMarkers(subCity) {
      hideDistrictMarkers();
      const destinationsInSubCity = Destinations.value.filter(
        (destination) => destination.address.subCity === subCity
      );
      const L = window.L;
      destinationsInSubCity.forEach((destination) => {
        const latitude = parseFloat(destination.address.latitude);
        const longitude = parseFloat(destination.address.longitude);
        if (latitude && longitude) {
          const marker = L.marker([latitude, longitude]).addTo(MapRef.value).bindPopup(
            `<b>${destination.name}</b><br>${destination.address.detail}`
          );
          detailedMarkers.value[subCity].push(marker);
        }
      });
    }
    function hideDistrictMarkers() {
      districtMarkers.value.forEach((marker) => MapRef.value.removeLayer(marker));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "MapRef",
        ref: MapRef,
        class: "map-container"
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leaflet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=leaflet-2f9d20c7.js.map
