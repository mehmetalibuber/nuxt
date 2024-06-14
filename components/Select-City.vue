<template>
  <section class="res-section container-fluid p-0">
    <div class="reservation">
      <div class="container">
        <div>
          <div class="text-left">
            <p>{{ $t("DiscoverDifferentCities") }}</p>
          </div>
          <!-- <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link px-0 active" id="pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                Estates
              </button>
            </li>
          </ul> -->
          <div
            class="col-lg-12 text-left d-flex align-items-center justify-content-between"
          >
            <div class="col-lg-10">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  :title="t('SelectCity')"
                >
                  {{ GetCurrentCity() }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li v-for="city in Cities" :key="city.id">
                    <span class="dropdown-item" @click="SelectCity(city)">
                      {{ city.name }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2">
              <button @click="Search()" :title="$t('Search')">
                {{ $t("Search") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const CookieFilters = useCookie("Filters");
const router = useRouter();
const Cities = ref([]);
const LocalePath = useLocalePath();
const SelectedCity = ref({
  countryId: 225,
  fipsCode: "07",
  id: 2169,
  latitude: 37.0951672,
  longitude: 31.0793705,
  name: "Antalya",
});
onMounted(async () => {
  const CityDesc = await DestinationComposable().GetCities();
  Cities.value = CityDesc.data;
  CheckCookieFilters();
});
const CheckCookieFilters = async () => {
  if (!CookieFilters.value) {
    return HelperComposable().SetDefaultCookie();
  }
  if (CookieFilters.value) {
    CookieFilters.value.City = SelectedCity.value;
  }
  if (CookieFilters.value.Dates.length == 0) {
    // console.log(CookieFilters.value.Dates.length);
    // console.log(CookieFilters.value.Dates);
    const DefaultCheckIn = HelperComposable().DateFormatter(new Date());
    const DefaultCheckOut = HelperComposable().DateFormatter(
      new Date().setDate(new Date().getDate() + 3)
    );
    CookieFilters.value.Dates[0] = DefaultCheckIn;
    CookieFilters.value.Dates[1] = DefaultCheckOut;
  }
};
const GetCurrentCity = () => {
  const selectedCity = Cities.value.find(
    (city) => city.id === SelectedCity.value.id
  );
  return selectedCity ? selectedCity.name : "Select a city";
};
const SelectCity = (city) => {
  SelectedCity.value = city;
};
const Search = () => {
  CookieFilters.value.City = SelectedCity.value;
  router.push(LocalePath("/destinations"));
};
watch(() => {
  Cities.value;
  SelectedCity.value;
});
</script>

<style scoped>
.res-section {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 4px;
  border: 1px solid #e6e3e3;
  border-radius: 12px;
}
.res-section .dropdown-toggle {
  background-color: #fff;
  color: #000;
  width: 100%;
  text-align: left;
}
.res-section .dropdown-toggle::after {
  position: absolute;
  right: 15px;
}
.res-section .dropdown-menu {
  width: 100%;
}
.res-section .dropdown-menu li {
  width: 100%;
  cursor: pointer;
}
.res-section .col-lg-2 button {
  margin-left: 15px;
}
.reservation {
  background-color: transparent;
  padding: 15px 20px;
  width: 50%;
}
.reservation .container {
  padding: 0;
  border-radius: 12px;
}
.reservation .container .text-left p {
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 2px;
}
.reservation button {
  padding: 7.1px 22px;
  background-color: #214280;
  color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
}
.reservation .dropdown-item.active,
.dropdown-item:active {
  color: #000;
  text-decoration: none;
  background-color: transparent;
}
.reservation .btn:active {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: #ebebeb;
}
.reservation .dropdown-menu {
  padding: 0;
}
.reservation .dropdown-menu .dropdown-item {
  padding: 8px 22px;
  border-radius: 8px;
}
@media (max-width: 996px) {
  .res-section .col-lg-10 {
    width: 100%;
  }
  .reservation {
    background-color: transparent;
    padding: 15px 20px;
    width: 85%;
  }
  .reservation select {
    width: 160px;
  }
}
</style>
