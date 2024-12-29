'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c921d9c4d45f976d88de7b548d207b39",
".git/config": "3dfb997f827f7029be37b9050213b26f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2f53e3e045f7788426b442412107b1cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "475d943782b90fbdc027b26495e0f475",
".git/logs/refs/heads/main": "437d5b4d975eb01ea8b936345210a00e",
".git/logs/refs/remotes/origin/main": "64626c24a8447967c97f6620faf46e16",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/f3087e81ce21554d9882cc0759922a7f0af3ec": "02273f19b05d54b759cdf55fd2c3256c",
".git/objects/0c/860873bef7ee10e38bd2fd0b3d702bf7048465": "acc49541cac8d5f504693d8a3caaf3bd",
".git/objects/1a/2f8f24367995eea5e86ca02ad975a10d9c5bae": "876e1eae47a68468d5974486069653bd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/66bb4a7e191ebb484e7f7e33ecf02acf4edc2b": "8cb128244925406bb9182e0fd1a59f0a",
".git/objects/29/73ae17bbb3a67f58373378428711f71be7c466": "9181ceb2f1c712c52f2e9ae9675cd354",
".git/objects/2e/d12b1a7c182562bee995c5bfead74758b6f9c4": "768fed08bde4386a642c1f673f19e4e3",
".git/objects/35/f6276ac7a048d54483d380cf3493a9c5dbd68b": "6499a7b9d6f3f722a1e451b55b93e356",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/e4a6c87d8d02e19c8d491676b11fbe9fce15f2": "736dffd22dfd6667c96831b763f1472d",
".git/objects/60/3ffb7d79e1f031d3cdab89e7246d4fc4b96e29": "df10cda37f1e98935ee20bb84e0eac64",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/4601d2e05204e1cb9a453a37798f248549e90d": "c786bc0ebcb2b371f7d8d43c1b4ff5d1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/dba9e194ed7ea5963b652027453f24b103a3bb": "1839cd5d28c901beff1b5302ad2d7a61",
".git/objects/6e/11b8fff19c17cfb01758dab0f427de2641c672": "ac167d8f5d594eeb54c0d7bc0e029015",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/91226b3348d35e58597670fa01d6836b793cdd": "11ead50342612070c887bdcd02bc7481",
".git/objects/7d/95ef7b53549c57caaa8302d761cf2df8a1f7a3": "3fb57353e97d017507f49bde3f3f2121",
".git/objects/7e/f072022916614c0cac935878ea10bfa93aba53": "0a2abc9d6d0559444c171ef93446c62d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/267005977e4e446700a19c2d670b7168fb04fb": "96d1015abefaa298b5543fdfad3b1410",
".git/objects/95/64e2df717e308fad00c8d1987f2e170f7d45a0": "25467deb718caf44c8f7827d42b5b9da",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a8/99558f4a4cc801c46c37da69e57fe7b9f7c0b2": "4e502b1c25f039a4ae8339452e435354",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/a8/ca7b51c057f0853dbcf9d776cdac14f0ac0682": "3cb2e5e82491966e8983194d9f2e4d09",
".git/objects/ab/1f2b1a5763ac64b6e63e189a8ed661450e9968": "3666780c435bae8b07a608f37c3d2575",
".git/objects/ae/f522fb883da4634bb9f3b5db80934058c2a8c7": "d084aa71e934b614fdf95ed10f2e2dee",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/4dc4ed39dad99b64cdc5a70fee09ecd64907d6": "686ee5d899bd4e349c003c38a287ce0e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/b1bc456dfa196c5bfe0edca2bfefa9f44f0658": "c929ee32024cc5f0093cd225b555b7fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/76b400b607feafd204871ef2d30e5bef6cc98a": "2c0e616940c89d7e4ce9acbf21f1b608",
".git/objects/bd/68644ed14099c3cdbe7ccf8ef49998eb1766fc": "9fba3a0c17266655ba3325f805d351d7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/6c1d1ef0f72897336735b47f3d987533df8258": "ed8528cb48782f866a395892814e88b7",
".git/objects/cb/e3286cab503f912c15f27e330331bfeade4011": "b854d1203cfb47eeecaecbf58cd115ef",
".git/objects/cc/104acb1b65f2d66edadcb59faac6359b73ed8b": "40b5375a3765fbff6b1dd8c8de258673",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8a516fb249fab7e3f259b3459fe3cbd284f61d": "911dc603647a3ebb34664ee53527bdb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/86289ab754b6521f48ae552b01b33b1ff397db": "1ca39977e3be071843f8f75b4b438373",
".git/objects/f1/dc90d0c43544c79970b6ff57ec0f6e99aff54f": "5f86bfb471b8641b17d03ebf86128a27",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/3154e47919560795007e959dbb9ad25fb4a0be": "f32e0e7e99cfa947b6802afb8682cdb7",
".git/objects/ff/fc6f437a432b85d312a83d8b607e5142fe79bf": "edb94df55d0255c751da5b807d1628c7",
".git/refs/heads/main": "d7323c8cf6e6c26574321551c745afc1",
".git/refs/remotes/origin/main": "d7323c8cf6e6c26574321551c745afc1",
"assets/AssetManifest.bin": "11a78e038961f9d915a75160485b1587",
"assets/AssetManifest.bin.json": "0cf27918173a6c01940ae041a3231db0",
"assets/AssetManifest.json": "969d12c4a200ec13843aeb596770c80e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b76069137cd3c69e0c61ae440a8630c3",
"assets/images/1.jpg": "71792ded5da0a76a7a149ed16782221d",
"assets/images/b1.jpg": "4e24ad887196acb76e6b61dcf979f7e5",
"assets/images/b2.jpg": "00d22f5fc6296c43ff4a864444df792c",
"assets/images/pag1.jpg": "4a3a3590469f26dec37b16ddf699b80d",
"assets/images/pag2.jpg": "440df45c48cb48d26ef01fa386baaaef",
"assets/images/w1.jpg": "41751009816d104feaf8e0a3d1e3dc93",
"assets/images/w2.jpg": "8b3ae289357599dfa0f1fd99f6432da6",
"assets/images/w3.jpg": "f2da2f43350a0fcfe4c7ef3edc40b62b",
"assets/images/w4.jpg": "ed80197dfad7a67769c024e5d6faff68",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "05cd45bb0946dbec03622ac9c327e88f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c90179e245a31a8e08a6c7b8534852e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99f7bc6db37451e3dcd414b8ad3150d5",
"/": "99f7bc6db37451e3dcd414b8ad3150d5",
"main.dart.js": "a8e5183bb1f3899824aeab1d89bac4c3",
"manifest.json": "94daf6d1084134e4d0f0659f9602e5ff",
"version.json": "54fca4da3be6e7480ed306cad2cd2d39"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
