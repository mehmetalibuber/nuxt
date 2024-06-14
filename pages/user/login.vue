<template>
  <Head>
    <Title>{{ $t("Login") }} - Geccele</Title>
    <Meta name="description" content="Login"> </Meta>
  </Head>
  <div class="container-fluid px-0 overflow-hidden">
    <section class="login">
      <div class="container-fluid h-custom px-0">
        <div
          class="row d-flex justify-content-center align-items-center px-0 full-h"
        >
          <div class="col-lg-6 px-0 d-none d-lg-block">
            <picture>
              <source
                media="(max-width: 1450px)"
                srcset="/assets/images/user/login-md.jpg"
              />
              <source
                media="(min-width: 1250px)"
                srcset="/assets/images/user/login.jpg"
              />
              <img
                src="/assets/images/user/login.jpg"
                alt="login"
                loading="lazy"
              />
            </picture>
          </div>
          <div class="col-lg-6 py-5">
            <div class="content text-center">
              <h2>{{ $t("Welcome") }}!</h2>
              <p class="opacity-50 m-0">
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
              </p>
              <div class="my-2">
                <div style="height: 20px">
                  <p v-if="SuccessMessage" class="text-success">
                    {{ $t(SuccessMessage) }}
                  </p>
                </div>
                <ul
                  class="nav nav-tabs d-flex justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {{ $t("LoginWithUserInformations") }}
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      {{ $t("QuickLogin") }}
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <form class="py-2">
                      <!-- Email input -->
                      <div class="form-outline mb-3">
                        <!-- <label class="form-label" for="form3Example3"
                          >{{ $t("EmailAddress") }}
                        </label> -->
                        <input
                          type="email"
                          id="form3Example3"
                          class="form-control form-control-lg"
                          :placeholder="$t('EmailAddressOrPhoneNumber')"
                          v-model="GuestUserName"
                        />
                      </div>

                      <!-- Password input -->
                      <div class="form-outline mb-3">
                        <!-- <label class="form-label" for="form3Example4"
                          >{{ $t("Password") }}
                        </label> -->
                        <input
                          type="password"
                          id="form3Example4"
                          class="form-control form-control-lg"
                          :placeholder="$t('Password')"
                          v-model="GuestPassword"
                        />
                      </div>

                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="form-check mb-0">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3"
                          />
                          <label
                            class="form-check-label opacity-50"
                            for="form2Example3"
                          >
                            {{ $t("RememberMe") }}
                          </label>
                        </div>
                        <!-- <NuxtLink
                          :to="localPath('/user/forgot-password')"
                          class="text-body opacity-50"
                          title="ForgotPassword"
                          >{{ $t("ForgotPassword") }}</NuxtLink
                        > -->
                      </div>
                      <div class="text-center text-lg-start mt-2 pt-2">
                        <button
                          type="button"
                          class="btn btn-lg"
                          style="padding-left: 2.5rem; padding-right: 2.5rem"
                          @click="CheckInformation()"
                          :disabled="LoginProgress"
                        >
                          {{ $t("Login") }}
                        </button>
                        <div class="mt-2">
                          <div
                            class="text-danger text-center"
                            style="height: 20px"
                          >
                            <p v-if="ErrorMessage">* {{ $t(ErrorMessage) }}</p>
                          </div>
                        </div>
                        <p class="mt-5 pt-1 mb-0 text-center">
                          {{ $t("DontHaveAnAccount") }}
                          <NuxtLink
                            :to="localPath('/user/register')"
                            class="link fw-bold"
                            :title="$t('Register')"
                            >{{ $t("Register") }}</NuxtLink
                          >
                        </p>
                      </div>
                    </form>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <form class="py-2">
                      <!-- phone number input -->
                      <div class="form-outline mb-3">
                        <!-- <label class="form-label" for="phone"
                          >{{ $t("PhoneNumber") }}
                        </label> -->
                        <div class="row phone-space">
                          <div class="col-lg-2">
                            <select name="" id="">
                              <option value="+90" selected>+90</option>
                            </select>
                          </div>
                          <div class="col-lg-10">
                            <input
                              type="tel"
                              id="phone"
                              maxlength="10"
                              class="form-control form-control-lg"
                              :placeholder="$t('PhoneNumberMask')"
                              v-model="GuestPhoneNumber"
                              @input="MaskPhoneNumber"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- code input -->
                      <div
                        class="form-outline mb-3"
                        v-if="ShowVerificationCodeInput"
                      >
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="col">
                              <label
                                class="form-label w-100 text-start"
                                for="code"
                                >{{ $t("VerificationCode") }}
                              </label>
                              <input
                                type="password"
                                id="code"
                                class="form-control form-control-lg w-100"
                                :placeholder="$t('VerificationCode')"
                                v-model="VerificationCode"
                                :disabled="VerificationCodePending"
                                maxlength="5"
                              />
                            </div>
                          </div>
                          <div class="col d-flex align-items-end">
                            <span
                              v-if="SendVerificationButton"
                              @click="SendVerificationCode()"
                              style="
                                font-size: 14px;
                                cursor: pointer;
                                margin-bottom: 10px;
                                opacity: 0.8;
                              "
                              class="my-2"
                              >{{ $t("GetNewCode") }} ↺</span
                            >
                          </div>
                        </div>
                      </div>

                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <span
                          v-if="!ResendVerificationCode"
                          @click="SendVerificationCode()"
                          class="send-code-btn btn"
                        >
                          {{ $t("GetVerificationCode") }}
                        </span>
                      </div>

                      <div class="text-center text-lg-start mt-0 pt-2 mb-2">
                        <button
                          v-if="SendVerificationButton"
                          type="button"
                          class="verification-bordered-btn btn-lg"
                          style="padding-left: 2.5rem; padding-right: 2.5rem"
                          @click="LoginWithPhoneNumber()"
                          :disabled="LoginProgress"
                        >
                          {{ $t("Confirm") }}
                        </button>
                      </div>
                      <div class="mt-0">
                        <div class="text-danger" style="height: 20px">
                          <p v-if="ErrorMessage">* {{ $t(ErrorMessage) }}</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <!-- <Google-Signin /> -->
              </div>
              <div>
                <NuxtLink
                  :to="localPath('/')"
                  class="text-dark opacity-50 text-decoration-none fs-6"
                  :title="$t('BackHome')"
                  >&#x2936; {{ $t("BackHome") }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "empty",
});
const localPath = useLocalePath();
const Auth = useCookie("isAuthenticated");
const snackbar = useSnackbar(); // info modal(success - warning - fail)
const LocalePath = useLocalePath(); // localization
const Router = useRouter(); // router
const Route = useRoute(); // route
const { t } = useI18n(); // localization
// user state
//const User = useState("User");
const CookieUser = useCookie("User", {
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  sameSite: "Strict",
});
// guest login form
let GuestUserName = ref("");
let GuestPassword = ref("");
// login btn progress
const LoginProgress = ref(false);
// Error Message
const ErrorMessage = ref("");
// Success Message
const SuccessMessage = ref("");
// verify code input controls
const VerificationCodePending = ref(true);
// show verification code input
const ShowVerificationCodeInput = ref(false);
// send verification code
const SendVerificationButton = ref(false);
// guest phone number
const GuestPhoneNumber = ref("");
// verification code
const VerificationCode = ref("");
// resend verification code
const ResendVerificationCode = ref(false);
// cookie estate id
const CookieEstateID = useCookie("EstateID");

