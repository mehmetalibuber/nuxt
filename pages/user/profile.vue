<template>
  <Head>
    <Title>{{ $t("Profile") }} - Geccele</Title>
    <Meta name="description" content="Login"> </Meta>
  </Head>
  <section class="profile-section">
    <div class="container">
      <div class="d-flex align-items-start row">
        <!-- ################## tab buttons ################# -->
        <div
          class="nav flex-column nav-pills col-xl-3 px-0"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div class="nav-link">
            <span class="welcome"> {{ $t("Welcome") }}! </span>
            <br />
            <span v-if="GuestInfos.name">
              <b> {{ GuestInfos.name }} </b>
            </span>
          </div>
          <button
            class="nav-link active d-flex justify-content-between"
            id="v-pills-user-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-user"
            type="button"
            role="tab"
            aria-controls="v-pills-user"
            aria-selected="true"
            :title="$t('PersonalInformations')"
          >
            <div class="circle"></div>
            <div class="text-left">{{ $t("PersonalInformations") }}</div>
            <div>
              <span>
                <img src="/assets/icons/right-arrow.png" alt="arrow-right" />
              </span>
            </div>
          </button>
          <button
            class="nav-link d-flex justify-content-between"
            id="v-pills-favorites-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-favorites"
            type="button"
            role="tab"
            aria-controls="v-pills-favorites"
            aria-selected="false"
          >
            <div class="circle"></div>
            <div class="text-left">
              {{ $t("Favorites") }}
            </div>
            <div>
              <span>
                <img src="/assets/icons/right-arrow.png" alt="arrow-right" />
              </span>
            </div>
          </button>
          <button
            class="nav-link d-flex justify-content-between"
            id="v-pills-coupons-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-coupons"
            type="button"
            role="tab"
            aria-controls="v-pills-coupons"
            aria-selected="false"
          >
            <div class="circle"></div>
            <div class="text-left">
              {{ $t("Coupons") }}
            </div>
            <div>
              <span>
                <img src="/assets/icons/right-arrow.png" alt="arrow-right" />
              </span>
            </div>
          </button>
          <button
            class="nav-link d-flex justify-content-between"
            id="v-pills-reservations-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-reservations"
            type="button"
            role="tab"
            aria-controls="v-pills-reservations"
            aria-selected="false"
          >
            <div class="circle"></div>
            <div class="text-left">{{ $t("Reservations") }}</div>
            <div>
              <span>
                <img src="/assets/icons/right-arrow.png" alt="arrow-right" />
              </span>
            </div>
          </button>
          <button
            class="d-flex justify-content-between sign-out-btn"
            @click="SignOut()"
          >
            <div class="sign-out">
              <img src="/assets/icons/logout.png" alt="sign out" />
            </div>
            <div class="text-left">{{ $t("SignOut") }}</div>
            <div>
              <!-- <span> &#62; </span> -->
            </div>
          </button>
        </div>
        <!-- ################## tab content ################# -->
        <div class="tab-content col-xl-9" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-user"
            role="tabpanel"
            aria-labelledby="v-pills-user-tab"
          >
            <h2>
              {{ $t("PersonalInformations") }}
            </h2>
            <form v-if="GuestInfos">
              <div class="row">
                <div class="col-lg-6" v-if="GuestInfos.name">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="name">{{
                      $t("Name")
                    }}</label>
                    <input
                      type="text"
                      id="name"
                      class="form-control form-control-lg"
                      :placeholder="$t('Name')"
                      maxlength="28"
                      v-model="GuestInfos.name"
                      readonly
                    />
                  </div>
                </div>
                <div class="col-lg-6" v-if="GuestInfos.surname">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="surname">{{
                      $t("Surname")
                    }}</label>
                    <input
                      type="text"
                      id="surname"
                      required
                      class="form-control form-control-lg"
                      :placeholder="$t('Surname')"
                      v-model="GuestInfos.surname"
                      readonly
                    />
                  </div>
                </div>
                <div class="col-lg-6" v-if="GuestInfos.email">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="email">{{
                      $t("EmailAddress")
                    }}</label>
                    <input
                      type="email"
                      id="email"
                      required
                      class="form-control form-control-lg"
                      :placeholder="$t('EmailAddress')"
                      v-model="GuestInfos.email"
                      readonly
                    />
                  </div>
                </div>
                <div class="col-lg-6" v-if="GuestInfos.phone">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="tel">{{
                      $t("PhoneNumber")
                    }}</label>
                    <input
                      type="tel"
                      id="tel"
                      required
                      maxlength="24"
                      class="form-control form-control-lg"
                      :placeholder="$t('PhoneNumber')"
                      v-model="GuestInfos.phone"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <!-- <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  disabled
                >
                  {{ $t("Update") }}
                </button>
              </div> -->
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-favorites"
            role="tabpanel"
            aria-labelledby="v-pills-favorites-tab"
          >
            <h2>
              {{ $t("Favorites") }}
            </h2>
            {{ $t("EmptyFavorites") }}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-coupons"
            role="tabpanel"
            aria-labelledby="v-pills-coupons-tab"
          >
            <h2>
              {{ $t("Coupons") }}
            </h2>
            <div class="row" v-if="UserCoupons">
              <div class="col-lg-3" v-for="coupon in UserCoupons" :key="coupon">
                <div v-if="!coupon.usage">
                  <input
                    type="text"
                    name=""
                    :value="coupon.code"
                    class="form-control form-control-lg"
                    readonly
                  />
                </div>
                <div v-else>
                  <input
                    type="text"
                    name=""
                    :value="coupon.code"
                    class="form-control form-control-lg"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div v-else>
              {{ $t("EmptyCoupons") }}
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-reservations"
            role="tabpanel"
            aria-labelledby="v-pills-reservations-tab"
          >
            <h2>
              {{ $t("Reservations") }}
            </h2>
            <div class="reservations" v-if="UserReservations.length > 0">
              <details v-for="(res, index) in UserReservations" :key="index">
                <summary>
                  {{ index + 1 }}: &nbsp; {{ res.estate.code }}&nbsp;- &nbsp;{{
                    res.estate.address.neighbourhood
                  }}/{{ res.estate.address.subCity }}/{{
                    res.estate.address.city
                  }}
                </summary>
                <div class="row">
                  <div class="col-lg-3">
                    <label for="">{{ $t("Name") }}:</label>
                    <p>{{ res.user.fullName }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("PhoneNumber") }}:</label>
                    <p>{{ res.phone }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("CheckIn") }}:</label>
                    <p>{{ FormatDate(res.startDate) }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("CheckOut") }}:</label>
                    <p>
                      {{ FormatDate(res.endDate) }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3">
                    <label for="">{{ $t("ReservationCode") }}:</label>
                    <p>{{ res.resCode }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("CreatedDate") }}:</label>
                    <p>{{ FormatDate(res.createdDate) }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("Adult") }}:</label>
                    <p>{{ res.adultCount }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("Child") }}:</label>
                    <p>{{ res.childCount }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3">
                    <label for="">{{ $t("CleaningFee") }}:</label>
                    <p>
                      {{
                        Number(
                          (res.cleaningFee * 36.5533).toFixed(2)
                        ).toLocaleString("tr-TR")
                      }}
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("CommissionFee") }}:</label>
                    <p>
                      {{
                        Number(
                          (res.commissionFee * 36.5533).toFixed(2)
                        ).toLocaleString("tr-TR")
                      }}
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("AccommodationFee") }}:</label>
                    <p>
                      {{
                        Number(
                          (res.totalAccommodationFee * 36.5533).toFixed(2)
                        ).toLocaleString("tr-TR")
                      }}
                    </p>
                  </div>
                  <div class="col-lg-3">
                    <label for=""
                      >{{ $t("Total") }}&nbsp;{{ $t("Price") }}:</label
                    >
                    <p>
                      {{
                        Number(
                          (res.totalAmount * 36.5533).toFixed(2)
                        ).toLocaleString("tr-TR")
                      }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3">
                    <!-- <button @click="SeeOnMap(res.estate.address)">
                      {{ $t("SeeOnMap") }}
                    </button> -->
                    <div class="maps-side">
                      <figure
                        @click="TakeDirections(res.estate.address)"
                        :title="$t('TakeDirections')"
                      >
                        <img
                          class="img-thumbnail"
                          src="/assets/detail-maps.png"
                          alt="google map"
                        />
                        <figcaption>
                          {{ $t("TakeDirections") }}&nbsp;/&nbsp;Google
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <label for="">{{ $t("Location") }}:</label>
                    <p>{{ res.estate.address.detail }}</p>
                  </div>
                  <div class="col-lg-3">
                    <label for="">{{ $t("Status") }}:</label>
                    <p
                      v-if="res.reservationStatusType === 0"
                      class="text-warning"
                    >
                      {{ $t("Pending") }}
                    </p>
                    <p
                      v-if="res.reservationStatusType === 1"
                      class="text-success"
                    >
                      {{ $t("Approved") }}
                    </p>
                    <p
                      v-if="res.reservationStatusType === 2"
                      class="text-danger"
                    >
                      {{ $t("Cancelled") }}
                    </p>
                  </div>
                </div>
                <div
                  class="row make-payment"
                  v-if="res.paymentURL && res.reservationStatusType === 0"
                >
                  <div class="col-lg-3">
                    <a
                      :href="res.paymentURL"
                      :title="$t('MakePayment')"
                      target="_blank"
                      >{{ $t("MakePayment") }}</a
                    >
                  </div>
                </div>
              </details>
            </div>
            <div v-else>
              {{ $t("EmptyReservations") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const User = useCookie("User");

// set layout
definePageMeta({
  layout: "authentication",
  middleware: "auth",
});
// config file
import config from "~/config.js";
// localization for route
const LocalePath = useLocalePath();
// cookie user
const CookieUser = useCookie("User");
// router
const Router = useRouter();
// user reservations
const UserReservations = ref({});
// user coupons
const UserCoupons = ref(null);
// Guest Info
const GuestInfos = ref({});
onMounted(async () => {
  // get user informations
  await GetUserInformations();
  // get reservations
  await GetUserReservations();
  // get coupons
  await GetUserCoupons();
});
// get user informations
const GetUserInformations = async () => {
  const UserData = await AuthComposable().GetUserInformations();
  if (UserData) {
    if (UserData.data) {
      GuestInfos.value = UserData.data;
    }
  }
  // console.log(GuestInfos.value);
};
// get user reservation
const GetUserReservations = async () => {
  const ResData = await AuthComposable().GetUserReservations();
  if (ResData) {
    if (ResData.data) {
      UserReservations.value = ResData.data;
    }
  }
  // console.log(UserReservations.value);
};
// date formatter
const FormatDate = (date) => {
  const FormattedDate = HelperComposable().DateFormatter(date);
  return FormattedDate;
};
// set cookie for coordinates
const TakeDirections = (address) => {
  const DirectionUrl = config.GOOGLE_DIRECTION_URL;
  const lat = address.latitude;
  const lng = address.longitude;
  const url = `${DirectionUrl}${lat},${lng}`;
  window.open(url, "_blank");
};
// get user Coupons
const GetUserCoupons = async () => {
  const CouponsData = await AuthComposable().GetUserCoupons();
  if (CouponsData) {
    if (CouponsData.data) {
      if (CouponsData.data.content.length > 0) {
        UserCoupons.value = CouponsData.data.content;
        // console.log(UserCoupons.value);
      }
    }
  }
};
// sign out
const SignOut = () => {
  if (window.confirm(t("DoYouConfirmTheLogout")) === true) {
    localStorage.removeItem("AccessToken");
    User.value = null;
    Router.push(LocalePath("/?isAuthenticate=false"));
  }
};
</script>

<style scoped>
.profile-section {
  margin: 2% auto;
}
.profile-section .nav-link {
  background-color: transparent;
  text-align: left;
  border-bottom: 1px solid #cbcbcb;
  border-radius: 0;
  color: rgba(0, 0, 0, 0.8);
  padding: 10px 50px;
}
.profile-section #v-pills-reservations-tab {
  border-radius: 6px;
}
.profile-section .nav-link.active {
  color: #214280;
}
.profile-section .nav-link.active .circle {
  background-color: #214280;
  border: 1px solid #214280;
}
.profile-section .nav-link img {
  width: 8px;
}
.profile-section .circle {
  width: 20px;
  height: 20px;
  border: 1px solid #cbcbcb;
  border-radius: 50%;
  align-self: center;
  transition: 0.4s ease all;
}
.profile-section .nav-pills {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  border: 1px solid #cbcbcb;
  border-bottom: none;
  border-radius: 6px;
}
.profile-section .nav-pills .sign-out img {
  width: 20px;
  opacity: 0.5;
}
.profile-section .nav-pills .text-left {
  width: 160px;
  padding-left: 20px;
}
.profile-section input {
  font-size: 1em;
}
.profile-section input::placeholder {
  font-size: 14px;
  color: #808080;
}
.profile-section #v-pills-coupons input {
  margin-top: 4px;
}
.profile-section label {
  margin-bottom: 2px;
  font-size: 16px;
}
.profile-section button.btn {
  background-color: #b24693;
  color: #fff;
  transition: 0.4s all ease;
  font-size: 16px;
}
.profile-section button.btn:hover {
  background-color: #b24693;
  color: #fff;
  transform: translateY(-3px);
}
.profile-section .welcome {
  font-size: 14px;
}
/* ########### reservations############### */
.reservations label {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}
.reservations p {
  margin-bottom: 4px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
}
.reservations .row:not(:last-child) {
  border-bottom: 1px solid #ebebeb;
}
.reservations summary {
  font-size: 1.1em;
}
.reservations details {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  padding: 15px;
  margin: 15px auto;
  border: 1px solid #ebebeba2;
  border-radius: 6px;
}

.tab-content {
  padding: 0 25px;
}

.tab-content .tab-pane {
  border: 1px solid #cbcbcb;
  padding: 15px 25px;
  border-radius: 6px;
  min-height: 60vh;
}
.tab-content .tab-pane h2 {
  font-size: 1.5em;
  margin-bottom: 25px;
  font-weight: 600;
}
/* maps modal */
.reservations .maps-side figure {
  margin: 10px 0;
  cursor: pointer;
}

.reservations .maps-side img {
  height: 50px;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  padding: 0;
}
.reservations .maps-side figcaption {
  margin-top: -38px;
  margin-left: 20px;
  background-color: #6e9bd4;
  position: absolute;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
}
.reservations .make-payment {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.reservations .make-payment a {
  display: block;
  position: relative;
  margin-top: 12px;
  background-color: #6e9bd4;
  color: #fff;
  width: max-content;
  padding: 4px 10px;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
}
/* ################ sign out ################## */
.sign-out-btn {
  display: block;
  position: absolute;
  margin-top: 290px;
  border: 1px solid #cbcbcb;
  background-color: transparent;
  text-align: left;
  border-radius: 0;
  color: rgba(0, 0, 0, 0.8);
  padding: 10px 50px;
  min-width: 328px;
  border-radius: 6px;
}
@media (max-width: 1400px) {
  .sign-out-btn {
    display: block;
    position: relative;
    margin-top: 0px;
    border: none;
    background-color: transparent;
    text-align: left;
    border-radius: 0;
    color: rgba(0, 0, 0, 0.8);
    padding: 10px 50px;
    border-radius: 6px;
    width: 100%;
  }
  .profile-section .nav-pills {
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    border: 1px solid #cbcbcb;
    border-bottom: 1px solid #cbcbcb;
    border-radius: 6px;
    overflow: hidden;
  }
}
@media (max-width: 1200px) {
  .profile-section .row {
    padding: 6px;
  }
  .tab-content {
    margin-top: 15px;
    padding: 0;
  }
  .tab-content .tab-pane {
    padding: 8px 15px;
  }
  .sign-out-btn {
    display: block;
    position: relative;
    margin-top: 0px;
    border: none;
    background-color: transparent;
    text-align: left;
    border-radius: 0;
    color: rgba(0, 0, 0, 0.8);
    padding: 10px 50px;
    border-radius: 6px;
    width: 100%;
  }
}
@media (max-width: 996px) {
  .profile-section .nav-link:last-child {
    border-bottom: 1px solid #cbcbcb;
  }
}
</style>
