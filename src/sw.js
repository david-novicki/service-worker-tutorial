self.addEventListener("install", function (event) {
	console.log("install:", event);
});

self.addEventListener("activate", function (event) {
	console.log("activate:", event);
});

self.addEventListener("fetch", function (event) {
	// event.respondWith(/* PROMISE HERE*/)
	return fetch(event.request);
});

self.addEventListener("sync", function (event) {
	if (event.tag == "myFirstSync") {
		event.waitUntil(doSomeStuff());
	}
});

self.addEventListener("push", function (event) {
	event.waitUntil(doSomeStuff());
});