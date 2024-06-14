<template>
  <GoogleMap
    :center="Coordinates"
    :zoom="15"
    apiKey="AIzaSyB1jnI1NLP_vSzfjXBGYAUb9R99s0S4rVE"
    style="width: 100%; height: 350px"
  >
    <Marker :options="{ position: Coordinates }" />
  </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const CookieCoordinates = useCookie("Coordinates");
//import config from "../config.js";
const Coordinates = ref({ lat: 1, lng: 1 });
//const GoogleMapsAPIKey = ref();
onMounted(() => {
  // GoogleMapsAPIKey.value = config.GoogleMapsAPIKey;
  setTimeout(() => {
    let CookieData = CookieCoordinates.value;
    if (CookieData) {
      Coordinates.value = {
        lat: Number(CookieData.latitude),
        lng: Number(CookieData.longitude),
      };
      // console.log("google maps ready.");
    }
  }, 1200);
});

watch(() => {
  Coordinates.value;
});
</script>
