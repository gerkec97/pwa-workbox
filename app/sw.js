// does not recognize skipWaiting()
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(/\.js$/, workbox.strategies.cacheFirst())