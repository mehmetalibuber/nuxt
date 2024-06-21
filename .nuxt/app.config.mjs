
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Projects/nuxt/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "21c16d15-65e1-41bc-86ff-2c60cc029c09"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
