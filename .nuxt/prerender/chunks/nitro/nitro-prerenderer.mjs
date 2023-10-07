globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, isEvent, createEvent, getRequestHeader, splitCookiesString, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/caseywittner/Documents/GitHub/caseywittner/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {
  "nuxt": {}
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
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
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

const serverAssets = [{"baseName":"server","dir":"/Users/caseywittner/Documents/GitHub/caseywittner/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/caseywittner/Documents/GitHub/caseywittner/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/caseywittner/Documents/GitHub/caseywittner","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/caseywittner/Documents/GitHub/caseywittner/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/caseywittner/Documents/GitHub/caseywittner/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/caseywittner/Documents/GitHub/caseywittner/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

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
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
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
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
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
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
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
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
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
      event.node.res.setHeader(name, response.headers[name]);
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
    "etag": "\"3c2e-oOnCv2DoFzWA2hD7O97mYF4akuI\"",
    "mtime": "2023-10-07T03:45:35.036Z",
    "size": 15406,
    "path": "../../.output/public/favicon.ico"
  },
  "/css/nuxt-google-fonts.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1070-atNxZy5rEFBnPHFRM7XKpDCXzis\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 4208,
    "path": "../../.output/public/css/nuxt-google-fonts.css"
  },
  "/_nuxt/Roboto-400-1.b7ef2cd1.woff2": {
    "type": "font/woff2",
    "etag": "\"3bf0-3SKkH6IexKSo0p/Tadm+6RnLmKw\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 15344,
    "path": "../../.output/public/_nuxt/Roboto-400-1.b7ef2cd1.woff2"
  },
  "/_nuxt/Roboto-400-2.495d38d4.woff2": {
    "type": "font/woff2",
    "etag": "\"259c-ESovxfT/m4XuOnBvqbjEf3mwWTM\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 9628,
    "path": "../../.output/public/_nuxt/Roboto-400-2.495d38d4.woff2"
  },
  "/_nuxt/Roboto-400-4.daf51ab5.woff2": {
    "type": "font/woff2",
    "etag": "\"1bc8-fPvEFcRbInSlmXJV++wPtTu+Mn0\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 7112,
    "path": "../../.output/public/_nuxt/Roboto-400-4.daf51ab5.woff2"
  },
  "/_nuxt/Roboto-400-5.77b24796.woff2": {
    "type": "font/woff2",
    "etag": "\"15b8-EJzUxUNb1mFDkbuHIsR8KHyWsuw\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 5560,
    "path": "../../.output/public/_nuxt/Roboto-400-5.77b24796.woff2"
  },
  "/_nuxt/Roboto-400-6.3c23eb02.woff2": {
    "type": "font/woff2",
    "etag": "\"2e60-t0NUh3DEbZBa4boGMQvAAcWH/o4\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 11872,
    "path": "../../.output/public/_nuxt/Roboto-400-6.3c23eb02.woff2"
  },
  "/_nuxt/Roboto-400-7.f6734f81.woff2": {
    "type": "font/woff2",
    "etag": "\"3d80-fKnFln87uL/+qyS2ObScHn0D+lI\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 15744,
    "path": "../../.output/public/_nuxt/Roboto-400-7.f6734f81.woff2"
  },
  "/_nuxt/Roboto_Condensed-400-11.85f70e68.woff2": {
    "type": "font/woff2",
    "etag": "\"1bd0-7W8NLxVk5ddj4HqP3i8WxekR8y8\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 7120,
    "path": "../../.output/public/_nuxt/Roboto_Condensed-400-11.85f70e68.woff2"
  },
  "/_nuxt/Roboto_Condensed-400-12.a443599b.woff2": {
    "type": "font/woff2",
    "etag": "\"1640-oSutftU39mTDtOwMUBs8zi31WSE\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 5696,
    "path": "../../.output/public/_nuxt/Roboto_Condensed-400-12.a443599b.woff2"
  },
  "/_nuxt/Roboto_Condensed-400-13.30fa7063.woff2": {
    "type": "font/woff2",
    "etag": "\"2e28-GIDjdDVIEGMZcTuTfndp7uaxziE\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 11816,
    "path": "../../.output/public/_nuxt/Roboto_Condensed-400-13.30fa7063.woff2"
  },
  "/_nuxt/Roboto_Condensed-400-14.6b4fac99.woff2": {
    "type": "font/woff2",
    "etag": "\"3d54-yxjnlDtqig42ctckIZfBmiJrkug\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 15700,
    "path": "../../.output/public/_nuxt/Roboto_Condensed-400-14.6b4fac99.woff2"
  },
  "/_nuxt/Roboto_Condensed-400-8.97faf115.woff2": {
    "type": "font/woff2",
    "etag": "\"3b4c-O+73za5+3ZT4Jt8VUuVFuXHfles\"",
    "mtime": "2023-10-07T03:45:35.027Z",
    "size": 15180,
    "path": "../../.output/public/_nuxt/Roboto_Condensed-400-8.97faf115.woff2"
  },
  "/_nuxt/Roboto_Condensed-400-9.bddd7c9d.woff2": {
    "type": "font/woff2",
    "etag": "\"25dc-eIBz+3ZWx7RKPWdGj8NVzrYYKQ4\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 9692,
    "path": "../../.output/public/_nuxt/Roboto_Condensed-400-9.bddd7c9d.woff2"
  },
  "/_nuxt/apis_card.32ae43b6.png": {
    "type": "image/png",
    "etag": "\"1ada8-UjkjjoMNfOy3EHlBGRLsMTG8XQw\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 109992,
    "path": "../../.output/public/_nuxt/apis_card.32ae43b6.png"
  },
  "/_nuxt/entry.62bc96ae.js": {
    "type": "application/javascript",
    "etag": "\"1a55f-W6/9Sibsr9yMiXBn+YZOatUJRAU\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 107871,
    "path": "../../.output/public/_nuxt/entry.62bc96ae.js"
  },
  "/_nuxt/entry.e3e1639c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"137-J+vTjZF923G7CpnRAqF3zKZccbo\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 311,
    "path": "../../.output/public/_nuxt/entry.e3e1639c.css"
  },
  "/_nuxt/error-404.7392d0bd.js": {
    "type": "application/javascript",
    "etag": "\"188a-OjORq+n8JGdQk0pof3cyvkr4/o0\"",
    "mtime": "2023-10-07T03:45:35.028Z",
    "size": 6282,
    "path": "../../.output/public/_nuxt/error-404.7392d0bd.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-10-07T03:45:35.029Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.761ddfa5.js": {
    "type": "application/javascript",
    "etag": "\"77e-CNxaANopmXYB39JByFaLDSN6yWU\"",
    "mtime": "2023-10-07T03:45:35.030Z",
    "size": 1918,
    "path": "../../.output/public/_nuxt/error-500.761ddfa5.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-10-07T03:45:35.029Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/htmlcss_card.4a579180.png": {
    "type": "image/png",
    "etag": "\"9b364-uRY+nkYK3zZCqpgCCYy/pC41aQE\"",
    "mtime": "2023-10-07T03:45:35.031Z",
    "size": 635748,
    "path": "../../.output/public/_nuxt/htmlcss_card.4a579180.png"
  },
  "/_nuxt/javascript_card.a6dca677.png": {
    "type": "image/png",
    "etag": "\"307ed-0YAUCsBl+r/Tl69bwV3a2A1Sod8\"",
    "mtime": "2023-10-07T03:45:35.032Z",
    "size": 198637,
    "path": "../../.output/public/_nuxt/javascript_card.a6dca677.png"
  },
  "/_nuxt/mentorship_card.02973289.png": {
    "type": "image/png",
    "etag": "\"2993a-EIgVColcuZIZjZZrHgJZmCRmO0c\"",
    "mtime": "2023-10-07T03:45:35.029Z",
    "size": 170298,
    "path": "../../.output/public/_nuxt/mentorship_card.02973289.png"
  },
  "/_nuxt/projectmanagement_card.ba5ea717.png": {
    "type": "image/png",
    "etag": "\"2d011-ueMQsV1kvET9m3Hct9xLeaj+5mQ\"",
    "mtime": "2023-10-07T03:45:35.030Z",
    "size": 184337,
    "path": "../../.output/public/_nuxt/projectmanagement_card.ba5ea717.png"
  },
  "/_nuxt/vue.f36acd1f.6791b2e3.js": {
    "type": "application/javascript",
    "etag": "\"186-1TLSNDPIUEzw0ehwJInZDUo52XI\"",
    "mtime": "2023-10-07T03:45:35.029Z",
    "size": 390,
    "path": "../../.output/public/_nuxt/vue.f36acd1f.6791b2e3.js"
  },
  "/_nuxt/wireframing_card.c4f09a05.png": {
    "type": "image/png",
    "etag": "\"1a400-CwHaHQdHWDyjDT2/T2W0GbxkLaY\"",
    "mtime": "2023-10-07T03:45:35.032Z",
    "size": 107520,
    "path": "../../.output/public/_nuxt/wireframing_card.c4f09a05.png"
  },
  "/fonts/Roboto-400-1.woff2": {
    "type": "font/woff2",
    "etag": "\"3bf0-3SKkH6IexKSo0p/Tadm+6RnLmKw\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 15344,
    "path": "../../.output/public/fonts/Roboto-400-1.woff2"
  },
  "/fonts/Roboto-400-2.woff2": {
    "type": "font/woff2",
    "etag": "\"259c-ESovxfT/m4XuOnBvqbjEf3mwWTM\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 9628,
    "path": "../../.output/public/fonts/Roboto-400-2.woff2"
  },
  "/fonts/Roboto-400-3.woff2": {
    "type": "font/woff2",
    "etag": "\"5cc-TfOeql0acP87XSiKdL96Ro51g+8\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 1484,
    "path": "../../.output/public/fonts/Roboto-400-3.woff2"
  },
  "/fonts/Roboto-400-4.woff2": {
    "type": "font/woff2",
    "etag": "\"1bc8-fPvEFcRbInSlmXJV++wPtTu+Mn0\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 7112,
    "path": "../../.output/public/fonts/Roboto-400-4.woff2"
  },
  "/fonts/Roboto-400-5.woff2": {
    "type": "font/woff2",
    "etag": "\"15b8-EJzUxUNb1mFDkbuHIsR8KHyWsuw\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 5560,
    "path": "../../.output/public/fonts/Roboto-400-5.woff2"
  },
  "/fonts/Roboto-400-6.woff2": {
    "type": "font/woff2",
    "etag": "\"2e60-t0NUh3DEbZBa4boGMQvAAcWH/o4\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 11872,
    "path": "../../.output/public/fonts/Roboto-400-6.woff2"
  },
  "/fonts/Roboto-400-7.woff2": {
    "type": "font/woff2",
    "etag": "\"3d80-fKnFln87uL/+qyS2ObScHn0D+lI\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 15744,
    "path": "../../.output/public/fonts/Roboto-400-7.woff2"
  },
  "/fonts/Roboto_Condensed-400-10.woff2": {
    "type": "font/woff2",
    "etag": "\"60c-WdK823W0cUZ0fVA6vHZ9ndS0ATE\"",
    "mtime": "2023-10-07T03:45:35.023Z",
    "size": 1548,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-10.woff2"
  },
  "/fonts/Roboto_Condensed-400-11.woff2": {
    "type": "font/woff2",
    "etag": "\"1bd0-7W8NLxVk5ddj4HqP3i8WxekR8y8\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 7120,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-11.woff2"
  },
  "/fonts/Roboto_Condensed-400-12.woff2": {
    "type": "font/woff2",
    "etag": "\"1640-oSutftU39mTDtOwMUBs8zi31WSE\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 5696,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-12.woff2"
  },
  "/fonts/Roboto_Condensed-400-13.woff2": {
    "type": "font/woff2",
    "etag": "\"2e28-GIDjdDVIEGMZcTuTfndp7uaxziE\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 11816,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-13.woff2"
  },
  "/fonts/Roboto_Condensed-400-14.woff2": {
    "type": "font/woff2",
    "etag": "\"3d54-yxjnlDtqig42ctckIZfBmiJrkug\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 15700,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-14.woff2"
  },
  "/fonts/Roboto_Condensed-400-8.woff2": {
    "type": "font/woff2",
    "etag": "\"3b4c-O+73za5+3ZT4Jt8VUuVFuXHfles\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 15180,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-8.woff2"
  },
  "/fonts/Roboto_Condensed-400-9.woff2": {
    "type": "font/woff2",
    "etag": "\"25dc-eIBz+3ZWx7RKPWdGj8NVzrYYKQ4\"",
    "mtime": "2023-10-07T03:45:35.024Z",
    "size": 9692,
    "path": "../../.output/public/fonts/Roboto_Condensed-400-9.woff2"
  },
  "/img/javascript_card.png": {
    "type": "image/png",
    "etag": "\"307ed-0YAUCsBl+r/Tl69bwV3a2A1Sod8\"",
    "mtime": "2023-10-07T03:45:35.039Z",
    "size": 198637,
    "path": "../../.output/public/img/javascript_card.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

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

const _lazy_SKAfpw = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_SKAfpw, lazy: true, middleware: false, method: undefined }
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
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
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