"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3455],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return a?i.createElement(k,l(l({ref:t},m),{},{components:a})):i.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8669:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),l=a(3580),o=["components"],s={title:"LibreTime 3.0.0 alpha 11"},p=void 0,m={unversionedId:"releases/3.0.0-alpha.11",id:"releases/3.0.0-alpha.11",title:"LibreTime 3.0.0 alpha 11",description:"Contributors",source:"@site/../docs/releases/3.0.0-alpha.11.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.11",permalink:"/docs/releases/3.0.0-alpha.11",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.11.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 11"},sidebar:"tutorialSidebar",previous:{title:"Unreleased",permalink:"/docs/releases/unreleased"},next:{title:"LibreTime 3.0.0 alpha 10",permalink:"/docs/releases/3.0.0-alpha.10"}},u={},d=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\u2b06\ufe0f Upgrading",id:"\ufe0f-upgrading",level:2},{value:"Analyzer certificate verification",id:"analyzer-certificate-verification",level:3},{value:"Analyzer new command line interface",id:"analyzer-new-command-line-interface",level:3},{value:"New configuration schema and validation",id:"new-configuration-schema-and-validation",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Log files new paths",id:"log-files-new-paths",level:3},{value:"Services new working directories",id:"services-new-working-directories",level:3},{value:"Analyzer new <code>ffmpeg</code> based steps",id:"analyzer-new-ffmpeg-based-steps",level:3},{value:"No static files for the API",id:"no-static-files-for-the-api",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Ubuntu 18.04 Playout Status",id:"ubuntu-1804-playout-status",level:3}],c={toc:d};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{date:"2022-03-28",version:"3.0.0-alpha.11",mdxType:"ReleaseHead"}),(0,r.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,r.kt)("p",null,"The LibreTime project wants to thank the following contributors for authoring PRs to this release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@jooola"),(0,r.kt)("li",{parentName:"ul"},"@paddatrapper")),(0,r.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use setuptools entrypoints (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1409"},"#1409"),")"),(0,r.kt)("li",{parentName:"ul"},"Support php7.4 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1354"},"#1354"),")"),(0,r.kt)("li",{parentName:"ul"},"run API tests in CI (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1421"},"#1421"),")"),(0,r.kt)("li",{parentName:"ul"},"add support for Ubuntu Focal 20.04 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1168"},"#1168"),")"),(0,r.kt)("li",{parentName:"ul"},"debian 11 support (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1292"},"#1292"),")"),(0,r.kt)("li",{parentName:"ul"},"create libretime_shared package (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1349"},"#1349"),")"),(0,r.kt)("li",{parentName:"ul"},"enhance libretime shared (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1491"},"#1491"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," let user provide the log level (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1493"},"#1493"),")"),(0,r.kt)("li",{parentName:"ul"},"replace verbosity flag with log-level flag (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1496"},"#1496"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," enhance playout logging (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1495"},"#1495"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," update env var settings loading"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," allow to run without log file for dev"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," enhance analyzer cli and logging (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1507"},"#1507"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," migrate notify cli to click (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1519"},"#1519"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," allow loading from ini config file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," allow cli parametrized decorators (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1527"},"#1527"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," add suffix to shared config models"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," load config using shared helpers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," change playout working directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," load config using shared helpers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," analyze replaygain using ffmpeg"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," analyze cuepoint using ffmpeg"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," change liquidsoap working dir (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1547"},"#1547"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," rename log filepath (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1551"},"#1551"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," add url/dsn property to config classes (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1553"},"#1553"),")"),(0,r.kt)("li",{parentName:"ul"},"remove locale generation from installer (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1560"},"#1560"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," consolidate constants (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1558"},"#1558"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," add db config defaults and allow custom port (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1559"},"#1559"),")"),(0,r.kt)("li",{parentName:"ul"},"remove unused ubuntu ppa (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1591"},"#1591"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," do verify ssl certs on requests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," rework analyze_metadata step"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," improve uwsgi systemd integration (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1614"},"#1614"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," rework organise_file using pathlib"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," load config from str filepath"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," create general config model"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," create time functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," return log level and filepath"),(0,r.kt)("li",{parentName:"ul"},"remove unused web_server_user config entry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," clean config parsing and add defaults"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api_client:")," load config using shared helpers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," load config using shared helpers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," do not exit on missing config file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," remove admin app and static files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," load config using shared helpers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," replace massivescale/celery-php with jooola/celery-php"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," set celery timezone to UTC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," include id in file/webstream serializers"),(0,r.kt)("li",{parentName:"ul"},"remove uninstall script (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1682"},"#1682"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," add service log filepath (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1640"},"#1640"),")")),(0,r.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove rogue buster reference"),(0,r.kt)("li",{parentName:"ul"},"correct vagrantfile function call"),(0,r.kt)("li",{parentName:"ul"},"declare pypo.notify module"),(0,r.kt)("li",{parentName:"ul"},"revert removal of eval for shell commands"),(0,r.kt)("li",{parentName:"ul"},"add missing dependencies to celery module"),(0,r.kt)("li",{parentName:"ul"},"assume api client is installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," fix tests"),(0,r.kt)("li",{parentName:"ul"},"change filepath options type to pathlib.Path (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1506"},"#1506"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," validate id param in show image controller (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1510"},"#1510"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," optional log_file for liquidsoap"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," require click >=8.0.3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," correct linting issues"),(0,r.kt)("li",{parentName:"ul"},"make vagrant source.list update idempotent (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1520"},"#1520"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," duplicate exception raising and close file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," api migration config variable name (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1522"},"#1522"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," prevent child override by empty dict"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," tmp_path fixture type mismatch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," install missing steps package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," type is required for default config submodel (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1536"},"#1536"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," default values when array is null"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," do not catch too broad exceptions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," add more null check in api live info"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," only render if img creation succeed (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1540"},"#1540"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," pin loguru version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," clean sql migrations files (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1545"},"#1545"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," set logger encoding and dont assume encoding"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," proper logger format string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," only exclude ended file event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api_client:")," use same date format as schedule key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api_client:")," properly enclose events in media dict"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," properly populate scheduled_now_webstream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," revert default storage path (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1563"},"#1563"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," update setup with new db config schema (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1567"},"#1567"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," do not strip vhost slash (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1594"},"#1594"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," remove bad attributes in shutdown handler (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1605"},"#1605"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," update docstring for organise_file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," fix missing port in public_url"),(0,r.kt)("li",{parentName:"ul"},"change celery user in worker service file (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1638"},"#1638"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," model_bakery is a dev dependency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," static_url settings is required in dev mode (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1662"},"#1662"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api_client:")," comply to legacy schedule events"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," remove stream_buffer_start in event dispatch"),(0,r.kt)("li",{parentName:"ul"},"add PPA for newer liquidsoap version on Ubuntu"),(0,r.kt)("li",{parentName:"ul"},"upgrade python packages during install (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1707"},"#1707"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," test and create correct log path"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," remove rougue reference to /var/log/airtime (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1710"},"#1710"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," remove /var/tmp/airtime reference"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," drop logfile reference until environment variable expansion works correctly")),(0,r.kt)("h2",{id:"\ufe0f-upgrading"},"\u2b06\ufe0f Upgrading"),(0,r.kt)("h3",{id:"analyzer-certificate-verification"},"Analyzer certificate verification"),(0,r.kt)("p",null,"Analyzer no longer ignore certificate verification when performing a request. We recommend using Let's Encrypt to get a certificate. If you do rely on self signed certificate, please read the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python-requests.org/"},"requests")," documentation to provide a CA Bundle to verify the cert using environment variables."),(0,r.kt)("h3",{id:"analyzer-new-command-line-interface"},"Analyzer new command line interface"),(0,r.kt)("p",null,"The Analyzer command line interface has been reworked and uses new flags."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--debug")," flag becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"--log-level <level>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--rmq-config-file")," flag becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"--config <filepath>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--http-retry-queue-file")," flag becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"--retry-queue-filepath"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retry-queue-filepath")," default value changed from ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/airtime_analyzer_http_retries")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"retry_queue")," in the working directory.")),(0,r.kt)("h3",{id:"new-configuration-schema-and-validation"},"New configuration schema and validation"),(0,r.kt)("p",null,"The configuration file parsing was improved with validation and the configuration schema was updated. Some deprecated fields were removed and other were renamed."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"general")," section has been changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"general.web_server_user")," entry was removed"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"general.cache_ahead_hours")," entry now defaults to 1"),(0,r.kt)("li",{parentName:"ul"},"the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"general.airtime_dir")," entry is deprecated and can be removed"),(0,r.kt)("li",{parentName:"ul"},"the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"general.station_id")," entry is deprecated and can be removed"),(0,r.kt)("li",{parentName:"ul"},"the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"general.protocol")," (",(0,r.kt)("inlineCode",{parentName:"li"},"http")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"https"),") entry is recommended over the ",(0,r.kt)("inlineCode",{parentName:"li"},"general.force_ssl")," entry."),(0,r.kt)("li",{parentName:"ul"},"the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"general.force_ssl")," entry should either be removed or set to a value (",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"), an empty value will fail validation.")),(0,r.kt)("p",null,"The storage (",(0,r.kt)("inlineCode",{parentName:"p"},"current_backend"),") section has been changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"current_backend.storage_backend")," entry now defaults to the only valid value ",(0,r.kt)("inlineCode",{parentName:"li"},"file"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can remove the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"current_backend")," section from your configuration file."))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," section has been changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"database.*")," entries now have defaults"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"database.port")," entry was added and defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"5432")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"database.dbname")," entry was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"database.name")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"database.dbuser")," entry was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"database.user")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"database.dbpass")," entry was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"database.password"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rabbitmq")," section has been changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"rabbitmq.*")," entries now have defaults")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pypo")," section has been changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo")," section was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"playout")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.ls_*")," entries were renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"playout.liquidsoap_*")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.*_dir")," entries were removed"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.api_client")," entry was removed"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.record_file_type")," entry was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"playout.record_file_format")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.base_recorded_files")," entry was removed"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.poll_interval")," entry was removed"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.push_interval")," entry was removed"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pypo.cue_style")," entry was removed")),(0,r.kt)("p",null,"The deprecated sections ",(0,r.kt)("inlineCode",{parentName:"p"},"monit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"facebook")," are unused, they can be removed from your configuration file."),(0,r.kt)("p",null,"Unless you use a custom auth backend, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ldap")," section can be removed from your configuration file."),(0,r.kt)("p",null,"Remove any quoted values in your configuration file, validation might fail otherwise. See the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# The previously quoted value\nls_port = '1234'\n# should become\nliquidsoap_port = 1234\n")),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/configuration"},"configuration documentation")," for more details."),(0,r.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"The API configuration environment variables names changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LIBRETIME_CONF_DIR")," was removed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LIBRETIME_CONF_FILE")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"LIBRETIME_CONFIG_FILEPATH"))),(0,r.kt)("p",null,"The Analayzer configuration environment variables names changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LIBRETIME_CONF_DIR")," environment variable was replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"LIBRETIME_CONFIG_FILEPATH"),".")),(0,r.kt)("p",null,"The Worker configuration environment variables names changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RMQ_CONFIG_FILE")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"LIBRETIME_CONFIG_FILEPATH"),".")),(0,r.kt)("h3",{id:"log-files-new-paths"},"Log files new paths"),(0,r.kt)("p",null,"When running Playout from the command line, the service will not log to a file by default.\nWhen running Playout as a systemd service, the log file moved from ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/airtime/pypo/pypo.log")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/libretime/playout.log")),(0,r.kt)("p",null,"The Playout Notify log file at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/airtime/pypo-liquidsoap/notify.log")," was removed and merged into the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/libretime/liquidsoap.log")," log file."),(0,r.kt)("p",null,"When running Liquidsoap from the command line, the service will not log to a file by default.\nWhen running Liquidsoap as a systemd service, the log file moved from ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/airtime/pypo-liquidsoap/ls_script.log")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/libretime/liquidsoap.log")),(0,r.kt)("p",null,"The Legacy log file moved from ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/airtime/zendphp.log")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/libretime/legacy.log")),(0,r.kt)("p",null,"The API log file moved from ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/airtime/api.log")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/libretime/api.log")),(0,r.kt)("p",null,"Run the following command to create the new and clean the old log directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/log/libretime\nsudo chown -R www-data:www-data /var/log/libretime\n\nsudo rm -rf /var/log/airtime\n")),(0,r.kt)("h3",{id:"services-new-working-directories"},"Services new working directories"),(0,r.kt)("p",null,"When running Playout as a systemd service, the working directory changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/tmp/airtime/pypo/")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/libretime/playout"),". When running from the command line, the users current working directory is now used by default."),(0,r.kt)("p",null,"When running Liquidsoap as a systemd service, the working directory is now ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/libretime/playout"),". When running from the command line, the users current working directory is now used by default."),(0,r.kt)("p",null,"When running Analyzer as a systemd service, the working directory is now ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/libretime/analyzer"),"."),(0,r.kt)("p",null,"When running Worker (celery) as a systemd service, the working directory changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/airtime")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/libretime/worker"),"."),(0,r.kt)("p",null,"Run the following command to clean the old directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /var/tmp/airtime/pypo/\n")),(0,r.kt)("h3",{id:"analyzer-new-ffmpeg-based-steps"},"Analyzer new ",(0,r.kt)("inlineCode",{parentName:"h3"},"ffmpeg")," based steps"),(0,r.kt)("p",null,"The Analyzer now requires ",(0,r.kt)("inlineCode",{parentName:"p"},"ffmpeg"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"silan")," system dependency and the ",(0,r.kt)("inlineCode",{parentName:"p"},"rgain3")," python package and it's system dependencies can be removed."),(0,r.kt)("p",null,"Run the following command to clean the old packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt purge silan\n\nsudo apt purge \\\n    gir1.2-gtk-3.0 \\\n    libcairo2-dev \\\n    libgirepository1.0-dev \\\n    libglib2.0-dev \\\n    pkg-config \\\n    python3-cairo \\\n    python3-dev \\\n    python3-gi \\\n    python3-gi-cairo \\\n    python3-gst-1.0\nsudo pip3 uninstall rgain3\n")),(0,r.kt)("h3",{id:"no-static-files-for-the-api"},"No static files for the API"),(0,r.kt)("p",null,"The API does not rely on static files in production anymore."),(0,r.kt)("p",null,"Run the following command to clean the old files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /usr/share/airtime/api\n")),(0,r.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,r.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,r.kt)("h3",{id:"ubuntu-1804-playout-status"},"Ubuntu 18.04 Playout Status"),(0,r.kt)("p",null,"The playout status notifications in the web interface are not working. The issue\nis tracked in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/1606"},"#1606"),". The\nplayout works correctly and can be heard in Icecast, however the ",(0,r.kt)("strong",{parentName:"p"},"On Air"),"\nbutton is greyed out and the status reported on the ",(0,r.kt)("strong",{parentName:"p"},"Streams")," status page can\nreport errors connecting to Liquidsoap. The current workaround is to upgrade the\nserver to Ubuntu 20.04."))}k.isMDXComponent=!0},3580:function(e,t,a){a.d(t,{ZP:function(){return u}});var i=a(7462),n=a(3366),r=a(7294),l=a(3905),o=a(9960),s=function(e){var t=e.version,a=e.children;return r.createElement(o.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},a)},p=["components"],m={toc:[]};function u(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This version was released the ",(0,l.kt)("strong",null,a.date),"."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Please report new issues and/or feature requests in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,l.kt)("p",{parentName:"div"},"Join our ",(0,l.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,l.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion."))),(0,l.kt)("p",null,"The full tarball for the ",(0,l.kt)("code",null,a.version)," release of LibreTime is available ",(0,l.kt)(s,{version:a.version,mdxType:"TarballLink"},"here"),"."))}u.isMDXComponent=!0}}]);