<template>
  <footer>
    <div class="container top">
      <div class="row">
        <div class="col-lg-6">
          <div class="col-xl-12 align-self-middle">
            <figure class="logo">
              <NuxtImg
                src="/assets/layout/by-geccele-logo.png"
                alt="by geccele"
                quality="90"
                loading="lazy"
                width="180"
                height="51"
              />
            </figure>
          </div>
          <div class="col-xl-12 my-2 align-self-middle discover">
            <a :href="DiscoverWithGecceleUrl" target="_blank">
              <b> #gecceleilekesfet </b></a
            >
          </div>
          <div class="col-xl-12 align-self-middle">
            <NuxtImg
              class="icon"
              src="/assets/icons/bell.png"
              alt="bell"
              loading="lazy"
              width="15"
              height="15"
            />&nbsp; {{ $t("BeInformedOfCampaigns") }}
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-xl-3 col-lg-4 title">
              <h2>
                <b>
                  {{ $t("Company") }}
                </b>
              </h2>
              <ul>
                <li>
                  <NuxtLink
                    :title="$t('AboutUs')"
                    :to="localPath('/about-us')"
                    >{{ $t("AboutUs") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    :title="$t('Contact')"
                    :to="localPath('/contact')"
                    >{{ $t("Contact") }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="col-xl-4 col-lg-6 title">
              <h2>
                <b>
                  {{ $t("Reservation") }}
                </b>
              </h2>
              <ul>
                <li>
                  <NuxtLink
                    :to="localPath('/faq/how-to-make-a-reservation')"
                    :title="$t('HowToMakeReservation')"
                    >{{ $t("HowToMakeReservation") }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row middle">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-xl-3 col-lg-4">
              <h2>
                <b> {{ $t("FollowUs") }} </b>
              </h2>
            </div>
            <div class="col-lg-3">
              <div class="row icons">
                <div class="col-3">
                  <a :href="InstagramUrl" title="instagram" target="_blank">
                    <NuxtImg
                      class="icon"
                      src="/assets/icons/instagram.png"
                      alt="instagram"
                      loading="lazy"
                      width="15"
                      height="15"
                    />
                  </a>
                </div>
                <div class="col-3">
                  <a :href="FacebookUrl" title="facebook" target="_blank">
                    <NuxtImg
                      class="icon"
                      src="/assets/icons/facebook.png"
                      alt="facebook"
                      loading="lazy"
                      width="15"
                      height="15"
                    />
                  </a>
                </div>
                <div class="col-3">
                  <a :href="LinkedinUrl" title="linkedin" target="_blank">
                    <NuxtImg
                      class="icon"
                      src="/assets/icons/linkedin.png"
                      alt="linkedin"
                      loading="lazy"
                      width="15"
                      height="15"
                    />
                  </a>
                </div>
                <div class="col-3">
                  <a href="#" title="youtube" target="_blank">
                    <img
                      class="icon"
                      src="/assets/icons/youtube.png"
                      alt="youtube"
                      loading="lazy"
                      width="15"
                      height="15"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <a
                href="https://antalyasuites.com/blog"
                target="_blank"
                style="color: #b7418a"
                title="AntalyaSuites Blog"
              >
                <h2 style="color: #b7418a">
                  <b> AntalyaSuites Blog </b>
                </h2></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-xl-7 col-md-12 tursab-side">
          <p class="tursab-text">
            {{ $t("StayInStyleTravel") }} <b>{{ TursabNumber }}</b>
          </p>
          <p class="mt-1 warning-text">
            {{ $t("AllAdvertisedPrices") }}
          </p>
        </div>
        <div class="col-xl-5 col-lg-12">
          <div class="row">
            <div class="col-lg-9 border-left">
              <div>
                <h2 class="">
                  <b> {{ $t("OnlineHelp") }} </b> &nbsp;
                  <NuxtImg
                    class="icon align-self-center"
                    style="margin-top: 0"
                    src="/assets/icons/phone-call.png"
                    alt="call"
                    loading="lazy"
                    width="15"
                    height="15"
                  />
                </h2>
                <p class="mt-3">
                  <b> {{ $t("CallUs") }}</b>
                </p>
                <a id="tel" :href="'tel:' + PhoneNumber" :title="PhoneNumber">{{
                  PhoneNumber
                }}</a>
                <p>{{ $t("Or") }}</p>
                <span
                  title="Call Me"
                  style="cursor: pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#callbackModal"
                >
                  <b>{{ $t("WeCallYou") }}</b> &nbsp;
                  <NuxtImg
                    class="icon align-self-center"
                    style="margin-top: 0"
                    src="/assets/icons/call.png"
                    alt="call"
                    loading="lazy"
                    width="15"
                    height="15"
                  />
                </span>
              </div>
            </div>
            <div class="col-lg-3 customer-side">
              <figure class="">
                <NuxtImg
                  src="/assets/icons/customer-services.png"
                  alt="customer"
                  loading="lazy"
                  quality="80"
                  width="150"
                  height="137"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-1 contracts">
      <div class="row c-side">
        <div class="col align-self-center">
          <h2>
            <b> {{ $t("Contracts") }} & {{ $t("GDPR") }} </b>
          </h2>
        </div>
        <div class="col-lg-10">
          <ul>
            <li>
              <NuxtLink
                :to="localPath('/contracts/privacy-policy')"
                :title="$t('PrivacyPolicy')"
                >{{ $t("PrivacyPolicy") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localPath('/contracts/booking-conditions')"
                :title="$t('BookingConditions')"
                >{{ $t("BookingConditions") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localPath('/contracts/gdpr')"
                :title="$t('GDPR')"
                >{{ $t("GDPR") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localPath('/contracts/cookie-policy')"
                :title="$t('CookiePolicy')"
                >{{ $t("CookiePolicy") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localPath('/contracts/cancellation-and-refund-conditions')"
                :title="$t('CancellationAndRefundConditions')"
                >{{ $t("CancellationAndRefundConditions") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localPath('/contracts/preliminary-information-form')"
                :title="$t('PreliminaryInformationForm')"
                >{{ $t("PreliminaryInformationForm") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localPath('/contracts/distance-sales-contract')"
                :title="$t('DistanceSalesContract')"
                >{{ $t("DistanceSalesContract") }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- ############ payment ###########3 -->
      <div class="row payment">
        <div class="col-lg-6">
          <a
            href="https://www.tursab.org.tr/tr/ddsv"
            target="_blank"
            title="tursab"
          >
            <figure>
              <NuxtImg
                src="/assets/layout/tursab-dds.png"
                alt="tursab"
                loading="lazy"
                width="160"
                height="100%"
                style="width: 160px"
              />
            </figure>
          </a>
        </div>
        <div class="col-lg-6">
          <ul>
            <li>
              <figure>
                <NuxtImg
                  src="/assets/icons/payment/tursab.png"
                  alt="tursab"
                  loading="lazy"
                  width="140"
                  height="35"
                />
              </figure>
            </li>
            <li>
              <figure>
                <NuxtImg
                  src="/assets/icons/payment/mastercard.png"
                  alt="mastercard"
                  loading="lazy"
                  width="35"
                  height="35"
                />
              </figure>
            </li>
            <li>
              <figure>
                <NuxtImg
                  src="/assets/icons/payment/visa.png"
                  alt="visa"
                  loading="lazy"
                  width="35"
                  height="35"
                />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const localPath = useLocalePath();
const RuntimeConfig = useRuntimeConfig();
// information
const PhoneNumber = ref("");
const TursabNumber = ref("");
const InstagramUrl = ref("");
const FacebookUrl = ref("");
const LinkedinUrl = ref("");
const DiscoverWithGecceleUrl = ref("");
if (RuntimeConfig.public) {
  PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
  TursabNumber.value = RuntimeConfig.public.TURSAB_NUMBER;
  InstagramUrl.value = RuntimeConfig.public.INSTAGRAM_URL;
  FacebookUrl.value = RuntimeConfig.public.FACEBOOK_URL;
  LinkedinUrl.value = RuntimeConfig.public.LINKEDIN_URL;
  DiscoverWithGecceleUrl.value = RuntimeConfig.public.DISCOVER_WITH_GECCELE_URL;
}
</script>
<style scoped>
footer {
  color: #3b65c4;
  padding: 3% 0 0 0;
}
footer .top {
  padding: 25px 45px;
  background-color: #fafbfd;
  border-radius: 8px;
}

footer .align-self-middle {
  align-self: center;
}
footer .company {
  margin-top: 25px;
}
footer .logo {
  width: 140px;
  margin-left: -10px;
  cursor: pointer;
}

footer ul {
  margin: 0;
  padding: 0;
}

footer ul li {
  list-style: none;
}

footer ul li a {
  text-decoration: none;
  color: #3b65c4;
}

footer h2 {
  font-size: 1em;
  color: #3b65c4;
}
footer p {
  margin-bottom: 0;
}
footer .tursab-text {
  font-size: 0.9em;
}
footer .warning-text {
  opacity: 0.7;
  font-size: 0.7em;
}
footer .icon {
  width: 15px;
  align-self: center;
  margin-top: -5px;
}
footer a {
  text-decoration: none;
  color: #3b65c4;
}
footer .border-left {
  padding-left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: left;
}
footer .customer-side {
  display: flex;
  justify-content: flex-end;
}
footer .customer-side figure {
  width: 150px;
  position: absolute;
  margin-top: 18px;
}
footer .customer-side figure img {
  width: 100%;
  border-radius: 15px;
}
footer .logo {
  width: 180px;
}
footer .logo img {
  width: 100%;
}
/*################# footer contracts ####################*/
footer .contracts {
  padding: 25px 45px;
}
footer .contracts h2 {
  font-size: 0.9em;
  padding: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  align-self: center;
}
footer .contracts ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
footer .contracts ul li {
  margin-right: 12px;
}
footer .contracts ul li a {
  font-size: 0.8em;
}
footer .payment {
  border-top: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
  padding: 8px;
  margin-top: 4px;
  display: flex;
  align-items: center;
}
footer .payment .col-lg-6 {
  padding: 0 5px;
}
footer .payment ul {
  display: flex;
  justify-content: flex-end;
}
footer .payment ul li {
  margin-left: 15px;
}

footer .payment img {
  height: 100%;
  width: 100%;
}
footer .middle {
  margin-top: 50px;
}
footer .title {
  padding-top: 20px;
}
footer .tursab-side {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
}
footer .tursab-side p {
  width: 100%;
}
/*################### responsive design #####################*/
@media (max-width: 1400px) {
  footer .tursab-text {
    margin-top: 0;
    font-size: 0.8em;
  }
}
@media (max-width: 1200px) {
  footer .contracts .c-side,
  footer .contracts ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  footer .customer-side {
    display: none;
  }
  footer .payment ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
  }
  footer .border-left {
    margin-top: 25px;
    padding-left: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  footer .border-left div {
    width: 100%;
  }
}
@media (max-width: 996px) {
  footer .contracts ul {
    display: flex;
    flex-direction: column;
  }
  footer .middle .icons {
    margin: 4px 0 15px 0;
    max-width: 125px;
  }

  footer .online {
    display: none;
  }
  footer .border-left {
    margin: 12px 0;
  }
  footer .payment a {
    text-align: center;
  }
  footer .payment ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
  }
  footer .title {
    margin-top: 25px;
  }
  footer .middle {
    margin-top: 25px;
  }
  footer .company {
    margin-top: 0;
  }
  footer .discover {
    margin: 6px 0;
  }
}
</style>
