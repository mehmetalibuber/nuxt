import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["snackbar"]?: typeof import("nuxt-snackbar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-snackbar", Exclude<NuxtConfig["snackbar"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   snackbar: {
      top: boolean,

      bottom: boolean,

      left: boolean,

      right: boolean,

      groups: boolean,

      success: string,

      error: string,

      warning: string,

      info: string,

      duration: number,

      messageClass: string,

      zIndex: number,

      dense: boolean,

      shadow: boolean,

      reverse: boolean,

      border: string,

      backgroundOpacity: number,

      backgroundColor: string,

      baseBackgroundColor: string,
   },
  }
  interface PublicRuntimeConfig {
   CRM_HOST: string,

   CALL_CENTER_PHONE_NUMBER: string,

   EMAIL_ADDRESS: string,

   INSTAGRAM_URL: string,

   FACEBOOK_URL: string,

   LINKEDIN_URL: string,

   TURSAB_NUMBER: string,

   DISCOVER_WITH_GECCELE_URL: string,

   GECCELE_ADDRESS: string,

   GECCELE_IFRAME_URL: string,

   i18n: {
      experimental: {
         jsTsFormatResource: boolean,
      },

      baseUrl: string,

      locales: {
         tr: {
            domain: any,
         },

         en: {
            domain: any,
         },
      },
   },

   snackbar: {
      top: boolean,

      bottom: boolean,

      left: boolean,

      right: boolean,

      groups: boolean,

      success: string,

      error: string,

      warning: string,

      info: string,

      duration: number,

      messageClass: string,

      zIndex: number,

      dense: boolean,

      shadow: boolean,

      reverse: boolean,

      border: string,

      backgroundOpacity: number,

      backgroundColor: string,

      baseBackgroundColor: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }