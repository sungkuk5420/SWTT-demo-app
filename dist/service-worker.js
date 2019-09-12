/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/activity.66cbb47d.png","b0e09377b1c5060ff78a903bed0b5511"],["/activity.adfcad19.png","b0e09377b1c5060ff78a903bed0b5511"],["/feed-effect-image-1.1b849af1.jpg","bbf5a5f89915858ee90b1a869e5a8178"],["/feed-effect-image-1.7661eac3.jpg","bbf5a5f89915858ee90b1a869e5a8178"],["/feed-effect-image-2.10b60153.jpg","9a3bf7252091455a52a570c5c4059c49"],["/feed-effect-image-2.491d8386.jpg","9a3bf7252091455a52a570c5c4059c49"],["/feed-effect-image-3.08b93d02.jpg","ff4b5ea0e1873bab34a2803ab3506271"],["/feed-effect-image-3.1533cefb.jpg","ff4b5ea0e1873bab34a2803ab3506271"],["/feed-effect-image-4.a38a0483.jpg","9d243ff85e8a1caba0c7c12d8828d55e"],["/feed-effect-image-4.edb39658.jpg","9d243ff85e8a1caba0c7c12d8828d55e"],["/feed-effect-image-5.18e090c9.jpg","8e69d3950869f2769a2fab2a731a9af0"],["/feed-effect-image-5.5ab73706.jpg","8e69d3950869f2769a2fab2a731a9af0"],["/feed-effect-image-6.1b109177.jpg","f5e374a50f14e4cce92f48b94c25bc8f"],["/feed-effect-image-6.52743eca.jpg","f5e374a50f14e4cce92f48b94c25bc8f"],["/feed-image-1.7b14c96a.jpg","6fa5c4f7ef3d267cd4bdf62c0194f44e"],["/feed-image-1.958c908d.jpg","6fa5c4f7ef3d267cd4bdf62c0194f44e"],["/feed-image-10.2344ae52.jpg","d9f0d459bcfb8882fe9f710a7b0b4465"],["/feed-image-10.f8de7ad3.jpg","d9f0d459bcfb8882fe9f710a7b0b4465"],["/feed-image-11.21302127.jpg","88ffae99e1bf012d995570bcf0260114"],["/feed-image-11.4fb34534.jpg","88ffae99e1bf012d995570bcf0260114"],["/feed-image-12.20746dd9.jpg","4d96d243401934e54977eb429da5425e"],["/feed-image-12.61831bcb.jpg","4d96d243401934e54977eb429da5425e"],["/feed-image-3.7f6633eb.jpg","2237b4bb9a0f3af5da12c3391d4fb8fc"],["/feed-image-3.a9a8a8fc.jpg","2237b4bb9a0f3af5da12c3391d4fb8fc"],["/feed-image-4.0318ae4d.jpg","f9c30ce882b25e9132226ad42e6154c5"],["/feed-image-4.cc9566d7.jpg","f9c30ce882b25e9132226ad42e6154c5"],["/feed-image-5.66ea8523.jpg","484d8ac23a94bb13ff9547c81123f30f"],["/feed-image-5.cb079687.jpg","484d8ac23a94bb13ff9547c81123f30f"],["/feed-image-6.9a75c0c0.jpg","9de7d35a4f347f8627a71dfcda114064"],["/feed-image-6.c0001561.jpg","9de7d35a4f347f8627a71dfcda114064"],["/feed-image-7.9d4028b6.jpg","556a421935fd376e5b2ec9d9d8a14c5d"],["/feed-image-7.e792c7d4.jpg","556a421935fd376e5b2ec9d9d8a14c5d"],["/feed-image-8.6770c380.jpg","acc23c552aa1d6dcd994a02fbb816460"],["/feed-image-8.de588271.jpg","acc23c552aa1d6dcd994a02fbb816460"],["/feed-image-9.3345f451.jpg","b5fcf0c7b20778540e42bf1fa3fefe5d"],["/feed-image-9.5a6480a6.jpg","b5fcf0c7b20778540e42bf1fa3fefe5d"],["/feed-main-image1.6eb7d147.png","d9f52c912e4d792feaf6fecffecc19b4"],["/feed-main-image1.ab767e6b.png","d9f52c912e4d792feaf6fecffecc19b4"],["/feed3.3c831ee1.css","09bb171857ef4b8618b3b9eb6a057432"],["/feed3.3c831ee1.js","54263c0cecb2f1105feb407a4acdaf77"],["/feed3.73a626b9.css","0b7a6d86f54e9ed5613194acf7c4b80a"],["/feed3.c02095c3.css","4dea7e36edca0711e552dea9280b7795"],["/hartTooltip.10f739c7.png","226ee0ce86ff9d78af77e4a539250047"],["/hartTooltip.a0120ad7.png","226ee0ce86ff9d78af77e4a539250047"],["/instagram-icon.0aa3126b.png","91a75e9f1c7209d2da685c925916ee10"],["/instagram-icon.53ec6db1.png","91a75e9f1c7209d2da685c925916ee10"],["/instagram-icon2.38e1bd8a.png","f506bdab70240a03010a321f854d3838"],["/instagram-icon2.aceb1008.png","f506bdab70240a03010a321f854d3838"],["/instagram-icon3.9de133ed.png","a9a13771e5dcd73931e0b61df2faac62"],["/instagram-icon3.bf0404ed.png","a9a13771e5dcd73931e0b61df2faac62"],["/javascripts.3a57070a.js","044629ab809bbb95862584e3eba87841"],["/javascripts.406ba41d.js","d4a6da25b70c42c626d0493bc8093712"],["/javascripts.c233fab5.js","d4fa9804332bd10c5b89d5ec83a836ce"],["/javascripts.f84e1103.js","8d639927acc923c880113e4be5d5b521"],["/main-image.ccec415a.jpg","234cee1da2c482a50085ba5d665ec813"],["/main-image.dd7c794b.jpg","234cee1da2c482a50085ba5d665ec813"],["/main-image2.87808be7.jpg","8c4f4c81eeeff718066e0e687c9748d7"],["/main-image2.cf2a210d.jpg","8c4f4c81eeeff718066e0e687c9748d7"],["/manifest.298fe654.js","015c9e6b4e09121bfa1cbeb176a8f2c7"],["/manifest.ec1ca9e9.js","711087220aae56ac8025393dc2a9ace8"],["/originalIndex.html","113dd04b215b714aa1b3429f1e31952e"],["/photo-input.c2cef039.png","6b3673836086c1a9fddc4fc2101f8f96"],["/photo-input.f4e49e6a.png","6b3673836086c1a9fddc4fc2101f8f96"],["/pwacompat.48bb83d7.js","2d1922156be202d54fa6a045e65aed42"],["/pwacompat.cb517f16.js","0c5cdfebf567d24dadf533f4ba298bcd"],["/service-worker.js","be26f46565b7f180b9385f7660af22e8"],["/story-0.073f3091.jpg","43090a2d6bef5ec8af2ed1be9a08e778"],["/story-0.e9a1c15e.jpg","43090a2d6bef5ec8af2ed1be9a08e778"],["/story-1.674fc57c.jpg","06ef9a101c5258ec9dc077732c51deb2"],["/story-1.dcbfab3c.jpg","06ef9a101c5258ec9dc077732c51deb2"],["/story-2.18d5d636.jpg","3607f48d51f0f97b282669649bf52a64"],["/story-2.721512c3.jpg","3607f48d51f0f97b282669649bf52a64"],["/story-3.31dbb5d1.jpg","1b038ef633a91a3e9e49d6c8d567207d"],["/story-3.51a35afb.jpg","1b038ef633a91a3e9e49d6c8d567207d"],["/story-4.8ed5ad27.jpg","aa5589ca2d1384eb86b2fec1bef775d5"],["/story-4.fa5d5b19.jpg","aa5589ca2d1384eb86b2fec1bef775d5"],["/story-5.61fbda83.jpg","a04d849cf591c2f980548b982f461401"],["/story-5.ff61e60c.jpg","a04d849cf591c2f980548b982f461401"],["/style.21fd9f35.css","70078627e54755287701753f7e204cea"],["/style.28f0ce89.css","ee5027663182eb6aaae94fefdc4f7b32"],["/style.46fabf4d.css","964d6676a7ec7e0c381920cd00c8199a"],["/style.52845299.css","fe882b6bd94e2c1496f3e2a5d91046fb"],["/style.52845299.js","6f3bd144c97e37f267ba7d3ec4a18774"],["/style.7f27cd88.css","3799e130decdba1d88fbe1157a55ee61"],["/toggle-button.95e3556a.png","23a85576585add7de753d7437cd6a4af"],["/toggle-button.fca73d4c.png","23a85576585add7de753d7437cd6a4af"],["/tooltip.11be2440.png","e06050aa23effb34fdd50fa8a6d5008c"]];
var cacheName = 'sw-precache-v3-SWTT-demo-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







