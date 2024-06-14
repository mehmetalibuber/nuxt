<template>
  <Head>
    <Title>{{ $t("Contact") }}</Title>
    <Meta name="description" content="geccele contact"> </Meta>
  </Head>

  <Breadcrumb :PageTitle="$t('Contact')" />

  <section class="container contact-section">
    <div class="">
      <div class="row">
        <div class="col-lg-7">
          <div class="col">
            <div class="row">
              <div class="col-lg-6">
                <h2>{{ $t("ContactUs") }}</h2>
                <p>{{ $t("ContactUsDesc") }}</p>
              </div>
              <div class="col-lg-6">
                <!-- <img src="/assets/layout/geccele-logo.png" alt="Antalya Suites Logo" /> -->
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row mt-3">
              <div class="col-lg-6">
                <div class="contact-box">
                  <h6>{{ $t("ContactInfo") }}</h6>
                  <p>{{ $t("ContactInfoDesc") }}</p>
                  <a id="tel" :href="'tel:' + PhoneNumber" :title="PhoneNumber">
                    {{ PhoneNumber }}</a
                  >
                  <br />
                  <a
                    id="mail"
                    :href="'mailto:' + EmailAddress"
                    :title="EmailAddress"
                    >{{ EmailAddress }}</a
                  >
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-box">
                  <h6>{{ $t("HostSupport") }}</h6>
                  <p>{{ $t("HostSupportDesc") }}</p>
                  <p>
                    {{ GecceleAddress }}
                  </p>
                </div>
              </div>
              <div class="col-lg-6"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <iframe
            :src="GecceleIframe"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const localPath = useLocalePath();
definePageMeta({
  layout: "default",
});
const RuntimeConfig = useRuntimeConfig();
// information
const PhoneNumber = ref("");
const EmailAddress = ref("");
const GecceleAddress = ref("");
const GecceleIframe = ref("");

if (RuntimeConfig.public) {
  PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
  EmailAddress.value = RuntimeConfig.public.EMAIL_ADDRESS;
  GecceleAddress.value = RuntimeConfig.public.GECCELE_ADDRESS;
  GecceleIframe.value = RuntimeConfig.public.GECCELE_IFRAME_URL;
}
</script>

<style scoped>
/* contact section start */
.contact-section {
  margin: 6% auto;
}

.contact-section img {
  width: 140px;
}

.contact-section .contact-box {
  border: 1px solid #cbcbcb;
  height: 160px;
  border-radius: 12px;
  padding: 15px;
  margin-top: 15px;
}

.contact-section h2 {
  font-size: 2em;
  font-weight: 600;
}

.contact-section h6 {
  font-size: 1.2em;
  font-weight: 600;
}

.contact-section a {
  text-decoration: none;
  color: #c553ac;
}

.contact-section a:hover {
  color: #c553ac;
}

.contact-section iframe {
  border: 1px solid #cbcbcb;
  border-radius: 12px;
  width: 100%;
  height: 100%;
}

/*##### responsive design ######*/
@media (max-width: 996px) {
  .contact-section img {
    display: none;
  }

  .contact-section iframe {
    height: 300px;
    margin-top: 15px;
  }
}
</style>
