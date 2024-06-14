<template>
  <Head>
    <Title>{{ $t("Register") }} - Geccele</Title>
    <Meta name="description" content="Register"> </Meta>
  </Head>
  <div class="container-fluid px-0 overflow-hidden">
    <!-- <div v-if="CookieInProgress">
      <Loading />
    </div> -->
    <section class="register">
      <div class="container-fluid h-custom px-0">
        <div class="row d-flex justify-content-center align-items-center px-0">
          <div class="col-lg-6 px-0 d-none d-lg-block">
            <img
              src="/assets/images/user/login-cover.jpeg"
              class="img-fluid"
              alt="register"
            />
          </div>
          <div class="col-lg-6 form">
            <h2>{{ $t("Register") }}</h2>
            <hr />
            <form>
              <div class="row">
                <div class="col-lg-6">
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
                      v-model="GuestName"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="name">{{
                      $t("Surname")
                    }}</label>
                    <input
                      type="text"
                      id="name"
                      class="form-control form-control-lg"
                      :placeholder="$t('Surname')"
                      maxlength="22"
                      v-model="GuestSurname"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
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
                      v-model="GuestEmailAddress"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="tel">{{
                      $t("PhoneNumber")
                    }}</label>
                    <div class="row phone-space">
                      <div class="col-lg-3">
                        <select name="" id="">
                          <option value="+90" selected>+90</option>
                        </select>
                      </div>
                      <div class="col-lg-9">
                        <input
                          type="tel"
                          class="form-control form-control-lg"
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
                <div class="col-lg-6">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="password">{{
                      $t("Password")
                    }}</label>
                    <input
                      type="password"
                      id="password"
                      class="form-control form-control-lg"
                      :placeholder="$t('Password')"
                      v-model="GuestPassword"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="passwordRepeat">{{
                      $t("PasswordRepeat")
                    }}</label>
                    <input
                      type="password"
                      id="passwordRepeat"
                      class="form-control form-control-lg"
                      :placeholder="$t('PasswordRepeat')"
                      v-model="GuestPasswordRepeat"
                    />
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="gdpr"
                    v-model="GuestPrivacyAccept"
                  />
                  <label class="form-check-label policy-accept" for="gdpr">
                    <nuxt-link
                      :to="LocalePath('/contracts/gdpr')"
                      target="_blank"
                    >
                      {{ $t("GDPR") }}</nuxt-link
                    >
                    {{ $t("And") }}
                    <nuxt-link
                      :to="LocalePath('/contracts/privacy-policy')"
                      target="_blank"
                    >
                      {{ $t("PrivacyPolicy") }}</nuxt-link
                    >
                    {{ $t("Accept") }}
                  </label>
                </div>
              </div>
              <div class="mt-2">
                <div class="text-danger" style="height: 20px">
                  <p v-if="ErrorMessage">* {{ $t(ErrorMessage) }}</p>
                </div>
              </div>
              <div class="text-center text-lg-start mt-2 pt-2">
                <button
                  type="button"
                  class="btn btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  @click="CheckInformation()"
                  :disabled="RegisterProgress"
                >
                  {{ $t("Register") }}
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  {{ $t("YouHaveAnAccount") }}
                  <NuxtLink :to="LocalePath('/user/login')" class="link">
                    {{ $t("Login") }}</NuxtLink
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// set layout
definePageMeta({
  layout: "empty",
});
const Auth = useCookie("isAuthenticated"); // cookie auth
const LocalePath = useLocalePath(); // localization for route
const snackbar = useSnackbar(); // info modal(success - warning - fail)
const { t } = useI18n(); // localization
//const CookieInProgress = useCookie("InProgress");
const Router = useRouter(); // router
// guest register form
let GuestName = ref("");
let GuestSurname = ref("");
let GuestEmailAddress = ref("");
let GuestPhoneNumber = ref("");
let GuestPassword = ref("");
let GuestPasswordRepeat = ref("");
let GuestPrivacyAccept = ref(false);

