/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-04c8f5bc8bfc4a77f586.js"
  },
  {
    "url": "styles.7dc8d12221a2f5576d26.css"
  },
  {
    "url": "framework-3e5fdc5ba728e15d7465.js"
  },
  {
    "url": "2192cc19e677c429cb4f2592426c774329598203-3d16b8bb43a4d728735d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e80719fcd21fae01caa3bdae6c2e1afb"
  },
  {
    "url": "static/webfonts/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-bb593d71d989681039ac.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "b75eeea197974dbdd3cf9561538a6add"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "4b9ec4c78d3f56dd1c03fbe218e4aacf"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "2e0c1849994c0c1c41bb5f37287f9369"
  },
  {
    "url": "page-data/sq/d/2898794040.json",
    "revision": "c5fc1e98c61754925dd5069b4079a7b1"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "a4d219159f8bcbbe548d1257ac675d9a"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5e514db5eb427ac1ed381b0630ceac45"
  },
  {
    "url": "component---src-pages-404-tsx-e129daa4016981e0d8aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "425e090926097a96f9c47136917f5f2d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "a9ce015538545b95db2fd9ea933c422c"
  },
  {
    "url": "component---src-pages-clients-mdx-c904a610ad312c1a642b.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "edc25f539470dfa6002b06f931287339"
  },
  {
    "url": "component---src-pages-dashboard-tsx-9e9cd187fce5ee0f5570.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "789c66f494454070964fc54b8659be79"
  },
  {
    "url": "component---src-pages-devices-tsx-4b10475a90e3edb8bbfa.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "c477e5814b3ab2f07aee6d438ecbc7ce"
  },
  {
    "url": "component---src-pages-editors-mdx-0afaecddbadfe64b6a35.js"
  },
  {
    "url": "page-data/editors/page-data.json",
    "revision": "43eaabd6bd5072cf785b5efdccd9b806"
  },
  {
    "url": "component---src-pages-errors-mdx-38320bee2166732c0506.js"
  },
  {
    "url": "page-data/errors/page-data.json",
    "revision": "31f579f8029cccb9c9e47c027345fc5a"
  },
  {
    "url": "component---src-pages-github-tsx-9674036f541d016b5cfe.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "ace6aa18e05a8825934410cd9ee263d9"
  },
  {
    "url": "component---src-pages-hardware-mdx-d2e01b4de38d793b6b2f.js"
  },
  {
    "url": "page-data/hardware/page-data.json",
    "revision": "c576ed8dc9623920b0639ee1cf78beef"
  },
  {
    "url": "component---src-pages-index-mdx-ddcba5f60732c38fc382.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5af2dc2b84a8c3d1d6aca1305d0a9cee"
  },
  {
    "url": "component---src-pages-protocol-mdx-b4ea9150ad5f3aa09f76.js"
  },
  {
    "url": "page-data/protocol/page-data.json",
    "revision": "ee01f52f451dfb70e9feabc7aed6b9a4"
  },
  {
    "url": "component---src-components-spec-tsx-f224caa8c54cd70b15d4.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "796bd946cd9dd8c33d58a0962ee69de3"
  },
  {
    "url": "component---src-pages-services-tsx-09e5eadc9e8aef60335d.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "30ac1d28b2c037c6c25cc2b32fbdfa8f"
  },
  {
    "url": "component---src-pages-software-mdx-32e1f66a4b986d86fadd.js"
  },
  {
    "url": "page-data/software/page-data.json",
    "revision": "2b3bd8fdaab67ce96b2a9d497d3f17d4"
  },
  {
    "url": "component---src-pages-tools-mdx-b3787dd0977bf93d5e10.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "098958da5c5a26a0aaae5429f73f0e75"
  },
  {
    "url": "component---src-pages-traces-mdx-96577f2a967b54f51140.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "c3882b75178926f2b7d9905ceff2fbad"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "5b1de22c1263e3fa14c3b4ac04be031b"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "959b3f781cd53251e4b4c5d9c5a0a813"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "79661fc7310697d86e141cd5993c6352"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "eea7824bf49b41a3fe4ec792bfb81d30"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "8f5ed1229b032b855923bae1f876593b"
  },
  {
    "url": "301eb992595a5c36dc4f85b7198eba5aa8d9b219-e382ea6e67db664761be.js"
  },
  {
    "url": "6f4c1c0bf129367e1cc094a26409623b877aa5ea-3251b398f09e26877912.js"
  },
  {
    "url": "bf3a9219530892a9214a91e0bfe33001c37cfaf2-b5276fe5427f3cce57d6.js"
  },
  {
    "url": "149f11818c122b40ce2932f15d148eda4aaa5f90-fe0fcecbe3d62ff794ff.js"
  },
  {
    "url": "component---src-templates-service-tsx-ba62a06f5097fb9bf51a.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "31a017be425ad83b18c5fa0dd1541070"
  },
  {
    "url": "component---src-templates-service-playground-tsx-5731579f96ec6e6c2416.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "ec2c23789c245deb611687c5c9941302"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "7c89a3fe787e7eb51f620eec8c5bb93e"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "9182fcef49eca9407085ef1dd3daed56"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "a6d319f7fd88ec34adbf520e6950e2b2"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "b474711ddb304e84d5e484ca3bc126aa"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "b0b38b162315d4b2cec758a939d22564"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "0e883d45fb7de3c95de3275e417e9762"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "47f1a077d61979850d1f70ab4cfa95c2"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "e0ca1d74f4123a9d73c8768a89ebed43"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "468a3a4a5a4449f57d2af14a44abc6c2"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "93e17e5f48dec9fdbaceeaa50766a4cf"
  },
  {
    "url": "page-data/services/azureiothub/page-data.json",
    "revision": "a99ea878e6836258a706b5ec432b050a"
  },
  {
    "url": "page-data/services/azureiothub/playground/page-data.json",
    "revision": "53d2c3fbf10b54ccedd0cf08d1f19cb2"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "3566283f832d49797931c60916e8020d"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "e8732f088fb264aae313fc0415d18295"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "c5f49596206fd97daeb9faa88f2bab5b"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "0260f147ddf2744231f673cdc5c4ff2a"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "1e9f86b7fede9bcded800586310062fb"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "ae8d2ea9469606504524cb0218e49f88"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "9dcca8deb408fccddb56cf7b594450d4"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "5017f7f9638e5eddc3e6592d7b09fdff"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "03086d180833020a64235e98a192e4ef"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "61b71f134f5cdac12d5342ba78b12bf4"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "a50b8650416f2cd9be870d5396c8b1db"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "9bba7c116a24449f24a7be4c4eee7a97"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "0e30a0580fcbcbba3b8d41d9ea8aeca3"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "3c6fa12a7011d894efa9e516b2baa863"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "ababf19c29af2f0bb90844c611ca6697"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "83fa76780d8a32e637376928764abbaf"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "774ef0cb38cb6ff87eba5621872b4715"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "2f9cd0e754b64592d7a411e1b89ebde6"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "e795b4acdadee7ae0a379c7f32f9a92c"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "0a0657aeaa45f71f7b4bdf21d5a2047b"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "231bd6c5c4fa74bed264d7206a6de88e"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "4818f37330fa53535e3022e0007f9b03"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "e43ffa1d18af989a848e59ee0bfe4c2c"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "bba48496e90569b730e47b9e1ce002a0"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "8e3c5af065f47c7fbf627105f900e903"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "9bd7a1834908743caa5def9ccadbf48a"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "958db23950acfd944ecac29bebe90318"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "a1207c111dd4ceaa4e40749667a58ea0"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "01f862cde13fa1f1ed01e0720ae53306"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "ce72a336a3a179cbcba416bcb7da3c08"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "db3f07935fa25c09ddd6f1dcc1054dc4"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "aba0279daa9b84e9f2199a228c1e2d9d"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "6dd98dc1f505226092dcb505b31b339e"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "bd3dd8a63c123204f3c64515ad39fbfc"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "1792af8a16522a132e2220972e99f798"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "e0efe99f8ab3dcc777d7dbd75e2b29c6"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "a8e4994831668d619819daeaa0c74971"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "67da54627ef98e9cfb7d6c06964c2994"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "72f350d44e6312f4a523ad76047adc82"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "560a363e2de580d5c46b8499fadfc64c"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "cc4284d07dff977f69ad7853e0aaee00"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "3de65315185d024a9c959bcbcb57e64d"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "b95174f4225ab284de58d4237779fe28"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "ec85ed52d06710559fbca74494c896bd"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "a0299a9cc34aa6cca87648a44a76fe1e"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "874d80156fb0008faf8ad39aec076a94"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "f0b827f09a1ead17db303e3184041421"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "291232a473d0b26bb41eed22edb95e55"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "5f6781d2319c65f9cb257b415e822938"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "3636303ef5dabca491f70dbc0f41cbfd"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "daea8be8ece7b71c4d38ab3d3bed50fe"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "128db60c6a7723ff0d072bcfb3a94833"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "b5db54906beea44ea23791fbe3c61404"
  },
  {
    "url": "page-data/services/ledmatrix/playground/page-data.json",
    "revision": "82fcf4a4410921d69b361232bc128fb7"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "e13ebab86bd5ed2ca2eece55796c500c"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "5aee6fe77a54a53e11bbeb145874c01b"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "4f7238a01d2d8af6958abe3c423f9ca7"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "815406b6cfda5e4e4f620ad93163f2e2"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "5e39c23584887c428f1c5a72a2e00701"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "9658d3e424fa37dce30cc2a30d346b59"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "ca8de4e3fb4f6171a40ae564603f8f84"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "54ab31151cf280947263794c5dbbdb33"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "fcc824fcbbc95d84a4cd44ddfe7d1daa"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "e76fad28209e37d1fe00ed8e2dd8a1b7"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "bfd2b51f012c7a2204f01d1f9b84d27e"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "849023a3511aebdb4ef092169a36834b"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "660b6206db1c0a4efc67f7d3efae19cd"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "c72ae9886a19c98659567842509e2994"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "a240c60e5ff1fcc9c3b3ca0c0e7fd40f"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "65a6eb5c0f072cc14cc69a896cd3dd84"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "379124a69a0b648f4a707817b73b742d"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "b2357fe6595d22c96a8a7a07657bb824"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "938837725d2ca8e17e21ca89c3efb642"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "144844a6a22e72f22b811cf89e2bc6b3"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "9e0464ce943d1750d399befce0f2a820"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "5819b2ddb758b7886d8cb19a64ed5c82"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "0e66e9951620ed893c13f03886dc1e67"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "9f5a33d4b41f121d4a9c262ed68e136e"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "edb69664b5eca513d32b4f001354cce7"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "5497ea5e67384fae851f47378fccb637"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "7300131c99d184f98c0b895b3482412a"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "f1455905d562d1c41f9c2d6e67fa7d9c"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "251810ce34a946e10e884bfe2e48e7ff"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "55e1c4e8cd7ce83f7a4da54d78c27aa2"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "4e89cf42617516535b564ce3672c4adf"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "1fd2df43431ad933bfbb1fb7e6d60d1b"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "c5e9f685806f546db4fab1b033cbaa02"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "f60fb831b812d7a24bba361e45ec07e9"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "8f95ece61e29052a3aee76c765edd099"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "3db0695ae5909115a22e30f60732fa46"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "683cd543cdee64d8375492ab17806ed5"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "92f3c596e9b56056b1ef7a5be985ea33"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "e873273db13f51094b6dfa0a5fb93576"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "fc846d4c22cee15fc9f8f66acbf5be41"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "031a7b7f37da778fb54a30d8d2803d3c"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "91e960a48979b5180fe914395d096fb6"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "d823b24ab5b7379c705cb7a13b75f854"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "0bf7e84031b5cf67592f9668f570b6c2"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "55f7bc1df909a09a8ac5959993bf8a1d"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "cb9b3c6a794a689a73134f6496eb4586"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "79f660a9da05261302db634c60a1d794"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "809178c7111a06f6b19b345ff623eb57"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "e66c78ea4eac68750d5647f1609f9fe8"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "b7c183e89d394aa2f913dd092a6491d9"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "8a259ae4a07fc0a88204069a97b5abec"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "97548655163569bb6c89b2a28c81c9a9"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "21e3e67797317607e42222e53ee34b07"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "01fca9286795b60b0ea070ffe60e8846"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "1ae8ad6272621217f16d2c4f8e4a8897"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "080d483e9827f2949b5f766e2264a066"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "43d494f5474aa43f8bb13c9893adf3d4"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "110b5230a4865c1c29f6d704eecfd11d"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "13b50bebd7be2ac08032c8c06f4564d7"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "963ab4e01999d9be597fc22b1c365254"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "655114ccf05a7da202fde23c6a6fa9d7"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "9002d908cfcdeda2d9319a81f8da95b3"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "fce9dc2c18478786b6ecccbd0d67b699"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "e847432cf5f3aa7e3c4f9779dffd3b1e"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "4a1e4b8b682fe78b64e33ab3ec1666e3"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "1bd8e8c6602c9bfd75040dcb2491081e"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "1be369d80e34e3620fc02dd90b2fa4fa"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "ef756ba32935afc0a85044ff79187036"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "f7862ea43ddcf2fa8335af0df364cb2e"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "897b6ffc3d9b0e73af41a3c8cae0dc39"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "6beb234be73be3b3fafdb00f54b08a03"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "490c859fdc0818f00389d5ac934552d7"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "27c3a5c7597d6c6ec6bf4cb3ea771a3e"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "cdf9826bae1c24c207177a4a3c57f137"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "63c1173b4299e5eb5dc5ba3daa064050"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "8b80882815eeec22b783a790ac251380"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "0ece6862622ab96f62b39f615010b318"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "af9daf39cbfa543889b3bc9181bf0f89"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "ab25827ad648abd141f958b17f7f5ed1"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "76c36e48f002c3150d15267d12abd3aa"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "9fc67563c7b8471d73ee6e1340968b31"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "97a8c77b554b134a6fbd9d81e0b422c3"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "d2ea07716d7b5ee53f07d59d93109bc9"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "0c931e8f6150e77db86a303dc65f7cbd"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "abc1324a6a80162d8e98e38b3a9602a3"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "c32b67a2ca91735da74b76d89938eff5"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "e1e33da1c2949353f636b95dc369f7ff"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "653c5bb6153ef735a17ae4350a6f6b4a"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "5cdb7078ef8eb8cf6fef8290c0cc3465"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "356c16722b697647c06e9061ec197085"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "a332d468fbe6142614b5b69aa9c76bf6"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "a58416b077c9e48ce004624429b7b58d"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "4c249c0e535300abf32ae5fa92873bed"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "f900991db83e12aafe794a552a6ac2f5"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "112a05ea74040630e642cad3f42b6936"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "4ec747a457a6993f3c0c98e4e93e93f3"
  },
  {
    "url": "component---src-templates-device-company-tsx-6ff3aab6800d8d68ad9d.js"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "2a9dc234a447922f04d412578113c2fd"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-9552aaf6e661661fc512.js"
  },
  {
    "url": "component---src-templates-device-tsx-49e0aa9704b3a6c7d8b9.js"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "dd9d59baa26aa46085ad4f3addab8a7a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccv2/page-data.json",
    "revision": "67eefad2f8bfcb9185bf912b270a2dc5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "76580cfa368dd361e6ac7fcf1feeea08"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "7c0e4e641a20bbb37bbe48a56f2f0a4d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv2/page-data.json",
    "revision": "46d438e3cb4fd1656d14b95957b0efe2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "5f416d4b5fc304bc77fca9a6588d298f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "3aab2503fec34e365593279d3d040953"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "b172a91f2ad551f8f4e6ea82cd01abcd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbtnv2/page-data.json",
    "revision": "c46abe6a15acbcc25e57e0b87504b8d5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv2/page-data.json",
    "revision": "8a8a6addc4674f8cfc364fc92ab6cf52"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv2/page-data.json",
    "revision": "f3bb0bf287686ec6d783660ffa53a0c9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "7a737631d593a946ab8112e7d54b9c7e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "d6fd96c1efdf151b36545c661fc2065c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "18d469b166602615e65a1c3bcbb046d5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "ddf3fa31dc62fda7fb5e822913f8fc8d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "c77449773406ae02fff266a496d7f90a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "a6e1dd5545e40c0d7c4e0ecc4d48a1a5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "a223da8f050449b89deb2a5d6f3d961f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "0ba1b992b2b4bbec52631c5d8f780129"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "c876a14d66abdb1d9c23ef9f447bb477"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledringv21/page-data.json",
    "revision": "13870dd37a164354b867d2660441e5cf"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotaryctrlbtnv10/page-data.json",
    "revision": "87b233eb388c8d28dae8a53df311ee5e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "8ed9fd062b99702fb9d18bdb0a42f357"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv2/page-data.json",
    "revision": "3d3d2bcadd761e0d3f7a1b8a73336683"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsndv20/page-data.json",
    "revision": "afc8b4d4d85e7beaf8ba67d3640fb91a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemphumidity18v10a/page-data.json",
    "revision": "4d0093c6887b2facb40633e742aa81b8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemphumidity18v11/page-data.json",
    "revision": "8fa3b905efddd8da98fd17e4a667008e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "775e718cd95f01c3eee2155c1e8bb276"
  },
  {
    "url": "4345cd43a9669cbe728debadba6874d54d45298f-c5c1f42c91b53909f605.js"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-60782232b120315599f3.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "5c710a1787af15dcbf2f7fdaf90c3265"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-e725fd48ff5777b99fb2.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "29757ecc69f54839e1ccb0233564b524"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-2307c6d5bfe5d31c10a7.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "80f78d11d4e2fea8a442533741a72383"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-6b60c7ec398f16284cb9.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-66eef5a9d2abae8affd3.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "210b2417fd5f24b66090fda9abd113db"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-e0834cc0c1e1cf80cefb.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-4e29e04ce9a24740ddac.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "02de0cac312920fa79e277c2c9757b16"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-0b0ec79d6397f0e6f262.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "8fe6ff1800a66991519db64b1776e223"
  },
  {
    "url": "ae29c6db-5f805869c0abd202e474.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-c94021c0caec1c1abd8f.js"
  },
  {
    "url": "page-data/tools/hid-events/page-data.json",
    "revision": "e5c8e8c9f158efc4a058e7f2da60224d"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-270a43e507291f36f864.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "034149f3bdc19933710486be4b8bdb78"
  },
  {
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-f19921ffd0bf80b536bf.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "5e27b309322ee435de2df4c9e87b8df3"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-9f499dabc69e195d10fd.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "4e22f2045f31b01f92270577261d81f6"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-ed78b2ab553609abc9cf.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "517c47cdf97fecab3302d235b88666c9"
  },
  {
    "url": "73f4d854ede10a3b91bb00b3be5912749eb02c9d-ec6a525374b4f127ff17.js"
  },
  {
    "url": "86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-5cbfddd1c179c4b5f416.js"
  },
  {
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-c8b150793ad6f1f626d9.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-ab98b5424d438a2f1fb6.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "622cab141edba9867d58ee025235ff9b"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "b185746f9008a4dc8fd628b5c6a56049"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-177838eb74ad2bc7e0ce.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "9e462dec9df193d22a34ef7f632b085f"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-b02729aa5a7f9a53784e.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "76d0d81832c131a6137c4742f5d077f0"
  },
  {
    "url": "component---src-pages-tools-player-mdx-52df3eec6db910e3d1de.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "8c17f2a72f7ada5bbfedc78bf67d675c"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-30bac547996c5a20c829.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "31ec6a59aa0c0b12330263f487b87e54"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-45aa3ef52ff1f59e6af8.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "cdd74e11018b89612a32e48e98cbba87"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-9609c4adc748980255c3.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "cc99f3a141b8a465d1bf088bc8f4e237"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-99c7fcf9868f576e7882.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "5f7e54519870b49759242d853d8bca8f"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-1506963db6ac7e769f7d.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "82a3cc880305f8a085385aa77e873dcd"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-c296b1ff1ae16209d84d.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "b9e3549ec8edeee80b5e66ae5ca794f5"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "191467a410f4b06783cb2e3469ab58e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/jacdac-docs`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/jacdac-docs/app-b0b73e1c625cc342bdaf.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/jacdac-docs/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
