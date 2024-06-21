<template>
  <div ref="MapRef" class="map-container"></div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import "leaflet/dist/leaflet.css";
const StateDestinations = useState("Destinations");

const MapRef = ref(null);
const districtMarkers = ref([]);
const detailedMarkers = ref({});
const Destinations = ref([]);
const CookieFilters = useCookie("Filters");

onMounted(async () => {
  await FilterDestinationData();
  await AddMarker();
});

const AddMarker = async () => {
  const L = await import("leaflet");
  MapRef.value = L.map(MapRef.value).setView([36.8969, 30.7133], 9);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(MapRef.value);

  // Initial markers
  updateMarkers();

  MapRef.value.on("zoomend", () => {
    const zoomLevel = MapRef.value.getZoom();
    if (zoomLevel < 12) {
      clearDetailedMarkers();
      showDistrictMarkers();
    } else {
      const currentBounds = MapRef.value.getBounds();
      Destinations.value.forEach((destination) => {
        const latitude = parseFloat(destination.address.latitude);
        const longitude = parseFloat(destination.address.longitude);
        if (
          latitude &&
          longitude &&
          currentBounds.contains([latitude, longitude])
        ) {
          showDetailedMarkers(destination.address.subCity);
        }
      });
    }
  });
};

watch(() => Destinations.value, updateMarkers, { deep: true });

function updateMarkers() {
  const L = window.L;
  const groupedBySubCity = Destinations.value.reduce((acc, destination) => {
    const subCity = destination.address.subCity;
    if (!acc[subCity]) acc[subCity] = [];
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
          html: `${destinationsInSubCity.length}`,
        }),
      })
        .addTo(MapRef.value)
        .bindPopup(`${subCity}: ${destinationsInSubCity.length} yer`)
        .on("click", () => {
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
      const marker = L.marker([latitude, longitude])
        .addTo(MapRef.value)
        .bindPopup(
          `<b>${destination.name}</b><br>${destination.address.detail}`
        );

      detailedMarkers.value[subCity].push(marker);
    }
  });
}

function hideDistrictMarkers() {
  districtMarkers.value.forEach((marker) => MapRef.value.removeLayer(marker));
}

function showDistrictMarkers() {
  districtMarkers.value.forEach((marker) => marker.addTo(MapRef.value));
}

function clearDetailedMarkers() {
  for (const district in detailedMarkers.value) {
    detailedMarkers.value[district].forEach((marker) =>
      MapRef.value.removeLayer(marker)
    );
    detailedMarkers.value[district] = [];
  }
}

function clearDistrictMarkers() {
  districtMarkers.value.forEach((marker) => MapRef.value.removeLayer(marker));
  districtMarkers.value = [];
}

const FilterDestinationData = async () => {
  const FilteredData = await DestinationComposable().GetFilteredDestinations(
    CookieFilters.value
  );
  StateDestinations.value = Destinations.value = FilteredData.data.content;
};
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
