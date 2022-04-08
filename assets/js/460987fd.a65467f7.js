"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={title:"Widgets"},l=void 0,d={unversionedId:"developer-manual/widgets",id:"developer-manual/widgets",title:"Widgets",description:"Bring your LibreTime broadcast to your website with embeddable widgets! LibreTime comes with two widgets: a streaming player and a schedule. Both widgets use iframes to display and can be placed wherever embeddable code can on a website.",source:"@site/../docs/developer-manual/widgets.md",sourceDirName:"developer-manual",slug:"/developer-manual/widgets",permalink:"/docs/next/developer-manual/widgets",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/developer-manual/widgets.md",tags:[],version:"current",frontMatter:{title:"Widgets"},sidebar:"tutorialSidebar",previous:{title:"LibreTime API usage",permalink:"/docs/next/developer-manual/legacy-api"},next:{title:"Releases",permalink:"/docs/next/releases/"}},c={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Streaming player widget",id:"streaming-player-widget",level:2},{value:"Show schedule widget",id:"show-schedule-widget",level:2}],p={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bring your LibreTime broadcast to your website with embeddable widgets! LibreTime comes with two widgets: a streaming player and a schedule. Both widgets use iframes to display and can be placed wherever embeddable code can on a website."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Before using the widgets, make sure LibreTime's Public API is enabled in ",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"General"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4685).Z,width:"951",height:"590"})),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"LibreTime widgets cannot function through VPNs or SSH tunneling. The instance must be accessible from the internet for the widgets to work."))),(0,a.kt)("h2",{id:"streaming-player-widget"},"Streaming player widget"),(0,a.kt)("p",null,"The streaming player widget inserts your LibreTime stream into your website. One example is from ",(0,a.kt)("a",{parentName:"p",href:"https://wcrsfm.org/"},"WRCS Community Radio")," in Columbus, Ohio, USA."),(0,a.kt)("iframe",{frameborder:"0",width:"400",height:"235",src:"http://broadcast.wcrsfm.org/embed/player?stream=auto&title=Now Playing"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(564).Z,width:"951",height:"455"})),(0,a.kt)("p",null,"From ",(0,a.kt)("strong",{parentName:"p"},"Widgets")," > ",(0,a.kt)("strong",{parentName:"p"},"Player"),", enter a title for your streaming widget and select what stream you'd like to use. All selectible streams must first be configured in ",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Streams")," (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/user-manual/settings"},"Settings"),"). ",(0,a.kt)("strong",{parentName:"p"},"Auto detect")," should be fine for most."),(0,a.kt)("h2",{id:"show-schedule-widget"},"Show schedule widget"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3725).Z,width:"951",height:"590"})),(0,a.kt)("p",null,"The show schedule widget displays the upcoming shows for the next seven days. There are no customizable settings for this widget."))}m.isMDXComponent=!0},564:function(e,t,r){t.Z=r.p+"assets/images/widgets-widgets_player-c98361905301cd0b46566978d650535b.png"},3725:function(e,t,r){t.Z=r.p+"assets/images/widgets-widgets_schedule-188d93834739d3c27be03b53e1140390.png"},4685:function(e,t,r){t.Z=r.p+"assets/images/widgets-widgets_settings-589a52eabb98d52581022a6de485e8c6.png"}}]);