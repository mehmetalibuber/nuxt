<template>
  <Head>
    <Title>{{ $t("DistanceSalesContract") }}</Title>
    <Meta name="description" content="GDPR"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('DistanceSalesContract')" />
  <section>
    <div class="container my-5">
      <div>
        <h2>{{ $t("DistanceSalesContractTitle1") }}</h2>
        <p>
          {{ $t("DistanceSalesContractDesc1") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("DistanceSalesContractTitle2") }}</h2>
        <p>
          {{ $t("DistanceSalesContractDesc2") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("DistanceSalesContractTitle3") }}</h2>
        <p>
          {{ $t("DistanceSalesContractDesc3") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("DistanceSalesContractTitle4") }}</h2>
        <p>
          {{ $t("DistanceSalesContractDesc4") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("DistanceSalesContractTitle5") }}</h2>
        <p>
          {{ $t("DistanceSalesContractDesc5") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
h2 {
  font-size: 1.2em;
  color: #1f407e;
}

p {
  font-size: 1em;
}
</style>
