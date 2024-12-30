'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9c58e1e6c3928d68b5a6a21afa1848a3",
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
".git/index": "3ae1ed2cfa62ab4037ebe1413fa510e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "152fbf21de4453730f7949a126cb74b3",
".git/logs/refs/heads/main": "751800dba24d92a8f4f4359f3570aba8",
".git/logs/refs/remotes/origin/main": "d79eb7a7833ccbd11b49873885380d4b",
".git/objects/04/007584609994e8c0f6feacdc2f8d8ba6e989bb": "e466eadc4fa0300cde9b96bd37b35d38",
".git/objects/04/71d32803ac922cb60ddcbe0fda00aa476d1f33": "20cee879cad571b735a2a26e9338a6a9",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/f3087e81ce21554d9882cc0759922a7f0af3ec": "02273f19b05d54b759cdf55fd2c3256c",
".git/objects/09/9595f87faa1130e8e04a94a7ed4698284b1269": "09b50bbf0dec61adfe49c3b7f6b0b82a",
".git/objects/0a/9068592e8817e8d4b54f63b4458546ea4df4ce": "b3c90519fbd05d030619d1b0f14c0b11",
".git/objects/0c/860873bef7ee10e38bd2fd0b3d702bf7048465": "acc49541cac8d5f504693d8a3caaf3bd",
".git/objects/13/21327e1a898c9a1c8b5565f04e457b98620f98": "092afe8d5e734e9c203b8772a202bcb6",
".git/objects/15/b3b1cbacac861cd6e4fd12f0283d53f81dc8ac": "31185602d2e8032fb98706448c8399b5",
".git/objects/1a/2f8f24367995eea5e86ca02ad975a10d9c5bae": "876e1eae47a68468d5974486069653bd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/a58cbb3ee70cc5b2962af35fa8327ba94b0580": "8dc59386c929ba55c14d0c758b17b0ed",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/66bb4a7e191ebb484e7f7e33ecf02acf4edc2b": "8cb128244925406bb9182e0fd1a59f0a",
".git/objects/29/73ae17bbb3a67f58373378428711f71be7c466": "9181ceb2f1c712c52f2e9ae9675cd354",
".git/objects/2b/2c5d86724bbe485c5e39f09cba9eaaf812a25c": "8a9eb400efb8bb1f23be3340ef33ef87",
".git/objects/2c/1f030ac9a0607bfc427acf164f394990010061": "0a8e2a79f6be6b3c8adcc9f4b3928866",
".git/objects/2e/d12b1a7c182562bee995c5bfead74758b6f9c4": "768fed08bde4386a642c1f673f19e4e3",
".git/objects/2f/195d717fd673927901e1191ddcf109d2e7d494": "4af96d3f7876562c2d772f4b6240b85d",
".git/objects/35/f6276ac7a048d54483d380cf3493a9c5dbd68b": "6499a7b9d6f3f722a1e451b55b93e356",
".git/objects/37/a9d2787dc8b7cfe04bfdcc42f945e2a8abab43": "f6c3a59c2e476fc06cb16948c775be0a",
".git/objects/3b/15af675c233f38e9de78cdc1f6fb60416ae5cf": "ef67453a5ae76c8d5615a77790f3f85f",
".git/objects/3e/c0bbba57878b8811bb6895721c105cfb34675f": "1f7472f5e53e826e551223c581956dcc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/e4a6c87d8d02e19c8d491676b11fbe9fce15f2": "736dffd22dfd6667c96831b763f1472d",
".git/objects/5f/babfa1a84720862a3537ffe12d705106388467": "bc8b4e30c5a5601049a4f86f486f9fc4",
".git/objects/60/3ffb7d79e1f031d3cdab89e7246d4fc4b96e29": "df10cda37f1e98935ee20bb84e0eac64",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/4601d2e05204e1cb9a453a37798f248549e90d": "c786bc0ebcb2b371f7d8d43c1b4ff5d1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/7785fc5df4373044de738510379058603e402f": "4645bbad285bba5f0d4b40405f06ffff",
".git/objects/6d/dba9e194ed7ea5963b652027453f24b103a3bb": "1839cd5d28c901beff1b5302ad2d7a61",
".git/objects/6e/11b8fff19c17cfb01758dab0f427de2641c672": "ac167d8f5d594eeb54c0d7bc0e029015",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/7c2bc9ce5420e1bae7ef71cda9c487783a96f5": "2a4ddd425040624be5c58fedc7e4dc6c",
".git/objects/75/91226b3348d35e58597670fa01d6836b793cdd": "11ead50342612070c887bdcd02bc7481",
".git/objects/76/2b2d4f9afe3dafd2d8e91a7523b76572738ef8": "1a468a72dd031f96771c6692c96c74b4",
".git/objects/7d/95ef7b53549c57caaa8302d761cf2df8a1f7a3": "3fb57353e97d017507f49bde3f3f2121",
".git/objects/7e/f072022916614c0cac935878ea10bfa93aba53": "0a2abc9d6d0559444c171ef93446c62d",
".git/objects/7f/3e6618b07f68ccf82959e8ca71dc33f72a08ad": "b13b3241f4a71b582bb44391c619cceb",
".git/objects/81/c2114275f541f5c7a36c265d0d5028214f98fe": "691fb3b9c3dcae5f60a826b57c3950dd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/267005977e4e446700a19c2d670b7168fb04fb": "96d1015abefaa298b5543fdfad3b1410",
".git/objects/93/c4d195d2386a121d49bcb24dccad169ea30571": "03429f8ea180225738ca00000362ae94",
".git/objects/95/2ae3c27668858b02030a80d5558a4783da57c6": "26bcbdaec3435a18a4c50418d6ed0022",
".git/objects/95/64e2df717e308fad00c8d1987f2e170f7d45a0": "25467deb718caf44c8f7827d42b5b9da",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9e/bfb0358a72f681404bf920456db653b50fee0f": "f59b778092406225b9f194d273f365a8",
".git/objects/a3/bd0f22cfe19d2b80e0dfc22d8a0fc20fdcfef1": "a113b62bce6ab2317d92ffc8fae420f0",
".git/objects/a4/20a2cd9ecb70a9dd2711b6c672db4a3e265347": "9052ecf712d30ad3cc2c9c39f3489ca8",
".git/objects/a8/5c6f00b0e6c9c40fe832e67e6e69ec780eae58": "99cdfe387e9c981d0c7634ed1039b0e4",
".git/objects/a8/99558f4a4cc801c46c37da69e57fe7b9f7c0b2": "4e502b1c25f039a4ae8339452e435354",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/a8/ca7b51c057f0853dbcf9d776cdac14f0ac0682": "3cb2e5e82491966e8983194d9f2e4d09",
".git/objects/ab/1f2b1a5763ac64b6e63e189a8ed661450e9968": "3666780c435bae8b07a608f37c3d2575",
".git/objects/ab/af9e40cc94512c1899bfaf5d3e7159e0ae62fc": "0093d7ddcfc0d436d698b3bedc5f8c45",
".git/objects/ae/f522fb883da4634bb9f3b5db80934058c2a8c7": "d084aa71e934b614fdf95ed10f2e2dee",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/4dc4ed39dad99b64cdc5a70fee09ecd64907d6": "686ee5d899bd4e349c003c38a287ce0e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/c26044e1096f6f58a4a6d8e662fca9b553f581": "0814b0f2ba09d9be7f8857750a62a030",
".git/objects/b6/b1bc456dfa196c5bfe0edca2bfefa9f44f0658": "c929ee32024cc5f0093cd225b555b7fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/76b400b607feafd204871ef2d30e5bef6cc98a": "2c0e616940c89d7e4ce9acbf21f1b608",
".git/objects/bd/68644ed14099c3cdbe7ccf8ef49998eb1766fc": "9fba3a0c17266655ba3325f805d351d7",
".git/objects/c2/5172deea18538f37b110aad1399a0e13cd5bf5": "2a6816c6475c12444aa24372e648cfcf",
".git/objects/c3/270805180209ca646172b918f76f8bd2df9e2c": "0bda38f81f439d9390a0fff42af42070",
".git/objects/c3/94f501846a6d2e8612ffff162ca731ec66d954": "47db0c461ccaa036480cbdb140213cf9",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/9c0e25366a35f560c8a6efaf8cee05d691d82a": "cdbdff99b7fbd76913b0210bfb79c966",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/460f726c23c9f767533f501cb7948e49cb2799": "b6dd55b3517d347142366652a17ef8df",
".git/objects/c9/6c1d1ef0f72897336735b47f3d987533df8258": "ed8528cb48782f866a395892814e88b7",
".git/objects/cb/e3286cab503f912c15f27e330331bfeade4011": "b854d1203cfb47eeecaecbf58cd115ef",
".git/objects/cc/104acb1b65f2d66edadcb59faac6359b73ed8b": "40b5375a3765fbff6b1dd8c8de258673",
".git/objects/cf/7e3e62942e51d53bf5cd041e8ed0fd3fdbcb3e": "3d5ef3e322c43cba53d73e1bbd4f576c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8a516fb249fab7e3f259b3459fe3cbd284f61d": "911dc603647a3ebb34664ee53527bdb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/daaded3ec588defc0e3a29c6cbc28dd3a90178": "278aa9cc47f41a6fa7b0bd61c0dfac64",
".git/objects/df/946d3a1c849113699dc907962864754db40687": "cc0bdfb6d591f56e6a640337406378b6",
".git/objects/ea/7adedfe103659f2299f77a62334d3c17fd7c64": "64bcb4da74395163d71e885dc61d55d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/44d36faf3f73b7295168114ad8b5d51c010f77": "85129460c4d6daaced7efa3ff396a18d",
".git/objects/f1/86289ab754b6521f48ae552b01b33b1ff397db": "1ca39977e3be071843f8f75b4b438373",
".git/objects/f1/dc90d0c43544c79970b6ff57ec0f6e99aff54f": "5f86bfb471b8641b17d03ebf86128a27",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8191f0ca84b221996cfc8f6a9146ea98c0cbdb": "4fb6be335c4274e528d4d0256ee4c43a",
".git/objects/f3/3154e47919560795007e959dbb9ad25fb4a0be": "f32e0e7e99cfa947b6802afb8682cdb7",
".git/objects/f9/36a93c31989647a8967809f75d39f417b3c3ec": "0aaa63c71b02ee53943f24664f511bf9",
".git/objects/fb/8573db9f7e49bed2e9c02e3e56568c77132905": "c410877860e9fa3a50afa2a8868f3c8e",
".git/objects/ff/f6fbdc035f9d5a25c6d7e072e3d5f2a6ee2cee": "d54bbffd462deebf426b199a201b038c",
".git/objects/ff/fc6f437a432b85d312a83d8b607e5142fe79bf": "edb94df55d0255c751da5b807d1628c7",
".git/refs/heads/main": "8636901bd3f75eee5d552073c1e5d48b",
".git/refs/remotes/origin/main": "8636901bd3f75eee5d552073c1e5d48b",
"assets/AssetManifest.bin": "b7547ef67957442d5e49bc26def89da7",
"assets/AssetManifest.bin.json": "eafa4dfadcf116f6fb07488df6eb6573",
"assets/AssetManifest.json": "62d3051045f733b4e209fe972e6a20e7",
"assets/assets/children/c1.jpg": "9660e82b32577f396bb370c6a51c9dd4",
"assets/assets/children/c2.jpg": "7f3268d9f68787a70319d7ad6fe94c09",
"assets/assets/children/c3.jpg": "7f3268d9f68787a70319d7ad6fe94c09",
"assets/assets/children/v1.jpg": "aca66ebebc6593f01209119bcd4ea799",
"assets/assets/children/v2.jpg": "a2304dbfe8fe8742c197d10c52254007",
"assets/assets/children/v3.jpg": "00f2664665c463b2ab39ef8d428b7665",
"assets/assets/children/v4.jpg": "76338bdac1781f60596983de3880d491",
"assets/assets/children/v5.jpg": "c93e9510234c9303ddffa1d2647072c0",
"assets/assets/children/x1.jpg": "42ae0709f6bebda74e2f4b79f18e0158",
"assets/assets/children/x2.jpg": "b88f1fd66611f39eb15efbe7fb97a2af",
"assets/assets/children/x3.jpg": "776e50de88cc5bd28e23e3a014b6d7dd",
"assets/assets/children/z1.jpg": "d7ad825f058b78fdd24a11c4d35ae22a",
"assets/assets/children/z2.jpg": "948087c7c9bbafab16300f089db118ad",
"assets/assets/children/z3.jpg": "68473ff2f7a364ef6e7fba39715343ea",
"assets/assets/children/z4.jpg": "af56acfe104e656242832877f3b0facf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e355f402d77c45fdf425c1a36c76af03",
"assets/images/1.jpg": "71792ded5da0a76a7a149ed16782221d",
"assets/images/a1.jpg": "fe3d5494271229ba0d837276318b8b32",
"assets/images/b2.jpg": "00d22f5fc6296c43ff4a864444df792c",
"assets/images/pag1.jpg": "4a3a3590469f26dec37b16ddf699b80d",
"assets/images/pag2.jpg": "440df45c48cb48d26ef01fa386baaaef",
"assets/images/w1.jpg": "4777eea01ebd5beedb0b5425033dadaa",
"assets/images/w10.jpg": "1773e775c2a17fe69e218d64334323cd",
"assets/images/w11.jpg": "822dff12b56af978c89dbd1b494dc93c",
"assets/images/w2.jpg": "1141710adbf3f0fb8691bf621a19fe1c",
"assets/images/w22.jpg": "28c1462c8d5762cf4a90edf536c22f73",
"assets/images/w3.jpg": "66fe9c4babbf2b918d886fec27d56262",
"assets/images/w33.jpg": "639da422abdf2272a78f1c1c1d35c1b9",
"assets/images/w4.jpg": "37cf4997e9e5b033865e3ea7466a92f7",
"assets/images/w44.jpg": "b9ed9e711cdb37619b7143144e557e58",
"assets/images/w5.jpg": "10eb914472394816566162898f0e182f",
"assets/images/w6.jpg": "d39352c930e6b29f44ef2332abaea082",
"assets/images/w7.jpg": "45777c52dc23313f91e3b8fbc13eec5e",
"assets/images/w8.jpg": "b7ec1c16725793cfddf1a2f96a68ff52",
"assets/images/w9.jpg": "00ccde982d84b136fe376b0b7308213e",
"assets/NOTICES": "9bfa21dce16f0851dbb44610066347df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
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
"flutter_bootstrap.js": "dc08475880c1a4f4b18e059448b3ac85",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99f7bc6db37451e3dcd414b8ad3150d5",
"/": "99f7bc6db37451e3dcd414b8ad3150d5",
"main.dart.js": "e23a38a0bcf61229ef350622a1fbebc4",
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
