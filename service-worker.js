"use strict";var precacheConfig=[["/index.html","07ee6573e171d9ff9e5027eb50fbcac8"],["/static/css/main.3e59e855.css","3e59e855c0b4a1154229c9fcef9a8a3a"],["/static/css/main.3e59e855.css.gz","bd4e68df2b627f1ed8072659dc5ef2b3"],["/static/js/0.a9e9bb88.chunk.js","67d1ee8ae88f94fd136a2e5f35e608ee"],["/static/js/1.4dac15b9.chunk.js","6ca6e084faacb0f521b9b3ad0195dd84"],["/static/js/2.5b091105.chunk.js","c80a961d18235d54fa14c19462dfe160"],["/static/js/3.22c512ca.chunk.js","c98a79752ff286bcb35f604b2abb97be"],["/static/js/4.9e01b57f.chunk.js","23bff9c2b5316633d29974016e36e058"],["/static/js/5.c09a3463.chunk.js","4cd5b23449b3c99c010c37977eccd12c"],["/static/js/6.56097460.chunk.js","793ae8c797fc6ac2cdec485f7f89db6c"],["/static/js/7.4d2695d0.chunk.js","b3c2704ea0dd91f26da44b081d351d40"],["/static/js/8.65ba01ae.chunk.js","62d35d9863c356fbff34871da7523ab2"],["/static/js/9.02e430b3.chunk.js","61c4138f7d720dc77637847699ba7aca"],["/static/js/main.1725923f.js.gz","3a84ccf59470d032af5094441bf7c81c"],["/static/media/001-search.05c14bba.svg","05c14bba53cb2b5c0459505220d2be24"],["/static/media/002-shopping-cart.deb82563.svg","deb82563b1570a4a59f393f8ca0f3a1a"],["/static/media/003-chat-Copy.d9d05ef9.svg","d9d05ef93957ba30bd147753ce4378d4"],["/static/media/003-chat.5229aa77.svg","5229aa77e40996a53e1c68d827b16ca7"],["/static/media/2.abfd0f5e.jpg","abfd0f5e7d4f538116fc92e50e2a61ea"],["/static/media/Lend.f06c3b91.png","f06c3b91407475f3eb30580eb946304f"],["/static/media/SocialPay.69766c06.png","69766c068851655b936695caec11cec2"],["/static/media/candy.22f30731.png","22f30731365907092c9950e7130a308c"],["/static/media/car.117dc5c9.png","117dc5c9e2c835097896de71faba6f39"],["/static/media/card-black.4ecbe480.svg","4ecbe4804a11d9d58774c4a456477623"],["/static/media/cliplist.a6cdbb52.png","a6cdbb52fe359cd90770c777dae2e4bb"],["/static/media/defaultAvatar.16713bc1.png","16713bc1c166d6ad1763d052b59fa41d"],["/static/media/emart-logo.ec6a1350.png","ec6a1350441832a94056d52e63d1af3e"],["/static/media/emartlogo.542d31b7.png","542d31b743de6efde21013291a1a836e"],["/static/media/envelope-black.4712396f.svg","4712396fd6ac66a183071a58d8e9fb9e"],["/static/media/epoint.4fe2c8fb.png","4fe2c8fbdebf26982438de20eaf50393"],["/static/media/error pages-01.7a1d41a6.jpg","7a1d41a6b042438d4722f8d27dd34cc9"],["/static/media/error pages-02.2562b493.jpg","2562b4931dc34f23af1516f776783789"],["/static/media/error-black.eef66d80.svg","eef66d8017d1ae7922990fdd9ae8c808"],["/static/media/error.d6174862.svg","d6174862dc2ba9b57e131a5fa1b43db5"],["/static/media/goup.c52882c6.svg","c52882c697fdcd10b161d2a226c9af4c"],["/static/media/list.28afff3a.svg","28afff3a981b0a50bb76de4ebe419435"],["/static/media/loader.310b42ee.svg","310b42ee3273cdaa27c08c1311d50842"],["/static/media/lock.4e112593.png","4e11259328f86e2f277c4149f51f3a97"],["/static/media/login.731c129f.svg","731c129f50863f7a2dba19e0b831a7c1"],["/static/media/logo.f5cebdcd.png","f5cebdcd26fa56919c893d6a883c44be"],["/static/media/logo.fc6ecce9.jpg","fc6ecce9ad1d77812bbac82d836eec64"],["/static/media/not-found.f64949b8.jpg","f64949b82f165097070c01693e14c250"],["/static/media/pdf.67b5cdb1.png","67b5cdb1dbae6ffc69a55aa9af76a195"],["/static/media/qrcode-white.fcba7580.svg","fcba7580a1f5ce76bb3d32a54d03d8dc"],["/static/media/redpoint.ea96bd79.png","ea96bd790ae2918fe1f0018cced82036"],["/static/media/searchnotfound.a166e18b.jpg","a166e18b9f07b8f94578ea8af7a47f99"],["/static/media/sp_time.7bfbe4b9.png","7bfbe4b9ffd95481c48b1254d32a444b"],["/static/media/sp_time1.ac08b63d.png","ac08b63d2968815ad27dc5a14f0c2692"],["/static/media/superup.d5a107a2.png","d5a107a2180bf4e319f825dd26e75ef1"],["/static/media/tamga.e0cc9ff5.png","e0cc9ff5a091445e08713e44386bdfbb"],["/static/media/tor.0bbef821.png","0bbef8219a60e3e9da5632edde8c5d5c"],["/static/media/user.de413303.png","de4133035519cfc0b172ef0cf69f8761"],["/static/media/user.f990ed44.svg","f990ed44a1a86fd5f00628858f7bd058"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var s="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});