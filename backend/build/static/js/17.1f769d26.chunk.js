(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[17],{423:function(t,r,e){"use strict";e.d(r,"b",(function(){return a})),e.d(r,"e",(function(){return i})),e.d(r,"a",(function(){return c})),e.d(r,"f",(function(){return u})),e.d(r,"d",(function(){return f})),e.d(r,"c",(function(){return d}));e(38),e(63);var n=e(427),o=e.n(n);var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>r?t.substring(0,r)+"...":t},i=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return t.map((function(t){return t[r]})).join(e)},c=function(t){for(var r=t.target,e=r.value,n=r.cols,o=null===e||void 0===e?void 0:e.split("\n"),a=o.length,i=0;i<o.length;i++)a+=parseInt(o[i].length/n);r.rows=a>50?50:a},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r>1?"".concat(t,"s"):t},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<=12?"".concat(t," ").concat(s("month",t)):t%12===0?"".concat(t/12," ").concat(s("year",t)):"".concat(12-t%12," ").concat(s("year",t)," ").concat(t%12," ").concat(s("month",t))},l=["a","an","the","and","but","or","for","nor","so","yet","at","by","from","in","into","of","on","to","with","am","are","be","been","can","could","did","do","does","had","has","have","is","may","might","must","ought to","shall","should","was","were","will","would"],f=function(t){if(t&&t.length>0)return t.split(" ").filter((function(t){return!l.includes(t)}))},d=function(t){return o()(t).fromNow()}},444:function(t,r,e){"use strict";e(1);var n=e(2);r.a=function(t){var r=t.className,e=t.children,o=t.size,a=void 0===o?"text-3xl":o,i=t.fontWeight,c=void 0===i?"font-semibld":i,s=t.textColor,u=void 0===s?"text-gray-900 dark:text-white":s,l=t.isLoading;return void 0!==l&&l?Object(n.jsx)("div",{className:"h-4 animate-pulse bg-gray-400 rounded ".concat(r," ").concat(a," ").concat(c," ").concat(u)}):Object(n.jsx)("h1",{className:"".concat(r," ").concat(a," ").concat(c," ").concat(u),children:e})}},484:function(t,r,e){var n=e(505);t.exports=function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}},505:function(t,r){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}},564:function(t,r,e){"use strict";var n=e(565),o=e(566),a=e(570),i=e(571),c=e(575),s=e(576),u=e(577),l=e(578),f=Symbol("encodeFragmentIdentifier");function d(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(t,r){return r.encode?r.strict?c(t):encodeURIComponent(t):t}function m(t,r){return r.decode?s(t):t}function b(t){return Array.isArray(t)?t.sort():"object"===typeof t?b(Object.keys(t)).sort((function(t,r){return Number(t)-Number(r)})).map((function(r){return t[r]})):t}function v(t){var r=t.indexOf("#");return-1!==r&&(t=t.slice(0,r)),t}function y(t){var r=(t=v(t)).indexOf("?");return-1===r?"":t.slice(r+1)}function g(t,r){return r.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!r.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,r){d((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var e=function(t){var r;switch(t.arrayFormat){case"index":return function(t,e,n){r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),r?(void 0===n[t]&&(n[t]={}),n[t][r[1]]=e):n[t]=e};case"bracket":return function(t,e,n){r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"comma":case"separator":return function(r,e,n){var o="string"===typeof e&&e.includes(t.arrayFormatSeparator),a="string"===typeof e&&!o&&m(e,t).includes(t.arrayFormatSeparator);e=a?m(e,t):e;var i=o||a?e.split(t.arrayFormatSeparator).map((function(r){return m(r,t)})):null===e?e:m(e,t);n[r]=i};case"bracket-separator":return function(r,e,n){var o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(t.arrayFormatSeparator).map((function(r){return m(r,t)}));void 0!==n[r]?n[r]=[].concat(n[r],a):n[r]=a}else n[r]=e?m(e,t):e};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}(r),n=Object.create(null);if("string"!==typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var i,c=a(t.split("&"));try{for(c.s();!(i=c.n()).done;){var s=i.value;if(""!==s){var l=u(r.decode?s.replace(/\+/g," "):s,"="),f=o(l,2),p=f[0],v=f[1];v=void 0===v?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?v:m(v,r),e(m(p,r),v,n)}}}catch(k){c.e(k)}finally{c.f()}for(var y=0,h=Object.keys(n);y<h.length;y++){var j=h[y],x=n[j];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var S=w[O];x[S]=g(x[S],r)}else n[j]=g(x,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(t,r){var e=n[r];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?t[r]=b(e):t[r]=e,t}),Object.create(null))}r.extract=y,r.parse=h,r.stringify=function(t,r){if(!t)return"";d((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var e=function(e){return r.skipNull&&(null===(n=t[e])||void 0===n)||r.skipEmptyString&&""===t[e];var n},n=function(t){switch(t.arrayFormat){case"index":return function(r){return function(e,n){var o=e.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[p(r,t),"[",o,"]"].join("")]:[[p(r,t),"[",p(o,t),"]=",p(n,t)].join("")])}};case"bracket":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[p(r,t),"[]"].join("")]:[[p(r,t),"[]=",p(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===t.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[p(e,t),r,p(o,t)].join("")]:[[n,p(o,t)].join(t.arrayFormatSeparator)])}};default:return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[p(r,t)]:[[p(r,t),"=",p(n,t)].join("")])}}}}(r),o={},a=0,c=Object.keys(t);a<c.length;a++){var s=c[a];e(s)||(o[s]=t[s])}var u=Object.keys(o);return!1!==r.sort&&u.sort(r.sort),u.map((function(e){var o=t[e];return void 0===o?"":null===o?p(e,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?p(e,r)+"[]":o.reduce(n(e),[]).join("&"):p(e,r)+"="+p(o,r)})).filter((function(t){return t.length>0})).join("&")},r.parseUrl=function(t,r){r=Object.assign({decode:!0},r);var e=u(t,"#"),n=o(e,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(y(t),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,r)}:{})},r.stringifyUrl=function(t,e){e=Object.assign(n({encode:!0,strict:!0},f,!0),e);var o=v(t.url).split("?")[0]||"",a=r.extract(t.url),i=r.parse(a,{sort:!1}),c=Object.assign(i,t.query),s=r.stringify(c,e);s&&(s="?".concat(s));var u=function(t){var r="",e=t.indexOf("#");return-1!==e&&(r=t.slice(e)),r}(t.url);return t.fragmentIdentifier&&(u="#".concat(e[f]?p(t.fragmentIdentifier,e):t.fragmentIdentifier)),"".concat(o).concat(s).concat(u)},r.pick=function(t,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=r.parseUrl(t,o),i=a.url,c=a.query,s=a.fragmentIdentifier;return r.stringifyUrl({url:i,query:l(c,e),fragmentIdentifier:s},o)},r.exclude=function(t,e,n){var o=Array.isArray(e)?function(t){return!e.includes(t)}:function(t,r){return!e(t,r)};return r.pick(t,o,n)}},565:function(t,r){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},566:function(t,r,e){var n=e(567),o=e(568),a=e(484),i=e(569);t.exports=function(t,r){return n(t)||o(t,r)||a(t,r)||i()}},567:function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},568:function(t,r){t.exports=function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}},569:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},570:function(t,r,e){var n=e(484);t.exports=function(t,r){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=n(t))||r&&t&&"number"===typeof t.length){e&&(t=e);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(s)throw i}}}}},571:function(t,r,e){var n=e(572),o=e(573),a=e(484),i=e(574);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},572:function(t,r,e){var n=e(505);t.exports=function(t){if(Array.isArray(t))return n(t)}},573:function(t,r){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},574:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},575:function(t,r,e){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},576:function(t,r,e){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),a=new RegExp("("+n+")+","gi");function i(t,r){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;r=r||1;var e=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],i(e),i(n))}function c(t){try{return decodeURIComponent(t)}catch(n){for(var r=t.match(o),e=1;e<r.length;e++)r=(t=i(r,e).join("")).match(o);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(t){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(r){var o=c(n[0]);o!==n[0]&&(e[n[0]]=o)}n=a.exec(t)}e["%C2"]="\ufffd";for(var i=Object.keys(e),s=0;s<i.length;s++){var u=i[s];t=t.replace(new RegExp(u,"g"),e[u])}return t}(t)}}},577:function(t,r,e){"use strict";t.exports=function(t,r){if("string"!==typeof t||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[t];var e=t.indexOf(r);return-1===e?[t]:[t.slice(0,e),t.slice(e+r.length)]}},578:function(t,r,e){"use strict";t.exports=function(t,r){for(var e={},n=Object.keys(t),o=Array.isArray(r),a=0;a<n.length;a++){var i=n[a],c=t[i];(o?-1!==r.indexOf(i):r(i,c,t))&&(e[i]=c)}return e}},579:function(t,r,e){"use strict";var n=e(42),o=e(154),a=e(444),i=e(9),c=e(17),s=e(12),u=e(423),l=e(2);r.a=function(t){var r,e=t.request,f=t.userId,d=(t.userData,t.isLoading),p=void 0!==d&&d,m=e.postedBy.toString()===f,b=Object(c.g)(),v=e.user;return Object(l.jsx)("div",{onClick:function(){return b.push(i.a.viewRequestById(e._id))},children:Object(l.jsx)(o.a,{isLoading:p,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(l.jsxs)("div",{className:"relative max-h-64 h-64",children:[p?Object(l.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(l.jsx)("img",{className:"h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===v||void 0===v?void 0:v.profilePicture)?null===v||void 0===v?void 0:v.profilePicture:s.s,alt:""}),Object(l.jsx)(a.a,{isLoading:p,size:"text-xl",children:e.title}),Object(l.jsx)(a.a,{size:"text-base",isLoading:p,className:"tracking-wide mt-1 gradient-text",children:null===v||void 0===v?void 0:v.email}),Object(l.jsx)(a.a,{size:"text-sm",isLoading:p,className:"tracking-wide truncate whitespace-pre-line mt-1",children:e.description}),!p&&Object(l.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(l.jsx)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:Object(u.c)(e.postedOn)}),Object(l.jsx)("div",{onClick:function(t){return t.stopPropagation()},children:m?Object(l.jsx)(n.a,{label:"View",onClick:function(){b.push(i.a.viewRequestById(e._id))},disabled:p,gradient:!0}):Object(l.jsx)(n.a,{disabled:p,label:"View Profile",gradient:!0,link:i.a.getProfileById(v.profileUrl,(null===v||void 0===v||null===(r=v.other)||void 0===r?void 0:r.template)||1)})})]})]})})})}},871:function(t,r,e){"use strict";e.r(r);var n=e(23),o=e(155),a=e(154),i=e(65),c=e(444),s=e(89),u=e(159),l=e(173),f=e(37),d=e(579),p=e(564),m=e.n(p),b=e(1),v=e(32),y=e(2);r.default=function(t){var r=t.userData,e=Object(l.b)(),p=e.setIsSearched,g=e.isSearched,h=Object(v.useQuery)("searched-jobs",(function(){return Object(o.r)(N)}),{enabled:!1}),j=h.data,x=h.refetch,O=h.isLoading,w=h.isFetched,S=m.a.parse(window.location.search).q.toString(),k=Object(b.useState)(S),I=Object(n.a)(k,2),N=I[0],F=I[1];Object(b.useEffect)((function(){if(g){var t=m.a.parse(window.location.search).q.toString();F(t)}}),[window.location.search,g]),Object(b.useEffect)((function(){N.length>=3&&(x(),p(!1))}),[N]);var A=w&&!O?j.data.data:[];return O&&!w?Object(y.jsx)(s.a,{}):Object(y.jsxs)(u.a,{userData:r,customParentMaxWidth:"max-w-360 relative",customMaxWidth:"max-w-360",children:[Object(y.jsx)(i.a,{keywords:"jobs, jobs at 13RMS, 13rms",pageUrl:window.location.href,pageTitle:"Search ".concat(N," | Jobs | 13RMS ")}),N&&Object(y.jsx)(a.a,{content:Object(y.jsxs)(c.a,{children:["You have searched for `",Object(y.jsx)("span",{className:"gradient-text",children:N}),"`. Found"," ",(null===A||void 0===A?void 0:A.length)||0," results"]})}),A&&A.length>0&&Object(y.jsx)("div",{className:"mt-12",children:A.length>0&&Object(y.jsx)("div",{className:"grid  gap-4 grid-cols-4",children:Object(f.map)(A,(function(t){return Object(y.jsx)(d.a,{isLoading:!w&&O,userData:r,userId:r._id.toString(),request:t})}))})})]})}}}]);
//# sourceMappingURL=17.1f769d26.chunk.js.map