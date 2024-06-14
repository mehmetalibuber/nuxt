<template>
  <Head>
    <Title>{{ $t("PageNotFound") }} - Geccele</Title>
    <Meta name="description" content="Page not found"> </Meta>
  </Head>
  <section class="err-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 text-end">
          <h1>:(</h1>
        </div>
        <div class="col-lg-9">
          <h2>OOPS - {{ $t("PageNotFoundYouAreLooking") }}</h2>
          <p>
            {{ $t("PageNotFoundYouAreLookingDesc") }}
          </p>
          <NuxtLink :to="LocalePath('/')"> {{ $t("Home") }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const LocalePath = useLocalePath();
const CookieFilters = useCookie("Filters");
onMounted(() => {
  if (CookieFilters.value) {
    if (CookieFilters.value.CurrentPage > 0) {
      CookieFilters.value.CurrentPage = 0;
    }
  }
});
</script>

<style scoped>
.err-section {
  height: 65vh;
}
.err-section .container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.err-section h1 {
  font-family: "Passion One", cursive;
  color: #214280;
  font-size: 90px;
  letter-spacing: 10.5px;
  margin: 0px;
  font-weight: 900;
}

.err-section h2 {
  font-family: "Raleway", sans-serif;
  color: #292929;
  font-size: 28px;
  font-weight: 700;
  max-width: 750px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin-top: 0;
}

.err-section p {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  margin-top: 15px;
}

.err-section a {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #fff;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #292929;
  font-weight: 700;
  -webkit-box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.3);
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.err-section a:hover {
  color: #fff;
  background-color: #214280;
}

@media (max-width: 996px) {
  .err-section h1 {
    text-align: center;
  }

  .err-section h2 {
    margin-top: 15px;
  }
}
</style>
