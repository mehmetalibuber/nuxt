<template>
  <Head>
    <title>{{ $t("ReservationInformations") }}</title>
  </Head>
  <section class="container">
    <div
      class="progress-container container d-flex justify-content-center mt-4"
    >
      <div
        v-for="(step, index) in Steps"
        :key="index"
        :class="{ step: true, active: ActiveStep === index }"
        @click="ChangeStep(index)"
      >
        <div class="">
          {{ index + 1 }}
        </div>
        <div>
          {{ $t(step) }}
        </div>
      </div>
    </div>
    <div class="payment-steps mt-4 mb-5">
      <div
        v-for="(stepContent, index) in StepContents"
        :key="index"
        class="step-content"
        v-show="ActiveStep === index"
      >
        <div v-if="index === 0">
          <div class="row">
            <div class="col-lg-8">
              <div class="res-card">
                <div class="row">
                  <div class="col-lg-3">
                    <figure>
                      <img
                        v-if="CoverPhotoObject.url"
                        :src="ImageFilePrefix + CoverPhotoObject.url"
                        :alt="CoverPhotoObject.name"
                        :title="CoverPhotoObject.name"
                        class="img-thumbnail"
                      />
                      <img
                        v-else
                        src="/assets/layout/404-not-found.png"
                        alt="not found"
                        title="not found"
                        class="img-thumbnail"
                      />
                    </figure>
                  </div>
                  <div class="col-lg-9">
                    <div class="desc-top">
                      <h2>
                        {{ Destination.name }}
                      </h2>
                      <div class="d-block">
                        <span
                          v-if="Destination.squareMeters"
                          class="square-meter"
                        >
                          {{ $t("RoomSquareMeters") }}:
                          <b>{{ Destination.squareMeters }} </b>
                        </span>
                        &nbsp; - &nbsp;
                        <span
                          v-if="Destination.numberOfPeople"
                          class="square-meter"
                        >
                          {{ $t("MaxGuest") }}:
                          <b>{{ Destination.numberOfPeople }} </b>
                        </span>
                      </div>
                      <div class="col">
                        <p>{{ Destination.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 guest-left">
                  <div class="row">
                    <small class="guest-left-warning">
                      * Bu mülk için eklenebilir misafir sayısı
                      {{ UserGuestsCapacity }} ve en az 1 sorumlu kişi
                      seçilmelidir.
                    </small>
                  </div>
                  <div>
                    <div class="row my-3">
                      <span
                        class="opacity-75 text-decoration-underline"
                        :title="$t('UseMemberInformations')"
                        @click="UseMemberInformations()"
                        style="cursor: pointer"
                      >
                        {{ $t("UseMemberInformations") }}
                      </span>
                    </div>
                    <form>
                      <div class="row">
                        <h2>İletişim Bilgileri</h2>
                      </div>
                      <div class="row mt-2">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label for="email"
                              >{{ $t("EmailAddress") }}(*)</label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              required
                              :placeholder="$t('EmailAddress')"
                              v-model="GuestEmailAddress"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label for="tel">{{ $t("PhoneNumber") }}(*)</label>
                            <div class="row phone-space">
                              <div class="col-lg-2">
                                <select name="" id="">
                                  <option value="+90" selected>+90</option>
                                </select>
                              </div>
                              <div class="col-lg-10">
                                <input
                                  type="tel"
                                  class="form-control"
                                  id="tel"
                                  :placeholder="$t('PhoneNumberMask')"
                                  required
                                  maxlength="10"
                                  v-model="GuestPhoneNumber"
                                  @input="MaskPhoneNumber"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="row mt-2">
                        <div class="col-lg-6" v-if="IsTurkish">
                          <div class="form-group">
                            <label for="email"
                              >{{ $t("IdentityNumber") }}(*)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="tc"
                              :placeholder="$t('IdentityNumber')"
                              v-model="GuestCitizenNumber"
                              maxlength="11"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6" v-else>
                          <div class="form-group">
                            <label for="email"
                              >{{ $t("PassportNumber") }}(*)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="tc"
                              :placeholder="$t('PassportNumber')"
                              v-model="GuestPassportNumber"
                              maxlength="18"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="col">
                            <label for="flexSwitchCheckDefault">{{
                              $t("TurkishCitizen")
                            }}</label>
                          </div>
                          <div class="mt-2">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked="false"
                                v-model="IsTurkish"
                              />
                            </div>
                          </div>
                        </div>
                      </div> -->
                      <div class="row mt-2">
                        <!-- <div class="col-lg-6">
                          <div class="col">
                            <label for="form-check">{{ $t("Gender") }}</label>
                          </div>
                          <div class="form-check form-check-inline mt-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="M"
                              v-model="Gender"
                            />
                            <label
                              class="form-check-label"
                              for="inlineRadio1"
                              >{{ $t("Male") }}</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="F"
                              v-model="Gender"
                            />
                            <label
                              class="form-check-label"
                              for="inlineRadio2"
                              >{{ $t("Female") }}</label
                            >
                          </div>
                        </div> -->
                        <!-- <div class="col-lg-6">
                          <div class="row">
                            <div class="form-group col-lg-6">
                              <label for="adult">{{ $t("Adult") }}(*)</label>
                              <br />
                              <select name="adult" id="adult" v-model="Adult">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                              </select>
                            </div>
                            <div class="form-group col-lg-6">
                              <label for="child">{{ $t("Child") }}(*)</label>
                              <br />
                              <select name="child" id="child" v-model="Child">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                        </div> -->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <!--  user guest section -->
              <div class="col-lg-12 mt-3 pt-3 user-guests">
                <div class="row">
                  <h2>Misafir Bilgileri</h2>
                </div>
                <div class="row mt-1">
                  <div class="row select-side mt-1">
                    <div
                      class="col-xl-5 col-lg-4 d-flex align-items-center"
                      v-if="UserGuestData.length > 0"
                    >
                      <div class="w-100">
                        <select
                          v-model="SelectedGuest"
                          class="form-select"
                          @change="HandleSelectChange()"
                        >
                          <option :value="null" disabled>
                            Kayıtlı Misafirler
                          </option>
                          <option
                            v-for="option in AvailableUserGuests"
                            :key="option.id"
                            :value="option"
                            :disabled="IsUserGuestSelectDisable(option)"
                          >
                            {{ option.name }} {{ option.surname }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 d-flex align-items-center">
                      <button
                        type="button"
                        class="btn"
                        @click="AddUserGuest()"
                        title="Yeni misafir ekle"
                      >
                        Yeni Misafir Ekle
                        <img src="/assets/icons/add.svg" alt="add" />
                      </button>
                    </div>
                    <div class="col-xl-3 col-lg-4 d-flex align-items-center">
                      <select v-model="AddGuestMultiple">
                        <option :value="null" disabled>Çoklu Seçim</option>
                        <option
                          v-for="count in UserGuestsCapacity"
                          :key="count"
                          :value="count"
                        >
                          {{ count }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row" id="user-guests-input">
                    <div
                      v-for="(guest, index) in Guests"
                      :key="guest.id"
                      class="row mt-4 user-box"
                    >
                      <div class="row">
                        <h2>{{ index + 1 }}. Misafir</h2>
                      </div>
                      <div class="col-xl-3 col-md-6">
                        <input
                          type="text"
                          class="form-control h-40"
                          name="name"
                          v-model="guest.name"
                          placeholder="Ad"
                          :readonly="guest.readOnly"
                          title="Misafir ad"
                        />
                      </div>
                      <div class="col-xl-3 col-md-6">
                        <input
                          type="text"
                          class="form-control h-40"
                          name="surname"
                          v-model="guest.surname"
                          placeholder="Soyad"
                          :readonly="guest.readOnly"
                          title="Misafir soyad"
                        />
                      </div>
                      <div class="col-xl-2 col-md-6">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="guest.tcCitizen"
                            :id="'guest-tcCitizen-' + guest.id"
                            title="Uyruk"
                          />
                          <label
                            :for="'guest-tcCitizen-' + guest.id"
                            class="opacity-50"
                          >
                            TC Vatandaşı
                          </label>
                        </div>
                      </div>
                      <div class="col-xl-3 col-md-6" v-if="guest.tcCitizen">
                        <input
                          type="text"
                          class="form-control h-40"
                          name="tc"
                          v-model="guest.idNumber"
                          placeholder="TC Kimlik Numarası"
                          title="TC kimlik numarası"
                        />
                      </div>
                      <div class="col-xl-3 col-md-6" v-else>
                        <input
                          type="text"
                          class="form-control h-40"
                          name="passport"
                          v-model="guest.idNumber"
                          placeholder="Pasaport Numarası"
                          title="Pasaport numarası"
                        />
                      </div>
                      <div class="my-1"></div>
                      <div class="col-xl-6 col-md-6">
                        <div class="row">
                          <div
                            class="col-10 col-md-6 d-flex align-items-center h-40"
                          >
                            <div class="row w-100">
                              <div class="col-8">
                                <label
                                  :for="'guest-responsible-' + guest.id"
                                  class="opacity-50"
                                  >Sorumlu Kişi</label
                                >
                              </div>
                              <div class="col-4">
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="responsible"
                                    :id="'guest-responsible-' + guest.id"
                                    v-model="guest.isResponsible"
                                    @change="CheckUserGuestResponsible"
                                    title="Sorumlu kişi"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2">
                            <button
                              class="btn h-40 del-btn"
                              @click="RemoveUserGuest(guest.id)"
                              style="width: min-content"
                              title="Sil"
                            >
                              &#x58;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  user guest section -->
            </div>
            <div class="col-lg-4">
              <div class="summary-section">
                <span
                  ><b> {{ $t("ReservationSummary") }}</b>
                </span>
                <div class="check-in-box mt-2">
                  <div class="row">
                    <div class="col">
                      {{ $t("CheckIn") }}: <br />
                      {{ CheckIn }}
                    </div>
                    <div class="col">
                      {{ $t("CheckOut") }}: <br />
                      {{ CheckOut }}
                    </div>
                  </div>
                  <div class="col mt-3">
                    <div>
                      <span>
                        {{ $t("TotalLengthOfStay") }}:
                        <b> {{ TotalNights }} </b> {{ $t("Night") }}
                      </span>
                    </div>
                    <div class="mt-3"></div>
                  </div>
                </div>
                <div class="col mt-3">
                  <div class="summary-items">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <span>{{ $t("AccommodationFee") }}:</span>
                        </div>
                        <div class="col">
                          <span>
                            {{
                              Math.ceil(
                                TotalAccommodationFee * 36.5533
                              ).toLocaleString("tr-TR")
                            }}
                            &nbsp; ₺</span
                          >
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <span>{{ $t("TaxRate") }}:</span>
                        </div>
                        <div class="col">
                          <span> {{ TaxRate }} &nbsp;%</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <span>{{ $t("TaxAmount") }}:</span>
                        </div>
                        <div class="col">
                          <span
                            >{{
                              Math.ceil(TaxAmount * 36.5533).toLocaleString(
                                "tr-TR"
                              )
                            }}
                            &nbsp; ₺</span
                          >
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <span>{{ $t("CleaningFee") }}:</span>
                        </div>
                        <div class="col">
                          <span
                            >{{
                              Math.ceil(CleaningFee * 36.5533).toLocaleString(
                                "tr-TR"
                              )
                            }}
                            &nbsp;₺</span
                          >
                        </div>
                      </div>
                      <div class="row mt-3 total-price">
                        <div class="col">
                          {{ $t("Total") }} {{ $t("Price") }}:
                        </div>
                        <div class="col old">
                          {{ TotalPrice.toLocaleString("tr-TR") }}
                          &nbsp; ₺
                        </div>
                        <div class="col new" v-if="NewPriceForCoupon">
                          {{ TotalPriceForCoupon.toLocaleString("tr-TR") }}
                          &nbsp; ₺
                        </div>
                      </div>
                      <hr style="margin: 6px 0" />
                      <!-- coupons side start -->
                      <div class="row mt-1 coupons">
                        <div class="col-lg-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name="coupon"
                              :value="UseCoupon"
                              v-model="UseCoupon"
                              id="coupon"
                            />
                            <label class="form-check-label" for="coupon">
                              {{ $t("UseCouponCode") }}
                            </label>
                          </div>
                        </div>
                        <div
                          class="row mt-1 d-flex justify-content-around"
                          v-if="UseCoupon"
                        >
                          <div class="col-lg-8">
                            <input
                              type="text"
                              v-model="SelectedCoupon"
                              :placeholder="$t('EnterCouponCode')"
                              id="selected-coupon"
                            />
                          </div>
                          <div class="col-lg-4 d-flex align-items-end">
                            <span
                              class="code-apply"
                              @click="ApplyCouponCode()"
                              :title="$t('Apply')"
                            >
                              {{ $t("Apply") }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- coupons side end -->
                    </div>
                  </div>
                </div>
                <div class="col mt-3 text-center">
                  <button
                    class="btn payment-btn"
                    @click="CheckInformations()"
                    :disabled="DisablePaymentBtn"
                  >
                    {{ $t("ContinuePaymentStep") }}
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <div class="text-danger err-side" style="height: 20px">
                  <p v-if="ErrorMessage">* {{ $t(ErrorMessage) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="index === 1" style="display: flex; justify-content: center">
          <iframe
            :src="PaymentURL"
            frameborder="0"
            style=""
            id="payment-iframe"
            @load="HideIframeContent"
          ></iframe>
        </div>
      </div>
    </div>
    <!-- ############## phone verification code modal ################ -->
    <!-- <div class="modal" id="codeModal" aria-hidden="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id=" ">
              &#10003; {{ $t("PleaseVerifyYourPhoneNumber") }}
            </h5>
          </div>
          <div class="modal-body">
            <form id="codeForm">
              <div class="mb-3 d-flex justify-content-between">
                <input
                  v-for="(code, index) in PhoneVerificationCode"
                  :key="index"
                  type="text"
                  class="form-control code-input"
                  v-model="PhoneVerificationCode[index]"
                  maxlength="1"
                  @input="MoveToNextInput(index)"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" @click="CloseCodeModal()">
              {{ $t("Close") }}
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
definePageMeta({
  layout: "default",
  middleware: ["auth"],
});
//import config from "../config";
const { t } = useI18n();
const Router = useRouter();
const RuntimeConfig = useRuntimeConfig();
const EstateInfo = useState("EstateInfo");
const CookieEstateID = useCookie("EstateID");
const CookieFilters = useCookie("Filters");
//const CookieResID = useCookie("CookieResID");
let Destination = ref({});
//const PhoneVerificationCode = ref(["", "", "", "", ""]);
const Steps = ref(["ReservationInformations", "Payment"]);
const StepContents = ref(["", ""]);
const ActiveStep = ref(0);
const ImageFilePrefix = ref("");
const CoverPhotoObject = ref("");
const TotalNights = ref(0);

const CheckIn = ref("");
const CheckOut = ref("");
// guest form start
const Child = ref(0);
const Adult = ref(2);
//const snackbar = useSnackbar();
const GuestName = ref("");
const GuestSurname = ref("");
const GuestEmailAddress = ref("");
const GuestPhoneNumber = ref("");
const GuestIsMe = ref(false);
const GuestUserID = ref(null);
const GuestCitizenNumber = ref("");
const GuestPassportNumber = ref("");
const Gender = ref("");
const PaymentURL = ref(null);
// Price values
const TotalPrice = ref(0);
const TotalAccommodationFee = ref(0);
const CleaningFee = ref(0);
const TaxAmount = ref(0);
const TaxRate = ref(0);
// Error Message
const ErrorMessage = ref("");
// selected coupon
const SelectedCoupon = ref("");
// Use Coupon
const UseCoupon = ref(false);
// use coupon btn
const DisablePaymentBtn = ref(false);
// old price for coupon
const NewPriceForCoupon = ref(false);
// total price for coupon
const TotalPriceForCoupon = ref(0);
///////////////////  user guest  ////////////////////////////
// user capacity
const UserGuestsCapacity = ref(Number);
// user guest data
const UserGuestData = ref([]);
// is guest section
const IsGuestSection = ref(true);
// manual inputted form guest
const GuestFormData = ref([]);
//Capacity Index
const CapacityIndex = ref(0);
// user guests
const Guests = ref([]);
// selected user guest
const SelectedGuest = ref(null);
// guest count
const AddGuestMultiple = ref(null);
// check user guest responsible
const CheckUserGuestResponsible = () => {
  if (!IsUserGuestResponsibleChecked.value) {
    ErrorMessage.value =
      'En az bir misafirin "Sorumlu Kişi" olarak eklenmesi gerekmektedir.';
  }
};
// is user guest responsible checked
// at least 1 responsible user select
const IsUserGuestResponsibleChecked = computed(() => {
  return Guests.value.some((guest) => guest.isResponsible);
});
// check user guest inputs
const CheckUserGuestInputs = async () => {
  GuestFormData.value = [];
  // check manual form input values
  const GuestInputs = document.querySelectorAll("#user-guests-input input");
  let AllFilled = true;
  GuestInputs.forEach((input) => {
    if (input.value.trim() === "") {
      AllFilled = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
    return;
  });
  if (!AllFilled) {
    ErrorMessage.value = "Lütfen misafir bilgilerini eksiksiz girin.";
    return false;
  }
  if (!IsUserGuestResponsibleChecked.value) {
    if (Guests.value.length == 0) {
      ErrorMessage.value = "En az bir misafir ekleyin.";
      return false;
    } else {
      ErrorMessage.value =
        'En az bir misafirin "Sorumlu Kişi" olarak eklenmesi gerekmektedir.';
      return false;
    }
  }
};
// available user guests data
const AvailableUserGuests = computed(() => {
  return UserGuestData.value.filter(
    (guest) => !Guests.value.some((g) => g.id === guest.id)
  );
});
// add user guest
const AddUserGuest = (val) => {
  const CapacityRes = CheckCapacity(CapacityIndex.value++);
  if (CapacityRes == true) {
    // if isMe control
    if (val == "isMe") {
      Guests.value.push({
        id: GuestUserID.value,
        name: GuestName.value,
        surname: GuestSurname.value,
        isResponsible: true,
        idNumber: null,
        tcCitizen: true,
        readOnly: true,
      });
      return;
    }
    // selected guest control
    if (SelectedGuest.value) {
      ErrorMessage.value = "";
      Guests.value.push({
        id: SelectedGuest.value.id,
        name: SelectedGuest.value.name,
        surname: SelectedGuest.value.surname,
        isResponsible: false,
        idNumber: null,
        tcCitizen: true,
        readOnly: false,
      });

      SelectedGuest.value = null;
      AvailableUserGuests.value = UserGuestData.value.filter(
        (guest) => !Guests.value.some((g) => g.id === guest.id)
      );
      return;
    }
    // add new guest as empty data
    else {
      ErrorMessage.value = "";
      Guests.value.push({
        id: Math.random(),
        name: null,
        surname: null,
        isResponsible: false,
        idNumber: null,
        tcCitizen: true,
        readOnly: false,
      });
      return;
    }
  } else {
    CheckCapacity(CapacityIndex.value--);
    GuestIsMe.value = false;
    return alert("Misafir kapasitesi aşıldı.");
  }
};
// selectbox change listener
const HandleSelectChange = () => {
  AddUserGuest();
};
// remove user guest
const RemoveUserGuest = (id) => {
  Guests.value = Guests.value.filter((guest) => guest.id !== id);
  CheckCapacity(CapacityIndex.value--);
  if (CapacityIndex.value == 0 && GuestIsMe.value == true) {
    GuestIsMe.value = false;
    IsUserGuestResponsibleChecked.value = false;
  }
};
// check capacity
const CheckCapacity = (count) => {
  const TotalCapacity = CapacityIndex.value;
  if (TotalCapacity > UserGuestsCapacity.value) {
    return false;
  } else return true;
};
// remove selected item
const IsUserGuestSelectDisable = (option) => {
  return Guests.value.some((guest) => guest.id === option.id);
};
// multiple guest add
watch(AddGuestMultiple, (NewCount) => {
  Guests.value.length = 0; // guest data clean
  CapacityIndex.value = 0; // capacity index clean
  GuestIsMe.value = false; // clean is me attr.
  for (let i = 0; i < NewCount; i++) {
    AddUserGuest();
  }
});
///////////////////  user guest  ////////////////////////////
const ChangeStep = (index) => {
  // ActiveStep.value = index;
};
// next step
const NextStep = () => {
  if (ActiveStep.value < Steps.value.length - 1) {
    ActiveStep.value++;
  }
};
// previous step
const PrevStep = () => {
  if (ActiveStep.value > 0) {
    ActiveStep.value--;
  }
};
onMounted(async () => {
  const CRMHost = RuntimeConfig.public.CRM_HOST;
  ImageFilePrefix.value = `${CRMHost}/files/IMAGE/`;
  if (EstateInfo.value) {
    Destination.value = EstateInfo.value;
    UserGuestsCapacity.value = EstateInfo.value.numberOfPeople;
  } else {
    if (CookieFilters.value) {
      const ResData = await DestinationComposable().GetDestinationByID(
        CookieEstateID.value,
        CookieFilters.value.Dates
      );
      Destination.value = ResData.data;
      UserGuestsCapacity.value = ResData.data.numberOfPeople;
    } else {
      Router.push("/error");
    }
  }
  if (Destination.value.media[0]) {
    CoverPhotoObject.value = Destination.value.media[0];
  }
  // calculate total nights
  TotalNights.value = HelperComposable().CalculateNights(
    CookieFilters.value.Dates[0],
    CookieFilters.value.Dates[1]
  );
  // set dates
  CheckIn.value = CookieFilters.value.Dates[0];
  CheckOut.value = CookieFilters.value.Dates[1];
  // check availability
  await CheckAvailability();
  // get user guests
  GetUserGuests();
});
// listen on before unmount
onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", HandleBeforeUnload);
});
// handle before unload method
const HandleBeforeUnload = (event) => {
  const message =
    "Ödeme işleminiz tamamlanmadı. Sayfayı kapatmak veya yenilemek istediğinize emin misiniz?";
  event.returnValue = message;
  return message;
};
// continue payment methods
const CheckInformations = async () => {
  ErrorMessage.value = "";
  // const NameResponse = HelperComposable().CheckGuestName(GuestName.value);
  // if (NameResponse != true) {
  //   return (ErrorMessage.value = "InvalidName");
  // }
  // const SurnameResponse = HelperComposable().CheckGuestSurname(
  //   GuestSurname.value
  // );
  // if (SurnameResponse != true) {
  //   return (ErrorMessage.value = "InvalidSurname");
  // }
  const EmailResponse = HelperComposable().CheckGuestEmailAddress(
    GuestEmailAddress.value
  );
  if (EmailResponse != true) {
    return (ErrorMessage.value = "InvalidEmail");
  }
  const PhoneNumberResponse = HelperComposable().CheckGuestPhoneNumber(
    GuestPhoneNumber.value
  );
  if (PhoneNumberResponse == "1") {
    return (ErrorMessage.value = "InvalidPhoneNumber");
  }
  GuestPhoneNumber.value = PhoneNumberResponse;
  // if (IsTurkish.value) {
  //   const TCResponse = HelperComposable().CheckGuestTC(
  //     GuestCitizenNumber.value
  //   );
  //   if (TCResponse != true) {
  //     return (ErrorMessage.value = "InvalidTC");
  //   }
  // }
  // if (IsTurkish.value == false) {
  //   const PassportResponse = HelperComposable().CheckGuestPassport(
  //     GuestPassportNumber.value
  //   );
  //   if (PassportResponse != true) {
  //     return (ErrorMessage.value = "InvalidPassportNumber");
  //   }
  // }
  if (Destination.value.numberOfPeople) {
    let PeopleCount = parseInt(Adult.value) + parseInt(Child.value);
    if (PeopleCount > Destination.value.numberOfPeople) {
      return (ErrorMessage.value = "TheNumberOfPeopleIsExceed");
    }
  }
  const CheckResponse = await CheckUserGuestInputs();
  if (CheckResponse != false) {
    if (Guests.value.length == 0) {
      return (ErrorMessage.value = "En az 1 misafir ekleyin.");
    }
    if (Guests.value.length > 0) {
      if (Guests.value.length > UserGuestsCapacity.value) {
        return (ErrorMessage.value = "Misafir kapasitesi aşıldı.");
      }
    }
    await PrepareReservationData();
  }
};
// mask phone number
const MaskPhoneNumber = (event) => {
  let FormattedPhoneNumber = event.target.value.replace(/\D/g, "");
  // if (FormattedPhoneNumber.length === 10) {
  //   FormattedPhoneNumber = FormattedPhoneNumber.replace(
  //     /^(\d{3})(\d{3})(\d{4})$/,
  //     "($1) $2-$3"
  //   );
  // }
  GuestPhoneNumber.value = FormattedPhoneNumber;
};
// again availability
const CheckAvailability = async () => {
  if (CookieFilters.value.Dates) {
    const CheckIn = CookieFilters.value.Dates[0];
    const CheckOut = CookieFilters.value.Dates[1];
    const CheckReq = await ReservationComposable().CheckAvailability(
      CheckIn,
      CheckOut
    );
    if (CheckReq) {
      if (CheckReq.data) {
        const CheckReqData = CheckReq.data;
        TotalPrice.value = Math.ceil(CheckReqData.total * 36.5533);
        CleaningFee.value = CheckReqData.cleaningFee;
        TaxAmount.value = CheckReqData.taxRate.taxAmount;
        TaxRate.value = CheckReqData.taxRate.taxRate;
        TotalAccommodationFee.value = CheckReqData.totalAccommodationFee;
      } else {
        Router.push(`/destinations/${CookieEstateID.value}`);
        return (ErrorMessage.value = CheckReq);
      }
    }
  }
};
// prepare reservation data
const PrepareReservationData = async () => {
  DisablePaymentBtn.value = true;

  const ResData = {
    estateId: CookieEstateID.value,
    startDate: CookieFilters.value.Dates[0],
    endDate: CookieFilters.value.Dates[1],
    adultCount: Adult.value,
    childCount: Child.value,
    webSite: null,
    paymentType: null,
    isMe: GuestIsMe.value,
    identify: [],
    contact: {
      email: GuestEmailAddress.value,
      phone: GuestPhoneNumber.value,
    },
  };
  // coupon code control
  if (UseCoupon.value == true && !SelectedCoupon.value) {
    return (ErrorMessage.value = "InvalidCouponCode");
  }
  if (UseCoupon.value == true && SelectedCoupon.value) {
    ResData.couponCode = SelectedCoupon.value;
  }
  // user guest
  if (Guests.value.length > 0) {
    Guests.value.forEach(async (guest) => {
      let IDLength = guest.id.toString().length;
      ResData.identify.push({
        id: IDLength < 6 ? guest.id : null,
        name: guest.name,
        surname: guest.surname,
        responsible: guest.isResponsible,
        identityNumber: guest.idNumber,
        idType: guest.tcCitizen == true ? 0 : 1, // tc = 0 , foreigner = 1
      });
    });
  }
  // set adult count as total count
  ResData.adultCount = ResData.identify.length;
  // send reservation data
  // console.log(ResData);
  // return;
  const ReservationResponse = await ReservationComposable().SendReservationData(
    ResData
  );
  if (ReservationResponse) {
    if (ReservationResponse.data) {
      //const ResponseData = ReservationResponse.data;
      //  CookieResID.value = ResponseData.reservationId;
      if (ReservationResponse.data.paymentURL) {
        // window.open(ReservationResponse.data.paymentURL, "_blank");
        // window.open(ReservationResponse.data.paymentURL);
        PaymentURL.value = ReservationResponse.data.paymentURL;
      }
    } else {
      DisablePaymentBtn.value = false;
      if (ReservationResponse == "Error") {
        return (ErrorMessage.value = "Sistemsel bir sorun oluştu.");
        // return (document.querySelector(
        //   ".err-side"
        // ).innerHTML = `Sistemsel bir sorun oluştu.
        //  <span style="color: #214280; cursor:pointer" data-bs-toggle="modal" data-bs-target="#callbackModal">Sizi Arayalım</span>`);
      }
      return (ErrorMessage.value = ReservationResponse);
    }
    // OpenCodeModal();
    if (ReservationResponse.data) {
    }
    DisablePaymentBtn.value = false;
    NextStep();
  }
};
//Apply Coupon Code
const ApplyCouponCode = async () => {
  // parameters same backend
  if (UseCoupon.value == true) {
    const CouponCodeRes = await AuthComposable().CheckUserCoupon(
      SelectedCoupon.value,
      TotalPrice.value,
      TotalNights.value
    );
    if (CouponCodeRes) {
      if (CouponCodeRes.data) {
        // console.log(CouponCodeRes.data);
        if (CouponCodeRes.data.discountAmount) {
          document.querySelector("#selected-coupon").readOnly = true;
          document.querySelector(".total-price .old").style.textDecoration =
            "line-through";
          if (CouponCodeRes.data.exchangeRateName.toUpperCase() == "TL") {
            TotalPriceForCoupon.value =
              TotalPrice.value - CouponCodeRes.data.discountAmount;
          } else {
            TotalPriceForCoupon.value =
              TotalPrice.value -
              Math.ceil(
                CouponCodeRes.data.discountAmount *
                  CouponCodeRes.data.exchangeRateValue
              );
          }
          NewPriceForCoupon.value = true;
          DisablePaymentBtn.value = false;
          ErrorMessage.value = "";
        } else {
          NewPriceForCoupon.value = false;
          document.querySelector(".total-price .old").style.textDecoration =
            "none";
          return (ErrorMessage.value = "InvalidCouponCode");
        }
      } else {
        NewPriceForCoupon.value = false;
        document.querySelector(".total-price .old").style.textDecoration =
          "none";
        return (ErrorMessage.value = "InvalidCouponCode");
      }
    }
  } else {
    document.querySelector(".total-price .old").style.textDecoration = "none";
    NewPriceForCoupon.value = false;
    return (ErrorMessage.value = "InvalidCouponCode");
  }
};
// use member informations
const UseMemberInformations = async () => {
  ErrorMessage.value = "";
  if (GuestIsMe.value != true) {
    const MemberData = await AuthComposable().GetUserInformations();
    if (MemberData) {
      if (MemberData.data) {
        GuestName.value = MemberData.data.name;
        GuestSurname.value = MemberData.data.surname;
        GuestPhoneNumber.value = MemberData.data.phone;
        GuestEmailAddress.value = MemberData.data.email;
        GuestUserID.value = MemberData.data.id;
        // set isMe value
        GuestIsMe.value = true;
        await DisabledAllGuestInput();
        AddUserGuest("isMe");
      } else {
        ErrorMessage.value = "MemberInfoNotFound";
      }
    }
  } else ErrorMessage.value = "Üyelik bilgileri zaten kullanıldı.";
};
// disable guest input
const DisabledAllGuestInput = async () => {
  const InputElements = document.querySelectorAll(".guest-left .form-control");
  InputElements.forEach(function (el) {
    setTimeout(() => {
      if (el.value) {
        el.readOnly = true;
      }
    });
  }, 500);
};
// get user Guests
const GetUserGuests = async () => {
  const GuestsData = await AuthComposable().GetUserGuests();
  if (GuestsData) {
    if (GuestsData.data) {
      //   console.log(GuestsData.data);
      if (GuestsData.data.identification) {
        UserGuestData.value = GuestsData.data.identification;
      }
    }
  }
};
// listen variables
watch(() => {
  Adult.value;
  Child.value;
  TotalPriceForCoupon.value;
  IsGuestSection.value;
});
// use coupon listener
watch(UseCoupon, (newValue, oldValue) => {
  DisablePaymentBtn.value = newValue == true ? true : false;
  NewPriceForCoupon.value = false;
  document.querySelector(".total-price .old").style.textDecoration = "none";
});
// payment url listener
watch(PaymentURL, (newValue, oldValue) => {
  if (newValue) {
    // add before unload listener
    window.addEventListener("beforeunload", HandleBeforeUnload);
    DisablePaymentBtn.value = true;
  }
});
// code modal methods
function MoveToNextInput(index) {
  if (index < 4 && PhoneVerificationCode.value[index].trim() !== "") {
    const nextInput = document.querySelectorAll(".code-input")[index + 1];
    nextInput.focus();
  }
}
// open phone code modal
function OpenCodeModal() {
  document.querySelector("#codeModal").style.display = "block";
}
// close code modal
function CloseCodeModal() {
  //PhoneVerificationCode.value = [];
  document.querySelector("#codeModal").style.display = "none";
}
// phone code verify
const CodeVerify = async () => {
  //CloseCodeModal();
  const ReservationResponse = await ReservationComposable().ConfirmPhoneNumber(
    PhoneVerificationCode.value
  );
  if (ReservationResponse) {
    PaymentURL.value = ReservationResponse.data;
  }
  NextStep();
};
// phone verification cod, each one listener
// watch(PhoneVerificationCode.value, () => {
//   const PhoneCode = PhoneVerificationCode.value;
//   PhoneCode.forEach(function (item, index) {
//     if (!item.trim()) {
//       return;
//     }
//     if (item.typeOf != Number) {
//       return;
//     }
//   });
//   let NewPhoneCode = PhoneVerificationCode.value.join("");
//   if (NewPhoneCode.length === 5) {
//     const CodeResponse = HelperComposable().IsNumeric(NewPhoneCode);
//     if (CodeResponse) {
//       PhoneVerificationCode.value = NewPhoneCode;
//       // CodeVerify();
//     }
//   }
// });
</script>

<style scoped>
/* @import url("assets/css/paymentPage.css"); */
</style>
