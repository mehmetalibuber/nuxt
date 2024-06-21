import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { j as useState } from '../server.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

export { _sfc_main as default };
//# sourceMappingURL=leaflet-2f9d20c7.mjs.map
