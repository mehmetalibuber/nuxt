<template>
  <div class="check-availability w-100">
    <div>
      <span> {{ $t("CheckAvailability") }} </span>

      <VueDatePicker
        v-model="Dates"
        range
        :enable-time-picker="false"
        :multi-calendars="{ solo: true }"
        auto-apply
        :min-date="MinDate"
        :min-range="MinRange"
        :auto-range="AutoRange"
        :placeholder="$t('CheckInOut')"
        class="d-picker"
      >
      </VueDatePicker>
    </div>
    <div>
      <div class="check-availability-info">
        <div class="container" v-if="ShowInfoSection">
          <!-- <div v-if="InProgress">
            <Loading />
          </div> -->
          <div class="row">
            <div class="col">
              <span>{{ $t("AccommodationFee") }}:</span>
            </div>
            <div class="col">
              <span
                >{{
                  Math.ceil(TotalAccommodationFee * 36.5533).toLocaleString(
                    "tr-TR"
                  )
                }}
                &nbsp;₺</span
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
              <span>
                {{ Math.ceil(TaxAmount * 36.5533).toLocaleString("tr-TR") }}
                &nbsp;₺</span
              >
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span>{{ $t("CleaningFee") }}: </span>
            </div>
            <div class="col">
              <span
                >{{
                  Math.ceil(CleaningFee * 36.5533).toLocaleString("tr-TR")
                }}
                &nbsp;₺</span
              >
            </div>
          </div>
          <div class="row total-price">
            <div class="col">
              <span>{{ $t("Total") }} {{ $t("Price") }}:</span>
            </div>
            <div class="col">
              <span>
                {{ Math.ceil(TotalPrice * 36.5533).toLocaleString("tr-TR") }}
                &nbsp;₺
              </span>
            </div>
          </div>
        </div>
        <div class="container mt-2 text-danger" v-else>
          <span>{{ ErrorMessage }}</span>
        </div>
      </div>
    </div>
    <div class="col btn-box">
      <div class="col-lg-12">
        <!-- <button type="button" class="btn first" @click="CheckAvailability(0)">
          Check Availability
        </button> -->
      </div>
      <div class="col-lg-12">
        <button
          type="button"
          class="btn second"
          :title="$t('Reservation')"
          @click="CheckAvailability(1)"
          v-if="ShowPaymentStep"
        >
          {{ $t("Reservation") }}
        </button>
      </div>
      <div class="col-lg-12">
        <!-- Call back btn -->
        <button
          type="button"
          class="call-back-btn w-100"
          data-bs-toggle="modal"
          data-bs-target="#callbackModal"
        >
          <div class="row d-flex justify-content-around align-items-center">
            <div class="col-lg-12">Temsilciye Ulaşın</div>
            <!-- <div class="col-6 d-flex justify-content-center">
                  <img src="/assets/icons/person.svg" alt="user" />
                </div> -->
          </div>
        </button>
      </div>
    </div>
  </div>
  <!-- Check Availability Modal -->
  <div
    class="modal fade"
    id="checkAvailabilityModal"
    tabindex="-1"
    aria-labelledby="checkAvailabilityModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <img src="/assets/icons/error.png" alt="error" />
        </div>
        <div class="modal-body">
          <div class="col">
            <h2>HATA</h2>
          </div>
          <div class="col">
            <p>
              Bu mülk için min. konaklama süresi
              {{ EstateMinAccommodation }} gecedir.
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Tamam
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const props = defineProps({
  EstateID: String,
});
const { t } = useI18n();
const Router = useRouter();
const InProgress = useCookie("InProgress");
InProgress.value = ref(false);
// cookie for filters
const CookieFilters = useCookie("Filters");
// state for estate details
const EstateInfo = useState("EstateInfo");
const CookieEstateID = useCookie("EstateID");
const ShowInfoSection = ref(false);
const ShowPaymentStep = ref(false);
// filter ref values
const MinDate = new Date();
const Dates = ref([]);
const ErrorMessage = ref("");
// Price values
const TotalPrice = ref(0);
const TotalAccommodationFee = ref(0);
const CleaningFee = ref(0);
const TaxAmount = ref(0);
const TaxRate = ref(0);
//local path
const LocalePath = useLocalePath();
// min range
const MinRange = ref("");
// auto range
const AutoRange = ref("");
// total nights
const TotalNights = ref(0);
// EstateMinAccommodation
const EstateMinAccommodation = ref(0);
onMounted(() => {
  CheckCookieFilters();
  TotalPrice.value = EstateInfo.value.price;
  MinRange.value = 1;
  // AutoRange.value = EstateInfo.value.minAccommodation;
});

