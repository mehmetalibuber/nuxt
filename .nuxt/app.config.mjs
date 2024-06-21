
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Projects/nuxt/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "267d4e8f-6e03-4dd3-ac1d-87542b878868"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
