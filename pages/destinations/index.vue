<template>
  <Head>
    <Title>{{ $t("PremiumAccommodation") }} | Geccele</Title>
    <Meta
      name="keywords"
      content="geccele, destinations, places to visit in Turkey"
    >
    </Meta>
    <Meta name="description" content="Geccele destinations"> </Meta>
  </Head>
  <!-- Reservation Block -->
  <Search-Filter
    @EmitFilterDestination="SetStateDestinations"
    @EmitTotalElements="SetTotalElements"
    @EmitCurrentPage="SetCurrentPage"
  />
  <!-- <Reservation /> -->
  <div class="container-fluid homes-page">
    <div v-if="CookieInProgress">
      <Loading />
    </div>
    <div v-else>
      <div v-if="Destinations.length == 0">
        <div class="my-5 mx-4 no-res">
          <p class="text-danger">* {{ $t("emptyResForSearchCriteria") }}</p>
          <button
            class="btn"
            type="button"
            :title="$t('ClearFilters')"
            @click="ClearFilters()"
          >
            {{ $t("ClearFilters") }}
          </button>
        </div>
      </div>
      <div class="row pb-5" v-else>
        <div class="col-xl-7 col-lg-12 mt-2 left-side">
          <div v-for="estate in Destinations" :key="estate" class="col-xl-6">
            <div class="card col-lg-12">
              <div class="col container-side">
                <div class="col-lg-12">
                  <img
                    v-if="estate.media[0]"
                    :src="ImageFilePrefix + estate.media[0].url"
                    class="card-img"
                    :alt="estate.name"
                    loading="lazy"
                    :title="estate.name"
                    @click="DestinationDetail(estate.id)"
                  />
                  <img
                    v-else
                    src="/assets/layout/404-not-found.png"
                    class="card-img"
                    alt="Geccele Not Found"
                    @click="DestinationDetail(estate.id)"
                  />
                </div>
                <div class="col-lg-12">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 px-3">
                        <h5
                          v-if="estate.name.length > 85"
                          class="card-title"
                          :title="estate.name"
                          @click="DestinationDetail(estate.id)"
                        >
                          {{ estate.name.slice(0, 85) }}...
                        </h5>
                        <h5
                          v-else
                          class="card-title"
                          :title="estate.name"
                          @click="DestinationDetail(estate.id)"
                        >
                          {{ estate.name }}
                        </h5>
                        <p class="card-text location">
                          {{ estate.address.subCity }} -
                          {{ estate.address.city }}
                        </p>
                        <div class="row">
                          <div class="col-lg-2">
                            <p class="card-text include">
                              <img
                                src="/assets/icons/square-meter.svg"
                                alt="square"
                                class="s-icons"
                              />
                              <b> {{ estate.squareMeters }} </b>&nbsp;m²
                            </p>
                          </div>
                          <div class="col-lg-2">
                            <p class="card-text include">
                              <img
                                src="/assets/icons/person.svg"
                                alt="people"
                                class="s-icons"
                              />
                              <b> {{ estate.numberOfPeople }}</b
                              >&nbsp;{{ $t("People") }}
                            </p>
                          </div>
                        </div>
                        <div class="features">
                          <ul v-if="estate.estatePropertyDetails">
                            <li
                              v-for="feature in estate.estatePropertyDetails.slice(
                                0,
                                5
                              )"
                              :key="feature"
                            >
                              &check; {{ feature.name }}
                            </li>
                          </ul>
                          <!-- <span v-if="estate.cancellation" class="cancel">
                            {{ estate.cancellation }}
                          </span> -->
                        </div>
                        <div class="row bottom">
                          <div class="col-8" style="padding-right: 0">
                            <span class="price" v-if="estate.price">
                              {{
                                Math.ceil(
                                  (estate.price.totalAccommodationFee *
                                    36.5533) /
                                    TotalNights
                                ).toLocaleString("tr-TR")
                              }}
                              ₺
                            </span>
                            <span class="text-danger" v-else
                              >Price is not found.</span
                            >
                            <small v-if="estate.price" class="opacity-50">{{
                              $t("PricesStartingFrom")
                            }}</small>
                            <!-- <small v-if="estate.price" class="opacity-50"
                              >/ {{ TotalNights }} {{ $t("Night") }}</small
                            > -->
                          </div>
                          <div class="col-4 text-end">
                            <span
                              @click="DestinationDetail(estate.id)"
                              class="btn"
                              :title="estate.name"
                            >
                              {{ $t("ViewDetails") }} &#8250;
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="col-lg-3">
                        <div class="col">
                          <span> Guest Point</span> <br />
                           <span class="rate"> &#9733; {{ estate.rating }} </span>
                        </div>
                        <div class="col mt-2">
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 mt-2 d-none d-xl-block">
          <div class="map-side">
            <Leaflet @EmitVisibleDestinationsData="VisibleDestinations" />
          </div>
        </div>

        <!-- pagination section -->
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="pagination">
              <button
                @click="ChangeActivePage(CurrentPage - 1)"
                :disabled="CurrentPage === 0"
              >
                <span> &#8249; </span>
              </button>
              <span>Page {{ CurrentPage }} / {{ TotalPages }}</span>
              <button
                @click="ChangeActivePage(CurrentPage + 1)"
                :disabled="CurrentPage === TotalPages"
              >
                <span>&#8250;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
  middleware: "auth",
});
// router
const Router = useRouter();
// localization
const LocalePath = useLocalePath();
// runtime
const RuntimeConfig = useRuntimeConfig();
// cookies
const CookieCoordinates = useCookie("Coordinates");
const CookieFilters = useCookie("Filters");
const CookieInProgress = useCookie("InProgress");
// states
CookieInProgress.value = true;
const StateDestinations = useState("Destinations");
const CurrentPage = ref(0);
const TotalElements = ref();
const TotalPages = ref();
const Destinations = ref([]);
const DesData = ref({});
const ImageFilePrefix = ref("");
const TotalNights = ref(0);

