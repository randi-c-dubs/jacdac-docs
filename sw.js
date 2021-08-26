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
    "url": "webpack-runtime-0594762289c3eb245b63.js"
  },
  {
    "url": "styles.007e9dceec40bb8df33d.css"
  },
  {
    "url": "framework-3e5fdc5ba728e15d7465.js"
  },
  {
    "url": "2192cc19e677c429cb4f2592426c774329598203-3d16b8bb43a4d728735d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4966ae8f0973865acda905b6336f366c"
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
    "revision": "1b1fd857b03545eeec39954ac2b9bcaf"
  },
  {
    "url": "page-data/sq/d/2307937736.json",
    "revision": "8436cfe3b8bea6519a7ebf8fd3c2fd16"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "9dfc08f44ff664e4039135ed1f90398d"
  },
  {
    "url": "page-data/sq/d/2898794040.json",
    "revision": "c5fc1e98c61754925dd5069b4079a7b1"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "f95d8ddca372e779308c28061f5e29c8"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1522d3cf5f7bbf44f7eef86d2f8c74b5"
  },
  {
    "url": "component---src-pages-404-tsx-98f0c77cb4c5988c8765.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "6f237844099fea443485f63956f4ec15"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5034e1f04e02246083fc6fb11be7e530"
  },
  {
    "url": "component---src-pages-clients-mdx-2d4810be8ab3390e97a7.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "02ccb83b49577e2671a9d6370a223100"
  },
  {
    "url": "component---src-pages-dashboard-tsx-88eba137a19451113143.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "53afd6021015599c97bee7e81cbc71bd"
  },
  {
    "url": "component---src-pages-devices-tsx-878ed1f2a386fdfc2df3.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "f1c4425ddca82459c3def66906fbc8d9"
  },
  {
    "url": "component---src-pages-dtmi-mdx-67409a4ea43d74aef4fc.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "66c4f26bf630c28d0aa28d220810b8d8"
  },
  {
    "url": "component---src-pages-editors-mdx-0afaecddbadfe64b6a35.js"
  },
  {
    "url": "page-data/editors/page-data.json",
    "revision": "942af8badb505a9974c90b42c23dc88f"
  },
  {
    "url": "component---src-pages-errors-mdx-38320bee2166732c0506.js"
  },
  {
    "url": "page-data/errors/page-data.json",
    "revision": "e9794a4b1aa3e8a6dfe38130f65fd17c"
  },
  {
    "url": "component---src-pages-github-tsx-d1fdcde6e73a6ae23c32.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "7d67e6be5ca6d7381c1dbc4a9cce23d9"
  },
  {
    "url": "component---src-pages-hardware-mdx-d2e01b4de38d793b6b2f.js"
  },
  {
    "url": "page-data/hardware/page-data.json",
    "revision": "c95c3ab0df507dcfa2963fbfff339057"
  },
  {
    "url": "component---src-pages-index-mdx-ddcba5f60732c38fc382.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e85193bc93a4e97daf156a803e3d09e1"
  },
  {
    "url": "component---src-pages-protocol-mdx-b4ea9150ad5f3aa09f76.js"
  },
  {
    "url": "page-data/protocol/page-data.json",
    "revision": "ca1490933410797a3f98fa7e8aead7a2"
  },
  {
    "url": "component---src-components-spec-tsx-f224caa8c54cd70b15d4.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "d8fa75afaead0bc46a1a97a4993ba64d"
  },
  {
    "url": "ea5bec84f4245e322b43fa433fccf95de0449133-9b75e9c2cb96db75ecdc.js"
  },
  {
    "url": "0aecae8a7cfd00ef1364c6eabc19d8380bd471c0-79883a2ce78c117df4b2.js"
  },
  {
    "url": "component---src-pages-services-tsx-b3e16acaa55db96aa74a.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "c1465c81b792a7cb54e2b350840823cc"
  },
  {
    "url": "component---src-pages-software-mdx-32e1f66a4b986d86fadd.js"
  },
  {
    "url": "page-data/software/page-data.json",
    "revision": "2ed425433cc59c18d96f33c216dbaad8"
  },
  {
    "url": "component---src-pages-tools-mdx-2e40eb16259e422a9e04.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "8524a23b786893b0db6557681aa9e0a6"
  },
  {
    "url": "component---src-pages-traces-mdx-96577f2a967b54f51140.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "92aeebbdc59ac5786f80335d8c3c4475"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "a544cf9f79e512895e32987b910310a9"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "b645e78528727c19e6e91f73e148b429"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "4025df208fedc0162fc9ae5a063ecb4f"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "c88867fa0e990e08c4c7df9d2ce10f1a"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "df45b5e93fe36b0a11409173104bb8ff"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "4275315654ef40032770f7bac5038250"
  },
  {
    "url": "component---src-templates-service-tsx-3a4ed8c65d26c10c103f.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "a3fcbbf2417f28c34f1d9535b139bcf9"
  },
  {
    "url": "dc58be35c62d4a5dadcd6471e64cc8d64287a99d-25b353ac1415228ebf8c.js"
  },
  {
    "url": "de590f55fa2f17e49ed8680dc5a022fe834f3017-c05477c0eb385eda1693.js"
  },
  {
    "url": "component---src-templates-service-playground-tsx-8044b77ddf44d2790491.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "294420ed95d7fc98e315a668eeabe26b"
  },
  {
    "url": "859a83de993caea7524bf57c2975f3be6812c8c3-54c736e25b185e58fb2b.js"
  },
  {
    "url": "component---src-templates-service-test-tsx-94dd533ea4de91aec4bb.js"
  },
  {
    "url": "page-data/services/_base/test/page-data.json",
    "revision": "a07efbe085745c24e5dce684597c2003"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "60fca65f60efcfd8b704cd2672ae2908"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "bf87b47fd7b74a583af0393e1781ae48"
  },
  {
    "url": "page-data/services/_sensor/test/page-data.json",
    "revision": "149ee35cac59218d2cfb3e9a7d1d04ef"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "f04da399d0333006c81449f98d3cb9a4"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "4546ec695ae6a325f6e0d2b03a8d038d"
  },
  {
    "url": "page-data/services/_system/test/page-data.json",
    "revision": "d724c14888071657b39f1167f769aacf"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "949e752966434a3d32ba7f12053ddd2e"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "86195fca3e585a524b58fd18d1ac1da8"
  },
  {
    "url": "page-data/services/accelerometer/test/page-data.json",
    "revision": "3abc94453a6cc8b992c575662e45600e"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "c02722bacbd28c14a5c331813c96234c"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "108f89cdce9a066c3683c46f53d822ad"
  },
  {
    "url": "page-data/services/arcadegamepad/test/page-data.json",
    "revision": "962c2b561b74301ef9fdb6799064fd6e"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "eadf892f3b1b6217b2490fc812012350"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "efafec9b63804685df3764561197b2c4"
  },
  {
    "url": "page-data/services/arcadesound/test/page-data.json",
    "revision": "b94b3d045214977a7a80099e6f58fda9"
  },
  {
    "url": "page-data/services/azureiothub/page-data.json",
    "revision": "7e663a6396845d1d991545bb10219bc8"
  },
  {
    "url": "page-data/services/azureiothub/playground/page-data.json",
    "revision": "63516cf7400f7c66e3fee18bbf7c7110"
  },
  {
    "url": "page-data/services/azureiothub/test/page-data.json",
    "revision": "28ad657faf06ebe5c9eac43062b578c7"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "6adb8486ba3065193a8500ac74d40bd8"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "58f26f9736a58f9b46da197aec7c4229"
  },
  {
    "url": "page-data/services/barcodereader/test/page-data.json",
    "revision": "776107da36736050384a35ae80b982ae"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "8c5fca45b824cd41af5f3f0b9f134b3c"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "ef791f7b898557acf9b79b63c0ec713a"
  },
  {
    "url": "page-data/services/barometer/test/page-data.json",
    "revision": "ccacb89ca2e7efc5e3bb05e905d2ce3e"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "2023d40a4af4f9eb0faa65cf3fa04f2f"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "90b8de5c887c51b11de140e9cdebbe95"
  },
  {
    "url": "page-data/services/bitradio/test/page-data.json",
    "revision": "c9dd28f45d8276d995d561f42ba0711c"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "9581ab15c334dde4ba4c7b8627e3b2e7"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "61e27c64969a6281a7669f0c06c15d81"
  },
  {
    "url": "page-data/services/bootloader/test/page-data.json",
    "revision": "685ad447ef250cfa8e9c2f6f32d95826"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "4cc9efc7594cd1beabbda82a475a7e4b"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "0f1208fc1089467dc712ba4e7e2673a0"
  },
  {
    "url": "page-data/services/button/test/page-data.json",
    "revision": "cc754ceb49d5e709a626c8802094fdb2"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "3f455c0bdb079f949c8d6737d4c422fb"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "9f4faa3f9dcb0aa9aea45af7fe4bcfc8"
  },
  {
    "url": "page-data/services/buzzer/test/page-data.json",
    "revision": "0232355d9a5c5181b089ba5653a274b2"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "c41706bad2cd8a2171c4a7e7d6d1d642"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "14cab61ed1db118ab8e4f59f2863dbda"
  },
  {
    "url": "page-data/services/capacitivebutton/test/page-data.json",
    "revision": "2ce0e4ab97e5d71c5f5623ce5d2fd39c"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "8d43db0a7126b090b990551668fa7475"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "654147cf690a800eac6ada2847b85274"
  },
  {
    "url": "page-data/services/characterscreen/test/page-data.json",
    "revision": "359c0a161749ff887326f31ded2a3c2a"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "75516de1075ce87e10e24fd1992fa517"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "0eefbd0c9c1aae83b7110faba2c25011"
  },
  {
    "url": "page-data/services/color/test/page-data.json",
    "revision": "10d6e8ed27386b9d96d6f4372fedcfd5"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "05143019c554a50cffaddf51b12586f4"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "793b8b4a19a599a74d9e2dc84a743729"
  },
  {
    "url": "page-data/services/compass/test/page-data.json",
    "revision": "005110e97faa25ba2eeb900084d11869"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "1048f55cc85e089ea62adacc84ba8fa7"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "b887691066e9629f9e5b7a84d80c1b47"
  },
  {
    "url": "page-data/services/control/test/page-data.json",
    "revision": "95be01a7b00091ca333cea58181ac2f2"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "3b119d39ba11396ca277596032d00b2e"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "ae98294c43ac7c45e4d77a70b9e44432"
  },
  {
    "url": "page-data/services/dimmer/test/page-data.json",
    "revision": "2fb8515163a5bebe5ed4c795162d3e63"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "c95e34009dcec4f81c0b93029d8ceab3"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "1ecc69d70eb8cf447186d3c8f4490674"
  },
  {
    "url": "page-data/services/distance/test/page-data.json",
    "revision": "51322d786e37f95127b9100b84c5de5f"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "073a38c4655b7792ae330050648fe2c1"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "6d5f6120fd9eec89f8b706dbbc1b3c8b"
  },
  {
    "url": "page-data/services/dmx/test/page-data.json",
    "revision": "a7262a22c144424eec3cc3663aa594e4"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "262bfed0ceb9b79b6bec124c85fe96f7"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "08acc5b7cf36e4057d9ffdf93e505e7a"
  },
  {
    "url": "page-data/services/eco2/test/page-data.json",
    "revision": "7cfa9f9fc1da9ec6329100c0f413d1e3"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "85aa2d087d797b523722985793102ead"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "ef34fb323979a02f3da89aaa86749fb6"
  },
  {
    "url": "page-data/services/gyroscope/test/page-data.json",
    "revision": "fc1118f25be550cf120c8e57d2caaa3b"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "4dab4d364e6cdaf10dd77a7bfb3b20bd"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "61eaeacb6bcfbda13faa5f3c25536294"
  },
  {
    "url": "page-data/services/heartrate/test/page-data.json",
    "revision": "52bb9a3835fdbde4150327feb70db1e9"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "c4ad0213c2720900a488bb6ec09fd75d"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "4c3fa853130624d0aeaf41a0a1687eba"
  },
  {
    "url": "page-data/services/hidadapter/test/page-data.json",
    "revision": "3d4247fc01d37b8021440aec973af13b"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "69c157ff13c5d527be9d1dd30d91dac6"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "bf01b68a49343a4667618c2dd2ebd0f1"
  },
  {
    "url": "page-data/services/hidkeyboard/test/page-data.json",
    "revision": "beacb790d30c209fe0a82f91d05327d5"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "ba9d37707937ab5a3868c1151e3035c1"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "7bb2a892299576ca8f40eb64c1838b16"
  },
  {
    "url": "page-data/services/hidmouse/test/page-data.json",
    "revision": "e196497d2504e3aec2d40f49477ece37"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "cc37adee4fdd7a760b80cd8686772b06"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "2d495e51af3d3a05f011e4f83266508f"
  },
  {
    "url": "page-data/services/humidity/test/page-data.json",
    "revision": "cd03fdf210115652279bae17049c4851"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "b784785058ef173dcab1dd48878841eb"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "59e57acab6815967dbc113d6f949145f"
  },
  {
    "url": "page-data/services/illuminance/test/page-data.json",
    "revision": "f45d59d40b4d33f6a205fa8206477cd0"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "68be0aa818b985bd0d692902fd1ed5f7"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "bce84229835dacc718ba5a2debe64c99"
  },
  {
    "url": "page-data/services/indexedscreen/test/page-data.json",
    "revision": "7f25c99a4d1f48528624a04842dd7b33"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "e552dfd97c1c3f373698a9a5197de8a6"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "b84cb42d85d57e15b9635704c2a522b0"
  },
  {
    "url": "page-data/services/joystick/test/page-data.json",
    "revision": "c3521df73871c3f1ef0483fd37cf900e"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "129fdf0d5e31f11a52212ae612f987c2"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "26a1dd3e7b2141175800ec62eae98d2b"
  },
  {
    "url": "page-data/services/led/test/page-data.json",
    "revision": "895f18d344626398a3fed50e683f6c32"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "09f41bb1f93aed7ae363b09812512ae2"
  },
  {
    "url": "page-data/services/ledmatrix/playground/page-data.json",
    "revision": "ef7efd543573e4250166840bc5853fdc"
  },
  {
    "url": "page-data/services/ledmatrix/test/page-data.json",
    "revision": "58c9b4cf38cfd1812d452fd6bf341229"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "3792fe1b81b3db187ddeed1c51955d47"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "24d4620a26c3f653266ba3c97705f435"
  },
  {
    "url": "page-data/services/ledpixel/test/page-data.json",
    "revision": "fe19516d1206c8ea5e67d6037c603a84"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "851a9db9c9a4886bce9a4e9fae857a67"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "5a545d856a08b1b8531512f9609bdff0"
  },
  {
    "url": "page-data/services/lightlevel/test/page-data.json",
    "revision": "642ea39e086285ea9c8b59b769a35bd4"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "2d2bb2524b5a97835e0bbdde12c4ae9d"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "57990106097f1dca626d96ffcdd313e0"
  },
  {
    "url": "page-data/services/logger/test/page-data.json",
    "revision": "81f4d4c364db96e48a0467bd853d35ea"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "9f32cc79c0a849d3b8f656e1a380fb60"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "2a98387dbf3db51303323d8c08542138"
  },
  {
    "url": "page-data/services/magnetomer/test/page-data.json",
    "revision": "bd9fac5eff67b8045ccf813777deca4d"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "11e2c2b03f5d1c1ac0cdfe0d1dfb4af7"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "2c2488d948d294ea0995f3b736b0ab27"
  },
  {
    "url": "page-data/services/matrixkeypad/test/page-data.json",
    "revision": "f564d7b2cbdfd84476d3f8c461d4f6be"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "8338fd75f5119e7445624d2c6a37edfd"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "3c043d4690a14443cf20b2ecd5286e49"
  },
  {
    "url": "page-data/services/microphone/test/page-data.json",
    "revision": "9c948ecf610a9d1308a39dd3f44a556f"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "4f13a684410701f0f5590b76b9b0b65d"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "a1ae3472121c767df9c8bcaade23fcff"
  },
  {
    "url": "page-data/services/midioutput/test/page-data.json",
    "revision": "6a1267747bfbfff217350d03a0acaac0"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "6a5dbdf0027cf3afeb2ba7017c7ba5f7"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "613aff2259690b93ae42aad6b24b9b70"
  },
  {
    "url": "page-data/services/modelrunner/test/page-data.json",
    "revision": "24af948ffb1e87bcb4f8ddb98dc9069a"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "3b75dbccb48be68a7eafb5edf6fea5ba"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "e32e743a66be41b5d7e298fcfa722504"
  },
  {
    "url": "page-data/services/motion/test/page-data.json",
    "revision": "bb1e7faf035559b395a4685edbd71639"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "990bc83280ee284885af1f9c9fcdbdad"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "a44cf21a345cd80e6697239e2832aa78"
  },
  {
    "url": "page-data/services/motor/test/page-data.json",
    "revision": "8b010871a12e529938b467d0689a3cd9"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "e1494aee4c8aeae8e3bd4983f6ec4490"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "374b65a8c9cd547b44ea62e272c79279"
  },
  {
    "url": "page-data/services/multitouch/test/page-data.json",
    "revision": "21b59212d696343f6400703cb22642eb"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "e68ad25d5243669f7ebdd5f7dca00c75"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "11b771aad237bcef23ad4d9448bcb58a"
  },
  {
    "url": "page-data/services/potentiometer/test/page-data.json",
    "revision": "98caace796d0fa7b096a594a11ca4a5a"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "6c9c0f67fed5959ce5801d1eb13f96ac"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "88f65d94d05fad4d408a121977033e49"
  },
  {
    "url": "page-data/services/power/test/page-data.json",
    "revision": "dade738fcf615ef24fc7dd1f1e59c272"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "85bf6743bcde770bebba4fbb84e9cf91"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "5e146b22532684149fbbc5e2e12ff8fa"
  },
  {
    "url": "page-data/services/pressurebutton/test/page-data.json",
    "revision": "e8c6091a30ec69cb8d3eb6f5c3bebb6c"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "17dd78a37c8d987384660fddd8682a8c"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "6e66496ef63cb840f41fa3c599a6c09e"
  },
  {
    "url": "page-data/services/prototest/test/page-data.json",
    "revision": "8a08dfc4ddd938f41ffe1fb99e314ccd"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "236e4a97226e173835f527f4b28d0ea1"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "ed75d311e3cb47d705e52f328bf772c0"
  },
  {
    "url": "page-data/services/pulseoximeter/test/page-data.json",
    "revision": "6d68dab343b4fca80e078b386733d8de"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "1100bee83fa26be47f71b0b0174b7cfe"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "34ff816d8d8e6dfbc1a6191a8b332569"
  },
  {
    "url": "page-data/services/raingauge/test/page-data.json",
    "revision": "15e8fe1d73cb2d9ce21934c15444380e"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "2b87d9e964e7ad13aeb3eff8ba03765b"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "62e1402a7e2b3440f1acf827bd0d31f9"
  },
  {
    "url": "page-data/services/realtimeclock/test/page-data.json",
    "revision": "a4e842d464bf90449e24723501fa2a0c"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "e476ed9006bb823ad04191b3b53dc362"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "99c69cd8a1043619d89c1c4356998eb7"
  },
  {
    "url": "page-data/services/reflectedlight/test/page-data.json",
    "revision": "97a9f47d7cce83e154721714d21074fc"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "99c0bce429baa7e55480b38ce1f4b1b1"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "fa3ded8755a5c44367ad4f97a490a062"
  },
  {
    "url": "page-data/services/relay/test/page-data.json",
    "revision": "2677a2f3fca234a25b35ef2d6ec8f766"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "d3cda89635a0dddd23b55e04a1e07ec0"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "359a4d21ada439a78e9f5b0e3e4482d9"
  },
  {
    "url": "page-data/services/rng/test/page-data.json",
    "revision": "459c91b8acf3ee7f3dfca6dddbde4e7b"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "63297cb4628eaee383eaab9e7ae0a7ae"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "21314fcb459cb2cb2c4895fc99ca34cd"
  },
  {
    "url": "page-data/services/rolemanager/test/page-data.json",
    "revision": "94645fd167d03a5987305f1cecbef823"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "07536689ab84cc046abca001306a9747"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "a9aa517ba8f37657b62b45b1e3a4485d"
  },
  {
    "url": "page-data/services/rotaryencoder/test/page-data.json",
    "revision": "623561e6b89865780c32a0b4f13e70cc"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "88071a5a34150b6ff8e1aa82ee239e41"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "2d337ef60f7bca3dd112db3552ff477a"
  },
  {
    "url": "page-data/services/rover/test/page-data.json",
    "revision": "01d3e3e644a45156823b13cbb19e0bd1"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "daf08ce031f0bff912c86597ef4cec59"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "265450833ab9bf3d4cf07d504273e72c"
  },
  {
    "url": "page-data/services/sensoraggregator/test/page-data.json",
    "revision": "460c7e6314bc1f3fbad7d3a60b94052f"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "851b1549d2db302b73b699fa59c657d0"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "12c33a64c5efb0c0a166899513a0928a"
  },
  {
    "url": "page-data/services/servo/test/page-data.json",
    "revision": "e29f7b9724b3f63520e0a5cd80b5e8c7"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "53551749b37cce33f50f52ef819c4ed1"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "9f721888e80a5c5990b4661d4125d75a"
  },
  {
    "url": "page-data/services/settings/test/page-data.json",
    "revision": "59bb038cee6dbc2ca15d930b56da3694"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "d62f9291dadd5aee43b0cdd25760ea06"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "e91b0b791ecfc1c0dc3d50311b3157a3"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/test/page-data.json",
    "revision": "d68fa2b00e1c83f97ba22b9344debc6d"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "02c66c5662bd27fa02b9e94982ae2d56"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "a77d202b02fd94377dde684556b74f13"
  },
  {
    "url": "page-data/services/soilmoisture/test/page-data.json",
    "revision": "c19714952dc248e8201549a83bd18b5c"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "7ad5cfa9e5fa0eeedbe750d00799e8af"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "99543d2248999fdedde117d9b630c629"
  },
  {
    "url": "page-data/services/solenoid/test/page-data.json",
    "revision": "ed9c0b668af843823993fa4be8c9ee74"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "1c38d078b47b4e517d6031e2c6e54438"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "0d90415ea470ba6b4053c8f181b164f5"
  },
  {
    "url": "page-data/services/soundlevel/test/page-data.json",
    "revision": "c5dee90638fd44c6c3d0df2e1acb4cbb"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "8c86a07b589323e8b94bf2fafb964919"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "4973f1058eead48413a4ed2c6f0e302a"
  },
  {
    "url": "page-data/services/soundplayer/test/page-data.json",
    "revision": "dae0925916bd51ab39d67aa6ccbfef0a"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "9ae981fceeb4c1ce4640eb9764bb6e52"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "a2bb05fb3b713886c4b38afc95470a94"
  },
  {
    "url": "page-data/services/soundspectrum/test/page-data.json",
    "revision": "46821b610c9d7236b53e4abd860ac43f"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "7b25422785cbd1cfab73e5c61544d1d4"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "4afa9dd93af474b8767df6517ab2b1e8"
  },
  {
    "url": "page-data/services/speechsynthesis/test/page-data.json",
    "revision": "bb9baf82258daea33397b456db6a7633"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "47cdcdcb3c86f1a210134494cd63c9c6"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "085f2be1f3e3f0762f3c3224aaf3b0a0"
  },
  {
    "url": "page-data/services/switch/test/page-data.json",
    "revision": "1a7f2ca88a6c487ee111e31bf4120094"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "b9c34d8d209baa5b9bd2bcf694542944"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "9b71e5b1749e6a32e96cabae3cd631e1"
  },
  {
    "url": "page-data/services/tcp/test/page-data.json",
    "revision": "f51731a3577390c7ae0074cd277403e6"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "eb3b4573f23ff80eae8e5b1829571809"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "08a453e19a090e3f3e2ab70c1c10e026"
  },
  {
    "url": "page-data/services/thermocouple/test/page-data.json",
    "revision": "55cdad37edd45123ad888579b316d488"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "ae6ce11098f20603b8d152030a8f59cd"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "09e6991d7d3c2d5e7cee61b965033f47"
  },
  {
    "url": "page-data/services/thermometer/test/page-data.json",
    "revision": "e0542ec0af940c99d32ecc368d24e395"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "c364e857324a6192683c46fa48dcffe9"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "e6b192de31aa3f101cae7d9d351e65c1"
  },
  {
    "url": "page-data/services/trafficlight/test/page-data.json",
    "revision": "be0e3076a5319c9cd24b5334a65328e8"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "739181f1e8f48f796605db879edf7a03"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "179ffab37c6b0e189a55cc813aa12062"
  },
  {
    "url": "page-data/services/tvoc/test/page-data.json",
    "revision": "b25e23e5578722e52e4436ecdea757fc"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "467dfb11fa669d5c774db32a071f34d7"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "e5ea9ca244a7cb28d182f1de2bafe56d"
  },
  {
    "url": "page-data/services/uvindex/test/page-data.json",
    "revision": "5db612caea71bafee9aa71afbfc8b916"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "8fdabdf8586e4215b58555ed9891821d"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "24ecc43d58f555c7e36d7135f4b1d48e"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/test/page-data.json",
    "revision": "6ec7e1bc55c9e55adcc439b6a9bc52dd"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "a0187dd31a8f9745cb0fe23308a7e67c"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "73d7a106d9a02c4848814fb8b236b89c"
  },
  {
    "url": "page-data/services/vibration/test/page-data.json",
    "revision": "de0b95c7594b2061b19a3689bbd9c48e"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "e7984e81cc9c278ce12f824d827dcf54"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "cda3ca99f32937856090e30917472923"
  },
  {
    "url": "page-data/services/waterlevel/test/page-data.json",
    "revision": "54bbe6a5b70ce3d7ddefdf73dfaa1634"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "a3bc05ebee78f881d1c7adaafc55f7c7"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "ba1bffd8f91f5f1eb3b45f93237cf8f2"
  },
  {
    "url": "page-data/services/weightscale/test/page-data.json",
    "revision": "65f530bbc8e33c23286edbb07cb097fa"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "1128f8e3a1b77a6282164066151b61aa"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "9d2ab5334fde6b3c0491c9fa760e6289"
  },
  {
    "url": "page-data/services/wifi/test/page-data.json",
    "revision": "032637e641250bd6bee011b5580276be"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "e27414a001041f9d3fbd48bad4318b13"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "1db95ba49e9881265efc62928bd2dd17"
  },
  {
    "url": "page-data/services/winddirection/test/page-data.json",
    "revision": "7853f3ce1140d2cb58d86b133c1dc471"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "e77d1aabc01572372920069fe4073b05"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "4ff5dbdbac3fa9b8a4bef766c875cb01"
  },
  {
    "url": "page-data/services/windspeed/test/page-data.json",
    "revision": "c1ae688dfe22ea1c4fb0c909fab2e807"
  },
  {
    "url": "component---src-templates-device-company-tsx-8377e3f53ae3ab6ebe9b.js"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "f54b6750a2eba52b4a35665f346acf50"
  },
  {
    "url": "0effc74e56a0f70339cc78ece98eb7769115131f-b71d6bc177bfc2ea647c.js"
  },
  {
    "url": "21dcdf5bf47d35eb811ed762f1cf7aa618b8aa40-24fe9ed079780ae8a801.js"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-fb77530651990e570285.js"
  },
  {
    "url": "a3a27a20230fe5f955e16317700c8a715e967c5c-52328691daa1b44e91e8.js"
  },
  {
    "url": "component---src-templates-device-tsx-e2c72726f8b7e391727d.js"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "66d556d7c0a9d4287e0db6a35c2d25bf"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccv2/page-data.json",
    "revision": "e1a7056d199623d3118e7100dbe567c4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "b409a3215e0907bf81377439d5fedd26"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "1923b312bbd4372c4dc1c8f28286a774"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv2/page-data.json",
    "revision": "aeafaed2a1cfe2d1b7a84af3bb5eeb04"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "f8fbe81c2029764aea4e56d2917885b2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbtnv2/page-data.json",
    "revision": "0bd26cd7746903f1334ca523218d7a58"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv2/page-data.json",
    "revision": "f196bd124bb9bb31f8d82cf8539f1a0f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv2/page-data.json",
    "revision": "3a77750793b7229dc7fa7281c402717c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "b9b319465f3cb180e2328a9c92d47085"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "d97c5cf0e48629f8da5470197fb11b93"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "488ae33f06b43423fd70898b871d3911"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "14b52d7e1559b2c342600745185a0124"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "3ee632eb2986058e64eaec8698a83c78"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "ab6335cc1bb00bcf8882ee5cbb9d93f4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "84a81ad6c3393acce5ab69649b21ab32"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "b9aae5385aa8fa61f4945916fd2da8c9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "12df39949bd998148598a4fa5b4e3b6e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledringv21/page-data.json",
    "revision": "f0e3ade8910bcc55d4bcd5825b6d2f07"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotaryctrlbtnv10/page-data.json",
    "revision": "ad4d5cba4b65de8bfe1a5204464fdbbd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "d71a1643867370f9dbe3e1f40f25cab4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv2/page-data.json",
    "revision": "f57ae602175c2458dff53d030494f685"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsndv20/page-data.json",
    "revision": "19f2b1a2b6bf18f7883f16bd09a93e95"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemphumidity18v10a/page-data.json",
    "revision": "e0e301f6d5b7c4c099f12e47680c165a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemphumidity18v11/page-data.json",
    "revision": "d2288a74cac842ca4729ed3cd2cea89c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "f232bcb10a27ad6178c5c6459222b4ec"
  },
  {
    "url": "4345cd43a9669cbe728debadba6874d54d45298f-491a0812c238c9f80222.js"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-60782232b120315599f3.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "273fcc1303b0ebbaf7610c7c8f9b5c94"
  },
  {
    "url": "component---src-pages-tools-azure-device-templates-tsx-43f5c483acff3c965a74.js"
  },
  {
    "url": "page-data/tools/azure-device-templates/page-data.json",
    "revision": "f910ea0b3b97ba4fd33041873bd1cab7"
  },
  {
    "url": "component---src-pages-tools-azure-iot-proxy-tsx-7ffca9cfada6df4a94d2.js"
  },
  {
    "url": "page-data/tools/azure-iot-proxy/page-data.json",
    "revision": "b48ab5cbf34f9944030e03ef909520d5"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-8c83cf3080df64af7121.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "37238383e64365036a184e0a34e9287b"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-5718e43d211647938742.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "7f04e16b510964811bbd91bc108b885a"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-174ef8eca4d5a0ee3533.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-e30c85cb9a61b2f2f0bf.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "45f1d1c01bf30568a078501c209628c7"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-0d996c0fcf9708fd33ee.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-4e29e04ce9a24740ddac.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "766a6aa6b1aaba807a903170358fb9e8"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-0b0ec79d6397f0e6f262.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "b9066316c9f0c4bfecc62a0477fa1fc6"
  },
  {
    "url": "ae29c6db-1d1748416d0aaeff2634.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-82b2ab60e7701a506cf9.js"
  },
  {
    "url": "page-data/tools/hid-events/page-data.json",
    "revision": "7ca74ed31081213d5cdbca0c39bc5c22"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-270a43e507291f36f864.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "b6c300b15b3dc3b3a622d97bee697abf"
  },
  {
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-f19921ffd0bf80b536bf.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "fa494349871e85ce65b30731ba6caca3"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-2e2170a13c56f640562a.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "8947fc0103e5fff2930cfad3589bdefe"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-696faa9cdd2e5b3387fe.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "f2be35c2d92f599a4377b13f26ebaac8"
  },
  {
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-aacd0105007aef51cf3e.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-1e5f6d90ddf900de8603.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "50c2b00e77acaa7534aaa2419e08a127"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "dd0ba7f71664937dacbb04a6fef83fe6"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-90340e92d4e64f04def0.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "dd7546396d8a9189bc2a9ebe7b3dfd10"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-b02729aa5a7f9a53784e.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "b6ef55d6b6af52aa37b3cbc924d27eb7"
  },
  {
    "url": "component---src-pages-tools-player-mdx-52df3eec6db910e3d1de.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "70cae56671090176591ed5575429c37c"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-61193676c451134d735f.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "5f0cd11590e898522e29ba64a22063ed"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-71432b6d2371141892fe.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "495dce995bd5bea85c7f19e2ba8375ae"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-5fa1ae4aacf179e2e9e0.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "24aa260ae9b92bcddef5662363f28376"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-99e4395157f213c0136c.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "8a08beeb9f2adb5d8714250f6b3f644c"
  },
  {
    "url": "component---src-pages-tools-service-test-tsx-f7bdda17e61020f11d19.js"
  },
  {
    "url": "page-data/tools/service-test/page-data.json",
    "revision": "5b2069ddf8619e5751cb281370613843"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-1a5abcacf51a3171c692.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "e1c029c7609cfca9a868fd75690375ed"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-85756c7ea27e4fe53c11.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "96860c90dfade821f1fc55c2247215e1"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-c296b1ff1ae16209d84d.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "b773a2e001ed82db9e2b3703234fffb1"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-f1f509c23a7b94db8e62.js`))) {
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
