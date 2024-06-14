<template>
  <Head>
    <Title>{{ $t("YourOrderHasBeenPlacedSuccessfully") }}</Title>
    <Meta name="description" content="geccele"> </Meta>
  </Head>
  <section class="success-section my-5">
    <div class="container doc" id="pdfSection">
      <div class="row">
        <div class="text-center desc">
          &check; {{ $t("YourOrderHasBeenPlacedSuccessfully") }}
        </div>
      </div>
      <div class="row my-4">
        <div class="col-lg-4" v-if="QueryData.user">
          <div>
            <h6>{{ $t("Guest") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.user }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.startDate">
          <div>
            <h6>{{ $t("CheckIn") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.startDate }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.endDate">
          <div>
            <h6>{{ $t("CheckOut") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.endDate }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.estate">
          <div>
            <h6>{{ $t("Estate") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.estate }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.phone">
          <div>
            <h6>{{ $t("PhoneNumber") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.phone }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.orderNumber">
          <div>
            <h6>{{ $t("OrderNumber") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.orderNumber }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.adultCount">
          <div>
            <h6>{{ $t("Adult") }}&nbsp;{{ $t("Count") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.adultCount }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.childCount">
          <div>
            <h6>{{ $t("Child") }}&nbsp;{{ $t("Count") }}:</h6>
          </div>
          <div>
            <p>{{ QueryData.childCount }}</p>
          </div>
        </div>
        <div class="col-lg-4" v-if="QueryData.totalAmount">
          <div>
            <h6>{{ $t("Total") }}&nbsp;{{ $t("Price") }}:</h6>
          </div>
          <div>
            <p>
              {{ Number((QueryData.totalAmount * 36.5533).toFixed(2)) }} &nbsp;₺
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row buttons">
        <!--   <NuxtLink class="col-lg-2 text-start" :to="LocalePath('/')">{{
          $t("BackHome")
        }}</NuxtLink>
      <button class="col-lg-2" @click="SaveAsPDF">
          {{ $t("SaveAsPdf") }}
        </button> -->
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});
const LocalePath = useLocalePath();
const html2pdf = ref(null);
onMounted(async () => {
  const module = await import("html2pdf.js");
  html2pdf.value = module.default;
});
function SaveAsPDF() {
  const Content = document.getElementById("pdfSection");
  var opt = {
    margin: 1,
    filename: "geccele-order.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf.value().set(opt).from(Content).save();
}
// get params from url
const Route = useRoute();
const QueryData = ref({});

if (Route.fullPath) {
  const DecodedUrl = decodeURIComponent(Route.fullPath);
  const ParamsFromArray = DecodedUrl.split("&");
  const QueryParams = {};

  ParamsFromArray.forEach((param) => {
    const [key, value] = param.split("=");
    QueryParams[key] = value;
  });
  QueryData.value = QueryParams;
  // console.log(QueryParams);
}
</script>

<style scoped>
.success-section .doc {
  border-radius: 12px;
  border: 1px solid #ebebeb;
  overflow: hidden;
}
.success-section .desc {
  background-color: #6ebf58;
  color: #fff;
  padding: 20px 50px;
  font-size: 1.4em;
}
.success-section .buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}
.success-section .buttons button {
  border-radius: 12px;
  border: 1px solid #ebebeb;
  padding: 6px 8px;
}
.success-section .buttons a {
  color: #4c4c4c;
}
.success-section .col-lg-4 {
  margin-top: 15px;
}
</style>
