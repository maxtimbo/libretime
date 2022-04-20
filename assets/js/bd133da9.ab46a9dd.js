"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4399],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Playout history"},s=void 0,p={unversionedId:"user-manual/playout-history",id:"user-manual/playout-history",title:"Playout history",description:"On the History menu, the Playout History page enables you to view a list of files played within a specific date and time range. This page is designed to help your station prepare reports for music royalty collection societies and regulatory agencies.",source:"@site/../docs/user-manual/playout-history.md",sourceDirName:"user-manual",slug:"/user-manual/playout-history",permalink:"/docs/next/user-manual/playout-history",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/playout-history.md",tags:[],version:"current",frontMatter:{title:"Playout history"},sidebar:"tutorialSidebar",previous:{title:"Playlists and smart blocks",permalink:"/docs/next/user-manual/playlists"},next:{title:"Podcasts",permalink:"/docs/next/user-manual/podcasts"}},c={},u=[{value:"Manual logging",id:"manual-logging",level:3},{value:"History templates",id:"history-templates",level:2},{value:"Exporting the schedule",id:"exporting",level:2},{value:"Caching schedule information",id:"caching-schedule-information",level:3},{value:"Pushing schedule information via FTP or SSH",id:"pushing-schedule-information-via-ftp-or-ssh",level:3}],h={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On the History menu, the ",(0,o.kt)("strong",{parentName:"p"},"Playout History")," page enables you to view a list of files played within a specific date and time range. This page is designed to help your station prepare reports for music royalty collection societies and regulatory agencies."),(0,o.kt)("p",null,"Search results can be copied to the clipboard using the ",(0,o.kt)("strong",{parentName:"p"},"Copy")," button, exported as data in ",(0,o.kt)("strong",{parentName:"p"},"CSV")," format (comma separated values), exported as a document in ",(0,o.kt)("strong",{parentName:"p"},"PDF")," format, or displayed in a printer-friendly format using the ",(0,o.kt)("strong",{parentName:"p"},"Print")," button. (Your web browser must have an Adobe Flash plugin installed for these buttons to appear). Press the ",(0,o.kt)("strong",{parentName:"p"},"Esc")," key to return to the LibreTime interface once the print job is complete."),(0,o.kt)("p",null,"This page has three tabs: ",(0,o.kt)("strong",{parentName:"p"},"Log Sheet"),", ",(0,o.kt)("strong",{parentName:"p"},"File Summary")," and ",(0,o.kt)("strong",{parentName:"p"},"Show Summary"),". On any of these tabs, you can select a date and time range by clicking the calendar and clock icons in the upper left corner of the page. Then click the search button, which has a magnifying glass icon, to the right. A list of files played during that date and time range will appear further down the page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51388).Z,width:"1117",height:"576"})),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Log Sheet")," tab, the playout history is sorted by ",(0,o.kt)("strong",{parentName:"p"},"Start Time")," and ",(0,o.kt)("strong",{parentName:"p"},"End Time")," by default."),(0,o.kt)("p",null,"The number of times each file was played and the length of the files are shown in the ",(0,o.kt)("strong",{parentName:"p"},"File Summary")," tab. To make optimal use of this feature for royalty reporting purposes, music files must be tagged with ",(0,o.kt)("strong",{parentName:"p"},"Composer")," and ",(0,o.kt)("strong",{parentName:"p"},"Copyright")," metadata. The artist performing a piece of music may not be the original composer of the work, or the copyright holder of the sound recording."),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Show Summary")," tab, click the name of a show within the search range to expand its row and see its playout details."),(0,o.kt)("h3",{id:"manual-logging"},"Manual logging"),(0,o.kt)("p",null,"If your station features playout from analogue sources such as turntables or microphones, there is no automatic metadata for LibreTime to collect from these inputs. To ensure that the playout history is complete, you can add log entries manually by clicking the ",(0,o.kt)("strong",{parentName:"p"},"+ Create Entry")," button. This action opens a pop-up window with default fields of Start Time, End Time, Title and Creator. Click the ",(0,o.kt)("strong",{parentName:"p"},"Find")," button to automatically fill the ",(0,o.kt)("strong",{parentName:"p"},"Choose Show Instance")," menu with the names of shows that took place within the specified time range. Then click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button to enter the new item into the playout history."),(0,o.kt)("p",null,"Log entries can also be manually deleted, using the button with the trashcan icon, to the right of the ",(0,o.kt)("strong",{parentName:"p"},"+ Create Entry")," button. Pages of entries can be selected for deletion using the ",(0,o.kt)("strong",{parentName:"p"},"Select")," drop-down menu."),(0,o.kt)("h2",{id:"history-templates"},"History templates"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(84961).Z,width:"411",height:"403"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"History Templates")," page on the History menu enables you to prepare reports with the exact content required by regulatory agencies in the territories that you are broadcasting to. You can begin creating a custom template by clicking the button ",(0,o.kt)("strong",{parentName:"p"},"New Log Sheet Template")," or the button ",(0,o.kt)("strong",{parentName:"p"},"New File Summary Template"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6913).Z,width:"645",height:"550"})),(0,o.kt)("p",null,"Either of these actions opens a page in which you can name the new template, and add or remove elements from the list on the left. To add a new element from the list on the right, click the plus icon for the item you require. If the element you require is not listed, you can use the ",(0,o.kt)("strong",{parentName:"p"},"Add New Field")," box at the lower end of the right side column. Select ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("em",{parentName:"p"},"boolean"),", ",(0,o.kt)("em",{parentName:"p"},"integer"),", or ",(0,o.kt)("em",{parentName:"p"},"float"),", depending on the type of data that you wish to log, and then click the ",(0,o.kt)("strong",{parentName:"p"},"+ Add")," button."),(0,o.kt)("p",null,"When the template is in the format you require, click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button, and ",(0,o.kt)("strong",{parentName:"p"},"Set Default Template")," if you wish. The new template will now be listed on the History Templates page. If you have set a new default template, any changes will be visible on the tabs of the Playout History page."),(0,o.kt)("h2",{id:"exporting"},"Exporting the schedule"),(0,o.kt)("p",null,"LibreTime has a feature which enables your station's show and schedule information to be displayed on remote websites. This feature is included in LibreTime because you would not usually invite the general public to access your LibreTime server directly. If you had very large numbers of people requesting data from the LibreTime server at once, the burst of network traffic might overload the server, potentially disrupting your broadcasts. If carried out maliciously, this network overload is known as a ",(0,o.kt)("em",{parentName:"p"},"denial of service attack"),"."),(0,o.kt)("p",null,"Instead, your public-facing web server can retrieve the schedule information from the LibreTime API. It can be presented using Javascript widgets and styled with CSS, in any format that you require."),(0,o.kt)("p",null,"There are two kinds of information that can be retrieved remotely from the LibreTime API without authentication; the metadata for the current show plus the following show (live-info), or the schedule for the current week and the week ahead (week-info). The week-info metadata includes show names, times, and individual show URLs on your public website. That way, the audience for your station can click through from the schedule information to find out more about a particular show, or download a previous show recording that you might have made available."),(0,o.kt)("p",null,"If your LibreTime server was accessible at ",(0,o.kt)("a",{parentName:"p",href:"https://libretime.example.com"},"https://libretime.example.com")," the live show information could be retrieved by your web server using this URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://libretime.example.com/api/live-info/?callback\n")),(0,o.kt)("p",null,"The comma-separated text metadata returned to your web server might be something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "env": "production",\n  "schedulerTime": "2013-07-03 14:07:31",\n\n  "previous": {\n    "name": "Earth, Wind &amp; Fire - Boogie Wonderland",\n    "starts": "2013-07-01 22:53:00",\n    "ends": "2013-07-01 22:55:00",\n    "type": "track"\n  },\n  "current": {\n    "name": "Deodato - Also Sprach Zarathustra",\n    "starts": "2013-07-03 13:07:06",\n    "ends": "2013-07-03 13:16:05",\n    "media_item_played": true,\n    "record": 0,\n    "type": "track"\n  },\n\n  "next": {\n    "id": 8,\n    "instance_id": 10,\n    "name": "Rock Show",\n    "url": "https://rock.example.com/",\n    "start_timestamp": "2013-07-03 14:00:00",\n    "end_timestamp": "2013-07-03 15:00:00",\n    "starts": "2013-07-03 14:00:00",\n    "ends": "2013-07-03 15:00:00",\n    "record": 0,\n    "type": "show"\n  },\n\n  "currentShow": [\n    {\n      "start_timestamp": "2013-07-03 14:07:00",\n      "0": "2013-07-03 13:07:00",\n      "end_timestamp": "2013-07-03 15:00:00",\n      "1": "2013-07-03 14:00:00",\n      "name": "Funk Show",\n      "2": "Funk Show",\n      "id": 7,\n      "3": 7,\n      "instance_id": 9,\n      "4": 9,\n      "record": 0,\n      "5": 0,\n      "url": "https://funk.example.com/",\n      "6": "",\n      "starts": "2013-07-03 14:07:00",\n      "7": "2013-07-03 13:07:00",\n      "ends": "2013-07-03 15:00:00",\n      "8": "2013-07-03 14:00:00"\n    }\n  ],\n\n  "nextShow": [\n    {\n      "id": 8,\n      "instance_id": 10,\n      "name": "Rock Show",\n      "url": "https://rock.example.com/",\n      "start_timestamp": "2013-07-03 15:00:00",\n      "end_timestamp": "2013-07-03 16:00:00",\n      "starts": "2013-07-03 15:00:00",\n      "ends": "2013-07-03 16:00:00",\n      "record": 0,\n      "type": "show"\n    }\n  ],\n\n  "timezone": "BST",\n  "timezoneOffset": "3600",\n  "AIRTIME_API_VERSION": "1.1"\n}\n')),(0,o.kt)("p",null,"The information for the current week's schedule could be retrieved using the URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://libretime.example.com/api/week-info/?callback\n")),(0,o.kt)("p",null,"In this case, the metadata returned would be in a different format from the above example, something like the following. To keep the example short, this particular schedule export only contains four shows on a Monday. A full weekly schedule export would contain a great deal more text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "monday": [\n    {\n      "start_timestamp": "2013-07-01 12:05:00",\n      "end_timestamp": "2013-07-01 13:00:00",\n      "name": "Elvis Show",\n      "id": 2,\n      "instance_id": 2,\n      "record": 0,\n      "url": "https://elvis.example.com/",\n      "starts": "2013-07-01 12:05:00",\n      "ends": "2013-07-01 13:00:00"\n    },\n\n    {\n      "start_timestamp": "2013-07-01 13:00:00",\n      "end_timestamp": "2013-07-01 14:00:00",\n      "name": "News",\n      "id": 3,\n      "instance_id": 4,\n      "record": 0,\n      "url": "https://news.example.com/",\n      "starts": "2013-07-01 13:00:00",\n      "ends": "2013-07-01 14:00:00"\n    },\n\n    {\n      "start_timestamp": "2013-07-01 14:00:00",\n      "end_timestamp": "2013-07-01 15:00:00",\n      "name": "Funk Show",\n      "id": 4,\n      "instance_id": 6,\n      "record": 0,\n      "url": "https://funk.example.com/",\n      "starts": "2013-07-01 14:00:00",\n      "ends": "2013-07-01 15:00:00"\n    },\n\n    {\n      "start_timestamp": "2013-07-01 15:00:00",\n      "end_timestamp": "2013-07-01 17:30:00",\n      "name": "Rock Show",\n      "id": 5,\n      "instance_id": 7,\n      "record": 0,\n      "url": "https://rock.example.com/",\n      "starts": "2013-07-01 15:00:00",\n      "ends": "2013-07-01 17:30:00"\n    }\n  ],\n\n  "tuesday": [],\n  "wednesday": [],\n  "thursday": [],\n  "friday": [],\n  "saturday": [],\n  "sunday": [],\n  "AIRTIME_API_VERSION": "1.1"\n}\n')),(0,o.kt)("p",null,"If you see the message ",(0,o.kt)("em",{parentName:"p"},"You are not allowed to access this resource")," when attempting to display schedule information in your web browser, log in to the LibreTime administration interface, click ",(0,o.kt)("em",{parentName:"p"},"System")," in the main menu, then ",(0,o.kt)("em",{parentName:"p"},"Preferences"),". Set ",(0,o.kt)("strong",{parentName:"p"},'Allow Remote Websites To Access "Schedule" Info?')," to ",(0,o.kt)("strong",{parentName:"p"},"Enabled"),", click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button, then refresh the browser window opened on the schedule export URL. If you do not wish to make schedule information available to the public, set this option to ",(0,o.kt)("strong",{parentName:"p"},"Disabled")," instead."),(0,o.kt)("h3",{id:"caching-schedule-information"},"Caching schedule information"),(0,o.kt)("p",null,"If the LibreTime server is behind a firewall, or you want to protect the LibreTime server from large numbers of schedule requests, you may wish to cache the schedule information on a public-facing or intermediate server. You can then create a firewall rule that only allows the schedule server to connect to the LibreTime server, in addition to any remote users of the LibreTime web interface."),(0,o.kt)("p",null,"Your system administrator can set up schedule caching on a standard Apache and PHP enabled web server with the ",(0,o.kt)("em",{parentName:"p"},"curl")," program installed, using the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a shell script on the schedule server (schedule.example.com) that polls the remote LibreTime server (libretime.example.com), and writes the metadata returned into a pair of local temporary files:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /usr/local/bin/libretime-schedule.sh\n")),(0,o.kt)("p",null,"The content of this file should be like the following script, replacing libretime.example.com with the name of your LibreTime server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\ncurl -s "https://libretime.example.com/api/live-info/?callback=***" > /tmp/live-info\n\ncurl -s "https://libretime.example.com/api/week-info/?callback=***" > /tmp/week-info\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Make the script executable:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chmod +x /usr/local/bin/libretime-schedule.sh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create an Apache VirtualHost configuration for the schedule server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/apache2/sites-available/schedule\n")),(0,o.kt)("p",null,"containing a definition like the following, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule.example.com")," with the name of your schedule server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"    <VirtualHost *:80>\n       ServerName schedule.example.com\n       DocumentRoot /var/www/schedule/\n    </VirtualHost>\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In the schedule server's DocumentRoot folder, create the folders ",(0,o.kt)("inlineCode",{parentName:"li"},"api/live-info/")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"api/week-info/"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/www/schedule/api/live-info/\nsudo mkdir -p /var/www/schedule/api/week-info/\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create an index.php file in the ",(0,o.kt)("inlineCode",{parentName:"li"},"api/live-info/")," folder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /var/www/schedule/api/live-info/index.php\n")),(0,o.kt)("p",null,"containing the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$filename = '/tmp/live-info';  // define here the path and name of uploaded live-info file\n\nheader('Content-Type: text/javascript');\nheader(\"Expires: Thu, 01 Jan 1970 00:00:00 GMT\");\nheader(\"Cache-Control: no-store, no-cache, must-revalidate\");\n\n$callback = empty($_GET['callback']) ? null : $_GET['callback'];\n$content = file_get_contents($filename);\n$content = str_replace('***', $callback, $content);\necho $content;\n?>\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create an index.php file in the ",(0,o.kt)("inlineCode",{parentName:"li"},"api/week-info/")," folder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /var/www/schedule/api/week-info/index.php\n")),(0,o.kt)("p",null,"containing the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$filename = '/tmp/week-info';  // define here the path and name of uploaded week-info file\n\nheader('Content-Type: text/javascript');\nheader(\"Expires: Thu, 01 Jan 1970 00:00:00 GMT\");\nheader(\"Cache-Control: no-store, no-cache, must-revalidate\");\n\n$callback = empty($_GET['callback']) ? null : $_GET['callback'];\n$content = file_get_contents($filename);\n$content = str_replace('***', $callback, $content);\necho $content;\n?>\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Enable the new configuration and reload the Apache web server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo a2ensite schedule\nsudo /etc/init.d/apache2 reload\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Create a cron job to run the shell script each minute:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/cron.d/libretime-schedule\n")),(0,o.kt)("p",null,"containing the line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* * * * * www-data /usr/local/bin/libretime-schedule.sh\n")),(0,o.kt)("p",null,"The schedule server will now be serving the same show information as the LibreTime server, with a cache lifetime of one minute. You can adjust the cache lifetime by altering the frequency of the cron job that polls the LibreTime server."),(0,o.kt)("h3",{id:"pushing-schedule-information-via-ftp-or-ssh"},"Pushing schedule information via FTP or SSH"),(0,o.kt)("p",null,"If there is no inbound access to the LibreTime server at all, an FTP script can be used to push cached schedule data from LibreTime to an external web server. The standard ftp command should be available on the LibreTime server and the external web server should have a suitably restricted FTP account set up. After following steps 1 and 2 above to export schedule data to a pair of temporary files on the LibreTime server, create a new script on the LibreTime server to automatically make the upload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /usr/local/bin/upload-schedule-data.sh\n")),(0,o.kt)("p",null,"Replace host, user and password values with appropriate values for your external web server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nHOST='website.example.com'\nUSER='ftp_user'\nPASSWD='ftp_password'\n\nftp -n -v $HOST << EOT\nuser $USER $PASSWD\nascii\nprompt\nput /tmp/airtime-week-info\nput /tmp/airtime-live-info\nbye\nEOT\n")),(0,o.kt)("p",null,"Then make the new script executable and create a cron job to launch it every minute, as in step 8 above. Steps 3 to 7 above should be carried out on the external web server so that it can convert the two temporary files uploaded via FTP into public schedule data."),(0,o.kt)("p",null,"If you have secure shell access (SSH) to the remote web server, you could write a script to use the secure copy command (scp) instead of ftp."))}m.isMDXComponent=!0},84961:function(e,t,n){t.Z=n.p+"assets/images/playout-history-history-templates-91d273e01f8d5953fb784c76957aff3c.png"},51388:function(e,t,n){t.Z=n.p+"assets/images/playout-history-log-sheet-ff8a94c0e49944b88233c284201d3559.png"},6913:function(e,t,n){t.Z=n.p+"assets/images/playout-history-new-hist-temp-9b9d153feaa2faf934e5e289b5ee0110.png"}}]);