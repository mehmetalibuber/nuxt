globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, setHeader, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'file://C:/Projects/nuxt/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Projects/nuxt/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Projects/nuxt/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Projects/nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Projects/nuxt/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Projects/nuxt/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Projects/nuxt/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Projects/nuxt/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Projects/nuxt/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Projects/nuxt/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Projects/nuxt/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file://C:/Projects/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Projects/nuxt/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Projects/nuxt/node_modules/unctx/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, isAbsolute } from 'file://C:/Projects/nuxt/node_modules/pathe/dist/index.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://C:/Projects/nuxt/node_modules/ipx/dist/index.mjs';

const inlineAppConfig = {
  "nuxt": {
    "buildId": "360a3107-353c-4bbd-9034-c106888a123f"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "CRM_HOST": "https://testcrm.geccele.com/api/web",
    "CALL_CENTER_PHONE_NUMBER": "+90 555 55 55",
    "EMAIL_ADDRESS": "dev@geccele.com",
    "INSTAGRAM_URL": "https://www.instagram.com/geccele/",
    "FACEBOOK_URL": "https://www.facebook.com/people/Geccele/61555820816849/",
    "LINKEDIN_URL": "https://www.linkedin.com/company/geccele/mycompany/",
    "TURSAB_NUMBER": "16743",
    "DISCOVER_WITH_GECCELE_URL": "https://www.instagram.com/explore/tags/gecceleileke%C5%9Ffet/",
    "GECCELE_ADDRESS": " Altınova Sinan Mah. 245_1 Sk. Sperta No:1, İç Kapı No:10, Kepez / Antalya",
    "GECCELE_IFRAME_URL": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.0761327262276!2d30.765141075355366!3d36.912444061365065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c385ba57258a2f%3A0xfaffb31841a621cb!2zQ0xBU1MgT0ZGxLBDxLBVTQ!5e0!3m2!1str!2sus!4v1710416894472!5m2!1str!2sus",
    "i18n": {
      "experimental": {
        "jsTsFormatResource": false
      },
      "baseUrl": "",
      "locales": {
        "tr": {
          "domain": ""
        },
        "en": {
          "domain": ""
        }
      }
    },
    "snackbar": {
      "top": false,
      "bottom": true,
      "left": true,
      "right": false,
      "groups": true,
      "success": "#4caf50",
      "error": "#ff5252",
      "warning": "#fb8c00",
      "info": "#2196f3",
      "duration": 5000,
      "messageClass": "",
      "zIndex": 9999,
      "dense": false,
      "shadow": true,
      "reverse": false,
      "border": "",
      "backgroundOpacity": 0.12,
      "backgroundColor": "currentColor",
      "baseBackgroundColor": "#ffffff"
    }
  },
  "snackbar": {
    "top": false,
    "bottom": true,
    "left": true,
    "right": false,
    "groups": true,
    "success": "#4caf50",
    "error": "#ff5252",
    "warning": "#fb8c00",
    "info": "#2196f3",
    "duration": 5000,
    "messageClass": "",
    "zIndex": 9999,
    "dense": false,
    "shadow": true,
    "reverse": false,
    "border": "",
    "backgroundOpacity": 0.12,
    "backgroundColor": "currentColor",
    "baseBackgroundColor": "#ffffff"
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "C:/Projects/nuxt/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Projects/nuxt/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Projects\\nuxt\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Projects\\nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Projects\\nuxt\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Projects\\nuxt\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Projects\\nuxt\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"392ea-5BGMovA3bt3rFVg1ZaRpYs9wfw0\"",
    "mtime": "2024-06-04T14:25:16.208Z",
    "size": 234218,
    "path": "../../.output/public/favicon.ico"
  },
  "/marker-icon-2x.png": {
    "type": "image/png",
    "etag": "\"9a0-zzpTZZax9Y4KyAVAQYPI5ta9rLU\"",
    "mtime": "2024-06-04T14:25:16.231Z",
    "size": 2464,
    "path": "../../.output/public/marker-icon-2x.png"
  },
  "/marker-icon.png": {
    "type": "image/png",
    "etag": "\"9a0-zzpTZZax9Y4KyAVAQYPI5ta9rLU\"",
    "mtime": "2024-06-04T14:25:16.231Z",
    "size": 2464,
    "path": "../../.output/public/marker-icon.png"
  },
  "/marker-shadow.png": {
    "type": "image/png",
    "etag": "\"26a-e2qN9jkwOB6WYE5wUWjQUn1rgrw\"",
    "mtime": "2024-06-04T14:25:16.231Z",
    "size": 618,
    "path": "../../.output/public/marker-shadow.png"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"1225-WvBkk/Eak4Q7SfVq8zFjc+kpx6A\"",
    "mtime": "2024-06-04T14:25:16.232Z",
    "size": 4645,
    "path": "../../.output/public/sitemap.xml"
  },
  "/swiper.js": {
    "type": "application/javascript",
    "etag": "\"c5-iibR37s0mYSvaiLVBgOMigROJH4\"",
    "mtime": "2024-06-04T14:25:16.232Z",
    "size": 197,
    "path": "../../.output/public/swiper.js"
  },
  "/assets/detail-maps.png": {
    "type": "image/png",
    "etag": "\"64a97-VrNDXUL0PqhjTfXszikW1ItOmlo\"",
    "mtime": "2024-06-04T14:25:16.156Z",
    "size": 412311,
    "path": "../../.output/public/assets/detail-maps.png"
  },
  "/assets/explore-wrapper-old.jpg": {
    "type": "image/jpeg",
    "etag": "\"3dcc1-s0QDN5uWIhc7VbW5rLbj2FxBbqY\"",
    "mtime": "2024-06-04T14:25:16.158Z",
    "size": 253121,
    "path": "../../.output/public/assets/explore-wrapper-old.jpg"
  },
  "/assets/explore-wrapper.jpg": {
    "type": "image/jpeg",
    "etag": "\"11e91-/zHdx4Q/j9kUxdt856f8Hs/qNUQ\"",
    "mtime": "2024-06-04T14:25:16.159Z",
    "size": 73361,
    "path": "../../.output/public/assets/explore-wrapper.jpg"
  },
  "/assets/holiday-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"41a48-+fzjmhqf8LQlPXH69tE5tNj5QR4\"",
    "mtime": "2024-06-04T14:25:16.160Z",
    "size": 268872,
    "path": "../../.output/public/assets/holiday-1.jpg"
  },
  "/assets/holiday-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"41fe3-XZenPCViG1Hhe7uChXf+USm0SZ0\"",
    "mtime": "2024-06-04T14:25:16.161Z",
    "size": 270307,
    "path": "../../.output/public/assets/holiday-2.jpg"
  },
  "/assets/logo.png": {
    "type": "image/png",
    "etag": "\"2bbd-s07eTriiYfhGFH5x6k3Gb2EvajU\"",
    "mtime": "2024-06-04T14:25:16.206Z",
    "size": 11197,
    "path": "../../.output/public/assets/logo.png"
  },
  "/assets/search-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"bc60-88QyytYHEKL9L2QHruf+c6GxnQs\"",
    "mtime": "2024-06-04T14:25:16.206Z",
    "size": 48224,
    "path": "../../.output/public/assets/search-bg.jpg"
  },
  "/css/destinationDetailPage.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"145a-TyJkkRq/wKySA3RuT9vdId1xVFA\"",
    "mtime": "2024-06-04T14:25:16.207Z",
    "size": 5210,
    "path": "../../.output/public/css/destinationDetailPage.css"
  },
  "/css/homePage.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ae3-UzG2WCJB37dDNdcRL5FfmgsVFBw\"",
    "mtime": "2024-06-04T14:25:16.207Z",
    "size": 2787,
    "path": "../../.output/public/css/homePage.css"
  },
  "/css/mainLayout.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"504-HD17O3kV8xkSvUdxkOW3TVnbT3Y\"",
    "mtime": "2024-06-04T14:25:16.207Z",
    "size": 1284,
    "path": "../../.output/public/css/mainLayout.css"
  },
  "/css/paymentPage.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"22d9-PEGLmhdNy4pHBgTgPhlnhahZFds\"",
    "mtime": "2024-06-13T10:30:00.310Z",
    "size": 8921,
    "path": "../../.output/public/css/paymentPage.css"
  },
  "/fonts/TTCommons-Black.otf": {
    "type": "font/otf",
    "etag": "\"2aa9c-qmGL5ZeTQpnwU1+nEQ2Xd+Fi8FE\"",
    "mtime": "2024-06-04T14:25:16.210Z",
    "size": 174748,
    "path": "../../.output/public/fonts/TTCommons-Black.otf"
  },
  "/fonts/TTCommons-BlackItalic.otf": {
    "type": "font/otf",
    "etag": "\"2a8b4-nukwnoo1mXc1ZiU5J68Vj5Xb2I0\"",
    "mtime": "2024-06-04T14:25:16.212Z",
    "size": 174260,
    "path": "../../.output/public/fonts/TTCommons-BlackItalic.otf"
  },
  "/fonts/TTCommons-Bold.otf": {
    "type": "font/otf",
    "etag": "\"2aa60-4ypWGL0rCdGWrXFTWKkiNTjs5MI\"",
    "mtime": "2024-06-04T14:25:16.213Z",
    "size": 174688,
    "path": "../../.output/public/fonts/TTCommons-Bold.otf"
  },
  "/fonts/TTCommons-BoldItalic.otf": {
    "type": "font/otf",
    "etag": "\"2a9f0-UxPKoixU/U9CaStTAibThk4+UR4\"",
    "mtime": "2024-06-04T14:25:16.214Z",
    "size": 174576,
    "path": "../../.output/public/fonts/TTCommons-BoldItalic.otf"
  },
  "/fonts/TTCommons-DemiBold.otf": {
    "type": "font/otf",
    "etag": "\"2a8c4-FvLBYVbVHN+F5Q68fNabinYjzWM\"",
    "mtime": "2024-06-04T14:25:16.216Z",
    "size": 174276,
    "path": "../../.output/public/fonts/TTCommons-DemiBold.otf"
  },
  "/fonts/TTCommons-DemiBoldItalic.otf": {
    "type": "font/otf",
    "etag": "\"2aed8-vHLaB3bAiYbJ44L7CvLG5R0dj1A\"",
    "mtime": "2024-06-04T14:25:16.216Z",
    "size": 175832,
    "path": "../../.output/public/fonts/TTCommons-DemiBoldItalic.otf"
  },
  "/fonts/TTCommons-ExtraBold.otf": {
    "type": "font/otf",
    "etag": "\"2aa88-65yobfPIpj5q24WV71dFg99tqZw\"",
    "mtime": "2024-06-04T14:25:16.218Z",
    "size": 174728,
    "path": "../../.output/public/fonts/TTCommons-ExtraBold.otf"
  },
  "/fonts/TTCommons-ExtraBoldItalic.otf": {
    "type": "font/otf",
    "etag": "\"2aa00-aDgSAKbShy0qQAOyKQFUGs1DzTo\"",
    "mtime": "2024-06-04T14:25:16.219Z",
    "size": 174592,
    "path": "../../.output/public/fonts/TTCommons-ExtraBoldItalic.otf"
  },
  "/fonts/TTCommons-ExtraLight.otf": {
    "type": "font/otf",
    "etag": "\"29354-y868kKUqV5l9tW43EjBdT9RsWJs\"",
    "mtime": "2024-06-04T14:25:16.219Z",
    "size": 168788,
    "path": "../../.output/public/fonts/TTCommons-ExtraLight.otf"
  },
  "/fonts/TTCommons-ExtraLightItalic.otf": {
    "type": "font/otf",
    "etag": "\"29f9c-0C/u9TPkOnwziFvuhlMaatunquU\"",
    "mtime": "2024-06-04T14:25:16.220Z",
    "size": 171932,
    "path": "../../.output/public/fonts/TTCommons-ExtraLightItalic.otf"
  },
  "/fonts/TTCommons-Italic.otf": {
    "type": "font/otf",
    "etag": "\"2a42c-eB/4SMBBSxv/viDOpMBI6U8duTQ\"",
    "mtime": "2024-06-04T14:25:16.221Z",
    "size": 173100,
    "path": "../../.output/public/fonts/TTCommons-Italic.otf"
  },
  "/fonts/TTCommons-Light.otf": {
    "type": "font/otf",
    "etag": "\"293c4-8OXjkhXjljW81r0LRaSZU8P0F6Q\"",
    "mtime": "2024-06-04T14:25:16.222Z",
    "size": 168900,
    "path": "../../.output/public/fonts/TTCommons-Light.otf"
  },
  "/fonts/TTCommons-LightItalic.otf": {
    "type": "font/otf",
    "etag": "\"29be0-wsPnKIMObx+ilGeb/yoM+DwExzU\"",
    "mtime": "2024-06-04T14:25:16.223Z",
    "size": 170976,
    "path": "../../.output/public/fonts/TTCommons-LightItalic.otf"
  },
  "/fonts/TTCommons-Medium.otf": {
    "type": "font/otf",
    "etag": "\"2a03c-Nn92TW5lsF+YXJBPHGP2VRz2+vE\"",
    "mtime": "2024-06-04T14:25:16.224Z",
    "size": 172092,
    "path": "../../.output/public/fonts/TTCommons-Medium.otf"
  },
  "/fonts/TTCommons-MediumItalic.otf": {
    "type": "font/otf",
    "etag": "\"2a5bc-tvWjCDITyt3z18O4PBmkVSIRoPg\"",
    "mtime": "2024-06-04T14:25:16.226Z",
    "size": 173500,
    "path": "../../.output/public/fonts/TTCommons-MediumItalic.otf"
  },
  "/fonts/TTCommons-Regular.otf": {
    "type": "font/otf",
    "etag": "\"29a5c-gDtX0kLE4XGojU2fbRmNm2Jad3k\"",
    "mtime": "2024-06-04T14:25:16.226Z",
    "size": 170588,
    "path": "../../.output/public/fonts/TTCommons-Regular.otf"
  },
  "/fonts/TTCommons-Thin.otf": {
    "type": "font/otf",
    "etag": "\"28908-N2xfdS6Bf9VNbMj8Gix1TlRb0i8\"",
    "mtime": "2024-06-04T14:25:16.227Z",
    "size": 166152,
    "path": "../../.output/public/fonts/TTCommons-Thin.otf"
  },
  "/fonts/TTCommons-ThinItalic.otf": {
    "type": "font/otf",
    "etag": "\"291f0-1qBtYX/y5BdYPa+H/ter35fhZ/w\"",
    "mtime": "2024-06-04T14:25:16.228Z",
    "size": 168432,
    "path": "../../.output/public/fonts/TTCommons-ThinItalic.otf"
  },
  "/_nuxt/404-not-found.0ce702d4.js": {
    "type": "application/javascript",
    "etag": "\"77-ozo36/7+YjPrKBW9xnv+1Qz+WDM\"",
    "mtime": "2024-06-24T13:39:16.277Z",
    "size": 119,
    "path": "../../.output/public/_nuxt/404-not-found.0ce702d4.js"
  },
  "/_nuxt/about-us.bd9a3990.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80-pBFGbXSQP7UwUWw06V/Ccu95MXs\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 128,
    "path": "../../.output/public/_nuxt/about-us.bd9a3990.css"
  },
  "/_nuxt/about-us.d8b2ed05.js": {
    "type": "application/javascript",
    "etag": "\"514-/UmO25J729KjJ76RvTzvwhaKHNI\"",
    "mtime": "2024-06-24T13:39:16.287Z",
    "size": 1300,
    "path": "../../.output/public/_nuxt/about-us.d8b2ed05.js"
  },
  "/_nuxt/auth.e341ee6f.js": {
    "type": "application/javascript",
    "etag": "\"3aa-qTqCtSCFw5itnL2jNjuTqVeJw0A\"",
    "mtime": "2024-06-24T13:39:16.266Z",
    "size": 938,
    "path": "../../.output/public/_nuxt/auth.e341ee6f.js"
  },
  "/_nuxt/AuthComposable.df3a7fcf.js": {
    "type": "application/javascript",
    "etag": "\"943-74zSaRHdS07o46R1r8wUqXAs0Pg\"",
    "mtime": "2024-06-24T13:39:16.276Z",
    "size": 2371,
    "path": "../../.output/public/_nuxt/AuthComposable.df3a7fcf.js"
  },
  "/_nuxt/authentication.8b144ef4.js": {
    "type": "application/javascript",
    "etag": "\"2ad-3NlgvK9cscHX72IYgrXjroJEvLw\"",
    "mtime": "2024-06-24T13:39:16.266Z",
    "size": 685,
    "path": "../../.output/public/_nuxt/authentication.8b144ef4.js"
  },
  "/_nuxt/axiosConfig.8655b34e.js": {
    "type": "application/javascript",
    "etag": "\"7f49-eJmqX7eqKNCO+mgOdUPzCtbtpEk\"",
    "mtime": "2024-06-24T13:39:16.302Z",
    "size": 32585,
    "path": "../../.output/public/_nuxt/axiosConfig.8655b34e.js"
  },
  "/_nuxt/booking-conditions.25135b6c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-mEFW8VdO9zyUaeP7t/6GCzKuNpw\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/booking-conditions.25135b6c.css"
  },
  "/_nuxt/booking-conditions.2a801aaf.js": {
    "type": "application/javascript",
    "etag": "\"45d-vYeqpLb5u80WJ2h19slKFap0SCE\"",
    "mtime": "2024-06-24T13:39:16.276Z",
    "size": 1117,
    "path": "../../.output/public/_nuxt/booking-conditions.2a801aaf.js"
  },
  "/_nuxt/Breadcrumb.1cf6d170.js": {
    "type": "application/javascript",
    "etag": "\"32a-bKTFbWBScwO8iaTRrX3V0Bje00g\"",
    "mtime": "2024-06-24T13:39:16.280Z",
    "size": 810,
    "path": "../../.output/public/_nuxt/Breadcrumb.1cf6d170.js"
  },
  "/_nuxt/Breadcrumb.564eef23.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"106-wBI7+FkJj4IrWZNGIGgijI4tbio\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 262,
    "path": "../../.output/public/_nuxt/Breadcrumb.564eef23.css"
  },
  "/_nuxt/call-center.f910239b.js": {
    "type": "application/javascript",
    "etag": "\"74-Ik3b0wVT856K4rWRO+yWstfVC3o\"",
    "mtime": "2024-06-24T13:39:16.287Z",
    "size": 116,
    "path": "../../.output/public/_nuxt/call-center.f910239b.js"
  },
  "/_nuxt/cancellation-and-refund-conditions.19bc688f.js": {
    "type": "application/javascript",
    "etag": "\"407-v6UjlqZzrla9d0SKFlkht2/DmOM\"",
    "mtime": "2024-06-24T13:39:16.276Z",
    "size": 1031,
    "path": "../../.output/public/_nuxt/cancellation-and-refund-conditions.19bc688f.js"
  },
  "/_nuxt/cancellation-and-refund-conditions.8a2ea8a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-3V8hHw0tGcZGx1aBPz6Py51qXsA\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/cancellation-and-refund-conditions.8a2ea8a6.css"
  },
  "/_nuxt/components.1d7c931f.js": {
    "type": "application/javascript",
    "etag": "\"5a2-0aekhQzJi89kc9qs6fLf0nrOzA8\"",
    "mtime": "2024-06-24T13:39:16.276Z",
    "size": 1442,
    "path": "../../.output/public/_nuxt/components.1d7c931f.js"
  },
  "/_nuxt/composables.c8d1a857.js": {
    "type": "application/javascript",
    "etag": "\"c6-/lK2r4TMPgn1JoAmCVOoMFCpkM4\"",
    "mtime": "2024-06-24T13:39:16.288Z",
    "size": 198,
    "path": "../../.output/public/_nuxt/composables.c8d1a857.js"
  },
  "/_nuxt/contact.1261771b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ef-Jbq26fjT5oG7+gg2lT2ErbkAIso\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 751,
    "path": "../../.output/public/_nuxt/contact.1261771b.css"
  },
  "/_nuxt/contact.e9d761fe.js": {
    "type": "application/javascript",
    "etag": "\"85b-+rpf9HIS70RA2ZxzxQuC0W6C+yo\"",
    "mtime": "2024-06-24T13:39:16.287Z",
    "size": 2139,
    "path": "../../.output/public/_nuxt/contact.e9d761fe.js"
  },
  "/_nuxt/cookie-policy.250ef620.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-bSr090tvqwebzGfhPgy+dkqG/T0\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/cookie-policy.250ef620.css"
  },
  "/_nuxt/cookie-policy.e597a6f6.js": {
    "type": "application/javascript",
    "etag": "\"4cb-fSzcmeC1MEWlp5JDttTW6ksQcjc\"",
    "mtime": "2024-06-24T13:39:16.287Z",
    "size": 1227,
    "path": "../../.output/public/_nuxt/cookie-policy.e597a6f6.js"
  },
  "/_nuxt/cookie.2086fefe.js": {
    "type": "application/javascript",
    "etag": "\"b8d-A7+4gQ/tAHgqYCnW6LqN/gn3b+Q\"",
    "mtime": "2024-06-24T13:39:16.276Z",
    "size": 2957,
    "path": "../../.output/public/_nuxt/cookie.2086fefe.js"
  },
  "/_nuxt/default.66aec831.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b4-uXUn6yj/eWMcwVppjwV9NR6DF74\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 1204,
    "path": "../../.output/public/_nuxt/default.66aec831.css"
  },
  "/_nuxt/default.74797754.js": {
    "type": "application/javascript",
    "etag": "\"ff1-rrmrRsRhhcddVaCjrrvJsyR0pR8\"",
    "mtime": "2024-06-24T13:39:16.291Z",
    "size": 4081,
    "path": "../../.output/public/_nuxt/default.74797754.js"
  },
  "/_nuxt/DestinationComposable.dccc8390.js": {
    "type": "application/javascript",
    "etag": "\"9d2-H74a54VqKy1z9oLfF81IQy4taoM\"",
    "mtime": "2024-06-24T13:39:16.266Z",
    "size": 2514,
    "path": "../../.output/public/_nuxt/DestinationComposable.dccc8390.js"
  },
  "/_nuxt/detail-maps.bf7d0fca.js": {
    "type": "application/javascript",
    "etag": "\"6e-9xtupl3s9g5geF+l2mV2+Vjoo5s\"",
    "mtime": "2024-06-24T13:39:16.267Z",
    "size": 110,
    "path": "../../.output/public/_nuxt/detail-maps.bf7d0fca.js"
  },
  "/_nuxt/distance-sales-contract.b439ef55.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-WjZeIcKJUGyNmC3cpAEXk4cKIdI\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/distance-sales-contract.b439ef55.css"
  },
  "/_nuxt/distance-sales-contract.bebf9a06.js": {
    "type": "application/javascript",
    "etag": "\"583-02SVictYdKY0txrQ84DFvA/F0Kg\"",
    "mtime": "2024-06-24T13:39:16.281Z",
    "size": 1411,
    "path": "../../.output/public/_nuxt/distance-sales-contract.bebf9a06.js"
  },
  "/_nuxt/empty.aa555965.js": {
    "type": "application/javascript",
    "etag": "\"106-eSLnQN+nu3tva3gngqcSbY9GY9s\"",
    "mtime": "2024-06-24T13:39:16.290Z",
    "size": 262,
    "path": "../../.output/public/_nuxt/empty.aa555965.js"
  },
  "/_nuxt/en.eeda720b.js": {
    "type": "application/javascript",
    "etag": "\"1018e-m+rypCxYqP19qO7c4ze5kd5ifFw\"",
    "mtime": "2024-06-24T13:39:16.287Z",
    "size": 65934,
    "path": "../../.output/public/_nuxt/en.eeda720b.js"
  },
  "/_nuxt/entry.3d77523d.js": {
    "type": "application/javascript",
    "etag": "\"4228c-luFrpJXcysYBH+tKJfdf2H+xjRs\"",
    "mtime": "2024-06-24T13:39:16.303Z",
    "size": 270988,
    "path": "../../.output/public/_nuxt/entry.3d77523d.js"
  },
  "/_nuxt/error-404.34a36d28.js": {
    "type": "application/javascript",
    "etag": "\"c8d-pcJ93mh/VyFopDZYIia/W4j9F68\"",
    "mtime": "2024-06-24T13:39:16.277Z",
    "size": 3213,
    "path": "../../.output/public/_nuxt/error-404.34a36d28.js"
  },
  "/_nuxt/error-404.fda4aa6a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dec-F9rzPXmdId67uZ2uFJiPA8OB3mk\"",
    "mtime": "2024-06-24T13:39:16.234Z",
    "size": 3564,
    "path": "../../.output/public/_nuxt/error-404.fda4aa6a.css"
  },
  "/_nuxt/error-500.7cbaa0cf.js": {
    "type": "application/javascript",
    "etag": "\"b16-bar1IKtsBryDP/UYJJq0iHbEOko\"",
    "mtime": "2024-06-24T13:39:16.288Z",
    "size": 2838,
    "path": "../../.output/public/_nuxt/error-500.7cbaa0cf.js"
  },
  "/_nuxt/error-500.88db509d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-Juu+xpvMf6y/oBf0WsXvPEH0ie4\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 1884,
    "path": "../../.output/public/_nuxt/error-500.88db509d.css"
  },
  "/_nuxt/error.9b0884e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"471-0hkeM88tMClvjkL3/427JnLqlMo\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 1137,
    "path": "../../.output/public/_nuxt/error.9b0884e1.css"
  },
  "/_nuxt/error.9f4e4d17.js": {
    "type": "application/javascript",
    "etag": "\"4e2-0lGnjdfB+61IyfkoN0sVCTwdLK8\"",
    "mtime": "2024-06-24T13:39:16.288Z",
    "size": 1250,
    "path": "../../.output/public/_nuxt/error.9f4e4d17.js"
  },
  "/_nuxt/experience.827ece5f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"df4-793fOoB+XDV90KyJm+fsnqmH3Xg\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 3572,
    "path": "../../.output/public/_nuxt/experience.827ece5f.css"
  },
  "/_nuxt/experience.dfb5220c.js": {
    "type": "application/javascript",
    "etag": "\"138d-wJOG4tAcSdnN/TXhD8jkfBq4gco\"",
    "mtime": "2024-06-24T13:39:16.282Z",
    "size": 5005,
    "path": "../../.output/public/_nuxt/experience.dfb5220c.js"
  },
  "/_nuxt/fail.02de4d81.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"214-OqhSlhqBa+Y1DDw+YZHjZuFFluQ\"",
    "mtime": "2024-06-24T13:39:16.261Z",
    "size": 532,
    "path": "../../.output/public/_nuxt/fail.02de4d81.css"
  },
  "/_nuxt/fail.622a6b8f.js": {
    "type": "application/javascript",
    "etag": "\"582-qfwLVmrR4cBJUvjKR7cVAvXw1e8\"",
    "mtime": "2024-06-24T13:39:16.280Z",
    "size": 1410,
    "path": "../../.output/public/_nuxt/fail.622a6b8f.js"
  },
  "/_nuxt/Footer.0ca3d7ec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a55-a2QXxVfUej7H5QQ4CAFQkINiRdw\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 6741,
    "path": "../../.output/public/_nuxt/Footer.0ca3d7ec.css"
  },
  "/_nuxt/Footer.973e5d70.js": {
    "type": "application/javascript",
    "etag": "\"3587-gfx9ay7J/SXuQD2ha2VjJE8O0/4\"",
    "mtime": "2024-06-24T13:39:16.289Z",
    "size": 13703,
    "path": "../../.output/public/_nuxt/Footer.973e5d70.js"
  },
  "/_nuxt/forgot-password.40fd6c83.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41b-CW7I9R6lIQ8vMtX6Y6gfck04180\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 1051,
    "path": "../../.output/public/_nuxt/forgot-password.40fd6c83.css"
  },
  "/_nuxt/forgot-password.6d6a1cdb.js": {
    "type": "application/javascript",
    "etag": "\"7f2-aj+y2wC/xNFsjrthSDXIxyPuGYg\"",
    "mtime": "2024-06-24T13:39:16.278Z",
    "size": 2034,
    "path": "../../.output/public/_nuxt/forgot-password.6d6a1cdb.js"
  },
  "/_nuxt/gdpr.0d36ebf5.js": {
    "type": "application/javascript",
    "etag": "\"3bd-WsvSSWoLJBb4WSmWtsiNCY716hA\"",
    "mtime": "2024-06-24T13:39:16.277Z",
    "size": 957,
    "path": "../../.output/public/_nuxt/gdpr.0d36ebf5.js"
  },
  "/_nuxt/gdpr.8e1e5711.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-HwEnIdCZ1fryBQgA7t3kw0J+Z7I\"",
    "mtime": "2024-06-24T13:39:16.243Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/gdpr.8e1e5711.css"
  },
  "/_nuxt/how-to-make-a-reservation.815f373b.js": {
    "type": "application/javascript",
    "etag": "\"1065-U8aC9rO1TVHcXn8Hnf96+efUDVI\"",
    "mtime": "2024-06-24T13:39:16.277Z",
    "size": 4197,
    "path": "../../.output/public/_nuxt/how-to-make-a-reservation.815f373b.js"
  },
  "/_nuxt/how-to-make-a-reservation.d0484061.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"44b-L2DnIdl2U+DEopS//qhBMT8WQYI\"",
    "mtime": "2024-06-24T13:39:16.246Z",
    "size": 1099,
    "path": "../../.output/public/_nuxt/how-to-make-a-reservation.d0484061.css"
  },
  "/_nuxt/html2pdf.es.638c4a8c.js": {
    "type": "application/javascript",
    "etag": "\"77db5-0Zhtg7c6kxzatqt2FFTAqy71iQo\"",
    "mtime": "2024-06-24T13:39:16.303Z",
    "size": 490933,
    "path": "../../.output/public/_nuxt/html2pdf.es.638c4a8c.js"
  },
  "/_nuxt/index.08e8f06b.js": {
    "type": "application/javascript",
    "etag": "\"43d4-Ohl70W8e1tL0Hy2F+5cutVeYUJI\"",
    "mtime": "2024-06-24T13:39:16.302Z",
    "size": 17364,
    "path": "../../.output/public/_nuxt/index.08e8f06b.js"
  },
  "/_nuxt/index.0f9df0c5.js": {
    "type": "application/javascript",
    "etag": "\"3efb-ejn9RqoZe9bjPYzjzFoavTgmdOs\"",
    "mtime": "2024-06-24T13:39:16.297Z",
    "size": 16123,
    "path": "../../.output/public/_nuxt/index.0f9df0c5.js"
  },
  "/_nuxt/index.33de2405.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c7e-5WtnChSp27X+39//VHO0Df5ELr8\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 7294,
    "path": "../../.output/public/_nuxt/index.33de2405.css"
  },
  "/_nuxt/index.59101282.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f1d-HY+AnUGnCEIs6FIIkPYiRDbZ9Cw\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 7965,
    "path": "../../.output/public/_nuxt/index.59101282.css"
  },
  "/_nuxt/index.bf0e941b.js": {
    "type": "application/javascript",
    "etag": "\"1c27-qtVyuAoXFzHLIEYzMGDJ+szmN9M\"",
    "mtime": "2024-06-24T13:39:16.287Z",
    "size": 7207,
    "path": "../../.output/public/_nuxt/index.bf0e941b.js"
  },
  "/_nuxt/index.c3c01e7d.js": {
    "type": "application/javascript",
    "etag": "\"95-z4Ypsd1CaH4hbAi4/zIYePFhoQk\"",
    "mtime": "2024-06-24T13:39:16.302Z",
    "size": 149,
    "path": "../../.output/public/_nuxt/index.c3c01e7d.js"
  },
  "/_nuxt/index.fca5d888.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ebb-pWUQnyI50fjBd982rIB4xiHgHaE\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 7867,
    "path": "../../.output/public/_nuxt/index.fca5d888.css"
  },
  "/_nuxt/leaflet-src.20dcb89b.js": {
    "type": "application/javascript",
    "etag": "\"249f1-04PAq2/Dmp3trGpfuKf3jsKYk2s\"",
    "mtime": "2024-06-24T13:39:16.302Z",
    "size": 150001,
    "path": "../../.output/public/_nuxt/leaflet-src.20dcb89b.js"
  },
  "/_nuxt/leaflet.8b466953.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3ae0-d79g2dz2O47BVH1dYfVvWj23pLo\"",
    "mtime": "2024-06-24T13:39:16.261Z",
    "size": 15072,
    "path": "../../.output/public/_nuxt/leaflet.8b466953.css"
  },
  "/_nuxt/leaflet.963c0fdf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17d-pzZlmJaqy3uGLhe/MW8M7BSMJH4\"",
    "mtime": "2024-06-24T13:39:16.249Z",
    "size": 381,
    "path": "../../.output/public/_nuxt/leaflet.963c0fdf.css"
  },
  "/_nuxt/leaflet.f7dbaae6.js": {
    "type": "application/javascript",
    "etag": "\"8af-8EpMlWEy6BlGhjzoOJhk0PcR/5A\"",
    "mtime": "2024-06-24T13:39:16.278Z",
    "size": 2223,
    "path": "../../.output/public/_nuxt/leaflet.f7dbaae6.js"
  },
  "/_nuxt/login-cover.8a71d540.js": {
    "type": "application/javascript",
    "etag": "\"7b-kPyWRfaX3/bsgLSvER02rXp0ol0\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 123,
    "path": "../../.output/public/_nuxt/login-cover.8a71d540.js"
  },
  "/_nuxt/login.3eea7fd4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9a9-AWe7HcYbVdOSiKJ0lRXEi0ZoNbg\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 2473,
    "path": "../../.output/public/_nuxt/login.3eea7fd4.css"
  },
  "/_nuxt/login.e3a7abf1.js": {
    "type": "application/javascript",
    "etag": "\"20bd-h7EIGSVpRQB0LJ3uWTHo3LfOeZg\"",
    "mtime": "2024-06-24T13:39:16.288Z",
    "size": 8381,
    "path": "../../.output/public/_nuxt/login.e3a7abf1.js"
  },
  "/_nuxt/logout.5ddef2bb.js": {
    "type": "application/javascript",
    "etag": "\"6f-/y5EIfbOFED3qo8IV/SL0xn0mk0\"",
    "mtime": "2024-06-24T13:39:16.275Z",
    "size": 111,
    "path": "../../.output/public/_nuxt/logout.5ddef2bb.js"
  },
  "/_nuxt/main.335c012f.js": {
    "type": "application/javascript",
    "etag": "\"3064b-X2ic6nCs0j/f1h/+NlZN0ZWXrYg\"",
    "mtime": "2024-06-24T13:39:16.303Z",
    "size": 198219,
    "path": "../../.output/public/_nuxt/main.335c012f.js"
  },
  "/_nuxt/main.d5bdf4de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5bec-TaV2WFW0XU94pU54VAdf+rqRdCM\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 23532,
    "path": "../../.output/public/_nuxt/main.d5bdf4de.css"
  },
  "/_nuxt/nuxt-img.49e4a8aa.js": {
    "type": "application/javascript",
    "etag": "\"238d-VOj28oNZf9VlGvlwP8dQVHwLe0g\"",
    "mtime": "2024-06-24T13:39:16.277Z",
    "size": 9101,
    "path": "../../.output/public/_nuxt/nuxt-img.49e4a8aa.js"
  },
  "/_nuxt/nuxt-link.afe0e146.js": {
    "type": "application/javascript",
    "etag": "\"fd0-7bgUJP7Klyqr0m2HB+L26Bzura4\"",
    "mtime": "2024-06-24T13:39:16.279Z",
    "size": 4048,
    "path": "../../.output/public/_nuxt/nuxt-link.afe0e146.js"
  },
  "/_nuxt/panic-fail.af76b293.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"214-5VGTmCXgqiZnCOToJJa6XTLXiHs\"",
    "mtime": "2024-06-24T13:39:16.262Z",
    "size": 532,
    "path": "../../.output/public/_nuxt/panic-fail.af76b293.css"
  },
  "/_nuxt/panic-fail.ce857cfb.js": {
    "type": "application/javascript",
    "etag": "\"5bb-ZL1p8TMw9ALgKMp5VRS+b5DAARQ\"",
    "mtime": "2024-06-24T13:39:16.288Z",
    "size": 1467,
    "path": "../../.output/public/_nuxt/panic-fail.ce857cfb.js"
  },
  "/_nuxt/preliminary-information-form.7b0de461.js": {
    "type": "application/javascript",
    "etag": "\"3c6-GuAv3QgmVyqwVIg8RR00ilItyk8\"",
    "mtime": "2024-06-24T13:39:16.302Z",
    "size": 966,
    "path": "../../.output/public/_nuxt/preliminary-information-form.7b0de461.js"
  },
  "/_nuxt/preliminary-information-form.97f12076.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-Y/YptyzTQ8daulAwMnZ+yp/UV8w\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/preliminary-information-form.97f12076.css"
  },
  "/_nuxt/privacy-policy.2878eeb3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-DY8BMD1IaHCHE02gvHCHoMIBv8Q\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/privacy-policy.2878eeb3.css"
  },
  "/_nuxt/privacy-policy.a535b5d4.js": {
    "type": "application/javascript",
    "etag": "\"667-18ngQkoISUqUdQmtEDxeBQLbmj4\"",
    "mtime": "2024-06-24T13:39:16.288Z",
    "size": 1639,
    "path": "../../.output/public/_nuxt/privacy-policy.a535b5d4.js"
  },
  "/_nuxt/profile.231760af.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fda-FdIBDLpK3N7Jfv06hLlLTlpfJ34\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 4058,
    "path": "../../.output/public/_nuxt/profile.231760af.css"
  },
  "/_nuxt/profile.ec25d31e.js": {
    "type": "application/javascript",
    "etag": "\"28eb-6xS8cnyOmkvdJjoeSTpiTg2a238\"",
    "mtime": "2024-06-24T13:39:16.292Z",
    "size": 10475,
    "path": "../../.output/public/_nuxt/profile.ec25d31e.js"
  },
  "/_nuxt/register.092f10ad.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"550-ZHXdjyL97W7lrI/tdKdWu4GoRbY\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 1360,
    "path": "../../.output/public/_nuxt/register.092f10ad.css"
  },
  "/_nuxt/register.38812eec.js": {
    "type": "application/javascript",
    "etag": "\"1892-NSLmUmWzkxpKjfZc5ML8ItVD/Ds\"",
    "mtime": "2024-06-24T13:39:16.294Z",
    "size": 6290,
    "path": "../../.output/public/_nuxt/register.38812eec.js"
  },
  "/_nuxt/ReservationComposable.006bc55b.js": {
    "type": "application/javascript",
    "etag": "\"51a-xHL40lJUAlM4isD2RW9LVKda3co\"",
    "mtime": "2024-06-24T13:39:16.266Z",
    "size": 1306,
    "path": "../../.output/public/_nuxt/ReservationComposable.006bc55b.js"
  },
  "/_nuxt/success.11602da3.js": {
    "type": "application/javascript",
    "etag": "\"bc9-IwidvwWzhmvMYq84anEPm74J444\"",
    "mtime": "2024-06-24T13:39:16.279Z",
    "size": 3017,
    "path": "../../.output/public/_nuxt/success.11602da3.js"
  },
  "/_nuxt/success.9e0afff4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"230-FbyAKYMTwuQBKLyTkwFIGhE9XKc\"",
    "mtime": "2024-06-24T13:39:16.262Z",
    "size": 560,
    "path": "../../.output/public/_nuxt/success.9e0afff4.css"
  },
  "/_nuxt/tr.ec43d5c7.js": {
    "type": "application/javascript",
    "etag": "\"11824-vHXfWYGgkKRiAlRdGF3M7Zpcgkk\"",
    "mtime": "2024-06-24T13:39:16.289Z",
    "size": 71716,
    "path": "../../.output/public/_nuxt/tr.ec43d5c7.js"
  },
  "/_nuxt/vue.f36acd1f.1390b80d.js": {
    "type": "application/javascript",
    "etag": "\"18c-zXf/JMPsdSPJ2QvIXyQIuRtcVG0\"",
    "mtime": "2024-06-24T13:39:16.270Z",
    "size": 396,
    "path": "../../.output/public/_nuxt/vue.f36acd1f.1390b80d.js"
  },
  "/_nuxt/vueperslides.70b74abc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1bd8-PRd2eesjSBOCDavgpoPwxOcuHY0\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 7128,
    "path": "../../.output/public/_nuxt/vueperslides.70b74abc.css"
  },
  "/_nuxt/vueperslides.781314fa.js": {
    "type": "application/javascript",
    "etag": "\"8002-kj8ecklS6GrQuTkrncItaJNFkIg\"",
    "mtime": "2024-06-24T13:39:16.291Z",
    "size": 32770,
    "path": "../../.output/public/_nuxt/vueperslides.781314fa.js"
  },
  "/_nuxt/_commonjsHelpers.725317a4.js": {
    "type": "application/javascript",
    "etag": "\"ec-QtY1KaLA8vnMK3l2IvajpxyuPmY\"",
    "mtime": "2024-06-24T13:39:16.276Z",
    "size": 236,
    "path": "../../.output/public/_nuxt/_commonjsHelpers.725317a4.js"
  },
  "/_nuxt/_id_.561e1717.js": {
    "type": "application/javascript",
    "etag": "\"d025-uj5yuhY9mQz1upnSUm5/d8Obvy0\"",
    "mtime": "2024-06-24T13:39:16.302Z",
    "size": 53285,
    "path": "../../.output/public/_nuxt/_id_.561e1717.js"
  },
  "/_nuxt/_id_.9213428d.js": {
    "type": "application/javascript",
    "etag": "\"f3-oXU30w8X1fjLAvWVm7pYAGhabRE\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 243,
    "path": "../../.output/public/_nuxt/_id_.9213428d.js"
  },
  "/_nuxt/_id_.9b3eb401.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18f4-PET6KnMAGr0Y8iK6SI4uIcyEycU\"",
    "mtime": "2024-06-24T13:39:16.244Z",
    "size": 6388,
    "path": "../../.output/public/_nuxt/_id_.9b3eb401.css"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2024-06-24T13:39:16.263Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/assets/campaigns/campaigns-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"18cf9-Ac71rOPVvVF2gzyoacFwAUS4EG8\"",
    "mtime": "2024-06-04T14:25:16.145Z",
    "size": 101625,
    "path": "../../.output/public/assets/campaigns/campaigns-1.jpg"
  },
  "/assets/campaigns/campaigns-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1924e-1S7i7RXh5l0j7QjSKn1SYf75l0I\"",
    "mtime": "2024-06-04T14:25:16.147Z",
    "size": 102990,
    "path": "../../.output/public/assets/campaigns/campaigns-2.jpg"
  },
  "/assets/campaigns/campaigns-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"14707-WQ8ZUfnRRcBahE63FcbYlbsLVcE\"",
    "mtime": "2024-06-04T14:25:16.148Z",
    "size": 83719,
    "path": "../../.output/public/assets/campaigns/campaigns-3.jpg"
  },
  "/assets/campaigns/campaigns-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"17703-CYgIeO2SyzSacVp1iVqgaY7MbF8\"",
    "mtime": "2024-06-04T14:25:16.149Z",
    "size": 96003,
    "path": "../../.output/public/assets/campaigns/campaigns-4.jpg"
  },
  "/assets/home/according-to-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"af01-96zP816yYxA8svKdSkve7krf38A\"",
    "mtime": "2024-06-04T14:25:16.162Z",
    "size": 44801,
    "path": "../../.output/public/assets/home/according-to-1.jpg"
  },
  "/assets/home/according-to-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1682c-QfLeuJ4+HCC1EoJuufogKrL4uPw\"",
    "mtime": "2024-06-04T14:25:16.163Z",
    "size": 92204,
    "path": "../../.output/public/assets/home/according-to-2.jpg"
  },
  "/assets/home/according-to-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"18dd8-GPr8AznkJOa6GS3W02XwcagLPVg\"",
    "mtime": "2024-06-04T14:25:16.163Z",
    "size": 101848,
    "path": "../../.output/public/assets/home/according-to-3.jpg"
  },
  "/assets/home/according-to-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"149fa-hLJv67FanUL3ZHFYVBRLROK4WvE\"",
    "mtime": "2024-06-04T14:25:16.164Z",
    "size": 84474,
    "path": "../../.output/public/assets/home/according-to-4.jpg"
  },
  "/assets/home/experience-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"19ca2-SPj257ipJxU4Zlxdq6h7hTpg4s0\"",
    "mtime": "2024-06-04T14:25:16.164Z",
    "size": 105634,
    "path": "../../.output/public/assets/home/experience-1.jpg"
  },
  "/assets/home/experience-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f31d-bk6/W/498vclPZuNShapv2gX5aE\"",
    "mtime": "2024-06-04T14:25:16.166Z",
    "size": 62237,
    "path": "../../.output/public/assets/home/experience-2.jpg"
  },
  "/assets/home/holiday-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"41a48-+fzjmhqf8LQlPXH69tE5tNj5QR4\"",
    "mtime": "2024-06-04T14:25:16.167Z",
    "size": 268872,
    "path": "../../.output/public/assets/home/holiday-1.jpg"
  },
  "/assets/home/holiday-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"41fe3-XZenPCViG1Hhe7uChXf+USm0SZ0\"",
    "mtime": "2024-06-04T14:25:16.168Z",
    "size": 270307,
    "path": "../../.output/public/assets/home/holiday-2.jpg"
  },
  "/assets/home/hotel-exp.jpg": {
    "type": "image/jpeg",
    "etag": "\"1650d-AYglX1ERIHkjkCUwKCKMIOl+ivY\"",
    "mtime": "2024-06-04T14:25:16.179Z",
    "size": 91405,
    "path": "../../.output/public/assets/home/hotel-exp.jpg"
  },
  "/assets/home/main-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"26a5e-DM3derswAeB0lTtU4tPug40bLeQ\"",
    "mtime": "2024-06-04T14:25:16.181Z",
    "size": 158302,
    "path": "../../.output/public/assets/home/main-1.jpg"
  },
  "/assets/home/main-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eb8c-0U+1VmIRp+GLcNWhHsPrgCHB43w\"",
    "mtime": "2024-06-04T14:25:16.183Z",
    "size": 453516,
    "path": "../../.output/public/assets/home/main-2.jpg"
  },
  "/assets/images/reservation.jpg": {
    "type": "image/jpeg",
    "etag": "\"234d5-QCFPXNDCqGi7P3u0Ifh4T8i5UKI\"",
    "mtime": "2024-06-04T14:25:16.197Z",
    "size": 144597,
    "path": "../../.output/public/assets/images/reservation.jpg"
  },
  "/assets/icons/add.svg": {
    "type": "image/svg+xml",
    "etag": "\"180-nxgGaOj9nybl1Z4DjlA6cL4EIEA\"",
    "mtime": "2024-06-04T14:25:16.183Z",
    "size": 384,
    "path": "../../.output/public/assets/icons/add.svg"
  },
  "/assets/icons/apartment.png": {
    "type": "image/png",
    "etag": "\"201a-6EzrojpxOwwFulC0FW+qFTzOwzk\"",
    "mtime": "2024-06-04T14:25:16.184Z",
    "size": 8218,
    "path": "../../.output/public/assets/icons/apartment.png"
  },
  "/assets/icons/arrow-down.svg": {
    "type": "image/svg+xml",
    "etag": "\"1db-nvY0qx/dCI8is/qxArICYV1qxbs\"",
    "mtime": "2024-06-04T14:25:16.184Z",
    "size": 475,
    "path": "../../.output/public/assets/icons/arrow-down.svg"
  },
  "/assets/icons/bath.svg": {
    "type": "image/svg+xml",
    "etag": "\"13c9-FmfPVpSr3T9GrrmD13e9KXtMxIc\"",
    "mtime": "2024-06-04T14:25:16.184Z",
    "size": 5065,
    "path": "../../.output/public/assets/icons/bath.svg"
  },
  "/assets/icons/bed.svg": {
    "type": "image/svg+xml",
    "etag": "\"7c9-8Uw1G8BQFvgEaLL0wgs5pHlVtS8\"",
    "mtime": "2024-06-04T14:25:16.185Z",
    "size": 1993,
    "path": "../../.output/public/assets/icons/bed.svg"
  },
  "/assets/icons/bell.png": {
    "type": "image/png",
    "etag": "\"898-B1/hNpv0HgvtBdXbVvi0whndmkA\"",
    "mtime": "2024-06-04T14:25:16.185Z",
    "size": 2200,
    "path": "../../.output/public/assets/icons/bell.png"
  },
  "/assets/icons/call-center.png": {
    "type": "image/png",
    "etag": "\"786-7fX5S06vg6ZEzEFSEtYi2iYe4iQ\"",
    "mtime": "2024-06-04T14:25:16.185Z",
    "size": 1926,
    "path": "../../.output/public/assets/icons/call-center.png"
  },
  "/assets/icons/call.png": {
    "type": "image/png",
    "etag": "\"d02-W9Z7NUBPf9nou9JckjuDxROt+lE\"",
    "mtime": "2024-06-04T14:25:16.185Z",
    "size": 3330,
    "path": "../../.output/public/assets/icons/call.png"
  },
  "/assets/icons/customer-services.png": {
    "type": "image/png",
    "etag": "\"f260-7me8PrOWWgGt1wQSut2NWTD/mgI\"",
    "mtime": "2024-06-04T14:25:16.185Z",
    "size": 62048,
    "path": "../../.output/public/assets/icons/customer-services.png"
  },
  "/assets/icons/en.png": {
    "type": "image/png",
    "etag": "\"15d6-5g0aBXqFVxAb0nkAhahzc9ibPJw\"",
    "mtime": "2024-06-04T14:25:16.185Z",
    "size": 5590,
    "path": "../../.output/public/assets/icons/en.png"
  },
  "/assets/icons/en.svg": {
    "type": "image/svg+xml",
    "etag": "\"839-0ZFG7anirwkvSAqsEVqhFQGVvv4\"",
    "mtime": "2024-01-14T19:09:30.513Z",
    "size": 2105,
    "path": "../../.output/public/assets/icons/en.svg"
  },
  "/assets/icons/error.png": {
    "type": "image/png",
    "etag": "\"56b-mg+Fcyf2XHUBU5Yxdf3UZREdXMo\"",
    "mtime": "2024-06-13T07:53:19.635Z",
    "size": 1387,
    "path": "../../.output/public/assets/icons/error.png"
  },
  "/assets/icons/facebook.png": {
    "type": "image/png",
    "etag": "\"520-AuB+5iMUBT4Y/71Mq0DDetFc1Tw\"",
    "mtime": "2024-06-04T14:25:16.186Z",
    "size": 1312,
    "path": "../../.output/public/assets/icons/facebook.png"
  },
  "/assets/icons/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"173-id6PkERVkg91StOy+vyHLSUCSTA\"",
    "mtime": "2024-06-04T14:25:16.186Z",
    "size": 371,
    "path": "../../.output/public/assets/icons/facebook.svg"
  },
  "/assets/icons/filter.svg": {
    "type": "image/svg+xml",
    "etag": "\"f9-zV9hPPKXiLXabvXT99B7/guT438\"",
    "mtime": "2024-06-04T14:25:16.186Z",
    "size": 249,
    "path": "../../.output/public/assets/icons/filter.svg"
  },
  "/assets/icons/find.svg": {
    "type": "image/svg+xml",
    "etag": "\"23b-1bFJyuLsZeS2UIOTb1SMYsBXMZI\"",
    "mtime": "2024-06-04T14:25:16.186Z",
    "size": 571,
    "path": "../../.output/public/assets/icons/find.svg"
  },
  "/assets/icons/honesty.png": {
    "type": "image/png",
    "etag": "\"1403-MgKpsv5foJSot/44SonEwBbLGfU\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 5123,
    "path": "../../.output/public/assets/icons/honesty.png"
  },
  "/assets/icons/hotel.png": {
    "type": "image/png",
    "etag": "\"1095-H3w4oqAXR9R96RyNb3LG51yOHA4\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 4245,
    "path": "../../.output/public/assets/icons/hotel.png"
  },
  "/assets/icons/instagram.png": {
    "type": "image/png",
    "etag": "\"1323-VH3WpMlPhI5IR0udjRhn3hIkHMw\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 4899,
    "path": "../../.output/public/assets/icons/instagram.png"
  },
  "/assets/icons/instagram.svg": {
    "type": "image/svg+xml",
    "etag": "\"4fe-gS49KPS/M60iHK+nuVopIPlPW4o\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 1278,
    "path": "../../.output/public/assets/icons/instagram.svg"
  },
  "/assets/icons/linkedin.png": {
    "type": "image/png",
    "etag": "\"759-/uoXKweRvD+c2qE5SKOVcly4Kns\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 1881,
    "path": "../../.output/public/assets/icons/linkedin.png"
  },
  "/assets/icons/logout.png": {
    "type": "image/png",
    "etag": "\"2eb2-OJcejG9YThweTyDljEUdbzwtIak\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 11954,
    "path": "../../.output/public/assets/icons/logout.png"
  },
  "/assets/icons/people.svg": {
    "type": "image/svg+xml",
    "etag": "\"553-KNd+Jkni3x87zjKfi87bjLqQO3s\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 1363,
    "path": "../../.output/public/assets/icons/people.svg"
  },
  "/assets/icons/person-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"293-XVYc9TtI7MjXxdYzVGCXE1U7tYw\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 659,
    "path": "../../.output/public/assets/icons/person-white.svg"
  },
  "/assets/icons/person.svg": {
    "type": "image/svg+xml",
    "etag": "\"296-7aghAe6P/iq7LcU8MX5MZWqBjMk\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 662,
    "path": "../../.output/public/assets/icons/person.svg"
  },
  "/assets/icons/phone-call.png": {
    "type": "image/png",
    "etag": "\"1665-FsPpCC03NHhkOj8K/C6oQRfir6w\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 5733,
    "path": "../../.output/public/assets/icons/phone-call.png"
  },
  "/assets/icons/res-okey.png": {
    "type": "image/png",
    "etag": "\"656-ZZ+gQJ3lkpWlPg8m0YMyTqeBZGg\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 1622,
    "path": "../../.output/public/assets/icons/res-okey.png"
  },
  "/assets/icons/review.png": {
    "type": "image/png",
    "etag": "\"1b0e-3ARb37AjREtCj8N8fp+r/pMFFTg\"",
    "mtime": "2024-06-04T14:25:16.189Z",
    "size": 6926,
    "path": "../../.output/public/assets/icons/review.png"
  },
  "/assets/icons/right-arrow.png": {
    "type": "image/png",
    "etag": "\"1c10-gNcFYCAhd41wtzoJo8ZNB0tvI6U\"",
    "mtime": "2024-06-04T14:25:16.189Z",
    "size": 7184,
    "path": "../../.output/public/assets/icons/right-arrow.png"
  },
  "/assets/icons/search.png": {
    "type": "image/png",
    "etag": "\"1ec9-c3TwTmRJMQZ3gJiFggpGoKFf8nk\"",
    "mtime": "2024-06-04T14:25:16.189Z",
    "size": 7881,
    "path": "../../.output/public/assets/icons/search.png"
  },
  "/assets/icons/sign-out.svg": {
    "type": "image/svg+xml",
    "etag": "\"c0-gA9gvXvANfHmZVdJyoVyb/ShF4M\"",
    "mtime": "2024-06-04T14:25:16.189Z",
    "size": 192,
    "path": "../../.output/public/assets/icons/sign-out.svg"
  },
  "/assets/icons/square-meter.svg": {
    "type": "image/svg+xml",
    "etag": "\"138-pg1gIMOC4c7rWLxXnrDOPZDvbjE\"",
    "mtime": "2024-06-04T14:25:16.190Z",
    "size": 312,
    "path": "../../.output/public/assets/icons/square-meter.svg"
  },
  "/assets/icons/support.png": {
    "type": "image/png",
    "etag": "\"1fde-1FoxQeoSMjGHWYKIJygX+bRjf/s\"",
    "mtime": "2024-06-04T14:25:16.190Z",
    "size": 8158,
    "path": "../../.output/public/assets/icons/support.png"
  },
  "/assets/icons/tr.png": {
    "type": "image/png",
    "etag": "\"f57-EF35PcFMAtIJw/7kvlsqSchA9DA\"",
    "mtime": "2024-06-04T14:25:16.190Z",
    "size": 3927,
    "path": "../../.output/public/assets/icons/tr.png"
  },
  "/assets/icons/tr.svg": {
    "type": "image/svg+xml",
    "etag": "\"4a7-ykCOK+aVvad/GR8Sy/VnPXai6k0\"",
    "mtime": "2024-01-14T19:10:17.952Z",
    "size": 1191,
    "path": "../../.output/public/assets/icons/tr.svg"
  },
  "/assets/icons/user-fill.svg": {
    "type": "image/svg+xml",
    "etag": "\"167-Q4EDZeUotBc/s1pYoce9fY3Ck1E\"",
    "mtime": "2024-06-04T14:25:16.190Z",
    "size": 359,
    "path": "../../.output/public/assets/icons/user-fill.svg"
  },
  "/assets/icons/user.png": {
    "type": "image/png",
    "etag": "\"3222-xfQb/4xecR1ZryRfGhcJY0TQeZM\"",
    "mtime": "2024-06-04T14:25:16.190Z",
    "size": 12834,
    "path": "../../.output/public/assets/icons/user.png"
  },
  "/assets/icons/user.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b6-+fi3H9r9rC7NfjvBJwOgEqc8L/E\"",
    "mtime": "2024-06-04T14:25:16.190Z",
    "size": 694,
    "path": "../../.output/public/assets/icons/user.svg"
  },
  "/assets/icons/villa.png": {
    "type": "image/png",
    "etag": "\"14ba-bHBT8uh1O7FwgHaoCp4kb/nBG20\"",
    "mtime": "2024-06-04T14:25:16.191Z",
    "size": 5306,
    "path": "../../.output/public/assets/icons/villa.png"
  },
  "/assets/icons/wc.svg": {
    "type": "image/svg+xml",
    "etag": "\"b12-0jM9xPOLFQ8j7vOAeUv6e0Sk8sA\"",
    "mtime": "2024-06-04T14:25:16.191Z",
    "size": 2834,
    "path": "../../.output/public/assets/icons/wc.svg"
  },
  "/assets/icons/youtube.png": {
    "type": "image/png",
    "etag": "\"6a9-YJsLMWCx1/Te9qnznVmsbFKPzAM\"",
    "mtime": "2024-06-04T14:25:16.191Z",
    "size": 1705,
    "path": "../../.output/public/assets/icons/youtube.png"
  },
  "/assets/layout/404-not-found.png": {
    "type": "image/png",
    "etag": "\"f39d-EZq2ran4NChepmVYfhowhBJIaPw\"",
    "mtime": "2024-06-04T14:25:16.204Z",
    "size": 62365,
    "path": "../../.output/public/assets/layout/404-not-found.png"
  },
  "/assets/layout/by-geccele-logo.png": {
    "type": "image/png",
    "etag": "\"3434-59/WH3oiPo3B8olZEKO3j4bUOVY\"",
    "mtime": "2024-06-04T14:25:16.204Z",
    "size": 13364,
    "path": "../../.output/public/assets/layout/by-geccele-logo.png"
  },
  "/assets/layout/geccele-logo.png": {
    "type": "image/png",
    "etag": "\"2574-TqrznH9KrkvwE8iEH3x2Yi1Z3/E\"",
    "mtime": "2024-06-04T14:25:16.205Z",
    "size": 9588,
    "path": "../../.output/public/assets/layout/geccele-logo.png"
  },
  "/assets/layout/tursab-dds.png": {
    "type": "image/png",
    "etag": "\"48d4-05Yx3I8Mxgn4FB/DTDMz68o9VY8\"",
    "mtime": "2024-06-04T14:25:16.205Z",
    "size": 18644,
    "path": "../../.output/public/assets/layout/tursab-dds.png"
  },
  "/assets/layout/tursab-logo.png": {
    "type": "image/png",
    "etag": "\"1d7bd-sUNNm8JqnUCplezgMp+W+L3+B1E\"",
    "mtime": "2024-06-04T14:25:16.206Z",
    "size": 120765,
    "path": "../../.output/public/assets/layout/tursab-logo.png"
  },
  "/css/components/footer.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e0a-WE9K1bsKNcwqRiTQcyvxCoRK10M\"",
    "mtime": "2024-06-04T14:25:16.206Z",
    "size": 3594,
    "path": "../../.output/public/css/components/footer.css"
  },
  "/lib/Bootstrap/bootstrap.bundle.min.js": {
    "type": "application/javascript",
    "etag": "\"1f7ac-zx9F9Dnw9+TwOSEeV6hjfFmVLdY\"",
    "mtime": "2024-06-11T12:12:54.645Z",
    "size": 128940,
    "path": "../../.output/public/lib/Bootstrap/bootstrap.bundle.min.js"
  },
  "/lib/Bootstrap/bootstrap.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"38dd3-4L7f0++XAgDSVq+UemHj/sSK8lY\"",
    "mtime": "2024-06-04T14:25:16.229Z",
    "size": 232915,
    "path": "../../.output/public/lib/Bootstrap/bootstrap.min.css"
  },
  "/lib/Bootstrap/bootstrap.min.js": {
    "type": "application/javascript",
    "etag": "\"10777-ZAppcCVdvRUi4uVJwTsLd7xvzOY\"",
    "mtime": "2024-06-04T14:25:16.229Z",
    "size": 67447,
    "path": "../../.output/public/lib/Bootstrap/bootstrap.min.js"
  },
  "/lib/Swiper/swiper-bundle.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c6b-pQn39/S+yCpXNt9s/5AFXUQgNx0\"",
    "mtime": "2024-06-04T14:25:16.230Z",
    "size": 23659,
    "path": "../../.output/public/lib/Swiper/swiper-bundle.css"
  },
  "/lib/Swiper/swiper-bundle.min.js": {
    "type": "application/javascript",
    "etag": "\"2a25a-u8iwdRZHude81/zItV3skYtqri4\"",
    "mtime": "2024-06-04T14:25:16.231Z",
    "size": 172634,
    "path": "../../.output/public/lib/Swiper/swiper-bundle.min.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-zeY/WI2/OB3ARCWrNl72znyqkes\"",
    "mtime": "2024-06-24T13:39:23.077Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/assets/campaigns/md/campaigns-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7305-eagriEQt/UV5ulUQCiDIcsyy9Kg\"",
    "mtime": "2024-06-04T14:25:16.149Z",
    "size": 29445,
    "path": "../../.output/public/assets/campaigns/md/campaigns-1.jpg"
  },
  "/assets/campaigns/md/campaigns-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"117f7-ajHSXMwK58VlerYpeg/7s8is1ec\"",
    "mtime": "2024-06-04T14:25:16.150Z",
    "size": 71671,
    "path": "../../.output/public/assets/campaigns/md/campaigns-2.jpg"
  },
  "/assets/campaigns/md/campaigns-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"7d83-7nTbK+0xdlZ/LEv0foZXAxm/QZc\"",
    "mtime": "2024-06-04T14:25:16.150Z",
    "size": 32131,
    "path": "../../.output/public/assets/campaigns/md/campaigns-3.jpg"
  },
  "/assets/campaigns/md/campaigns-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"6cd7-hYikZWVZOzLkhn3/LVSdpcdRWOg\"",
    "mtime": "2024-06-04T14:25:16.150Z",
    "size": 27863,
    "path": "../../.output/public/assets/campaigns/md/campaigns-4.jpg"
  },
  "/assets/campaigns/md/campaigns-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"965f-IvZqG2dJyNMyxEn07cLtQggT/94\"",
    "mtime": "2024-06-04T14:25:16.151Z",
    "size": 38495,
    "path": "../../.output/public/assets/campaigns/md/campaigns-5.jpg"
  },
  "/assets/campaigns/webP/campaigns-1.webp": {
    "type": "image/webp",
    "etag": "\"11772-UGsCiFufZ/2v5pAU4zmBPGfPYJc\"",
    "mtime": "2024-06-04T14:25:16.151Z",
    "size": 71538,
    "path": "../../.output/public/assets/campaigns/webP/campaigns-1.webp"
  },
  "/assets/campaigns/webP/campaigns-2.webp": {
    "type": "image/webp",
    "etag": "\"f9fa-sW3c3+YGCGEzjUnB2gXG9ok0CZ8\"",
    "mtime": "2024-06-04T14:25:16.152Z",
    "size": 63994,
    "path": "../../.output/public/assets/campaigns/webP/campaigns-2.webp"
  },
  "/assets/campaigns/webP/campaigns-3.webp": {
    "type": "image/webp",
    "etag": "\"d186-sncc2kVzFQQ6CFtoj6vjeLkHOOY\"",
    "mtime": "2024-06-04T14:25:16.152Z",
    "size": 53638,
    "path": "../../.output/public/assets/campaigns/webP/campaigns-3.webp"
  },
  "/assets/campaigns/webP/campaigns-4.webp": {
    "type": "image/webp",
    "etag": "\"fea0-nciAuBLlkq6z0Z6ma0TM20A1B0A\"",
    "mtime": "2024-06-04T14:25:16.153Z",
    "size": 65184,
    "path": "../../.output/public/assets/campaigns/webP/campaigns-4.webp"
  },
  "/assets/campaigns/xs/campaigns-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7486-/oBZV632W89SuMjfgbQELequKiM\"",
    "mtime": "2024-06-04T14:25:16.153Z",
    "size": 29830,
    "path": "../../.output/public/assets/campaigns/xs/campaigns-1.jpg"
  },
  "/assets/campaigns/xs/campaigns-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"855b-J447zLgfzeagVGqSuC4Z+e/u6rI\"",
    "mtime": "2024-06-04T14:25:16.154Z",
    "size": 34139,
    "path": "../../.output/public/assets/campaigns/xs/campaigns-2.jpg"
  },
  "/assets/campaigns/xs/campaigns-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"73c6-wlB6zDYthpDgJ1k/DLS2EgT09Ic\"",
    "mtime": "2024-06-04T14:25:16.154Z",
    "size": 29638,
    "path": "../../.output/public/assets/campaigns/xs/campaigns-3.jpg"
  },
  "/assets/campaigns/xs/campaigns-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b0b-l0aSmTn+DuCTLXUnr1s9wzFxlAU\"",
    "mtime": "2024-06-04T14:25:16.154Z",
    "size": 23307,
    "path": "../../.output/public/assets/campaigns/xs/campaigns-4.jpg"
  },
  "/assets/campaigns/xs/campaigns-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"84c3-ZoqT3Yl96WRoIlQWzDRR9quvwQk\"",
    "mtime": "2024-06-04T14:25:16.154Z",
    "size": 33987,
    "path": "../../.output/public/assets/campaigns/xs/campaigns-5.jpg"
  },
  "/assets/home/home-gallery/place-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"7aa91-P44bFM3uCHy5CCpjdenNtaElZDY\"",
    "mtime": "2024-06-04T14:25:16.172Z",
    "size": 502417,
    "path": "../../.output/public/assets/home/home-gallery/place-1.jpg"
  },
  "/assets/home/home-gallery/place-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"46c3f-XcwbPIqSf0/lngfjOiPO6Tz9zM0\"",
    "mtime": "2024-06-04T14:25:16.174Z",
    "size": 289855,
    "path": "../../.output/public/assets/home/home-gallery/place-2.jpg"
  },
  "/assets/home/home-gallery/place-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"480b9-smZqAUkPXK2kEs1yLuiHML/j5cE\"",
    "mtime": "2024-06-04T14:25:16.176Z",
    "size": 295097,
    "path": "../../.output/public/assets/home/home-gallery/place-3.jpg"
  },
  "/assets/home/home-gallery/place-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2618e-F8Pzu35qeTTFvwtJkrLI5ZVG19U\"",
    "mtime": "2024-06-04T14:25:16.177Z",
    "size": 156046,
    "path": "../../.output/public/assets/home/home-gallery/place-4.jpg"
  },
  "/assets/home/home-gallery/place-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"518b6-9ej3iO8g49LjkSQauglqTSXnUvg\"",
    "mtime": "2024-06-04T14:25:16.179Z",
    "size": 334006,
    "path": "../../.output/public/assets/home/home-gallery/place-5.jpg"
  },
  "/assets/images/experience/experience-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"467e5-QdJlZ190d/yhVk2s9rmztR1WXjY\"",
    "mtime": "2024-06-04T14:25:16.192Z",
    "size": 288741,
    "path": "../../.output/public/assets/images/experience/experience-1.jpg"
  },
  "/assets/images/experience/experience-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"bb79-srRVvc0lbxsk1fwumURyh8Bg794\"",
    "mtime": "2024-06-04T14:25:16.193Z",
    "size": 47993,
    "path": "../../.output/public/assets/images/experience/experience-2.jpg"
  },
  "/assets/images/experience/experience-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"db5b-B1uXqYraCrXD2B3r3bXuBpLfeTc\"",
    "mtime": "2024-06-04T14:25:16.193Z",
    "size": 56155,
    "path": "../../.output/public/assets/images/experience/experience-3.jpg"
  },
  "/assets/images/experience/experience-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"bf6c-thE7JBuDgp052aFQm3o8wl5hOuI\"",
    "mtime": "2024-06-04T14:25:16.194Z",
    "size": 49004,
    "path": "../../.output/public/assets/images/experience/experience-4.jpg"
  },
  "/assets/images/experience/experience-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad2a-mSsLHwqjxPpZ+F9fHDYvFe5kOgA\"",
    "mtime": "2024-06-04T14:25:16.194Z",
    "size": 44330,
    "path": "../../.output/public/assets/images/experience/experience-5.jpg"
  },
  "/assets/images/experience/experience-main.jpg": {
    "type": "image/jpeg",
    "etag": "\"3a4c6-hp+mCFRZ5CVJu3ynvOx+8xaANyw\"",
    "mtime": "2024-06-04T14:25:16.196Z",
    "size": 238790,
    "path": "../../.output/public/assets/images/experience/experience-main.jpg"
  },
  "/assets/images/user/login-cover.jpeg": {
    "type": "image/jpeg",
    "etag": "\"78406-tUDjwUCpfhfM2pyaHfnpgoLQZZk\"",
    "mtime": "2024-06-04T14:25:16.201Z",
    "size": 492550,
    "path": "../../.output/public/assets/images/user/login-cover.jpeg"
  },
  "/assets/images/user/login-md.jpg": {
    "type": "image/jpeg",
    "etag": "\"27636-28vaN4UFSMo6POIeksmYgnAHrpw\"",
    "mtime": "2024-06-04T14:25:16.202Z",
    "size": 161334,
    "path": "../../.output/public/assets/images/user/login-md.jpg"
  },
  "/assets/images/user/login.jpg": {
    "type": "image/jpeg",
    "etag": "\"4ac46-RRppmmlj64SRZ31IuHoI0jtS8UI\"",
    "mtime": "2024-06-04T14:25:16.203Z",
    "size": 306246,
    "path": "../../.output/public/assets/images/user/login.jpg"
  },
  "/assets/icons/payment/mastercard.png": {
    "type": "image/png",
    "etag": "\"d4c-IMT3MbwfSWPGMj/lJ37Zi0K948k\"",
    "mtime": "2024-06-04T14:25:16.187Z",
    "size": 3404,
    "path": "../../.output/public/assets/icons/payment/mastercard.png"
  },
  "/assets/icons/payment/tursab.png": {
    "type": "image/png",
    "etag": "\"187a-Zu+XqjrCvBPXRH0VnsJApHlRmXM\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 6266,
    "path": "../../.output/public/assets/icons/payment/tursab.png"
  },
  "/assets/icons/payment/visa.png": {
    "type": "image/png",
    "etag": "\"aef-10iut7TYPs8frSS11PPY918Cd90\"",
    "mtime": "2024-06-04T14:25:16.188Z",
    "size": 2799,
    "path": "../../.output/public/assets/icons/payment/visa.png"
  },
  "/assets/lib/Bootstrap/bootstrap.bundle.min.js": {
    "type": "application/javascript",
    "etag": "\"1f7ac-zx9F9Dnw9+TwOSEeV6hjfFmVLdY\"",
    "mtime": "2024-06-11T12:12:54.645Z",
    "size": 128940,
    "path": "../../.output/public/assets/lib/Bootstrap/bootstrap.bundle.min.js"
  },
  "/assets/lib/Bootstrap/bootstrap.min.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"38dd3-4L7f0++XAgDSVq+UemHj/sSK8lY\"",
    "mtime": "2024-06-04T14:25:16.229Z",
    "size": 232915,
    "path": "../../.output/public/assets/lib/Bootstrap/bootstrap.min.css"
  },
  "/assets/lib/Bootstrap/bootstrap.min.js": {
    "type": "application/javascript",
    "etag": "\"10777-ZAppcCVdvRUi4uVJwTsLd7xvzOY\"",
    "mtime": "2024-06-04T14:25:16.229Z",
    "size": 67447,
    "path": "../../.output/public/assets/lib/Bootstrap/bootstrap.min.js"
  },
  "/_nuxt/builds/meta/360a3107-353c-4bbd-9034-c106888a123f.json": {
    "type": "application/json",
    "etag": "\"8b-csYG6SimBMss7oSKlMYmcScuvbI\"",
    "mtime": "2024-06-24T13:39:23.078Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/builds/meta/360a3107-353c-4bbd-9034-c106888a123f.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const robots = {
  "UserAgent": "*",
  "Disallow": ""
};

