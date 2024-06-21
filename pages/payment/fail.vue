<template>
  <Head>
    <Title>{{ $t("PaymentFailed") }}</Title>
    <Meta name="description" content="geccele"> </Meta>
  </Head>
  <section class="fail-section my-5">
    <div class="container doc">
      <div class="row">
        <div class="text-center desc">{{ $t("PaymentFailed") }}</div>
      </div>
      <div class="row my-4">
        <div class="col-12" v-if="QueryData.code">
          <h6>
            {{ $t("ReservationCode") }}: <b>{{ QueryData.code }}</b>
          </h6>
        </div>
        <div class="col-12">
          {{ $t("ToGetMoreInfoWithResCode") }}&nbsp;
          <nuxt-link
            :to="LocalePath('contact')"
            :title="$t('Contact')"
            target="_blank"
            >{{ $t("Contact") }}</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row buttons">
        <!-- <NuxtLink class="col-lg-2 text-start" :to="LocalePath('/')">{{
          $t("BackHome")
        }}</NuxtLink> -->
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});
const LocalePath = useLocalePath();
// get params from url
const Route = useRoute();
const QueryData = ref({});
if (Route.query) {
  QueryData.value = Route.query;
  //console.log(QueryData.value);
}
</script>

<style scoped>
.fail-section .doc {
  border-radius: 12px;
  border: 1px solid #ebebeb;
  overflow: hidden;
}
.fail-section .desc {
  background-color: #dc3545;
  color: #fff;
  padding: 20px 50px;
  font-size: 1.4em;
}
.fail-section .buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}
.fail-section .buttons button {
  border-radius: 12px;
  border: 1px solid #ebebeb;
  padding: 6px 8px;
}
.fail-section .buttons a {
  color: #4c4c4c;
}
.fail-section a {
  color: #214280;
}
</style>
