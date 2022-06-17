const CACHENAME = "one";
const cacheUrls = [
    '/',
    '/index.html',
    '/css/',
    '/js/',
    '/img/',
    '/svgs/'
];

const networkFirst = async event => {
    try {
        const fetchResponse = await fetch(event.request.url.replace(/\/#/, ""))
        const cachingResponse = fetchResponse.clone();
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            throw fetchResponse;
        }
        caches.open(CACHENAME).then(cache => cache.put(event.request, cachingResponse));
        return fetchResponse;
    } catch (err) {
        // No response - Try cache
        const cacheResponse = await caches.match(event.request, { cacheName: CACHENAME });
        return cacheResponse;
    }
}

const cacheFirstStrategy = async(resolve, reject) => {
    try {
        const cacheResponse = await caches.match(event.request, { cacheName: CACHENAME });
        resolve(cacheResponse);
    } catch (err) {
        try {
            const fetchResponse = await fetch(event.request)
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                throw fetchResponse;
            }
            caches.open(CACHENAME).then(cache => cache.put(event.request, fetchResponse.clone()));
            resolve(fetchResponse);
        } catch (err) { reject(err); }
    }
}

const onInstall = event => {
    event.waitUntil(async(resolve, reject) => {
        try {
            const cache = await caches.open(CACHENAME);
            cache.addAll(cacheUrls);
            resolve();
        } catch (err) {
            reject(err);
        }
    })
}

const networkOnlyStrategy = async(resolve, reject) => {
    try {
        const fetchResponse = await fetch(event.request)
        resolve(fetchResponse);
    } catch (err) {
        reject(err);
    }
}

const onFetch = event => {

    event.respondWith(networkFirst(event));
    return;
    /* } else if (/\.webp$/.test(requestURL.pathname)) {
         event.respondWith(cacheFirstStrategy);
         return;
     } else if (/\.webp$/.test(requestURL.pathname)) {
         event.respondWith(networkOnlyStrategy);
         return;
     }*/
}


const onMessage = () => {

    console.log("received")
    console.log(self);
    console.log(Notification);
    const title = 'Push Codelab';
    const options = {
        body: 'Yay it works.',
        icon: 'img/favicon-32.png'
    };
    setTimeout(() => {
        self.registration.showNotification(title, options);
    }, 2000)

    if (!("Notification" in self)) {
        alert("This browser does not support desktop notification");
    }
}




self.addEventListener('message', onMessage);
self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);