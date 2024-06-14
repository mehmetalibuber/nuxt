<template>
  <div ref="MapRef" class="map-container"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import config from "~/config.js";

const VisibleDestinations = ref([]);
const props = defineProps({
  Destinations: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["EmitVisibleDestinations"]);

const ImageFilePrefix = ref("");
const MapRef = ref(null);
let L;

onMounted(async () => {
  ImageFilePrefix.value = `${config.CRM_HOST}/files/IMAGE/`;
  L = await import("leaflet");
  MapRef.value = L.map(MapRef.value).setView([36.8841, 30.7056], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
    MapRef.value
  );

  AddMarkers();
  // updateVisibleDestinations(); // Un-comment if you want to run this on mount
  // MapRef.value.on("zoomend", updateVisibleDestinations);
  // MapRef.value.on("moveend", updateVisibleDestinations);
});

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
      estateRoomInfos,
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
          <img class="map-thumb" src="${ImageURL}"/>
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

const updateVisibleDestinations = () => {
  const bounds = MapRef.value.getBounds();
  const visibleDestinations = props.Destinations.filter((destination) => {
    return bounds.contains([
      destination.address.latitude,
      destination.address.longitude,
    ]);
  });
  VisibleDestinations.value = visibleDestinations;
  emit("EmitVisibleDestinations", VisibleDestinations.value);
};

watch(
  () => props.Destinations,
  () => {
    AddMarkers();
    // updateVisibleDestinations(); // Un-comment if you want to run this whenever destinations change
  },
  { deep: true }
);
</script>

<style>
.map-container {
  width: 100%;
  height: 100vh;
  border-radius: 8px;
}

.city-marker {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #000;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  height: 70px;
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

.leaflet-popup-content {
  width: 230px;
}

.map-popup {
  width: 230px;
}

.map-popup .map-thumb {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}
</style>

<style>
.map-container {
  width: 100%;
  height: 100vh;
  border-radius: 8px;
}

.leaflet-popup-content {
  width: 230px;
}

.map-popup {
  width: 230px;
}

.map-popup .map-thumb {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}
.leaflet-container .link {
  position: relative;
  display: block;
  padding: 4px 10px;
  background-color: #214280;
  color: #fff !important;
  border-radius: 6px;
  text-decoration: none;
}
.leaflet-container a.leaflet-popup-close-button {
  color: #757575 !important;
  background-color: transparent !important;
  margin-left: -4px !important;
}
.leaflet-touch .leaflet-bar a {
  color: #757575 !important;
}
</style>
