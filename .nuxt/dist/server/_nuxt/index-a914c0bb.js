import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { h as useI18n, u as useRouter } from "../server.mjs";
import { ref, watch, mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode } from "vue";
import "hookable";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import { u as useLocalePath } from "./composables-2c3efc9a.js";
import "./DestinationComposable-6fe85d21.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { VueperSlides, VueperSlide } from "vueperslides";
/* empty css                       */import { _ as __nuxt_component_0 } from "./nuxt-link-01469011.js";
import { _ as _imports_0 } from "./404-not-found-6804e0de.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-img-c52e0bac.js";
import "./index-6a088328.js";
import "@unhead/shared";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "vue3-snackbar";
import "@vue/devtools-api";
import "cookie-es";
import "js-cookie";
import "is-https";
import "ohash";
import "./axiosConfig-89e67415.js";
import "axios";
const SelectCity_vue_vue_type_style_index_0_scoped_712ad695_lang = "";
const _sfc_main$3 = {
  __name: "Select-City",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useCookie("Filters");
    useRouter();
    const Cities = ref([]);
    useLocalePath();
    const SelectedCity = ref({
      countryId: 225,
      fipsCode: "07",
      id: 2169,
      latitude: 37.0951672,
      longitude: 31.0793705,
      name: "Antalya"
    });
    const GetCurrentCity = () => {
      const selectedCity = Cities.value.find(
        (city) => city.id === SelectedCity.value.id
      );
      return selectedCity ? selectedCity.name : "Select a city";
    };
    watch(() => {
      Cities.value;
      SelectedCity.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "res-section container-fluid p-0" }, _attrs))} data-v-712ad695><div class="reservation" data-v-712ad695><div class="container" data-v-712ad695><div data-v-712ad695><div class="text-left" data-v-712ad695><p data-v-712ad695>${ssrInterpolate(_ctx.$t("DiscoverDifferentCities"))}</p></div><div class="col-lg-12 text-left d-flex align-items-center justify-content-between" data-v-712ad695><div class="col-lg-10" data-v-712ad695><div class="dropdown" data-v-712ad695><button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"${ssrRenderAttr("title", unref(t)("SelectCity"))} data-v-712ad695>${ssrInterpolate(GetCurrentCity())}</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-v-712ad695><!--[-->`);
      ssrRenderList(unref(Cities), (city) => {
        _push(`<li data-v-712ad695><span class="dropdown-item" data-v-712ad695>${ssrInterpolate(city.name)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-lg-2" data-v-712ad695><button${ssrRenderAttr("title", _ctx.$t("Search"))} data-v-712ad695>${ssrInterpolate(_ctx.$t("Search"))}</button></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Select-City.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-712ad695"]]);
const Campaigns_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "Campaigns",
  __ssrInlineRender: true,
  setup(__props) {
    ref(Number);
    const Campaigns = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "campaigns-section" }, _attrs))}><div class="container">`);
      _push(ssrRenderComponent(unref(VueperSlides), {
        class: "no-shadow",
        "visible-slides": 1,
        gap: 2,
        "slide-ratio": 1 / 4,
        "dragging-distance": 200,
        touchable: false,
        bullets: true,
        "arrows-outside": true,
        autoplay: "",
        fade: "",
        breakpoints: {
          1200: { visibleSlides: 2, slideMultiple: 2 },
          750: { visibleSlides: 1, slideMultiple: 1 }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(Campaigns), (slide, i) => {
              _push2(ssrRenderComponent(unref(VueperSlide), { key: i }, {
                content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="vueperslide__content-wrapper" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId2}><div class="b-content"${_scopeId2}><div class="desc"${_scopeId2}><img${ssrRenderAttr("src", slide.url)}${ssrRenderAttr("alt", slide.url)}${_scopeId2}></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "vueperslide__content-wrapper",
                        style: { "flex-direction": "column" }
                      }, [
                        createVNode("div", { class: "b-content" }, [
                          createVNode("div", { class: "desc" }, [
                            createVNode("img", {
                              src: slide.url,
                              alt: slide.url
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(Campaigns), (slide, i) => {
                return openBlock(), createBlock(unref(VueperSlide), { key: i }, {
                  content: withCtx(() => [
                    createVNode("div", {
                      class: "vueperslide__content-wrapper",
                      style: { "flex-direction": "column" }
                    }, [
                      createVNode("div", { class: "b-content" }, [
                        createVNode("div", { class: "desc" }, [
                          createVNode("img", {
                            src: slide.url,
                            alt: slide.url
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Campaigns.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const PopularDestinations_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Popular-Destinations",
  __ssrInlineRender: true,
  setup(__props) {
    const Destinations = ref([]);
    const ImageFilePrefix = ref("");
    const localPath = useLocalePath();
    watch(() => {
      Destinations.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-destination" }, _attrs))}><div class="container my-2"><div class="row top"><h2>${ssrInterpolate(_ctx.$t("DiscoverGecceleResidences"))}</h2><p>${ssrInterpolate(_ctx.$t("ExplorePopularDestinationsDesc"))}</p></div><div class="popular-destinations">`);
      _push(ssrRenderComponent(unref(VueperSlides), {
        "aria-hidden": false,
        autoplay: "",
        class: "no-shadow",
        "visible-slides": 4,
        gap: 2,
        "slide-ratio": 1 / 4,
        touchable: false,
        slideMultiple: "",
        bullets: true,
        breakpoints: {
          1200: { visibleSlides: 2, slideMultiple: 2 },
          450: { visibleSlides: 1, slideMultiple: 1 }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(Destinations), (slide, i) => {
              _push2(ssrRenderComponent(unref(VueperSlide), {
                key: i,
                "aria-hidden": false
              }, {
                content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="vueperslide__content-wrapper" style="${ssrRenderStyle({ "flex-direction": "column" })}"${_scopeId2}><div class="b-content"${_scopeId2}><div class="desc"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(localPath)("/destinations/" + slide.id),
                      title: slide.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (slide.media[0]) {
                            _push4(`<img${ssrRenderAttr("src", unref(ImageFilePrefix) + slide.media[0].url)}${ssrRenderAttr("alt", slide.name)} loading="lazy"${_scopeId3}>`);
                          } else {
                            _push4(`<img${ssrRenderAttr("src", _imports_0)} class="card-img" alt="not found" loading="lazy"${_scopeId3}>`);
                          }
                        } else {
                          return [
                            slide.media[0] ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: unref(ImageFilePrefix) + slide.media[0].url,
                              alt: slide.name,
                              loading: "lazy"
                            }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: _imports_0,
                              class: "card-img",
                              alt: "not found",
                              loading: "lazy"
                            }))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="bottom"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(localPath)("/destinations/" + slide.id),
                      title: slide.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (slide.name.length > 27) {
                            _push4(`<h2${_scopeId3}>${ssrInterpolate(slide.name.slice(0, 27))}.. </h2>`);
                          } else {
                            _push4(`<h2${_scopeId3}>${ssrInterpolate(slide.name)}</h2>`);
                          }
                        } else {
                          return [
                            slide.name.length > 27 ? (openBlock(), createBlock("h2", { key: 0 }, toDisplayString(slide.name.slice(0, 27)) + ".. ", 1)) : (openBlock(), createBlock("h2", { key: 1 }, toDisplayString(slide.name), 1))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<p${_scopeId2}>${ssrInterpolate(slide.description.slice(0, 55))}...</p>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      class: "btn",
                      to: unref(localPath)("/destinations/" + slide.id),
                      title: _ctx.$t("ViewDetails")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("ViewDetails"))} →`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("ViewDetails")) + " →", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "vueperslide__content-wrapper",
                        style: { "flex-direction": "column" }
                      }, [
                        createVNode("div", { class: "b-content" }, [
                          createVNode("div", { class: "desc" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localPath)("/destinations/" + slide.id),
                              title: slide.name
                            }, {
                              default: withCtx(() => [
                                slide.media[0] ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: unref(ImageFilePrefix) + slide.media[0].url,
                                  alt: slide.name,
                                  loading: "lazy"
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                                  key: 1,
                                  src: _imports_0,
                                  class: "card-img",
                                  alt: "not found",
                                  loading: "lazy"
                                }))
                              ]),
                              _: 2
                            }, 1032, ["to", "title"]),
                            createVNode("div", { class: "bottom" }, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localPath)("/destinations/" + slide.id),
                                title: slide.name
                              }, {
                                default: withCtx(() => [
                                  slide.name.length > 27 ? (openBlock(), createBlock("h2", { key: 0 }, toDisplayString(slide.name.slice(0, 27)) + ".. ", 1)) : (openBlock(), createBlock("h2", { key: 1 }, toDisplayString(slide.name), 1))
                                ]),
                                _: 2
                              }, 1032, ["to", "title"]),
                              createVNode("p", null, toDisplayString(slide.description.slice(0, 55)) + "...", 1),
                              createVNode(_component_NuxtLink, {
                                class: "btn",
                                to: unref(localPath)("/destinations/" + slide.id),
                                title: _ctx.$t("ViewDetails")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("ViewDetails")) + " →", 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "title"])
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(Destinations), (slide, i) => {
                return openBlock(), createBlock(unref(VueperSlide), {
                  key: i,
                  "aria-hidden": false
                }, {
                  content: withCtx(() => [
                    createVNode("div", {
                      class: "vueperslide__content-wrapper",
                      style: { "flex-direction": "column" }
                    }, [
                      createVNode("div", { class: "b-content" }, [
                        createVNode("div", { class: "desc" }, [
                          createVNode(_component_NuxtLink, {
                            to: unref(localPath)("/destinations/" + slide.id),
                            title: slide.name
                          }, {
                            default: withCtx(() => [
                              slide.media[0] ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: unref(ImageFilePrefix) + slide.media[0].url,
                                alt: slide.name,
                                loading: "lazy"
                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_0,
                                class: "card-img",
                                alt: "not found",
                                loading: "lazy"
                              }))
                            ]),
                            _: 2
                          }, 1032, ["to", "title"]),
                          createVNode("div", { class: "bottom" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localPath)("/destinations/" + slide.id),
                              title: slide.name
                            }, {
                              default: withCtx(() => [
                                slide.name.length > 27 ? (openBlock(), createBlock("h2", { key: 0 }, toDisplayString(slide.name.slice(0, 27)) + ".. ", 1)) : (openBlock(), createBlock("h2", { key: 1 }, toDisplayString(slide.name), 1))
                              ]),
                              _: 2
                            }, 1032, ["to", "title"]),
                            createVNode("p", null, toDisplayString(slide.description.slice(0, 55)) + "...", 1),
                            createVNode(_component_NuxtLink, {
                              class: "btn",
                              to: unref(localPath)("/destinations/" + slide.id),
                              title: _ctx.$t("ViewDetails")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("ViewDetails")) + " →", 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "title"])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Popular-Destinations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const index_vue_vue_type_style_index_0_scoped_841c0ac2_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCookie("Filters");
    const HomeGallery = ref([
      {
        url: "/assets/home/home-gallery/place-2.jpg"
      },
      {
        url: "/assets/home/home-gallery/place-3.jpg"
      },
      {
        url: "/assets/home/home-gallery/place-4.jpg"
      },
      {
        url: "/assets/home/home-gallery/place-5.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Select_City = __nuxt_component_3;
      const _component_Campaigns = __nuxt_component_4;
      const _component_PopularDestinations = __nuxt_component_5;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Luxury Residences | Monthly Stay | Geccele`);
                } else {
                  return [
                    createTextVNode("Luxury Residences | Monthly Stay | Geccele")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Test content"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Luxury Residences | Monthly Stay | Geccele")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Test content"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container mt-5" data-v-841c0ac2>`);
      _push(ssrRenderComponent(_component_Select_City, null, null, _parent));
      _push(`</div><div class="container px-0 mt-0" data-v-841c0ac2>`);
      _push(ssrRenderComponent(_component_Campaigns, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PopularDestinations, null, null, _parent));
      _push(`<section class="home-residences mb-5" data-v-841c0ac2><div class="container mt-5" data-v-841c0ac2><div class="row" data-v-841c0ac2><span data-v-841c0ac2>${ssrInterpolate(_ctx.$t("DiscoverWithGeccele"))}</span><h2 data-v-841c0ac2>${ssrInterpolate(_ctx.$t("HomeGalleryDesc2"))}</h2></div><div class="row mt-2" data-v-841c0ac2><div class="col-lg-6 left" data-v-841c0ac2><figure data-v-841c0ac2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "img-fluid",
        src: "/assets/home/home-gallery/place-1.jpg",
        alt: "geccele residence",
        title: "Geccele",
        sizes: "100vw sm:50vw md:750px",
        quality: "90",
        loading: "lazy"
      }, null, _parent));
      _push(`</figure></div><div class="col-lg-6 right" data-v-841c0ac2><div class="row" data-v-841c0ac2><!--[-->`);
      ssrRenderList(unref(HomeGallery), (image) => {
        _push(`<div class="col-lg-6" data-v-841c0ac2><figure data-v-841c0ac2>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "img-thumbnail",
          src: image.url,
          alt: "geccele",
          title: "Geccele",
          sizes: "250px sm:50vw md:400px",
          quality: "90",
          loading: "lazy"
        }, null, _parent));
        _push(`</figure></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-841c0ac2"]]);
export {
  index as default
};
//# sourceMappingURL=index-a914c0bb.js.map
