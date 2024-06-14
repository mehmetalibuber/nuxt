<template>
  <nav class="navbar navbar-expand-lg navbar-white bg-white header">
    <div class="container">
      <NuxtLink class="navbar-brand" :to="LocalPath('/')">
        <img
          src="/assets/layout/geccele-logo.png"
          alt="logo"
          class="logo"
          width="120"
          height="66"
        />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDarkDropdown"
      >
        <ul class="navbar-nav">
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Estates
            </a>
            <ul class="dropdown-menu dropdown-menu-white">
              <li><a class="dropdown-item" href="#">Menu item 3</a></li>
            </ul>
          </li> -->

          <!-- <li class="nav-item">
            <NuxtLink class="nav-link" to="#" :title="$t('MonthlyStay')">{{
              $t("MonthlyStay")
            }}</NuxtLink>
          </li>-->
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :title="$t('GecceleExperience')"
              :to="LocalPath('/experience')"
              >{{ $t("GecceleExperience") }}</NuxtLink
            >
          </li>
          <li class="nav-item last-link">
            <NuxtLink
              class="nav-link px-3"
              :title="$t('PremiumAccommodation')"
              :to="LocalPath('/destinations')"
            >
              {{ $t("PremiumAccommodation") }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
const LocalPath = useLocalePath();
const ScreenWidth = ref(Number);
onMounted(async () => {
  ScreenWidth.value = HelperComposable().GetScreenWidth();
  if (ScreenWidth.value < 996) {
    const NavLinks = document.querySelectorAll(".header .nav-link");
    const NavbarCollapse = document.querySelector(
      ".header #navbarNavDarkDropdown"
    );
    NavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const collapse = new bootstrap.Collapse(NavbarCollapse);
        collapse.hide();
      });
    });
  }
});
</script>
<style scoped>
.navbar {
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  padding: 0;
}

.navbar .container-fluid {
  padding: 0 35px;
}

.navbar .logo {
  width: 120px;
}

.navbar .nav-link {
  color: #214280;
  font-size: 1em;
  letter-spacing: 0.3px;
}

.navbar .last-link {
  background-color: #214280;
  border-radius: 22px;
  margin-left: 20px;
}

.navbar .last-link .nav-link {
  color: #fff;
  font-weight: 600;
}
@media (max-width: 996px) {
  .navbar .last-link {
    margin-left: 0;
  }
  .navbar-nav {
    padding: 15px 0;
    border-top: 1px solid #cbcbcb;
  }
}
</style>
