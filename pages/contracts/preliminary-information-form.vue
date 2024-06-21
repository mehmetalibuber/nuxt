<template>
  <Head>
    <Title>{{ $t("PreliminaryInformationForm") }}</Title>
    <Meta name="description" content="Preliminary Information Form"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('PreliminaryInformationForm')" />
  <section>
    <div class="container my-5">
      <div>
        <h2>{{ $t("PreliminaryInformationForm") }}</h2>
        <p>{{ $t("PreliminaryInformationFormDesc1") }}</p>
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
