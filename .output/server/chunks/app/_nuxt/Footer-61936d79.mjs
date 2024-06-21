import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { e as useNuxtApp, h as useI18n, u as useRouter, d as useRoute, f as useRuntimeConfig } from '../server.mjs';
import { unref, mergeProps, createSlots, renderList, withCtx, renderSlot, useSSRContext, ref, createTextVNode, toDisplayString, createVNode, computed } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-link-01469011.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { _ as _imports_0$2 } from './call-center-3ecc2d8e.mjs';
import { _ as _imports_2 } from './logout-de4be0e0.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { Vue3Snackbar } from 'vue3-snackbar';
import { _ as __nuxt_component_0$3 } from './nuxt-img-c52e0bac.mjs';

const _sfc_main$5 = {
  __name: "Lang-Switcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locales, locale, setLocale, t } = useI18n();
    const language = computed({
      get: () => {
        return locale.value;
      },
      set: (value) => {
        setLocale(value);
      }
    });
    function GetCurrentLanguage() {
      const currentLocale = language.value;
      const currentLanguage = locales.value.find(
        (item) => typeof item === "object" ? item.code === currentLocale : item === currentLocale
      );
      return typeof currentLanguage === "object" ? currentLanguage.name : currentLocale;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lang-dropdown dropdown" }, _attrs))}><button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"${ssrRenderAttr("title", unref(t)("SelectLanguage"))}>${ssrInterpolate(GetCurrentLanguage())}</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"><!--[-->`);
      ssrRenderList(unref(locales), (item) => {
        _push(`<li class="dropdown-item"><span>${ssrInterpolate(typeof item === "object" ? item.name : item)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Lang-Switcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$5;
const _imports_1 = "" + publicAssetsURL("assets/icons/user.png");
const _sfc_main$4 = {
  __name: "Top-Header",
  __ssrInlineRender: true,
  setup(__props) {
    const LocalePath = useLocalePath();
    const RuntimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const isAuthenticate = ref(false);
    const { t } = useI18n();
    useRouter();
    const PhoneNumber = ref("");
    if (RuntimeConfig.public) {
      PhoneNumber.value = RuntimeConfig.public.CALL_CENTER_PHONE_NUMBER;
    }
    useCookie("User");
    ref(false);
    useRoute();
    const GuestUserName = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Lang_Switcher = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid top-header" }, _attrs))} data-v-23191695><div class="container" data-v-23191695><div class="d-flex justify-content-between align-items-center h-100" data-v-23191695><div class="" data-v-23191695><div class="d-none d-lg-block mx-2" style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-23191695>${ssrInterpolate(_ctx.$t("StayInStyleTravel"))} <b data-v-23191695> 16743 </b></div></div><div class="d-flex m-0 p-0" data-v-23191695><div class="call-link" data-v-23191695><a id="tel"${ssrRenderAttr("href", "tel:" + unref(PhoneNumber))}${ssrRenderAttr("title", unref(PhoneNumber))} data-v-23191695>${ssrInterpolate(unref(PhoneNumber))}</a><img${ssrRenderAttr("src", _imports_0$2)} alt="call" data-v-23191695></div>`);
      _push(ssrRenderComponent(_component_Lang_Switcher, null, null, _parent));
      if (!unref(isAuthenticate)) {
        _push(`<ul class="d-flex m-0 p-0 auth-menu" data-v-23191695><li data-v-23191695>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          title: _ctx.$t("Register"),
          to: unref(LocalePath)("/user/register"),
          style: { "padding-left": "0" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Register"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li style="${ssrRenderStyle({ "height": "100%", "display": "flex", "align-items": "center", "margin-top": "0" })}" data-v-23191695> | </li><li data-v-23191695>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          title: _ctx.$t("Login"),
          to: unref(LocalePath)("/user/login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isAuthenticate)) {
        _push(`<div class="profile-dropdown dropdown profile-dropdown" data-v-23191695><button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"${ssrRenderAttr("title", unref(t)("Profile"))} data-v-23191695><span data-v-23191695>`);
        if (unref(GuestUserName)) {
          _push(`<small data-v-23191695>${ssrInterpolate(unref(GuestUserName))}</small>`);
        } else {
          _push(`<small data-v-23191695>${ssrInterpolate(_ctx.$t("Profile"))}</small>`);
        }
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="user" class="user-img" data-v-23191695></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-v-23191695><div class="" data-v-23191695><li data-v-23191695><img${ssrRenderAttr("src", _imports_1)} alt="user" data-v-23191695>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          title: _ctx.$t("Profile"),
          to: unref(LocalePath)("/user/profile")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Profile"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Profile")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-23191695><img${ssrRenderAttr("src", _imports_2)} alt="sign-out" data-v-23191695><button type="button" class="btn py-0 px-2"${ssrRenderAttr("title", _ctx.$t("SignOut"))} data-v-23191695>${ssrInterpolate(_ctx.$t("SignOut"))}</button></li></div></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Top-Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-23191695"]]);
const _imports_0$1 = "" + publicAssetsURL("assets/layout/geccele-logo.png");
const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const LocalPath = useLocalePath();
    ref(Number);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg navbar-white bg-white header" }, _attrs))} data-v-366f7f81><div class="container" data-v-366f7f81>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: unref(LocalPath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo" class="logo" width="120" height="66" data-v-366f7f81${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "logo",
                class: "logo",
                width: "120",
                height: "66"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation" data-v-366f7f81><span class="navbar-toggler-icon" data-v-366f7f81></span></button><div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown" data-v-366f7f81><ul class="navbar-nav" data-v-366f7f81><li class="nav-item" data-v-366f7f81>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        title: _ctx.$t("GecceleExperience"),
        to: unref(LocalPath)("/experience")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("GecceleExperience"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("GecceleExperience")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item last-link" data-v-366f7f81>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link px-3",
        title: _ctx.$t("PremiumAccommodation"),
        to: unref(LocalPath)("/destinations")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("PremiumAccommodation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("PremiumAccommodation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-366f7f81"]]);
const _sfc_main$2 = {
  __name: "NuxtSnackbar",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const snackbarOptions = ((_a = useNuxtApp()) == null ? void 0 : _a.$snackbarOptions) || {};
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Vue3Snackbar), mergeProps(unref(snackbarOptions), _attrs), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: withCtx((slotData, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, name, slotData, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, name, slotData)
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-snackbar/dist/runtime/components/NuxtSnackbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  data() {
    return {
      ShowCookieModal: false
    };
  },
  methods: {
    acceptCookies() {
      this.ShowCookieModal = false;
      localStorage.setItem("CookieAccepted", "true");
    }
  },
  mounted() {
    setTimeout(() => {
      const accepted = localStorage.getItem("CookieAccepted");
      if (accepted === "true") {
        this.ShowCookieModal = false;
      } else {
        this.ShowCookieModal = true;
      }
    }, 1500);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.ShowCookieModal) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-popup" }, _attrs))} data-v-cc167e5c><div class="cookie-content" data-v-cc167e5c><p data-v-cc167e5c>We use cookies to improve your experience on our website.</p><button data-v-cc167e5c>Accept Cookies</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cookie-Accept.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cc167e5c"]]);
const _imports_0 = "" + publicAssetsURL("assets/icons/youtube.png");
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const localPath = useLocalePath();
    const RuntimeConfig = /* @__PURE__ */ useRuntimeConfig();
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-31acf5dd><div class="container top" data-v-31acf5dd><div class="row" data-v-31acf5dd><div class="col-lg-6" data-v-31acf5dd><div class="col-xl-12 align-self-middle" data-v-31acf5dd><figure class="logo" data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/layout/by-geccele-logo.png",
        alt: "by geccele",
        quality: "90",
        loading: "lazy",
        width: "180",
        height: "51"
      }, null, _parent));
      _push(`</figure></div><div class="col-xl-12 my-2 align-self-middle discover" data-v-31acf5dd><a${ssrRenderAttr("href", unref(DiscoverWithGecceleUrl))} target="_blank" data-v-31acf5dd><b data-v-31acf5dd> #gecceleilekesfet </b></a></div><div class="col-xl-12 align-self-middle" data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "icon",
        src: "/assets/icons/bell.png",
        alt: "bell",
        loading: "lazy",
        width: "15",
        height: "15"
      }, null, _parent));
      _push(`\xA0 ${ssrInterpolate(_ctx.$t("BeInformedOfCampaigns"))}</div></div><div class="col-lg-6" data-v-31acf5dd><div class="row" data-v-31acf5dd><div class="col-xl-3 col-lg-4 title" data-v-31acf5dd><h2 data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("Company"))}</b></h2><ul data-v-31acf5dd><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        title: _ctx.$t("AboutUs"),
        to: unref(localPath)("/about-us")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("AboutUs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("AboutUs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        title: _ctx.$t("Contact"),
        to: unref(localPath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col-xl-4 col-lg-6 title" data-v-31acf5dd><h2 data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("Reservation"))}</b></h2><ul data-v-31acf5dd><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/faq/how-to-make-a-reservation"),
        title: _ctx.$t("HowToMakeReservation")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("HowToMakeReservation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("HowToMakeReservation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div><div class="row middle" data-v-31acf5dd><div class="col-lg-6" data-v-31acf5dd><div class="row" data-v-31acf5dd><div class="col-xl-3 col-lg-4" data-v-31acf5dd><h2 data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("FollowUs"))}</b></h2></div><div class="col-lg-3" data-v-31acf5dd><div class="row icons" data-v-31acf5dd><div class="col-3" data-v-31acf5dd><a${ssrRenderAttr("href", unref(InstagramUrl))} title="instagram" target="_blank" data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "icon",
        src: "/assets/icons/instagram.png",
        alt: "instagram",
        loading: "lazy",
        width: "15",
        height: "15"
      }, null, _parent));
      _push(`</a></div><div class="col-3" data-v-31acf5dd><a${ssrRenderAttr("href", unref(FacebookUrl))} title="facebook" target="_blank" data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "icon",
        src: "/assets/icons/facebook.png",
        alt: "facebook",
        loading: "lazy",
        width: "15",
        height: "15"
      }, null, _parent));
      _push(`</a></div><div class="col-3" data-v-31acf5dd><a${ssrRenderAttr("href", unref(LinkedinUrl))} title="linkedin" target="_blank" data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "icon",
        src: "/assets/icons/linkedin.png",
        alt: "linkedin",
        loading: "lazy",
        width: "15",
        height: "15"
      }, null, _parent));
      _push(`</a></div><div class="col-3" data-v-31acf5dd><a href="#" title="youtube" target="_blank" data-v-31acf5dd><img class="icon"${ssrRenderAttr("src", _imports_0)} alt="youtube" loading="lazy" width="15" height="15" data-v-31acf5dd></a></div></div></div><div class="col-lg-12" data-v-31acf5dd><a href="https://antalyasuites.com/blog" target="_blank" style="${ssrRenderStyle({ "color": "#b7418a" })}" title="AntalyaSuites Blog" data-v-31acf5dd><h2 style="${ssrRenderStyle({ "color": "#b7418a" })}" data-v-31acf5dd><b data-v-31acf5dd> AntalyaSuites Blog </b></h2></a></div></div></div></div><div class="row mt-5" data-v-31acf5dd><div class="col-xl-7 col-md-12 tursab-side" data-v-31acf5dd><p class="tursab-text" data-v-31acf5dd>${ssrInterpolate(_ctx.$t("StayInStyleTravel"))} <b data-v-31acf5dd>${ssrInterpolate(unref(TursabNumber))}</b></p><p class="mt-1 warning-text" data-v-31acf5dd>${ssrInterpolate(_ctx.$t("AllAdvertisedPrices"))}</p></div><div class="col-xl-5 col-lg-12" data-v-31acf5dd><div class="row" data-v-31acf5dd><div class="col-lg-9 border-left" data-v-31acf5dd><div data-v-31acf5dd><h2 class="" data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("OnlineHelp"))}</b> \xA0 `);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "icon align-self-center",
        style: { "margin-top": "0" },
        src: "/assets/icons/phone-call.png",
        alt: "call",
        loading: "lazy",
        width: "15",
        height: "15"
      }, null, _parent));
      _push(`</h2><p class="mt-3" data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("CallUs"))}</b></p><a id="tel"${ssrRenderAttr("href", "tel:" + unref(PhoneNumber))}${ssrRenderAttr("title", unref(PhoneNumber))} data-v-31acf5dd>${ssrInterpolate(unref(PhoneNumber))}</a><p data-v-31acf5dd>${ssrInterpolate(_ctx.$t("Or"))}</p><span title="Call Me" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-bs-toggle="modal" data-bs-target="#callbackModal" data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("WeCallYou"))}</b> \xA0 `);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "icon align-self-center",
        style: { "margin-top": "0" },
        src: "/assets/icons/call.png",
        alt: "call",
        loading: "lazy",
        width: "15",
        height: "15"
      }, null, _parent));
      _push(`</span></div></div><div class="col-lg-3 customer-side" data-v-31acf5dd><figure class="" data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/icons/customer-services.png",
        alt: "customer",
        loading: "lazy",
        quality: "80",
        width: "150",
        height: "137"
      }, null, _parent));
      _push(`</figure></div></div></div></div></div><div class="container mt-1 contracts" data-v-31acf5dd><div class="row c-side" data-v-31acf5dd><div class="col align-self-center" data-v-31acf5dd><h2 data-v-31acf5dd><b data-v-31acf5dd>${ssrInterpolate(_ctx.$t("Contracts"))} &amp; ${ssrInterpolate(_ctx.$t("GDPR"))}</b></h2></div><div class="col-lg-10" data-v-31acf5dd><ul data-v-31acf5dd><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/privacy-policy"),
        title: _ctx.$t("PrivacyPolicy")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("PrivacyPolicy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("PrivacyPolicy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/booking-conditions"),
        title: _ctx.$t("BookingConditions")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("BookingConditions"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("BookingConditions")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/gdpr"),
        title: _ctx.$t("GDPR")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("GDPR"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("GDPR")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/cookie-policy"),
        title: _ctx.$t("CookiePolicy")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("CookiePolicy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("CookiePolicy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/cancellation-and-refund-conditions"),
        title: _ctx.$t("CancellationAndRefundConditions")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("CancellationAndRefundConditions"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("CancellationAndRefundConditions")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/preliminary-information-form"),
        title: _ctx.$t("PreliminaryInformationForm")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("PreliminaryInformationForm"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("PreliminaryInformationForm")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/contracts/distance-sales-contract"),
        title: _ctx.$t("DistanceSalesContract")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("DistanceSalesContract"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("DistanceSalesContract")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="row payment" data-v-31acf5dd><div class="col-lg-6" data-v-31acf5dd><a href="https://www.tursab.org.tr/tr/ddsv" target="_blank" title="tursab" data-v-31acf5dd><figure data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/layout/tursab-dds.png",
        alt: "tursab",
        loading: "lazy",
        width: "160",
        height: "100%",
        style: { "width": "160px" }
      }, null, _parent));
      _push(`</figure></a></div><div class="col-lg-6" data-v-31acf5dd><ul data-v-31acf5dd><li data-v-31acf5dd><figure data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/icons/payment/tursab.png",
        alt: "tursab",
        loading: "lazy",
        width: "140",
        height: "35"
      }, null, _parent));
      _push(`</figure></li><li data-v-31acf5dd><figure data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/icons/payment/mastercard.png",
        alt: "mastercard",
        loading: "lazy",
        width: "35",
        height: "35"
      }, null, _parent));
      _push(`</figure></li><li data-v-31acf5dd><figure data-v-31acf5dd>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/icons/payment/visa.png",
        alt: "visa",
        loading: "lazy",
        width: "35",
        height: "35"
      }, null, _parent));
      _push(`</figure></li></ul></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31acf5dd"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a, _sfc_main$2 as b, __nuxt_component_3 as c, __nuxt_component_5 as d };
//# sourceMappingURL=Footer-61936d79.mjs.map
