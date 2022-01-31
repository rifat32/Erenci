(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3540:function(e,t,n){"use strict";n.d(t,{y:function(){return s}});var r=n(9008),a=n(5893),s=function(e){var t=e.title,n=e.description;return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{property:"og:description",content:n})]})}},2006:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3540),a=n(9925),s=n.n(a),i=n(5893),o=function(e){var t=e.children,n=e.title,a=e.description,o=e.margin,c=void 0===o||o;return(0,i.jsxs)(i.Fragment,{children:[n&&a&&(0,i.jsx)(r.y,{title:n,description:a}),(0,i.jsxs)(s(),{className:"flex flex-col max-w-3xl mx-auto mb-16 sm:px-0",children:[n&&(0,i.jsx)("h1",{className:"text-5xl font-bold",children:n}),a&&(0,i.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:a}),(0,i.jsx)("div",{className:c?"mt-8":void 0,children:t})]})]})}},1959:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var r=function(e,t){return e.length>t?e.substr(0,t-1)+"...":e}},2620:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(2006),a=n(3540),s=n(4586),i=n(425),o=n(5152),c=n(8279),l=n(9583),d=n(5893),u=[{name:"Discord",href:"https://discord.com/users/373006788380852236",icon:(0,d.jsx)(l.j2d,{style:{marginRight:"1rem"}})},{name:"Email",icon:(0,d.jsx)(l.SRX,{style:{marginRight:"1rem"}})}],f=n(4480),m=n(1959),h=n(9925),x=n.n(h),p=n(5675),g={src:"/_next/static/image/public/img/song.3cd77729c14cc9f0c6548e9aacfcf913.webp",height:422,width:422,blurDataURL:"data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBUAAAABD9D/iAgQZNscb2Mf0kUi+h+5QwIAVlA4IBgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vfAQAA="},j=function(){var e=(0,f.T)("Kherici","ebe2c441c37e356caefe318275757b53",5e3,"large");return["connecting","error"].includes(e.status)?null:(console.log(e.status),(0,d.jsx)(x(),{children:(0,d.jsxs)("a",{href:"playing"===e.status?e.song.url:"https://spotify.com/",rel:"noopener noreferrer",target:"_blank",className:"focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm",children:["idle"===e.status&&(0,d.jsx)(p.default,{height:45,width:45,alt:"Song cover art",placeholder:"blur",className:"w-full h-full rounded shadow",src:g}),"playing"===e.status&&(0,d.jsx)(p.default,{height:45,width:45,alt:"Song cover art",className:"w-full h-full rounded shadow",src:e.song.art}),(0,d.jsxs)("div",{className:"my-auto ml-4",children:[(0,d.jsx)("div",{className:"font-semibold text-sm sm:text-regular",children:"playing"===e.status?"Listening to ".concat((0,m.$)(e.song.name,25)):"Not listening to anything"}),(0,d.jsxs)("p",{className:"text-xxs",children:[(0,d.jsx)(l.l4C,{className:"fill-current text-green-500"}),"Spotify"]})]})]})}))},A=n(1770),b=n(7294),v=function(){var e=(0,b.useState)(!0),t=e[0],n=e[1],r=(0,b.useState)(),a=r[0],s=r[1];if((0,b.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=el+bayadh&units=metric&appid=e3b952b7c233305e18697b3645934aa6").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),!a)return null;var i=a.weather[0],o=(i.main,i.description),c=a.main.temp,u=9*c/5+32,f=function(){return n((function(e){return!e}))};return(0,d.jsxs)(A.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,d.jsx)(l.OFo,{className:"mr-2",style:{display:"inline"}}),"It's currently"," ",c<8&&(0,d.jsx)("span",{className:"mr-1",children:"\u2744\ufe0f"})||c>30&&(0,d.jsx)("span",{className:"mr-1",children:"\ud83d\udd25"}),(0,d.jsx)("span",{onMouseOver:f,onMouseLeave:f,className:"font-bold",children:t?"".concat(Math.round(c)," \xb0C"):"".concat(Math.round(u)," \xb0F")})," ",(0,d.jsxs)("span",{className:"text-xs",children:["(",o,")"]})," in"," ",(0,d.jsx)("a",{href:"https://weather.com/en-GB/weather/today/l/bb5f448522ff58b50af28a405e51917e72ae28bc6e84e807bad09b51c7e58bc4",rel:"noopener noreferrer",target:"_blank",className:"font-bold focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200",children:"El Bayadh"}),"."]})},w=(0,o.default)((function(){return n.e(813).then(n.bind(n,5813))}),{ssr:!1,loadableGenerated:{webpack:function(){return[5813]},modules:["index.tsx -> components/Time"]}}),y=function(e){var t=e.name,n=e.href,r=e.icon,a=e.copyEmail;return(0,d.jsx)("a",{"aria-label":t,onClick:function(){return a&&a()},className:"cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200",href:n,rel:"noopener noreferrer",target:"_blank",children:r&&r})},N=function(){var e=(0,i.F)().theme,t=function(){navigator.clipboard.writeText("Kherici16@outlook.com"),"dark"===e?c.ZP.success("Copied email to clipboard!",{style:{background:"#333",color:"#fff"}}):c.ZP.success("Copied email to clipboard!")};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.y,{title:"Erenci",description:" A Self-taught Developer and Graphic designer from Algeria."}),(0,d.jsxs)(r.Z,{margin:!1,children:[(0,d.jsx)("h1",{className:"text-6xl font-bold",children:"Erenci"}),(0,d.jsxs)("p",{className:"text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2",children:[(0,d.jsx)("span",{className:"font-semibold",children:" Self-taught Developer and Graphic designer "}),"  from Algeria."]}),(0,d.jsx)("div",{className:"justify-center md:justify-start grid grid-flow-col gap-1 w-48 mt-3 text-lg ",children:u.map((function(e){return(0,d.jsx)(y,{name:e.name,href:e.href,icon:e.icon,copyEmail:t},(0,s.Z)())}))}),(0,d.jsxs)("div",{className:"grid my-8 gap-2",children:[(0,d.jsx)(w,{}),(0,d.jsx)(v,{})]}),(0,d.jsx)("div",{children:(0,d.jsx)(j,{})})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2620)}])}},function(e){e.O(0,[774,316,981,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);