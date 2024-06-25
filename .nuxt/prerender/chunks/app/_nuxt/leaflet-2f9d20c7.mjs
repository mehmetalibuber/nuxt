import { ref, watch, mergeProps, useSSRContext } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { j as useState } from '../server.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { ssrRenderAttrs } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
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
