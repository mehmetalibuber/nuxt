<template>
  <Head>
    <Title>{{ $t("AboutUs") }}</Title>
    <Meta name="description" content="about geccele"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('AboutUs')" />
  <section>
    <div class="container my-5">
      <div>
        <h2>{{ $t("AboutUsTitle1") }}</h2>
        <p>
          {{ $t("AboutUsDesc1") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("AboutUsTitle2") }}</h2>
        <p>
          {{ $t("AboutUsDesc2") }}
          <br />
          <br />
          {{ $t("AboutUsDesc3") }}
        </p>
        <p class="m-0">{{ $t("ForMoreInformation") }}</p>
        <a
          class="tech-direct"
          href="https://geccele.tech"
          title="Geccele Tech"
          target="_blank"
          >Geccele Tech</a
        >
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
.tech-direct {
  color: #1f407e;
}
</style>
