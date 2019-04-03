var CACHE_KEY = 'chrisgurney-static-v1';

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_KEY).then(function(cache) {
      return cache.addAll([
        '/',
        '/favicon.png',        
        '/index.html',
        '/images/chrisgurney.jpg',
        '/images/chrisgurney_900.jpg'  
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;  
      }
      // add anything that's not in the list above to the cache;
      // may want to get more selective about this in the future
      console.log(event.request.url);
      if (event.request.url.indexOf('/app/') < 0) {
        caches.open(CACHE_KEY).then(function(cache) {
          fetch(event.request.url).then(function (response) {
            if (response.ok) {
              return cache.put(event.request.url, response);
            }
          })
        });
      }
      return fetch(event.request);
    })
  );
});