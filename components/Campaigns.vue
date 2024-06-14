<template>
  <section class="campaigns-section">
    <div class="container">
      <vueper-slides
        class="no-shadow"
        :visible-slides="1"
        :gap="2"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :touchable="false"
        :bullets="true"
        :arrows-outside="true"
        autoplay
        fade
        :breakpoints="{
          1200: { visibleSlides: 2, slideMultiple: 2 },
          750: { visibleSlides: 1, slideMultiple: 1 },
        }"
      >
        <vueper-slide v-for="(slide, i) in Campaigns" :key="i">
          <template #content>
            <div
              class="vueperslide__content-wrapper"
              style="flex-direction: column"
            >
              <div class="b-content">
                <div class="desc">
                  <img :src="slide.url" :alt="slide.url" />
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </section>
</template>

<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// Screen width
const ScreenWidth = ref(Number);
// Campaigns
const Campaigns = ref([]);
onMounted(() => {
  ScreenWidth.value = HelperComposable().GetScreenWidth();
  SetCampaigns();
});
const SetCampaigns = () => {
  if (ScreenWidth.value >= 1200) {
    Campaigns.value = [
      { url: "/assets/campaigns/webP/campaigns-2.webp" },
      { url: "/assets/campaigns/webP/campaigns-1.webp" },
      { url: "/assets/campaigns/webP/campaigns-3.webp" },
      { url: "/assets/campaigns/webP/campaigns-4.webp" },
    ];
  }
  if (ScreenWidth.value < 1200 && ScreenWidth.value > 750) {
    Campaigns.value = [
      { url: "/assets/campaigns/md/campaigns-2.jpg" },
      { url: "/assets/campaigns/md/campaigns-1.jpg" },
      { url: "/assets/campaigns/md/campaigns-3.jpg" },
      { url: "/assets/campaigns/md/campaigns-4.jpg" },
    ];
  }
  if (ScreenWidth.value <= 750) {
    Campaigns.value = [
      { url: "/assets/campaigns/xs/campaigns-2.jpg" },
      { url: "/assets/campaigns/xs/campaigns-1.jpg" },
      { url: "/assets/campaigns/xs/campaigns-3.jpg" },
      { url: "/assets/campaigns/xs/campaigns-4.jpg" },
    ];
  }
};
</script>

<style>
.campaigns-section {
  margin: 45px auto;
}
.campaigns-section .vueperslide__content-wrapper {
  border-radius: 12px;
  height: 220px !important;
  width: 100%;
  overflow: hidden;
}
.campaigns-section .vueperslides__parallax-wrapper {
  padding-bottom: 22% !important;
}
.campaigns-section .vueperslide__content-wrapper img {
  width: 100%;
  height: 220px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  object-fit: cover;
}
.campaigns-section .vueperslide .b-content {
  width: 100%;
}
.campaigns-section .vueperslides__bullet--active .default {
  background-color: #000;
  width: 6px;
  height: 6px;
}
.campaigns-section .vueperslides__bullet .default {
  width: 13px;
  height: 13px;
}
.campaigns-section .vueperslides__arrow {
  top: 40%;
}
.campaigns-section .vueperslides__arrow svg {
  padding: 25px;
}
@media (max-width: 1400px) {
  .campaigns-section .vueperslides__bullets {
    bottom: -30px;
  }
}
@media (max-width: 996px) {
  .campaigns-section .vueperslides__parallax-wrapper {
    height: 350px;
  }
  .campaigns-section .vueperslides__arrows {
    display: none;
  }
  .campaigns-section .vueperslides__bullets {
    bottom: 0;
  }
}
</style>
