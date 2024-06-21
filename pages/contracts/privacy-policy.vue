<template>
  <Head>
    <Title>{{ $t("PrivacyPolicy") }}</Title>
    <Meta name="description" content="Privacy Policy"> </Meta>
  </Head>
  <Breadcrumb :PageTitle="$t('PrivacyPolicy')" />
  <section>
    <div class="container my-5">
      <div>
        <h2>{{ $t("PrivacyPolicyTitle1") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc1") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle2") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc2") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle3") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc3") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle4") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc4") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle5") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc5") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle6") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc6") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle7") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc7") }}
        </p>
      </div>
      <div>
        <h2>{{ $t("PrivacyPolicyTitle8") }}</h2>
        <p>
          {{ $t("PrivacyPolicyDesc8") }}
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