// mounted
onMounted(async () => {
  const CRMHost = RuntimeConfig.public.CRM_HOST;
  ImageFilePrefix.value = `${CRMHost}/files/IMAGE/`;
  if (CookieFilters.value) {
    if (CookieFilters.value.CurrentPage) {
      CurrentPage.value = CookieFilters.value.CurrentPage;
    }
  }
  RenderData();
});
const GetTotalNights = () => {
  // calculate total nights
  TotalNights.value = HelperComposable().CalculateNights(
    CookieFilters.value.Dates[0],
    CookieFilters.value.Dates[1]
  );
};
// change active page. Get data as a page number
const ChangeActivePage = async (page) => {
  CookieInProgress.value = true;
  if (page >= 0 && page <= TotalElements.value) {
    CurrentPage.value = CookieFilters.value.CurrentPage = page;
    RenderData();
  }
};
// vue3 composition api. reactive data manipulation
const RenderData = async () => {
  GetTotalNights();
  await FilterDestinationData();
};
const FilterDestinationData = async () => {
  const FilteredData = await DestinationComposable().GetFilteredDestinations(
    CookieFilters.value
  );
  StateDestinations.value = Destinations.value = FilteredData.data.content;
  CookieInProgress.value = false;
};
// after Emit method
const SetStateDestinations = (data) => {
  GetTotalNights();
  Destinations.value = data;
};
// after Emit method
const SetTotalElements = (data) => {
  TotalElements.value = data;
  TotalPages.value = Math.floor(TotalElements.value / 10);
};
// set current page
const SetCurrentPage = (data) => {
  CurrentPage.value = data;
};
// clear filters
const ClearFilters = async () => {
  CookieFilters.value.SubCities = [];
  CookieFilters.value.DTO = [];
  CookieFilters.value.CurrentPage = 0;
  const DefaultCheckIn = HelperComposable().DateFormatter(new Date());
  const DefaultCheckOut = HelperComposable().DateFormatter(
    new Date().setDate(new Date().getDate() + 3)
  );
  CookieFilters.value.Dates[0] = DefaultCheckIn;
  CookieFilters.value.Dates[1] = DefaultCheckOut;
  // reload page
  Router.go();
};
// destination detail
const DestinationDetail = async (id) => {
  CookieInProgress.value = true;
  // update session coordinates
  const Coordinates = Destinations.value.filter((a) => a.id == id);
  let FilteredCoordinates = {
    latitude: null,
    longitude: null,
  };
  FilteredCoordinates.latitude = Coordinates[0].address.latitude;
  FilteredCoordinates.longitude = Coordinates[0].address.longitude;

  CookieCoordinates.value = FilteredCoordinates;
  //console.log(FilteredCoordinates);
  let Router = useRouter();
  if (id) {
    Router.push(`destinations/${id}`);
  }
};
// listen to changes
watch(() => {
  DesData.value;
  Destinations.value;
  CookieInProgress.value;
  StateDestinations.value;
});

// get emitted visible destinations data
const VisibleDestinations = (data) => {
  console.log("EmitVisibleDestinationsData", data);
};
</script>

<style scoped>
.s-icons {
  width: 14px;
  height: 14px;
  margin-right: 6px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #3e3d3d;
  cursor: pointer;
  text-align: justify;
  height: 40px;
}

.location {
  color: rgba(0, 0, 0, 0.6);
  font-size: 17px;
}

.include {
  /* background-color: #3493B9; */
  color: rgba(0, 0, 0, 0.6);
  width: max-content;
  font-size: 16px;
  /* padding: 2px 8px; */
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.features ul li {
  margin-right: 8px;
  color: #4c84ca;
  font-size: 14px;
  font-weight: 600;
}

.card-text {
  margin-bottom: 5px;
}

.btn {
  /* background-color: #b24693; */
  color: rgba(0, 0, 0, 0.6);
  margin-top: 4px;
  transition: 0.6s ease all;
  padding-right: 0;
}

.btn:hover {
  color: #4c84ca;
}

.rate {
  color: #4c84ca;
  font-weight: 600;
}

.price {
  top: 25px;
  color: #4c84ca;
  font-weight: 600;
  font-size: 22px;
}

.cancel {
  color: #33a776;
  font-weight: 600;
  font-size: 12px;
}

.left-side {
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.left-side .card {
  padding: 0 6px;
  margin: 15px 0;
  border: none;
  height: 420px;
}

.left-side .card .card-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
}

.left-side .card .card-body {
  padding: 15px 12px !important;
}

.left-side .card .container-side {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.left-side .card .container-side .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
}

/* pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.pagination button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: #b24693;
  transition: 1s ease all;
  margin: 0 15px;
}

.pagination button:not(:disabled) {
  background-color: #b24693;
  color: #fff;
}

.pagination button span {
  font-size: 28px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -5px;
}

/* no res */
.no-res button {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  padding: 6px 10px;
  color: #fff;
  background-color: #214280;
}
.no-res button:hover {
  color: #fff;
}

@media (max-width: 1200px) {
  .left-side .card {
    padding: 0 6px;
    margin: 15px 0;
    height: 420px;
    width: 450px;
  }

  .left-side {
    height: auto;
  }
}
@media (max-width: 996px) {
  .left-side .card {
    height: 450px;
    width: 450px;
  }
}
@media (max-width: 450px) {
  .left-side {
    overflow: hidden;
  }
  .left-side .card {
    height: 420px;
    width: 375px;
  }
  .left-side .card .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>
