<template>
  <Head>
    <Title>{{ $t("ForgotPassword") }} - Geccele</Title>
    <Meta name="description" content="Forgot Password"> </Meta>
  </Head>
  <div class="container-fluid px-0 overflow-hidden">
    <section class="forgot-password">
      <div class="container-fluid h-custom px-0">
        <div class="row d-flex justify-content-center align-items-center px-0">
          <div class="col-lg-6 px-0 d-none d-lg-block">
            <img
              src="/assets/images/user/login-cover.jpeg"
              class="img-fluid"
              alt="forgot password"
            />
          </div>
          <div class="col-lg-6">
            <h2>{{ $t("ForgotPassword") }}</h2>
            <hr />
            <form>
              <!-- Email input -->
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example3"
                  >{{ $t("EmailAddress") }}
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  :placeholder="$t('EmailAddress')"
                />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                >
                  {{ $t("ResetPassword") }}
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  <!-- {{ $t("RetunLoginPage") }} -->
                  <NuxtLink
                    :to="localPath('/user/login')"
                    class="link-danger"
                    title="Login"
                    >{{ $t("RetunLoginPage") }}</NuxtLink
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
definePageMeta({
  layout: "authentication",
});

const localPath = useLocalePath();
const Auth = useCookie("isAuthenticated");
onMounted(() => {
  setTimeout(() => {
    Auth.value = true;
  }, 5000);
});
</script>

<style scoped>
.forgot-password small {
  color: red;
}
.forgot-password .divider:after,
.forgot-password .divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #fff;
}
.forgot-password .col-lg-6:last-child {
  padding: 35px 30px 35px 30px;
}
.forgot-password .h-custom img {
  height: 550px;
  width: 100%;
  object-fit: cover;
}
.forgot-password h2 {
  font-size: 1.4em;
}
.forgot-password .h-custom {
  height: calc(100% - 73px);
}
.forgot-password button.btn {
  background-color: #b24693;
  color: #fff;
  transition: 0.4s all ease;
  font-size: 16px;
}
.forgot-password button.btn:hover {
  background-color: #b24693;
  color: #fff;
  transform: translateY(-3px);
}
.forgot-password input::placeholder {
  font-size: 14px;
  color: #808080;
}
.forgot-password label {
  margin-bottom: 2px;
  font-size: 16px;
}
@media (max-width: 450px) {
  .forgot-password .h-custom {
    height: 100%;
  }
}
</style>
