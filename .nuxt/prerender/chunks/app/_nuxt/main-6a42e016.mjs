import { reactive, ref, mergeProps, useSSRContext, defineComponent, useSlots, toRef, onMounted, nextTick, computed, onUnmounted, watch, openBlock, createElementBlock, normalizeClass, createVNode, unref, isRef, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps, Transition, createBlock, resolveDynamicComponent, Teleport, createCommentVNode, h, render, withKeys, createElementVNode, withModifiers, normalizeStyle, Fragment, toDisplayString, createTextVNode, onBeforeUpdate, withDirectives, vShow, getCurrentScope, onScopeDispose } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Projects/nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { getMonth, getDay, getYear, eachDayOfInterval, differenceInCalendarDays, format, isBefore, isEqual, isAfter, set, isValid, setYear, add, getHours, getMinutes, getSeconds, addMonths, isSameQuarter, eachQuarterOfInterval, startOfYear, endOfYear, startOfQuarter, endOfQuarter, getQuarter, setHours, setMinutes, setSeconds, setMilliseconds, parse, getWeek, getISOWeek, subMonths, startOfWeek, parseISO, setMonth, addYears, addDays, isDate, endOfWeek, subYears, sub } from 'file://C:/Projects/nuxt/node_modules/date-fns/index.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container text-center" }, _attrs))} data-v-5163e049><div class="loading-box" data-v-5163e049><div class="loading" data-v-5163e049><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div><div data-v-5163e049></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5163e049"]]);
function Ft() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      createElementVNode("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createElementVNode("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createElementVNode("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Ft.compatConfig = {
  MODE: 3
};
function Aa() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      createElementVNode("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Aa.compatConfig = {
  MODE: 3
};
function En() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
En.compatConfig = {
  MODE: 3
};
function Fn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Fn.compatConfig = {
  MODE: 3
};
function Hn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      createElementVNode("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Hn.compatConfig = {
  MODE: 3
};
function Vn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Vn.compatConfig = {
  MODE: 3
};
function Un() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createElementVNode("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Un.compatConfig = {
  MODE: 3
};
function Ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sa = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
})(Sa);
var cr = Sa.exports, An = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: true
  }), t.default = r;
  function r(a) {
    if (a === null || a === true || a === false)
      return NaN;
    var n = Number(a);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  e.exports = t.default;
})(An, An.exports);
var fr = An.exports;
const vr = /* @__PURE__ */ Ln(fr);
var Sn = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: true
  }), t.default = r;
  function r(a) {
    var n = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
    return n.setUTCFullYear(a.getFullYear()), a.getTime() - n.getTime();
  }
  e.exports = t.default;
})(Sn, Sn.exports);
var mr = Sn.exports;
const ta = /* @__PURE__ */ Ln(mr);
function gr(e, t) {
  var r = br(t);
  return r.formatToParts ? hr(r, e) : pr(r, e);
}
var yr = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function hr(e, t) {
  try {
    for (var r = e.formatToParts(t), a = [], n = 0; n < r.length; n++) {
      var o = yr[r[n].type];
      o >= 0 && (a[o] = parseInt(r[n].value, 10));
    }
    return a;
  } catch (i) {
    if (i instanceof RangeError)
      return [NaN];
    throw i;
  }
}
function pr(e, t) {
  var r = e.format(t).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
  return [a[3], a[1], a[2], a[4], a[5], a[6]];
}
var fn = {};
function br(e) {
  if (!fn[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), r = t === "06/25/2014, 00:00:00" || t === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    fn[e] = r ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return fn[e];
}
function Wn(e, t, r, a, n, o, i) {
  var d = /* @__PURE__ */ new Date(0);
  return d.setUTCFullYear(e, t, r), d.setUTCHours(a, n, o, i), d;
}
var na = 36e5, kr = 6e4, vn = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function zn(e, t, r) {
  var a, n;
  if (e === "" || (a = vn.timezoneZ.exec(e), a))
    return 0;
  var o;
  if (a = vn.timezoneHH.exec(e), a)
    return o = parseInt(a[1], 10), aa(o) ? -(o * na) : NaN;
  if (a = vn.timezoneHHMM.exec(e), a) {
    o = parseInt(a[1], 10);
    var i = parseInt(a[2], 10);
    return aa(o, i) ? (n = Math.abs(o) * na + i * kr, o > 0 ? -n : n) : NaN;
  }
  if (Mr(e)) {
    t = new Date(t || Date.now());
    var d = r ? t : wr(t), b = Pn(d, e), P = r ? b : Dr(t, b, e);
    return -P;
  }
  return NaN;
}
function wr(e) {
  return Wn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Pn(e, t) {
  var r = gr(e, t), a = Wn(
    r[0],
    r[1] - 1,
    r[2],
    r[3] % 24,
    r[4],
    r[5],
    0
  ).getTime(), n = e.getTime(), o = n % 1e3;
  return n -= o >= 0 ? o : 1e3 + o, a - n;
}
function Dr(e, t, r) {
  var a = e.getTime(), n = a - t, o = Pn(new Date(n), r);
  if (t === o)
    return t;
  n -= o - t;
  var i = Pn(new Date(n), r);
  return o === i ? o : Math.max(o, i);
}
function aa(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var ra = {};
function Mr(e) {
  if (ra[e])
    return true;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), ra[e] = true, true;
  } catch {
    return false;
  }
}
var Pa = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, mn = 36e5, la = 6e4, $r = 2, Be = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Pa
};
function Cn(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = t || {}, a = r.additionalDigits == null ? $r : vr(r.additionalDigits);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var n = Tr(e), o = Ar(n.date, a), i = o.year, d = o.restDateString, b = Sr(d, i);
  if (isNaN(b))
    return /* @__PURE__ */ new Date(NaN);
  if (b) {
    var P = b.getTime(), T = 0, p;
    if (n.time && (T = Pr(n.time), isNaN(T)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || r.timeZone) {
      if (p = zn(n.timeZone || r.timeZone, new Date(P + T)), isNaN(p))
        return /* @__PURE__ */ new Date(NaN);
    } else
      p = ta(new Date(P + T)), p = ta(new Date(P + T + p));
    return new Date(P + T + p);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Tr(e) {
  var t = {}, r = Be.dateTimePattern.exec(e), a;
  if (r ? (t.date = r[1], a = r[3]) : (r = Be.datePattern.exec(e), r ? (t.date = r[1], a = r[2]) : (t.date = null, a = e)), a) {
    var n = Be.timeZone.exec(a);
    n ? (t.time = a.replace(n[1], ""), t.timeZone = n[1].trim()) : t.time = a;
  }
  return t;
}
function Ar(e, t) {
  var r = Be.YYY[t], a = Be.YYYYY[t], n;
  if (n = Be.YYYY.exec(e) || a.exec(e), n) {
    var o = n[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (n = Be.YY.exec(e) || r.exec(e), n) {
    var i = n[1];
    return {
      year: parseInt(i, 10) * 100,
      restDateString: e.slice(i.length)
    };
  }
  return {
    year: null
  };
}
function Sr(e, t) {
  if (t === null)
    return null;
  var r, a, n, o;
  if (e.length === 0)
    return a = /* @__PURE__ */ new Date(0), a.setUTCFullYear(t), a;
  if (r = Be.MM.exec(e), r)
    return a = /* @__PURE__ */ new Date(0), n = parseInt(r[1], 10) - 1, sa(t, n) ? (a.setUTCFullYear(t, n), a) : /* @__PURE__ */ new Date(NaN);
  if (r = Be.DDD.exec(e), r) {
    a = /* @__PURE__ */ new Date(0);
    var i = parseInt(r[1], 10);
    return Rr(t, i) ? (a.setUTCFullYear(t, 0, i), a) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = Be.MMDD.exec(e), r) {
    a = /* @__PURE__ */ new Date(0), n = parseInt(r[1], 10) - 1;
    var d = parseInt(r[2], 10);
    return sa(t, n, d) ? (a.setUTCFullYear(t, n, d), a) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = Be.Www.exec(e), r)
    return o = parseInt(r[1], 10) - 1, ia(t, o) ? oa(t, o) : /* @__PURE__ */ new Date(NaN);
  if (r = Be.WwwD.exec(e), r) {
    o = parseInt(r[1], 10) - 1;
    var b = parseInt(r[2], 10) - 1;
    return ia(t, o, b) ? oa(t, o, b) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Pr(e) {
  var t, r, a;
  if (t = Be.HH.exec(e), t)
    return r = parseFloat(t[1].replace(",", ".")), gn(r) ? r % 24 * mn : NaN;
  if (t = Be.HHMM.exec(e), t)
    return r = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")), gn(r, a) ? r % 24 * mn + a * la : NaN;
  if (t = Be.HHMMSS.exec(e), t) {
    r = parseInt(t[1], 10), a = parseInt(t[2], 10);
    var n = parseFloat(t[3].replace(",", "."));
    return gn(r, a, n) ? r % 24 * mn + a * la + n * 1e3 : NaN;
  }
  return null;
}
function oa(e, t, r) {
  t = t || 0, r = r || 0;
  var a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(e, 0, 4);
  var n = a.getUTCDay() || 7, o = t * 7 + r + 1 - n;
  return a.setUTCDate(a.getUTCDate() + o), a;
}
var Cr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], _r = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ca(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function sa(e, t, r) {
  if (t < 0 || t > 11)
    return false;
  if (r != null) {
    if (r < 1)
      return false;
    var a = Ca(e);
    if (a && r > _r[t] || !a && r > Cr[t])
      return false;
  }
  return true;
}
function Rr(e, t) {
  if (t < 1)
    return false;
  var r = Ca(e);
  return !(r && t > 366 || !r && t > 365);
}
function ia(e, t, r) {
  return !(t < 0 || t > 52 || r != null && (r < 0 || r > 6));
}
function gn(e, t, r) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || r != null && (r < 0 || r >= 60));
}
var _n = { exports: {} }, Rn = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: true
  }), t.default = r;
  function r(a, n) {
    if (a == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (a[o] = n[o]);
    return a;
  }
  e.exports = t.default;
})(Rn, Rn.exports);
var Or = Rn.exports;
(function(e, t) {
  var r = cr.default;
  Object.defineProperty(t, "__esModule", {
    value: true
  }), t.default = n;
  var a = r(Or);
  function n(o) {
    return (0, a.default)({}, o);
  }
  e.exports = t.default;
})(_n, _n.exports);
var Yr = _n.exports;
const Nr = /* @__PURE__ */ Ln(Yr);
function Ir(e, t, r) {
  var a = Cn(e, r), n = zn(t, a, true), o = new Date(a.getTime() - n), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function Br(e, t, r) {
  if (typeof e == "string" && !e.match(Pa)) {
    var a = Nr(r);
    return a.timeZone = t, Cn(e, a);
  }
  var n = Cn(e, r), o = Wn(
    n.getFullYear(),
    n.getMonth(),
    n.getDate(),
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ).getTime(), i = zn(t, new Date(o));
  return new Date(o + i);
}
function ua(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Er(e) {
  return (t) => format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Fr = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(Er(e));
    } catch {
      n = a.map(ua(t));
    }
  else
    n = a.map(ua(t));
  const o = n.slice(0, r), i = n.slice(r + 1, n.length);
  return [n[r]].concat(...i).concat(...o);
}, jn = (e, t) => {
  const r = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    r.push({ value: +a, text: `${a}` });
  return t ? r.reverse() : r;
}, _a = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const i = o < 10 ? `0${o}` : o;
    return /* @__PURE__ */ new Date(`2017-${i}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const o = r === "long" ? "MMMM" : "MMM";
      return a.map((i, d) => {
        const b = format(i, o, { locale: e });
        return {
          text: b.charAt(0).toUpperCase() + b.substring(1),
          value: d
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: r, timeZone: "UTC" });
  return a.map((o, i) => {
    const d = n.format(o);
    return {
      text: d.charAt(0).toUpperCase() + d.substring(1),
      value: i
    };
  });
}, Hr = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Se = (e) => {
  const t = unref(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Vr = (e) => Object.assign({ type: "dot" }, e), Ra = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : false, Qt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ae = (e) => e, da = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, ca = (e) => e === null, Ur = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Lr = (e) => {
  const t = [], r = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(r(n));
  }
  return t;
}, Bt = (e, t, r) => {
  const a = r != null ? r : r === 0, n = t != null ? t : t === 0;
  if (!a && !n)
    return false;
  const o = +r, i = +t;
  return a && n ? +e > o || +e < i : a ? +e > o : n ? +e < i : false;
}, At = (e, t) => Lr(e).map((r) => r.map((a) => {
  const { active: n, disabled: o, isBetween: i, highlighted: d } = t(a);
  return {
    ...a,
    active: n,
    disabled: o,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: o,
      dp__overlay_cell_pad: true,
      dp__overlay_cell_active_disabled: o && n,
      dp__cell_in_between: i,
      "dp--highlighted": d
    }
  };
})), it = (e, t, r = false) => {
  e && t.allowStopPropagation && (r && e.stopImmediatePropagation(), e.stopPropagation());
}, Wr = (e) => {
  if (e.nextElementSibling)
    return e.nextElementSibling;
  for (; e.parentElement && !e.parentElement.nextElementSibling; )
    e = e.parentElement;
  return e.parentElement ? e.parentElement.nextElementSibling : null;
}, zr = (e) => {
  if (!e)
    return false;
  const t = [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ], r = e.matches(t.join(", ")), a = e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
  return r && a;
}, jr = (e) => {
  if (!e)
    return null;
  let t = e;
  for (; t; )
    if (t = Wr(t), zr(t))
      return t;
  return null;
}, fa = (e, t, r, a, n) => {
  const o = parse(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return isValid(o) && isDate(o) ? a || n ? o : set(o, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
}, Kr = (e, t, r, a, n) => {
  const o = Array.isArray(r) ? r[0] : r;
  if (typeof t == "string")
    return fa(e, t, o, a, n);
  if (Array.isArray(t)) {
    let i = null;
    for (const d of t)
      if (i = fa(e, d, o, a, n), i)
        break;
    return i;
  }
  return typeof t == "function" ? t(e) : null;
}, V = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Gr = (e, t, r) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), d = e.getMinutes().toString().padStart(2, "0"), b = r ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${o}T${i}:${d}:${b}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, He = (e) => {
  let t = V(JSON.parse(JSON.stringify(e)));
  return t = setHours(t, 0), t = setMinutes(t, 0), t = setSeconds(t, 0), t = setMilliseconds(t, 0), t;
}, ut = (e, t, r, a) => {
  let n = e ? V(e) : V();
  return (t || t === 0) && (n = setHours(n, +t)), (r || r === 0) && (n = setMinutes(n, +r)), (a || a === 0) && (n = setSeconds(n, +a)), setMilliseconds(n, 0);
}, _e = (e, t) => !e || !t ? false : isBefore(He(e), He(t)), pe = (e, t) => !e || !t ? false : isEqual(He(e), He(t)), Ne = (e, t) => !e || !t ? false : isAfter(He(e), He(t)), Xt = (e, t, r) => e != null && e[0] && (e != null && e[1]) ? Ne(r, e[0]) && _e(r, e[1]) : e != null && e[0] && t ? Ne(r, e[0]) && _e(r, t) || _e(r, e[0]) && Ne(r, t) : false, Qe = (e) => {
  const t = set(new Date(e), { date: 1 });
  return He(t);
}, yn = (e, t, r) => t && (r || r === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, r] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, pt = (e) => ({
  hours: getHours(e),
  minutes: getMinutes(e),
  seconds: getSeconds(e)
}), Oa = (e, t) => {
  if (t) {
    const r = getYear(V(t));
    if (r > e)
      return 12;
    if (r === e)
      return getMonth(V(t));
  }
}, Ya = (e, t) => {
  if (t) {
    const r = getYear(V(t));
    return r < e ? -1 : r === e ? getMonth(V(t)) : void 0;
  }
}, St = (e) => {
  if (e)
    return getYear(V(e));
}, Le = (e, t) => t ? Ir(e, t) : e, Na = (e, t) => t ? Br(e, t) : e, va = (e) => e instanceof Date ? e : parseISO(e), Ia = (e, t) => {
  const r = Ne(e, t) ? t : e, a = Ne(t, e) ? t : e;
  return eachDayOfInterval({ start: r, end: a });
}, qr = (e) => {
  const t = addMonths(e, 1);
  return { month: getMonth(t), year: getYear(t) };
}, qt = (e, t, r) => {
  const a = startOfWeek(Le(e, t), { weekStartsOn: +r }), n = endOfWeek(Le(e, t), { weekStartsOn: +r });
  return [a, n];
}, Ba = (e, t) => {
  const r = {
    hours: getHours(V()),
    minutes: getMinutes(V()),
    seconds: t ? getSeconds(V()) : 0
  };
  return Object.assign(r, e);
}, ot = (e, t, r) => [set(V(e), { date: 1 }), set(V(), { month: t, year: r, date: 1 })], at = (e, t, r) => {
  let a = e ? V(e) : V();
  return (t || t === 0) && (a = setMonth(a, t)), r && (a = setYear(a, r)), a;
}, Ea = (e, t, r, a, n) => {
  if (!a || n && !t || !n && !r)
    return false;
  const o = n ? addMonths(e, 1) : subMonths(e, 1), i = [getMonth(o), getYear(o)];
  return n ? !Qr(...i, t) : !Zr(...i, r);
}, Zr = (e, t, r) => _e(...ot(r, e, t)) || pe(...ot(r, e, t)), Qr = (e, t, r) => Ne(...ot(r, e, t)) || pe(...ot(r, e, t)), Fa = (e, t, r, a, n, o, i) => {
  if (typeof t == "function" && !i)
    return t(e);
  const d = r ? { locale: r } : void 0;
  return Array.isArray(e) ? `${format(e[0], o, d)}${n && !e[1] ? "" : a}${e[1] ? format(e[1], o, d) : ""}` : format(e, o, d);
}, Dt = (e) => {
  if (e)
    return null;
  throw new Error(Qt.prop("partial-range"));
}, Wt = (e, t) => {
  if (t)
    return e();
  throw new Error(Qt.prop("range"));
}, On = (e) => Array.isArray(e) ? isValid(e[0]) && (e[1] ? isValid(e[1]) : true) : e ? isValid(e) : false, Xr = (e, t) => set(t != null ? t : V(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), hn = (e, t, r, a) => {
  if (!e)
    return true;
  if (a) {
    const n = r === "max" ? isBefore(e, t) : isAfter(e, t), o = { seconds: 0, milliseconds: 0 };
    return n || isEqual(set(e, o), set(t, o));
  }
  return r === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, pn = (e, t, r) => e ? Xr(e, t) : V(r != null ? r : t), ma = (e, t, r, a, n) => {
  if (Array.isArray(a)) {
    const i = pn(e, a[0], t), d = pn(e, a[1], t);
    return hn(a[0], i, r, !!t) && hn(a[1], d, r, !!t) && n;
  }
  const o = pn(e, a, t);
  return hn(a, o, r, !!t) && n;
}, bn = (e) => set(V(), pt(e)), Jr = (e, t) => Array.isArray(e) ? e.map((r) => V(r)).filter((r) => getYear(V(r)) === t).map((r) => getMonth(r)) : [], Ha = (e, t, r) => typeof e == "function" ? e({ month: t, year: r }) : !!e.months.find((a) => a.month === t && a.year === r), Kn = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Rt = reactive({
  menuFocused: false,
  shiftKeyInMenu: false
}), Va = () => {
  const e = (a) => {
    Rt.menuFocused = a;
  }, t = (a) => {
    Rt.shiftKeyInMenu !== a && (Rt.shiftKeyInMenu = a);
  };
  return {
    control: computed(() => ({ shiftKeyInMenu: Rt.shiftKeyInMenu, menuFocused: Rt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, we = reactive({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), kn = ref(null), zt = ref(false), wn = ref(false), Dn = ref(false), Mn = ref(false), Ie = ref(0), Ce = ref(0), ft = () => {
  const e = computed(() => zt.value ? [...we.selectionGrid, we.actionRow].filter((h2) => h2.length) : wn.value ? [
    ...we.timePicker[0],
    ...we.timePicker[1],
    Mn.value ? [] : [kn.value],
    we.actionRow
  ].filter((h2) => h2.length) : Dn.value ? [...we.monthPicker, we.actionRow] : [we.monthYear, ...we.calendar, we.time, we.actionRow].filter((h2) => h2.length)), t = (h2) => {
    Ie.value = h2 ? Ie.value + 1 : Ie.value - 1;
    let _ = null;
    e.value[Ce.value] && (_ = e.value[Ce.value][Ie.value]), _ || (Ie.value = h2 ? Ie.value - 1 : Ie.value + 1);
  }, r = (h2) => {
    if (Ce.value === 0 && !h2 || Ce.value === e.value.length && h2)
      return;
    Ce.value = h2 ? Ce.value + 1 : Ce.value - 1, e.value[Ce.value] ? e.value[Ce.value] && !e.value[Ce.value][Ie.value] && Ie.value !== 0 && (Ie.value = e.value[Ce.value].length - 1) : Ce.value = h2 ? Ce.value - 1 : Ce.value + 1;
  }, a = (h2) => {
    let _ = null;
    e.value[Ce.value] && (_ = e.value[Ce.value][Ie.value]), _ ? _.focus({ preventScroll: !zt.value }) : Ie.value = h2 ? Ie.value - 1 : Ie.value + 1;
  }, n = () => {
    t(true), a(true);
  }, o = () => {
    t(false), a(false);
  }, i = () => {
    r(false), a(true);
  }, d = () => {
    r(true), a(true);
  }, b = (h2, _) => {
    we[_] = h2;
  }, P = (h2, _) => {
    we[_] = h2;
  }, T = () => {
    Ie.value = 0, Ce.value = 0;
  };
  return {
    buildMatrix: b,
    buildMultiLevelMatrix: P,
    setTimePickerBackRef: (h2) => {
      kn.value = h2;
    },
    setSelectionGrid: (h2) => {
      zt.value = h2, T(), h2 || (we.selectionGrid = []);
    },
    setTimePicker: (h2, _ = false) => {
      wn.value = h2, Mn.value = _, T(), h2 || (we.timePicker[0] = [], we.timePicker[1] = []);
    },
    setTimePickerElements: (h2, _ = 0) => {
      we.timePicker[_] = h2;
    },
    arrowRight: n,
    arrowLeft: o,
    arrowUp: i,
    arrowDown: d,
    clearArrowNav: () => {
      we.monthYear = [], we.calendar = [], we.time = [], we.actionRow = [], we.selectionGrid = [], we.timePicker[0] = [], we.timePicker[1] = [], zt.value = false, wn.value = false, Mn.value = false, Dn.value = false, T(), kn.value = null;
    },
    setMonthPicker: (h2) => {
      Dn.value = h2, T();
    },
    refSets: we
    // exposed for testing
  };
}, ga = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e != null ? e : {}
}), xr = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => "",
  ...e != null ? e : {}
}), ya = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, el = (e) => {
  var _a2;
  const t = typeof e == "object" && e, r = {
    static: true,
    solo: false
  };
  if (!e)
    return { ...r, count: ya(false) };
  const a = t ? e : {}, n = t ? (_a2 = a.count) != null ? _a2 : true : e, o = ya(n);
  return Object.assign(r, a, { count: o });
}, tl = (e, t, r) => e || (typeof r == "string" ? r : t), nl = (e) => typeof e == "boolean" ? e ? ga({}) : false : ga(e), al = (e) => {
  const t = {
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    selectOnFocus: false,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e != null ? e : {}, enabled: true } : { ...t, enabled: e };
}, rl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e != null ? e : {}
}), ll = (e) => ({
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true,
  ...e != null ? e : {}
}), ol = (e) => {
  const t = { input: false };
  return typeof e == "object" ? { ...t, ...e != null ? e : {}, enabled: true } : {
    enabled: e,
    ...t
  };
}, sl = (e) => ({ ...{
  allowStopPropagation: true,
  closeOnScroll: false,
  modeHeight: 255,
  allowPreventDefault: false,
  closeOnClearValue: true,
  closeOnAutoApply: true,
  noSwipe: false,
  keepActionRow: false,
  onClickOutside: void 0
}, ...e != null ? e : {} }), il = (e, t, r) => {
  const a = {
    dates: Array.isArray(e) ? e.map((n) => V(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: t,
    options: { highlightDisabled: r }
  };
  return typeof e == "function" ? e : { ...a, ...e != null ? e : {} };
}, Te = (e) => {
  const t = () => {
    const G = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${G}` : `hh:mm${G} aa`;
  }, r = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy", a = (G) => Ba(G, e.enableSeconds), n = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, o = computed(() => el(e.multiCalendars)), i = computed(() => n()), d = computed(() => xr(e.ariaLabels)), b = computed(() => rl(e.filters)), P = computed(() => nl(e.transitions)), T = computed(() => ll(e.actionRow)), p = computed(
    () => tl(e.previewFormat, e.format, r())
  ), U = computed(() => al(e.textInput)), L = computed(() => ol(e.inline)), B = computed(() => sl(e.config)), Y = computed(
    () => il(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
  );
  return {
    defaultedTransitions: P,
    defaultedMultiCalendars: o,
    defaultedStartTime: i,
    defaultedAriaLabels: d,
    defaultedFilters: b,
    defaultedActionRow: T,
    defaultedPreviewFormat: p,
    defaultedTextInput: U,
    defaultedInline: L,
    defaultedConfig: B,
    defaultedHighlight: Y,
    getDefaultPattern: r,
    getDefaultStartTime: n
  };
}, ul = (e, t, r) => {
  const a = ref(), { defaultedTextInput: n, getDefaultPattern: o } = Te(t), i = ref(""), d = toRef(t, "format");
  watch(a, () => {
    e("internal-model-change", a.value);
  }), watch(d, () => {
    te();
  });
  const b = (s) => Na(s, t.timezone), P = (s) => Le(s, t.timezone), T = (s, D, ie = false) => Fa(
    s,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    D != null ? D : o(),
    ie
  ), p = (s) => s ? t.modelType ? y(s) : {
    hours: getHours(s),
    minutes: getMinutes(s),
    seconds: t.enableSeconds ? getSeconds(s) : 0
  } : null, U = (s) => t.modelType ? y(s) : { month: getMonth(s), year: getYear(s) }, L = (s) => Array.isArray(s) ? t.multiDates ? s.map((D) => B(D, setYear(V(), D))) : Wt(
    () => [
      setYear(V(), s[0]),
      s[1] ? setYear(V(), s[1]) : Dt(t.partialRange)
    ],
    t.range
  ) : setYear(V(), +s), B = (s, D) => (typeof s == "string" || typeof s == "number") && t.modelType ? f(s) : D, Y = (s) => Array.isArray(s) ? [
    B(
      s[0],
      ut(null, +s[0].hours, +s[0].minutes, s[0].seconds)
    ),
    B(
      s[1],
      ut(null, +s[1].hours, +s[1].minutes, s[1].seconds)
    )
  ] : B(s, ut(null, s.hours, s.minutes, s.seconds)), G = (s) => Array.isArray(s) ? t.multiDates ? s.map((D) => B(D, at(null, +D.month, +D.year))) : Wt(
    () => [
      B(s[0], at(null, +s[0].month, +s[0].year)),
      B(
        s[1],
        s[1] ? at(null, +s[1].month, +s[1].year) : Dt(t.partialRange)
      )
    ],
    t.range
  ) : B(s, at(null, +s.month, +s.year)), h2 = (s) => {
    if (Array.isArray(s))
      return s.map((D) => f(D));
    throw new Error(Qt.dateArr("multi-dates"));
  }, _ = (s) => {
    if (Array.isArray(s))
      return [V(s[0]), V(s[1])];
    throw new Error(Qt.dateArr("week-picker"));
  }, H = (s) => t.modelAuto ? Array.isArray(s) ? [f(s[0]), f(s[1])] : t.autoApply ? [f(s)] : [f(s), null] : Array.isArray(s) ? Wt(
    () => [
      f(s[0]),
      s[1] ? f(s[1]) : Dt(t.partialRange)
    ],
    t.range
  ) : f(s), k = () => {
    Array.isArray(a.value) && t.range && a.value.length === 1 && a.value.push(Dt(t.partialRange));
  }, R = () => {
    const s = a.value;
    return [
      y(s[0]),
      s[1] ? y(s[1]) : Dt(t.partialRange)
    ];
  }, Q = () => a.value[1] ? R() : y(Ae(a.value[0])), q = () => (a.value || []).map((s) => y(s)), x = () => (k(), t.modelAuto ? Q() : t.multiDates ? q() : Array.isArray(a.value) ? Wt(() => R(), t.range) : y(Ae(a.value))), se = (s) => !s || Array.isArray(s) && !s.length ? null : t.timePicker ? Y(Ae(s)) : t.monthPicker ? G(Ae(s)) : t.yearPicker ? L(Ae(s)) : t.multiDates ? h2(Ae(s)) : t.weekPicker ? _(Ae(s)) : H(Ae(s)), E = (s) => {
    const D = se(s);
    On(Ae(D)) ? (a.value = Ae(D), te()) : (a.value = null, i.value = "");
  }, m = () => {
    const s = (D) => format(D, n.value.format);
    return `${s(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? s(a.value[1]) : ""}`;
  }, $ = () => r.value && a.value ? Array.isArray(a.value) ? m() : format(a.value, n.value.format) : T(a.value), j = () => a.value ? t.multiDates ? a.value.map((s) => T(s)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? $() : T(a.value) : "", te = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? i.value = j() : i.value = t.format(a.value);
  }, f = (s) => {
    if (t.utc) {
      const D = new Date(s);
      return t.utc === "preserve" ? new Date(D.getTime() + D.getTimezoneOffset() * 6e4) : D;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? P(new Date(s)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? parse(s, o(), /* @__PURE__ */ new Date()) : P(parse(s, t.modelType, /* @__PURE__ */ new Date())) : P(new Date(s));
  }, y = (s) => s ? t.utc ? Gr(s, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +b(s) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? T(b(s)) : T(b(s), t.modelType, true) : b(s) : "", N = (s, D = false) => {
    if (e("update:model-value", s), t.emitTimezone && D) {
      const ie = Array.isArray(s) ? s.map((oe) => Le(Ae(oe)), t.emitTimezone) : Le(Ae(s), t.emitTimezone);
      e("update:model-timezone-value", ie);
    }
  }, S = (s) => Array.isArray(a.value) ? t.multiDates ? a.value.map((D) => s(D)) : [
    s(a.value[0]),
    a.value[1] ? s(a.value[1]) : Dt(t.partialRange)
  ] : s(Ae(a.value)), w = (s) => N(Ae(S(s)));
  return {
    inputValue: i,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? t.range ? t.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : false,
    parseExternalModelValue: E,
    formatInputValue: te,
    emitModelValue: () => (te(), t.monthPicker ? w(U) : t.timePicker ? w(p) : t.yearPicker ? w(getYear) : t.weekPicker ? N(
      a.value.map((s) => y(s)),
      true
    ) : N(x(), true))
  };
}, dl = (e, t) => {
  const { defaultedFilters: r } = Te(e), { validateMonthYearInRange: a } = Ct(e), n = (P, T) => {
    let p = P;
    return r.value.months.includes(getMonth(p)) ? (p = T ? addMonths(P, 1) : subMonths(P, 1), n(p, T)) : p;
  }, o = (P, T) => {
    let p = P;
    return r.value.years.includes(getYear(p)) ? (p = T ? addYears(P, 1) : subYears(P, 1), o(p, T)) : p;
  }, i = (P, T = false) => {
    const p = set(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let U = P ? addMonths(p, 1) : subMonths(p, 1);
    e.disableYearSelect && (U = setYear(U, e.year));
    let L = getMonth(U), B = getYear(U);
    r.value.months.includes(L) && (U = n(U, P), L = getMonth(U), B = getYear(U)), r.value.years.includes(B) && (U = o(U, P), B = getYear(U)), a(L, B, P, e.preventMinMaxNavigation) && d(L, B, T);
  }, d = (P, T, p) => {
    t("update-month-year", { month: P, year: T, fromNav: p });
  }, b = computed(() => (P) => Ea(
    set(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }),
    e.maxDate,
    e.minDate,
    e.preventMinMaxNavigation,
    P
  ));
  return { handleMonthYearChange: i, isDisabled: b, updateMonthYear: d };
};
var Mt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Mt || {}), Ze = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ze || {}), gt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(gt || {}), bt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(bt || {}), et = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(et || {});
const cl = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: r,
  pickerWrapperRef: a,
  inline: n,
  emit: o,
  props: i,
  slots: d
}) => {
  const b = ref({}), P = ref(false), T = ref({
    top: "0",
    left: "0"
  }), p = ref(false), U = toRef(i, "teleportCenter");
  watch(U, () => {
    T.value = JSON.parse(JSON.stringify({})), k();
  });
  const L = (y) => {
    if (i.teleport) {
      const N = y.getBoundingClientRect();
      return {
        left: N.left + window.scrollX,
        top: N.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, B = (y, N) => {
    T.value.left = `${y + N - b.value.width}px`;
  }, Y = (y) => {
    T.value.left = `${y}px`;
  }, G = (y, N) => {
    i.position === Mt.left && Y(y), i.position === Mt.right && B(y, N), i.position === Mt.center && (T.value.left = `${y + N / 2 - b.value.width / 2}px`);
  }, h$1 = (y) => {
    const { width: N, height: S } = y.getBoundingClientRect(), { top: w, left: l } = i.altPosition ? i.altPosition(y) : L(y);
    return { top: +w, left: +l, width: N, height: S };
  }, _ = () => {
    T.value.left = "50%", T.value.top = "50%", T.value.transform = "translate(-50%, -50%)", T.value.position = "fixed", delete T.value.opacity;
  }, H = () => {
    const y = Se(r), { top: N, left: S, transform: w } = i.altPosition(y);
    T.value = { top: `${N}px`, left: `${S}px`, transform: w != null ? w : "" };
  }, k = (y = true) => {
    var N;
    if (!n.value.enabled) {
      if (U.value)
        return _();
      if (i.altPosition !== null)
        return H();
      if (y) {
        const S = i.teleport ? (N = t.value) == null ? void 0 : N.$el : e.value;
        S && (b.value = S.getBoundingClientRect()), o("recalculate-position");
      }
      return m();
    }
  }, R = ({ inputEl: y, left: N, width: S }) => {
    window.screen.width > 768 && !P.value && G(N, S), x(y);
  }, Q = (y) => {
    const { top: N, left: S, height: w, width: l } = h$1(y);
    T.value.top = `${w + N + +i.offset}px`, p.value = false, P.value || (T.value.left = `${S + l / 2 - b.value.width / 2}px`), R({ inputEl: y, left: S, width: l });
  }, q = (y) => {
    const { top: N, left: S, width: w } = h$1(y);
    T.value.top = `${N - +i.offset - b.value.height}px`, p.value = true, R({ inputEl: y, left: S, width: w });
  }, x = (y) => {
    if (i.autoPosition) {
      const { left: N, width: S } = h$1(y), { left: w, right: l } = b.value;
      if (!P.value) {
        if (Math.abs(w) !== Math.abs(l)) {
          if (w <= 0)
            return P.value = true, Y(N);
          if (l >= document.documentElement.clientWidth)
            return P.value = true, B(N, S);
        }
        return G(N, S);
      }
    }
  }, se = () => {
    const y = Se(r);
    if (y) {
      const { height: N } = b.value, { top: S, height: w } = y.getBoundingClientRect(), g = window.innerHeight - S - w, s = S;
      return N <= g ? gt.bottom : N > g && N <= s ? gt.top : g >= s ? gt.bottom : gt.top;
    }
    return gt.bottom;
  }, E = (y) => se() === gt.bottom ? Q(y) : q(y), m = () => {
    const y = Se(r);
    if (y)
      return i.autoPosition ? E(y) : Q(y);
  }, $ = function(y) {
    if (y) {
      const N = y.scrollHeight > y.clientHeight, w = window.getComputedStyle(y).overflowY.indexOf("hidden") !== -1;
      return N && !w;
    }
    return true;
  }, j = function(y) {
    return !y || y === document.body || y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : $(y) ? y : j(y.parentNode);
  }, te = (y) => {
    if (y)
      switch (i.position) {
        case Mt.left:
          return { left: 0, transform: "translateX(0)" };
        case Mt.right:
          return { left: `${y.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${y.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: p,
    menuStyle: T,
    xCorrect: P,
    setMenuPosition: k,
    getScrollableParent: j,
    shadowRender: (y, N) => {
      var ie, oe, u;
      const S = document.createElement("div"), w = (ie = Se(r)) == null ? void 0 : ie.getBoundingClientRect();
      S.setAttribute("id", "dp--temp-container");
      const l = (oe = a.value) != null && oe.clientWidth ? a.value : document.body;
      l.append(S);
      const g = document.getElementById("dp--temp-container"), s = te(w), D = h(
        y,
        {
          ...N,
          shadow: true,
          style: { opacity: 0, position: "absolute", ...s }
        },
        Object.fromEntries(
          Object.keys(d).filter((O) => ["right-sidebar", "left-sidebar"].includes(O)).map((O) => [O, d[O]])
        )
      );
      render(D, g), b.value = (u = D.el) == null ? void 0 : u.getBoundingClientRect(), render(null, g), l.removeChild(g);
    }
  };
}, lt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], fl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], vl = {
  all: () => lt,
  monthYear: () => lt.filter((e) => e.use.includes("month-year")),
  input: () => fl,
  timePicker: () => lt.filter((e) => e.use.includes("time")),
  action: () => lt.filter((e) => e.use.includes("action")),
  calendar: () => lt.filter((e) => e.use.includes("calendar")),
  menu: () => lt.filter((e) => e.use.includes("menu")),
  shared: () => lt.filter((e) => e.use.includes("shared")),
  yearMode: () => lt.filter((e) => e.use.includes("year-mode"))
}, Ve = (e, t, r) => {
  const a = [];
  return vl[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), r != null && r.length && r.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Ht = (e) => {
  const t = computed(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), r = computed(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: r };
}, Vt = (e, t) => {
  const r = V(Le(/* @__PURE__ */ new Date(), e.timezone)), a = ref([{ month: getMonth(r), year: getYear(r) }]), n = reactive({
    hours: e.range ? [getHours(r), getHours(r)] : getHours(r),
    minutes: e.range ? [getMinutes(r), getMinutes(r)] : getMinutes(r),
    seconds: e.range ? [0, 0] : 0
  }), o = computed({
    get: () => e.internalModelValue,
    set: (b) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", b);
    }
  }), i = computed(
    () => (b) => a.value[b] ? a.value[b].month : 0
  ), d = computed(
    () => (b) => a.value[b] ? a.value[b].year : 0
  );
  return {
    calendars: a,
    time: n,
    modelValue: o,
    month: i,
    year: d
  };
}, ml = (e, t) => {
  const { defaultedMultiCalendars: r, defaultedHighlight: a } = Te(t), { isDisabled: n, matchDate: o } = Ct(t), i = ref(null), d = ref(V(Le(/* @__PURE__ */ new Date(), t.timezone))), b = (l) => {
    !l.current && t.hideOffsetDates || (i.value = l.value);
  }, P = () => {
    i.value = null;
  }, T = (l) => Array.isArray(e.value) && t.range && e.value[0] && i.value ? l ? Ne(i.value, e.value[0]) : _e(i.value, e.value[0]) : true, p = (l, g) => {
    const s = () => e.value ? g ? e.value[0] || null : e.value[1] : null, D = e.value && Array.isArray(e.value) ? s() : null;
    return pe(V(l.value), D);
  }, U = (l) => {
    var _a2;
    const g = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !_e((_a2 = i.value) != null ? _a2 : null, g) : true;
  }, L = (l, g = true) => (t.range || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !l.current ? false : pe(V(l.value), e.value[g ? 0 : 1]) : t.range ? p(l, g) && U(g) || pe(l.value, Array.isArray(e.value) ? e.value[0] : null) && T(g) : false, B = (l, g, s) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? false : s ? Ne(e.value[0], g.value) : _e(e.value[0], g.value) : false, Y = (l) => !e.value || t.hideOffsetDates && !l.current ? false : t.range ? t.modelAuto && Array.isArray(e.value) ? pe(l.value, e.value[0] ? e.value[0] : d.value) : false : t.multiDates && Array.isArray(e.value) ? e.value.some((g) => pe(g, l.value)) : pe(l.value, e.value ? e.value : d.value), G = (l) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !l.current)
          return false;
        const g = addDays(i.value, +t.autoRange), s = qt(V(i.value), t.timezone, t.weekStart);
        return t.weekPicker ? pe(s[1], V(l.value)) : pe(g, V(l.value));
      }
      return false;
    }
    return false;
  }, h2 = (l) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        const g = addDays(i.value, +t.autoRange);
        if (t.hideOffsetDates && !l.current)
          return false;
        const s = qt(V(i.value), t.timezone, t.weekStart);
        return t.weekPicker ? Ne(l.value, s[0]) && _e(l.value, s[1]) : Ne(l.value, i.value) && _e(l.value, g);
      }
      return false;
    }
    return false;
  }, _ = (l) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !l.current)
          return false;
        const g = qt(V(i.value), t.timezone, t.weekStart);
        return t.weekPicker ? pe(g[0], l.value) : pe(i.value, l.value);
      }
      return false;
    }
    return false;
  }, H = (l) => Xt(e.value, i.value, l.value), k = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : false, R = () => t.modelAuto ? Ra(t.internalModelValue) : true, Q = (l) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return false;
    const g = t.range ? !L(l) && !L(l, false) : true;
    return !n(l.value) && !Y(l) && !(!l.current && t.hideOffsetDates) && g;
  }, q = (l) => t.range ? t.modelAuto ? k() && Y(l) : false : Y(l), x = (l) => {
    var g;
    return a.value ? typeof a.value == "function" ? a.value(l.value) : o(
      l.value,
      (g = t.arrMapValues) != null && g.highlightedDates ? t.arrMapValues.highlightedDates : a.value.dates
    ) : false;
  }, se = (l) => {
    const g = n(l.value);
    return g && (typeof a.value == "function" ? !a.value(l.value, g) : !a.value.options.highlightDisabled);
  }, E = (l) => {
    var g;
    return typeof a.value == "function" ? a.value(l.value) : (g = a.value.weekdays) == null ? void 0 : g.includes(l.value.getDay());
  }, m = (l) => (t.range || t.weekPicker) && (!(r.value.count > 0) || l.current) && R() && !(!l.current && t.hideOffsetDates) && !Y(l) ? H(l) : false, $ = (l) => {
    const { isRangeStart: g, isRangeEnd: s } = f(l), D = t.range ? g || s : false;
    return {
      dp__cell_offset: !l.current,
      dp__pointer: !t.disabled && !(!l.current && t.hideOffsetDates) && !n(l.value),
      dp__cell_disabled: n(l.value),
      dp__cell_highlight: !se(l) && (x(l) || E(l)) && !q(l) && !D && !_(l) && !(m(l) && t.weekPicker) && !s,
      dp__cell_highlight_active: !se(l) && (x(l) || E(l)) && q(l),
      dp__today: !t.noToday && pe(l.value, d.value) && l.current
    };
  }, j = (l) => ({
    dp__active_date: q(l),
    dp__date_hover: Q(l)
  }), te = (l) => ({
    ...y(l),
    ...N(l),
    dp__range_between_week: m(l) && t.weekPicker
  }), f = (l) => {
    const g = r.value.count > 0 ? l.current && L(l) && R() : L(l) && R(), s = r.value.count > 0 ? l.current && L(l, false) && R() : L(l, false) && R();
    return { isRangeStart: g, isRangeEnd: s };
  }, y = (l) => {
    const { isRangeStart: g, isRangeEnd: s } = f(l);
    return {
      dp__range_start: g,
      dp__range_end: s,
      dp__range_between: m(l) && !t.weekPicker,
      dp__date_hover_start: B(Q(l), l, true),
      dp__date_hover_end: B(Q(l), l, false)
    };
  }, N = (l) => ({
    ...y(l),
    dp__cell_auto_range: h2(l),
    dp__cell_auto_range_start: _(l),
    dp__cell_auto_range_end: G(l)
  }), S = (l) => t.range ? t.autoRange ? N(l) : t.modelAuto ? { ...j(l), ...y(l) } : y(l) : t.weekPicker ? te(l) : j(l);
  return {
    setHoverDate: b,
    clearHoverDate: P,
    getDayClassData: (l) => t.hideOffsetDates && !l.current ? {} : {
      ...$(l),
      ...S(l),
      [t.dayClass ? t.dayClass(l.value) : ""]: true,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, Ct = (e) => {
  const { defaultedFilters: t, defaultedHighlight: r } = Te(e), a = () => {
    if (e.timezone)
      return e.timezone;
    if (e.utc)
      return "UTC";
  }, n = (m) => {
    const $ = He(o(V(m))).toISOString(), [j] = $.split("T");
    return j;
  }, o = (m) => e.utc === "preserve" ? Na(m, a()) : Le(m, a()), i = (m) => {
    var g;
    const $ = e.maxDate ? Ne(o(m), o(V(e.maxDate))) : false, j = e.minDate ? _e(o(m), o(V(e.minDate))) : false, te = T(
      o(m),
      (g = e.arrMapValues) != null && g.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates
    ), y = t.value.months.map((s) => +s).includes(getMonth(m)), N = e.disabledWeekDays.length ? e.disabledWeekDays.some((s) => +s === getDay(m)) : false, S = U(m), w = getYear(m), l = w < +e.yearRange[0] || w > +e.yearRange[1];
    return !($ || j || te || y || l || N || S);
  }, d = (m, $) => _e(...ot(e.minDate, m, $)) || pe(...ot(e.minDate, m, $)), b = (m, $) => Ne(...ot(e.maxDate, m, $)) || pe(...ot(e.maxDate, m, $)), P = (m, $, j) => {
    let te = false;
    return e.maxDate && j && b(m, $) && (te = true), e.minDate && !j && d(m, $) && (te = true), te;
  }, T = (m, $) => m ? $ instanceof Map ? !!$.get(n(m)) : Array.isArray($) ? $.some((j) => pe(o(V(j)), o(m))) : $ ? $(V(JSON.parse(JSON.stringify(m)))) : false : true, p = (m, $, j, te) => {
    let f = false;
    return te ? e.minDate && e.maxDate ? f = P(m, $, j) : (e.minDate && d(m, $) || e.maxDate && b(m, $)) && (f = true) : f = true, f;
  }, U = (m) => {
    var $, j, te, f, y;
    return Array.isArray(e.allowedDates) && !(($ = e.allowedDates) != null && $.length) ? true : (j = e.arrMapValues) != null && j.allowedDates ? !T(m, (te = e.arrMapValues) == null ? void 0 : te.allowedDates) : (f = e.allowedDates) != null && f.length ? !((y = e.allowedDates) != null && y.some((N) => pe(o(V(N)), o(m)))) : false;
  }, L = (m) => !i(m), B = (m) => e.noDisabledRange ? !eachDayOfInterval({ start: m[0], end: m[1] }).some((j) => L(j)) : true, Y = (m, $, j = 0) => {
    if (Array.isArray($) && $[j]) {
      const te = differenceInCalendarDays(m, $[j]), f = Ia($[j], m), y = f.length === 1 ? 0 : f.filter((S) => L(S)).length, N = Math.abs(te) - y;
      if (e.minRange && e.maxRange)
        return N >= +e.minRange && N <= +e.maxRange;
      if (e.minRange)
        return N >= +e.minRange;
      if (e.maxRange)
        return N <= +e.maxRange;
    }
    return true;
  }, G = (m) => new Map(m.map(($) => [n($), true])), h2 = (m) => Array.isArray(m) && m.length > 0, _ = () => {
    const m = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return h2(e.allowedDates) && (m.allowedDates = G(e.allowedDates)), typeof r.value != "function" && h2(r.value.dates) && (m.highlightedDates = G(r.value.dates)), h2(e.disabledDates) && (m.disabledDates = G(e.disabledDates)), m;
  }, H = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, k = (m) => Array.isArray(m) ? [m[0] ? bn(m[0]) : null, m[1] ? bn(m[1]) : null] : bn(m), R = (m, $, j) => m.find(
    (te) => +te.hours === getHours($) && te.minutes === "*" ? true : +te.minutes === getMinutes($) && +te.hours === getHours($)
  ) && j, Q = (m, $, j) => {
    const [te, f] = m, [y, N] = $;
    return !R(te, y, j) && !R(f, N, j) && j;
  }, q = (m, $) => {
    const j = Array.isArray($) ? $ : [$];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? Q(e.disabledTimes, j, m) : !j.some((te) => R(e.disabledTimes, te, m)) : m;
  }, x = (m, $) => {
    const j = Array.isArray($) ? [pt($[0]), $[1] ? pt($[1]) : void 0] : pt($), te = !e.disabledTimes(j);
    return m && te;
  }, se = (m, $) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? q($, m) : x($, m) : $;
  return {
    isDisabled: L,
    validateDate: i,
    validateMonthYearInRange: p,
    isDateRangeAllowed: B,
    checkMinMaxRange: Y,
    matchDate: T,
    mapDatesArrToMap: _,
    isValidTime: (m) => {
      let $ = true;
      if (!m || H())
        return true;
      const j = !e.minDate && !e.maxDate ? k(m) : m;
      return (e.maxTime || e.maxDate) && ($ = ma(
        e.maxTime,
        e.maxDate,
        "max",
        Ae(j),
        $
      )), (e.minTime || e.minDate) && ($ = ma(
        e.minTime,
        e.minDate,
        "min",
        Ae(j),
        $
      )), se(m, $);
    }
  };
}, Jt = () => {
  const e = computed(() => (a, n) => a == null ? void 0 : a.includes(n)), t = computed(() => (a, n) => a.count ? a.solo ? true : n === 0 : true), r = computed(() => (a, n) => a.count ? a.solo ? true : n === a.count - 1 : true);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: r };
}, gl = (e, t, r) => {
  const a = ref(0), n = reactive({
    [bt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [bt.calendar]: false,
    [bt.header]: false
  }), o = (...T) => {
    var p;
    (p = e.flow) != null && p.length && (n[T] = true, Object.keys(n).filter((U) => !n[U]).length || P());
  }, i = () => {
    var T;
    (T = e.flow) != null && T.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), P());
  }, d = () => {
    a.value = -1;
  }, b = (T, p, ...U) => {
    e.flow[a.value] === T && r.value && r.value[p](...U);
  }, P = () => {
    b(et.month, "toggleMonthPicker", true), b(et.year, "toggleYearPicker", true), b(et.calendar, "toggleTimePicker", false, true), b(et.time, "toggleTimePicker", true, true);
    const T = e.flow[a.value];
    (T === et.hours || T === et.minutes || T === et.seconds) && b(T, "toggleTimePicker", true, true, T);
  };
  return { childMount: o, updateFlowStep: i, resetFlow: d, flowStep: a };
}, xt = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: false },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: true },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: true },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: false },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: false },
  disableMonthYearSelect: { type: Boolean, default: false },
  disableYearSelect: { type: Boolean, default: false },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: true },
  autoApply: { type: Boolean, default: false },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: false },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: false },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: true },
  spaceConfirm: { type: Boolean, default: true },
  monthChangeOnArrows: { type: Boolean, default: true },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: false },
  preventMinMaxNavigation: { type: Boolean, default: false },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: false },
  weekPicker: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: false },
  disableTimeRangeValidation: { type: Boolean, default: false },
  highlight: {
    type: [Array, Function, Object],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: false },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: false },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: true },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: false },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: false },
  modelAuto: { type: Boolean, default: false },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: false },
  partialRange: { type: Boolean, default: true },
  ignoreTimeValidation: { type: Boolean, default: false },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: false },
  fixedEnd: { type: Boolean, default: false },
  timePicker: { type: Boolean, default: false },
  enableSeconds: { type: Boolean, default: false },
  is24: { type: Boolean, default: true },
  noHoursOverlay: { type: Boolean, default: false },
  noMinutesOverlay: { type: Boolean, default: false },
  noSecondsOverlay: { type: Boolean, default: false },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: false },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  inline: { type: [Boolean, Object], default: false },
  textInput: { type: [Boolean, Object], default: false },
  noDisabledRange: { type: Boolean, default: false },
  sixWeeks: { type: [Boolean, String], default: false },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: false },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: true },
  timePickerInline: { type: Boolean, default: false },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: false },
  yearFirst: { type: Boolean, default: false }
}, xe = {
  ...xt,
  shadow: { type: Boolean, default: false },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) },
  noOverlayFocus: { type: Boolean, default: false }
}, yl = {
  key: 1,
  class: "dp__input_wrap"
}, hl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid", "onKeydown"], pl = {
  key: 2,
  class: "dp__clear_icon"
}, bl = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: false },
    inputValue: { type: String, default: "" },
    ...xt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTextInput: o,
      defaultedAriaLabels: i,
      defaultedInline: d,
      defaultedConfig: b,
      getDefaultPattern: P,
      getDefaultStartTime: T
    } = Te(n), p = ref(), U = ref(null), L = ref(false), B = ref(false), Y = computed(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !o.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !o.value.enabled,
        dp__input: true,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === false,
        dp__input_focus: L.value || n.isMenuOpen,
        dp__input_reg: !o.value.enabled,
        [n.inputClassName]: !!n.inputClassName
      })
    ), G = () => {
      a("set-input-date", null), n.autoApply && (a("set-empty-date"), p.value = null);
    }, h2 = (f) => {
      var _a2;
      const y = T();
      return Kr(
        f,
        (_a2 = o.value.format) != null ? _a2 : P(),
        y != null ? y : Ba({}, n.enableSeconds),
        n.inputValue,
        B.value
      );
    }, _ = (f) => {
      const { rangeSeparator: y } = o.value, [N, S] = f.split(`${y}`);
      if (N) {
        const w = h2(N.trim()), l = S ? h2(S.trim()) : null, g = w && l ? [w, l] : [w];
        p.value = w ? g : null;
      }
    }, H = () => {
      B.value = true;
    }, k = (f) => {
      if (n.range)
        _(f);
      else if (n.multiDates) {
        const y = f.split(";");
        p.value = y.map((N) => h2(N.trim())).filter((N) => N);
      } else
        p.value = h2(f);
    }, R = (f) => {
      var N;
      const y = typeof f == "string" ? f : (N = f.target) == null ? void 0 : N.value;
      y !== "" ? (o.value.openMenu && !n.isMenuOpen && a("open"), k(y), a("set-input-date", p.value)) : G(), B.value = false, a("update:input-value", y);
    }, Q = (f) => {
      o.value.enabled ? (k(f.target.value), o.value.enterSubmit && On(p.value) && n.inputValue !== "" ? (a("set-input-date", p.value, true), p.value = null) : o.value.enterSubmit && n.inputValue === "" && (p.value = null, a("clear"))) : se(f);
    }, q = (f) => {
      o.value.enabled && o.value.tabSubmit && k(f.target.value), o.value.tabSubmit && On(p.value) && n.inputValue !== "" ? (a("set-input-date", p.value, true, true), p.value = null) : o.value.tabSubmit && n.inputValue === "" && (p.value = null, a("clear", true));
    }, x = () => {
      var f;
      L.value = true, a("focus"), o.value.enabled && o.value.selectOnFocus && ((f = U.value) == null || f.select());
    }, se = (f) => {
      f.preventDefault(), it(f, b.value, true), o.value.enabled && o.value.openMenu && !d.value.input && !n.isMenuOpen ? a("open") : o.value.enabled || a("toggle");
    }, E = () => {
      a("real-blur"), L.value = false, (!n.isMenuOpen || d.value.enabled && d.value.input) && a("blur"), n.autoApply && o.value.enabled && p.value && !n.isMenuOpen && (a("set-input-date", p.value), a("select-date"), p.value = null);
    }, m = (f) => {
      it(f, b.value, true), a("clear");
    }, $ = (f) => {
      if (!o.value.enabled) {
        if (f.code === "Tab")
          return;
        f.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var f;
        (f = U.value) == null || f.focus({ preventScroll: true });
      },
      setParsedDate: (f) => {
        p.value = f;
      }
    }), (f, y) => {
      var N;
      return openBlock(), createElementBlock("div", { onClick: se }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !unref(d).enabled ? renderSlot(f.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
        !f.$slots.trigger && (!unref(d).enabled || unref(d).input) ? (openBlock(), createElementBlock("div", yl, [
          f.$slots["dp-input"] && !f.$slots.trigger && !unref(d).enabled ? renderSlot(f.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: R,
            onEnter: Q,
            onTab: q,
            onClear: m,
            onBlur: E,
            onKeypress: $,
            onPaste: H
          }) : createCommentVNode("", true),
          f.$slots["dp-input"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", {
            key: 1,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            ref_key: "inputRef",
            ref: U,
            name: f.name,
            class: normalizeClass(Y.value),
            inputmode: unref(o).enabled ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: e.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (N = unref(i)) == null ? void 0 : N.input,
            "aria-disabled": f.disabled || void 0,
            "aria-invalid": f.state === false ? true : void 0,
            onInput: R,
            onKeydown: [
              withKeys(Q, ["enter"]),
              withKeys(q, ["tab"]),
              $
            ],
            onBlur: E,
            onFocus: x,
            onKeypress: $,
            onPaste: H
          }, null, 42, hl)),
          createElementVNode("div", {
            onClick: y[2] || (y[2] = (S) => a("toggle"))
          }, [
            f.$slots["input-icon"] && !f.hideInputIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: y[0] || (y[0] = (S) => a("toggle"))
            }, [
              renderSlot(f.$slots, "input-icon")
            ])) : createCommentVNode("", true),
            !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (openBlock(), createBlock(unref(Ft), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: y[1] || (y[1] = (S) => a("toggle"))
            })) : createCommentVNode("", true)
          ]),
          f.$slots["clear-icon"] && e.inputValue && f.clearable && !f.disabled && !f.readonly ? (openBlock(), createElementBlock("span", pl, [
            renderSlot(f.$slots, "clear-icon", { clear: m })
          ])) : createCommentVNode("", true),
          f.clearable && !f.$slots["clear-icon"] && e.inputValue && !f.disabled && !f.readonly ? (openBlock(), createBlock(unref(Aa), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: y[3] || (y[3] = withModifiers((S) => m(S), ["prevent"]))
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
}), kl = ["title"], wl = { class: "dp__action_buttons" }, Dl = ["disabled", "onKeydown"], Ml = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: false },
    calendarWidth: { type: Number, default: 0 },
    ...xe
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const r = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: o,
      defaultedMultiCalendars: i,
      defaultedTextInput: d,
      defaultedInline: b,
      getDefaultPattern: P
    } = Te(a), { isValidTime: T } = Ct(a), { buildMatrix: p } = ft(), U = ref(null), L = ref(null);
    onMounted(() => {
      a.arrowNavigation && p([Se(U), Se(L)], "actionRow");
    });
    const B = computed(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : true), Y = computed(() => !G.value || !h2.value || !B.value), G = computed(() => !a.enableTimePicker || a.ignoreTimeValidation ? true : T(a.internalModelValue)), h2 = computed(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((m) => !x(m)).length : x(a.internalModelValue) : true), _ = () => {
      const E = o.value;
      return a.timePicker || a.monthPicker, E(Ae(a.internalModelValue));
    }, H = () => {
      const E = a.internalModelValue;
      return i.value.count > 0 ? `${k(E[0])} - ${k(E[1])}` : [k(E[0]), k(E[1])];
    }, k = (E) => Fa(
      E,
      o.value,
      a.formatLocale,
      d.value.rangeSeparator,
      a.modelAuto,
      P()
    ), R = computed(() => !a.internalModelValue || !a.menuMount ? "" : typeof o.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? H() : a.multiDates ? a.internalModelValue.map((E) => `${k(E)}`) : a.modelAuto ? `${k(a.internalModelValue[0])}` : `${k(a.internalModelValue[0])} -` : k(a.internalModelValue) : _()), Q = () => a.multiDates ? "; " : " - ", q = computed(
      () => Array.isArray(R.value) ? R.value.join(Q()) : R.value
    ), x = (E) => {
      if (!a.monthPicker)
        return true;
      let m = true;
      const $ = V(Qe(E));
      if (a.minDate && a.maxDate) {
        const j = V(Qe(a.minDate)), te = V(Qe(a.maxDate));
        return Ne($, j) && _e($, te) || pe($, j) || pe($, te);
      }
      if (a.minDate) {
        const j = V(Qe(a.minDate));
        m = Ne($, j) || pe($, j);
      }
      if (a.maxDate) {
        const j = V(Qe(a.maxDate));
        m = _e($, j) || pe($, j);
      }
      return m;
    }, se = () => {
      G.value && h2.value && B.value ? r("select-date") : r("invalid-select");
    };
    return (E, m) => (openBlock(), createElementBlock("div", {
      class: "dp__action_row",
      style: normalizeStyle(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      E.$slots["action-row"] ? renderSlot(E.$slots, "action-row", normalizeProps(mergeProps({ key: 0 }, {
        internalModelValue: E.internalModelValue,
        disabled: Y.value,
        selectDate: () => E.$emit("select-date"),
        closePicker: () => E.$emit("close-picker")
      }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(n).showPreview ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "dp__selection_preview",
          title: q.value
        }, [
          E.$slots["action-preview"] ? renderSlot(E.$slots, "action-preview", {
            key: 0,
            value: E.internalModelValue
          }) : createCommentVNode("", true),
          E.$slots["action-preview"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(q.value), 1)
          ], 64))
        ], 8, kl)) : createCommentVNode("", true),
        createElementVNode("div", wl, [
          E.$slots["action-buttons"] ? renderSlot(E.$slots, "action-buttons", {
            key: 0,
            value: E.internalModelValue
          }) : createCommentVNode("", true),
          E.$slots["action-buttons"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !unref(b).enabled && unref(n).showCancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: U,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: m[0] || (m[0] = ($) => E.$emit("close-picker")),
              onKeydown: [
                m[1] || (m[1] = withKeys(($) => E.$emit("close-picker"), ["enter"])),
                m[2] || (m[2] = withKeys(($) => E.$emit("close-picker"), ["space"]))
              ]
            }, toDisplayString(E.cancelText), 545)) : createCommentVNode("", true),
            unref(n).showNow ? (openBlock(), createElementBlock("button", {
              key: 1,
              ref_key: "cancelButtonRef",
              ref: U,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: m[3] || (m[3] = ($) => E.$emit("select-now")),
              onKeydown: [
                m[4] || (m[4] = withKeys(($) => E.$emit("select-now"), ["enter"])),
                m[5] || (m[5] = withKeys(($) => E.$emit("select-now"), ["space"]))
              ]
            }, toDisplayString(E.nowButtonLabel), 545)) : createCommentVNode("", true),
            unref(n).showSelect ? (openBlock(), createElementBlock("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: L,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: Y.value,
              onKeydown: [
                withKeys(se, ["enter"]),
                withKeys(se, ["space"])
              ],
              onClick: se
            }, toDisplayString(E.selectText), 41, Dl)) : createCommentVNode("", true)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), $l = ["onKeydown"], Tl = { class: "dp__selection_grid_header" }, Al = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Sl = ["aria-label", "onKeydown"], Ut = /* @__PURE__ */ defineComponent({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: r }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: o } = ft(), i = r, d = e, { defaultedAriaLabels: b, defaultedTextInput: P, defaultedConfig: T } = Te(
      d
    ), { hideNavigationButtons: p } = Jt(), U = ref(false), L = ref(null), B = ref(null), Y = ref([]), G = ref(), h2 = ref(null), _ = ref(0), H = ref(null);
    onBeforeUpdate(() => {
      L.value = null;
    }), onMounted(() => {
      nextTick().then(() => m()), d.noOverlayFocus || R(), k(true);
    }), onUnmounted(() => k(false));
    const k = (w) => {
      var l;
      d.arrowNavigation && ((l = d.headerRefs) != null && l.length ? o(w) : a(w));
    }, R = () => {
      var l;
      const w = Se(B);
      w && (P.value.enabled || (L.value ? (l = L.value) == null || l.focus({ preventScroll: true }) : w.focus({ preventScroll: true })), U.value = w.clientHeight < w.scrollHeight);
    }, Q = computed(
      () => ({
        dp__overlay: true,
        "dp--overlay-absolute": !d.useRelative,
        "dp--overlay-relative": d.useRelative
      })
    ), q = computed(
      () => d.useRelative ? { height: `${d.height}px`, width: "260px" } : void 0
    ), x = computed(() => ({
      dp__overlay_col: true
    })), se = computed(
      () => ({
        dp__btn: true,
        dp__button: true,
        dp__overlay_action: true,
        dp__over_action_scroll: U.value,
        dp__button_bottom: d.isLast
      })
    ), E = computed(() => {
      var w, l;
      return {
        dp__overlay_container: true,
        dp__container_flex: ((w = d.items) == null ? void 0 : w.length) <= 6,
        dp__container_block: ((l = d.items) == null ? void 0 : l.length) > 6
      };
    });
    watch(
      () => d.items,
      () => m(),
      { deep: true }
    );
    const m = () => {
      nextTick().then(() => {
        const w = Se(L), l = Se(B), g = Se(h2), s = Se(H), D = g ? g.getBoundingClientRect().height : 0;
        l && (l.getBoundingClientRect().height ? _.value = l.getBoundingClientRect().height - D : _.value = T.value.modeHeight - D), w && s && (s.scrollTop = w.offsetTop - s.offsetTop - (_.value / 2 - w.getBoundingClientRect().height) - D);
      });
    }, $ = (w) => {
      w.disabled || i("selected", w.value);
    }, j = () => {
      i("toggle"), i("reset-flow");
    }, te = () => {
      d.escClose && j();
    }, f = (w, l, g, s) => {
      w && (l.active && (L.value = w), d.arrowNavigation && (Array.isArray(Y.value[g]) ? Y.value[g][s] = w : Y.value[g] = [w], y()));
    }, y = () => {
      var l, g;
      const w = (l = d.headerRefs) != null && l.length ? [d.headerRefs].concat(Y.value) : Y.value.concat([d.skipButtonRef ? [] : [h2.value]]);
      n(Ae(w), (g = d.headerRefs) != null && g.length ? "monthPicker" : "selectionGrid");
    }, N = (w) => {
      d.arrowNavigation || it(w, T.value, true);
    }, S = (w) => {
      G.value = w, i("hover-value", w);
    };
    return t({ focusGrid: R }), (w, l) => {
      var g;
      return openBlock(), createElementBlock("div", {
        ref_key: "gridWrapRef",
        ref: B,
        class: normalizeClass(Q.value),
        style: normalizeStyle(q.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          withKeys(withModifiers(te, ["prevent"]), ["esc"]),
          l[0] || (l[0] = withKeys(withModifiers((s) => N(s), ["prevent"]), ["left"])),
          l[1] || (l[1] = withKeys(withModifiers((s) => N(s), ["prevent"]), ["up"])),
          l[2] || (l[2] = withKeys(withModifiers((s) => N(s), ["prevent"]), ["down"])),
          l[3] || (l[3] = withKeys(withModifiers((s) => N(s), ["prevent"]), ["right"]))
        ]
      }, [
        createElementVNode("div", {
          ref_key: "containerRef",
          ref: H,
          class: normalizeClass(E.value),
          role: "grid",
          style: normalizeStyle({ height: `${_.value}px` })
        }, [
          createElementVNode("div", Tl, [
            renderSlot(w.$slots, "header")
          ]),
          w.$slots.overlay ? renderSlot(w.$slots, "overlay", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(w.items, (s, D) => (openBlock(), createElementBlock("div", {
            key: D,
            class: normalizeClass(["dp__overlay_row", { dp__flex_row: w.items.length >= 3 }]),
            role: "row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(s, (ie, oe) => (openBlock(), createElementBlock("div", {
              key: ie.value,
              ref_for: true,
              ref: (u) => f(u, ie, D, oe),
              role: "gridcell",
              class: normalizeClass(x.value),
              "aria-selected": ie.active,
              "aria-disabled": ie.disabled || void 0,
              tabindex: "0",
              onClick: (u) => $(ie),
              onKeydown: [
                withKeys(withModifiers((u) => $(ie), ["prevent"]), ["enter"]),
                withKeys(withModifiers((u) => $(ie), ["prevent"]), ["space"])
              ],
              onMouseover: (u) => S(ie.value)
            }, [
              createElementVNode("div", {
                class: normalizeClass(ie.className)
              }, [
                w.$slots.item ? renderSlot(w.$slots, "item", {
                  key: 0,
                  item: ie
                }) : createCommentVNode("", true),
                w.$slots.item ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(ie.text), 1)
                ], 64))
              ], 2)
            ], 42, Al))), 128))
          ], 2))), 128))
        ], 6),
        w.$slots["button-icon"] ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: h2,
          type: "button",
          "aria-label": (g = unref(b)) == null ? void 0 : g.toggleOverlay,
          class: normalizeClass(se.value),
          tabindex: "0",
          onClick: j,
          onKeydown: [
            withKeys(j, ["enter"]),
            withKeys(j, ["tab"])
          ]
        }, [
          renderSlot(w.$slots, "button-icon")
        ], 42, Sl)), [
          [vShow, !unref(p)(w.hideNavigation, w.type)]
        ]) : createCommentVNode("", true)
      ], 46, $l);
    };
  }
}), en = /* @__PURE__ */ defineComponent({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean }
  },
  setup(e) {
    const t = e, r = computed(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = computed(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (i, d) => (openBlock(), createElementBlock("div", {
        key: i,
        class: normalizeClass(a.value)
      }, [
        renderSlot(n.$slots, "default", {
          instance: i,
          index: d
        })
      ], 2))), 128))
    ], 2));
  }
}), Pl = ["aria-label", "aria-disabled"], Ot = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const r = t, a = ref(null);
    return onMounted(() => r("set-ref", a)), (n, o) => (openBlock(), createElementBlock("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: o[0] || (o[0] = (i) => n.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = withKeys(withModifiers((i) => n.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = withKeys(withModifiers((i) => n.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      createElementVNode("span", {
        class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        renderSlot(n.$slots, "default")
      ], 2)
    ], 40, Pl));
  }
}), Cl = { class: "dp--year-mode-picker" }, _l = ["aria-label"], Ua = /* @__PURE__ */ defineComponent({
  __name: "YearModePicker",
  props: {
    ...xe,
    showYearPicker: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => false }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const r = t, a = e, { showRightIcon: n, showLeftIcon: o } = Jt(), { defaultedConfig: i, defaultedMultiCalendars: d, defaultedAriaLabels: b, defaultedTransitions: P } = Te(a), { showTransition: T, transitionName: p } = Ht(P), U = (Y = false, G) => {
      r("toggle-year-picker", { flow: Y, show: G });
    }, L = (Y) => {
      r("year-select", Y);
    }, B = (Y = false) => {
      r("handle-year", Y);
    };
    return (Y, G) => {
      var h2, _, H;
      return openBlock(), createElementBlock("div", Cl, [
        unref(o)(unref(d), e.instance) ? (openBlock(), createBlock(Ot, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (h2 = unref(b)) == null ? void 0 : h2.prevYear,
          disabled: e.isDisabled(false),
          onActivate: G[0] || (G[0] = (k) => B(false))
        }, {
          default: withCtx(() => [
            Y.$slots["arrow-left"] ? renderSlot(Y.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
            Y.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(En), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
        createElementVNode("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (_ = unref(b)) == null ? void 0 : _.openYearsOverlay,
          onClick: G[1] || (G[1] = () => U(false)),
          onKeydown: G[2] || (G[2] = withKeys(() => U(false), ["enter"]))
        }, [
          Y.$slots.year ? renderSlot(Y.$slots, "year", {
            key: 0,
            year: e.year
          }) : createCommentVNode("", true),
          Y.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(e.year), 1)
          ], 64))
        ], 40, _l),
        unref(n)(unref(d), e.instance) ? (openBlock(), createBlock(Ot, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (H = unref(b)) == null ? void 0 : H.nextYear,
          disabled: e.isDisabled(true),
          onActivate: G[3] || (G[3] = (k) => B(true))
        }, {
          default: withCtx(() => [
            Y.$slots["arrow-right"] ? renderSlot(Y.$slots, "arrow-right", { key: 0 }) : createCommentVNode("", true),
            Y.$slots["arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Fn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(p)(e.showYearPicker),
          css: unref(T)
        }, {
          default: withCtx(() => [
            e.showYearPicker ? (openBlock(), createBlock(Ut, {
              key: 0,
              items: e.items,
              "text-input": Y.textInput,
              "esc-close": Y.escClose,
              config: Y.config,
              "is-last": Y.autoApply && !unref(i).keepActionRow,
              type: "year",
              onToggle: U,
              onSelected: G[4] || (G[4] = (k) => L(k))
            }, createSlots({
              "button-icon": withCtx(() => [
                Y.$slots["calendar-icon"] ? renderSlot(Y.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                Y.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ft), { key: 1 }))
              ]),
              _: 2
            }, [
              Y.$slots["year-overlay-value"] ? {
                name: "item",
                fn: withCtx(({ item: k }) => [
                  renderSlot(Y.$slots, "year-overlay-value", {
                    text: k.text,
                    value: k.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Gn = (e, t, r) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => pe(e, a))) {
      const a = t.value.filter((n) => !pe(n, e));
      t.value = a.length ? a : null;
    } else
      (r && +r > t.value.length || !r) && t.value.push(e);
  else
    t.value = [e];
}, qn = (e, t, r) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? _e(t, a[0]) ? (a.unshift(t), r("range-start", a[0]), r("range-start", a[1])) : (a[1] = t, r("range-end", t)) : (a = [t], r("range-start", t)), e.value = a, a;
}, tn = (e, t, r, a) => {
  e[0] && e[1] && r && t("auto-apply"), e[0] && !e[1] && a && r && t("auto-apply");
}, La = ({
  multiCalendars: e,
  highlight: t,
  calendars: r,
  modelValue: a,
  props: n,
  year: o,
  month: i,
  emit: d
}) => {
  const b = computed(() => jn(n.yearRange, n.reverseYears)), P = ref([false]), T = computed(() => (k, R) => {
    const Q = set(Qe(/* @__PURE__ */ new Date()), {
      month: i.value(k),
      year: o.value(k)
    });
    return Ea(Q, n.maxDate, n.minDate, n.preventMinMaxNavigation, R);
  }), p = () => {
    for (let k = 0; k < e.value.count; k++)
      if (k === 0)
        r.value[k] = r.value[0];
      else {
        const R = set(V(), r.value[k - 1]);
        r.value[k] = { month: getMonth(R), year: getYear(addYears(R, 1)) };
      }
  }, U = (k) => {
    if (!k)
      return p();
    const R = set(V(), r.value[k]);
    return r.value[0].year = getYear(subYears(R, e.value.count - 1)), p();
  }, L = (k) => n.focusStartDate ? k[0] : k[1] ? k[1] : k[0], B = () => {
    if (a.value) {
      const k = Array.isArray(a.value) ? L(a.value) : a.value;
      r.value[0] = { month: getMonth(k), year: getYear(k) };
    }
  };
  onMounted(() => {
    B(), e.value.count && p();
  });
  const Y = (k, R) => {
    r.value[R].year = k, e.value.count && !e.value.solo && U(R);
  }, G = computed(() => (k) => At(b.value, (R) => {
    const Q = o.value(k) === R.value, q = Bt(R.value, St(n.minDate), St(n.maxDate)), x = Kn(t.value, R.value);
    return { active: Q, disabled: q, highlighted: x };
  })), h2 = (k, R) => {
    Y(k, R), H(R);
  }, _ = (k, R = false) => {
    if (!T.value(k, R)) {
      const Q = R ? o.value(k) + 1 : o.value(k) - 1;
      Y(Q, k);
    }
  }, H = (k, R = false, Q) => {
    R || d("reset-flow"), Q !== void 0 ? P.value[k] = Q : P.value[k] = !P.value[k], P.value || d("overlay-closed");
  };
  return {
    isDisabled: T,
    groupedYears: G,
    showYearPicker: P,
    selectYear: Y,
    toggleYearPicker: H,
    handleYearSelect: h2,
    handleYear: _
  };
}, Rl = (e, t) => {
  const { defaultedMultiCalendars: r, defaultedAriaLabels: a, defaultedTransitions: n, defaultedConfig: o, defaultedHighlight: i } = Te(e), { modelValue: d, year: b, month: P, calendars: T } = Vt(e, t), p = computed(() => _a(e.formatLocale, e.locale, e.monthNameFormat)), U = ref(null), {
    selectYear: L,
    groupedYears: B,
    showYearPicker: Y,
    toggleYearPicker: G,
    handleYearSelect: h2,
    handleYear: _,
    isDisabled: H
  } = La({
    modelValue: d,
    multiCalendars: r,
    highlight: i,
    calendars: T,
    year: b,
    month: P,
    props: e,
    emit: t
  }), k = (S) => S ? { month: getMonth(S), year: getYear(S) } : { month: null, year: null }, R = () => d.value ? Array.isArray(d.value) ? d.value.map((S) => k(S)) : k(d.value) : k(), Q = (S, w) => {
    const l = T.value[S], g = R();
    return Array.isArray(g) ? g.some((s) => s.year === (l == null ? void 0 : l.year) && s.month === w) : (l == null ? void 0 : l.year) === g.year && w === g.month;
  }, q = (S, w, l) => {
    var s, D;
    const g = R();
    return Array.isArray(g) ? b.value(w) === ((s = g[l]) == null ? void 0 : s.year) && S === ((D = g[l]) == null ? void 0 : D.month) : false;
  }, x = (S, w) => {
    if (e.range) {
      const l = R();
      if (Array.isArray(d.value) && Array.isArray(l)) {
        const g = q(S, w, 0) || q(S, w, 1), s = at(Qe(V()), S, b.value(w));
        return Xt(d.value, U.value, s) && !g;
      }
      return false;
    }
    return false;
  }, se = computed(() => (S) => At(p.value, (w) => {
    const l = Q(S, w.value), g = Bt(
      w.value,
      Oa(b.value(S), e.minDate),
      Ya(b.value(S), e.maxDate)
    ) || Jr(e.disabledDates, b.value(S)).includes(w.value), s = x(w.value, S), D = Ha(i.value, w.value, b.value(S));
    return { active: l, disabled: g, isBetween: s, highlighted: D };
  })), E = (S, w) => at(Qe(V()), S, b.value(w)), m = (S, w) => {
    const l = d.value ? d.value : Qe(/* @__PURE__ */ new Date());
    d.value = at(l, S, b.value(w)), t("auto-apply");
  }, $ = (S, w) => {
    const l = qn(d, E(S, w), t);
    tn(l, t, e.autoApply, e.modelAuto);
  }, j = (S, w) => {
    Gn(E(S, w), d, e.multiDatesLimit), t("auto-apply", true);
  }, te = (S, w) => (T.value[w].month = S, y(w, T.value[w].year, S), e.multiDates ? j(S, w) : e.range ? $(S, w) : m(S, w)), f = (S, w) => {
    L(S, w), y(w, S, null);
  }, y = (S, w, l) => {
    let g = l;
    if (!g) {
      const s = R();
      g = Array.isArray(s) ? s[S].month : s.month;
    }
    t("update-month-year", { instance: S, year: w, month: g });
  };
  return {
    groupedMonths: se,
    groupedYears: B,
    year: b,
    isDisabled: H,
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: o,
    showYearPicker: Y,
    modelValue: d,
    setHoverDate: (S, w) => {
      U.value = E(S, w);
    },
    selectMonth: te,
    selectYear: f,
    toggleYearPicker: G,
    handleYearSelect: h2,
    handleYear: _,
    getModelMonthYear: R
  };
}, Ol = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...xe
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = useSlots(), o = Ve(n, "yearMode"), i = e, {
      groupedMonths: d,
      groupedYears: b,
      year: P,
      isDisabled: T,
      defaultedMultiCalendars: p,
      defaultedConfig: U,
      showYearPicker: L,
      modelValue: B,
      setHoverDate: Y,
      selectMonth: G,
      selectYear: h2,
      toggleYearPicker: _,
      handleYearSelect: H,
      handleYear: k,
      getModelMonthYear: R
    } = Rl(i, a);
    return t({ getSidebarProps: () => ({
      modelValue: B,
      year: P,
      getModelMonthYear: R,
      selectMonth: G,
      selectYear: h2,
      handleYear: k
    }) }), (q, x) => (openBlock(), createBlock(en, {
      "multi-calendars": unref(p).count,
      stretch: ""
    }, {
      default: withCtx(({ instance: se }) => [
        q.$slots["month-year"] ? renderSlot(q.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
          year: unref(P),
          months: unref(d)(se),
          years: unref(b)(se),
          selectMonth: unref(G),
          selectYear: unref(h2),
          instance: se
        }))) : (openBlock(), createBlock(Ut, {
          key: 1,
          items: unref(d)(se),
          "arrow-navigation": q.arrowNavigation,
          "is-last": q.autoApply && !unref(U).keepActionRow,
          "esc-close": q.escClose,
          height: unref(U).modeHeight,
          config: q.config,
          "no-overlay-focus": q.noOverlayFocus,
          "use-relative": "",
          type: "month",
          onSelected: (E) => unref(G)(E, se),
          onHoverValue: (E) => unref(Y)(E, se)
        }, {
          header: withCtx(() => [
            createVNode(Ua, mergeProps(q.$props, {
              items: unref(b)(se),
              instance: se,
              "show-year-picker": unref(L)[se],
              year: unref(P)(se),
              "is-disabled": (E) => unref(T)(se, E),
              onHandleYear: (E) => unref(k)(se, E),
              onYearSelect: (E) => unref(H)(E, se),
              onToggleYearPicker: (E) => unref(_)(se, E == null ? void 0 : E.flow, E == null ? void 0 : E.show)
            }), createSlots({ _: 2 }, [
              renderList(unref(o), (E, m) => ({
                name: E,
                fn: withCtx(($) => [
                  renderSlot(q.$slots, E, normalizeProps(guardReactiveProps($)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
}), Yl = (e, t) => {
  const { modelValue: r } = Vt(e, t), a = ref(null), { defaultedHighlight: n } = Te(e), o = (p) => Array.isArray(r.value) ? r.value.some((U) => getYear(U) === p) : r.value ? getYear(r.value) === p : false, i = (p) => e.range && Array.isArray(r.value) ? Xt(r.value, a.value, b(p)) : false, d = computed(() => At(jn(e.yearRange, e.reverseYears), (p) => {
    const U = o(p.value), L = Bt(p.value, St(e.minDate), St(e.maxDate)), B = i(p.value), Y = Kn(n.value, p.value);
    return { active: U, disabled: L, isBetween: B, highlighted: Y };
  })), b = (p) => setYear(Qe(/* @__PURE__ */ new Date()), p);
  return {
    groupedYears: d,
    modelValue: r,
    setHoverValue: (p) => {
      a.value = setYear(Qe(/* @__PURE__ */ new Date()), p);
    },
    selectYear: (p) => {
      var U;
      if (e.multiDates)
        return r.value ? Array.isArray(r.value) && (((U = r.value) == null ? void 0 : U.map((B) => getYear(B))).includes(p) ? r.value = r.value.filter((B) => getYear(B) !== p) : r.value.push(setYear(He(V()), p))) : r.value = [setYear(He(V()), p)], t("auto-apply", true);
      if (e.range) {
        const L = qn(r, b(p), t);
        return tn(L, t, e.autoApply, e.modelAuto);
      }
      r.value = b(p), t("auto-apply");
    }
  };
}, Nl = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...xe
  },
  emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { groupedYears: o, modelValue: i, selectYear: d, setHoverValue: b } = Yl(n, a), { defaultedConfig: P } = Te(n);
    return t({ getSidebarProps: () => ({
      modelValue: i,
      selectYear: d
    }) }), (p, U) => (openBlock(), createElementBlock("div", null, [
      p.$slots["month-year"] ? renderSlot(p.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
        years: unref(o),
        selectYear: unref(d)
      }))) : (openBlock(), createBlock(Ut, {
        key: 1,
        items: unref(o),
        "is-last": p.autoApply && !unref(P).keepActionRow,
        height: unref(P).modeHeight,
        config: p.config,
        "no-overlay-focus": p.noOverlayFocus,
        type: "year",
        "use-relative": "",
        onSelected: unref(d),
        onHoverValue: unref(b)
      }, createSlots({ _: 2 }, [
        p.$slots["year-overlay-value"] ? {
          name: "item",
          fn: withCtx(({ item: L }) => [
            renderSlot(p.$slots, "year-overlay-value", {
              text: L.text,
              value: L.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
    ]));
  }
}), Il = {
  key: 0,
  class: "dp__time_input"
}, Bl = ["aria-label", "onKeydown", "onClick"], El = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Fl = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Hl = ["aria-label", "disabled", "onKeydown", "onClick"], Vl = ["aria-label", "onKeydown", "onClick"], Ul = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Ll = /* @__PURE__ */ createElementVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Wl = { key: 0 }, zl = ["aria-label", "onKeydown"], jl = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => false },
    ...xe
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { setTimePickerElements: o, setTimePickerBackRef: i } = ft(), { defaultedAriaLabels: d, defaultedTransitions: b, defaultedFilters: P, defaultedConfig: T } = Te(n), { transitionName: p, showTransition: U } = Ht(b), L = reactive({
      hours: false,
      minutes: false,
      seconds: false
    }), B = ref("AM"), Y = ref(null), G = ref([]);
    onMounted(() => {
      a("mounted");
    });
    const h2 = (u) => set(/* @__PURE__ */ new Date(), {
      hours: u.hours,
      minutes: u.minutes,
      seconds: n.enableSeconds ? u.seconds : 0,
      milliseconds: 0
    }), _ = computed(
      () => (u) => te(u, n[u]) || k(u, n[u])
    ), H = computed(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), k = (u, O) => n.range && !n.disableTimeRangeValidation ? !n.validateTime(u, O) : false, R = (u, O) => {
      if (n.range && !n.disableTimeRangeValidation) {
        const X = O ? +n[`${u}Increment`] : -+n[`${u}Increment`], C = n[u] + X;
        return !n.validateTime(u, C);
      }
      return false;
    }, Q = computed(() => (u) => !y(+n[u] + +n[`${u}Increment`], u) || R(u, true)), q = computed(() => (u) => !y(+n[u] - +n[`${u}Increment`], u) || R(u, false)), x = (u, O) => add(set(V(), u), O), se = (u, O) => sub(set(V(), u), O), E = computed(
      () => ({
        dp__time_col: true,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), m = computed(() => {
      const u = [{ type: "hours" }, { type: "", separator: true }, { type: "minutes" }];
      return n.enableSeconds ? u.concat([{ type: "", separator: true }, { type: "seconds" }]) : u;
    }), $ = computed(() => m.value.filter((u) => !u.separator)), j = computed(() => (u) => {
      if (u === "hours") {
        const O = g(+n.hours);
        return { text: O < 10 ? `0${O}` : `${O}`, value: O };
      }
      return { text: n[u] < 10 ? `0${n[u]}` : `${n[u]}`, value: n[u] };
    }), te = (u, O) => {
      var C;
      if (!n.disabledTimesConfig)
        return false;
      const X = n.disabledTimesConfig(n.order, u === "hours" ? O : void 0);
      return X[u] ? !!((C = X[u]) != null && C.includes(O)) : true;
    }, f = (u) => {
      const O = n.is24 ? 24 : 12, X = u === "hours" ? O : 60, C = +n[`${u}GridIncrement`], ne = u === "hours" && !n.is24 ? C : 0, me = [];
      for (let ye = ne; ye < X; ye += C)
        me.push({ value: ye, text: ye < 10 ? `0${ye}` : `${ye}` });
      return u === "hours" && !n.is24 && me.push({ value: 0, text: "12" }), At(me, (ye) => ({ active: false, disabled: P.value.times[u].includes(ye.value) || !y(ye.value, u) || te(u, ye.value) || k(u, ye.value) }));
    }, y = (u, O) => {
      const X = n.minTime ? h2(yn(n.minTime)) : null, C = n.maxTime ? h2(yn(n.maxTime)) : null, ne = h2(yn(H.value, O, u));
      return X && C ? (isBefore(ne, C) || isEqual(ne, C)) && (isAfter(ne, X) || isEqual(ne, X)) : X ? isAfter(ne, X) || isEqual(ne, X) : C ? isBefore(ne, C) || isEqual(ne, C) : true;
    }, N = (u) => n[`no${u[0].toUpperCase() + u.slice(1)}Overlay`], S = (u) => {
      N(u) || (L[u] = !L[u], L[u] || a("overlay-closed"));
    }, w = (u) => u === "hours" ? getHours : u === "minutes" ? getMinutes : getSeconds, l = (u, O = true) => {
      const X = O ? x : se, C = O ? +n[`${u}Increment`] : -+n[`${u}Increment`];
      y(+n[u] + C, u) && a(
        `update:${u}`,
        w(u)(X({ [u]: +n[u] }, { [u]: +n[`${u}Increment`] }))
      );
    }, g = (u) => n.is24 ? u : (u >= 12 ? B.value = "PM" : B.value = "AM", Hr(u)), s = () => {
      B.value === "PM" ? (B.value = "AM", a("update:hours", n.hours - 12)) : (B.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", B.value);
    }, D = (u) => {
      L[u] = true;
    }, ie = (u, O, X) => {
      if (u && n.arrowNavigation) {
        Array.isArray(G.value[O]) ? G.value[O][X] = u : G.value[O] = [u];
        const C = G.value.reduce(
          (ne, me) => me.map((ye, I) => [...ne[I] || [], me[I]]),
          []
        );
        i(n.closeTimePickerBtn), Y.value && (C[1] = C[1].concat(Y.value)), o(C, n.order);
      }
    }, oe = (u, O) => (S(u), u === "hours" && !n.is24 ? a(`update:${u}`, B.value === "PM" ? O + 12 : O) : a(`update:${u}`, O));
    return t({ openChildCmp: D }), (u, O) => {
      var X;
      return u.disabled ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Il, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (C, ne) => {
          var me, ye, I;
          return openBlock(), createElementBlock("div", {
            key: ne,
            class: normalizeClass(E.value)
          }, [
            C.separator ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" : ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createElementVNode("button", {
                ref_for: true,
                ref: (F) => ie(F, ne, 0),
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !u.timePickerInline,
                  dp__inc_dec_button_inline: u.timePickerInline,
                  dp__tp_inline_btn_top: u.timePickerInline,
                  dp__inc_dec_button_disabled: Q.value(C.type)
                }),
                "aria-label": (me = unref(d)) == null ? void 0 : me.incrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((F) => l(C.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((F) => l(C.type), ["prevent"]), ["space"])
                ],
                onClick: (F) => l(C.type)
              }, [
                n.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  El,
                  Fl
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  u.$slots["arrow-up"] ? renderSlot(u.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                  u.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Vn), { key: 1 }))
                ], 64))
              ], 42, Bl),
              createElementVNode("button", {
                ref_for: true,
                ref: (F) => ie(F, ne, 1),
                type: "button",
                "aria-label": (ye = unref(d)) == null ? void 0 : ye.openTpOverlay(C.type),
                class: normalizeClass({
                  dp__time_display: true,
                  dp__time_display_block: !u.timePickerInline,
                  dp__time_display_inline: u.timePickerInline,
                  "dp--time-invalid": _.value(C.type),
                  "dp--time-overlay-btn": !_.value(C.type)
                }),
                disabled: N(C.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((F) => S(C.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((F) => S(C.type), ["prevent"]), ["space"])
                ],
                onClick: (F) => S(C.type)
              }, [
                u.$slots[C.type] ? renderSlot(u.$slots, C.type, {
                  key: 0,
                  text: j.value(C.type).text,
                  value: j.value(C.type).value
                }) : createCommentVNode("", true),
                u.$slots[C.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(j.value(C.type).text), 1)
                ], 64))
              ], 42, Hl),
              createElementVNode("button", {
                ref_for: true,
                ref: (F) => ie(F, ne, 2),
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !u.timePickerInline,
                  dp__inc_dec_button_inline: u.timePickerInline,
                  dp__tp_inline_btn_bottom: u.timePickerInline,
                  dp__inc_dec_button_disabled: q.value(C.type)
                }),
                "aria-label": (I = unref(d)) == null ? void 0 : I.decrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((F) => l(C.type, false), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((F) => l(C.type, false), ["prevent"]), ["space"])
                ],
                onClick: (F) => l(C.type, false)
              }, [
                n.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  Ul,
                  Ll
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  u.$slots["arrow-down"] ? renderSlot(u.$slots, "arrow-down", { key: 0 }) : createCommentVNode("", true),
                  u.$slots["arrow-down"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Un), { key: 1 }))
                ], 64))
              ], 42, Vl)
            ], 64))
          ], 2);
        }), 128)),
        u.is24 ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Wl, [
          u.$slots["am-pm-button"] ? renderSlot(u.$slots, "am-pm-button", {
            key: 0,
            toggle: s,
            value: B.value
          }) : createCommentVNode("", true),
          u.$slots["am-pm-button"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: Y,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (X = unref(d)) == null ? void 0 : X.amPmButton,
            tabindex: "0",
            onClick: s,
            onKeydown: [
              withKeys(withModifiers(s, ["prevent"]), ["enter"]),
              withKeys(withModifiers(s, ["prevent"]), ["space"])
            ]
          }, toDisplayString(B.value), 41, zl))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList($.value, (C, ne) => (openBlock(), createBlock(Transition, {
          key: ne,
          name: unref(p)(L[C.type]),
          css: unref(U)
        }, {
          default: withCtx(() => [
            L[C.type] ? (openBlock(), createBlock(Ut, {
              key: 0,
              items: f(C.type),
              "is-last": u.autoApply && !unref(T).keepActionRow,
              "esc-close": u.escClose,
              type: C.type,
              "text-input": u.textInput,
              config: u.config,
              "arrow-navigation": u.arrowNavigation,
              onSelected: (me) => oe(C.type, me),
              onToggle: (me) => S(C.type),
              onResetFlow: O[0] || (O[0] = (me) => u.$emit("reset-flow"))
            }, createSlots({
              "button-icon": withCtx(() => [
                u.$slots["clock-icon"] ? renderSlot(u.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
                u.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Hn), { key: 1 }))
              ]),
              _: 2
            }, [
              u.$slots[`${C.type}-overlay-value`] ? {
                name: "item",
                fn: withCtx(({ item: me }) => [
                  renderSlot(u.$slots, `${C.type}-overlay-value`, {
                    text: me.text,
                    value: me.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Kl = { class: "dp--tp-wrap" }, Gl = ["aria-label", "tabindex"], ql = ["tabindex"], Zl = ["aria-label"], Wa = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => false
    },
    ...xe
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMatrix: o, setTimePicker: i } = ft(), d = useSlots(), { defaultedTransitions: b, defaultedAriaLabels: P, defaultedTextInput: T, defaultedConfig: p } = Te(n), { transitionName: U, showTransition: L } = Ht(b), { hideNavigationButtons: B } = Jt(), Y = ref(null), G = ref(null), h2 = ref([]), _ = ref(null);
    onMounted(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? o([Se(Y.value)], "time") : i(true, n.timePicker);
    });
    const H = computed(() => n.range && n.modelAuto ? Ra(n.internalModelValue) : true), k = ref(false), R = (f) => ({
      hours: Array.isArray(n.hours) ? n.hours[f] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[f] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[f] : n.seconds
    }), Q = computed(() => {
      const f = [];
      if (n.range)
        for (let y = 0; y < 2; y++)
          f.push(R(y));
      else
        f.push(R(0));
      return f;
    }), q = (f, y = false, N = "") => {
      y || a("reset-flow"), k.value = f, a(f ? "overlay-opened" : "overlay-closed"), n.arrowNavigation && i(f), nextTick(() => {
        N !== "" && h2.value[0] && h2.value[0].openChildCmp(N);
      });
    }, x = computed(() => ({
      dp__btn: true,
      dp__button: true,
      dp__button_bottom: n.autoApply && !p.value.keepActionRow
    })), se = Ve(d, "timePicker"), E = (f, y, N) => n.range ? y === 0 ? [f, Q.value[1][N]] : [Q.value[0][N], f] : f, m = (f) => {
      a("update:hours", f);
    }, $ = (f) => {
      a("update:minutes", f);
    }, j = (f) => {
      a("update:seconds", f);
    }, te = () => {
      if (_.value && !T.value.enabled && !n.noOverlayFocus) {
        const f = Ur(_.value);
        f && f.focus({ preventScroll: true });
      }
    };
    return t({ toggleTimePicker: q }), (f, y) => {
      var N;
      return openBlock(), createElementBlock("div", Kl, [
        !f.timePicker && !f.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: Y,
          type: "button",
          class: normalizeClass(x.value),
          "aria-label": (N = unref(P)) == null ? void 0 : N.openTimePicker,
          tabindex: f.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            y[0] || (y[0] = withKeys((S) => q(true), ["enter"])),
            y[1] || (y[1] = withKeys((S) => q(true), ["space"]))
          ],
          onClick: y[2] || (y[2] = (S) => q(true))
        }, [
          f.$slots["clock-icon"] ? renderSlot(f.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
          f.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Hn), { key: 1 }))
        ], 42, Gl)), [
          [vShow, !unref(B)(f.hideNavigation, "time")]
        ]) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(U)(k.value),
          css: unref(L) && !f.timePickerInline
        }, {
          default: withCtx(() => {
            var S;
            return [
              k.value || f.timePicker || f.timePickerInline ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: _,
                class: normalizeClass({
                  dp__overlay: !f.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !f.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: normalizeStyle(f.timePicker ? { height: `${unref(p).modeHeight}px` } : void 0),
                tabindex: f.timePickerInline ? void 0 : 0
              }, [
                createElementVNode("div", {
                  class: normalizeClass(
                    f.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  f.$slots["time-picker-overlay"] ? renderSlot(f.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: m,
                    setMinutes: $,
                    setSeconds: j
                  }) : createCommentVNode("", true),
                  f.$slots["time-picker-overlay"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(f.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(Q.value, (w, l) => withDirectives((openBlock(), createBlock(jl, mergeProps({ key: l }, {
                      ...f.$props,
                      order: l,
                      hours: w.hours,
                      minutes: w.minutes,
                      seconds: w.seconds,
                      closeTimePickerBtn: G.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: l === 0 ? f.fixedStart : f.fixedEnd
                    }, {
                      ref_for: true,
                      ref_key: "timeInputRefs",
                      ref: h2,
                      "validate-time": (g, s) => e.validateTime(g, E(s, l, g)),
                      "onUpdate:hours": (g) => m(E(g, l, "hours")),
                      "onUpdate:minutes": (g) => $(E(g, l, "minutes")),
                      "onUpdate:seconds": (g) => j(E(g, l, "seconds")),
                      onMounted: te,
                      onOverlayClosed: te,
                      onAmPmChange: y[3] || (y[3] = (g) => f.$emit("am-pm-change", g))
                    }), createSlots({ _: 2 }, [
                      renderList(unref(se), (g, s) => ({
                        name: g,
                        fn: withCtx((D) => [
                          renderSlot(f.$slots, g, normalizeProps(guardReactiveProps(D)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vShow, l === 0 ? true : H.value]
                    ])), 128))
                  ], 2)),
                  !f.timePicker && !f.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: G,
                    type: "button",
                    class: normalizeClass(x.value),
                    "aria-label": (S = unref(P)) == null ? void 0 : S.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      y[4] || (y[4] = withKeys((w) => q(false), ["enter"])),
                      y[5] || (y[5] = withKeys((w) => q(false), ["space"]))
                    ],
                    onClick: y[6] || (y[6] = (w) => q(false))
                  }, [
                    f.$slots["calendar-icon"] ? renderSlot(f.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                    f.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ft), { key: 1 }))
                  ], 42, Zl)), [
                    [vShow, !unref(B)(f.hideNavigation, "time")]
                  ]) : createCommentVNode("", true)
                ], 2)
              ], 14, ql)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), za = (e, t, r, a) => {
  const n = (h2, _) => Array.isArray(t[h2]) ? t[h2][_] : t[h2], o = (h2) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[h2] : t.seconds : 0, i = (h2, _) => h2 ? _ !== void 0 ? ut(h2, n("hours", _), n("minutes", _), o(_)) : ut(h2, t.hours, t.minutes, o()) : setSeconds(V(), o(_)), d = (h2, _) => {
    t[h2] = _;
  }, b = (h2, _) => {
    const H = Object.fromEntries(
      Object.keys(t).map((k) => k === h2 ? [k, _] : [k, t[k]].slice())
    );
    if (e.range && !e.disableTimeRangeValidation) {
      const k = (Q) => r.value ? ut(
        r.value[Q],
        H.hours[Q],
        H.minutes[Q],
        H.seconds[Q]
      ) : null, R = (Q) => setMilliseconds(r.value[Q], 0);
      return !(pe(k(0), k(1)) && (isAfter(k(0), R(1)) || isBefore(k(1), R(0))));
    }
    return true;
  }, P = (h2, _) => {
    b(h2, _) && (d(h2, _), a && a());
  }, T = (h2) => {
    P("hours", h2);
  }, p = (h2) => {
    P("minutes", h2);
  }, U = (h2) => {
    P("seconds", h2);
  }, L = (h2, _, H, k) => {
    _ && T(h2), !_ && !H && p(h2), H && U(h2), r.value && k(r.value);
  }, B = (h2) => {
    if (h2) {
      const _ = Array.isArray(h2), H = _ ? [+h2[0].hours, +h2[1].hours] : +h2.hours, k = _ ? [+h2[0].minutes, +h2[1].minutes] : +h2.minutes, R = _ ? [+h2[0].seconds, +h2[1].seconds] : +h2.seconds;
      d("hours", H), d("minutes", k), e.enableSeconds && d("seconds", R);
    }
  }, Y = (h2, _) => {
    const H = {
      hours: Array.isArray(t.hours) ? t.hours[h2] : t.hours,
      disabledArr: []
    };
    return (_ || _ === 0) && (H.hours = _), Array.isArray(e.disabledTimes) && (H.disabledArr = e.range && Array.isArray(e.disabledTimes[h2]) ? e.disabledTimes[h2] : e.disabledTimes), H;
  }, G = computed(() => (h2, _) => {
    var _a2, _b;
    var H;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: R } = Y(h2, _), Q = k.filter((q) => +q.hours === R);
      return ((H = Q[0]) == null ? void 0 : H.minutes) === "*" ? { hours: [R], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (_a2 = Q == null ? void 0 : Q.map((q) => +q.minutes)) != null ? _a2 : [],
        seconds: (_b = Q == null ? void 0 : Q.map((q) => q.seconds ? +q.seconds : void 0)) != null ? _b : []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: d,
    updateHours: T,
    updateMinutes: p,
    updateSeconds: U,
    getSetDateTime: i,
    updateTimeValues: L,
    getSecondsValue: o,
    assignStartTime: B,
    validateTime: b,
    disabledTimesConfig: G
  };
}, Ql = (e, t) => {
  const { modelValue: r, time: a } = Vt(e, t), { defaultedStartTime: n } = Te(e), { updateTimeValues: o, getSetDateTime: i, setTime: d, assignStartTime: b, disabledTimesConfig: P, validateTime: T } = za(e, a, r), p = (H) => {
    const { hours: k, minutes: R, seconds: Q } = H;
    return { hours: +k, minutes: +R, seconds: Q ? +Q : 0 };
  }, U = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const k = p(e.startTime[0]), R = p(e.startTime[1]);
        return [set(V(), k), set(V(), R)];
      }
      const H = p(e.startTime);
      return set(V(), H);
    }
    return e.range ? [null, null] : null;
  }, L = () => {
    if (e.range) {
      const [H, k] = U();
      r.value = [i(H, 0), i(k, 1)];
    } else
      r.value = i(U());
  }, B = (H) => Array.isArray(H) ? [pt(V(H[0])), pt(V(H[1]))] : [pt(H != null ? H : V())], Y = (H, k, R) => {
    d("hours", H), d("minutes", k), d("seconds", e.enableSeconds ? R : 0);
  }, G = () => {
    const [H, k] = B(r.value);
    return e.range ? Y(
      [H.hours, k.hours],
      [H.minutes, k.minutes],
      [H.seconds, k.minutes]
    ) : Y(H.hours, H.minutes, H.seconds);
  };
  onMounted(() => {
    if (!e.shadow)
      return b(n.value), r.value ? G() : L();
  });
  const h2 = () => {
    Array.isArray(r.value) ? r.value = r.value.map((H, k) => H && i(H, k)) : r.value = i(r.value), t("time-update");
  };
  return {
    modelValue: r,
    time: a,
    disabledTimesConfig: P,
    updateTime: (H, k = true, R = false) => {
      o(H, k, R, h2);
    },
    validateTime: T
  };
}, Xl = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...xe
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, o = useSlots(), i = Ve(o, "timePicker"), { time: d, modelValue: b, disabledTimesConfig: P, updateTime: T, validateTime: p } = Ql(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: b,
      time: d,
      updateTime: T
    }) }), (L, B) => (openBlock(), createBlock(en, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: withCtx(() => [
        createVNode(Wa, mergeProps(L.$props, {
          hours: unref(d).hours,
          minutes: unref(d).minutes,
          seconds: unref(d).seconds,
          "internal-model-value": L.internalModelValue,
          "disabled-times-config": unref(P),
          "validate-time": unref(p),
          "onUpdate:hours": B[0] || (B[0] = (Y) => unref(T)(Y)),
          "onUpdate:minutes": B[1] || (B[1] = (Y) => unref(T)(Y, false)),
          "onUpdate:seconds": B[2] || (B[2] = (Y) => unref(T)(Y, false, true)),
          onAmPmChange: B[3] || (B[3] = (Y) => L.$emit("am-pm-change", Y))
        }), createSlots({ _: 2 }, [
          renderList(unref(i), (Y, G) => ({
            name: Y,
            fn: withCtx((h2) => [
              renderSlot(L.$slots, Y, normalizeProps(guardReactiveProps(h2)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Jl = { class: "dp__month_year_row" }, xl = ["aria-label", "onClick", "onKeydown"], eo = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...xe
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTransitions: o,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: d,
      defaultedFilters: b,
      defaultedConfig: P,
      defaultedHighlight: T
    } = Te(n), { transitionName: p, showTransition: U } = Ht(o), { buildMatrix: L } = ft(), { handleMonthYearChange: B, isDisabled: Y, updateMonthYear: G } = dl(n, a), { showLeftIcon: h2, showRightIcon: _ } = Jt(), H = ref(false), k = ref(false), R = ref([null, null, null, null]);
    onMounted(() => {
      a("mount");
    });
    const Q = (l) => ({
      get: () => n[l],
      set: (g) => {
        const s = l === Ze.month ? Ze.year : Ze.month;
        a("update-month-year", { [l]: g, [s]: n[s] }), l === Ze.month ? te(true) : f(true);
      }
    }), q = computed(Q(Ze.month)), x = computed(Q(Ze.year)), se = computed(() => (l) => ({
      month: n.month,
      year: n.year,
      items: l === Ze.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: G,
      toggle: l === Ze.month ? te : f
    })), E = computed(() => {
      const l = n.months.find((g) => g.value === n.month);
      return l || { text: "", value: 0 };
    }), m = computed(() => At(n.months, (l) => {
      const g = n.month === l.value, s = Bt(
        l.value,
        Oa(n.year, n.minDate),
        Ya(n.year, n.maxDate)
      ) || b.value.months.includes(l.value), D = Ha(T.value, l.value, n.year);
      return { active: g, disabled: s, highlighted: D };
    })), $ = computed(() => At(n.years, (l) => {
      const g = n.year === l.value, s = Bt(l.value, St(n.minDate), St(n.maxDate)) || b.value.years.includes(l.value), D = Kn(T.value, l.value);
      return { active: g, disabled: s, highlighted: D };
    })), j = (l, g) => {
      g !== void 0 ? l.value = g : l.value = !l.value, l.value || a("overlay-closed");
    }, te = (l = false, g) => {
      y(l), j(H, g);
    }, f = (l = false, g) => {
      y(l), j(k, g);
    }, y = (l) => {
      l || a("reset-flow");
    }, N = (l, g) => {
      n.arrowNavigation && (R.value[g] = Se(l), L(R.value, "monthYear"));
    }, S = computed(() => {
      var l, g;
      return [
        {
          type: Ze.month,
          index: 1,
          toggle: te,
          modelValue: q.value,
          updateModelValue: (s) => q.value = s,
          text: E.value.text,
          showSelectionGrid: H.value,
          items: m.value,
          ariaLabel: (l = i.value) == null ? void 0 : l.openMonthsOverlay
        },
        {
          type: Ze.year,
          index: 2,
          toggle: f,
          modelValue: x.value,
          updateModelValue: (s) => x.value = s,
          text: n.year,
          showSelectionGrid: k.value,
          items: $.value,
          ariaLabel: (g = i.value) == null ? void 0 : g.openYearsOverlay
        }
      ];
    }), w = computed(() => n.disableYearSelect ? [S.value[0]] : n.yearFirst ? [...S.value].reverse() : S.value);
    return t({
      toggleMonthPicker: te,
      toggleYearPicker: f,
      handleMonthYearChange: B
    }), (l, g) => {
      var s, D, ie;
      return openBlock(), createElementBlock("div", Jl, [
        l.$slots["month-year"] ? renderSlot(l.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: unref(G), handleMonthYearChange: unref(B), instance: e.instance }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(h2)(unref(d), e.instance) && !l.vertical ? (openBlock(), createBlock(Ot, {
            key: 0,
            "aria-label": (s = unref(i)) == null ? void 0 : s.prevMonth,
            disabled: unref(Y)(false),
            onActivate: g[0] || (g[0] = (oe) => unref(B)(false, true)),
            onSetRef: g[1] || (g[1] = (oe) => N(oe, 0))
          }, {
            default: withCtx(() => [
              l.$slots["arrow-left"] ? renderSlot(l.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
              l.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(En), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          createElementVNode("div", {
            class: normalizeClass(["dp__month_year_wrap", {
              dp__year_disable_select: l.disableYearSelect
            }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(w.value, (oe, u) => (openBlock(), createElementBlock(Fragment, {
              key: oe.type
            }, [
              createElementVNode("button", {
                ref_for: true,
                ref: (O) => N(O, u + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": oe.ariaLabel,
                onClick: oe.toggle,
                onKeydown: [
                  withKeys(withModifiers(oe.toggle, ["prevent"]), ["enter"]),
                  withKeys(withModifiers(oe.toggle, ["prevent"]), ["space"])
                ]
              }, [
                l.$slots[oe.type] ? renderSlot(l.$slots, oe.type, {
                  key: 0,
                  text: oe.text,
                  value: n[oe.type]
                }) : createCommentVNode("", true),
                l.$slots[oe.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(oe.text), 1)
                ], 64))
              ], 40, xl),
              createVNode(Transition, {
                name: unref(p)(oe.showSelectionGrid),
                css: unref(U)
              }, {
                default: withCtx(() => [
                  oe.showSelectionGrid ? (openBlock(), createBlock(Ut, {
                    key: 0,
                    items: oe.items,
                    "arrow-navigation": l.arrowNavigation,
                    "hide-navigation": l.hideNavigation,
                    "is-last": l.autoApply && !unref(P).keepActionRow,
                    "skip-button-ref": false,
                    config: l.config,
                    type: oe.type,
                    "header-refs": [],
                    "esc-close": l.escClose,
                    "text-input": l.textInput,
                    onSelected: oe.updateModelValue,
                    onToggle: oe.toggle
                  }, createSlots({
                    "button-icon": withCtx(() => [
                      l.$slots["calendar-icon"] ? renderSlot(l.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                      l.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ft), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    l.$slots[`${oe.type}-overlay-value`] ? {
                      name: "item",
                      fn: withCtx(({ item: O }) => [
                        renderSlot(l.$slots, `${oe.type}-overlay-value`, {
                          text: O.text,
                          value: O.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    l.$slots[`${oe.type}-overlay`] ? {
                      name: "overlay",
                      fn: withCtx(() => [
                        renderSlot(l.$slots, `${oe.type}-overlay`, normalizeProps(guardReactiveProps(se.value(oe.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    l.$slots[`${oe.type}-overlay-header`] ? {
                      name: "header",
                      fn: withCtx(() => [
                        renderSlot(l.$slots, `${oe.type}-overlay-header`, {
                          toggle: oe.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          unref(h2)(unref(d), e.instance) && l.vertical ? (openBlock(), createBlock(Ot, {
            key: 1,
            "aria-label": (D = unref(i)) == null ? void 0 : D.prevMonth,
            disabled: unref(Y)(false),
            onActivate: g[2] || (g[2] = (oe) => unref(B)(false, true))
          }, {
            default: withCtx(() => [
              l.$slots["arrow-up"] ? renderSlot(l.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
              l.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Vn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          unref(_)(unref(d), e.instance) ? (openBlock(), createBlock(Ot, {
            key: 2,
            ref: "rightIcon",
            disabled: unref(Y)(true),
            "aria-label": (ie = unref(i)) == null ? void 0 : ie.nextMonth,
            onActivate: g[3] || (g[3] = (oe) => unref(B)(true, true)),
            onSetRef: g[4] || (g[4] = (oe) => N(oe, l.disableYearSelect ? 2 : 3))
          }, {
            default: withCtx(() => [
              l.$slots[l.vertical ? "arrow-down" : "arrow-right"] ? renderSlot(l.$slots, l.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : createCommentVNode("", true),
              l.$slots[l.vertical ? "arrow-down" : "arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(l.vertical ? unref(Un) : unref(Fn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
}), to = ["aria-label"], no = {
  class: "dp__calendar_header",
  role: "row"
}, ao = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, ro = /* @__PURE__ */ createElementVNode("div", { class: "dp__calendar_header_separator" }, null, -1), lo = ["aria-label"], oo = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, so = { class: "dp__cell_inner" }, io = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], uo = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...xe
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMultiLevelMatrix: o } = ft(), { defaultedTransitions: i, defaultedConfig: d, defaultedAriaLabels: b, defaultedMultiCalendars: P } = Te(n), T = ref(null), p = ref({
      bottom: "",
      left: "",
      transform: ""
    }), U = ref([]), L = ref(null), B = ref(true), Y = ref(""), G = ref({ startX: 0, endX: 0, startY: 0, endY: 0 }), h2 = ref([]), _ = ref({ left: "50%" }), H = computed(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), k = computed(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Fr(n.formatLocale, n.locale, +n.weekStart));
    onMounted(() => {
      a("mount", { cmp: "calendar", refs: U }), d.value.noSwipe || L.value && (L.value.addEventListener("touchstart", te, { passive: false }), L.value.addEventListener("touchend", f, { passive: false }), L.value.addEventListener("touchmove", y, { passive: false })), n.monthChangeOnScroll && L.value && L.value.addEventListener("wheel", w, { passive: false });
    });
    const R = (D) => D ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", Q = (D, ie) => {
      if (n.transitions) {
        const oe = He(at(V(), n.month, n.year));
        Y.value = Ne(He(at(V(), D, ie)), oe) ? i.value[R(true)] : i.value[R(false)], B.value = false, nextTick(() => {
          B.value = true;
        });
      }
    }, q = computed(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName
      })
    ), x = computed(() => (D) => {
      const ie = Vr(D);
      return {
        dp__marker_dot: ie.type === "dot",
        dp__marker_line: ie.type === "line"
      };
    }), se = computed(() => (D) => pe(D, T.value)), E = computed(() => ({
      dp__calendar: true,
      dp__calendar_next: P.value.count > 0 && n.instance !== 0
    })), m = computed(() => (D) => n.hideOffsetDates ? D.current : true), $ = async (D, ie, oe) => {
      var u, O;
      if (a("set-hover-date", D), (O = (u = D.marker) == null ? void 0 : u.tooltip) != null && O.length) {
        const X = Se(U.value[ie][oe]);
        if (X) {
          const { width: C, height: ne } = X.getBoundingClientRect();
          T.value = D.value;
          let me = { left: `${C / 2}px` }, ye = -50;
          if (await nextTick(), h2.value[0]) {
            const { left: I, width: F } = h2.value[0].getBoundingClientRect();
            I < 0 && (me = { left: "0" }, ye = 0, _.value.left = `${C / 2}px`), window.innerWidth < I + F && (me = { right: "0" }, ye = 0, _.value.left = `${F - C / 2}px`);
          }
          p.value = {
            bottom: `${ne}px`,
            ...me,
            transform: `translateX(${ye}%)`
          }, a("tooltip-open", D.marker);
        }
      }
    }, j = (D) => {
      T.value && (T.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", D.marker));
    }, te = (D) => {
      G.value.startX = D.changedTouches[0].screenX, G.value.startY = D.changedTouches[0].screenY;
    }, f = (D) => {
      G.value.endX = D.changedTouches[0].screenX, G.value.endY = D.changedTouches[0].screenY, N();
    }, y = (D) => {
      n.vertical && !n.inline && D.preventDefault();
    }, N = () => {
      const D = n.vertical ? "Y" : "X";
      Math.abs(G.value[`start${D}`] - G.value[`end${D}`]) > 10 && a("handle-swipe", G.value[`start${D}`] > G.value[`end${D}`] ? "right" : "left");
    }, S = (D, ie, oe) => {
      D && (Array.isArray(U.value[ie]) ? U.value[ie][oe] = D : U.value[ie] = [D]), n.arrowNavigation && o(U.value, "calendar");
    }, w = (D) => {
      n.monthChangeOnScroll && (D.preventDefault(), a("handle-scroll", D));
    }, l = (D) => {
      const ie = D[0];
      return n.weekNumbers === "local" ? getWeek(ie.value, { weekStartsOn: +n.weekStart }) : n.weekNumbers === "iso" ? getISOWeek(ie.value) : typeof n.weekNumbers == "function" ? n.weekNumbers(ie.value) : "";
    }, g = (D, ie) => {
      it(D, d.value), a("select-date", ie);
    }, s = (D) => {
      it(D, d.value);
    };
    return t({ triggerTransition: Q }), (D, ie) => {
      var oe;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(E.value)
      }, [
        createElementVNode("div", {
          ref_key: "calendarWrapRef",
          ref: L,
          role: "grid",
          class: normalizeClass(q.value),
          "aria-label": (oe = unref(b)) == null ? void 0 : oe.calendarWrap
        }, [
          (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("div", no, [
              D.weekNumbers ? (openBlock(), createElementBlock("div", ao, toDisplayString(D.weekNumName), 1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (u, O) => (openBlock(), createElementBlock("div", {
                key: O,
                class: "dp__calendar_header_item",
                role: "gridcell"
              }, [
                D.$slots["calendar-header"] ? renderSlot(D.$slots, "calendar-header", {
                  key: 0,
                  day: u,
                  index: O
                }) : createCommentVNode("", true),
                D.$slots["calendar-header"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(u), 1)
                ], 64))
              ]))), 128))
            ]),
            ro,
            createVNode(Transition, {
              name: Y.value,
              css: !!D.transitions
            }, {
              default: withCtx(() => {
                var u;
                return [
                  B.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "rowgroup",
                    "aria-label": ((u = unref(b)) == null ? void 0 : u.calendarDays) || void 0
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(H.value, (O, X) => (openBlock(), createElementBlock("div", {
                      key: X,
                      class: "dp__calendar_row",
                      role: "row"
                    }, [
                      D.weekNumbers ? (openBlock(), createElementBlock("div", oo, [
                        createElementVNode("div", so, toDisplayString(l(O.days)), 1)
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(O.days, (C, ne) => {
                        var me, ye, I;
                        return openBlock(), createElementBlock("div", {
                          id: C.value.toISOString().split("T")[0],
                          ref_for: true,
                          ref: (F) => S(F, X, ne),
                          key: ne + X,
                          role: "gridcell",
                          class: "dp__calendar_item",
                          "aria-selected": C.classData.dp__active_date || C.classData.dp__range_start || C.classData.dp__range_start,
                          "aria-disabled": C.classData.dp__cell_disabled || void 0,
                          "aria-label": (ye = (me = unref(b)) == null ? void 0 : me.day) == null ? void 0 : ye.call(me, C),
                          tabindex: "0",
                          onClick: withModifiers((F) => g(F, C), ["prevent"]),
                          onKeydown: [
                            withKeys((F) => D.$emit("select-date", C), ["enter"]),
                            withKeys((F) => D.$emit("handle-space", C), ["space"])
                          ],
                          onMouseenter: (F) => $(C, X, ne),
                          onMouseleave: (F) => j(C)
                        }, [
                          createElementVNode("div", {
                            class: normalizeClass(["dp__cell_inner", C.classData])
                          }, [
                            D.$slots.day && m.value(C) ? renderSlot(D.$slots, "day", {
                              key: 0,
                              day: +C.text,
                              date: C.value
                            }) : createCommentVNode("", true),
                            D.$slots.day ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(C.text), 1)
                            ], 64)),
                            C.marker && m.value(C) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                              D.$slots.marker ? renderSlot(D.$slots, "marker", {
                                key: 0,
                                marker: C.marker,
                                day: +C.text,
                                date: C.value
                              }) : (openBlock(), createElementBlock("div", {
                                key: 1,
                                class: normalizeClass(x.value(C.marker)),
                                style: normalizeStyle(C.marker.color ? { backgroundColor: C.marker.color } : {})
                              }, null, 6))
                            ], 64)) : createCommentVNode("", true),
                            se.value(C.value) ? (openBlock(), createElementBlock("div", {
                              key: 3,
                              ref_for: true,
                              ref_key: "activeTooltip",
                              ref: h2,
                              class: "dp__marker_tooltip",
                              style: normalizeStyle(p.value)
                            }, [
                              (I = C.marker) != null && I.tooltip ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: s
                              }, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(C.marker.tooltip, (F, $e) => (openBlock(), createElementBlock("div", {
                                  key: $e,
                                  class: "dp__tooltip_text"
                                }, [
                                  D.$slots["marker-tooltip"] ? renderSlot(D.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: F,
                                    day: C.value
                                  }) : createCommentVNode("", true),
                                  D.$slots["marker-tooltip"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createElementVNode("div", {
                                      class: "dp__tooltip_mark",
                                      style: normalizeStyle(F.color ? { backgroundColor: F.color } : {})
                                    }, null, 4),
                                    createElementVNode("div", null, toDisplayString(F.text), 1)
                                  ], 64))
                                ]))), 128)),
                                createElementVNode("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: normalizeStyle(_.value)
                                }, null, 4)
                              ])) : createCommentVNode("", true)
                            ], 4)) : createCommentVNode("", true)
                          ], 2)
                        ], 40, io);
                      }), 128))
                    ]))), 128))
                  ], 8, lo)) : createCommentVNode("", true)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 10, to)
      ], 2);
    };
  }
}), ha = (e) => Array.isArray(e), co = (e, t, r, a) => {
  const n = ref([]), { modelValue: o, calendars: i, time: d } = Vt(e, t), { defaultedMultiCalendars: b, defaultedStartTime: P } = Te(e), { validateMonthYearInRange: T, isDisabled: p, isDateRangeAllowed: U, checkMinMaxRange: L } = Ct(e), { updateTimeValues: B, getSetDateTime: Y, setTime: G, assignStartTime: h2, validateTime: _, disabledTimesConfig: H } = za(e, d, o, a), k = computed(
    () => (v) => i.value[v] ? i.value[v].month : 0
  ), R = computed(
    () => (v) => i.value[v] ? i.value[v].year : 0
  ), Q = (v, z, A) => {
    var J, re;
    i.value[v] || (i.value[v] = { month: 0, year: 0 }), i.value[v].month = ca(z) ? (J = i.value[v]) == null ? void 0 : J.month : z, i.value[v].year = ca(A) ? (re = i.value[v]) == null ? void 0 : re.year : A;
  }, q = () => {
    e.autoApply && t("select-date");
  };
  watch(o, (v, z) => {
    JSON.stringify(v) !== JSON.stringify(z) && E();
  }), onMounted(() => {
    e.shadow || (o.value || (l(), P.value && h2(P.value)), E(true), e.focusStartDate && e.startDate && l());
  });
  const x = computed(() => {
    var v;
    return (v = e.flow) != null && v.length && !e.partialFlow ? e.flowStep === e.flow.length : true;
  }), se = () => {
    e.autoApply && x.value && t("auto-apply", e.partialFlow);
  }, E = (v = false) => {
    if (o.value)
      return Array.isArray(o.value) ? (n.value = o.value, y(v)) : $(o.value, v);
    if (b.value.count && v && !e.startDate)
      return m(V(), v);
  }, m = (v, z = false) => {
    if ((!b.value.count || !b.value.static || z) && Q(0, getMonth(v), getYear(v)), b.value.count)
      for (let A = 1; A < b.value.count; A++) {
        const J = set(V(), { month: k.value(A - 1), year: R.value(A - 1) }), re = add(J, { months: 1 });
        i.value[A] = { month: getMonth(re), year: getYear(re) };
      }
  }, $ = (v, z) => {
    m(v), G("hours", getHours(v)), G("minutes", getMinutes(v)), G("seconds", getSeconds(v)), b.value.count && z && w();
  }, j = (v) => {
    if (b.value.count) {
      if (b.value.solo)
        return 0;
      const z = getMonth(v[0]), A = getMonth(v[1]);
      return Math.abs(A - z) < b.value.count ? 0 : 1;
    }
    return 1;
  }, te = (v, z) => {
    v[1] && e.showLastInRange ? m(v[j(v)], z) : m(v[0], z);
    const A = (J, re) => [
      J(v[0]),
      v[1] ? J(v[1]) : d[re][1]
    ];
    G("hours", A(getHours, "hours")), G("minutes", A(getMinutes, "minutes")), G("seconds", A(getSeconds, "seconds"));
  }, f = (v, z) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return te(v, z);
    if (e.multiDates && z) {
      const A = v[v.length - 1];
      return $(A, z);
    }
  }, y = (v) => {
    const z = o.value;
    f(z, v), b.value.count && b.value.solo && w();
  }, N = (v, z) => {
    const A = set(V(), { month: k.value(z), year: R.value(z) }), J = v < 0 ? addMonths(A, 1) : subMonths(A, 1);
    T(getMonth(J), getYear(J), v < 0, e.preventMinMaxNavigation) && (Q(z, getMonth(J), getYear(J)), t("update-month-year", { instance: z, month: getMonth(J), year: getYear(J) }), b.value.count && !b.value.solo && S(z), r());
  }, S = (v) => {
    for (let z = v - 1; z >= 0; z--) {
      const A = subMonths(set(V(), { month: k.value(z + 1), year: R.value(z + 1) }), 1);
      Q(z, getMonth(A), getYear(A));
    }
    for (let z = v + 1; z <= b.value.count - 1; z++) {
      const A = addMonths(set(V(), { month: k.value(z - 1), year: R.value(z - 1) }), 1);
      Q(z, getMonth(A), getYear(A));
    }
  }, w = () => {
    if (Array.isArray(o.value) && o.value.length === 2) {
      const v = V(
        V(o.value[1] ? o.value[1] : addMonths(o.value[0], 1))
      ), [z, A] = [getMonth(o.value[0]), getYear(o.value[0])], [J, re] = [getMonth(o.value[1]), getYear(o.value[1])];
      (z !== J || z === J && A !== re) && b.value.solo && Q(1, getMonth(v), getYear(v));
    } else
      o.value && !Array.isArray(o.value) && (Q(0, getMonth(o.value), getYear(o.value)), m(V()));
  }, l = () => {
    e.startDate && (Q(0, getMonth(V(e.startDate)), getYear(V(e.startDate))), b.value.count && S(0));
  }, g = (v, z) => {
    e.monthChangeOnScroll && N(e.monthChangeOnScroll !== "inverse" ? -v.deltaY : v.deltaY, z);
  }, s = (v, z, A = false) => {
    e.monthChangeOnArrows && e.vertical === A && D(v, z);
  }, D = (v, z) => {
    N(v === "right" ? -1 : 1, z);
  }, ie = (v) => e.markers.find((z) => pe(va(v.value), va(z.date))), oe = (v, z) => {
    switch (e.sixWeeks === true ? "append" : e.sixWeeks) {
      case "prepend":
        return [true, false];
      case "center":
        return [v == 0, true];
      case "fair":
        return [v == 0 || z > v, true];
      case "append":
        return [false, false];
      default:
        return [false, false];
    }
  }, u = (v, z, A, J) => {
    if (e.sixWeeks && v.length < 6) {
      const re = 6 - v.length, Ue = (z.getDay() + 7 - J) % 7, wt = 6 - (A.getDay() + 7 - J) % 7, [_t, dn] = oe(Ue, wt);
      for (let mt = 1; mt <= re; mt++)
        if (dn ? !!(mt % 2) == _t : _t) {
          const Lt = v[0].days[0], cn = O(addDays(Lt.value, -7), getMonth(z));
          v.unshift({ days: cn });
        } else {
          const Lt = v[v.length - 1], cn = Lt.days[Lt.days.length - 1], Ka = O(addDays(cn.value, 1), getMonth(z));
          v.push({ days: Ka });
        }
    }
    return v;
  }, O = (v, z) => {
    const A = V(v), J = [];
    for (let re = 0; re < 7; re++) {
      const Ue = addDays(A, re), qe = getMonth(Ue) !== z;
      J.push({
        text: e.hideOffsetDates && qe ? "" : Ue.getDate(),
        value: Ue,
        current: !qe,
        classData: {}
      });
    }
    return J;
  }, X = (v, z) => {
    const A = [], J = V(Le(new Date(z, v), e.timezone)), re = V(Le(new Date(z, v + 1, 0), e.timezone)), Ue = e.weekStart, qe = startOfWeek(J, { weekStartsOn: Ue }), wt = (_t) => {
      const dn = O(_t, v);
      if (A.push({ days: dn }), !A[A.length - 1].days.some(
        (mt) => pe(He(mt.value), He(re))
      )) {
        const mt = addDays(_t, 7);
        wt(mt);
      }
    };
    return wt(qe), u(A, J, re, Ue);
  }, C = (v) => (o.value = qt(V(v.value), e.timezone, e.weekStart), t("date-update", v.value), se()), ne = (v) => {
    const z = ut(V(v.value), d.hours, d.minutes, Ke());
    t("date-update", z), e.multiDates ? Gn(z, o, e.multiDatesLimit) : o.value = z, a(), nextTick().then(() => {
      se();
    });
  }, me = (v) => e.noDisabledRange ? Ia(n.value[0], v).some((A) => p(A)) : false, ye = () => {
    n.value = o.value ? o.value.slice() : [], n.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (n.value = []);
  }, I = (v, z) => {
    const A = [V(v.value), addDays(V(v.value), +e.autoRange)];
    U(A) ? (z && F(v.value), n.value = A) : t("invalid-date", v.value);
  }, F = (v) => {
    const z = getMonth(V(v)), A = getYear(V(v));
    if (Q(0, z, A), b.value.count > 0)
      for (let J = 1; J < b.value.count; J++) {
        const re = qr(
          set(V(v), { year: k.value(J - 1), month: R.value(J - 1) })
        );
        Q(J, re.month, re.year);
      }
  }, $e = (v) => Array.isArray(o.value) && o.value.length === 2 ? e.fixedStart && (Ne(v, o.value[0]) || pe(v, o.value[0])) ? [o.value[0], v] : e.fixedEnd && (_e(v, o.value[1]) || pe(v, o.value[1])) ? [v, o.value[1]] : (t("invalid-fixed-range", v), o.value) : [], ae = (v) => {
    if (me(v.value) || !L(v.value, o.value, e.fixedStart ? 0 : 1))
      return t("invalid-date", v.value);
    n.value = $e(V(v.value));
  }, je = (v, z) => {
    if (ye(), e.autoRange)
      return I(v, z);
    if (e.fixedStart || e.fixedEnd)
      return ae(v);
    n.value[0] ? L(V(v.value), o.value) && !me(v.value) ? _e(V(v.value), V(n.value[0])) ? (n.value.unshift(V(v.value)), t("range-end", n.value[0])) : (n.value[1] = V(v.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", v.value), t("invalid-date", v.value)) : (n.value[0] = V(v.value), t("range-start", n.value[0]));
  }, Ke = (v = true) => e.enableSeconds ? Array.isArray(d.seconds) ? v ? d.seconds[0] : d.seconds[1] : d.seconds : 0, vt = (v) => {
    n.value[v] = ut(
      n.value[v],
      d.hours[v],
      d.minutes[v],
      Ke(v !== 1)
    );
  }, Ge = () => {
    var v, z;
    n.value[0] && n.value[1] && +((v = n.value) == null ? void 0 : v[0]) > +((z = n.value) == null ? void 0 : z[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, nn = () => {
    n.value.length && (n.value[0] && !n.value[1] ? vt(0) : (vt(0), vt(1), a()), Ge(), o.value = n.value.slice(), tn(n.value, t, e.autoApply, e.modelAuto));
  }, an = (v, z = false) => {
    if (p(v.value) || !v.current && e.hideOffsetDates)
      return t("invalid-date", v.value);
    if (e.weekPicker)
      return C(v);
    if (!e.range)
      return ne(v);
    ha(d.hours) && ha(d.minutes) && !e.multiDates && (je(v, z), nn());
  }, rn = (v, z) => {
    var J;
    Q(v, z.month, z.year), b.value.count && !b.value.solo && S(v), t("update-month-year", { instance: v, month: z.month, year: z.year }), r(b.value.solo ? v : void 0);
    const A = (J = e.flow) != null && J.length ? e.flow[e.flowStep] : void 0;
    !z.fromNav && (A === et.month || A === et.year) && a();
  }, ln = (v, z) => {
    Array.isArray(v) && v.length <= 2 && e.range ? o.value = v.map((A) => Le(V(A), z ? void 0 : e.timezone)) : Array.isArray(v) || (o.value = Le(V(v), z ? void 0 : e.timezone)), q(), e.multiCalendars && nextTick().then(() => E(true));
  }, on = () => {
    e.range ? o.value && Array.isArray(o.value) && o.value[0] ? o.value = _e(V(), o.value[0]) ? [V(), o.value[0]] : [o.value[0], V()] : o.value = [V()] : o.value = V(), q();
  }, sn = () => {
    if (Array.isArray(o.value))
      if (e.multiDates) {
        const v = un();
        o.value[o.value.length - 1] = Y(v);
      } else
        o.value = o.value.map((v, z) => v && Y(v, z));
    else
      o.value = Y(o.value);
    t("time-update");
  }, un = () => Array.isArray(o.value) && o.value.length ? o.value[o.value.length - 1] : null;
  return {
    calendars: i,
    modelValue: o,
    month: k,
    year: R,
    time: d,
    disabledTimesConfig: H,
    validateTime: _,
    getCalendarDays: X,
    getMarker: ie,
    handleScroll: g,
    handleSwipe: D,
    handleArrow: s,
    selectDate: an,
    updateMonthYear: rn,
    presetDate: ln,
    selectCurrentDate: on,
    updateTime: (v, z = true, A = false) => {
      B(v, z, A, sn);
    }
  };
}, fo = { key: 0 }, vo = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  props: {
    ...xe
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      calendars: o,
      month: i,
      year: d,
      modelValue: b,
      time: P,
      disabledTimesConfig: T,
      validateTime: p,
      getCalendarDays: U,
      getMarker: L,
      handleArrow: B,
      handleScroll: Y,
      handleSwipe: G,
      selectDate: h2,
      updateMonthYear: _,
      presetDate: H,
      selectCurrentDate: k,
      updateTime: R
    } = co(n, a, w, l), Q = useSlots(), { setHoverDate: q, getDayClassData: x, clearHoverDate: se } = ml(b, n), { defaultedMultiCalendars: E } = Te(n), m = ref([]), $ = ref([]), j = ref(null), te = Ve(Q, "calendar"), f = Ve(Q, "monthYear"), y = Ve(Q, "timePicker"), N = (u) => {
      n.shadow || a("mount", u);
    };
    watch(
      o,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: true }
    );
    const S = computed(() => (u) => U(i.value(u), d.value(u)).map((O) => ({
      ...O,
      days: O.days.map((X) => (X.marker = L(X), X.classData = x(X), X))
    })));
    function w(u) {
      var O;
      u || u === 0 ? (O = $.value[u]) == null || O.triggerTransition(i.value(u), d.value(u)) : $.value.forEach((X, C) => X.triggerTransition(i.value(C), d.value(C)));
    }
    function l() {
      a("update-flow-step");
    }
    const g = (u, O = false) => {
      h2(u, O), n.spaceConfirm && a("select-date");
    };
    return t({
      clearHoverDate: se,
      presetDate: H,
      selectCurrentDate: k,
      toggleMonthPicker: (u, O, X = 0) => {
        var C;
        (C = m.value[X]) == null || C.toggleMonthPicker(u, O);
      },
      toggleYearPicker: (u, O, X = 0) => {
        var C;
        (C = m.value[X]) == null || C.toggleYearPicker(u, O);
      },
      toggleTimePicker: (u, O, X) => {
        var C;
        (C = j.value) == null || C.toggleTimePicker(u, O, X);
      },
      handleArrow: B,
      updateMonthYear: _,
      getSidebarProps: () => ({
        modelValue: b,
        month: i,
        year: d,
        time: P,
        updateTime: R,
        updateMonthYear: _,
        selectDate: h2,
        presetDate: H
      })
    }), (u, O) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(en, {
        "multi-calendars": unref(E).count
      }, {
        default: withCtx(({ instance: X, index: C }) => [
          u.disableMonthYearSelect ? createCommentVNode("", true) : (openBlock(), createBlock(eo, mergeProps({
            key: 0,
            ref: (ne) => {
              ne && (m.value[C] = ne);
            },
            months: unref(_a)(u.formatLocale, u.locale, u.monthNameFormat),
            years: unref(jn)(u.yearRange, u.reverseYears),
            month: unref(i)(X),
            year: unref(d)(X),
            instance: X
          }, u.$props, {
            onMount: O[0] || (O[0] = (ne) => N(unref(bt).header)),
            onResetFlow: O[1] || (O[1] = (ne) => u.$emit("reset-flow")),
            onUpdateMonthYear: (ne) => unref(_)(X, ne),
            onOverlayClosed: O[2] || (O[2] = (ne) => u.$emit("focus-menu"))
          }), createSlots({ _: 2 }, [
            renderList(unref(f), (ne, me) => ({
              name: ne,
              fn: withCtx((ye) => [
                renderSlot(u.$slots, ne, normalizeProps(guardReactiveProps(ye)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          createVNode(uo, mergeProps({
            ref: (ne) => {
              ne && ($.value[C] = ne);
            },
            "mapped-dates": S.value(X),
            month: unref(i)(X),
            year: unref(d)(X),
            instance: X
          }, u.$props, {
            onSelectDate: (ne) => unref(h2)(ne, X !== 1),
            onHandleSpace: (ne) => g(ne, X !== 1),
            onSetHoverDate: O[3] || (O[3] = (ne) => unref(q)(ne)),
            onHandleScroll: (ne) => unref(Y)(ne, X),
            onHandleSwipe: (ne) => unref(G)(ne, X),
            onMount: O[4] || (O[4] = (ne) => N(unref(bt).calendar)),
            onResetFlow: O[5] || (O[5] = (ne) => u.$emit("reset-flow")),
            onTooltipOpen: O[6] || (O[6] = (ne) => u.$emit("tooltip-open", ne)),
            onTooltipClose: O[7] || (O[7] = (ne) => u.$emit("tooltip-close", ne))
          }), createSlots({ _: 2 }, [
            renderList(unref(te), (ne, me) => ({
              name: ne,
              fn: withCtx((ye) => [
                renderSlot(u.$slots, ne, normalizeProps(guardReactiveProps({ ...ye })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars"]),
      u.enableTimePicker ? (openBlock(), createElementBlock("div", fo, [
        u.$slots["time-picker"] ? renderSlot(u.$slots, "time-picker", normalizeProps(mergeProps({ key: 0 }, { time: unref(P), updateTime: unref(R) }))) : (openBlock(), createBlock(Wa, mergeProps({
          key: 1,
          ref_key: "timePickerRef",
          ref: j
        }, u.$props, {
          hours: unref(P).hours,
          minutes: unref(P).minutes,
          seconds: unref(P).seconds,
          "internal-model-value": u.internalModelValue,
          "disabled-times-config": unref(T),
          "validate-time": unref(p),
          onMount: O[8] || (O[8] = (X) => N(unref(bt).timePicker)),
          "onUpdate:hours": O[9] || (O[9] = (X) => unref(R)(X)),
          "onUpdate:minutes": O[10] || (O[10] = (X) => unref(R)(X, false)),
          "onUpdate:seconds": O[11] || (O[11] = (X) => unref(R)(X, false, true)),
          onResetFlow: O[12] || (O[12] = (X) => u.$emit("reset-flow")),
          onOverlayClosed: O[13] || (O[13] = (X) => u.$emit("time-picker-close")),
          onOverlayOpened: O[14] || (O[14] = (X) => u.$emit("time-picker-open", X)),
          onAmPmChange: O[15] || (O[15] = (X) => u.$emit("am-pm-change", X))
        }), createSlots({ _: 2 }, [
          renderList(unref(y), (X, C) => ({
            name: X,
            fn: withCtx((ne) => [
              renderSlot(u.$slots, X, normalizeProps(guardReactiveProps(ne)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : createCommentVNode("", true)
    ], 64));
  }
}), mo = (e, t) => {
  const r = ref(), { defaultedMultiCalendars: a, defaultedConfig: n, defaultedHighlight: o } = Te(e), { modelValue: i, year: d, month: b, calendars: P } = Vt(e, t), { isDisabled: T } = Ct(e), { selectYear: p, groupedYears: U, showYearPicker: L, isDisabled: B, toggleYearPicker: Y, handleYearSelect: G, handleYear: h2 } = La({
    modelValue: i,
    multiCalendars: a,
    highlight: o,
    calendars: P,
    month: b,
    year: d,
    props: e,
    emit: t
  }), _ = (m, $) => [m, $].map((j) => format(j, "MMMM", { locale: e.formatLocale })).join("-"), H = computed(() => (m) => i.value ? Array.isArray(i.value) ? i.value.some(($) => isSameQuarter(m, $)) : isSameQuarter(i.value, m) : false), k = (m) => {
    if (e.range) {
      if (Array.isArray(i.value)) {
        const $ = pe(m, i.value[0]) || pe(m, i.value[1]);
        return Xt(i.value, r.value, m) && !$;
      }
      return false;
    }
    return false;
  }, R = computed(() => (m) => {
    const $ = set(/* @__PURE__ */ new Date(), { year: d.value(m) });
    return eachQuarterOfInterval({
      start: startOfYear($),
      end: endOfYear($)
    }).map((j) => {
      const te = startOfQuarter(j), f = endOfQuarter(j), y = T(j), N = k(te), S = typeof o.value == "function" ? o.value({ quarter: getQuarter(te), year: getYear(te) }) : !!o.value.quarters.find(
        (w) => w.quarter === getQuarter(te) && w.year === getYear(te)
      );
      return {
        text: _(te, f),
        value: te,
        active: H.value(te),
        highlighted: S,
        disabled: y,
        isBetween: N
      };
    });
  }), Q = (m) => {
    Gn(m, i, e.multiDatesLimit), t("auto-apply", true);
  }, q = (m) => {
    const $ = qn(i, m, t);
    tn($, t, e.autoApply, e.modelAuto);
  }, x = (m) => {
    i.value = m, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: U,
    year: d,
    isDisabled: B,
    quarters: R,
    showYearPicker: L,
    modelValue: i,
    setHoverDate: (m) => {
      r.value = m;
    },
    selectYear: p,
    selectQuarter: (m, $, j) => {
      if (!j)
        return P.value[$].month = getMonth(endOfQuarter(m)), e.multiDates ? Q(m) : e.range ? q(m) : x(m);
    },
    toggleYearPicker: Y,
    handleYearSelect: G,
    handleYear: h2
  };
}, go = { class: "dp--quarter-items" }, yo = ["disabled", "onClick", "onMouseover"], ho = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...xe
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, o = useSlots(), i = Ve(o, "yearMode"), {
      defaultedMultiCalendars: d,
      defaultedConfig: b,
      groupedYears: P,
      year: T,
      isDisabled: p,
      quarters: U,
      modelValue: L,
      showYearPicker: B,
      setHoverDate: Y,
      selectQuarter: G,
      toggleYearPicker: h2,
      handleYearSelect: _,
      handleYear: H
    } = mo(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: L,
      year: T,
      selectQuarter: G,
      handleYearSelect: _,
      handleYear: H
    }) }), (R, Q) => (openBlock(), createBlock(en, {
      "multi-calendars": unref(d).count,
      stretch: ""
    }, {
      default: withCtx(({ instance: q }) => [
        createElementVNode("div", {
          class: "dp-quarter-picker-wrap",
          style: normalizeStyle({ minHeight: `${unref(b).modeHeight}px` })
        }, [
          createElementVNode("div", null, [
            createVNode(Ua, mergeProps(R.$props, {
              items: unref(P)(q),
              instance: q,
              "show-year-picker": unref(B)[q],
              year: unref(T)(q),
              "is-disabled": (x) => unref(p)(q, x),
              onHandleYear: (x) => unref(H)(q, x),
              onYearSelect: (x) => unref(_)(x, q),
              onToggleYearPicker: (x) => unref(h2)(q, x == null ? void 0 : x.flow, x == null ? void 0 : x.show)
            }), createSlots({ _: 2 }, [
              renderList(unref(i), (x, se) => ({
                name: x,
                fn: withCtx((E) => [
                  renderSlot(R.$slots, x, normalizeProps(guardReactiveProps(E)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          createElementVNode("div", go, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(U)(q), (x, se) => (openBlock(), createElementBlock("div", { key: se }, [
              createElementVNode("button", {
                type: "button",
                class: normalizeClass(["dp--qr-btn", {
                  "dp--qr-btn-active": x.active,
                  "dp--qr-btn-between": x.isBetween,
                  "dp--qr-btn-disabled": x.disabled,
                  "dp--highlighted": x.highlighted
                }]),
                disabled: x.disabled,
                onClick: (E) => unref(G)(x.value, q, x.disabled),
                onMouseover: (E) => unref(Y)(x.value)
              }, [
                R.$slots.quarter ? renderSlot(R.$slots, "quarter", {
                  key: 0,
                  value: x.value,
                  text: x.text
                }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(x.text), 1)
                ], 64))
              ], 42, yo)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
}), po = ["id", "onKeydown"], bo = {
  key: 0,
  class: "dp__sidebar_left"
}, ko = {
  key: 1,
  class: "dp--preset-dates"
}, wo = ["onClick", "onKeydown"], Do = {
  key: 2,
  class: "dp__sidebar_right"
}, Mo = {
  key: 3,
  class: "dp__action_extra"
}, pa = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...xt,
    shadow: { type: Boolean, default: false },
    openOnTop: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: false }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, o = computed(() => {
      const { openOnTop: I, ...F } = n;
      return {
        ...F,
        flowStep: x.value,
        noOverlayFocus: n.noOverlayFocus
      };
    }), { setMenuFocused: i, setShiftKey: d, control: b } = Va(), P = useSlots(), { defaultedTextInput: T, defaultedInline: p, defaultedConfig: U } = Te(n), L = ref(null), B = ref(0), Y = ref(null), G = ref(null), h2 = ref(false), _ = ref(null);
    onMounted(() => {
      if (!n.shadow) {
        h2.value = true, H(), window.addEventListener("resize", H);
        const I = Se(Y);
        if (I && !T.value.enabled && !p.value.enabled && (i(true), j()), I) {
          const F = ($e) => {
            U.value.allowPreventDefault && $e.preventDefault(), it($e, U.value, true);
          };
          I.addEventListener("pointerdown", F), I.addEventListener("mousedown", F);
        }
      }
    }), onUnmounted(() => {
      window.removeEventListener("resize", H);
    });
    const H = () => {
      const I = Se(G);
      I && (B.value = I.getBoundingClientRect().width);
    }, { arrowRight: k, arrowLeft: R, arrowDown: Q, arrowUp: q } = ft(), { flowStep: x, updateFlowStep: se, childMount: E, resetFlow: m } = gl(n, a, _), $ = computed(() => n.monthPicker ? Ol : n.yearPicker ? Nl : n.timePicker ? Xl : n.quarterPicker ? ho : vo), j = () => {
      const I = Se(Y);
      I && I.focus({ preventScroll: true });
    }, te = computed(() => {
      var I;
      return ((I = _.value) == null ? void 0 : I.getSidebarProps()) || {};
    }), f = () => {
      n.openOnTop && a("recalculate-position");
    }, y = Ve(P, "action"), N = computed(() => n.monthPicker || n.yearPicker ? Ve(P, "monthYear") : n.timePicker ? Ve(P, "timePicker") : Ve(P, "shared")), S = computed(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), w = computed(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly
    })), l = computed(
      () => ({
        dp__menu: true,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [n.menuClassName]: !!n.menuClassName
      })
    ), g = (I) => {
      it(I, U.value, true);
    }, s = () => {
      n.escClose && a("close-picker");
    }, D = (I) => {
      if (n.arrowNavigation) {
        if (I === "up")
          return q();
        if (I === "down")
          return Q();
        if (I === "left")
          return R();
        if (I === "right")
          return k();
      } else
        I === "left" || I === "up" ? X("handleArrow", "left", 0, I === "up") : X("handleArrow", "right", 0, I === "down");
    }, ie = (I) => {
      d(I.shiftKey), !n.disableMonthYearSelect && I.code === "Tab" && I.target.classList.contains("dp__menu") && b.value.shiftKeyInMenu && (I.preventDefault(), it(I, U.value, true), a("close-picker"));
    }, oe = () => {
      j(), a("time-picker-close");
    }, u = (I) => {
      var F, $e, ae;
      (F = _.value) == null || F.toggleTimePicker(false, false), ($e = _.value) == null || $e.toggleMonthPicker(false, false, I), (ae = _.value) == null || ae.toggleYearPicker(false, false, I);
    }, O = (I, F = 0) => {
      var $e, ae, je;
      return I === "month" ? ($e = _.value) == null ? void 0 : $e.toggleMonthPicker(false, true, F) : I === "year" ? (ae = _.value) == null ? void 0 : ae.toggleYearPicker(false, true, F) : I === "time" ? (je = _.value) == null ? void 0 : je.toggleTimePicker(true, false) : u(F);
    }, X = (I, ...F) => {
      var $e, ae;
      ($e = _.value) != null && $e[I] && ((ae = _.value) == null || ae[I](...F));
    }, C = () => {
      X("selectCurrentDate");
    }, ne = (I, F) => {
      X("presetDate", I, F);
    }, me = () => {
      X("clearHoverDate");
    };
    return t({
      updateMonthYear: (I, F) => {
        X("updateMonthYear", I, F);
      },
      switchView: O
    }), (I, F) => {
      var $e;
      return openBlock(), createElementBlock("div", {
        id: I.uid ? `dp-menu-${I.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: Y,
        tabindex: "0",
        role: "dialog",
        class: normalizeClass(l.value),
        onMouseleave: me,
        onClick: g,
        onKeydown: [
          withKeys(s, ["esc"]),
          F[18] || (F[18] = withKeys(withModifiers((ae) => D("left"), ["prevent"]), ["left"])),
          F[19] || (F[19] = withKeys(withModifiers((ae) => D("up"), ["prevent"]), ["up"])),
          F[20] || (F[20] = withKeys(withModifiers((ae) => D("down"), ["prevent"]), ["down"])),
          F[21] || (F[21] = withKeys(withModifiers((ae) => D("right"), ["prevent"]), ["right"])),
          ie
        ]
      }, [
        (I.disabled || I.readonly) && unref(p).enabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(w.value)
        }, null, 2)) : createCommentVNode("", true),
        !unref(p).enabled && !I.teleportCenter ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(S.value)
        }, null, 2)) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "innerMenuRef",
          ref: G,
          class: normalizeClass({
            dp__menu_content_wrapper: (($e = I.presetDates) == null ? void 0 : $e.length) || !!I.$slots["left-sidebar"] || !!I.$slots["right-sidebar"]
          }),
          style: normalizeStyle({ "--dp-menu-width": `${B.value}px` })
        }, [
          I.$slots["left-sidebar"] ? (openBlock(), createElementBlock("div", bo, [
            renderSlot(I.$slots, "left-sidebar", normalizeProps(guardReactiveProps(te.value)))
          ])) : createCommentVNode("", true),
          I.presetDates.length ? (openBlock(), createElementBlock("div", ko, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(I.presetDates, (ae, je) => (openBlock(), createElementBlock(Fragment, { key: je }, [
              ae.slot ? renderSlot(I.$slots, ae.slot, {
                key: 0,
                presetDate: ne,
                label: ae.label,
                value: ae.value
              }) : (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                style: normalizeStyle(ae.style || {}),
                class: "dp__btn dp--preset-range",
                onClick: withModifiers((Ke) => ne(ae.value, ae.noTz), ["prevent"]),
                onKeydown: [
                  withKeys(withModifiers((Ke) => ne(ae.value, ae.noTz), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((Ke) => ne(ae.value, ae.noTz), ["prevent"]), ["space"])
                ]
              }, toDisplayString(ae.label), 45, wo))
            ], 64))), 128))
          ])) : createCommentVNode("", true),
          createElementVNode("div", {
            ref_key: "calendarWrapperRef",
            ref: L,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (openBlock(), createBlock(resolveDynamicComponent($.value), mergeProps({
              ref_key: "dynCmpRef",
              ref: _
            }, o.value, {
              "flow-step": unref(x),
              onMount: unref(E),
              onUpdateFlowStep: unref(se),
              onResetFlow: unref(m),
              onFocusMenu: j,
              onSelectDate: F[0] || (F[0] = (ae) => I.$emit("select-date")),
              onDateUpdate: F[1] || (F[1] = (ae) => I.$emit("date-update", ae)),
              onTooltipOpen: F[2] || (F[2] = (ae) => I.$emit("tooltip-open", ae)),
              onTooltipClose: F[3] || (F[3] = (ae) => I.$emit("tooltip-close", ae)),
              onAutoApply: F[4] || (F[4] = (ae) => I.$emit("auto-apply", ae)),
              onRangeStart: F[5] || (F[5] = (ae) => I.$emit("range-start", ae)),
              onRangeEnd: F[6] || (F[6] = (ae) => I.$emit("range-end", ae)),
              onInvalidFixedRange: F[7] || (F[7] = (ae) => I.$emit("invalid-fixed-range", ae)),
              onTimeUpdate: F[8] || (F[8] = (ae) => I.$emit("time-update")),
              onAmPmChange: F[9] || (F[9] = (ae) => I.$emit("am-pm-change", ae)),
              onTimePickerOpen: F[10] || (F[10] = (ae) => I.$emit("time-picker-open", ae)),
              onTimePickerClose: oe,
              onRecalculatePosition: f,
              onUpdateMonthYear: F[11] || (F[11] = (ae) => I.$emit("update-month-year", ae)),
              onAutoApplyInvalid: F[12] || (F[12] = (ae) => I.$emit("auto-apply-invalid", ae)),
              onInvalidDate: F[13] || (F[13] = (ae) => I.$emit("invalid-date", ae)),
              "onUpdate:internalModelValue": F[14] || (F[14] = (ae) => I.$emit("update:internal-model-value", ae))
            }), createSlots({ _: 2 }, [
              renderList(N.value, (ae, je) => ({
                name: ae,
                fn: withCtx((Ke) => [
                  renderSlot(I.$slots, ae, normalizeProps(guardReactiveProps({ ...Ke })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          I.$slots["right-sidebar"] ? (openBlock(), createElementBlock("div", Do, [
            renderSlot(I.$slots, "right-sidebar", normalizeProps(guardReactiveProps(te.value)))
          ])) : createCommentVNode("", true),
          I.$slots["action-extra"] ? (openBlock(), createElementBlock("div", Mo, [
            I.$slots["action-extra"] ? renderSlot(I.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: C
            }) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6),
        !I.autoApply || unref(U).keepActionRow ? (openBlock(), createBlock(Ml, mergeProps({
          key: 2,
          "menu-mount": h2.value
        }, o.value, {
          "calendar-width": B.value,
          onClosePicker: F[15] || (F[15] = (ae) => I.$emit("close-picker")),
          onSelectDate: F[16] || (F[16] = (ae) => I.$emit("select-date")),
          onInvalidSelect: F[17] || (F[17] = (ae) => I.$emit("invalid-select")),
          onSelectNow: C
        }), createSlots({ _: 2 }, [
          renderList(unref(y), (ae, je) => ({
            name: ae,
            fn: withCtx((Ke) => [
              renderSlot(I.$slots, ae, normalizeProps(guardReactiveProps({ ...Ke })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : createCommentVNode("", true)
      ], 42, po);
    };
  }
}), $o = void 0, $n = () => {
}, To = (e) => getCurrentScope() ? (onScopeDispose(e), true) : false, Ao = (e, t, r, a) => {
  if (!e)
    return $n;
  let n = $n;
  const o = watch(
    () => unref(e),
    (d) => {
      n(), d && (d.addEventListener(t, r, a), n = () => {
        d.removeEventListener(t, r, a), n = $n;
      });
    },
    { immediate: true, flush: "post" }
  ), i = () => {
    o(), n();
  };
  return To(i), i;
}, So = (e, t, r, a = {}) => {
  const { window: n = $o, event: o = "pointerdown" } = a;
  return n ? Ao(n, o, (d) => {
    const b = Se(e), P = Se(t);
    !b || !P || b === d.target || d.composedPath().includes(b) || d.composedPath().includes(P) || r(d);
  }, { passive: true }) : void 0;
}, Po = /* @__PURE__ */ defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...xt
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, o = useSlots(), i = ref(false), d = toRef(n, "modelValue"), b = toRef(n, "timezone"), P = ref(null), T = ref(null), p = ref(null), U = ref(false), L = ref(null), B = ref(false), { setMenuFocused: Y, setShiftKey: G } = Va(), { clearArrowNav: h2 } = ft(), { mapDatesArrToMap: _, validateDate: H, isValidTime: k } = Ct(n), { defaultedTransitions: R, defaultedTextInput: Q, defaultedInline: q, defaultedConfig: x } = Te(n), { menuTransition: se, showTransition: E } = Ht(R);
    onMounted(() => {
      s(n.modelValue), nextTick().then(() => {
        q.value.enabled || (S(L.value).addEventListener("scroll", ne), window.addEventListener("resize", me));
      }), q.value.enabled && (i.value = true);
    });
    const m = computed(() => _());
    onUnmounted(() => {
      if (!q.value.enabled) {
        const A = S(L.value);
        A && A.removeEventListener("scroll", ne), window.removeEventListener("resize", me);
      }
    });
    const $ = Ve(o, "all", n.presetDates), j = Ve(o, "input");
    watch(
      [d, b],
      () => {
        s(d.value);
      },
      { deep: true }
    );
    const { openOnTop: te, menuStyle: f, xCorrect: y, setMenuPosition: N, getScrollableParent: S, shadowRender: w } = cl({
      menuRef: P,
      menuRefInner: T,
      inputRef: p,
      pickerWrapperRef: L,
      inline: q,
      emit: a,
      props: n,
      slots: o
    }), {
      inputValue: l,
      internalModelValue: g,
      parseExternalModelValue: s,
      emitModelValue: D,
      formatInputValue: ie,
      checkBeforeEmit: oe
    } = ul(a, n, U), u = computed(
      () => ({
        dp__main: true,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: q.value.enabled,
        dp__flex_display_with_input: q.value.input
      })
    ), O = computed(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), X = computed(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: q.value.enabled
    } : { class: "dp__outer_menu_wrap" }), C = computed(() => q.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), ne = () => {
      i.value && (x.value.closeOnScroll ? Ge() : N());
    }, me = () => {
      i.value && N();
    }, ye = () => {
      !n.disabled && !n.readonly && (w(pa, n), N(false), i.value = true, i.value && a("open"), i.value || vt(), s(n.modelValue));
    }, I = () => {
      var A;
      l.value = "", vt(), (A = p.value) == null || A.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), x.value.closeOnClearValue && Ge();
    }, F = () => {
      const A = g.value;
      return !A || !Array.isArray(A) && H(A) ? true : Array.isArray(A) ? A.length === 2 && H(A[0]) && H(A[1]) ? true : n.partialRange && !n.timePicker ? H(A[0]) : false : false;
    }, $e = () => {
      oe() && F() ? (D(), Ge()) : a("invalid-select", g.value);
    }, ae = (A) => {
      je(), D(), x.value.closeOnAutoApply && !A && Ge();
    }, je = () => {
      p.value && Q.value.enabled && p.value.setParsedDate(g.value);
    }, Ke = (A = false) => {
      n.autoApply && k(g.value) && F() && (n.range && Array.isArray(g.value) ? (n.partialRange || g.value.length === 2) && ae(A) : ae(A));
    }, vt = () => {
      Q.value.enabled || (g.value = null);
    }, Ge = () => {
      q.value.enabled || (i.value && (i.value = false, y.value = false, Y(false), G(false), h2(), a("closed"), l.value && s(d.value)), vt(), a("blur"));
    }, nn = (A, J, re = false) => {
      if (!A) {
        g.value = null;
        return;
      }
      const Ue = Array.isArray(A) ? !A.some((wt) => !H(wt)) : H(A), qe = k(A);
      Ue && qe && (g.value = A, J && (B.value = re, $e(), a("text-submit")));
    }, an = () => {
      n.autoApply && k(g.value) && D(), je();
    }, rn = () => i.value ? Ge() : ye(), ln = (A) => {
      g.value = A;
    }, on = () => {
      Q.value.enabled && (U.value = true, ie()), a("focus");
    }, sn = () => {
      if (Q.value.enabled && (U.value = false, s(n.modelValue), B.value)) {
        const A = jr(L.value);
        A == null || A.focus();
      }
      a("blur");
    }, un = (A) => {
      T.value && T.value.updateMonthYear(0, {
        month: da(A.month),
        year: da(A.year)
      });
    }, Zn = (A) => {
      s(A != null ? A : n.modelValue);
    }, v = (A, J) => {
      var re;
      (re = T.value) == null || re.switchView(A, J);
    }, z = (A) => x.value.onClickOutside ? x.value.onClickOutside(A) : Ge();
    return So(P, p, () => z(F)), t({
      closeMenu: Ge,
      selectDate: $e,
      clearValue: I,
      openMenu: ye,
      onScroll: ne,
      formatInputValue: ie,
      // exposed for testing purposes
      updateInternalModelValue: ln,
      // modify internal modelValue
      setMonthYear: un,
      parseModel: Zn,
      switchView: v
    }), (A, J) => (openBlock(), createElementBlock("div", {
      ref_key: "pickerWrapperRef",
      ref: L,
      class: normalizeClass(u.value)
    }, [
      createVNode(bl, mergeProps({
        ref_key: "inputRef",
        ref: p,
        "input-value": unref(l),
        "onUpdate:inputValue": J[0] || (J[0] = (re) => isRef(l) ? l.value = re : null),
        "is-menu-open": i.value
      }, A.$props, {
        onClear: I,
        onOpen: ye,
        onSetInputDate: nn,
        onSetEmptyDate: unref(D),
        onSelectDate: $e,
        onToggle: rn,
        onClose: Ge,
        onFocus: on,
        onBlur: sn,
        onRealBlur: J[1] || (J[1] = (re) => U.value = false)
      }), createSlots({ _: 2 }, [
        renderList(unref(j), (re, Ue) => ({
          name: re,
          fn: withCtx((qe) => [
            renderSlot(A.$slots, re, normalizeProps(guardReactiveProps(qe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      createVNode(Transition, {
        name: unref(se)(unref(te)),
        css: unref(E) && !unref(q).enabled
      }, {
        default: withCtx(() => [
          i.value ? (openBlock(), createBlock(resolveDynamicComponent(A.teleport ? Teleport : "div"), mergeProps({
            key: 0,
            ref_key: "dpWrapMenuRef",
            ref: P
          }, X.value, {
            class: { "dp--menu-wrapper": !unref(q).enabled },
            style: unref(q).enabled ? void 0 : unref(f)
          }), {
            default: withCtx(() => [
              createVNode(pa, mergeProps({
                ref_key: "dpMenuRef",
                ref: T
              }, A.$props, {
                "internal-model-value": unref(g),
                "onUpdate:internalModelValue": J[2] || (J[2] = (re) => isRef(g) ? g.value = re : null),
                class: { [O.value]: true, "dp--menu-wrapper": A.teleport },
                style: A.teleport ? unref(f) : void 0,
                "open-on-top": unref(te),
                "arr-map-values": m.value,
                "no-overlay-focus": C.value,
                onClosePicker: Ge,
                onSelectDate: $e,
                onAutoApply: Ke,
                onTimeUpdate: an,
                onFlowStep: J[3] || (J[3] = (re) => A.$emit("flow-step", re)),
                onUpdateMonthYear: J[4] || (J[4] = (re) => A.$emit("update-month-year", re)),
                onInvalidSelect: J[5] || (J[5] = (re) => A.$emit("invalid-select", unref(g))),
                onAutoApplyInvalid: J[6] || (J[6] = (re) => A.$emit("invalid-select", re)),
                onInvalidFixedRange: J[7] || (J[7] = (re) => A.$emit("invalid-fixed-range", re)),
                onRecalculatePosition: unref(N),
                onTooltipOpen: J[8] || (J[8] = (re) => A.$emit("tooltip-open", re)),
                onTooltipClose: J[9] || (J[9] = (re) => A.$emit("tooltip-close", re)),
                onTimePickerOpen: J[10] || (J[10] = (re) => A.$emit("time-picker-open", re)),
                onTimePickerClose: J[11] || (J[11] = (re) => A.$emit("time-picker-close", re)),
                onAmPmChange: J[12] || (J[12] = (re) => A.$emit("am-pm-change", re)),
                onRangeStart: J[13] || (J[13] = (re) => A.$emit("range-start", re)),
                onRangeEnd: J[14] || (J[14] = (re) => A.$emit("range-end", re)),
                onDateUpdate: J[15] || (J[15] = (re) => A.$emit("date-update", re)),
                onInvalidDate: J[16] || (J[16] = (re) => A.$emit("invalid-date", re))
              }), createSlots({ _: 2 }, [
                renderList(unref($), (re, Ue) => ({
                  name: re,
                  fn: withCtx((qe) => [
                    renderSlot(A.$slots, re, normalizeProps(guardReactiveProps({ ...qe })))
                  ])
                }))
              ]), 1040, ["internal-model-value", "class", "style", "open-on-top", "arr-map-values", "no-overlay-focus", "onRecalculatePosition"])
            ]),
            _: 3
          }, 16, ["class", "style"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 2));
  }
}), ja = /* @__PURE__ */ (() => {
  const e = Po;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ja
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Co).forEach(([e, t]) => {
  e !== "default" && (ja[e] = t);
});

export { __nuxt_component_4 as _, ja as j };
//# sourceMappingURL=main-6a42e016.mjs.map
