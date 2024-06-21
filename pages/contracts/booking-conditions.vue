<template>
  <Head>
    <Title>{{ $t("BookingConditions") }}</Title>
    <Meta name="description" content="Booking Conditions"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('BookingConditions')" />
  <section>
    <div class="container my-5">
      <div>
        <h2></h2>
        <p>
          {{ $t("BookingConditionsDesc1") }}
        </p>
        <br />
        <p>
          {{ $t("BookingConditionsDesc1") }}
        </p>
        <br />
        <p>
          {{ $t("BookingConditionsDesc1") }}
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
