/**
 * Basic service worker
 * - https://developers.google.com/web/fundamentals/primers/service-workers/
 * - doesn't actually cache anything
 * - A2H (add to home) requires a SW w/ fetch event registered
 */

var CACHE_NAME = "cache-v1";
var urlsToCache = [];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// keep service worker on client up-to-date
self.addEventListener("activate", function(event) {
  var cacheWhitelist = ["cache-v1"];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
