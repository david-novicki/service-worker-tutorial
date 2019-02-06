console.log("service worker init");

// filler function that returns a promise to mock doing something
const doSomeStuff = () => Promise.resolve();

/* The install event happens whenever a new service worker is loaded, 
it however does not signify that it is active and able to do things like intercept 
fetch requests, sync events, and push events. This will happen once the activate event
fires.
*/
self.addEventListener("install", function(event) {
  console.log("install:", event);
});
/* The activate event is the most important event of them all, it serves as a signal that this
service worker has taken control. You can assume this service worker is intercepting all events
from this event until the service worker is either destroyed or a new one takes over.
*/
self.addEventListener("activate", function(event) {
  console.log("activate:", event);
});

/* The fetch event intercepts all assets(i.e js, img, css, etc) and api requests. Almost everything in the browser 
upgrades to a fetch request in evergreen browsers.
*/
self.addEventListener("fetch", function(event) {
  console.log("fetch:", event);
  // to server from something like the cache, we could use the api below
  // event.respondWith(/* PROMISE HERE*/)
  return fetch(event.request);
});

/* The sync event is specific to the Background Sync API: https://developers.google.com/web/updates/2015/12/background-sync
This is not covered in my tutorial however feel free to play with it in Chrome DevTools
*/
self.addEventListener("sync", function(event) {
  console.log("sync:", event);
  if (event.tag == "myFirstSync") {
    event.waitUntil(doSomeStuff());
  }
});

/* The push event is specific to WebPush API: https://developers.google.com/web/fundamentals/push-notifications/
This is not covered in my tutorial however feel free to play with it in Chrome DevTools
*/
self.addEventListener("push", function(event) {
  console.log("push:", event);
  event.waitUntil(doSomeStuff());
});