const _1cQbaz = defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/plain");
  return render(await getRules(robots, event.req));
});
var Correspondence = /* @__PURE__ */ ((Correspondence2) => {
  Correspondence2[Correspondence2["User-agent"] = 0] = "User-agent";
  Correspondence2[Correspondence2["Crawl-delay"] = 1] = "Crawl-delay";
  Correspondence2[Correspondence2["Disallow"] = 2] = "Disallow";
  Correspondence2[Correspondence2["Allow"] = 3] = "Allow";
  Correspondence2[Correspondence2["Host"] = 4] = "Host";
  Correspondence2[Correspondence2["Sitemap"] = 5] = "Sitemap";
  Correspondence2[Correspondence2["Clean-param"] = 6] = "Clean-param";
  Correspondence2[Correspondence2["Comment"] = 7] = "Comment";
  Correspondence2[Correspondence2["BlankLine"] = 8] = "BlankLine";
  return Correspondence2;
})(Correspondence || {});
function render(rules) {
  return rules.map((rule) => {
    const value = String(rule.value).trim();
    switch (rule.key.toString()) {
      case Correspondence[7 /* Comment */]:
        return `# ${value}`;
      case Correspondence[8 /* BlankLine */]:
        return "";
      default:
        return `${rule.key}: ${value}`;
    }
  }).join("\n");
}
async function getRules(options, req) {
  const correspondences = {
    useragent: "User-agent",
    crawldelay: "Crawl-delay",
    disallow: "Disallow",
    allow: "Allow",
    host: "Host",
    sitemap: "Sitemap",
    cleanparam: "Clean-param",
    comment: "Comment",
    blankline: "BlankLine"
  };
  const rules = [];
  const parseRule = (rule) => {
    const parsed = {};
    for (const [key, value] of Object.entries(rule)) {
      parsed[String(key).toLowerCase().replace(/[\W_]+/g, "")] = value;
    }
    return parsed;
  };
  for (const rule of Array.isArray(options) ? options : [options]) {
    const parsed = parseRule(rule);
    const keys = Object.keys(correspondences).filter((key) => typeof parsed[key] !== "undefined");
    for (const key of keys) {
      const parsedKey = parsed[key];
      let values;
      values = typeof parsedKey === "function" ? await parsedKey(req) : parsedKey;
      values = Array.isArray(values) ? values : [values];
      for (const value of values) {
        const v = typeof value === "function" ? await value(req) : value;
        if (v === false) {
          continue;
        }
        rules.push({
          key: correspondences[key],
          value: v
        });
      }
    }
  }
  return rules;
}

const _0zOBKI = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_WK9Noo = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/robots.txt', handler: _1cQbaz, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _0zOBKI, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_WK9Noo, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
