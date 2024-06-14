<template>
  <Head>
    <Title>{{ $t("CookiePolicy") }}</Title>
    <Meta name="description" content="Cookie Policy"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('CookiePolicy')" />
  <section>
    <div class="container my-5">
      <div>
        <h2></h2>
        <p>
          {{ $t("CookiePolicyDesc1") }}
        </p>
        <br />
        <p>
          {{ $t("CookiePolicyDesc2") }}
        </p>
        <br />
        <p>
          {{ $t("CookiePolicyDesc3") }}
        </p>
        <br />
        <p>
          {{ $t("CookiePolicyDesc4") }}
        </p>
        <br />
        <p>
          {{ $t("CookiePolicyDesc4") }}
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
