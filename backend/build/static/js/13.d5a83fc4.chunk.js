(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[13],{414:function(t,r,e){"use strict";e.d(r,"b",(function(){return a})),e.d(r,"e",(function(){return i})),e.d(r,"a",(function(){return c})),e.d(r,"d",(function(){return s})),e.d(r,"c",(function(){return l}));e(35),e(61);var n=e(421),o=e.n(n);var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>r?t.substring(0,r)+"...":t},i=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return t.map((function(t){return t[r]})).join(e)},c=function(t){for(var r=t.target,e=r.value,n=r.cols,o=null===e||void 0===e?void 0:e.split("\n"),a=o.length,i=0;i<o.length;i++)a+=parseInt(o[i].length/n);r.rows=a>50?50:a},u=["a","an","the","and","but","or","for","nor","so","yet","at","by","from","in","into","of","on","to","with","am","are","be","been","can","could","did","do","does","had","has","have","is","may","might","must","ought to","shall","should","was","were","will","would"],s=function(t){if(t&&t.length>0)return t.split(" ").filter((function(t){return!u.includes(t)}))},l=function(t){return o()(t).fromNow()}},420:function(t,r,e){var n=e(225),o=e(119),a=e(427),i=e(47);t.exports=function(t,r){return(i(t)?n:a)(t,o(r,3))}},422:function(t,r,e){var n=e(424),o=e(120);t.exports=function(t,r){return t&&n(t,r,o)}},424:function(t,r,e){var n=e(425)();t.exports=n},425:function(t,r){t.exports=function(t){return function(r,e,n){for(var o=-1,a=Object(r),i=n(r),c=i.length;c--;){var u=i[t?c:++o];if(!1===e(a[u],u,a))break}return r}}},427:function(t,r,e){var n=e(428),o=e(155);t.exports=function(t,r){var e=-1,a=o(t)?Array(t.length):[];return n(t,(function(t,n,o){a[++e]=r(t,n,o)})),a}},428:function(t,r,e){var n=e(422),o=e(429)(n);t.exports=o},429:function(t,r,e){var n=e(155);t.exports=function(t,r){return function(e,o){if(null==e)return e;if(!n(e))return t(e,o);for(var a=e.length,i=r?a:-1,c=Object(e);(r?i--:++i<a)&&!1!==o(c[i],i,c););return e}}},431:function(t,r,e){"use strict";e(1);var n=e(2);r.a=function(t){var r=t.className,e=t.children,o=t.size,a=void 0===o?"text-3xl":o,i=t.fontWeight,c=void 0===i?"font-semibld":i,u=t.textColor,s=void 0===u?"text-gray-900 dark:text-white":u,l=t.isLoading;return void 0!==l&&l?Object(n.jsx)("div",{className:"h-4 animate-pulse bg-gray-400 rounded ".concat(r," ").concat(a," ").concat(c," ").concat(s)}):Object(n.jsx)("h1",{className:"".concat(r," ").concat(a," ").concat(c," ").concat(s),children:e})}},435:function(t,r,e){"use strict";var n=e(2);r.a=function(t){var r=t.title,e=t.gradient,o=void 0===e||e,a=t.className;return Object(n.jsx)("h2",{className:"".concat(a," text-2xl mb-6 font-extrabold ").concat(o?"gradient-border":""," border-b pb-2 tracking-tight\n         dark:text-white text-gray-900"),children:r})}},457:function(t,r,e){var n=e(465);t.exports=function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}},464:function(t,r,e){"use strict";var n=e(32),o=e(152),a=e(431),i=e(8),c=e(14),u=e(11),s=e(414),l=e(2);r.a=function(t){var r,e=t.project,d=t.userId,f=t.userData,p=t.isLoading,b=void 0!==p&&p,v=e.postedBy.toString()===d,g=f,m=e.company.location,y=e.salary,h=Object(c.g)();return Object(l.jsx)("div",{onClick:function(){return h.push(i.a.viewProject(e._id))},children:Object(l.jsx)(o.a,{isLoading:b,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(l.jsxs)("div",{className:"relative max-h-64 h-64",children:[b?Object(l.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(l.jsx)("img",{className:"h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===g||void 0===g?void 0:g.profilePicture)?null===g||void 0===g?void 0:g.profilePicture:u.s,alt:""}),Object(l.jsx)(a.a,{isLoading:b,size:"text-xl",children:e.title}),Object(l.jsx)(a.a,{size:"text-base",isLoading:b,className:"tracking-wide mt-1 gradient-text",children:null===g||void 0===g||null===(r=g.business)||void 0===r?void 0:r.name}),Object(l.jsx)(a.a,{size:"text-base",textColor:"dark:text-gray-500 text-gray-400",fontWeight:"font-medium",isLoading:b,className:"tracking-wide mt-1 ",children:"".concat((null===m||void 0===m?void 0:m.city)||"--",", ").concat((null===m||void 0===m?void 0:m.country)||"--")}),Object(l.jsx)(a.a,{size:"text-base",isLoading:b,textColor:"dark:text-gray-300 text-gray-700",fontWeight:"font-medium",className:"tracking-wide mt-4 ",children:"Salary: ".concat(y.min," - ").concat(y.max," / ").concat(y.duration)}),!b&&Object(l.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(l.jsxs)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:[Object(s.c)(e.postedOn),"  ",v&&" \u2022 ".concat(e.views||0," views")]}),Object(l.jsx)("div",{children:v?Object(l.jsx)(n.a,{label:"View",onClick:function(t){t.stopPropagation(),h.push(i.a.viewProject(e._id))},disabled:b,gradient:!0}):Object(l.jsx)(n.a,{disabled:b,label:"Apply",link:e.website,gradient:!0})})]})]})})})}},465:function(t,r){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}},502:function(t,r,e){"use strict";var n=e(503),o=e(504),a=e(508),i=e(509),c=e(513),u=e(514),s=e(515),l=e(516),d=Symbol("encodeFragmentIdentifier");function f(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(t,r){return r.encode?r.strict?c(t):encodeURIComponent(t):t}function b(t,r){return r.decode?u(t):t}function v(t){return Array.isArray(t)?t.sort():"object"===typeof t?v(Object.keys(t)).sort((function(t,r){return Number(t)-Number(r)})).map((function(r){return t[r]})):t}function g(t){var r=t.indexOf("#");return-1!==r&&(t=t.slice(0,r)),t}function m(t){var r=(t=g(t)).indexOf("?");return-1===r?"":t.slice(r+1)}function y(t,r){return r.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!r.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,r){f((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var e=function(t){var r;switch(t.arrayFormat){case"index":return function(t,e,n){r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),r?(void 0===n[t]&&(n[t]={}),n[t][r[1]]=e):n[t]=e};case"bracket":return function(t,e,n){r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"comma":case"separator":return function(r,e,n){var o="string"===typeof e&&e.includes(t.arrayFormatSeparator),a="string"===typeof e&&!o&&b(e,t).includes(t.arrayFormatSeparator);e=a?b(e,t):e;var i=o||a?e.split(t.arrayFormatSeparator).map((function(r){return b(r,t)})):null===e?e:b(e,t);n[r]=i};case"bracket-separator":return function(r,e,n){var o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(t.arrayFormatSeparator).map((function(r){return b(r,t)}));void 0!==n[r]?n[r]=[].concat(n[r],a):n[r]=a}else n[r]=e?b(e,t):e};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}(r),n=Object.create(null);if("string"!==typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var i,c=a(t.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(r.decode?u.replace(/\+/g," "):u,"="),d=o(l,2),p=d[0],g=d[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?g:b(g,r),e(b(p,r),g,n)}}}catch(S){c.e(S)}finally{c.f()}for(var m=0,h=Object.keys(n);m<h.length;m++){var j=h[m],x=n[j];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var k=w[O];x[k]=y(x[k],r)}else n[j]=y(x,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(t,r){var e=n[r];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?t[r]=v(e):t[r]=e,t}),Object.create(null))}r.extract=m,r.parse=h,r.stringify=function(t,r){if(!t)return"";f((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var e=function(e){return r.skipNull&&(null===(n=t[e])||void 0===n)||r.skipEmptyString&&""===t[e];var n},n=function(t){switch(t.arrayFormat){case"index":return function(r){return function(e,n){var o=e.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[p(r,t),"[",o,"]"].join("")]:[[p(r,t),"[",p(o,t),"]=",p(n,t)].join("")])}};case"bracket":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[p(r,t),"[]"].join("")]:[[p(r,t),"[]=",p(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===t.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[p(e,t),r,p(o,t)].join("")]:[[n,p(o,t)].join(t.arrayFormatSeparator)])}};default:return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[p(r,t)]:[[p(r,t),"=",p(n,t)].join("")])}}}}(r),o={},a=0,c=Object.keys(t);a<c.length;a++){var u=c[a];e(u)||(o[u]=t[u])}var s=Object.keys(o);return!1!==r.sort&&s.sort(r.sort),s.map((function(e){var o=t[e];return void 0===o?"":null===o?p(e,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?p(e,r)+"[]":o.reduce(n(e),[]).join("&"):p(e,r)+"="+p(o,r)})).filter((function(t){return t.length>0})).join("&")},r.parseUrl=function(t,r){r=Object.assign({decode:!0},r);var e=s(t,"#"),n=o(e,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(m(t),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:b(i,r)}:{})},r.stringifyUrl=function(t,e){e=Object.assign(n({encode:!0,strict:!0},d,!0),e);var o=g(t.url).split("?")[0]||"",a=r.extract(t.url),i=r.parse(a,{sort:!1}),c=Object.assign(i,t.query),u=r.stringify(c,e);u&&(u="?".concat(u));var s=function(t){var r="",e=t.indexOf("#");return-1!==e&&(r=t.slice(e)),r}(t.url);return t.fragmentIdentifier&&(s="#".concat(e[d]?p(t.fragmentIdentifier,e):t.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},r.pick=function(t,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},d,!1),o);var a=r.parseUrl(t,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return r.stringifyUrl({url:i,query:l(c,e),fragmentIdentifier:u},o)},r.exclude=function(t,e,n){var o=Array.isArray(e)?function(t){return!e.includes(t)}:function(t,r){return!e(t,r)};return r.pick(t,o,n)}},503:function(t,r){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},504:function(t,r,e){var n=e(505),o=e(506),a=e(457),i=e(507);t.exports=function(t,r){return n(t)||o(t,r)||a(t,r)||i()}},505:function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},506:function(t,r){t.exports=function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}},507:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},508:function(t,r,e){var n=e(457);t.exports=function(t,r){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=n(t))||r&&t&&"number"===typeof t.length){e&&(t=e);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw i}}}}},509:function(t,r,e){var n=e(510),o=e(511),a=e(457),i=e(512);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},510:function(t,r,e){var n=e(465);t.exports=function(t){if(Array.isArray(t))return n(t)}},511:function(t,r){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},512:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},513:function(t,r,e){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},514:function(t,r,e){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),a=new RegExp("("+n+")+","gi");function i(t,r){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;r=r||1;var e=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],i(e),i(n))}function c(t){try{return decodeURIComponent(t)}catch(n){for(var r=t.match(o),e=1;e<r.length;e++)r=(t=i(r,e).join("")).match(o);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(t){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(r){var o=c(n[0]);o!==n[0]&&(e[n[0]]=o)}n=a.exec(t)}e["%C2"]="\ufffd";for(var i=Object.keys(e),u=0;u<i.length;u++){var s=i[u];t=t.replace(new RegExp(s,"g"),e[s])}return t}(t)}}},515:function(t,r,e){"use strict";t.exports=function(t,r){if("string"!==typeof t||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[t];var e=t.indexOf(r);return-1===e?[t]:[t.slice(0,e),t.slice(e+r.length)]}},516:function(t,r,e){"use strict";t.exports=function(t,r){for(var e={},n=Object.keys(t),o=Array.isArray(r),a=0;a<n.length;a++){var i=n[a],c=t[i];(o?-1!==r.indexOf(i):r(i,c,t))&&(e[i]=c)}return e}},679:function(t,r,e){"use strict";e.r(r);var n=e(118),o=e(21),a=e(154),i=e(152),c=e(62),u=e(435),s=e(431),l=e(86),d=e(157),f=e(171),p=e(420),b=e.n(p),v=e(464),g=e(502),m=e.n(g),y=e(1),h=e(34),j=e(414),x=e(2);r.default=function(t){var r,e,p,g=t.userData,O=Object(f.b)(),w=O.setIsSearched,k=O.isSearched,S=Object(h.useQuery)("searched-jobs",(function(){return Object(a.q)(L)}),{enabled:!1}),N=S.data,F=S.refetch,I=S.isLoading,A=S.isFetched,E="business"===(null===g||void 0===g||null===(r=g.other)||void 0===r?void 0:r.accountType),C=m.a.parse(window.location.search).q.toString(),R=Object(y.useState)(C),U=Object(o.a)(R,2),L=U[0],T=U[1];Object(y.useEffect)((function(){if(k){var t=m.a.parse(window.location.search).q.toString();T(t)}}),[window.location.search,k]);var P=(null===g||void 0===g?void 0:g.background)&&!E?b()(null===g||void 0===g?void 0:g.background.skills,(function(t){return t.name})):[],q=E?[]:Object(j.d)(null===g||void 0===g||null===(e=g.company)||void 0===e?void 0:e.jobTitle),$=E?[]:Object(j.d)(null===g||void 0===g||null===(p=g.company)||void 0===p?void 0:p.jobType),z=Object(h.useQuery)("related-jobs",(function(){return Object(a.m)([].concat(Object(n.a)(P),Object(n.a)(q),Object(n.a)($)))}),{enabled:!E}),J=z.data,M=z.isFetched,W=z.isLoading,B=M&&!W?J.data.data:{};Object(y.useEffect)((function(){L.length>=3&&(F(),w(!1))}),[L]);var _=A&&!I?N.data.data:{};return I&&!A?Object(x.jsx)(l.a,{}):Object(x.jsxs)(d.a,{userData:g,customParentMaxWidth:"max-w-360 relative",customMaxWidth:"max-w-360",children:[Object(x.jsx)(c.a,{keywords:"jobs, jobs at 13RMS, 13rms",pageUrl:window.location.href,pageTitle:"Search ".concat(L," | Jobs | 13RMS ")}),L&&Object(x.jsx)(i.a,{content:Object(x.jsxs)(s.a,{children:["You have searched for `",Object(x.jsx)("span",{className:"gradient-text",children:L}),"`. Found"," ",(null===_||void 0===_?void 0:_.length)||0," results"]})}),Object(x.jsxs)("div",{className:"mt-12",children:[_.length>0&&Object(x.jsx)(u.a,{title:"Jobs Related To ".concat(L)}),_.length>0&&Object(x.jsx)("div",{className:"grid  gap-4 grid-cols-4",children:b()(_,(function(t){return Object(x.jsx)(v.a,{userId:g._id.toString(),project:t})}))})]}),!E&&0===_.length&&B.length>0&&Object(x.jsx)(u.a,{title:"Jobs Related To Your Preference"}),!E&&0===_.length&&B.length>0&&Object(x.jsx)("div",{className:"grid gap-4 grid-cols-4",children:b()(B,(function(t){return Object(x.jsx)(v.a,{userId:g._id.toString(),project:t})}))})]})}}}]);
//# sourceMappingURL=13.d5a83fc4.chunk.js.map