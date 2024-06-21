import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { _ as __nuxt_component_3 } from "./Breadcrumb-8723b3d8.js";
import { withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-6a088328.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "vue3-snackbar";
import "@vue/devtools-api";
import "cookie-es";
import "js-cookie";
import "is-https";
import "./nuxt-link-01469011.js";
import "./composables-2c3efc9a.js";
const _imports_0 = "" + __publicAssetsURL("assets/images/experience/experience-main.jpg");
const _imports_1 = "" + __publicAssetsURL("assets/icons/search.png");
const _imports_2 = "" + __publicAssetsURL("assets/icons/support.png");
const _imports_3 = "" + __publicAssetsURL("assets/icons/honesty.png");
const _imports_4 = "" + __publicAssetsURL("assets/icons/review.png");
const _imports_5 = "" + __publicAssetsURL("assets/images/experience/experience-1.jpg");
const _imports_6 = "" + __publicAssetsURL("assets/images/experience/experience-2.jpg");
const _imports_7 = "" + __publicAssetsURL("assets/images/experience/experience-3.jpg");
const _imports_8 = "" + __publicAssetsURL("assets/images/experience/experience-4.jpg");
const _imports_9 = "" + __publicAssetsURL("assets/images/experience/experience-5.jpg");
const experience_vue_vue_type_style_index_0_scoped_9920dd80_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_Breadcrumb = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("Experience"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Experience")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "geccele experience"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("Experience")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "geccele experience"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Breadcrumb, {
    PageTitle: _ctx.$t("Experience")
  }, null, _parent));
  _push(`<section class="experience-section" data-v-9920dd80><div class="container-fluid px-0" data-v-9920dd80><figure data-v-9920dd80><img${ssrRenderAttr("src", _imports_0)} alt="experience main" class="img-fluid" data-v-9920dd80></figure></div><div class="container" data-v-9920dd80><div class="experience mb-5" data-v-9920dd80><div class="row" data-v-9920dd80><div class="text-center my-5" data-v-9920dd80><h2 data-v-9920dd80>${ssrInterpolate(_ctx.$t("PerfectionHiddenInDetails"))}</h2><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("PerfectionHiddenInDetailsDesc"))}</p></div></div><div class="row my-5" data-v-9920dd80><div class="col-lg-6 left" data-v-9920dd80><div class="col-lg-12" data-v-9920dd80><div class="row box" data-v-9920dd80><div class="col-10" data-v-9920dd80><div class="title" data-v-9920dd80><h2 class="fs-5" data-v-9920dd80>${ssrInterpolate(_ctx.$t("Discover"))}</h2></div><div class="desc" data-v-9920dd80><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("DiscoverDesc"))}</p></div></div><div class="col-2" data-v-9920dd80><img${ssrRenderAttr("src", _imports_1)} alt="search" data-v-9920dd80></div></div><div class="row box" data-v-9920dd80><div class="col-10" data-v-9920dd80><div class="title" data-v-9920dd80><h2 class="fs-5" data-v-9920dd80>${ssrInterpolate(_ctx.$t("Help"))}</h2></div><div class="desc" data-v-9920dd80><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("HelpDesc"))}</p></div></div><div class="col-2" data-v-9920dd80><img${ssrRenderAttr("src", _imports_2)} alt="support" data-v-9920dd80></div></div></div></div><div class="col-lg-6 right bordered-left" data-v-9920dd80><div class="row box" data-v-9920dd80><div class="col-2" data-v-9920dd80><img${ssrRenderAttr("src", _imports_3)} alt="honesty" data-v-9920dd80></div><div class="col-10" data-v-9920dd80><div class="title" data-v-9920dd80><h2 class="fs-5" data-v-9920dd80>${ssrInterpolate(_ctx.$t("Reliability"))}</h2></div><div class="desc" data-v-9920dd80><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("ReliabilityDesc"))}</p></div></div></div><div class="row box" data-v-9920dd80><div class="col-2" data-v-9920dd80><img${ssrRenderAttr("src", _imports_4)} alt="review" data-v-9920dd80></div><div class="col-10" data-v-9920dd80><div class="title" data-v-9920dd80><h2 class="fs-5" data-v-9920dd80>${ssrInterpolate(_ctx.$t("EnjoyIt"))}</h2></div><div class="desc" data-v-9920dd80><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("EnjoyItDesc"))}</p></div></div></div></div></div></div><div class="middle" data-v-9920dd80><div class="content" data-v-9920dd80><div class="row" data-v-9920dd80><div class="text-center" data-v-9920dd80><h2 data-v-9920dd80>${ssrInterpolate(_ctx.$t("StartLiving"))}</h2><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("StartLivingDesc"))}</p></div><div class="row first" data-v-9920dd80><div class="col-lg-6" data-v-9920dd80><figure data-v-9920dd80><img class="img-thumbnail"${ssrRenderAttr("src", _imports_5)} alt="residence" data-v-9920dd80></figure></div><div class="col-lg-6" data-v-9920dd80><div data-v-9920dd80><h2 class="fs-5" data-v-9920dd80>${ssrInterpolate(_ctx.$t("ReadyForUseTechnology"))}</h2><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("ReadyForUseTechnologyDesc"))}</p></div></div></div><div class="row second" data-v-9920dd80><div class="col-lg-6" data-v-9920dd80><div data-v-9920dd80><h2 class="fs-5" data-v-9920dd80>${ssrInterpolate(_ctx.$t("MeticulouslyFurnished"))}</h2><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("MeticulouslyFurnishedDesc"))}</p></div></div><div class="col-lg-6" data-v-9920dd80><figure data-v-9920dd80><img class="img-thumbnail"${ssrRenderAttr("src", _imports_6)} alt="residence" data-v-9920dd80></figure></div></div></div></div></div><div class="bottom" data-v-9920dd80><div class="text-center" data-v-9920dd80><h2 data-v-9920dd80>${ssrInterpolate(_ctx.$t("ResidenceProvides"))}</h2><p class="op-6" data-v-9920dd80>${ssrInterpolate(_ctx.$t("ResidenceProvidesDesc"))}</p></div><div class="row" data-v-9920dd80><div class="col-lg-4" data-v-9920dd80><figure data-v-9920dd80><img class="img-thumbnail"${ssrRenderAttr("src", _imports_7)} alt="experience 1" data-v-9920dd80></figure><figcaption data-v-9920dd80>${ssrInterpolate(_ctx.$t("ResidenceProvides1"))}</figcaption></div><div class="col-lg-4" data-v-9920dd80><figure data-v-9920dd80><img class="img-thumbnail"${ssrRenderAttr("src", _imports_8)} alt="experience 2" data-v-9920dd80></figure><figcaption data-v-9920dd80>${ssrInterpolate(_ctx.$t("ResidenceProvides2"))}</figcaption></div><div class="col-lg-4" data-v-9920dd80><figure data-v-9920dd80><img class="img-thumbnail"${ssrRenderAttr("src", _imports_9)} alt="experience 3" data-v-9920dd80></figure><figcaption data-v-9920dd80>${ssrInterpolate(_ctx.$t("ResidenceProvides3"))}</figcaption></div></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9920dd80"]]);
export {
  experience as default
};
//# sourceMappingURL=experience-fa193113.js.map
