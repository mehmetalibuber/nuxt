<template>
  <div class="filters my-2">
    <!-- ################## for web ###################-->
    <div
      class="container-fluid accordion accordion-flush"
      id="accordionFlushExample"
    >
      <button
        type="button"
        class="m-filter-btn d-lg-none d-lg-block"
        @click="ShowMobileFilters"
      >
        {{ $t("Filters") }} &#x21cc;
      </button>
      <div class="row" v-if="ResponsiveItems">
        <div class="col-lg-2 city m-col">
          <select name="cities" id="cities" v-model="SelectedCity.id">
            <option v-for="city in Cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
        </div>
        <div class="col-lg-2 m-col">
          <div class="accordion-item neighborhoods-side">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                {{ $t("Area") }}
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div
                  class="col-lg-12"
                  v-for="subCity in SubCities"
                  :key="subCity.id"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :name="subCity.name"
                      :value="subCity.id"
                      :id="subCity.id"
                      :checked="subCity.checked"
                    />
                    <label class="form-check-label" :for="subCity.id">
                      {{ subCity.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 estate m-col">
          <div class="accordion-item estate-side">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                {{ $t("Residence") }}
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div
                  class="col-lg-12"
                  v-for="project in EstateProjects"
                  :key="project.id"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :name="project.name"
                      :value="project.id"
                      :id="'estate-' + project.id"
                      :checked="project.checked"
                    />
                    <label
                      class="form-check-label"
                      :for="'estate-' + project.id"
                    >
                      {{ project.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-picker">
          <VueDatePicker
            v-model="Filters.Dates"
            range
            :enable-time-picker="false"
            :multi-calendars="{ solo: true }"
            auto-apply
            :min-date="MinDate"
            min-range="3"
            :placeholder="t('CheckInOut')"
          >
            <!-- <template #input-icon>
                            <img class="input-slot-image" src="/assets/icons/arrow-down.svg" />
                        </template> -->
          </VueDatePicker>
        </div>
        <div class="col-lg-3 sub-filters">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                {{ $t("MoreDetails") }}
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body sub">
                <div class="row">
                  <div
                    class="col-lg-2 sub-accordions mt-3"
                    v-for="(dto, index) in PropertyDTO"
                    :key="index"
                  >
                    <div>
                      <h2>
                        {{ dto.name }}
                      </h2>
                      <div
                        v-if="dto.propertyDetail"
                        class="sub-accordions-body"
                      >
                        <div
                          class="form-check"
                          v-for="property in dto.propertyDetail"
                          :key="property"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            :name="property.name"
                            :value="property.id"
                            :id="'p-' + property.id"
                          />
                          <label
                            class="form-check-label"
                            :for="'p-' + property.id"
                          >
                            {{ property.name }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1 apply-btn d-lg-block d-none">
          <div class="apply-side">
            <button
              @click="ApplyFilters()"
              class="btn w-100 apply"
              title="Apply Filters"
            >
              <img src="/assets/icons/find.svg" alt="find" />
            </button>
          </div>
        </div>
        <div class="col-lg-1 apply-btn d-lg-none d-lg-block">
          <div class="apply-side" @click="ApplyFilters()">
            <button class="btn w-100 apply" title="Apply Filters">
              <img src="/assets/icons/find.svg" alt="find" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ################## for mobile ####################-->
    <div
      class="accordion accordion-flush d-lg-none d-lg-block mobile-filters"
      id="accordionFlushExample"
    ></div>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const router = useRouter();
const { t } = useI18n();
// cookie for filters
const CookieFilters = useCookie("Filters");
const CookieInProgress = useCookie("InProgress");
const StateDestinations = useState("Destinations");

// emit
const emit = defineEmits([
  "EmitFilterDestination",
  "EmitTotalElements",
  "EmitCurrentPage",
]);

// filter ref values
CookieInProgress.value = false;
const TotalElements = ref(0);
const MinDate = new Date();
const Filters = ref({
  Dates: [],
  UnParsedDates: [],
});
const Cities = ref({});
const SelectedCity = ref({
  countryId: 225,
  fipsCode: "07",
  id: 2169,
  latitude: 37.0951672,
  longitude: 31.0793705,
  name: "Antalya",
});
const EstateType = ref({
  id: 1,
  name: "Residence",
});
const EstateProjects = ref([]);
const SubCities = ref([]);
const AllSubCities = ref([]);
// screen width
const ScreenWidth = ref(Number);
// properties and rooms
const Properties = ref({});
const PropertyDTO = ref({});
const RoomInfo = ref({});
const isOpen = ref(null);
//Show Mobile Filters
const ResponsiveItems = ref(false);

onMounted(async () => {
  ScreenWidth.value = HelperComposable().GetScreenWidth();
  ResponsiveItems.value = ScreenWidth.value > 996 ? true : false;
  await GetCityAndSubCities();
  await GetPropertiesAndRooms();
  await GetDestinationProjects();
  await CheckCookieFilters();
});

// apply filters
const ApplyFilters = async () => {
  ResponsiveItems.value = ScreenWidth.value < 996 ? false : true;
  CookieInProgress.value = true;
  // hide collapsed items
  let CollapsedItems = document.querySelectorAll(".accordion-collapse");
  CollapsedItems.forEach((el) => {
    if (el.classList.contains("show")) {
      el.classList.remove("show");
    }
  });
  let CheckIn = null;
  let CheckOut = null;
  // checkin - checkout dates format

  if (Filters.value.Dates) {
    CheckIn = HelperComposable().DateFormatter(Filters.value.Dates[0]);
    CheckOut = HelperComposable().DateFormatter(Filters.value.Dates[1]);
  } else {
    CheckIn = HelperComposable().DateFormatter(new Date());
    CheckOut = HelperComposable().DateFormatter(
      new Date().setDate(new Date().getDate() + 3)
    );
  }
  // if (Filters.value.Dates) {
  //   CheckIn = await HelperComposable().DateFormatter(Filters.value.Dates[0]);
  //   CheckOut = await HelperComposable().DateFormatter(Filters.value.Dates[1]);
  // }

  CookieFilters.value.Dates[0] = CheckIn;
  CookieFilters.value.Dates[1] = CheckOut;

  // checked which subcities in all
  AllSubCities.value = document.querySelectorAll(
    ".neighborhoods-side .form-check-input[type='checkbox']"
  );
  //console.log(AllSubCities);
  let CheckedItems = {
    ItemID: [],
    ItemName: [],
  };
  CheckedItems.ItemID = Array.from(AllSubCities.value)
    .filter((x) => x.checked == true)
    .map((checkbox) => checkbox.id);

  // CheckedItems.ItemName = Array.from(AllSubCities.value)
  // .filter((x) => x.checked == true)
  // .map((checkbox) => checkbox.name);

  if (CheckedItems) {
    CookieFilters.value.SubCities = CheckedItems;
    // console.log(CookieFilters.value);
  }
  // sub accordions
  const SubAccordionCheckboxes = document.querySelectorAll(
    '.sub-accordions input[type="checkbox"]'
  );
  let SubAccordionCheckedItems = {
    ItemID: [],
  };
  SubAccordionCheckedItems.ItemID = Array.from(SubAccordionCheckboxes)
    .filter((x) => x.checked == true)
    .map((checkbox) => checkbox.id);
  if (SubAccordionCheckedItems) {
    CookieFilters.value.DTO = SubAccordionCheckedItems;
  }
  // estate projects
  const EstateProjectsCheckboxes = document.querySelectorAll(
    '.estate-side input[type="checkbox"]'
  );
  let EstateProjectsCheckedItems = {
    ItemID: [],
  };
  EstateProjectsCheckedItems.ItemID = Array.from(EstateProjectsCheckboxes)
    .filter((x) => x.checked == true)
    .map((checkbox) => checkbox.id);
  if (EstateProjectsCheckedItems) {
    CookieFilters.value.Projects = EstateProjectsCheckedItems;
  }
  // console.log(CookieFilters.value);
  // current page
  if (CookieFilters.value.CurrentPage) {
    CookieFilters.value.CurrentPage = 0;
  }
  const FilteredData = await DestinationComposable().GetFilteredDestinations(
    CookieFilters.value
  );
  StateDestinations.value = FilteredData.data.content;
  TotalElements.value = FilteredData.data.totalElements;
  // set total elements count
  emit("EmitTotalElements", TotalElements.value);
  // set parent page destination data
  emit("EmitFilterDestination", StateDestinations.value);
  // set parent page pagination as 0
  emit("EmitCurrentPage", 0);
  await CheckCookieFilters();
  CookieInProgress.value = false;
};
// get destination projects
const GetDestinationProjects = async () => {
  EstateProjects.value = [
    {
      id: 7,
      name: "First Class",
    },
    {
      id: 3,
      name: "Glory Life",
    },
    {
      id: 6,
      name: "Sirius Town",
    },
    {
      id: 8,
      name: "Panaroma",
    },
  ];
};
// check cookie filters
const CheckCookieFilters = async () => {
  if (CookieFilters.value) {
    if (CookieFilters.value.City) {
      SelectedCity.value = CookieFilters.value.City;
    }
    if (CookieFilters.value.SubCities) {
      SubCities.value.forEach((checkbox) => {
        let x = CookieFilters.value.SubCities;
        const CookieSubCities = x.ItemID;
        if (CookieSubCities) {
          const subCityName = checkbox.id;
          const isChecked = CookieSubCities.includes(subCityName.toString());
          checkbox.checked = isChecked;
          //  console.log(SubCities.value);
        }
      });
    }
    //  console.log(CookieFilters.value);
    if (CookieFilters.value.DTO) {
      let CookieDTO = CookieFilters.value.DTO;
      if (CookieDTO.ItemID) {
        if (CookieDTO.ItemID.length > 0) {
          let CookieSubCheckbox = CookieFilters.value.DTO.ItemID;
          //console.log(CookieSubCheckbox);
          const SubAccordionCheckboxes = document.querySelectorAll(
            '.sub-accordions input[type="checkbox"]'
          );
          SubAccordionCheckboxes.forEach((subCheckbox) => {
            const subCheckboxID = subCheckbox.id;
            const isSubChecked =
              subCheckboxID &&
              CookieSubCheckbox.includes(subCheckboxID.toString());
            subCheckbox.checked = isSubChecked;
          });
        }
      }
    }
    //  estate projects
    if (CookieFilters.value.Projects) {
      let CookieProjects = CookieFilters.value.Projects;
      if (CookieProjects.ItemID) {
        if (CookieProjects.ItemID.length > 0) {
          let CookieEstateProjectsCheckbox =
            CookieFilters.value.Projects.ItemID;
          const EstateProjectsCheckboxes = document.querySelectorAll(
            '.estate-side input[type="checkbox"]'
          );
          EstateProjectsCheckboxes.forEach((projectCheckbox) => {
            const subCheckboxID = projectCheckbox.id;
            const isSubChecked =
              subCheckboxID &&
              CookieEstateProjectsCheckbox.includes(subCheckboxID.toString());
            projectCheckbox.checked = isSubChecked;
          });
        }
      }
    }

    if (CookieFilters.value.Dates) {
      Filters.value.Dates = CookieFilters.value.Dates;
    }
    const FilteredData = await DestinationComposable().GetFilteredDestinations(
      CookieFilters.value
    );
    StateDestinations.value = FilteredData.data.content;
    TotalElements.value = FilteredData.data.totalElements;
    // set total elements count
    emit("EmitTotalElements", TotalElements.value);
    // set parent page destination data
    emit("EmitFilterDestination", StateDestinations.value);
  } else {
    return router.push("/");
  }
};
// get city and subcities
const GetCityAndSubCities = async () => {
  const CityDesc = await DestinationComposable().GetCities();
  Cities.value = CityDesc.data;

  ///########### temporary static subcities for release #############///
  // const SubCityDesc = await DestinationComposable().GetSubCitiesByCity(); // will opened !
  // SubCities.value = SubCityDesc.data; // will opened !
  StaticAntalyaSubCities(); // will closed !
};
// get properties and rooms
const GetPropertiesAndRooms = async () => {
  const PropertiesRes = await DestinationComposable().GetPropertiesAndRooms();
  Properties.value = PropertiesRes.data;
  PropertyDTO.value = Properties.value.propertyDTO;
  RoomInfo.value = Properties.value.roomInfo;
  // console.log(PropertyDTO.value);
  // console.log(RoomInfo.value);
};
// static antalya locations
const StaticAntalyaSubCities = () => {
  const StaticSubCities = [
    {
      id: 1,
      name: "Kadriye",
      checked: false,
    },
    {
      id: 2,
      name: "Kundu",
      checked: false,
    },
    {
      id: 3,
      name: "Belek",
      checked: false,
    },
    {
      id: 4,
      name: "Boğazkent",
      checked: false,
    },
    {
      id: 5,
      name: "Kepez",
      checked: false,
    },
    {
      id: 6,
      name: "Konyaaltı",
      checked: false,
    },
    {
      id: 7,
      name: "Muratpaşa",
      checked: false,
    },
  ];
  SubCities.value = StaticSubCities;
};
// Show Mobile Filters
const ShowMobileFilters = async () => {
  ResponsiveItems.value = ResponsiveItems.value == true ? false : true;
  setTimeout(async () => {
    await CheckCookieFilters();
  }, 400);
};
watch(
  () => Filters.value.UnParsedDates,
  (checkin, checkout) => {
    CookieFilters.value.UnParsedDates = [
      checkin.toString(),
      checkout.toString(),
    ];
  }
);
watch(() => {
  Filters.value;
  SelectedCity.value;
  Cities.value;
  SubCities.value;
});
</script>

<style>
/* ########## sub accordions ############## */
.filters .row {
  margin-right: 10px;
}
.sub-accordions h2 {
  padding: 0 6px;
  font-size: 1.2em;
}
.sub-accordions .sub-accordions-body {
  height: 120px;
  overflow-y: auto;
  padding: 0 6px 4px 6px;
}
/* unused side */
.sub-accordions .accordion-button:not(.collapsed) {
  background-color: transparent;
  border: 1px solid #ececec;
  border-radius: 8px;
}
.sub-accordions .accordion-item {
  margin-top: 10px;
}
.sub-accordions .accordion-body {
  position: relative !important;
  width: 100% !important;
  border: 1px solid #ebebeb;
  z-index: 9999;
}
#flush-collapseThree .accordion-body {
  position: absolute;
  border: 1px solid #ebebeb;
  z-index: 9999;
  /* width: 550px; */
  width: 100%;
  left: 0;
  margin-top: 10px;
}

.filter-buttons button {
  background-color: transparent;
  border: 1px solid #0a58ca;
  padding: 4px 12px;
  border-radius: 6px;
}

.filters .accordion-button {
  height: 40px;
}

.filters {
  z-index: 9999;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
  padding: 15px 25px;
  border-radius: 12px;
  height: 60px;
}

.filters .container {
  position: absolute;
}

.filters .accordion-body {
  background-color: #fff;
  border: 1px solid #fff;
  /* border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px; */
  border-radius: 8px;
  /* padding: 15px 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  max-height: 350px;
  overflow-y: auto;
  position: absolute;
  width: auto;
  z-index: 99;
}

.filters .close {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 45px;
  height: 45px;
  left: -20px;
  top: -20px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #0a58ca;
  background-color: #fff;
}

.filters #min-price,
.filters #max-price {
  border: 1px solid #0a57ca2f;
  border-radius: 12px;
  margin: 4px 0;
  padding: 8px 22px;
  width: 100%;
}

.filters select {
  background-color: transparent;
  border: 1px solid #0a57ca2f;
  border-radius: 8px;
  padding: 8px 12px;
}

.filters .col {
  margin-top: 8px;
}

.filters label {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
}

.filters .accordion-button {
  border: 2px solid #ebebeb;
  border-radius: 8px !important;
  color: rgba(0, 0, 0, 0.7);
}

.accordion-button:not(.collapsed) {
  background-color: transparent;
  border: 2px solid #3493b9;
  border-radius: 8px;
}

.accordion-button:focus {
  z-index: 3;
  outline: 0;
  box-shadow: none;
}

.filters .form-check-input:checked {
  background-color: #3493b9;
}

.accordion-body-1 input {
  margin: 0;
  border-radius: 6px;
  border: 1px solid #a7a5a5;
  padding: 8px 22px;
  width: 100%;
}

.accordion-body input:focus-visible {
  /* border: 1px solid #a7a5a5; */
  border: 1px solid #a7a5a5;
  outline: none;
  box-shadow: 0px;
}

.filters .btn {
  border: 2px solid #ebebeb;
  height: 40px;
  color: #fff;
}

.filters .apply {
  width: 55px !important;
  height: 40px;
}

.filters .btn img {
  height: 80%;
  margin-top: -3px;
}
.filters .m-col {
  padding: 0;
  margin-right: 6px;
  width: 135px;
}
.filters .d-picker {
  padding: 0;
  margin-right: 6px;
  width: 260px;
}
.filters .sub-filters {
  padding: 0;
  margin-right: 6px;
  width: 180px;
}
.filters .city select,
.filters .estate select {
  width: 100%;
  height: 40px;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid #ebebeb;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("/assets/icons/arrow-down.svg");
  background-repeat: no-repeat;
  background-position: right 8px center;
}
.filters select option {
  background-color: #fff;
}
.filters .city select:focus {
  border: 2px solid #3493b9;
  transform: 180px;
}

.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-right: -10px;
  content: "";
  background-image: url("/assets/icons/arrow-down.svg");
  background-repeat: no-repeat;
  background-size: 26px;
  transition: var(--bs-accordion-btn-icon-transition);
}

.accordion-button:not(.collapsed)::after {
  background-image: url("/assets/icons/arrow-down.svg");
  transform: var(--bs-accordion-btn-icon-transform);
}

/* .dp__pointer,
.dp__input_readonly.dp__input, */
.dp__input_icon_pad {
  font-family: TTCommons;
  height: 40px !important;
  border: 2px solid #ebebeb;
  border-radius: 8px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.7);
}

.dp__input_icon_pad::placeholder {
  color: #000;
}

.dp__input_icon_pad:hover {
  border: 2px solid #ebebeb;
}

.dp__input_icon_pad:visited {
  border: 2px solid #3493b9;
}

.dp__input_icon {
  position: absolute;
  display: block;
  right: 0;
  top: 50%;
}
.filters .apply-side {
  text-align: left;
}
@media (max-width: 996px) {
  .filters {
    height: auto;
    padding: 0;
  }
  .filters .row {
    margin-right: calc(-0.5 * var(--bs-gutter-x));
  }
  .filters .m-col {
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 6px;
  }
  .filters .m-col .accordion-body {
    width: 100%;
  }
  .filters .sub-filters {
    padding: 0;
    margin-right: 6px;
    width: 100%;
    margin-top: 6px;
  }
  .filters .container-fluid {
    padding-left: 25px;
  }
  .filters .apply-side {
    padding: 0;
    border-radius: 6px;
    text-align: center;
    background-color: #dfdfdf48;
    cursor: pointer;
  }
  .filters .d-picker {
    width: 100%;
    padding: 0;
    margin-right: 0;
    margin-top: 6px;
  }
  .filters .apply-btn {
    padding: 0;
    margin-top: 6px;
  }
  .filters .btn {
    border: none;
  }
  .filters .apply {
    margin-top: 0;
  }
  .m-filter-btn {
    background-color: #214280;
    border: 2px solid #ebebeb;
    border-radius: 6px;
    width: 100%;
    padding: 8px 6px;
    color: #fff;
    letter-spacing: 0.5px;
  }
  .mobile-filters {
    padding: 8px 15px !important;
  }
}
</style>
