<template>
  <div>
    <Map-Component
      :Destinations="Destinations"
      @EmitVisibleDestinations="VisibleDestinations"
    />
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
// emit
const emit = defineEmits(["EmitVisibleDestinationsData"]);
const StateDestinations = useState("Destinations");
let Destinations = ref([]);
//const DesData = ref({});
const CookieCurrentPage = ref(1);

// onMounted. Working after page load
onMounted(async () => {
  setTimeout(async () => {
    Destinations.value = StateDestinations.value;
    // console.log(Destinations.value);
  }, 400);
});
const VisibleDestinations = (data) => {
  emit("EmitVisibleDestinationsData", data);
};
watch(() => {
  CookieCurrentPage.value;
  Destinations.value;
});
</script>
