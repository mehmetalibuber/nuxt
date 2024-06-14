<template>
  <Head>
    <Title>Luxury Residences | Monthly Stay | Geccele</Title>
    <Meta name="description" content="Test content"> </Meta>
  </Head>
  <!-- Reservation Block -->
  <div class="container mt-5">
    <Select-City />
  </div>
  <div class="container px-0 mt-0">
    <Campaigns />
  </div>
  <!-- <section class="main-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="main-box">
            <span> ‘‘ </span>
            <h2>
              Kendini evinde <br />
              hisset!
            </h2>
            <p>
              Lokasyonun en çarpıcı destinasyonlarda kusursuz bir konaklama
              deneyimi mi arıyorsunuz?
            </p>
            <Select-City />
          </div>
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  </section> -->

  <!-- image wrapper -->
  <!-- Home Slider -->
  <PopularDestinations />
  <!-- <Image-Wrapper /> -->

  <section class="home-residences mb-5">
    <div class="container mt-5">
      <div class="row">
        <span>{{ $t("DiscoverWithGeccele") }}</span>
        <h2>
          <!-- {{ $t("HomeGalleryDesc1") }} <br /> -->
          {{ $t("HomeGalleryDesc2") }}
        </h2>
      </div>
      <div class="row mt-2">
        <div class="col-lg-6 left">
          <figure>
            <NuxtImg
              class="img-fluid"
              src="/assets/home/home-gallery/place-1.jpg"
              alt="geccele residence"
              title="Geccele"
              sizes="100vw sm:50vw md:750px"
              quality="90"
              loading="lazy"
            />
          </figure>
        </div>
        <div class="col-lg-6 right">
          <div class="row">
            <div class="col-lg-6" v-for="image in HomeGallery" :key="image">
              <figure>
                <NuxtImg
                  class="img-thumbnail"
                  :src="image.url"
                  alt="geccele"
                  title="Geccele"
                  sizes="250px sm:50vw md:400px"
                  quality="90"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="main-section-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="main-box">
            <span> ‘‘ </span>
            <h2>
              Geccele <br />
              {{ $t("Residencess") }}
            </h2>
            <p>
              {{ $t("HomeMain2Desc") }}
            </p>
            <Select-City />
          </div>
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  </section> -->

  <!-- Experience -->
  <!-- <Experience /> -->

  <!-- According to whom -->
  <!-- <According-To-Whom /> -->
</template>
<script setup>
const CookieFilters = useCookie("Filters");
const HomeGallery = ref([
  {
    url: "/assets/home/home-gallery/place-2.jpg",
  },
  {
    url: "/assets/home/home-gallery/place-3.jpg",
  },
  {
    url: "/assets/home/home-gallery/place-4.jpg",
  },
  {
    url: "/assets/home/home-gallery/place-5.jpg",
  },
]);
definePageMeta({
  layout: "default",
});

onMounted(() => {
  SetCookieFilters(); // for subcity and more filter options
});
const SetCookieFilters = () => {
  if (CookieFilters.value) {
    if (CookieFilters.value.DTO) {
      CookieFilters.value.DTO = [];
    }
    if (CookieFilters.value.SubCities) {
      CookieFilters.value.SubCities = [];
    }
    if (CookieFilters.value.Projects) {
      CookieFilters.value.Projects = [];
    }
  }
};
</script>
<style scoped>
.main-section {
  height: 90vh;
  background-image: url("/assets/home/main-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
}
.main-section .main-box {
  background-color: #fff;
  padding: 55px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 170px;
  margin-right: 150px;
}
.main-section .main-box span {
  font-size: 100px;
  position: absolute;
  margin-left: -35px;
  margin-top: -75px;
  color: #214280;
}
.main-section h2 {
  font-weight: 900;
  font-size: 2.8em;
}
.main-section p {
  font-size: 1.4em;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.7);
}
/* ########## home residences ########### */
.home-residences figure {
  padding: 0;
  margin: 0;
}
.home-residences img {
  object-fit: cover;
  border-radius: 12px;
}
.home-residences .left img {
  border-top-left-radius: 180px;
  height: 450px;
  width: 100%;
}
.home-residences .right img {
  height: 225px;
  width: 100%;
}
.home-residences .right .col-lg-6:last-child img {
  border-bottom-right-radius: 180px;
}
.home-residences span {
  color: #214280;
}
.home-residences h2 {
  font-size: 2.2em;
}

/* ########## main section 2 ########### */
.main-section-2 {
  margin-top: 75px;
  height: 90vh;
  background-image: url("/assets/home/main-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
}
.main-section-2 .main-box {
  background-color: #fff;
  background-color: #fff;
  padding: 55px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 170px;
  margin-right: 150px;
}
.main-section-2 .main-box span {
  font-size: 100px;
  position: absolute;
  margin-left: -35px;
  margin-top: -75px;
  color: #214280;
}
.main-section-2 h2 {
  font-weight: 900;
  font-size: 2.8em;
}
.main-section-2 p {
  font-size: 1.4em;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.7);
}

/*############### responsive design ################*/
@media (max-width: 1300px) {
  .main-section {
    background-position: right;
  }
  .main-section .main-box {
    border-bottom-right-radius: 140px;
    margin-right: 0px;
  }
  .main-section h2 {
    font-size: 2.2em;
  }
  .main-section p {
    font-size: 1.1em;
  }
  .main-section-2 .main-box {
    border-bottom-right-radius: 140px;
    margin-right: 0px;
  }
  .main-section-2 h2 {
    font-size: 2.2em;
  }
  .main-section-2 p {
    font-size: 1.1em;
  }
}
@media (max-width: 996px) {
  .home-residences .left img {
    border-top-left-radius: 180px;
    height: 350px;
  }
  .home-residences {
    margin-top: 75px;
  }
  .home-residences .right .col-lg-6:nth-child(n + 3) {
    display: none;
  }
}
</style>
