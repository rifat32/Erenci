(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{3540:function(e,t,n){"use strict";n.d(t,{y:function(){return o}});var r=n(9008),i=n(5893),o=function(e){var t=e.title,n=e.description;return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("meta",{property:"og:title",content:t}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{property:"og:description",content:n})]})}},1959:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var r=function(e,t){return e.length>t?e.substr(0,t-1)+"...":e}},1728:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9925),i=n.n(r),o=n(3540),a=n(4586),u=n(1959),s=n(9654),c=n(7294),l=n(5893),d=function(e){var t=e.artist,n=e.name,r=e.coverImage,i=e.href,o=(0,c.useState)(!1),a=o[0],u=o[1];return(0,l.jsxs)("a",{href:i,rel:"noopener noreferrer",target:"_blank",onMouseOver:function(){return u(!0)},onTouchStart:function(){return u(!0)},onTouchEnd:function(){return u(!1)},onMouseLeave:function(){return u(!1)},className:"transition duration-300 ease-in-out transform hover:scale-102.5 relative flex items-end h-72 w-72 md:h-64 md:w-64 bg-no-repeat bg-cover rounded-md shadow-md",children:[(0,l.jsx)("div",{className:"transition duration-300 ease-in-out ".concat(a?"opacity-40":"opacity-100 "," rounded-md bg-cover absolute w-full h-full"),style:{backgroundImage:"url('".concat(r,"')"),backgroundSize:"100% 100%"}}),(0,l.jsxs)("div",{className:"transition duration-300 ease-in-out ".concat(a?"opacity-100":"opacity-0 "," p-4 z-40 font-bold"),children:[(0,l.jsx)("h1",{className:"font-bold text-2xl capitalize",children:t}),(0,l.jsx)("p",{className:"font-medium text-sm capitalize",children:n})]})]})};function f(){var e=(0,s.ZP)("topAlbums").data;return console.log(e),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.y,{title:"Albums",description:"My top albums on Spotify."}),e&&(0,l.jsx)("div",{className:"md:px-8",children:(0,l.jsx)(i(),{children:(0,l.jsx)("div",{className:"rounded-lg justify-center md:justify-start grid grid-flow-row xs:grid-flow-col gap-6 xs:grid-rows-2 overflow-scroll no-scrollbar p-3",children:e.topalbums.album.filter((function(e){return e.image[3]["#text"]})).map((function(e){return(0,l.jsx)(d,{artist:e.artist.name,name:(0,u.$)(e.name,25),coverImage:e.image[3]["#text"],href:e.url},(0,a.Z)())}))})})})]})}},6595:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums",function(){return n(1728)}])},4861:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(7294));t.default=function(e){var t=a.useState(0),n=t[0],r=t[1],i=e.transitionDuration||400,o=e.delay||50,u=e.wrapperTag||"div",s=e.childTag||"div",c="undefined"===typeof e.visible||e.visible;return a.useEffect((function(){var t=a.default.Children.count(e.children);if(c||(t=0),t==n){var u=setTimeout((function(){e.onComplete&&e.onComplete()}),i);return function(){return clearTimeout(u)}}var s=t>n?1:-1,l=setTimeout((function(){r(n+s)}),o);return function(){return clearTimeout(l)}}),[a.default.Children.count(e.children),o,n,c,i]),a.default.createElement(u,{className:e.className},a.default.Children.map(e.children,(function(t,r){return a.default.createElement(s,{className:e.childClassName,style:{transition:"opacity "+i+"ms, transform "+i+"ms",transform:n>r?"none":"translateY(20px)",opacity:n>r?1:0}},t)})))}},9925:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(4861);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(i).default}})}},function(e){e.O(0,[774,888,179],(function(){return t=6595,e(e.s=t);var t}));var t=e.O();_N_E=t}]);