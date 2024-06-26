import { H as Head, T as Title, M as Meta } from "./components-9d7d262f.js";
import { h as useI18n, u as useRouter } from "../server.mjs";
import { ref, withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext } from "vue";
import "hookable";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
import { u as useLocalePath } from "./composables-2c3efc9a.js";
import "./AuthComposable-14236e1c.js";
import { H as HelperComposable } from "./axiosConfig-89e67415.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_2 } from "./logout-de4be0e0.js";
import { _ as _imports_2$1 } from "./detail-maps-e66f1e74.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
import "axios";
const _imports_0 = "" + __publicAssetsURL("assets/icons/right-arrow.png");
const profile_vue_vue_type_style_index_0_scoped_e76ec65b_lang = "";
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    useCookie("User");
    useLocalePath();
    useCookie("User");
    useRouter();
    const UserReservations = ref({});
    const UserCoupons = ref(null);
    const GuestInfos = ref({});
    const FormatDate = (date) => {
      const FormattedDate = HelperComposable().DateFormatter(date);
      return FormattedDate;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Profile"))} - Geccele`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Profile")) + " - Geccele", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Login"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("Profile")) + " - Geccele", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Login"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="profile-section" data-v-e76ec65b><div class="container" data-v-e76ec65b><div class="d-flex align-items-start row" data-v-e76ec65b><div class="nav flex-column nav-pills col-xl-3 px-0" id="v-pills-tab" role="tablist" aria-orientation="vertical" data-v-e76ec65b><div class="nav-link" data-v-e76ec65b><span class="welcome" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Welcome"))}! </span><br data-v-e76ec65b>`);
      if (unref(GuestInfos).name) {
        _push(`<span data-v-e76ec65b><b data-v-e76ec65b>${ssrInterpolate(unref(GuestInfos).name)}</b></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="nav-link active d-flex justify-content-between" id="v-pills-user-tab" data-bs-toggle="pill" data-bs-target="#v-pills-user" type="button" role="tab" aria-controls="v-pills-user" aria-selected="true"${ssrRenderAttr("title", _ctx.$t("PersonalInformations"))} data-v-e76ec65b><div class="circle" data-v-e76ec65b></div><div class="text-left" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("PersonalInformations"))}</div><div data-v-e76ec65b><span data-v-e76ec65b><img${ssrRenderAttr("src", _imports_0)} alt="arrow-right" data-v-e76ec65b></span></div></button><button class="nav-link d-flex justify-content-between" id="v-pills-favorites-tab" data-bs-toggle="pill" data-bs-target="#v-pills-favorites" type="button" role="tab" aria-controls="v-pills-favorites" aria-selected="false" data-v-e76ec65b><div class="circle" data-v-e76ec65b></div><div class="text-left" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Favorites"))}</div><div data-v-e76ec65b><span data-v-e76ec65b><img${ssrRenderAttr("src", _imports_0)} alt="arrow-right" data-v-e76ec65b></span></div></button><button class="nav-link d-flex justify-content-between" id="v-pills-coupons-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coupons" type="button" role="tab" aria-controls="v-pills-coupons" aria-selected="false" data-v-e76ec65b><div class="circle" data-v-e76ec65b></div><div class="text-left" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Coupons"))}</div><div data-v-e76ec65b><span data-v-e76ec65b><img${ssrRenderAttr("src", _imports_0)} alt="arrow-right" data-v-e76ec65b></span></div></button><button class="nav-link d-flex justify-content-between" id="v-pills-reservations-tab" data-bs-toggle="pill" data-bs-target="#v-pills-reservations" type="button" role="tab" aria-controls="v-pills-reservations" aria-selected="false" data-v-e76ec65b><div class="circle" data-v-e76ec65b></div><div class="text-left" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Reservations"))}</div><div data-v-e76ec65b><span data-v-e76ec65b><img${ssrRenderAttr("src", _imports_0)} alt="arrow-right" data-v-e76ec65b></span></div></button><button class="d-flex justify-content-between sign-out-btn" data-v-e76ec65b><div class="sign-out" data-v-e76ec65b><img${ssrRenderAttr("src", _imports_2)} alt="sign out" data-v-e76ec65b></div><div class="text-left" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("SignOut"))}</div><div data-v-e76ec65b></div></button></div><div class="tab-content col-xl-9" id="v-pills-tabContent" data-v-e76ec65b><div class="tab-pane fade show active" id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab" data-v-e76ec65b><h2 data-v-e76ec65b>${ssrInterpolate(_ctx.$t("PersonalInformations"))}</h2>`);
      if (unref(GuestInfos)) {
        _push(`<form data-v-e76ec65b><div class="row" data-v-e76ec65b>`);
        if (unref(GuestInfos).name) {
          _push(`<div class="col-lg-6" data-v-e76ec65b><div class="form-outline mb-3" data-v-e76ec65b><label class="form-label" for="name" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Name"))}</label><input type="text" id="name" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("Name"))} maxlength="28"${ssrRenderAttr("value", unref(GuestInfos).name)} readonly data-v-e76ec65b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(GuestInfos).surname) {
          _push(`<div class="col-lg-6" data-v-e76ec65b><div class="form-outline mb-3" data-v-e76ec65b><label class="form-label" for="surname" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Surname"))}</label><input type="text" id="surname" required class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("Surname"))}${ssrRenderAttr("value", unref(GuestInfos).surname)} readonly data-v-e76ec65b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(GuestInfos).email) {
          _push(`<div class="col-lg-6" data-v-e76ec65b><div class="form-outline mb-3" data-v-e76ec65b><label class="form-label" for="email" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("EmailAddress"))}</label><input type="email" id="email" required class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("EmailAddress"))}${ssrRenderAttr("value", unref(GuestInfos).email)} readonly data-v-e76ec65b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(GuestInfos).phone) {
          _push(`<div class="col-lg-6" data-v-e76ec65b><div class="form-outline mb-3" data-v-e76ec65b><label class="form-label" for="tel" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("PhoneNumber"))}</label><input type="tel" id="tel" required maxlength="24" class="form-control form-control-lg"${ssrRenderAttr("placeholder", _ctx.$t("PhoneNumber"))}${ssrRenderAttr("value", unref(GuestInfos).phone)} readonly data-v-e76ec65b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tab-pane fade" id="v-pills-favorites" role="tabpanel" aria-labelledby="v-pills-favorites-tab" data-v-e76ec65b><h2 data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Favorites"))}</h2> ${ssrInterpolate(_ctx.$t("EmptyFavorites"))}</div><div class="tab-pane fade" id="v-pills-coupons" role="tabpanel" aria-labelledby="v-pills-coupons-tab" data-v-e76ec65b><h2 data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Coupons"))}</h2>`);
      if (unref(UserCoupons)) {
        _push(`<div class="row" data-v-e76ec65b><!--[-->`);
        ssrRenderList(unref(UserCoupons), (coupon) => {
          _push(`<div class="col-lg-3" data-v-e76ec65b>`);
          if (!coupon.usage) {
            _push(`<div data-v-e76ec65b><input type="text" name=""${ssrRenderAttr("value", coupon.code)} class="form-control form-control-lg" readonly data-v-e76ec65b></div>`);
          } else {
            _push(`<div data-v-e76ec65b><input type="text" name=""${ssrRenderAttr("value", coupon.code)} class="form-control form-control-lg" disabled data-v-e76ec65b></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-e76ec65b>${ssrInterpolate(_ctx.$t("EmptyCoupons"))}</div>`);
      }
      _push(`</div><div class="tab-pane fade" id="v-pills-reservations" role="tabpanel" aria-labelledby="v-pills-reservations-tab" data-v-e76ec65b><h2 data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Reservations"))}</h2>`);
      if (unref(UserReservations).length > 0) {
        _push(`<div class="reservations" data-v-e76ec65b><!--[-->`);
        ssrRenderList(unref(UserReservations), (res, index) => {
          _push(`<details data-v-e76ec65b><summary data-v-e76ec65b>${ssrInterpolate(index + 1)}:   ${ssrInterpolate(res.estate.code)} -  ${ssrInterpolate(res.estate.address.neighbourhood)}/${ssrInterpolate(res.estate.address.subCity)}/${ssrInterpolate(res.estate.address.city)}</summary><div class="row" data-v-e76ec65b><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Name"))}:</label><p data-v-e76ec65b>${ssrInterpolate(res.user.fullName)}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("PhoneNumber"))}:</label><p data-v-e76ec65b>${ssrInterpolate(res.phone)}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("CheckIn"))}:</label><p data-v-e76ec65b>${ssrInterpolate(FormatDate(res.startDate))}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("CheckOut"))}:</label><p data-v-e76ec65b>${ssrInterpolate(FormatDate(res.endDate))}</p></div></div><div class="row" data-v-e76ec65b><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("ReservationCode"))}:</label><p data-v-e76ec65b>${ssrInterpolate(res.resCode)}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("CreatedDate"))}:</label><p data-v-e76ec65b>${ssrInterpolate(FormatDate(res.createdDate))}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Adult"))}:</label><p data-v-e76ec65b>${ssrInterpolate(res.adultCount)}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Child"))}:</label><p data-v-e76ec65b>${ssrInterpolate(res.childCount)}</p></div></div><div class="row" data-v-e76ec65b><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("CleaningFee"))}:</label><p data-v-e76ec65b>${ssrInterpolate(Number(
            (res.cleaningFee * 36.5533).toFixed(2)
          ).toLocaleString("tr-TR"))}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("CommissionFee"))}:</label><p data-v-e76ec65b>${ssrInterpolate(Number(
            (res.commissionFee * 36.5533).toFixed(2)
          ).toLocaleString("tr-TR"))}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("AccommodationFee"))}:</label><p data-v-e76ec65b>${ssrInterpolate(Number(
            (res.totalAccommodationFee * 36.5533).toFixed(2)
          ).toLocaleString("tr-TR"))}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Total"))} ${ssrInterpolate(_ctx.$t("Price"))}:</label><p data-v-e76ec65b>${ssrInterpolate(Number(
            (res.totalAmount * 36.5533).toFixed(2)
          ).toLocaleString("tr-TR"))}</p></div></div><div class="row" data-v-e76ec65b><div class="col-lg-3" data-v-e76ec65b><div class="maps-side" data-v-e76ec65b><figure${ssrRenderAttr("title", _ctx.$t("TakeDirections"))} data-v-e76ec65b><img class="img-thumbnail"${ssrRenderAttr("src", _imports_2$1)} alt="google map" data-v-e76ec65b><figcaption data-v-e76ec65b>${ssrInterpolate(_ctx.$t("TakeDirections"))} / Google </figcaption></figure></div></div><div class="col-lg-6" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Location"))}:</label><p data-v-e76ec65b>${ssrInterpolate(res.estate.address.detail)}</p></div><div class="col-lg-3" data-v-e76ec65b><label for="" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Status"))}:</label>`);
          if (res.reservationStatusType === 0) {
            _push(`<p class="text-warning" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Pending"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (res.reservationStatusType === 1) {
            _push(`<p class="text-success" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Approved"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (res.reservationStatusType === 2) {
            _push(`<p class="text-danger" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("Cancelled"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
          if (res.paymentURL && res.reservationStatusType === 0) {
            _push(`<div class="row make-payment" data-v-e76ec65b><div class="col-lg-3" data-v-e76ec65b><a${ssrRenderAttr("href", res.paymentURL)}${ssrRenderAttr("title", _ctx.$t("MakePayment"))} target="_blank" data-v-e76ec65b>${ssrInterpolate(_ctx.$t("MakePayment"))}</a></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</details>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-e76ec65b>${ssrInterpolate(_ctx.$t("EmptyReservations"))}</div>`);
      }
      _push(`</div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e76ec65b"]]);
export {
  profile as default
};
//# sourceMappingURL=profile-af20c8d0.js.map
