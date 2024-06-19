<template>
  <Head>
    <Title>{{ PageTitle }}</Title>
    <Meta name="keywords" content="geccele"> </Meta>
    <Meta name="description" content="geccele"> </Meta>
  </Head>
  <div class="container-fluid mb-5 p-0 detail-section">
    <div v-if="InProgress">
      <Loading />
    </div>
    <div v-else>
      <div class="detail-slider">
        <div v-if="Details.media.length > 0">
          <vueper-slides
            class="no-shadow"
            :visible-slides="2"
            :slide-multiple="false"
            :slide-ratio="1 / 3"
            :gap="1"
            :arrows-outside="false"
            :dragging-distance="70"
            :lazyLoadOnDrag="true"
            :fractions="true"
            :bullets="false"
            :breakpoints="{
              700: { visibleSlides: 1 },
            }"
          >
            <vueper-slide
              v-for="(slide, i) in Details.media"
              :key="i"
              :image="ImageFilePrefix + slide.url"
            />
          </vueper-slides>
        </div>
      </div>
      <button
        class="d-none d-lg-block gallery-btn"
        @click="OpenGallery(0)"
        title="Tam Ekran"
      >
        &#x2629;
      </button>

      <div class="container py-3" v-if="ScreenWidth < 996">
        <div class="col-md-12 check-availability-section">
          <CheckAvailability :EstateID="EstateID" />
        </div>
      </div>
      <!-- detail infos -->
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-8">
            <div class="top-details">
              <h1>{{ Details.name }} <br /></h1>
              <p>{{ Details.description }} <br /></p>
            </div>
          </div>
          <div
            class="col-lg-4 check-availability-section"
            v-if="ScreenWidth > 996"
          >
            <CheckAvailability :EstateID="EstateID" />
          </div>
        </div>
        <!-- general infos -->
        <div class="row general-infos mt-5">
          <div class="col-lg-8">
            <!-- <div>
            <h2>Guest Rate</h2>
            <p>{{ Details.rating }}</p>
          </div> -->
            <div class="estate-infos">
              <div class="d-block">
                <span v-if="Details.squareMeters" class="square-meter">
                  {{ $t("RoomSquareMeters") }}:
                  <b>{{ Details.squareMeters }} </b>
                </span>
                &nbsp;
                <span v-if="Details.numberOfPeople" class="square-meter">
                  {{ $t("MaxGuest") }}:
                  <b>{{ Details.numberOfPeople }} </b>
                </span>
              </div>
              <div class="boxes">
                <div class="row">
                  <div
                    class="col-lg-2"
                    v-for="roomInfo in Details.estateRoomInfos"
                    :key="roomInfo.id"
                  >
                    <div class="col text-center">
                      <figure>
                        <img
                          v-if="roomInfo.roomInfoId == 1"
                          src="/assets/icons/bed.svg"
                          alt="bed"
                        />
                        <img
                          v-if="roomInfo.roomInfoId == 2"
                          src="/assets/icons/bath.svg"
                          alt="bath"
                        />
                        <img
                          v-if="roomInfo.roomInfoId == 3"
                          src="/assets/icons/wc.svg"
                          alt="wc"
                        />
                      </figure>
                      <span>
                        {{ roomInfo.name }}:&nbsp;{{ roomInfo.value }}
                      </span>
                    </div>
                  </div>
                  <!-- <div class="col-lg-1">
                    <div class="col text-center">
                      <figure>
                        <img src="/assets/icons/bath.svg" alt="bed" />
                      </figure>
                      <span> 1 Bath </span>
                    </div>
                  </div> -->
                  <!-- <div class="col-lg-1">
                    <div class="col text-center">
                      <figure>
                        <img src="/assets/icons/wc.svg" alt="bed" />
                      </figure>
                      <span> 1 Wc </span>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
            <div v-if="Details.property.length > 0">
              <h2 class="mt-5">{{ $t("AllFeatures") }}</h2>
              <div class="detail-features">
                <div v-for="detail in Details.property" :key="detail">
                  {{ detail.name }}
                  <br />
                  <span v-for="info in detail.propertyDetail" :key="info.id">
                    &check; {{ info.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="maps-side">
              <figure
                data-bs-toggle="modal"
                data-bs-target="#google-maps-modal"
                :title="$t('SeeOnMap')"
              >
                <img
                  class="img-thumbnail"
                  src="/assets/detail-maps.png"
                  alt="map"
                />
                <figcaption>{{ $t("SeeOnMap") }}</figcaption>
              </figure>
              <p>{{ Address.detail }}</p>
              <p>
                {{ District }} / {{ City }} /
                {{ Country }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- similar destinations -->
      <SimilarDestinations />
    </div>
  </div>
  <!-- map modal -->
  <div
    class="modal fade"
    id="google-maps-modal"
    tabindex="-1"
    aria-labelledby="google-maps-modal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="google-maps-modal-label">
            {{ Details.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            :title="$t('Close')"
          ></button>
        </div>
        <div class="modal-body">
          <Google-Maps-Marker />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            :title="$t('Close')"
          >
            {{ $t("Close") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- slider gallery -->
  <VueEasyLightbox
    :visible="ShowGallery"
    :imgs="ImagesGalleryURL"
    :index="CurrentIndex"
    @hide="ShowGallery = false"
  />
</template>

<script setup>
// // disable page payload.json
// defineRouteRules({
//   prerender: false,
// });
definePageMeta({
  layout: "default",
  middleware: "auth",
});
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import VueEasyLightbox from "vue-easy-lightbox";
//import config from "../config";
const route = useRoute();
const router = useRouter();
const LocalePath = useLocalePath();
const RuntimeConfig = useRuntimeConfig();
const CookieFilters = useCookie("Filters");
const CookieCoordinates = useCookie("Coordinates");
const EstateInfo = useState("EstateInfo");
const EstateID = useCookie("EstateID");

// page title
const PageTitle = ref("Geccele");
const InProgress = ref(true);
// destination detail
let Details = ref({});
let Address = ref({});
let District = ref({});
let City = ref({});
let Country = ref({});
//route
let RouteID = ref();
const ImageFilePrefix = ref("");
// screen width
const ScreenWidth = ref(Number);
// gallery index
const CurrentIndex = ref(0);
//show gallery
const ShowGallery = ref(false);

onMounted(async () => {
  const CRMHost = RuntimeConfig.public.CRM_HOST;
  //console.log(CRMHost);
  ImageFilePrefix.value = `${CRMHost}/files/IMAGE/`;
  ScreenWidth.value = HelperComposable().GetScreenWidth();
  // get data of selected destination
  RouteID.value = route.path.split("/").pop() || "";

  // check cookie
  if (CookieFilters.value) {
    const DesData = await GetDestinationByID(
      RouteID.value,
      CookieFilters.value.Dates
    );
    if (DesData) {
      if (DesData.data) {
        Details.value = DesData.data;
        SetEstateInfo();
      } else {
        // router.push(LocalePath("/error"));
        const DesData = await GetDestinationByIDAsBasic(RouteID.value);
        if (!DesData.data) {
          return router.push(LocalePath("/error"));
        }
        Details.value = DesData.data;
        SetEstateInfo();
      }
    } else {
      return router.push(LocalePath("/error"));
    }
  } else {
    if (!CookieFilters.value) {
      CookieFilters.value = {
        Dates: [],
      };
    }
    const DefaultCheckIn = HelperComposable().DateFormatter(new Date());
    const DefaultCheckOut = HelperComposable().DateFormatter(
      new Date().setDate(new Date().getDate() + 3)
    );
    CookieFilters.value.Dates[0] = DefaultCheckIn;
    CookieFilters.value.Dates[1] = DefaultCheckOut;
    router.go();
  }
});

// set estate info
const SetEstateInfo = () => {
  Address.value = Details.value.address;
  District.value = Address.value.subCity;
  City.value = Address.value.city;
  Country.value = Address.value.country;
  PageTitle.value = Details.value.name;
  InProgress.value = false;
  // set cookie for coordinates
  let FilteredCoordinates = {
    latitude: null,
    longitude: null,
  };
  FilteredCoordinates.latitude = Address.value.latitude;
  FilteredCoordinates.longitude = Address.value.longitude;
  CookieCoordinates.value = FilteredCoordinates;
  EstateInfo.value = Details.value;
  EstateID.value = Details.value.id;
};

// slider gallery
const OpenGallery = (index) => {
  CurrentIndex.value = index;
  ShowGallery.value = true;
};

// set gallery url
const ImagesGalleryURL = computed(() => {
  return Details.value.media
    ? Details.value.media.map((slide) => ImageFilePrefix.value + slide.url)
    : [];
});

async function MakeReservation() {
  EstateInfo.value = Details.value;
  EstateID.value = RouteID.value;
  router.push("/reservation");
}

watch(() => {
  Details.value;
  Address.value;
});
// Get destinations from CRM API according to destination ID
const GetDestinationByID = async (id, dates) => {
  let RawData = null;
  let CheckIn = dates[0];
  let CheckOut = dates[1];
  const AxiosResponse = await axiosConfig.get(
    `${CRMHost}/estates/${id}?webSite=${CrmWebsite}&endDate=${CheckOut}&startDate=${CheckIn}`
  );

  if (AxiosResponse.message) {
    RawData = AxiosResponse.message;
    return RawData;
  }
  if (AxiosResponse.data) {
    RawData = AxiosResponse.data;
    return RawData;
  } else {
    return AxiosResponse;
  }
};
// Get destinations from CRM API according to destination ID as basic
const GetDestinationByIDAsBasic = async (id) => {
  let RawData = null;
  let AxiosResponse = null;
  AxiosResponse = await axiosConfig.get(
    `${CRMHost}/estates/${id}?webSite=${CrmWebsite}`
  );

  if (AxiosResponse.message) {
    RawData = AxiosResponse.message;
    return RawData;
  }
  if (AxiosResponse.data) {
    RawData = AxiosResponse.data;
    return RawData;
  } else {
    return AxiosResponse;
  }
};
</script>

<style>
@font-face {
  font-family: "TTCommonsThin";
  src: local("TTCommons"), url("../fonts/TTCommons-Thin.otf") format("opentype");
}
@font-face {
  font-family: "TTCommonsMedium";
  src: local("TTCommons"),
    url("../fonts/TTCommons-Medium.otf") format("opentype");
}
/* gallery */
.vel-modal {
  background: rgba(0, 0, 0, 0.7) !important;
}
.gallery-btn {
  position: absolute;
  right: 0;
  background-color: #fff;
  color: #0000006c;
  border: none;
  margin-top: -45px;
  z-index: 999;
  border-top-left-radius: 8px;
  width: 45px;
  height: 45px;
  font-size: 1.4em;
  padding: 0;
  transition: 0.4s ease all;
}
.gallery-btn:hover {
  color: #000;
}
/* gallery */
.top-details {
  padding-right: 80px;
}
.top-details p {
  font-size: 16px;
  opacity: 0.65;
  text-align: justify;
  font-family: "TTCommonsThin";
}
.top-details h1 {
  font-size: 1.8em;
  font-family: "TTCommonsMedium";
  opacity: 0.75;
  line-height: 35px;
}
.detail-section .estate-infos .boxes {
  margin-top: 25px;
}
.detail-section .estate-infos .boxes .col-lg-2 {
  border-left: 1px solid #ebebeb;
  margin-left: 13px;
}
.detail-section .estate-infos .boxes img {
  width: 26px;
  height: 26px;
  object-fit: cover;
}

.detail-section .estate-infos .boxes span {
  font-size: 12px;
}

.detail-section .square-meter {
  background-color: #33a776;
  color: #fff;
  padding: 6px 10px;
  border-radius: 8px;
}

.detail-section h1 {
  font-size: 2em;
}

.detail-section .details-slider {
  height: 350px;
  object-fit: cover;
}

.detail-section .vueperslides__arrow .left::before {
  font-size: 3em;
  content: "<";
}

.detail-section .vueperslides__arrow .right::before {
  font-size: 3em;
  content: ">";
}

.detail-section .details-slider .vueperslides__parallax-wrapper {
  /* border-radius: 16px; */
}

/* detail slider */
.detail-section .detail-slider .vueperslides__arrow {
  opacity: 1;
}

.detail-section .detail-slider .vueperslides__arrow svg {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  display: block;
  position: relative;
  background-color: #fff;
  border: 1px solid #fff;
  color: #000;
  width: 40px;
  height: 40px;
  opacity: 1 !important;
  padding: 10px;
  border-radius: 50%;
}

.detail-section .detail-slider .vueperslides__fractions {
  background-color: #fff;
  color: #000;
}

/* detail-navs */
.detail-navs ul {
  margin-top: 12px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.detail-section .detail-navs ul li {
  list-style: none;
  margin-right: 15px;
}

.detail-section .detail-navs ul li a {
  color: #4c84ca;
  text-decoration: none;
}

/* detail maps */
.detail-section .detail-features {
  display: flex;
  flex-direction: column;
}

.detail-section .detail-features p {
  margin-right: 10px;
}
.detail-section .detail-features div {
  margin-top: 15px;
  color: #4c84ca;
}
.detail-section .detail-features span {
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.6);
}
.detail-section .maps-side figure {
  margin-bottom: 6px;
  cursor: pointer;
}

.detail-section .maps-side img {
  height: 120px;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  padding: 0;
}

.detail-section .maps-side figcaption {
  margin-top: -50px;
  margin-left: 20px;
  background-color: #6e9bd4;
  position: absolute;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  cursor: pointer;
}

.detail-section .maps-side p {
  margin-bottom: 4px;
}

.detail-section .general-infos {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 25px 10px;
  border-radius: 12px;
}

.detail-section .general-infos h2 {
  font-size: 20px;
  font-weight: 600;
  color: #6e9bd4;
}

/* Rooms */
.detail-section .card {
  margin: 10px 0;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.detail-section .card-title {
  font-size: 16px;
  font-weight: 600;
  color: #3e3d3d;
}

.detail-section .btn {
  background-color: #b24693;
  color: #fff;
  margin-top: 4px;
}

.detail-section .price {
  top: 25px;
  color: #33a776;
  font-weight: 600;
  font-size: 22px;
}

.detail-section .card .card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-section .features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.detail-section .features ul li {
  margin-right: 8px;
  color: #4c84ca;
  font-size: 14px;
  font-weight: 600;
}

.detail-section .room-detail-btn {
  color: #000;
  padding-top: 12px;
  cursor: pointer;
}

.check-availability-section {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: min-content;
}
/*################### responsive design #####################*/
@media (max-width: 996px) {
  .detail-slider .vueperslides__parallax-wrapper {
    height: 350px;
  }
  .top-details {
    padding-right: 0;
    margin-top: 15px;
  }
  .detail-section h1 {
    font-size: 1.6em;
  }
  .detail-section p {
    font-size: 1em;
    margin-bottom: 0;
  }
  .detail-section .estate-infos .boxes .col-lg-2 {
    width: max-content;
  }
  .maps-side {
    margin-top: 25px;
  }
  .detail-section .general-infos {
    padding: 45px 0;
  }
  .check-availability-section {
    border: 1px solid #ebebeb;
    border-radius: 8px;
    display: block;
    padding: 15px;
    height: 350px;
  }
}
</style>
