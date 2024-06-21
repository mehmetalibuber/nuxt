import { b as useLocalePath$1, d as useRoute, u as useRouter, g as getComposer, e as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "defu";
import "klona";
import "js-cookie";
function useLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}
export {
  useLocalePath as u
};
//# sourceMappingURL=composables-2c3efc9a.js.map
