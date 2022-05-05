"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6220],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,v=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(v,l(l({ref:e},s),{},{components:n})):a.createElement(v,l({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61583:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Development environment"},p=void 0,u={unversionedId:"developer-manual/environment",id:"version-3.0.0-alpha.12/developer-manual/environment",title:"Development environment",description:"Vagrant",source:"@site/versioned_docs/version-3.0.0-alpha.12/developer-manual/environment.md",sourceDirName:"developer-manual",slug:"/developer-manual/environment",permalink:"/docs/developer-manual/environment",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/developer-manual/environment.md",tags:[],version:"3.0.0-alpha.12",frontMatter:{title:"Development environment"},sidebar:"tutorialSidebar",previous:{title:"Developer manual",permalink:"/docs/developer-manual/"},next:{title:"LibreTime API usage",permalink:"/docs/developer-manual/legacy-api"}},s={},d=[{value:"Vagrant",id:"vagrant",level:2},{value:"Installing Libvirt",id:"installing-libvirt",level:3},{value:"Starting LibreTime Vagrant",id:"starting-libretime-vagrant",level:3},{value:"Alternative OS installations",id:"alternative-os-installations",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Multipass",id:"multipass",level:2},{value:"Cloud-init options in cloud-init.yaml",id:"cloud-init-options-in-cloud-inityaml",level:3}],m={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"vagrant"},"Vagrant"),(0,i.kt)("p",null,"To use Vagrant, you need to install a virtualization engine: ",(0,i.kt)("a",{parentName:"p",href:"https://www.virtualbox.org"},"VirtualBox")," or Libvirt. The ","[vagrant-vbguest]"," package on Github can help maintain guest extensions on host systems using VirtualBox."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you try run a libvirt provided box after using a VirtualBox one, you will receive an\nerror:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"Error while activating network:\nCall to virNetworkCreate failed: internal error: Network is already in use by interface vboxnet0.\n")),(0,i.kt)("p",{parentName:"div"},"This is fixed by stopping virtualbox and re-creating the vagrant box:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop virtualbox\nvagrant destroy bionic\nvagrant up bionic --provider=libvirt\n")))),(0,i.kt)("h3",{id:"installing-libvirt"},"Installing Libvirt"),(0,i.kt)("p",null,"On Debian and Ubuntu:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install Vagrant")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install vagrant vagrant-libvirt libvirt-daemon-system vagrant-mutate libvirt-dev\nsudo usermod -aG libvirt $USER\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Reboot your computer, and then run")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant box add bento/ubuntu-18.04 --provider=virtualbox\nvagrant mutate bento/ubuntu-18.04 libvirt\nvagrant up bionic --provider=libvirt\n")),(0,i.kt)("p",null,"On other distributions, you will need to install ",(0,i.kt)("a",{parentName:"p",href:"https://libvirt.org/"},"libvirt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant-mutate")," and then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant plugin install vagrant-libvirt\nsudo usermod -a -G libvirt $USER\n\n# Reboot\n\nvagrant plugin install vagrant-mutate\nvagrant box fetch bento/ubuntu-18.04\nvagrant mutate bento/ubuntu-18.04 libvirt\nvagrant up bionic --provider=libvirt\n")),(0,i.kt)("h3",{id:"starting-libretime-vagrant"},"Starting LibreTime Vagrant"),(0,i.kt)("p",null,"To get started you clone the repo and run ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant up"),". The command accepts a parameter to\nchange the default provider if you have multiple installed. This can be done by appending\n",(0,i.kt)("inlineCode",{parentName:"p"},"--provider=virtualbox")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--provider=libvirt")," as applicable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/libretime/libretime\ncd libretime\nvagrant up bionic\n")),(0,i.kt)("p",null,"If everything works out, you will find LibreTime on ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"port 8080"),"\nand Icecast on ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000"},"port 8000"),"."),(0,i.kt)("p",null,"Once you reach the web setup GUI you can click through it using the default values. To\nconnect to the vagrant machine you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant ssh bionic")," in the libretime\ndirectory."),(0,i.kt)("h3",{id:"alternative-os-installations"},"Alternative OS installations"),(0,i.kt)("p",null,"With the above instructions LibreTime is installed on Ubuntu Bionic. The Vagrant setup\noffers the option to choose a different operation system according to you needs."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"OS"),(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Debian 10"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vagrant up buster")),(0,i.kt)("td",{parentName:"tr",align:null},"Install on Debian Buster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Debian 11"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vagrant up bullseye")),(0,i.kt)("td",{parentName:"tr",align:null},"Install on Debian Bullseye.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ubuntu 18.04"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vagrant up bionic")),(0,i.kt)("td",{parentName:"tr",align:null},"Install on Ubuntu Bionic Beaver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vagrant up focal")),(0,i.kt)("td",{parentName:"tr",align:null},"Install on Ubuntu Focal Fossa.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vagrant up centos")),(0,i.kt)("td",{parentName:"tr",align:null},"CentOS 8 with native systemd support and activated SELinux.")))),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If anything fails during the initial provisioning step you can try running ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant provision"),"\nto re-run the installer."),(0,i.kt)("p",null,"If you only want to re-run parts of the installer, use ",(0,i.kt)("inlineCode",{parentName:"p"},"--provision-with $step"),". The\nsupported steps are ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),"."),(0,i.kt)("h2",{id:"multipass"},"Multipass"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://multipass.run"},"Multipass")," is a tool for easily setting up Ubuntu VMs on Windows, Mac, and Linux.\nSimilar to Docker, Multipass works through a CLI. To use, clone this repo and then create a new Multipass VM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/libretime/libretime\ncd libretime\nmultipass launch bionic -n ltTEST --cloud-init cloud-init.yaml\nmultipass shell ltTEST\n")),(0,i.kt)("p",null,"Multipass isn't currently able to do an automated install from the cloud-init script.\nAfter you enter the shell for the first time, you will still need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/install"},"run the LibreTime installer"),"."),(0,i.kt)("p",null,"The IP address of your new VM can be found by running ",(0,i.kt)("inlineCode",{parentName:"p"},"multipass list"),". Copy and paste it into your web browser to access the LibreTime interface and complete the setup wizard."),(0,i.kt)("p",null,"You can stop the VM with ",(0,i.kt)("inlineCode",{parentName:"p"},"multipass stop ltTEST")," and restart with ",(0,i.kt)("inlineCode",{parentName:"p"},"multipass start ltTEST"),".\nIf you want to delete the image and start again, run ",(0,i.kt)("inlineCode",{parentName:"p"},"multipass delete ltTEST && multipass purge"),"."),(0,i.kt)("h3",{id:"cloud-init-options-in-cloud-inityaml"},"Cloud-init options in cloud-init.yaml"),(0,i.kt)("p",null,"You may wish to change the below fields as per your location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'timezone: America/New York # change as needed\nntp:\n  pools: ["north-america.pool.ntp.org"]\n  servers: ["0.north-america.pool.ntp.org", "0.pool.ntp.org"]\n')))}c.isMDXComponent=!0}}]);