<template>
  <div class="container-fluid top-header">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center h-100">
        <div class="">
          <div class="d-none d-lg-block mx-2" style="font-size: 12px">
            {{ $t("StayInStyleTravel") }} <b> 16743 </b>
          </div>
        </div>
        <div class="d-flex m-0 p-0">
          <div class="call-link">
            <a id="tel" :href="'tel:' + PhoneNumber" :title="PhoneNumber">{{
              PhoneNumber
            }}</a>
            <img src="/assets/icons/call-center.png" alt="call" />
          </div>
          <Lang-Switcher />

          <!-- login - register start -->
          <ul class="d-flex m-0 p-0 auth-menu" v-if="!isAuthenticate">
            <li>
              <NuxtLink
                :title="$t('Register')"
                :to="LocalePath('/user/register')"
                style="padding-left: 0"
                >{{ $t("Register") }}</NuxtLink
              >
            </li>
            <li
              style="
                height: 100%;
                display: flex;
                align-items: center;
                margin-top: 0;
              "
            >
              &#x7c;
            </li>
            <li>
              <NuxtLink :title="$t('Login')" :to="LocalePath('/user/login')">{{
                $t("Login")
              }}</NuxtLink>
            </li>
          </ul>
          <!-- login - register end -->

          <!-- profile dropdown start -->
          <div
            class="profile-dropdown dropdown profile-dropdown"
            v-if="isAuthenticate"
          >
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :title="t('Profile')"
            >
              <span>
                <small v-if="GuestUserName"> {{ GuestUserName }} </small>
                <small v-else>
                  {{ $t("Profile") }}
                </small>
                <img src="/assets/icons/user.png" alt="user" class="user-img"
              /></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div class=" ">
                <li>
                  <img src="/assets/icons/user.png" alt="user" />
                  <NuxtLink
                    :title="$t('Profile')"
                    :to="LocalePath('/user/profile')"
                    >{{ $t("Profile") }}</NuxtLink
                  >
                </li>
                <li>
                  <img src="/assets/icons/logout.png" alt="sign-out" />
                  <button
                    type="button"
                    class="btn py-0 px-2"
                    :title="$t('SignOut')"
                    @click="SignOut()"
                  >
                    {{ $t("SignOut") }}
                  </button>
                </li>
              </div>
            </ul>
          </div>
          <!-- profile dropdown end -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const LocalePath = useLocalePath();
const RuntimeConfig = useRuntimeConfig();
const isAuthenticate = ref(false);
const { t } = useI18n();
const Router = useRouter();
const PhoneNumber = ref("");
if (RuntimeConfig.public) {
  PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
}
// cookie user
const User = useCookie("User");
const ShowUserDropdownControl = ref(false);
const Route = useRoute();
// Guest Name
const GuestUserName = ref(null);

onMounted(async () => {
  if (localStorage.getItem("AccessToken")) {
    if (User.value) {
      isAuthenticate.value = true;
      await UseMemberInformations();
    }
  }

  // listen sign out from profile page
  setTimeout(() => {
    if (Route.query) {
      if (Route.query.isAuthenticate) {
        if (Route.query.isAuthenticate == "false") {
          isAuthenticate.value = false;
        }
      }
    }
  }, 200);
});
const SignOut = () => {
  ShowUserDropdownControl.value = false;
  if (window.confirm(t("DoYouConfirmTheLogout")) === true) {
    localStorage.removeItem("AccessToken");
    User.value = null;
    isAuthenticate.value = false;
    Router.push(LocalePath("/"));
  }
};
// const ShowUserDropdown = () => {
//   ShowUserDropdownControl.value =
//     ShowUserDropdownControl.value == true ? false : true;
// };
// use member informations
const UseMemberInformations = async () => {
  const MemberData = await AuthComposable().GetUserInformations();
  //console.log(MemberData.data);
  if (MemberData) {
    if (MemberData.data) {
      if (MemberData.data.name) {
        GuestUserName.value = MemberData.data.name;
        return;
      }
      if (MemberData.data.phone) {
        GuestUserName.value = MemberData.data.phone;
        return;
      } else {
        GuestUserName.value = "Profile";
        return;
      }
    }
  }
};
</script>
<style scoped>
.top-header {
  /* background-color: #f6f6f6; */
  border-bottom: 1px solid #f5f2f2;
}
.top-header .container {
  height: 40px;
}
.top-header ul li {
  display: flex;
  list-style: none;
  margin: 4px 0px;
}
.top-header ul li a {
  text-decoration: none;
  padding: 4px 8px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
}
.top-header figure {
  width: auto;
  height: 40px;
  margin-left: 50px;
}
.top-header figure figcaption {
  width: 100%;
}
.top-header figure img {
  width: 100%;
  height: 100%;
}
.user-select {
  border: none;
  background-color: transparent;
}

.top-header .profile-dropdown {
  align-self: center;
}
.top-header .profile-dropdown li {
  cursor: pointer;
  padding: 0 12px;
  width: max-content;
}
.top-header .profile-dropdown span {
  font-size: 15px;
  padding: 4px 8px 4px 0;
}
.top-header .profile-dropdown span small {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
}
.top-header .profile-dropdown button {
  padding-left: 0;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  border: none;
}
.top-header .profile-dropdown button::after {
  display: none;
}
.top-header .profile-dropdown img {
  height: 14px;
  margin-left: 6px;
  align-self: center;
}
.top-header .profile-dropdown .user-img {
  height: 13px;
  margin-left: 6px;
  align-self: center;
  margin-top: -3px;
}
.top-header .profile-dropdown .dropdown-menu {
  padding: 0;
}
.top-header .call-link {
  align-self: center;
}
.top-header .call-link a {
  align-self: center;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-size: 15px;
}
.top-header .call-link img {
  height: 15px;
  margin-left: 6px;
  align-self: center;
}
.top-header .call-link a:hover {
  text-decoration: underline;
}
@media (max-width: 996px) {
  .top-header .call-link {
    display: none;
  }
}
</style>
