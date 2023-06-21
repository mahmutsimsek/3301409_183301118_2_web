'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "46b73951093604d734aae668d12f9149",
".git/config": "b40ac158014d365ccc57fca5954ba43e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d07aeb3ec684bab1b74e14a35b9d7262",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "575188460dd86ddef29ef4fd4693b677",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "638b4fca40f891e3e2dec0b9f0adc545",
".git/logs/refs/heads/main": "cda0c8e8f2aece255c4a1888b9701d17",
".git/logs/refs/remotes/origin/main": "5ef304005de244f10c143b05b09f5ea7",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/69fc309156deb0af5af8441064387bdfa1209a": "8d5ab492a57cfefea5d8e1c7ea95c5c5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/fc3f690d05eab6f67b382964f9bead34ee79d6": "f9d3687ac3fbb4ee4b2099e3fb9b2ccb",
".git/objects/26/7e622cf296d50f4fa35dac4a0c3d2c2e4b39b9": "853d0da5b4456cb350ba9bc0cea70aa4",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/8b4db76b761abec519144d64327b25b3ae73b1": "056cf48277ecfd026173f2b8ba902d06",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/41e9c4dea30451639099f9d286739526e1d2be": "f5a709c90916db81f9e47495ed677677",
".git/objects/55/f336b09fb238a62c838dca2e6fa26efd0aab70": "b8cfa8cae2a5da790b430c6d0978b282",
".git/objects/59/5271bb25c022ea65dad4aa78dd7e4d0bca0f1a": "dbecda1622cd31409c662af810229944",
".git/objects/59/5b925cd532762d6907d28278834fac83dcfa77": "1cb87cc65f0c7e09752dad5e363f3aac",
".git/objects/5e/5328cda38e57a8002eb378419b20c0158ef341": "6bb2f1d6b8cbf1d9e8d2672062b6ccbd",
".git/objects/61/52d8e23d40543a3fe5c39fa265ae09dc3e97a8": "964c3cd9be66a7d7c6957ff2dcc29007",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/f3b851acacbf040b9bc0d83af9ddee78857354": "9fbf9084b3a4ba53307caf8e81190e83",
".git/objects/79/79808226f3ea7503716d3895287bb2aac3b0ea": "92689050e1687905e6106b17d02c03e9",
".git/objects/7d/e52fb2bd3e81fce278575caa063d00b7ba7e5f": "69d9b4bff6967730d591d44489665ed6",
".git/objects/81/33a68077304fb90de202fad71fb25a6884279f": "824213f8f42eac73f76e4b53c4371a29",
".git/objects/82/043a272783872a65eb2ccf93b3069961effedd": "2a06cbfd9ed52c5a3ee3bd2a52dc434a",
".git/objects/83/8d5660b2b9f432ad4b0a168ad77a6831ec5fdc": "6138a0681c357ed041cb99b4803fbabb",
".git/objects/85/12f51d64b2b55a4e9417ec51df8b4cf6de3b03": "31d7100130454e9710f9574dd365f650",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/d6124bf91c7263d1e0b5ed8ab3d6296dab42fe": "c1556c7550d60713f18753b071b85d42",
".git/objects/98/66783516e543dc88b69f94fa0f94d9cc44ccd9": "edebaaab15e5104250a81d56d16227ea",
".git/objects/99/60f3d146f97b9b311d67777de2a4c942f0ff1c": "a591ece131be3b68532d06665cc8bd1e",
".git/objects/99/f3b1bdad69b09a4844a0487bc6839dcd2a26d3": "e66a5939b0cfccee7f01071d36714f11",
".git/objects/a1/18dea14a9e6f0f901d32c5245ba7dd227e3e77": "0a794eee511145eae40fd296f2669a07",
".git/objects/a1/a1476902eb6ab2de1782cb2fd1b41fc1618647": "6f06e5879163c2adb288b552748242eb",
".git/objects/a2/14568bbc8a2586da60951467884f4411fa2791": "dc90a66f6ba62c86ca3e96c0b091433d",
".git/objects/a9/41713e820dcaae47a5d79c750f6fff0d32ae4b": "aed37317f7c4a474dcaa25a05aefb280",
".git/objects/ae/0372f70b0952f5f9634f939a09f22db67da08f": "911382675dd99d825be68c41e00dedda",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/dccad14eb57a8ddf7403d90f7a823248700e8e": "457bdd85733e64a13ed2eb66b57c8994",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/a9bdba13471d12b38564a8e9e86bf73b2b2708": "774e6982ccd9886739fd4868198ed545",
".git/ORIG_HEAD": "e65a8bf205fc61a4059872e7cf72f1b4",
".git/refs/heads/main": "ce0ddd91c163d8758000f4e5e7f8b338",
".git/refs/remotes/origin/main": "ce0ddd91c163d8758000f4e5e7f8b338",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "03b8f131f25d507bfd016cf0673c5209",
"assets/NOTICES": "e8ab1c709c2361ef54d17ca6083aa7ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21f5440ecd03fc5fb6eb0e52d3d78eb5",
"/": "21f5440ecd03fc5fb6eb0e52d3d78eb5",
"main.dart.js": "15284463ef769a2a8feb35cd05abdbb1",
"manifest.json": "a935e4729b9e7b7b59f8d5f3987fdda6",
"version.json": "bce26c829b2e60e855184f1a8ef149a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
