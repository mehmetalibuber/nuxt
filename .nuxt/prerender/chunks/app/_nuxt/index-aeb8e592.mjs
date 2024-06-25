import { p as publicAssetsURL } from '../../renderer.mjs';
import { H as Head } from './components-9d7d262f.mjs';
import { useSSRContext, ref, computed, watch, withCtx, createVNode, toDisplayString, unref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { h as useI18n, u as useRouter, j as useState } from '../server.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './404-not-found-6804e0de.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'node:async_hooks';
import 'file://C:/Projects/nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/devalue/index.js';
import 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Projects/nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/scule/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/klona/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Projects/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Projects/nuxt/node_modules/radix3/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Projects/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/ipx/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/unhead/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/@unhead/shared/dist/index.mjs';
import './index-6a088328.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Projects/nuxt/node_modules/vue3-snackbar/dist/vue3-snackbar.js';
import 'file://C:/Projects/nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Projects/nuxt/node_modules/is-https/dist/index.mjs';

const _imports_1 = "" + publicAssetsURL("assets/icons/add.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    useRouter();
    useState("EstateInfo");
    useCookie("EstateID");
    useCookie("Filters");
    let Destination = ref({});
    const Steps = ref(["ReservationInformations", "Payment"]);
    const StepContents = ref(["", ""]);
    const ActiveStep = ref(0);
    const ImageFilePrefix = ref("");
    const CoverPhotoObject = ref("");
    const TotalNights = ref(0);
    const CheckIn = ref("");
    const CheckOut = ref("");
    const Child = ref(0);
    const Adult = ref(2);
    const GuestName = ref("");
    const GuestSurname = ref("");
    const GuestEmailAddress = ref("");
    const GuestPhoneNumber = ref("");
    const GuestIsMe = ref(false);
    const GuestUserID = ref(null);
    ref("");
    ref("");
    ref("");
    const PaymentURL = ref(null);
    const TotalPrice = ref(0);
    const TotalAccommodationFee = ref(0);
    const CleaningFee = ref(0);
    const TaxAmount = ref(0);
    const TaxRate = ref(0);
    const ErrorMessage = ref("");
    const SelectedCoupon = ref("");
    const UseCoupon = ref(false);
    const DisablePaymentBtn = ref(false);
    const NewPriceForCoupon = ref(false);
    const TotalPriceForCoupon = ref(0);
    const UserGuestsCapacity = ref(Number);
    const UserGuestData = ref([]);
    const IsGuestSection = ref(true);
    ref([]);
    const CapacityIndex = ref(0);
    const Guests = ref([]);
    const SelectedGuest = ref(null);
    const AddGuestMultiple = ref(null);
    computed(() => {
      return Guests.value.some((guest) => guest.isResponsible);
    });
    const AvailableUserGuests = computed(() => {
      return UserGuestData.value.filter(
        (guest) => !Guests.value.some((g) => g.id === guest.id)
      );
    });
    const AddUserGuest = (val) => {
      const CapacityRes = CheckCapacity(CapacityIndex.value++);
      if (CapacityRes == true) {
        if (val == "isMe") {
          Guests.value.push({
            id: GuestUserID.value,
            name: GuestName.value,
            surname: GuestSurname.value,
            isResponsible: true,
            idNumber: null,
            tcCitizen: true,
            readOnly: true
          });
          return;
        }
        if (SelectedGuest.value) {
          ErrorMessage.value = "";
          Guests.value.push({
            id: SelectedGuest.value.id,
            name: SelectedGuest.value.name,
            surname: SelectedGuest.value.surname,
            isResponsible: false,
            idNumber: null,
            tcCitizen: true,
            readOnly: false
          });
          SelectedGuest.value = null;
          AvailableUserGuests.value = UserGuestData.value.filter(
            (guest) => !Guests.value.some((g) => g.id === guest.id)
          );
          return;
        } else {
          ErrorMessage.value = "";
          Guests.value.push({
            id: Math.random(),
            name: null,
            surname: null,
            isResponsible: false,
            idNumber: null,
            tcCitizen: true,
            readOnly: false
          });
          return;
        }
      } else {
        CheckCapacity(CapacityIndex.value--);
        GuestIsMe.value = false;
        return alert("Misafir kapasitesi a\u015F\u0131ld\u0131.");
      }
    };
    const CheckCapacity = (count) => {
      const TotalCapacity = CapacityIndex.value;
      if (TotalCapacity > UserGuestsCapacity.value) {
        return false;
      } else
        return true;
    };
    const IsUserGuestSelectDisable = (option) => {
      return Guests.value.some((guest) => guest.id === option.id);
    };
    watch(AddGuestMultiple, (NewCount) => {
      Guests.value.length = 0;
      CapacityIndex.value = 0;
      GuestIsMe.value = false;
      for (let i = 0; i < NewCount; i++) {
        AddUserGuest();
      }
    });
    const HandleBeforeUnload = (event) => {
      const message = "\xD6deme i\u015Fleminiz tamamlanmad\u0131. Sayfay\u0131 kapatmak veya yenilemek istedi\u011Finize emin misiniz?";
      event.returnValue = message;
      return message;
    };
    watch(() => {
      Adult.value;
      Child.value;
      TotalPriceForCoupon.value;
      IsGuestSection.value;
    });
    watch(UseCoupon, (newValue, oldValue) => {
      DisablePaymentBtn.value = newValue == true ? true : false;
      NewPriceForCoupon.value = false;
      document.querySelector(".total-price .old").style.textDecoration = "none";
    });
    watch(PaymentURL, (newValue, oldValue) => {
      if (newValue) {
        window.addEventListener("beforeunload", HandleBeforeUnload);
        DisablePaymentBtn.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-73c38737${_scopeId}>${ssrInterpolate(_ctx.$t("ReservationInformations"))}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(_ctx.$t("ReservationInformations")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="container" data-v-73c38737><div class="progress-container container d-flex justify-content-center mt-4" data-v-73c38737><!--[-->`);
      ssrRenderList(unref(Steps), (step, index2) => {
        _push(`<div class="${ssrRenderClass({ step: true, active: unref(ActiveStep) === index2 })}" data-v-73c38737><div class="" data-v-73c38737>${ssrInterpolate(index2 + 1)}</div><div data-v-73c38737>${ssrInterpolate(_ctx.$t(step))}</div></div>`);
      });
      _push(`<!--]--></div><div class="payment-steps mt-4 mb-5" data-v-73c38737><!--[-->`);
      ssrRenderList(unref(StepContents), (stepContent, index2) => {
        _push(`<div class="step-content" style="${ssrRenderStyle(unref(ActiveStep) === index2 ? null : { display: "none" })}" data-v-73c38737>`);
        if (index2 === 0) {
          _push(`<div data-v-73c38737><div class="row" data-v-73c38737><div class="col-lg-8" data-v-73c38737><div class="res-card" data-v-73c38737><div class="row" data-v-73c38737><div class="col-lg-3" data-v-73c38737><figure data-v-73c38737>`);
          if (unref(CoverPhotoObject).url) {
            _push(`<img${ssrRenderAttr("src", unref(ImageFilePrefix) + unref(CoverPhotoObject).url)}${ssrRenderAttr("alt", unref(CoverPhotoObject).name)}${ssrRenderAttr("title", unref(CoverPhotoObject).name)} class="img-thumbnail" data-v-73c38737>`);
          } else {
            _push(`<img${ssrRenderAttr("src", _imports_0)} alt="not found" title="not found" class="img-thumbnail" data-v-73c38737>`);
          }
          _push(`</figure></div><div class="col-lg-9" data-v-73c38737><div class="desc-top" data-v-73c38737><h2 data-v-73c38737>${ssrInterpolate(unref(Destination).name)}</h2><div class="d-block" data-v-73c38737>`);
          if (unref(Destination).squareMeters) {
            _push(`<span class="square-meter" data-v-73c38737>${ssrInterpolate(_ctx.$t("RoomSquareMeters"))}: <b data-v-73c38737>${ssrInterpolate(unref(Destination).squareMeters)}</b></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` \xA0 - \xA0 `);
          if (unref(Destination).numberOfPeople) {
            _push(`<span class="square-meter" data-v-73c38737>${ssrInterpolate(_ctx.$t("MaxGuest"))}: <b data-v-73c38737>${ssrInterpolate(unref(Destination).numberOfPeople)}</b></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="col" data-v-73c38737><p data-v-73c38737>${ssrInterpolate(unref(Destination).description)}</p></div></div></div></div></div><div class="row mt-4" data-v-73c38737><div class="col-lg-12 guest-left" data-v-73c38737><div class="row" data-v-73c38737><small class="guest-left-warning" data-v-73c38737> * Bu m\xFClk i\xE7in eklenebilir misafir say\u0131s\u0131 ${ssrInterpolate(unref(UserGuestsCapacity))} ve en az 1 sorumlu ki\u015Fi se\xE7ilmelidir. </small></div><div data-v-73c38737><div class="row my-3" data-v-73c38737><span class="opacity-75 text-decoration-underline"${ssrRenderAttr("title", _ctx.$t("UseMemberInformations"))} style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-73c38737>${ssrInterpolate(_ctx.$t("UseMemberInformations"))}</span></div><form data-v-73c38737><div class="row" data-v-73c38737><h2 data-v-73c38737>\u0130leti\u015Fim Bilgileri</h2></div><div class="row mt-2" data-v-73c38737><div class="col-lg-6" data-v-73c38737><div class="form-group" data-v-73c38737><label for="email" data-v-73c38737>${ssrInterpolate(_ctx.$t("EmailAddress"))}(*)</label><input type="email" class="form-control" id="email" required${ssrRenderAttr("placeholder", _ctx.$t("EmailAddress"))}${ssrRenderAttr("value", unref(GuestEmailAddress))} data-v-73c38737></div></div><div class="col-lg-6" data-v-73c38737><div class="form-group" data-v-73c38737><label for="tel" data-v-73c38737>${ssrInterpolate(_ctx.$t("PhoneNumber"))}(*)</label><div class="row phone-space" data-v-73c38737><div class="col-lg-2" data-v-73c38737><select name="" id="" data-v-73c38737><option value="+90" selected data-v-73c38737>+90</option></select></div><div class="col-lg-10" data-v-73c38737><input type="tel" class="form-control" id="tel"${ssrRenderAttr("placeholder", _ctx.$t("PhoneNumberMask"))} required maxlength="10"${ssrRenderAttr("value", unref(GuestPhoneNumber))} data-v-73c38737></div></div></div></div></div><div class="row mt-2" data-v-73c38737></div></form></div></div></div><div class="col-lg-12 mt-3 pt-3 user-guests" data-v-73c38737><div class="row" data-v-73c38737><h2 data-v-73c38737>Misafir Bilgileri</h2></div><div class="row mt-1" data-v-73c38737><div class="row select-side mt-1" data-v-73c38737>`);
          if (unref(UserGuestData).length > 0) {
            _push(`<div class="col-xl-5 col-lg-4 d-flex align-items-center" data-v-73c38737><div class="w-100" data-v-73c38737><select class="form-select" data-v-73c38737><option${ssrRenderAttr("value", null)} disabled data-v-73c38737${ssrIncludeBooleanAttr(Array.isArray(unref(SelectedGuest)) ? ssrLooseContain(unref(SelectedGuest), null) : ssrLooseEqual(unref(SelectedGuest), null)) ? " selected" : ""}> Kay\u0131tl\u0131 Misafirler </option><!--[-->`);
            ssrRenderList(unref(AvailableUserGuests), (option) => {
              _push(`<option${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(IsUserGuestSelectDisable(option)) ? " disabled" : ""} data-v-73c38737>${ssrInterpolate(option.name)} ${ssrInterpolate(option.surname)}</option>`);
            });
            _push(`<!--]--></select></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="col-xl-4 col-lg-4 d-flex align-items-center" data-v-73c38737><button type="button" class="btn" title="Yeni misafir ekle" data-v-73c38737> Yeni Misafir Ekle <img${ssrRenderAttr("src", _imports_1)} alt="add" data-v-73c38737></button></div><div class="col-xl-3 col-lg-4 d-flex align-items-center" data-v-73c38737><select data-v-73c38737><option${ssrRenderAttr("value", null)} disabled data-v-73c38737${ssrIncludeBooleanAttr(Array.isArray(unref(AddGuestMultiple)) ? ssrLooseContain(unref(AddGuestMultiple), null) : ssrLooseEqual(unref(AddGuestMultiple), null)) ? " selected" : ""}>\xC7oklu Se\xE7im</option><!--[-->`);
          ssrRenderList(unref(UserGuestsCapacity), (count) => {
            _push(`<option${ssrRenderAttr("value", count)} data-v-73c38737>${ssrInterpolate(count)}</option>`);
          });
          _push(`<!--]--></select></div></div><div class="row" id="user-guests-input" data-v-73c38737><!--[-->`);
          ssrRenderList(unref(Guests), (guest, index3) => {
            _push(`<div class="row mt-4 user-box" data-v-73c38737><div class="row" data-v-73c38737><h2 data-v-73c38737>${ssrInterpolate(index3 + 1)}. Misafir</h2></div><div class="col-xl-3 col-md-6" data-v-73c38737><input type="text" class="form-control h-40" name="name"${ssrRenderAttr("value", guest.name)} placeholder="Ad"${ssrIncludeBooleanAttr(guest.readOnly) ? " readonly" : ""} title="Misafir ad" data-v-73c38737></div><div class="col-xl-3 col-md-6" data-v-73c38737><input type="text" class="form-control h-40" name="surname"${ssrRenderAttr("value", guest.surname)} placeholder="Soyad"${ssrIncludeBooleanAttr(guest.readOnly) ? " readonly" : ""} title="Misafir soyad" data-v-73c38737></div><div class="col-xl-2 col-md-6" data-v-73c38737><div class="form-check form-switch" data-v-73c38737><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(guest.tcCitizen) ? ssrLooseContain(guest.tcCitizen, null) : guest.tcCitizen) ? " checked" : ""}${ssrRenderAttr("id", "guest-tcCitizen-" + guest.id)} title="Uyruk" data-v-73c38737><label${ssrRenderAttr("for", "guest-tcCitizen-" + guest.id)} class="opacity-50" data-v-73c38737> TC Vatanda\u015F\u0131 </label></div></div>`);
            if (guest.tcCitizen) {
              _push(`<div class="col-xl-3 col-md-6" data-v-73c38737><input type="text" class="form-control h-40" name="tc"${ssrRenderAttr("value", guest.idNumber)} placeholder="TC Kimlik Numaras\u0131" title="TC kimlik numaras\u0131" data-v-73c38737></div>`);
            } else {
              _push(`<div class="col-xl-3 col-md-6" data-v-73c38737><input type="text" class="form-control h-40" name="passport"${ssrRenderAttr("value", guest.idNumber)} placeholder="Pasaport Numaras\u0131" title="Pasaport numaras\u0131" data-v-73c38737></div>`);
            }
            _push(`<div class="my-1" data-v-73c38737></div><div class="col-xl-6 col-md-6" data-v-73c38737><div class="row" data-v-73c38737><div class="col-10 col-md-6 d-flex align-items-center h-40" data-v-73c38737><div class="row w-100" data-v-73c38737><div class="col-8" data-v-73c38737><label${ssrRenderAttr("for", "guest-responsible-" + guest.id)} class="opacity-50" data-v-73c38737>Sorumlu Ki\u015Fi</label></div><div class="col-4" data-v-73c38737><div class="form-check form-switch" data-v-73c38737><input class="form-check-input" type="checkbox" name="responsible"${ssrRenderAttr("id", "guest-responsible-" + guest.id)}${ssrIncludeBooleanAttr(Array.isArray(guest.isResponsible) ? ssrLooseContain(guest.isResponsible, null) : guest.isResponsible) ? " checked" : ""} title="Sorumlu ki\u015Fi" data-v-73c38737></div></div></div></div><div class="col-2" data-v-73c38737><button class="btn h-40 del-btn" style="${ssrRenderStyle({ "width": "min-content" })}" title="Sil" data-v-73c38737> X </button></div></div></div></div>`);
          });
          _push(`<!--]--></div></div></div></div><div class="col-lg-4" data-v-73c38737><div class="summary-section" data-v-73c38737><span data-v-73c38737><b data-v-73c38737>${ssrInterpolate(_ctx.$t("ReservationSummary"))}</b></span><div class="check-in-box mt-2" data-v-73c38737><div class="row" data-v-73c38737><div class="col" data-v-73c38737>${ssrInterpolate(_ctx.$t("CheckIn"))}: <br data-v-73c38737> ${ssrInterpolate(unref(CheckIn))}</div><div class="col" data-v-73c38737>${ssrInterpolate(_ctx.$t("CheckOut"))}: <br data-v-73c38737> ${ssrInterpolate(unref(CheckOut))}</div></div><div class="col mt-3" data-v-73c38737><div data-v-73c38737><span data-v-73c38737>${ssrInterpolate(_ctx.$t("TotalLengthOfStay"))}: <b data-v-73c38737>${ssrInterpolate(unref(TotalNights))}</b> ${ssrInterpolate(_ctx.$t("Night"))}</span></div><div class="mt-3" data-v-73c38737></div></div></div><div class="col mt-3" data-v-73c38737><div class="summary-items" data-v-73c38737><div class="container" data-v-73c38737><div class="row" data-v-73c38737><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(_ctx.$t("AccommodationFee"))}:</span></div><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(Math.ceil(
            unref(TotalAccommodationFee) * 36.5533
          ).toLocaleString("tr-TR"))} \xA0 \u20BA</span></div></div><div class="row" data-v-73c38737><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(_ctx.$t("TaxRate"))}:</span></div><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(unref(TaxRate))} \xA0%</span></div></div><div class="row" data-v-73c38737><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(_ctx.$t("TaxAmount"))}:</span></div><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(Math.ceil(unref(TaxAmount) * 36.5533).toLocaleString(
            "tr-TR"
          ))} \xA0 \u20BA</span></div></div><div class="row" data-v-73c38737><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(_ctx.$t("CleaningFee"))}:</span></div><div class="col" data-v-73c38737><span data-v-73c38737>${ssrInterpolate(Math.ceil(unref(CleaningFee) * 36.5533).toLocaleString(
            "tr-TR"
          ))} \xA0\u20BA</span></div></div><div class="row mt-3 total-price" data-v-73c38737><div class="col" data-v-73c38737>${ssrInterpolate(_ctx.$t("Total"))} ${ssrInterpolate(_ctx.$t("Price"))}: </div><div class="col old" data-v-73c38737>${ssrInterpolate(unref(TotalPrice).toLocaleString("tr-TR"))} \xA0 \u20BA </div>`);
          if (unref(NewPriceForCoupon)) {
            _push(`<div class="col new" data-v-73c38737>${ssrInterpolate(unref(TotalPriceForCoupon).toLocaleString("tr-TR"))} \xA0 \u20BA </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><hr style="${ssrRenderStyle({ "margin": "6px 0" })}" data-v-73c38737><div class="row mt-1 coupons" data-v-73c38737><div class="col-lg-12" data-v-73c38737><div class="form-check" data-v-73c38737><input class="form-check-input" type="checkbox" name="coupon"${ssrRenderAttr("value", unref(UseCoupon))}${ssrIncludeBooleanAttr(Array.isArray(unref(UseCoupon)) ? ssrLooseContain(unref(UseCoupon), unref(UseCoupon)) : unref(UseCoupon)) ? " checked" : ""} id="coupon" data-v-73c38737><label class="form-check-label" for="coupon" data-v-73c38737>${ssrInterpolate(_ctx.$t("UseCouponCode"))}</label></div></div>`);
          if (unref(UseCoupon)) {
            _push(`<div class="row mt-1 d-flex justify-content-around" data-v-73c38737><div class="col-lg-8" data-v-73c38737><input type="text"${ssrRenderAttr("value", unref(SelectedCoupon))}${ssrRenderAttr("placeholder", _ctx.$t("EnterCouponCode"))} id="selected-coupon" data-v-73c38737></div><div class="col-lg-4 d-flex align-items-end" data-v-73c38737><span class="code-apply"${ssrRenderAttr("title", _ctx.$t("Apply"))} data-v-73c38737>${ssrInterpolate(_ctx.$t("Apply"))}</span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></div><div class="col mt-3 text-center" data-v-73c38737><button class="btn payment-btn"${ssrIncludeBooleanAttr(unref(DisablePaymentBtn)) ? " disabled" : ""} data-v-73c38737>${ssrInterpolate(_ctx.$t("ContinuePaymentStep"))}</button></div></div><div class="mt-2" data-v-73c38737><div class="text-danger err-side" style="${ssrRenderStyle({ "height": "20px" })}" data-v-73c38737>`);
          if (unref(ErrorMessage)) {
            _push(`<p data-v-73c38737>* ${ssrInterpolate(_ctx.$t(unref(ErrorMessage)))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (index2 === 1) {
          _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-73c38737><iframe${ssrRenderAttr("src", unref(PaymentURL))} frameborder="0" style="${ssrRenderStyle({})}" id="payment-iframe" data-v-73c38737></iframe></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73c38737"]]);

export { index as default };
//# sourceMappingURL=index-aeb8e592.mjs.map
