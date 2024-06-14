<template>
  <section class="p-destination">
    <div class="container my-2">
      <div class="row top">
        <h2>{{ $t("DiscoverGecceleResidences") }}</h2>
        <p>
          {{ $t("ExplorePopularDestinationsDesc") }}
        </p>
      </div>
      <div class="popular-destinations">
        <vueper-slides
          :aria-hidden="false"
          autoplay
          class="no-shadow"
          :visible-slides="4"
          :gap="2"
          :slide-ratio="1 / 4"
          :touchable="false"
          slideMultiple
          :bullets="true"
          :breakpoints="{
            1200: { visibleSlides: 2, slideMultiple: 2 },
            450: { visibleSlides: 1, slideMultiple: 1 },
          }"
        >
          <vueper-slide
            v-for="(slide, i) in Destinations"
            :key="i"
            :aria-hidden="false"
          >
            <template #content>
              <div
                class="vueperslide__content-wrapper"
                style="flex-direction: column"
              >
                <div class="b-content">
                  <div class="desc">
                    <NuxtLink
                      :to="localPath('/destinations/' + slide.id)"
                      :title="slide.name"
                    >
                      <img
                        v-if="slide.media[0]"
                        :src="ImageFilePrefix + slide.media[0].url"
                        :alt="slide.name"
                        loading="lazy"
                      />
                      <img
                        v-else
                        src="/assets/layout/404-not-found.png"
                        class="card-img"
                        alt="not found"
                        loading="lazy"
                      />
                    </NuxtLink>
                    <div class="bottom">
                      <NuxtLink
                        :to="localPath('/destinations/' + slide.id)"
                        :title="slide.name"
                      >
                        <h2 v-if="slide.name.length > 27">
                          {{ slide.name.slice(0, 27) }}..
                        </h2>
                        <h2 v-else>{{ slide.name }}</h2>
                      </NuxtLink>
                      <p>{{ slide.description.slice(0, 55) }}...</p>
                      <NuxtLink
                        class="btn"
                        :to="localPath('/destinations/' + slide.id)"
                        :title="$t('ViewDetails')"
                        >{{ $t("ViewDetails") }} →</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </section>
</template>
<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
//import config from "@/config.js";
const Destinations = ref([]);
const ImageFilePrefix = ref("");
const localPath = useLocalePath();
let RuntimeConfig = useRuntimeConfig();

// onMounted. after work page load
onMounted(async () => {
  const CRMHost = RuntimeConfig.public.CRM_HOST;
  ImageFilePrefix.value = `${CRMHost}/files/IMAGE/`;
  const DesData = await DestinationComposable().GetPopularDestinations();
  Destinations.value = MixDataAsRandom(DesData.data.content);
});
// Fisher-Yates mix algorithm
const MixDataAsRandom = (popularData) => {
  for (let i = popularData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [popularData[i], popularData[j]] = [popularData[j], popularData[i]];
  }
  // console.log(popularData);
  return popularData;
};
// listen to changes
watch(() => {
  Destinations.value;
});
</script>
<style>
.p-destination {
  margin: 25px auto;
}
.container .top h2 {
  font-size: 2.2em;
}

.popular-destinations {
  background-color: #fff;
}

.popular-destinations .vueperslide {
  margin: 10px auto;
}

.popular-destinations .vueperslide .b-content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.popular-destinations .vueperslide .b-content .desc {
  overflow: hidden;
  height: 320px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.popular-destinations .vueperslide .b-content .desc .bottom {
  padding: 8px 6px;
}

.popular-destinations .vueperslide__content-wrapper {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 12px;
  padding: 5px; */
  border-radius: 12px;
}

.popular-destinations .vueperslide__content-wrapper img {
  width: 100%;
  object-fit: cover;
  height: 180px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.popular-destinations .vueperslide__content-wrapper h2 {
  font-size: 18px;
  padding: 5px 0;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.766);
  font-weight: 600;
}

.popular-destinations .vueperslide__content-wrapper p {
  font-size: 16px;
  text-align: left;
  margin-bottom: 0;
}

.popular-destinations .vueperslide__content-wrapper a {
  color: #000;
  text-transform: none;
  width: 100%;
  text-align: left;
  text-decoration: none;
}

.popular-destinations .vueperslide__content-wrapper .btn {
  /* background-color: #b24693; */
  color: #b24693;
  background-color: transparent;
  border-radius: 8px;
  padding-left: 0;
}

.btn:active {
  border-color: transparent;
}

.popular-destinations .vueperslides__arrow svg {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: #fff;
  color: #000;
}

.popular-destinations .vueperslides__arrow--prev {
  left: -1.5em;
  opacity: 1;
  overflow: hidden;
  padding: 0;
}

.popular-destinations .vueperslides__arrow--next {
  right: -1.5em;
  opacity: 1;
}
.popular-destinations .vueperslides__bullets {
  display: none;
}
@media (max-width: 1400px) {
  .popular-destinations .vueperslides__parallax-wrapper {
    height: 350px;
  }
}
@media (max-width: 996px) {
  .popular-destinations .vueperslides__arrows {
    display: block;
    position: relative;
    margin-top: 15px;
  }
  .popular-destinations .vueperslides__arrow svg {
  }
  .popular-destinations .vueperslides__arrow--prev {
    left: 0;
    opacity: 1;
    overflow: hidden;
    padding: 0;
  }

  .popular-destinations .vueperslides__arrow--next {
    right: 0;
    opacity: 1;
  }
  .popular-destinations .vueperslides__bullets {
    display: none;
    bottom: auto;
    margin-top: -10px;
  }
  .popular-destinations .vueperslides__bullet--active .default {
    border-width: 6px;
    background: #000;
    background-color: #000;
  }
}
</style>
