import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { H as Head, T as Title, M as Meta } from './components-9d7d262f.mjs';
import { _ as __nuxt_component_4$1, j as ja } from './main-6a42e016.mjs';
import { d as useRoute, u as useRouter, j as useState, h as useI18n } from '../server.mjs';
import { defineComponent, ref, provide, watch, onMounted, onBeforeUnmount, toRef, inject, computed, Comment, markRaw, openBlock, createElementBlock, createElementVNode, renderSlot, normalizeProps, guardReactiveProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, Fragment, renderList, useSSRContext, isRef, mergeProps } from 'vue';
import { u as useCookie } from './cookie-daf610f3.mjs';
import { u as useLocalePath } from './composables-2c3efc9a.mjs';
import { H as HelperComposable, i as instance, c as config } from './axiosConfig-89e67415.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_2$1 } from './detail-maps-e66f1e74.mjs';
import { b as be$1, Z as Z$1 } from '../../vueperslides.es.mjs';
import VueEasyLightbox from 'vue-easy-lightbox';
import 'node:async_hooks';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-6a088328.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'date-fns';
import 'vue-router';
import 'vue3-snackbar';
import 'is-https';
import 'axios';

let CRMHost;
const CRMHostRes = HelperComposable().GetCRMHost();
CRMHostRes.then((res) => {
  CRMHost = res;
}).catch((error) => {
  console.error(error);
});
function ReservationComposable() {
  let CrmWebsite = config.CRM_WEBSITE;
  let CrmPaymentType = config.CRM_PAYMENT_TYPE;
  const CookieResID = useCookie("CookieResID");
  const CookieEstateID = useCookie("EstateID");
  const SendReservationData = async (data) => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    if (!data) {
      return "1";
    }
    data.webSite = Number(CrmWebsite);
    data.paymentType = Number(CrmPaymentType);
    const AxiosResponse = await instance.post(
      `${CRMHost}/reservations`,
      data,
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`
        }
      }
    );
    if (AxiosResponse) {
      if (AxiosResponse.data) {
        RawData = AxiosResponse.data;
      }
      if (AxiosResponse.message) {
        return AxiosResponse.message;
      }
    }
    return RawData;
  };
  const ConfirmPhoneNumber = async (code) => {
    let RawData = null;
    if (!code) {
      return "Verification Code Error";
    }
    if (!CookieResID.value) {
      return "Reservation ID Error";
    }
    const AxiosResponse = await instance.get(
      `${CRMHost}/reservations?code=${code}&webSite=${CrmWebsite}&reservationId=${CookieResID.value}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  const CheckAvailability = async (CheckIn, CheckOut) => {
    let RawData = null;
    let EstateID = CookieEstateID.value;
    if (!EstateID) {
      return "1";
    }
    if (!CheckIn) {
      return "please select check-in date";
    }
    if (!CheckOut) {
      return "please select check-out date";
    }
    try {
      const AxiosResponse = await instance.get(
        `${CRMHost}/estates/free?webSite=${CrmWebsite}&endDate=${CheckOut}&startDate=${CheckIn}&estateId=${EstateID}`
      );
      if (!AxiosResponse) {
        return "1";
      }
      if (!AxiosResponse.data) {
        return AxiosResponse.message;
      }
      RawData = AxiosResponse.data;
      return RawData;
    } catch (error) {
      let err = error.request;
      return JSON.parse(err.response).message;
    }
  };
  const SendCallBackInfo = async (data) => {
    let RawData = null;
    if (!data) {
      return "Call Back Error";
    }
    const AxiosResponse = await instance.post(`${CRMHost}/contact-us`, data);
    RawData = AxiosResponse.data;
    return RawData;
  };
  return {
    SendReservationData,
    ConfirmPhoneNumber,
    CheckAvailability,
    SendCallBackInfo
  };
}

(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".mapdiv[data-v-174b771e]{width:100%;height:100%}.info-window-wrapper[data-v-90174664]{display:none}.mapdiv .info-window-wrapper[data-v-90174664]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(e);}}catch(a){console.error("vite-plugin-css-injected-by-js",a);}})();
var qe = Object.defineProperty;
var Be = (n, e, t) => e in n ? qe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var se = (n, e, t) => (Be(n, typeof e != "symbol" ? e + "" : e, t), t);
const Z = Symbol("map"), D = Symbol("api"), xe = Symbol("marker"), Le = Symbol("markerCluster"), ee = Symbol("CustomMarker"), Se = Symbol("mapTilesLoaded"), q = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Fe(n, e, t, s) {
  function r(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function l(u) {
      try {
        d(s.next(u));
      } catch (c) {
        a(c);
      }
    }
    function i(u) {
      try {
        d(s.throw(u));
      } catch (c) {
        a(c);
      }
    }
    function d(u) {
      u.done ? o(u.value) : r(u.value).then(l, i);
    }
    d((s = s.apply(n, e || [])).next());
  });
}
var Ve = function n(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var s, r, o;
    if (Array.isArray(e)) {
      if (s = e.length, s != t.length)
        return !1;
      for (r = s; r-- !== 0; )
        if (!n(e[r], t[r]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (o = Object.keys(e), s = o.length, s !== Object.keys(t).length)
      return !1;
    for (r = s; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = s; r-- !== 0; ) {
      var a = o[r];
      if (!n(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
};
const de = "__googleMapsScriptId";
var R;
(function(n) {
  n[n.INITIALIZED = 0] = "INITIALIZED", n[n.LOADING = 1] = "LOADING", n[n.SUCCESS = 2] = "SUCCESS", n[n.FAILURE = 3] = "FAILURE";
})(R || (R = {}));
class T {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey: e, authReferrerPolicy: t, channel: s, client: r, id: o = de, language: a, libraries: l = [], mapIds: i, nonce: d, region: u, retries: c = 3, url: h = "https://maps.googleapis.com/maps/api/js", version: p }) {
    if (this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = e, this.authReferrerPolicy = t, this.channel = s, this.client = r, this.id = o || de, this.language = a, this.libraries = l, this.mapIds = i, this.nonce = d, this.region = u, this.retries = c, this.url = h, this.version = p, T.instance) {
      if (!Ve(this.options, T.instance.options))
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(T.instance.options)}`);
      return T.instance;
    }
    T.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    return this.errors.length ? R.FAILURE : this.done ? R.SUCCESS : this.loading ? R.LOADING : R.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    let e = this.url;
    return e += "?callback=__googleMapsCallback", this.apiKey && (e += `&key=${this.apiKey}`), this.channel && (e += `&channel=${this.channel}`), this.client && (e += `&client=${this.client}`), this.libraries.length > 0 && (e += `&libraries=${this.libraries.join(",")}`), this.language && (e += `&language=${this.language}`), this.region && (e += `&region=${this.region}`), this.version && (e += `&v=${this.version}`), this.mapIds && (e += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (e += `&auth_referrer_policy=${this.authReferrerPolicy}`), e;
  }
  deleteScript() {
    const e = document.getElementById(this.id);
    e && e.remove();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((e, t) => {
      this.loadCallback((s) => {
        s ? t(s.error) : e(window.google);
      });
    });
  }
  importLibrary(e) {
    return this.execute(), google.maps.importLibrary(e);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(e) {
    this.callbacks.push(e), this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var e, t;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const s = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    Object.keys(s).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (o) => !s[o] && delete s[o]
    ), !((t = (e = window == null ? void 0 : window.google) === null || e === void 0 ? void 0 : e.maps) === null || t === void 0) && t.importLibrary || ((o) => {
      let a, l, i, d = "The Google Maps JavaScript API", u = "google", c = "importLibrary", h = "__ib__", p = document, m = window;
      m = m[u] || (m[u] = {});
      const f = m.maps || (m.maps = {}), g = /* @__PURE__ */ new Set(), v = new URLSearchParams(), w = () => (
        // @ts-ignore
        a || (a = new Promise((_, E) => Fe(this, void 0, void 0, function* () {
          var b;
          yield l = p.createElement("script"), l.id = this.id, v.set("libraries", [...g] + "");
          for (i in o)
            v.set(i.replace(/[A-Z]/g, (x) => "_" + x[0].toLowerCase()), o[i]);
          v.set("callback", u + ".maps." + h), l.src = this.url + "?" + v, f[h] = _, l.onerror = () => a = E(Error(d + " could not load.")), l.nonce = this.nonce || ((b = p.querySelector("script[nonce]")) === null || b === void 0 ? void 0 : b.nonce) || "", p.head.append(l);
        })))
      );
      f[c] ? console.warn(d + " only loads once. Ignoring:", o) : f[c] = (_, ...E) => g.add(_) && w().then(() => f[c](_, ...E));
    })(s);
    const r = this.libraries.map((o) => this.importLibrary(o));
    r.length || r.push(this.importLibrary("core")), Promise.all(r).then(() => this.callback(), (o) => {
      const a = new ErrorEvent("error", { error: o });
      this.loadErrorCallback(a);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(e) {
    if (this.errors.push(e), this.errors.length <= this.retries) {
      const t = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${t} ms.`), setTimeout(() => {
        this.deleteScript(), this.setScript();
      }, t);
    } else
      this.onerrorEvent = e, this.callback();
  }
  callback() {
    this.done = !0, this.loading = !1, this.callbacks.forEach((e) => {
      e(this.onerrorEvent);
    }), this.callbacks = [];
  }
  execute() {
    if (this.resetIfRetryingFailed(), this.done)
      this.callback();
    else {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), this.callback();
        return;
      }
      this.loading || (this.loading = !0, this.setScript());
    }
  }
}
function ze(n) {
  return class extends n.OverlayView {
    constructor(s) {
      super();
      se(this, "element");
      se(this, "opts");
      const { element: r, ...o } = s;
      this.element = r, this.opts = o, this.opts.map && this.setMap(this.opts.map);
    }
    getPosition() {
      return this.opts.position ? this.opts.position instanceof n.LatLng ? this.opts.position : new n.LatLng(this.opts.position) : null;
    }
    getVisible() {
      if (!this.element)
        return !1;
      const s = this.element;
      return s.style.display !== "none" && s.style.visibility !== "hidden" && (s.style.opacity === "" || Number(s.style.opacity) > 0.01);
    }
    onAdd() {
      if (!this.element)
        return;
      const s = this.getPanes();
      s && s.overlayMouseTarget.appendChild(this.element);
    }
    draw() {
      if (!this.element)
        return;
      const s = this.getProjection(), r = s == null ? void 0 : s.fromLatLngToDivPixel(this.getPosition());
      if (r) {
        this.element.style.position = "absolute";
        const o = this.element.offsetHeight, a = this.element.offsetWidth;
        let l, i;
        switch (this.opts.anchorPoint) {
          case "TOP_CENTER":
            l = r.x - a / 2, i = r.y;
            break;
          case "BOTTOM_CENTER":
            l = r.x - a / 2, i = r.y - o;
            break;
          case "LEFT_CENTER":
            l = r.x, i = r.y - o / 2;
            break;
          case "RIGHT_CENTER":
            l = r.x - a, i = r.y - o / 2;
            break;
          case "TOP_LEFT":
            l = r.x, i = r.y;
            break;
          case "TOP_RIGHT":
            l = r.x - a, i = r.y;
            break;
          case "BOTTOM_LEFT":
            l = r.x, i = r.y - o;
            break;
          case "BOTTOM_RIGHT":
            l = r.x - a, i = r.y - o;
            break;
          default:
            l = r.x - a / 2, i = r.y - o / 2;
        }
        this.element.style.left = l + "px", this.element.style.top = i + "px", this.element.style.transform = `translateX(${this.opts.offsetX || 0}px) translateY(${this.opts.offsetY || 0}px)`, this.opts.zIndex && (this.element.style.zIndex = this.opts.zIndex.toString());
      }
    }
    onRemove() {
      this.element && this.element.remove();
    }
    setOptions(s) {
      const { element: r, ...o } = s;
      this.element = r, this.opts = o, this.draw();
    }
  };
}
let he;
const pe = [
  "bounds_changed",
  "center_changed",
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "heading_changed",
  "idle",
  "maptypeid_changed",
  "mousemove",
  "mouseout",
  "mouseover",
  "projection_changed",
  "resize",
  "rightclick",
  "tilesloaded",
  "tilt_changed",
  "zoom_changed"
], Ge = defineComponent({
  props: {
    apiPromise: {
      type: Promise
    },
    apiKey: {
      type: String,
      default: ""
    },
    version: {
      type: String,
      default: "weekly"
    },
    libraries: {
      type: Array,
      default: () => ["places"]
    },
    region: {
      type: String,
      required: !1
    },
    language: {
      type: String,
      required: !1
    },
    backgroundColor: {
      type: String,
      required: !1
    },
    center: {
      type: Object,
      default: () => ({ lat: 0, lng: 0 })
    },
    clickableIcons: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    controlSize: {
      type: Number,
      required: !1
    },
    disableDefaultUi: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disableDoubleClickZoom: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    draggable: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    draggableCursor: {
      type: String,
      required: !1
    },
    draggingCursor: {
      type: String,
      required: !1
    },
    fullscreenControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    fullscreenControlPosition: {
      type: String,
      required: !1
    },
    gestureHandling: {
      type: String,
      required: !1
    },
    heading: {
      type: Number,
      required: !1
    },
    keyboardShortcuts: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    mapTypeControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    mapTypeControlOptions: {
      type: Object,
      required: !1
    },
    mapTypeId: {
      type: [Number, String],
      required: !1
    },
    mapId: {
      type: String,
      required: !1
    },
    maxZoom: {
      type: Number,
      required: !1
    },
    minZoom: {
      type: Number,
      required: !1
    },
    noClear: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    panControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    panControlPosition: {
      type: String,
      required: !1
    },
    restriction: {
      type: Object,
      required: !1
    },
    rotateControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    rotateControlPosition: {
      type: String,
      required: !1
    },
    scaleControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    scaleControlStyle: {
      type: Number,
      required: !1
    },
    scrollwheel: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    streetView: {
      type: Object,
      required: !1
    },
    streetViewControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    streetViewControlPosition: {
      type: String,
      required: !1
    },
    styles: {
      type: Array,
      required: !1
    },
    tilt: {
      type: Number,
      required: !1
    },
    zoom: {
      type: Number,
      required: !1
    },
    zoomControl: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    zoomControlPosition: {
      type: String,
      required: !1
    }
  },
  emits: pe,
  setup(n, { emit: e }) {
    const t = ref(), s = ref(!1), r = ref(), o = ref(), a = ref(!1);
    provide(Z, r), provide(D, o), provide(Se, a);
    const l = () => {
      const c = { ...n };
      Object.keys(c).forEach((f) => {
        c[f] === void 0 && delete c[f];
      });
      const p = (f) => {
        var g;
        return f ? { position: (g = o.value) == null ? void 0 : g.ControlPosition[f] } : {};
      }, m = {
        scaleControlOptions: n.scaleControlStyle ? { style: n.scaleControlStyle } : {},
        panControlOptions: p(n.panControlPosition),
        zoomControlOptions: p(n.zoomControlPosition),
        rotateControlOptions: p(n.rotateControlPosition),
        streetViewControlOptions: p(n.streetViewControlPosition),
        fullscreenControlOptions: p(n.fullscreenControlPosition),
        disableDefaultUI: n.disableDefaultUi
      };
      return { ...c, ...m };
    }, i = watch(
      [o, r],
      ([c, h]) => {
        const p = c, m = h;
        p && m && (p.event.addListenerOnce(m, "tilesloaded", () => {
          a.value = !0;
        }), setTimeout(i, 0));
      },
      { immediate: !0 }
    ), d = () => {
      try {
        const { apiKey: c, region: h, version: p, language: m, libraries: f } = n;
        he = new T({ apiKey: c, region: h, version: p, language: m, libraries: f });
      } catch (c) {
        console.error(c);
      }
    }, u = (c) => {
      o.value = markRaw(c.maps), r.value = markRaw(new c.maps.Map(t.value, l()));
      const h = ze(o.value);
      o.value[ee] = h, pe.forEach((m) => {
        var f;
        (f = r.value) == null || f.addListener(m, (g) => e(m, g));
      }), s.value = !0;
      const p = Object.keys(n).filter(
        (m) => !["apiPromise", "apiKey", "version", "libraries", "region", "language", "center", "zoom"].includes(m)
      ).map((m) => toRef(n, m));
      watch(
        [() => n.center, () => n.zoom, ...p],
        ([m, f], [g, v]) => {
          var x, M, F;
          const { center: w, zoom: _, ...E } = l();
          (x = r.value) == null || x.setOptions(E), f !== void 0 && f !== v && ((M = r.value) == null || M.setZoom(f));
          const b = !g || m.lng !== g.lng || m.lat !== g.lat;
          m && b && ((F = r.value) == null || F.panTo(m));
        }
      );
    };
    return onMounted(() => {
      n.apiPromise && n.apiPromise instanceof Promise ? n.apiPromise.then(u) : (d(), he.load().then(u));
    }), onBeforeUnmount(() => {
      var c;
      a.value = !1, r.value && ((c = o.value) == null || c.event.clearInstanceListeners(r.value));
    }), { mapRef: t, ready: s, map: r, api: o, mapTilesLoaded: a };
  }
});
const te = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [s, r] of e)
    t[s] = r;
  return t;
}, He = {
  ref: "mapRef",
  class: "mapdiv"
};
function We(n, e, t, s, r, o) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("div", He, null, 512),
    renderSlot(n.$slots, "default", normalizeProps(guardReactiveProps({ ready: n.ready, map: n.map, api: n.api, mapTilesLoaded: n.mapTilesLoaded })), void 0, !0)
  ]);
}
const Ot = /* @__PURE__ */ te(Ge, [["render", We], ["__scopeId", "data-v-174b771e"]]);
function Ke(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Je = function n(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var s, r, o;
    if (Array.isArray(e)) {
      if (s = e.length, s != t.length)
        return !1;
      for (r = s; r-- !== 0; )
        if (!n(e[r], t[r]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (o = Object.keys(e), s = o.length, s !== Object.keys(t).length)
      return !1;
    for (r = s; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = s; r-- !== 0; ) {
      var a = o[r];
      if (!n(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
};
const $ = /* @__PURE__ */ Ke(Je), Ye = (n) => n === "Marker", Xe = (n) => n === ee, U = (n, e, t, s) => {
  const r = ref(), o = inject(Z, ref()), a = inject(D, ref()), l = inject(Le, ref()), i = computed(
    () => !!(l.value && a.value && (r.value instanceof a.value.Marker || r.value instanceof a.value[ee]))
  );
  return watch(
    [o, t],
    (d, [u, c]) => {
      var p, m, f;
      const h = !$(t.value, c) || o.value !== u;
      !o.value || !a.value || !h || (r.value ? (r.value.setOptions(t.value), i.value && ((p = l.value) == null || p.removeMarker(r.value), (m = l.value) == null || m.addMarker(r.value))) : (Ye(n) ? r.value = markRaw(
        new a.value[n](t.value)
      ) : Xe(n) ? r.value = markRaw(
        new a.value[n](t.value)
      ) : r.value = markRaw(
        new a.value[n]({
          ...t.value,
          map: o.value
        })
      ), i.value ? (f = l.value) == null || f.addMarker(r.value) : r.value.setMap(o.value), e.forEach((g) => {
        var v;
        (v = r.value) == null || v.addListener(g, (w) => s(g, w));
      })));
    },
    {
      immediate: !0
    }
  ), onBeforeUnmount(() => {
    var d, u;
    r.value && ((d = a.value) == null || d.event.clearInstanceListeners(r.value), i.value ? (u = l.value) == null || u.removeMarker(r.value) : r.value.setMap(null));
  }), r;
}, fe = [
  "animation_changed",
  "click",
  "dblclick",
  "rightclick",
  "dragstart",
  "dragend",
  "drag",
  "mouseover",
  "mousedown",
  "mouseout",
  "mouseup",
  "draggable_changed",
  "clickable_changed",
  "contextmenu",
  "cursor_changed",
  "flat_changed",
  "rightclick",
  "zindex_changed",
  "icon_changed",
  "position_changed",
  "shape_changed",
  "title_changed",
  "visible_changed"
], xt = defineComponent({
  name: "Marker",
  props: {
    options: {
      type: Object,
      required: !0
    }
  },
  emits: fe,
  setup(n, { emit: e, expose: t, slots: s }) {
    const r = toRef(n, "options"), o = U("Marker", fe, r, e);
    return provide(xe, o), t({ marker: o }), () => {
      var a;
      return (a = s.default) == null ? void 0 : a.call(s);
    };
  }
}); defineComponent({
  name: "Polyline",
  props: {
    options: {
      type: Object,
      required: !0
    }
  },
  emits: q,
  setup(n, { emit: e }) {
    const t = toRef(n, "options");
    return { polyline: U("Polyline", q, t, e) };
  },
  render: () => null
}); defineComponent({
  name: "Polygon",
  props: {
    options: {
      type: Object,
      required: !0
    }
  },
  emits: q,
  setup(n, { emit: e }) {
    const t = toRef(n, "options");
    return { polygon: U("Polygon", q, t, e) };
  },
  render: () => null
}); const me = q.concat(["bounds_changed"]); defineComponent({
  name: "Rectangle",
  props: {
    options: {
      type: Object,
      required: !0
    }
  },
  emits: me,
  setup(n, { emit: e }) {
    const t = toRef(n, "options");
    return { rectangle: U("Rectangle", me, t, e) };
  },
  render: () => null
}); const ge = q.concat(["center_changed", "radius_changed"]); defineComponent({
  name: "Circle",
  props: {
    options: {
      type: Object,
      required: !0
    }
  },
  emits: ge,
  setup(n, { emit: e }) {
    const t = toRef(n, "options");
    return { circle: U("Circle", ge, t, e) };
  },
  render: () => null
}); defineComponent({
  props: {
    position: {
      type: String,
      required: !0
    },
    index: {
      type: Number,
      default: 1
    }
  },
  emits: ["content:loaded"],
  setup(n, { emit: e }) {
    const t = ref(null), s = inject(Z, ref()), r = inject(D, ref()), o = inject(Se, ref(!1)), a = ref(!1), l = watch(
      [o, r, t],
      ([u, c, h]) => {
        c && u && h && (i(n.position), a.value = !0, e("content:loaded"), setTimeout(l, 0));
      },
      { immediate: !0 }
    ), i = (u) => {
      if (s.value && r.value && t.value) {
        const c = r.value.ControlPosition[u];
        s.value.controls[c].push(t.value);
      }
    }, d = (u) => {
      if (s.value && r.value) {
        let c = null;
        const h = r.value.ControlPosition[u];
        s.value.controls[h].forEach((p, m) => {
          p === t.value && (c = m);
        }), c !== null && s.value.controls[h].removeAt(c);
      }
    };
    return onBeforeUnmount(() => d(n.position)), watch(
      () => n.position,
      (u, c) => {
        d(c), i(u);
      }
    ), watch(
      () => n.index,
      (u) => {
        u && t.value && (t.value.index = n.index);
      }
    ), { controlRef: t, showContent: a };
  }
});
const ve = ["closeclick", "content_changed", "domready", "position_changed", "visible", "zindex_changed"]; defineComponent({
  inheritAttrs: !1,
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: Boolean
    }
  },
  emits: [...ve, "update:modelValue"],
  setup(n, { slots: e, emit: t, expose: s }) {
    const r = ref(), o = ref(), a = inject(Z, ref()), l = inject(D, ref()), i = inject(xe, ref());
    let d, u = n.modelValue;
    const c = computed(() => {
      var f;
      return (f = e.default) == null ? void 0 : f.call(e).some((g) => g.type !== Comment);
    }), h = (f) => {
      u = f, t("update:modelValue", f);
    }, p = (f) => {
      r.value && (r.value.open({ map: a.value, anchor: i.value, ...f }), h(!0));
    }, m = () => {
      r.value && (r.value.close(), h(!1));
    };
    return onMounted(() => {
      watch(
        [a, () => n.options],
        ([f, g], [v, w]) => {
          var E;
          const _ = !$(g, w) || a.value !== v;
          a.value && l.value && _ && (r.value ? (r.value.setOptions({
            ...g,
            content: c.value ? o.value : g.content
          }), i.value || p()) : (r.value = markRaw(
            new l.value.InfoWindow({
              ...g,
              content: c.value ? o.value : g.content
            })
          ), i.value && (d = i.value.addListener("click", () => {
            p();
          })), (!i.value || u) && p(), ve.forEach((b) => {
            var x;
            (x = r.value) == null || x.addListener(b, (M) => t(b, M));
          }), (E = r.value) == null || E.addListener("closeclick", () => h(!1))));
        },
        {
          immediate: !0
        }
      ), watch(() => n.modelValue, (f) => {
        f !== u && (f ? p() : m());
      });
    }), onBeforeUnmount(() => {
      var f;
      d && d.remove(), r.value && ((f = l.value) == null || f.event.clearInstanceListeners(r.value), m());
    }), s({ infoWindow: r, open: p, close: m }), { infoWindow: r, infoWindowRef: o, hasSlotContent: c, open: p, close: m };
  }
});
const ye = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], re = 1, V = 8;
class le {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(e) {
    if (!(e instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [t, s] = new Uint8Array(e, 0, 2);
    if (t !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const r = s >> 4;
    if (r !== re)
      throw new Error(`Got v${r} data when expected v${re}.`);
    const o = ye[s & 15];
    if (!o)
      throw new Error("Unrecognized array type.");
    const [a] = new Uint16Array(e, 2, 1), [l] = new Uint32Array(e, 4, 1);
    return new le(l, a, o, e);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(e, t = 64, s = Float64Array, r) {
    if (isNaN(e) || e < 0)
      throw new Error(`Unpexpected numItems value: ${e}.`);
    this.numItems = +e, this.nodeSize = Math.min(Math.max(+t, 2), 65535), this.ArrayType = s, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
    const o = ye.indexOf(this.ArrayType), a = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, l = e * this.IndexArrayType.BYTES_PER_ELEMENT, i = (8 - l % 8) % 8;
    if (o < 0)
      throw new Error(`Unexpected typed array class: ${s}.`);
    r && r instanceof ArrayBuffer ? (this.data = r, this.ids = new this.IndexArrayType(this.data, V, e), this.coords = new this.ArrayType(this.data, V + l + i, e * 2), this._pos = e * 2, this._finished = !0) : (this.data = new ArrayBuffer(V + a + l + i), this.ids = new this.IndexArrayType(this.data, V, e), this.coords = new this.ArrayType(this.data, V + l + i, e * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (re << 4) + o]), new Uint16Array(this.data, 2, 1)[0] = t, new Uint32Array(this.data, 4, 1)[0] = e);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(e, t) {
    const s = this._pos >> 1;
    return this.ids[s] = s, this.coords[this._pos++] = e, this.coords[this._pos++] = t, s;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const e = this._pos >> 1;
    if (e !== this.numItems)
      throw new Error(`Added ${e} items when expected ${this.numItems}.`);
    return ie(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(e, t, s, r) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: a, nodeSize: l } = this, i = [0, o.length - 1, 0], d = [];
    for (; i.length; ) {
      const u = i.pop() || 0, c = i.pop() || 0, h = i.pop() || 0;
      if (c - h <= l) {
        for (let g = h; g <= c; g++) {
          const v = a[2 * g], w = a[2 * g + 1];
          v >= e && v <= s && w >= t && w <= r && d.push(o[g]);
        }
        continue;
      }
      const p = h + c >> 1, m = a[2 * p], f = a[2 * p + 1];
      m >= e && m <= s && f >= t && f <= r && d.push(o[p]), (u === 0 ? e <= m : t <= f) && (i.push(h), i.push(p - 1), i.push(1 - u)), (u === 0 ? s >= m : r >= f) && (i.push(p + 1), i.push(c), i.push(1 - u));
    }
    return d;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(e, t, s) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: r, coords: o, nodeSize: a } = this, l = [0, r.length - 1, 0], i = [], d = s * s;
    for (; l.length; ) {
      const u = l.pop() || 0, c = l.pop() || 0, h = l.pop() || 0;
      if (c - h <= a) {
        for (let g = h; g <= c; g++)
          we(o[2 * g], o[2 * g + 1], e, t) <= d && i.push(r[g]);
        continue;
      }
      const p = h + c >> 1, m = o[2 * p], f = o[2 * p + 1];
      we(m, f, e, t) <= d && i.push(r[p]), (u === 0 ? e - s <= m : t - s <= f) && (l.push(h), l.push(p - 1), l.push(1 - u)), (u === 0 ? e + s >= m : t + s >= f) && (l.push(p + 1), l.push(c), l.push(1 - u));
    }
    return i;
  }
}
function ie(n, e, t, s, r, o) {
  if (r - s <= t)
    return;
  const a = s + r >> 1;
  Ie(n, e, a, s, r, o), ie(n, e, t, s, a - 1, 1 - o), ie(n, e, t, a + 1, r, 1 - o);
}
function Ie(n, e, t, s, r, o) {
  for (; r > s; ) {
    if (r - s > 600) {
      const d = r - s + 1, u = t - s + 1, c = Math.log(d), h = 0.5 * Math.exp(2 * c / 3), p = 0.5 * Math.sqrt(c * h * (d - h) / d) * (u - d / 2 < 0 ? -1 : 1), m = Math.max(s, Math.floor(t - u * h / d + p)), f = Math.min(r, Math.floor(t + (d - u) * h / d + p));
      Ie(n, e, t, m, f, o);
    }
    const a = e[2 * t + o];
    let l = s, i = r;
    for (z(n, e, s, t), e[2 * r + o] > a && z(n, e, s, r); l < i; ) {
      for (z(n, e, l, i), l++, i--; e[2 * l + o] < a; )
        l++;
      for (; e[2 * i + o] > a; )
        i--;
    }
    e[2 * s + o] === a ? z(n, e, s, i) : (i++, z(n, e, i, r)), i <= t && (s = i + 1), t <= i && (r = i - 1);
  }
}
function z(n, e, t, s) {
  ne(n, t, s), ne(e, 2 * t, 2 * s), ne(e, 2 * t + 1, 2 * s + 1);
}
function ne(n, e, t) {
  const s = n[e];
  n[e] = n[t], n[t] = s;
}
function we(n, e, t, s) {
  const r = n - t, o = e - s;
  return r * r + o * o;
}
const ot = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (n) => n
  // props => ({sum: props.my_value})
}, _e = Math.fround || ((n) => (e) => (n[0] = +e, n[0]))(new Float32Array(1)), A = 2, S = 3, oe = 4, L = 5, Ae = 6;
class Te {
  constructor(e) {
    this.options = Object.assign(Object.create(ot), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(e) {
    const { log: t, minZoom: s, maxZoom: r } = this.options;
    t && console.time("total time");
    const o = `prepare ${e.length} points`;
    t && console.time(o), this.points = e;
    const a = [];
    for (let i = 0; i < e.length; i++) {
      const d = e[i];
      if (!d.geometry)
        continue;
      const [u, c] = d.geometry.coordinates, h = _e(W(u)), p = _e(K(c));
      a.push(
        h,
        p,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        i,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && a.push(0);
    }
    let l = this.trees[r + 1] = this._createTree(a);
    t && console.timeEnd(o);
    for (let i = r; i >= s; i--) {
      const d = +Date.now();
      l = this.trees[i] = this._createTree(this._cluster(l, i)), t && console.log("z%d: %d clusters in %dms", i, l.numItems, +Date.now() - d);
    }
    return t && console.timeEnd("total time"), this;
  }
  getClusters(e, t) {
    let s = ((e[0] + 180) % 360 + 360) % 360 - 180;
    const r = Math.max(-90, Math.min(90, e[1]));
    let o = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
    const a = Math.max(-90, Math.min(90, e[3]));
    if (e[2] - e[0] >= 360)
      s = -180, o = 180;
    else if (s > o) {
      const c = this.getClusters([s, r, 180, a], t), h = this.getClusters([-180, r, o, a], t);
      return c.concat(h);
    }
    const l = this.trees[this._limitZoom(t)], i = l.range(W(s), K(a), W(o), K(r)), d = l.data, u = [];
    for (const c of i) {
      const h = this.stride * c;
      u.push(d[h + L] > 1 ? ke(d, h, this.clusterProps) : this.points[d[h + S]]);
    }
    return u;
  }
  getChildren(e) {
    const t = this._getOriginId(e), s = this._getOriginZoom(e), r = "No cluster with the specified id.", o = this.trees[s];
    if (!o)
      throw new Error(r);
    const a = o.data;
    if (t * this.stride >= a.length)
      throw new Error(r);
    const l = this.options.radius / (this.options.extent * Math.pow(2, s - 1)), i = a[t * this.stride], d = a[t * this.stride + 1], u = o.within(i, d, l), c = [];
    for (const h of u) {
      const p = h * this.stride;
      a[p + oe] === e && c.push(a[p + L] > 1 ? ke(a, p, this.clusterProps) : this.points[a[p + S]]);
    }
    if (c.length === 0)
      throw new Error(r);
    return c;
  }
  getLeaves(e, t, s) {
    t = t || 10, s = s || 0;
    const r = [];
    return this._appendLeaves(r, e, t, s, 0), r;
  }
  getTile(e, t, s) {
    const r = this.trees[this._limitZoom(e)], o = Math.pow(2, e), { extent: a, radius: l } = this.options, i = l / a, d = (s - i) / o, u = (s + 1 + i) / o, c = {
      features: []
    };
    return this._addTileFeatures(
      r.range((t - i) / o, d, (t + 1 + i) / o, u),
      r.data,
      t,
      s,
      o,
      c
    ), t === 0 && this._addTileFeatures(
      r.range(1 - i / o, d, 1, u),
      r.data,
      o,
      s,
      o,
      c
    ), t === o - 1 && this._addTileFeatures(
      r.range(0, d, i / o, u),
      r.data,
      -1,
      s,
      o,
      c
    ), c.features.length ? c : null;
  }
  getClusterExpansionZoom(e) {
    let t = this._getOriginZoom(e) - 1;
    for (; t <= this.options.maxZoom; ) {
      const s = this.getChildren(e);
      if (t++, s.length !== 1)
        break;
      e = s[0].properties.cluster_id;
    }
    return t;
  }
  _appendLeaves(e, t, s, r, o) {
    const a = this.getChildren(t);
    for (const l of a) {
      const i = l.properties;
      if (i && i.cluster ? o + i.point_count <= r ? o += i.point_count : o = this._appendLeaves(e, i.cluster_id, s, r, o) : o < r ? o++ : e.push(l), e.length === s)
        break;
    }
    return o;
  }
  _createTree(e) {
    const t = new le(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let s = 0; s < e.length; s += this.stride)
      t.add(e[s], e[s + 1]);
    return t.finish(), t.data = e, t;
  }
  _addTileFeatures(e, t, s, r, o, a) {
    for (const l of e) {
      const i = l * this.stride, d = t[i + L] > 1;
      let u, c, h;
      if (d)
        u = $e(t, i, this.clusterProps), c = t[i], h = t[i + 1];
      else {
        const f = this.points[t[i + S]];
        u = f.properties;
        const [g, v] = f.geometry.coordinates;
        c = W(g), h = K(v);
      }
      const p = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (c * o - s)),
          Math.round(this.options.extent * (h * o - r))
        ]],
        tags: u
      };
      let m;
      d || this.options.generateId ? m = t[i + S] : m = this.points[t[i + S]].id, m !== void 0 && (p.id = m), a.features.push(p);
    }
  }
  _limitZoom(e) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
  }
  _cluster(e, t) {
    const { radius: s, extent: r, reduce: o, minPoints: a } = this.options, l = s / (r * Math.pow(2, t)), i = e.data, d = [], u = this.stride;
    for (let c = 0; c < i.length; c += u) {
      if (i[c + A] <= t)
        continue;
      i[c + A] = t;
      const h = i[c], p = i[c + 1], m = e.within(i[c], i[c + 1], l), f = i[c + L];
      let g = f;
      for (const v of m) {
        const w = v * u;
        i[w + A] > t && (g += i[w + L]);
      }
      if (g > f && g >= a) {
        let v = h * f, w = p * f, _, E = -1;
        const b = ((c / u | 0) << 5) + (t + 1) + this.points.length;
        for (const x of m) {
          const M = x * u;
          if (i[M + A] <= t)
            continue;
          i[M + A] = t;
          const F = i[M + L];
          v += i[M] * F, w += i[M + 1] * F, i[M + oe] = b, o && (_ || (_ = this._map(i, c, !0), E = this.clusterProps.length, this.clusterProps.push(_)), o(_, this._map(i, M)));
        }
        i[c + oe] = b, d.push(v / g, w / g, 1 / 0, b, -1, g), o && d.push(E);
      } else {
        for (let v = 0; v < u; v++)
          d.push(i[c + v]);
        if (g > 1)
          for (const v of m) {
            const w = v * u;
            if (!(i[w + A] <= t)) {
              i[w + A] = t;
              for (let _ = 0; _ < u; _++)
                d.push(i[w + _]);
            }
          }
      }
    }
    return d;
  }
  // get index of the point from which the cluster originated
  _getOriginId(e) {
    return e - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(e) {
    return (e - this.points.length) % 32;
  }
  _map(e, t, s) {
    if (e[t + L] > 1) {
      const a = this.clusterProps[e[t + Ae]];
      return s ? Object.assign({}, a) : a;
    }
    const r = this.points[e[t + S]].properties, o = this.options.map(r);
    return s && o === r ? Object.assign({}, o) : o;
  }
}
function ke(n, e, t) {
  return {
    type: "Feature",
    id: n[e + S],
    properties: $e(n, e, t),
    geometry: {
      type: "Point",
      coordinates: [it(n[e]), at(n[e + 1])]
    }
  };
}
function $e(n, e, t) {
  const s = n[e + L], r = s >= 1e4 ? `${Math.round(s / 1e3)}k` : s >= 1e3 ? `${Math.round(s / 100) / 10}k` : s, o = n[e + Ae], a = o === -1 ? {} : Object.assign({}, t[o]);
  return Object.assign(a, {
    cluster: !0,
    cluster_id: n[e + S],
    point_count: s,
    point_count_abbreviated: r
  });
}
function W(n) {
  return n / 360 + 0.5;
}
function K(n) {
  const e = Math.sin(n * Math.PI / 180), t = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function it(n) {
  return (n - 0.5) * 360;
}
function at(n) {
  const e = (180 - n * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(n, e) {
  var t = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++)
      e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[r]) && (t[s[r]] = n[s[r]]);
  return t;
}
class k {
  static isAdvancedMarkerAvailable(e) {
    return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(e) {
    return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(e, t) {
    this.isAdvancedMarker(e) ? e.map = t : e.setMap(t);
  }
  static getPosition(e) {
    if (this.isAdvancedMarker(e)) {
      if (e.position) {
        if (e.position instanceof google.maps.LatLng)
          return e.position;
        if (e.position.lat && e.position.lng)
          return new google.maps.LatLng(e.position.lat, e.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return e.getPosition();
  }
  static getVisible(e) {
    return this.isAdvancedMarker(e) ? !0 : e.getVisible();
  }
}
class H {
  constructor({ markers: e, position: t }) {
    this.markers = e, t && (t instanceof google.maps.LatLng ? this._position = t : this._position = new google.maps.LatLng(t));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const e = new google.maps.LatLngBounds(this._position, this._position);
    for (const t of this.markers)
      e.extend(k.getPosition(t));
    return e;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((e) => k.getVisible(e)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(e) {
    this.markers.push(e);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    this.marker && (k.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
const lt = (n, e, t, s) => {
  const r = Re(n.getBounds(), e, s);
  return t.filter((o) => r.contains(k.getPosition(o)));
}, Re = (n, e, t) => {
  const { northEast: s, southWest: r } = ct(n, e), o = ut({ northEast: s, southWest: r }, t);
  return dt(o, e);
}, Ce = (n, e, t) => {
  const s = Re(n, e, t), r = s.getNorthEast(), o = s.getSouthWest();
  return [o.lng(), o.lat(), r.lng(), r.lat()];
}, ct = (n, e) => ({
  northEast: e.fromLatLngToDivPixel(n.getNorthEast()),
  southWest: e.fromLatLngToDivPixel(n.getSouthWest())
}), ut = ({ northEast: n, southWest: e }, t) => (n.x += t, n.y -= t, e.x -= t, e.y += t, { northEast: n, southWest: e }), dt = ({ northEast: n, southWest: e }, t) => {
  const s = t.fromDivPixelToLatLng(e), r = t.fromDivPixelToLatLng(n);
  return new google.maps.LatLngBounds(s, r);
};
class je {
  constructor({ maxZoom: e = 16 }) {
    this.maxZoom = e;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({ markers: e }) {
    return pt(e);
  }
}
class ht extends je {
  constructor(e) {
    var { viewportPadding: t = 60 } = e, s = ce(e, ["viewportPadding"]);
    super(s), this.viewportPadding = 60, this.viewportPadding = t;
  }
  calculate({ markers: e, map: t, mapCanvasProjection: s }) {
    return t.getZoom() >= this.maxZoom ? {
      clusters: this.noop({
        markers: e
      }),
      changed: !1
    } : {
      clusters: this.cluster({
        markers: lt(t, s, e, this.viewportPadding),
        map: t,
        mapCanvasProjection: s
      })
    };
  }
}
const pt = (n) => n.map((t) => new H({
  position: k.getPosition(t),
  markers: [t]
}));
class ft extends je {
  constructor(e) {
    var { maxZoom: t, radius: s = 60 } = e, r = ce(e, ["maxZoom", "radius"]);
    super({ maxZoom: t }), this.state = { zoom: -1 }, this.superCluster = new Te(Object.assign({ maxZoom: this.maxZoom, radius: s }, r));
  }
  calculate(e) {
    let t = !1;
    const s = { zoom: e.map.getZoom() };
    if (!$(e.markers, this.markers)) {
      t = !0, this.markers = [...e.markers];
      const r = this.markers.map((o) => {
        const a = k.getPosition(o);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [a.lng(), a.lat()]
          },
          properties: { marker: o }
        };
      });
      this.superCluster.load(r);
    }
    return t || (this.state.zoom <= this.maxZoom || s.zoom <= this.maxZoom) && (t = !$(this.state, s)), this.state = s, t && (this.clusters = this.cluster(e)), { clusters: this.clusters, changed: t };
  }
  cluster({ map: e }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map((t) => this.transformCluster(t));
  }
  transformCluster({ geometry: { coordinates: [e, t] }, properties: s }) {
    if (s.cluster)
      return new H({
        markers: this.superCluster.getLeaves(s.cluster_id, 1 / 0).map((o) => o.properties.marker),
        position: { lat: t, lng: e }
      });
    const r = s.marker;
    return new H({
      markers: [r],
      position: k.getPosition(r)
    });
  }
}
class mt extends ht {
  constructor(e) {
    var { maxZoom: t, radius: s = 60, viewportPadding: r = 60 } = e, o = ce(e, ["maxZoom", "radius", "viewportPadding"]);
    super({ maxZoom: t, viewportPadding: r }), this.superCluster = new Te(Object.assign({ maxZoom: this.maxZoom, radius: s }, o)), this.state = { zoom: -1, view: [0, 0, 0, 0] };
  }
  calculate(e) {
    const t = {
      zoom: Math.round(e.map.getZoom()),
      view: Ce(e.map.getBounds(), e.mapCanvasProjection, this.viewportPadding)
    };
    let s = !$(this.state, t);
    if (!$(e.markers, this.markers)) {
      s = !0, this.markers = [...e.markers];
      const r = this.markers.map((o) => {
        const a = k.getPosition(o);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [a.lng(), a.lat()]
          },
          properties: { marker: o }
        };
      });
      this.superCluster.load(r);
    }
    return s && (this.clusters = this.cluster(e), this.state = t), { clusters: this.clusters, changed: s };
  }
  cluster({ map: e, mapCanvasProjection: t }) {
    const s = {
      zoom: Math.round(e.getZoom()),
      view: Ce(e.getBounds(), t, this.viewportPadding)
    };
    return this.superCluster.getClusters(s.view, s.zoom).map((r) => this.transformCluster(r));
  }
  transformCluster({ geometry: { coordinates: [e, t] }, properties: s }) {
    if (s.cluster)
      return new H({
        markers: this.superCluster.getLeaves(s.cluster_id, 1 / 0).map((o) => o.properties.marker),
        position: { lat: t, lng: e }
      });
    const r = s.marker;
    return new H({
      markers: [r],
      position: k.getPosition(r)
    });
  }
}
class gt {
  constructor(e, t) {
    this.markers = { sum: e.length };
    const s = t.map((o) => o.count), r = s.reduce((o, a) => o + a, 0);
    this.clusters = {
      count: t.length,
      markers: {
        mean: r / t.length,
        sum: r,
        min: Math.min(...s),
        max: Math.max(...s)
      }
    };
  }
}
class vt {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count: e, position: t }, s, r) {
    const a = `<svg fill="${e > Math.max(10, s.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, l = `Cluster of ${e} markers`, i = Number(google.maps.Marker.MAX_ZINDEX) + e;
    if (k.isAdvancedMarkerAvailable(r)) {
      const u = document.createElement("div");
      u.innerHTML = a;
      const c = u.firstElementChild;
      c.setAttribute("transform", "translate(0 25)");
      const h = {
        map: r,
        position: t,
        zIndex: i,
        title: l,
        content: c
      };
      return new google.maps.marker.AdvancedMarkerElement(h);
    }
    const d = {
      position: t,
      zIndex: i,
      title: l,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(a)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(d);
  }
}
function yt(n, e) {
  for (let t in e.prototype)
    n.prototype[t] = e.prototype[t];
}
class ue {
  constructor() {
    yt(ue, google.maps.OverlayView);
  }
}
var j;
(function(n) {
  n.CLUSTERING_BEGIN = "clusteringbegin", n.CLUSTERING_END = "clusteringend", n.CLUSTER_CLICK = "click";
})(j || (j = {}));
const wt = (n, e, t) => {
  t.fitBounds(e.bounds);
};
class _t extends ue {
  constructor({ map: e, markers: t = [], algorithmOptions: s = {}, algorithm: r = new ft(s), renderer: o = new vt(), onClusterClick: a = wt }) {
    super(), this.markers = [...t], this.clusters = [], this.algorithm = r, this.renderer = o, this.onClusterClick = a, e && this.setMap(e);
  }
  addMarker(e, t) {
    this.markers.includes(e) || (this.markers.push(e), t || this.render());
  }
  addMarkers(e, t) {
    e.forEach((s) => {
      this.addMarker(s, !0);
    }), t || this.render();
  }
  removeMarker(e, t) {
    const s = this.markers.indexOf(e);
    return s === -1 ? !1 : (k.setMap(e, null), this.markers.splice(s, 1), t || this.render(), !0);
  }
  removeMarkers(e, t) {
    let s = !1;
    return e.forEach((r) => {
      s = this.removeMarker(r, !0) || s;
    }), s && !t && this.render(), s;
  }
  clearMarkers(e) {
    this.markers.length = 0, e || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const e = this.getMap();
    if (e instanceof google.maps.Map && e.getProjection()) {
      google.maps.event.trigger(this, j.CLUSTERING_BEGIN, this);
      const { clusters: t, changed: s } = this.algorithm.calculate({
        markers: this.markers,
        map: e,
        mapCanvasProjection: this.getProjection()
      });
      if (s || s == null) {
        const r = /* @__PURE__ */ new Set();
        for (const a of t)
          a.markers.length == 1 && r.add(a.markers[0]);
        const o = [];
        for (const a of this.clusters)
          a.marker != null && (a.markers.length == 1 ? r.has(a.marker) || k.setMap(a.marker, null) : o.push(a.marker));
        this.clusters = t, this.renderClusters(), requestAnimationFrame(() => o.forEach((a) => k.setMap(a, null)));
      }
      google.maps.event.trigger(this, j.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((e) => k.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
  }
  renderClusters() {
    const e = new gt(this.markers, this.clusters), t = this.getMap();
    this.clusters.forEach((s) => {
      s.markers.length === 1 ? s.marker = s.markers[0] : (s.marker = this.renderer.render(s, e, t), s.markers.forEach((r) => k.setMap(r, null)), this.onClusterClick && s.marker.addListener(
        "click",
        /* istanbul ignore next */
        (r) => {
          google.maps.event.trigger(this, j.CLUSTER_CLICK, s), this.onClusterClick(r, s, t);
        }
      )), k.setMap(s.marker, t);
    });
  }
}
const be = Object.values(j); defineComponent({
  name: "MarkerCluster",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: be,
  setup(n, { emit: e, expose: t, slots: s }) {
    const r = ref(), o = inject(Z, ref()), a = inject(D, ref());
    return provide(Le, r), watch(
      o,
      () => {
        o.value && (r.value = markRaw(
          new _t({
            map: o.value,
            // Better perf than the default `SuperClusterAlgorithm`. See:
            // https://github.com/googlemaps/js-markerclusterer/pull/640
            algorithm: new mt(n.options.algorithmOptions ?? {}),
            ...n.options
          })
        ), be.forEach((l) => {
          var i;
          (i = r.value) == null || i.addListener(l, (d) => e(l, d));
        }));
      },
      {
        immediate: !0
      }
    ), onBeforeUnmount(() => {
      var l;
      r.value && ((l = a.value) == null || l.event.clearInstanceListeners(r.value), r.value.clearMarkers(), r.value.setMap(null));
    }), t({ markerCluster: r }), () => {
      var l;
      return (l = s.default) == null ? void 0 : l.call(s);
    };
  }
}); defineComponent({
  inheritAttrs: !1,
  props: {
    options: {
      type: Object,
      required: !0
    }
  },
  setup(n, { slots: e, emit: t, expose: s }) {
    const r = ref(), o = computed(() => {
      var i;
      return (i = e.default) == null ? void 0 : i.call(e).some((d) => d.type !== Comment);
    }), a = computed(() => ({
      ...n.options,
      element: r.value
    })), l = U(ee, [], a, t);
    return s({
      customMarker: l
    }), { customMarkerRef: r, customMarker: l, hasSlotContent: o };
  }
});
defineComponent({
  name: "HeatmapLayer",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(n) {
    const e = ref(), t = inject(Z, ref()), s = inject(D, ref());
    return watch(
      [t, () => n.options],
      ([r, o], [a, l]) => {
        var d;
        const i = !$(o, l) || t.value !== a;
        if (t.value && s.value && i) {
          const u = structuredClone(o);
          if (u.data && !(u.data instanceof s.value.MVCArray)) {
            const c = s.value.LatLng;
            u.data = (d = u.data) == null ? void 0 : d.map((h) => h instanceof c || "location" in h && (h.location instanceof c || h.location === null) ? h : "location" in h ? { ...h, location: new c(h.location) } : new c(h));
          }
          e.value ? e.value.setOptions(u) : e.value = markRaw(
            new s.value.visualization.HeatmapLayer({
              ...u,
              map: t.value
            })
          );
        }
      },
      { immediate: !0 }
    ), onBeforeUnmount(() => {
      e.value && e.value.setMap(null);
    }), { heatmapLayer: e };
  },
  render: () => null
});

const _imports_0$1 = "" + publicAssetsURL("assets/icons/error.png");
const _sfc_main$2 = {
  __name: "Check-Availability",
  __ssrInlineRender: true,
  props: {
    EstateID: String
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const Router = useRouter();
    const InProgress = ref(false);
    const CookieFilters = useCookie("Filters");
    const EstateInfo = useState("EstateInfo");
    const CookieEstateID = useCookie("EstateID");
    const ShowInfoSection = ref(false);
    const ShowPaymentStep = ref(false);
    const MinDate = /* @__PURE__ */ new Date();
    const Dates = ref([]);
    const ErrorMessage = ref("");
    const TotalPrice = ref(0);
    const TotalAccommodationFee = ref(0);
    const CleaningFee = ref(0);
    const TaxAmount = ref(0);
    const TaxRate = ref(0);
    const LocalePath = useLocalePath();
    const MinRange = ref("");
    const AutoRange = ref("");
    const TotalNights = ref(0);
    const EstateMinAccommodation = ref(0);
    const CheckAvailability = async (item) => {
      InProgress.value = true;
      ErrorMessage.value = "";
      if ((item2) => 0) {
        if (item === 0) {
          if (!Dates.value) {
            if (ShowInfoSection.value) {
              ShowInfoSection.value = false;
            }
            if (ShowPaymentStep.value) {
              ShowPaymentStep.value = false;
            }
            InProgress.value = false;
            return ErrorMessage.value = `* ${t(
              "PleaseSelectCheckInCheckOutDates"
            )}`;
          }
          const CheckIn = Dates.value[0];
          const CheckOut = Dates.value[1];
          CookieFilters.value.Dates[0] = CheckIn;
          CookieFilters.value.Dates[1] = CheckOut;
          const CheckReq = await ReservationComposable().CheckAvailability(
            CheckIn,
            CheckOut
          );
          if (CheckReq) {
            if (CheckReq.data) {
              const CheckReqData = CheckReq.data;
              TotalPrice.value = CheckReqData.total;
              CleaningFee.value = CheckReqData.cleaningFee;
              TaxAmount.value = CheckReqData.taxRate.taxAmount;
              TaxRate.value = CheckReqData.taxRate.taxRate;
              TotalAccommodationFee.value = CheckReqData.totalAccommodationFee;
              TotalNights.value = HelperComposable().CalculateNights(
                CookieFilters.value.Dates[0],
                CookieFilters.value.Dates[1]
              );
              EstateMinAccommodation.value = EstateInfo.value.minAccommodation;
              if (EstateMinAccommodation.value > TotalNights.value) {
                ShowInfoSection.value = false;
                ShowPaymentStep.value = false;
                InProgress.value = false;
                return ErrorMessage.value = `* Bu m\xFClk i\xE7in min. konaklama s\xFCresi ${EstateMinAccommodation.value} gecedir.`;
              }
              ShowInfoSection.value = true;
              ShowPaymentStep.value = true;
              InProgress.value = false;
            } else {
              if (ShowPaymentStep.value) {
                ShowPaymentStep.value = false;
              }
              ShowInfoSection.value = false;
              InProgress.value = false;
              return ErrorMessage.value = `* ${CheckReq}`;
            }
          }
        }
        if (item === 1) {
          CookieEstateID.value = props.EstateID;
          Router.push(LocalePath("/payment"));
        }
      }
    };
    watch(
      () => Dates.value,
      () => {
        CheckAvailability(0);
      }
    );
    watch(() => {
      ShowInfoSection.value;
      TotalPrice.value;
      CleaningFee.value;
      TaxAmount.value;
      TaxRate.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="check-availability w-100"><div><span>${ssrInterpolate(_ctx.$t("CheckAvailability"))}</span>`);
      _push(ssrRenderComponent(unref(ja), {
        modelValue: unref(Dates),
        "onUpdate:modelValue": ($event) => isRef(Dates) ? Dates.value = $event : null,
        range: "",
        "enable-time-picker": false,
        "multi-calendars": { solo: true },
        "auto-apply": "",
        "min-date": unref(MinDate),
        "min-range": unref(MinRange),
        "auto-range": unref(AutoRange),
        placeholder: _ctx.$t("CheckInOut"),
        class: "d-picker",
        locale: "tr",
        "model-type": "yyyy-MM-dd"
      }, null, _parent));
      _push(`</div><div><div class="check-availability-info">`);
      if (unref(ShowInfoSection)) {
        _push(`<div class="container"><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("AccommodationFee"))}:</span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(TotalAccommodationFee) * 36.5533).toLocaleString(
          "tr-TR"
        ))} \xA0\u20BA</span></div></div><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("TaxRate"))}:</span></div><div class="col"><span>${ssrInterpolate(unref(TaxRate))} \xA0%</span></div></div><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("TaxAmount"))}:</span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(TaxAmount) * 36.5533).toLocaleString("tr-TR"))} \xA0\u20BA</span></div></div><div class="row"><div class="col"><span>${ssrInterpolate(_ctx.$t("CleaningFee"))}: </span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(CleaningFee) * 36.5533).toLocaleString("tr-TR"))} \xA0\u20BA</span></div></div><div class="row total-price"><div class="col"><span>${ssrInterpolate(_ctx.$t("Total"))} ${ssrInterpolate(_ctx.$t("Price"))}:</span></div><div class="col"><span>${ssrInterpolate(Math.ceil(unref(TotalPrice) * 36.5533).toLocaleString("tr-TR"))} \xA0\u20BA </span></div></div></div>`);
      } else {
        _push(`<div class="container mt-2 text-danger"><span>${ssrInterpolate(unref(ErrorMessage))}</span></div>`);
      }
      _push(`</div></div><div class="col btn-box"><div class="col-lg-12"></div><div class="col-lg-12">`);
      if (unref(ShowPaymentStep)) {
        _push(`<button type="button" class="btn second"${ssrRenderAttr("title", _ctx.$t("Reservation"))}${ssrIncludeBooleanAttr(unref(InProgress)) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("Reservation"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-12"><button type="button" class="call-back-btn w-100" data-bs-toggle="modal" data-bs-target="#callbackModal"><div class="row d-flex justify-content-around align-items-center"><div class="col-lg-12">Temsilciye Ula\u015F\u0131n</div></div></button></div></div></div><div class="modal fade" id="checkAvailabilityModal" tabindex="-1" aria-labelledby="checkAvailabilityModal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><img${ssrRenderAttr("src", _imports_0$1)} alt="error"></div><div class="modal-body"><div class="col"><h2>HATA</h2></div><div class="col"><p> Bu m\xFClk i\xE7in min. konaklama s\xFCresi ${ssrInterpolate(unref(EstateMinAccommodation))} gecedir. </p></div></div><div class="modal-footer"><button class="btn" type="button" data-bs-dismiss="modal" aria-label="Close"> Tamam </button></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Check-Availability.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Google-Maps-Marker",
  __ssrInlineRender: true,
  setup(__props) {
    useCookie("Coordinates");
    const Coordinates = ref({ lat: 1, lng: 1 });
    watch(() => {
      Coordinates.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Ot), mergeProps({
        center: unref(Coordinates),
        zoom: 15,
        apiKey: "AIzaSyB1jnI1NLP_vSzfjXBGYAUb9R99s0S4rVE",
        style: { "width": "100%", "height": "350px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(xt), {
              options: { position: unref(Coordinates) }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(xt), {
                options: { position: unref(Coordinates) }
              }, null, 8, ["options"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Google-Maps-Marker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _imports_0 = "" + publicAssetsURL("assets/icons/bed.svg");
const _imports_1 = "" + publicAssetsURL("assets/icons/bath.svg");
const _imports_2 = "" + publicAssetsURL("assets/icons/wc.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    useLocalePath();
    useCookie("Filters");
    useCookie("Coordinates");
    useState("EstateInfo");
    const EstateID = useCookie("EstateID");
    const PageTitle = ref("Geccele");
    const InProgress = ref(true);
    let Details = ref({});
    let Address = ref({});
    let District = ref({});
    let City = ref({});
    let Country = ref({});
    ref();
    const ImageFilePrefix = ref("");
    const ScreenWidth = ref(Number);
    const CurrentIndex = ref(0);
    const ShowGallery = ref(false);
    const ImagesGalleryURL = computed(() => {
      return Details.value.media ? Details.value.media.map((slide) => ImageFilePrefix.value + slide.url) : [];
    });
    watch(() => {
      Details.value;
      Address.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Loading = __nuxt_component_4$1;
      const _component_CheckAvailability = __nuxt_component_4;
      const _component_Google_Maps_Marker = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(PageTitle))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(PageTitle)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "keywords",
              content: "geccele"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "geccele"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(PageTitle)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "keywords",
                content: "geccele"
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "geccele"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container-fluid mb-5 p-0 detail-section">`);
      if (unref(InProgress)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div class="detail-slider">`);
        if (unref(Details).media.length > 0) {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(be$1), {
            class: "no-shadow",
            "visible-slides": 2,
            "slide-multiple": false,
            "slide-ratio": 1 / 3,
            gap: 1,
            "arrows-outside": false,
            "dragging-distance": 70,
            lazyLoadOnDrag: true,
            fractions: true,
            bullets: false,
            breakpoints: {
              700: { visibleSlides: 1 }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(Details).media, (slide, i) => {
                  _push2(ssrRenderComponent(unref(Z$1), {
                    key: i,
                    image: unref(ImageFilePrefix) + slide.url
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(Details).media, (slide, i) => {
                    return openBlock(), createBlock(unref(Z$1), {
                      key: i,
                      image: unref(ImageFilePrefix) + slide.url
                    }, null, 8, ["image"]);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="d-none d-lg-block gallery-btn" title="Tam Ekran"> \u2629 </button>`);
        if (unref(ScreenWidth) < 996) {
          _push(`<div class="container py-3"><div class="col-md-12 check-availability-section">`);
          _push(ssrRenderComponent(_component_CheckAvailability, { EstateID: unref(EstateID) }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="container"><div class="row mt-5"><div class="col-lg-8"><div class="top-details"><h1>${ssrInterpolate(unref(Details).name)} <br></h1><p>${ssrInterpolate(unref(Details).description)} <br></p></div></div>`);
        if (unref(ScreenWidth) > 996) {
          _push(`<div class="col-lg-4 check-availability-section">`);
          _push(ssrRenderComponent(_component_CheckAvailability, { EstateID: unref(EstateID) }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="row general-infos mt-5"><div class="col-lg-8"><div class="estate-infos"><div class="d-block">`);
        if (unref(Details).squareMeters) {
          _push(`<span class="square-meter">${ssrInterpolate(_ctx.$t("RoomSquareMeters"))}: <b>${ssrInterpolate(unref(Details).squareMeters)}</b></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` \xA0 `);
        if (unref(Details).numberOfPeople) {
          _push(`<span class="square-meter">${ssrInterpolate(_ctx.$t("MaxGuest"))}: <b>${ssrInterpolate(unref(Details).numberOfPeople)}</b></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="boxes"><div class="row"><!--[-->`);
        ssrRenderList(unref(Details).estateRoomInfos, (roomInfo) => {
          _push(`<div class="col-lg-2"><div class="col text-center"><figure>`);
          if (roomInfo.roomInfoId == 1) {
            _push(`<img${ssrRenderAttr("src", _imports_0)} alt="bed">`);
          } else {
            _push(`<!---->`);
          }
          if (roomInfo.roomInfoId == 2) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="bath">`);
          } else {
            _push(`<!---->`);
          }
          if (roomInfo.roomInfoId == 3) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="wc">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figure><span>${ssrInterpolate(roomInfo.name)}:\xA0${ssrInterpolate(roomInfo.value)}</span></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
        if (unref(Details).property.length > 0) {
          _push(`<div><h2 class="mt-5">${ssrInterpolate(_ctx.$t("AllFeatures"))}</h2><div class="detail-features"><!--[-->`);
          ssrRenderList(unref(Details).property, (detail) => {
            _push(`<div>${ssrInterpolate(detail.name)} <br><!--[-->`);
            ssrRenderList(detail.propertyDetail, (info) => {
              _push(`<span> \u2713 ${ssrInterpolate(info.name)}</span>`);
            });
            _push(`<!--]--></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-lg-4"><div class="maps-side"><figure data-bs-toggle="modal" data-bs-target="#google-maps-modal"${ssrRenderAttr("title", _ctx.$t("SeeOnMap"))}><img class="img-thumbnail"${ssrRenderAttr("src", _imports_2$1)} alt="map"><figcaption>${ssrInterpolate(_ctx.$t("SeeOnMap"))}</figcaption></figure><p>${ssrInterpolate(unref(Address).detail)}</p><p>${ssrInterpolate(unref(District))} / ${ssrInterpolate(unref(City))} / ${ssrInterpolate(unref(Country))}</p></div></div></div></div></div>`);
      }
      _push(`</div><div class="modal fade" id="google-maps-modal" tabindex="-1" aria-labelledby="google-maps-modal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="google-maps-modal-label">${ssrInterpolate(unref(Details).name)}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"${ssrRenderAttr("title", _ctx.$t("Close"))}></button></div><div class="modal-body">`);
      _push(ssrRenderComponent(_component_Google_Maps_Marker, null, null, _parent));
      _push(`</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"${ssrRenderAttr("title", _ctx.$t("Close"))}>${ssrInterpolate(_ctx.$t("Close"))}</button></div></div></div></div>`);
      _push(ssrRenderComponent(unref(VueEasyLightbox), {
        visible: unref(ShowGallery),
        imgs: unref(ImagesGalleryURL),
        index: unref(CurrentIndex),
        onHide: ($event) => ShowGallery.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-a66d1317.mjs.map
