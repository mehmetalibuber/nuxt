<template>
  <Head>
    <Title>{{ $t("GDPR") }}</Title>
    <Meta name="description" content="GDPR"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('GDPR')" />
  <section>
    <div class="container my-5">
      <div>
        <h2></h2>
        <p>
          {{ $t("GDPRDesc1") }}
        </p>
        <br />
        <p>
          {{ $t("GDPRDesc2") }}
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
