<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="callbackModal"
    tabindex="-1"
    aria-labelledby="callbackModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="callbackModalLabel">
            {{ $t("WeCallYou") }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row mt-2">
            <div class="col col-lg-12">
              <div class="callback-req">
                <div class="form-group col-lg-12">
                  <label for="message">{{ $t("Message") }}</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="message"
                    :placeholder="$t('TypeMessage')"
                    maxlength="250"
                    v-model="GuestMessage"
                  ></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <label for="phone">{{ $t("PhoneNumber") }}</label>
                  <div class="row">
                    <div class="col-2">
                      <select name="" id="">
                        <option value="">+90</option>
                      </select>
                    </div>
                    <div class="col-lg-10">
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        placeholder="850 242 07 99"
                        maxlength="16"
                        v-model="GuestPhoneNumber"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group col-lg-12">
                  <label for="name">{{ $t("FullName") }} </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    :placeholder="$t('FullName')"
                    maxlength="32"
                    v-model="GuestName"
                  />
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    v-model="ContractsAccept"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    {{ $t("GDPRShortTerm") }}&nbsp;
                    <nuxt-link
                      :to="LocalePath('/contracts/gdpr')"
                      target="_blank"
                      >{{ $t("GDPR") }}</nuxt-link
                    >
                    &nbsp;|&nbsp;
                    <nuxt-link
                      :to="LocalePath('/contracts/cookie-policy')"
                      target="_blank"
                      >{{ $t("CookiePolicy") }}</nuxt-link
                    >
                  </label>
                </div>
                <button
                  type="submit"
                  class="submit-btn btn mt-2"
                  :disabled="!ContractsAccept"
                  @click="CheckInformations()"
                >
                  {{ $t("Send") }}
                </button>
                <span class="my-1 err-message">{{ ErrorMessage }} </span>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const LocalePath = useLocalePath();
const snackbar = useSnackbar(); // info modal(success - warning - fail)
// Contracts Accept
const ContractsAccept = ref(false);
// err message
const ErrorMessage = ref("");
// user name
const GuestName = ref("");
// user phone number
const GuestPhoneNumber = ref("");
// user message
const GuestMessage = ref("");
// send form
const CheckInformations = async () => {
  if (GuestMessage.value.length > 250) {
    return Snackbar("* Mesaj uzunluğu max. 250 karakter olmalı!", "error");
  }
  if (!GuestMessage.value) {
    return Snackbar("* Lütfen mesaj girin!", "error");
  }
  const PhoneNumberResponse = HelperComposable().CheckGlobalGuestPhoneNumber(
    GuestPhoneNumber.value
  );
  if (PhoneNumberResponse == false) {
    return Snackbar("*Geçersiz telefon numarası!", "error");
  }
  const NameResponse = HelperComposable().CheckGuestName(GuestName.value);
  if (NameResponse != true) {
    return Snackbar("*Lütfen isim girin!", "error");
  }
  if (!ContractsAccept.value) {
    return Snackbar("* Lütfen kutucuğu işaretleyin!", "error");
  }
  // send call back data
  await SendCallBackData();
};
const SendCallBackData = async () => {
  const CallBackData = {
    fullName: GuestName.value,
    phone: GuestPhoneNumber.value,
    message: GuestMessage.value,
  };

  //send req.
  const CheckReq = await ReservationComposable().SendCallBackInfo(CallBackData);
  if (CheckReq) {
    if (CheckReq.message) {
      if (CheckReq.message == "Contact Us added successfully") {
        document.querySelector(".btn-close").click(); // close modal
        Snackbar("İşlem başarılı", "success");
      }
    }
  }
};
// snackbar design
const Snackbar = (text, type) => {
  snackbar.add({
    type,
    text,
  });
};
</script>

<style>
.err-message {
  font-size: 0.8em;
  color: red;
}

.modal .form-group {
  margin-top: 8px;
  margin-bottom: 8px;
}
.modal .form-group:first-child {
  margin-top: 0;
  margin-bottom: 8px;
}
.modal .form-group label {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
}
.modal .form-group input,
.modal .form-group textarea {
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9em;
}
.modal .form-group input::placeholder,
.modal .form-group textarea::placeholder {
  font-size: 0.8em;
}
.modal .modal-header .btn-close {
  font-size: 10px;
  width: 15px;
  height: 15px;
  opacity: 0.5;
}
.modal select {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.8em;
}
.modal h2 {
  color: #6182cf;
  font-size: 1.4em;
}
.submit-btn {
  background-color: #214280;
  color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.6s all ease;
  width: 100%;
}
.submit-btn:hover {
  background-color: #214280;
  color: #fff;
}
.submit-btn:disabled {
  background-color: grey;
  color: #fff;
}
.modal .form-check-label {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.7);
}
.modal .container {
  padding: 10px;
}
.callback-req {
  border: 1px solid #cbcbcb;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
}
@media (max-width: 996px) {
  input#phone {
    margin-top: 6px;
  }
  .modal select {
    height: 30px;
    width: 55px;
  }
}
</style>
