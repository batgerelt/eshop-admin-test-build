"use strict";var precacheConfig=[["/index.html","41c72a14f12aea64b8ff0412bbf62a64"],["/static/css/main.effde7db.css","bb035a72676ae3bfdff802f26a0e5c43"],["/static/media/0b8f27509021ddc0f7d4ee103181bc05.0b8f2750.svg","0b8f27509021ddc0f7d4ee103181bc05"],["/static/media/1d63e86b832ddfc4008baf6e69e7c39b.1d63e86b.woff","1d63e86b832ddfc4008baf6e69e7c39b"],["/static/media/435801d088c67acdd4c667e00037f080.435801d0.eot","435801d088c67acdd4c667e00037f080"],["/static/media/54469d382ec66ca4460d57a5f4a49b05.54469d38.woff2","54469d382ec66ca4460d57a5f4a49b05"],["/static/media/773c0f21a6a926b07f111a3892134dec.773c0f21.ttf","773c0f21a6a926b07f111a3892134dec"],["/static/media/emart-logo-sm.d307b8ca.png","d307b8ca99c6c59e7d38a206756ddd52"],["/static/media/emart-logo.ec6a1350.png","ec6a1350441832a94056d52e63d1af3e"],["/static/media/gb.dc204662.svg","dc2046621dee2857c9a36660e834eef9"],["/static/media/loading.cc537884.svg","cc53788440a161386a04c269627a4d1c"],["/static/media/mn.2d138f4c.svg","2d138f4c0f7da7f1458eaca5d984a3cc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});