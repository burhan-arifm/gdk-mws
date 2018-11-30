const NAMACACHE = 'mws-v1';
let filesToCache = [
    '.',
    'index.html',
    '404.html',
    'p1/countnum.html',
    'assets/css/mygrid.css',
    'assets/css/countnum.css',
    'assets/img/profpic.jpg',
    'p1/assets/js/countnum.js'
];

self.addEventListener('install', event => {
    console.log('Cache preparation');
    event.waitUntil(
        caches.open(NAMACACHE)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then( ada_response => {
            if (ada_response) {
                return ada_response;
            } else {
                return fetch(event.request)
            }
        })
        .catch(error => {
            return new Response("Error: " + error);
        })
    );
});