onMounted(() => {
  const Status = Route.query.status;
  if (Status === "success") {
    SuccessMessage.value = "RegisterSuccess";
  }
});
// check phone number
const MaskPhoneNumber = (event) => {
  const FormattedPhoneNumber = event.target.value.replace(/\D/g, "");
  GuestPhoneNumber.value = FormattedPhoneNumber;
};
// send verification code
const SendVerificationCode = async () => {
  ErrorMessage.value = "";
  const PhoneResponse = HelperComposable().CheckGuestPhoneNumber(
    GuestPhoneNumber.value
  );
  if (PhoneResponse == 1) {
    return (ErrorMessage.value = "InvalidPhoneNumber");
  }
  const PhoneLoginResponse = await AuthComposable().GetLoginVerificationCode(
    GuestPhoneNumber.value
  );
  // console.log(PhoneLoginResponse);
  if (PhoneLoginResponse) {
    // console.log(PhoneLoginResponse);
    if (PhoneLoginResponse.data) {
      const ResData = PhoneLoginResponse.data;
      // console.log(ResData);
      if (ResData === "success") {
        VerificationCodePending.value = false;
        ResendVerificationCode.value = true;
        ShowVerificationCodeInput.value = true;
        SendVerificationButton.value = true;
      }
    }
  }
};
// login with phone number
const LoginWithPhoneNumber = () => {
  const LoginResponse = AuthComposable().ConfirmVerificationCode(
    VerificationCode.value,
    GuestPhoneNumber.value
  );
  LoginProgress.value = true;

  LoginResponse.then((response) => {
    // console.log(response);
    if (!response) {
      return (ErrorMessage.value =
        "Giriş kodu hatalı veya sistemsel bir sorun oluştu.");
    }
    // LoginResponse.value = false;

    if (response.data) {
      if (response.data.accessToken) {
        const AccessToken = response.data.accessToken;
        CookieUser.value = "true";
        // set access token
        AddAccessTokenToStorage(AccessToken);
      } else {
        return (ErrorMessage.value = response);
      }
    } else {
      if (response.length > 0) {
        if (response[0].message) {
          return (ErrorMessage.value = response[0].message);
        }
      }
      return (ErrorMessage.value = response);
    }
  }).catch((error) => {
    console.log(error);
  });
};
const CheckInformation = async () => {
  ErrorMessage.value = "";
  const UserNameResponse = HelperComposable().CheckGuestUserName(
    GuestUserName.value
  );
  if (UserNameResponse != true) {
    return (ErrorMessage.value = "InvalidUserName");
  }
  // password
  if (!GuestPassword.value) {
    return (ErrorMessage.value = "PasswordNotBeEmpty");
  }
  const PasswordResponse = HelperComposable().CheckPasswordStrength(
    GuestPassword.value
  );
  if (!PasswordResponse) {
    return (ErrorMessage.value = "YourPasswordMustBe");
  }
  // disabled button
  LoginProgress.value = true;
  // prepare login data
  await PrepareLoginData();
};
const PrepareLoginData = async () => {
  const LoginData = {
    email: GuestUserName.value,
    password: GuestPassword.value,
  };
  const LoginResponse = AuthComposable().SendLoginData(LoginData);
  LoginResponse.then((response) => {
    //  console.log(response);
    // LoginResponse.value = false;
    if (response.data) {
      if (response.data.userData) {
        const AccessToken = response.data.accessToken;
        // set state
        //User.value = response.data;
        // set user cookie
        CookieUser.value = response.data.userData;
        // set access token
        AddAccessTokenToStorage(AccessToken);
      } else {
        return (ErrorMessage.value = response);
      }
    } else {
      return (ErrorMessage.value = response);
    }
  }).catch((error) => {
    console.log(error);
  });
};
const AddAccessTokenToStorage = (AccessToken) => {
  LoginProgress.value = false;
  localStorage.setItem("AccessToken", AccessToken);
  const RedirectAfterLogin = localStorage.getItem("RedirectAfterLogin");
  if (RedirectAfterLogin) {
    localStorage.removeItem("redirectAfterLogin");
    return Router.push(RedirectAfterLogin);
  } else {
    return Router.push(LocalePath("/"));
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

<style scoped>
.verification-bordered-btn {
  background-color: #214280;
  border: none;
  color: #fff;
  border-radius: 6px;
  padding: 8px 12px;
  width: 100%;
  transition: 0.4s all ease;
}
.verification-bordered-btn:hover {
  background-color: #214280;
  color: #fff;
  transform: translateY(-3px);
}
.login .btn:active {
  background-color: #214280;
  color: #fff;
}
.login .nav-tabs {
  border: none;
}
.login .nav-tabs .nav-link {
  margin-left: 6px;
  color: #000;
  border: none;
  opacity: 0.5;
}
.login .nav-tabs .nav-link.active {
  /* border-bottom: 2px solid #ebebeb; */
  opacity: 1;
}
.login small {
  color: red;
}
.login .link,
.login h2 {
  color: #214280;
}
.login .full-h {
  height: 100vh;
}
.login .col-lg-6 {
  /* padding: 35px 30px 35px 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.login .content {
  width: 500px;
}
.login .divider:after,
.login .divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #fff;
}
.login .h-custom {
  height: 100vh;
}
.login .h-custom img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
.login h2 {
  font-size: 1.4em;
}
.login button.btn {
  background-color: #214280;
  color: #fff;
  transition: 0.4s all ease;
  font-size: 16px;
  width: 100%;
}
.login button.btn:hover {
  background-color: #214280;
  color: #fff;
  transform: translateY(-3px);
}
.login input::placeholder {
  font-size: 14px;
  color: #808080;
}
.login label {
  margin-bottom: 2px;
  font-size: 16px;
}
.phone-space select {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ebebeb;
  border-radius: 6px;
}
.send-code-btn {
  border: none;
  padding: 8px 0;
  border-radius: 6px;
  background-color: #214280;
  color: #fff;
  cursor: pointer;
  width: 100%;
  transition: 0.4s all ease;
}
.send-code-btn:hover {
  background-color: #214280;
  color: #fff;
  transform: translateY(-3px);
}
@media (max-width: 1450px) {
  .login .h-custom img {
    height: auto;
  }
}
@media (max-width: 996px) {
  .phone-space select {
    width: max-content;
    padding: 6px;
  }
  .phone-space .col-lg-9 {
    margin-top: 6px;
  }
  .login .content {
    width: 450px;
  }
  .phone-space .col-lg-2 {
    display: flex;
    margin-bottom: 6px;
  }
}
@media (max-width: 450px) {
  .login .h-custom {
    height: 100%;
  }
  .login .content {
    width: 350px;
  }
}
</style>