const CheckAvailability = async (item) => {
  InProgress.value = true;
  ErrorMessage.value = "";
  if ((item) => 0 && typeof item == Number) {
    if (item === 0) {
      if (!Dates.value) {
        if (ShowInfoSection.value) {
          ShowInfoSection.value = false;
        }
        if (ShowPaymentStep.value) {
          ShowPaymentStep.value = false;
        }
        return (ErrorMessage.value = `* ${t(
          "PleaseSelectCheckInCheckOutDates"
        )}`);
      }
      const CheckIn = HelperComposable().DateFormatter(Dates.value[0]);
      const CheckOut = HelperComposable().DateFormatter(Dates.value[1]);
      CookieFilters.value.Dates[0] = CheckIn;
      CookieFilters.value.Dates[1] = CheckOut;
      //send req.
      const CheckReq = await ReservationComposable().CheckAvailability(
        CheckIn,
        CheckOut
      );
      //console.log(CheckReq);
      if (CheckReq) {
        // update values
        if (CheckReq.data) {
          const CheckReqData = CheckReq.data;
          TotalPrice.value = CheckReqData.total;
          CleaningFee.value = CheckReqData.cleaningFee;
          TaxAmount.value = CheckReqData.taxRate.taxAmount;
          TaxRate.value = CheckReqData.taxRate.taxRate;
          TotalAccommodationFee.value = CheckReqData.totalAccommodationFee;

          // check estate min. accommodation
          TotalNights.value = HelperComposable().CalculateNights(
            CookieFilters.value.Dates[0],
            CookieFilters.value.Dates[1]
          );
          EstateMinAccommodation.value = EstateInfo.value.minAccommodation;
          //console.log(EstateMinAccommodation, TotalNights);
          if (EstateMinAccommodation.value > TotalNights.value) {
            ShowInfoSection.value = false;
            ShowPaymentStep.value = false;
            ////////////////
            const modalElement = document.getElementById(
              "checkAvailabilityModal"
            );
            const modal = new bootstrap.Modal(modalElement);
            modal.show(); //open modal
            ///////////////
            return (ErrorMessage.value = `* Bu mülk için min. konaklama süresi ${EstateMinAccommodation.value} gecedir.`);
          }
          ShowInfoSection.value = true;
          ShowPaymentStep.value = true;
        } else {
          if (ShowPaymentStep.value) {
            ShowPaymentStep.value = false;
          }
          ShowInfoSection.value = false;
          return (ErrorMessage.value = `* ${CheckReq}`);
        }
      }
    }
    if (item === 1) {
      CookieEstateID.value = props.EstateID;
      Router.push(LocalePath("/payment"));
    }
  }
};
// check cookie filters
const CheckCookieFilters = async () => {
  if (CookieFilters.value) {
    if (CookieFilters.value.Dates) {
      Dates.value = CookieFilters.value.Dates;
    }
  } else {
    await HelperComposable().SetDefaultCookie();
  }
};

watch(
  () => Dates.value,
  () => {
    CheckAvailability(0);
  }
);

// watch(
//   () => Dates.value,
//   (CheckIn, CheckOut) => {
//     if (CheckIn) {
//       if (!CheckIn.value || !CheckOut.value) {
//         const CheckIn = HelperComposable().DateFormatter(new Date());
//         const CheckOut = HelperComposable().DateFormatter(
//           new Date().setDate(new Date().getDate() + 3)
//         );
//         CookieFilters.value.Dates[0] = CheckIn;
//         CookieFilters.value.Dates[1] = CheckOut;
//       }
//     }
//     CheckAvailability(0);
//   }
// );

watch(() => {
  ShowInfoSection.value;
  TotalPrice.value;
  CleaningFee.value;
  TaxAmount.value;
  TaxRate.value;
});
</script>

<style>
.check-availability .d-picker {
  margin-top: 10px;
  margin-bottom: 5px;
}
.check-availability .d-picker .dp__today {
  border: none;
}
.check-availability .dp__input_icon_pad {
  opacity: 0.75;
}
.check-availability span {
  font-size: 15px;
  opacity: 0.75;
}
.check-availability small {
  font-weight: 600;
  font-size: 16px;
}
.check-availability .btn-box {
  width: 100%;
  margin-top: 15px;
}
.check-availability .btn-box .first {
  background-color: transparent !important;
  border: 2px solid #b24693;
  border-radius: 8px;
  width: 100%;
  color: #000;
}
.check-availability .btn-box .second {
  background-color: #b24693;
  width: 100%;
}
.check-availability .btn-box .second:active {
  color: #fff;
}
.check-availability .total-price {
  color: #214280;
  margin-top: 4px;
}
.check-availability .check-availability-info .container .col:last-child {
  text-align: end;
}
.check-availability .dp__range_end,
.check-availability .dp__range_start,
.check-availability .dp__active_date {
  background-color: #b24693 !important;
}
.call-back-btn {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  margin-top: 5px;
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 4px 8px;
  height: 40px;
  transition: 0.5s ease all;
}
.call-back-btn:hover {
  text-decoration: underline;
  color: #214280;
}
#checkAvailabilityModal .modal-content {
  padding: 35px 0;
}
#checkAvailabilityModal .modal-header {
  display: flex;
  justify-content: center;
  border: none;
}
#checkAvailabilityModal .modal-header img {
  width: 60px;
  height: 60px;
  border: 3px solid red;
  padding: 8px;
  border-radius: 50%;
}
#checkAvailabilityModal .modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  padding-top: 0;
}
#checkAvailabilityModal .modal-body h2 {
  color: rgba(0, 0, 0, 0.7);
  font-size: 2em;
  font-weight: 600;
  margin-top: 5px;
}
#checkAvailabilityModal .modal-body p {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 1.4em;
  text-align: center;
}
#checkAvailabilityModal .modal-footer {
  border: none;
  display: flex;
  justify-content: center;
  padding-top: 0;
}
#checkAvailabilityModal .modal-footer .btn {
  background-color: #214280;
  color: #fff;
}

@media (max-width: 996px) {
  .check-availability {
    height: 180px;
  }
  .check-availability-info span {
    font-size: 14px;
  }
  .call-back-btn {
    width: 120px;
    height: 60px;
    font-weight: 500;
  }
  .call-back-btn img {
    height: 20px;
  }
}
</style>
