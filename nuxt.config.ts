import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "tr-TR",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "stylesheet", href: "/lib/Bootstrap/bootstrap.min.css" },
        //  { rel: "stylesheet", href: "/lib/Swiper/swiper-bundle.css" },
        { rel: "stylesheet", href: "/css/mainLayout.css" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [{ src: "/lib/Bootstrap/bootstrap.bundle.min.js" }],
    },
  },

  modules: ["@nuxtjs/i18n", "nuxt-snackbar", "@nuxt/image", "@nuxtjs/robots"],

  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "tr",
        iso: "tr",
        name: "Türkçe",
        file: "tr.json",
        icon: "/assets/icons/tr.png",
      },
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
        icon: "/assets/icons/en.png",
      },
    ],
    defaultLocale: "tr",
    // vueI18n: {
    //   fallbackLocale: "en-US",
    // },
  },
  runtimeConfig: {
    public: {
      CRM_HOST: process.env.CRM_HOST,
      CALL_CENTER_PHONE_NUMBER: process.env.CALL_CENTER_PHONE_NUMBER,
      EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
      INSTAGRAM_URL: process.env.INSTAGRAM_URL,
      FACEBOOK_URL: process.env.FACEBOOK_URL,
      LINKEDIN_URL: process.env.LINKEDIN_URL,
      TURSAB_NUMBER: process.env.TURSAB_NUMBER,
      DISCOVER_WITH_GECCELE_URL: process.env.DISCOVER_WITH_GECCELE_URL,
      GECCELE_ADDRESS: process.env.GECCELE_ADDRESS,
      GECCELE_IFRAME_URL: process.env.GECCELE_IFRAME_URL,
    },
  },
  snackbar: {
    bottom: true,
    left: true,
    duration: 5000,
  },
});
