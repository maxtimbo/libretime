(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3589],{58215:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(67294);function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(87462),i=a(67294),l=a(72389),r=a(5979),s=a(86010),o="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,d=e.block,m=e.defaultValue,p=e.values,c=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,r.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,r.UB)(),f=N.tabGroupChoices,w=N.setTabGroupChoices,y=(0,i.useState)(b),x=y[0],T=y[1],z=[],C=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var M=f[c];null!=M&&M!==x&&k.some((function(e){return e.value===M}))&&T(M)}var I=function(e){var t=e.currentTarget,a=z.indexOf(t),n=k[a].value;n!==x&&(C(t),T(n),null!=c&&w(c,n))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=z.indexOf(e.currentTarget)+1;a=z[n]||z[0];break;case"ArrowLeft":var i=z.indexOf(e.currentTarget)-1;a=z[i]||z[z.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return z.push(e)},onKeyDown:L,onFocus:I,onClick:I},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),u?(0,i.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,l.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},41838:function(e){e.exports={title:"LibreTime",description:"Radio Broadcast & Automation Platform",version:"3.0.0-alpha.12",website:"https://libretime.org",repository:{href:"https://github.com/libretime/libretime",label:"Github"},forum:{href:"https://discourse.libretime.org",label:"Discourse"},channel:{href:"https://chat.libretime.org",label:"Mattermost"},home:{links:[{label:"Get started \ud83d\ude80",to:"/docs/admin-manual"},{label:"Release note",to:"/docs/releases/3.0.0-alpha.12"}]},doc:{sections:[{label:"Admin manual",to:"/docs/admin-manual"},{label:"User manual",to:"/docs/user-manual"},{label:"Developer manual",to:"/docs/developer-manual"}]}}},15564:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return k}});var n=a(87462),i=a(63366),l=(a(67294),a(3905)),r=a(9877),s=a(58215),o=a(38066),u=a(41838),d=a.n(u),m=["components"],p={title:"Install",sidebar_position:10},c=void 0,h={unversionedId:"admin-manual/setup/install",id:"version-3.0.0-alpha.12/admin-manual/setup/install",title:"Install",description:"This guide walk you though the steps required to install LibreTime on your system.",source:"@site/versioned_docs/version-3.0.0-alpha.12/admin-manual/setup/install.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/install",permalink:"/docs/admin-manual/setup/install",editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/admin-manual/setup/install.md",tags:[],version:"3.0.0-alpha.12",sidebarPosition:10,frontMatter:{title:"Install",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Administrator manual",permalink:"/docs/admin-manual/"},next:{title:"Configuration",permalink:"/docs/admin-manual/setup/configuration"}},v={},k=[{value:"Minimum system requirements",id:"minimum-system-requirements",level:4},{value:"Using the installer",id:"using-the-installer",level:2},{value:"Download",id:"download",level:3},{value:"Run the installer",id:"run-the-installer",level:3},{value:"Using hardware audio output",id:"using-hardware-audio-output",level:4},{value:"Setup wizard",id:"setup-wizard",level:3},{value:"Changing default passwords",id:"changing-default-passwords",level:4},{value:"Using packages",id:"using-packages",level:2}],g={toc:k};function b(e){var t=e.components,a=(0,i.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide walk you though the steps required to install LibreTime on your system."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are coming from ",(0,l.kt)("strong",{parentName:"p"},"Airtime"),", please follow the ",(0,l.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/migrate-from-airtime"},"Airtime migration guide"),"."))),(0,l.kt)("p",null,"You can install LibreTime using the one of the following methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-the-installer"},"\ud83d\ude80 Using the installer")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udea7 Using Ansible")),(0,l.kt)("h4",{id:"minimum-system-requirements"},"Minimum system requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One of the following Linux distributions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ubuntu ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/Releases"},"current LTS")),(0,l.kt)("li",{parentName:"ul"},"Debian ",(0,l.kt)("a",{parentName:"li",href:"https://www.debian.org/releases/"},"current stable")))),(0,l.kt)("li",{parentName:"ul"},"1 Ghz Processor"),(0,l.kt)("li",{parentName:"ul"},"2 GB RAM recommended (1 GB required)"),(0,l.kt)("li",{parentName:"ul"},"A static external IP address (",(0,l.kt)("a",{parentName:"li",href:"/docs/admin-manual/tutorials/setup-a-static-ip-using-netplan"},"How to setup a static ip using Netplan"),")")),(0,l.kt)("h2",{id:"using-the-installer"},"Using the installer"),(0,l.kt)("p",null,"The installer is shipped in the released tarballs or directly in the project repository."),(0,l.kt)("h3",{id:"download"},"Download"),(0,l.kt)("p",null,"You can either download the latest released tarball or clone the repository."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Release tarball",value:"tarball",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Download the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/releases"},"latest released")," tarball from Github."),(0,l.kt)("p",null,"Or directly from the command-line:"),(0,l.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"wget https://github.com/libretime/libretime/releases/download/",d().version,"/libretime-",d().version,".tar.gz"),(0,l.kt)("p",null,"And extract the tarball:"),(0,l.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"tar -xvf libretime-",d().version,".tar.gz && cd libretime")),(0,l.kt)(s.Z,{label:"Git repository",value:"git",mdxType:"TabItem"},(0,l.kt)("p",null,"Clone the project repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/libretime/libretime\ncd libretime\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Don't use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime-debian-packaging"},"https://github.com/libretime/libretime-debian-packaging")," repository, it is only used to create LibreTime packages."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When upgrading, you should clean the local repository, pull the latest changes and finally check out the desired version:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime\ngit clean -xdf\ngit pull\n")))),(0,l.kt)("p",null,"And checkout the latest version:"),(0,l.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"git checkout ",d().version))),(0,l.kt)("h3",{id:"run-the-installer"},"Run the installer"),(0,l.kt)("p",null,"Install LibreTime with the recommended options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./install -fiap\n")),(0,l.kt)("p",null,"Additional options can be listed with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./install --help\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When upgrading be sure to run the installer using the same arguments you used during the initial install."))),(0,l.kt)("p",null,"Once the installation is completed, open ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:80"},"http://localhost:80")," to complete the ",(0,l.kt)("a",{parentName:"p",href:"#setup-wizard"},"setup wizard"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If installed on a remote device, make sure to replace ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost")," with your server's remote address."),(0,l.kt)("li",{parentName:"ul"},"If installed with a custom port, make sure to replace ",(0,l.kt)("inlineCode",{parentName:"li"},"80")," with the custom port.")))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure that you have configured a ",(0,l.kt)("strong",{parentName:"p"},"firewall")," and it's not blocking connection to the desired ports."),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/admin-manual/tutorials/setup-a-firewall-using-ufw"},"How to setup a firewall using UFW"))),(0,l.kt)("p",{parentName:"div"},"LibreTime requires the following ports to be open:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"80")," for the web interface,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8000")," for the Icecast streams,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8001")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"8002")," for the live stream input endpoint.")),(0,l.kt)("p",{parentName:"div"},"Consider putting your installation behind a ",(0,l.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/reverse-proxy"},"reverse proxy")," to increase the security."))),(0,l.kt)("h4",{id:"using-hardware-audio-output"},"Using hardware audio output"),(0,l.kt)("p",null,"If you plan to output analog audio directly to a mixing console or transmitter, the user running LibreTime (by default ",(0,l.kt)("inlineCode",{parentName:"p"},"www-data"),") needs to be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," user group using the command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser www-data audio\n")),(0,l.kt)("h3",{id:"setup-wizard"},"Setup wizard"),(0,l.kt)("p",null,"The setup wizard walk you through the rest of the installation process."),(0,l.kt)("h4",{id:"changing-default-passwords"},"Changing default passwords"),(0,l.kt)("p",null,"It's recommended that you change the passwords prompted in the setup wizard. Be sure to apply the changes on the server before going to any next step."),(0,l.kt)("p",null,"You can change the default PostgreSQL user password using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql -c \"ALTER USER airtime PASSWORD 'new-password';\"\n")),(0,l.kt)("p",null,"You can change the default RabbitMQ user password using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo rabbitmqctl change_password "airtime" "new-password"\n')),(0,l.kt)("p",null,"Once completed, it's recommended to ",(0,l.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/reverse-proxy"},"install a reverse proxy")," to setup SSL termination and secure your installation."),(0,l.kt)("h2",{id:"using-packages"},"Using packages"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Usually the packages are built soon after a release is published."))),(0,l.kt)("p",null,"You can install LibreTime using packages on the distributions listed below, please follow further instruction provided by the links below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime-debian-packaging/releases"},"Debian / Ubuntu packages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://build.opensuse.org/package/show/home:radiorabe:airtime/libretime"},"CentOS packages"))))}b.isMDXComponent=!0}}]);