<template>
  <div class="container my-5 pt-3">
    <div class="row top">
      <h2>{{ $t("YouMayBeInterestedIn") }}</h2>
      <p>
        {{ $t("YouMayBeInterestedInDesc") }}
      </p>
    </div>
    <div class="similar-destinations">
      <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :gap="2"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :touchable="false"
        :bullets="true"
        :breakpoints="{
          1200: { visibleSlides: 2, slideMultiple: 2 },
          450: { visibleSlides: 1, slideMultiple: 1 },
        }"
      >
        <vueper-slide v-for="(slide, i) in Destinations.slice(0, 3)" :key="i">
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
                      <h2 v-if="slide.name.length > 35">
                        {{ slide.name.slice(0, 35) }}..
                      </h2>
                      <h2 v-else>{{ slide.name }}</h2>
                    </NuxtLink>
                    <p v-if="slide.description">
                      {{ $t(slide.description.slice(0, 75)) }}...
                    </p>
                    <NuxtLink
                      class="btn"
                      :to="localPath('/destinations/' + slide.id)"
                      >{{ $t("ViewDetails") }} →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>
<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import config from "@/config.js";
const Destinations = ref([]);
const DesData = ref({});
const ImageFilePrefix = ref("");
const localPath = useLocalePath();
const RuntimeConfig = useRuntimeConfig();
// onMounted. after work page load
onMounted(async () => {
  const CRMHost = RuntimeConfig.public.CRM_HOST;
  ImageFilePrefix.value = `${CRMHost}/files/IMAGE/`;
  DesData.value = await DestinationComposable().GetSimilarDestinations();
  Destinations.value = DesData.value.data.content;
});
// listen to changes
watch(() => {
  DesData.value;
  Destinations.value;
});
</script>
<style>
.container .top h2 {
  font-size: 2.2em;
}

.similar-destinations {
  background-color: #fff;
}

.similar-destinations .vueperslide {
  margin: 10px auto;
}

.similar-destinations .vueperslide .b-content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.similar-destinations .vueperslide .b-content .desc {
  overflow: hidden;
  height: 320px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.similar-destinations .vueperslide .b-content .desc .bottom {
  padding: 8px 6px;
}

.similar-destinations .vueperslide__content-wrapper {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 12px;
    padding: 5px; */
  border-radius: 12px;
}

.similar-destinations .vueperslide__content-wrapper img {
  width: 100%;
  object-fit: cover;
  height: 180px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.similar-destinations .vueperslide__content-wrapper h2 {
  font-size: 18px;
  padding: 5px 0;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.766);
  font-weight: 600;
}

.similar-destinations .vueperslide__content-wrapper p {
  font-size: 16px;
  text-align: left;
  margin-bottom: 0;
}

.similar-destinations .vueperslide__content-wrapper a {
  color: #b24693 !important;
  text-transform: none;
  width: 100%;
  text-align: left;
  text-decoration: none;
  margin-top: 0;
}

.similar-destinations .vueperslide__content-wrapper .btn {
  /* background-color: #b24693; */
  color: #b24693;
  background-color: transparent;
  border-radius: 8px;
  padding-left: 0;
}

.btn:active {
  border-color: transparent;
}

.similar-destinations .vueperslides__arrow svg {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: #fff;
}

.similar-destinations .vueperslides__arrow--prev {
  left: -1.5em;
  opacity: 1;
  overflow: hidden;
  padding: 0;
}

.similar-destinations .vueperslides__arrow--next {
  right: -1.5em;
  opacity: 1;
}
@media (max-width: 1400px) {
  .similar-destinations .vueperslides__parallax-wrapper {
    height: 350px;
  }
}
@media (max-width: 996px) {
  .similar-destinations .vueperslides__arrows {
    display: none;
  }
  .similar-destinations .vueperslides__bullets {
    bottom: auto;
    position: relative;
  }
  .similar-destinations .vueperslides__bullet--active .default {
    border-width: 6px;
    background: #000;
  }
}
</style>