// register button
const RegisterProgress = ref(false);

// Error Message
const ErrorMessage = ref("");
const CheckInformation = async () => {
  ErrorMessage.value = "";
  const NameResponse = HelperComposable().CheckGuestName(GuestName.value);
  if (NameResponse != true) {
    //MarkAsError("name");
    return (ErrorMessage.value = "InvalidName");
  }
  const SurnameResponse = HelperComposable().CheckGuestSurname(
    GuestSurname.value
  );
  if (SurnameResponse != true) {
    return (ErrorMessage.value = "InvalidSurname");
  }
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
  // password
  if (!GuestPassword.value) {
    return (ErrorMessage.value = "PasswordNotBeEmpty");
  }
  if (!GuestPasswordRepeat.value) {
    return (ErrorMessage.value = "PasswordRepeatNotBeEmpty");
  }
  const PasswordResponse = HelperComposable().CheckPasswordStrength(
    GuestPassword.value
  );
  if (!PasswordResponse) {
    return (ErrorMessage.value = "YourPasswordMustBe");
  }
  const ComparePassword = HelperComposable().ComparePasswords(
    GuestPassword.value,
    GuestPasswordRepeat.value
  );
  if (!ComparePassword) {
    return (ErrorMessage.value = "PasswordsAreNotEqual");
  }
  if (GuestPrivacyAccept.value == false) {
    return (ErrorMessage.value = "PleaseAcceptGdprAndPrivacy");
  }
  // disabled button
  RegisterProgress.value = true;
  // prepare register data

  await PrepareRegisterData();
};

// mark input elements
const MarkAsError = (id) => {
  document.querySelector("#name").classList.add("mark-err");
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
// snackbar design
const Snackbar = (text, type) => {
  setTimeout(() => {
    snackbar.add({
      type,
      text,
    });
  }, 200);
};
const PrepareRegisterData = async () => {
  const RegisterData = {
    name: GuestName.value,
    surname: GuestSurname.value,
    phone: GuestPhoneNumber.value,
    email: GuestEmailAddress.value,
    password: GuestPassword.value,
    passwordRepeat: GuestPasswordRepeat.value,
  };
  const RegisterResponse = AuthComposable().SendRegisterData(RegisterData);
  //console.log(RegisterResponse);

  RegisterResponse.then((response) => {
    RegisterProgress.value = false;
    if (response === "0") {
      Router.push(LocalePath(`/user/login?status=success`));
    } else {
      return (ErrorMessage.value = response);
    }
  }).catch((error) => {
    console.log(error);
  });
};
onMounted(() => {});
</script>

<style scoped>
a {
  color: #214280;
}
.mark-err {
  border: 1px solid red !important;
  background-color: red;
}
.register small {
  color: red;
}
.register .divider:after,
.register .divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #fff;
}
.register .form {
  padding: 35px 30px 35px 30px;
}
.register .h-custom img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
.register h2 {
  font-size: 1.4em;
}
.register .h-custom {
  height: calc(100% - 73px);
}
.register button.btn {
  background-color: #214280;
  color: #fff;
  transition: 0.4s all ease;
  font-size: 16px;
}
.register button.btn:hover {
  background-color: #214280;
  color: #fff;
  transform: translateY(-3px);
}
.register input::placeholder {
  font-size: 14px;
  color: #808080;
}
.register label {
  margin-bottom: 2px;
  font-size: 16px;
}
.phone-space .col-lg-3 {
}
.phone-space select {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ebebeb;
  border-radius: 6px;
}
@media (max-width: 996px) {
  .phone-space select {
    width: max-content;
    padding: 6px;
  }
  .phone-space .col-lg-9 {
    margin-top: 6px;
  }
}
@media (max-width: 450px) {
  .register .h-custom {
    height: 100%;
  }
}
</style>
