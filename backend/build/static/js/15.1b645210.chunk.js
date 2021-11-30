(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[15],{496:function(t,e,r){"use strict";var n=r(2);e.a=function(t){var e=t.title,r=t.gradient,a=void 0===r||r,o=t.className;return Object(n.jsx)("h2",{className:"".concat(o," text-2xl mb-6 font-extrabold ").concat(a?"gradient-border":""," border-b pb-2 tracking-tight\n         dark:text-white text-gray-900"),children:e})}},523:function(t,e,r){"use strict";var n=r(34),a=r(188),o=r(191),i=r(8),c=r(17),s=r(15),u=r(120),l=r(2);e.a=function(t){var e,r=t.project,d=t.userId,f=t.userData,p=t.isLoading,b=void 0!==p&&p,y=r.postedBy.toString()===d,m=f,g=r.company.location,v=r.salary,j=Object(c.g)();return Object(l.jsx)("div",{onClick:function(){return j.push(i.a.viewProject(r._id))},children:Object(l.jsx)(a.a,{isLoading:b,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(l.jsxs)("div",{className:"relative max-h-64 h-64",children:[b?Object(l.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(l.jsx)("img",{className:"h-12 w-12 border-gradient border-transparent border-2 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===m||void 0===m?void 0:m.profilePicture)?null===m||void 0===m?void 0:m.profilePicture:s.s,alt:""}),Object(l.jsx)(o.a,{isLoading:b,size:"text-xl",children:r.title}),Object(l.jsx)(o.a,{size:"text-base",isLoading:b,className:"tracking-wide mt-1 gradient-text",children:null===m||void 0===m||null===(e=m.business)||void 0===e?void 0:e.name}),Object(l.jsx)(o.a,{size:"text-base",textColor:"dark:text-gray-500 text-gray-400",fontWeight:"font-medium",isLoading:b,className:"tracking-wide mt-1 ",children:"".concat((null===g||void 0===g?void 0:g.city)||"--",", ").concat((null===g||void 0===g?void 0:g.country)||"--")}),Object(l.jsx)(o.a,{size:"text-base",isLoading:b,textColor:"dark:text-gray-300 text-gray-700",fontWeight:"font-medium",className:"tracking-wide mt-4 ",children:"Salary: ".concat(v.min," - ").concat(v.max," / ").concat(v.duration)}),!b&&Object(l.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(l.jsxs)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:[Object(u.c)(r.postedOn),"  ",y&&" \u2022 ".concat(r.views||0," views")]}),Object(l.jsx)("div",{children:y?Object(l.jsx)(n.a,{label:"View",onClick:function(t){t.stopPropagation(),j.push(i.a.viewProject(r._id))},disabled:b,gradient:!0}):Object(l.jsx)(n.a,{disabled:b,label:"Apply",link:r.website,gradient:!0})})]})]})})})}},528:function(t,e,r){var n=r(546);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},546:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},593:function(t,e,r){"use strict";var n=r(594),a=r(595),o=r(599),i=r(600),c=r(604),s=r(605),u=r(606),l=r(607),d=Symbol("encodeFragmentIdentifier");function f(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function b(t,e){return e.decode?s(t):t}function y(t){return Array.isArray(t)?t.sort():"object"===typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function m(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function g(t){var e=(t=m(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function v(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function j(t,e){f((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"===typeof r&&r.includes(t.arrayFormatSeparator),o="string"===typeof r&&!a&&b(r,t).includes(t.arrayFormatSeparator);r=o?b(r,t):r;var i=a||o?r.split(t.arrayFormatSeparator).map((function(e){return b(e,t)})):null===r?r:b(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return b(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=r?b(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!==typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var i,c=o(t.split("&"));try{for(c.s();!(i=c.n()).done;){var s=i.value;if(""!==s){var l=u(e.decode?s.replace(/\+/g," "):s,"="),d=a(l,2),p=d[0],m=d[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:b(m,e),r(b(p,e),m,n)}}}catch(S){c.e(S)}finally{c.f()}for(var g=0,j=Object.keys(n);g<j.length;g++){var h=j[g],x=n[h];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var k=w[O];x[k]=v(x[k],e)}else n[h]=v(x,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=g,e.parse=j,e.stringify=function(t,e){if(!t)return"";f((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&(null===(n=t[r])||void 0===n)||e.skipEmptyString&&""===t[r];var n},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(e,t),"[",a,"]"].join("")]:[[p(e,t),"[",p(a,t),"]=",p(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(e,t),"[]"].join("")]:[[p(e,t),"[]=",p(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[p(r,t),e,p(a,t)].join("")]:[[n,p(a,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[p(e,t)]:[[p(e,t),"=",p(n,t)].join("")])}}}}(e),a={},o=0,c=Object.keys(t);o<c.length;o++){var s=c[o];r(s)||(a[s]=t[s])}var u=Object.keys(a);return!1!==e.sort&&u.sort(e.sort),u.map((function(r){var a=t[r];return void 0===a?"":null===a?p(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?p(r,e)+"[]":a.reduce(n(r),[]).join("&"):p(r,e)+"="+p(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=u(t,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:j(g(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:b(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},d,!0),r);var a=m(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o,{sort:!1}),c=Object.assign(i,t.query),s=e.stringify(c,r);s&&(s="?".concat(s));var u=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(u="#".concat(r[d]?p(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(a).concat(s).concat(u)},e.pick=function(t,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},d,!1),a);var o=e.parseUrl(t,a),i=o.url,c=o.query,s=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:l(c,r),fragmentIdentifier:s},a)},e.exclude=function(t,r,n){var a=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,a,n)}},594:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},595:function(t,e,r){var n=r(596),a=r(597),o=r(528),i=r(598);t.exports=function(t,e){return n(t)||a(t,e)||o(t,e)||i()}},596:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},597:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},598:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},599:function(t,e,r){var n=r(528);t.exports=function(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}},600:function(t,e,r){var n=r(601),a=r(602),o=r(528),i=r(603);t.exports=function(t){return n(t)||a(t)||o(t)||i()}},601:function(t,e,r){var n=r(546);t.exports=function(t){if(Array.isArray(t))return n(t)}},602:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},603:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},604:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},605:function(t,e,r){"use strict";var n="%[a-f0-9]{2}",a=new RegExp(n,"gi"),o=new RegExp("("+n+")+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],i(r),i(n))}function c(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(a),r=1;r<e.length;r++)e=(t=i(e,r).join("")).match(a);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var a=c(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(t)}r["%C2"]="\ufffd";for(var i=Object.keys(r),s=0;s<i.length;s++){var u=i[s];t=t.replace(new RegExp(u,"g"),r[u])}return t}(t)}}},606:function(t,e,r){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},607:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],c=t[i];(a?-1!==e.indexOf(i):e(i,c,t))&&(r[i]=c)}return r}},859:function(t,e,r){"use strict";r.r(e);var n=r(12),a=r(10),o=r(117),i=r(188),c=r(69),s=r(496),u=r(191),l=r(89),d=r(119),f=r(206),p=r(122),b=r.n(p),y=r(523),m=r(593),g=r.n(m),v=r(1),j=r(35),h=r(120),x=r(2);e.default=function(t){var e,r,p,m=t.userData,O=Object(f.b)(),w=O.setIsSearched,k=O.isSearched,S=Object(j.useQuery)("searched-jobs",(function(){return Object(o.s)(T)}),{enabled:!1}),F=S.data,N=S.refetch,I=S.isLoading,A=S.isFetched,E="business"===(null===m||void 0===m||null===(e=m.other)||void 0===e?void 0:e.accountType),C=g.a.parse(window.location.search).q.toString(),R=Object(v.useState)(C),U=Object(a.a)(R,2),T=U[0],L=U[1];Object(v.useEffect)((function(){if(k){var t=g.a.parse(window.location.search).q.toString();L(t)}}),[window.location.search,k]);var P=(null===m||void 0===m?void 0:m.background)&&!E?b()(null===m||void 0===m?void 0:m.background.skills,(function(t){return t.name})):[],$=E?[]:Object(h.d)(null===m||void 0===m||null===(r=m.company)||void 0===r?void 0:r.jobTitle),q=E?[]:Object(h.d)(null===m||void 0===m||null===(p=m.company)||void 0===p?void 0:p.jobType),J=Object(j.useQuery)("related-jobs",(function(){return Object(o.o)([].concat(Object(n.a)(P),Object(n.a)($),Object(n.a)(q)))}),{enabled:!E}),M=J.data,z=J.isFetched,B=J.isLoading,W=z&&!B?M.data.data:{};Object(v.useEffect)((function(){T.length>=3&&(N(),w(!1))}),[T]);var _=A&&!I?F.data.data:{};return I&&!A?Object(x.jsx)(l.a,{}):Object(x.jsxs)(d.a,{userData:m,customParentMaxWidth:"max-w-360 relative",customMaxWidth:"max-w-360",children:[Object(x.jsx)(c.a,{keywords:"jobs, jobs at 13RMS, 13rms",pageUrl:window.location.href,pageTitle:"Search ".concat(T," | Jobs | 13RMS ")}),T&&Object(x.jsx)(i.a,{content:Object(x.jsxs)(u.a,{children:["You have searched for `",Object(x.jsx)("span",{className:"gradient-text",children:T}),"`. Found"," ",(null===_||void 0===_?void 0:_.length)||0," results"]})}),Object(x.jsxs)("div",{className:"mt-12",children:[_.length>0&&Object(x.jsx)(s.a,{title:"Jobs Related To ".concat(T)}),_.length>0&&Object(x.jsx)("div",{className:"grid  gap-4 grid-cols-4",children:b()(_,(function(t){return Object(x.jsx)(y.a,{userId:m._id.toString(),project:t})}))})]}),!E&&0===_.length&&W.length>0&&Object(x.jsx)(s.a,{title:"Jobs Related To Your Preference"}),!E&&0===_.length&&W.length>0&&Object(x.jsx)("div",{className:"grid gap-4 grid-cols-4",children:b()(W,(function(t){return Object(x.jsx)(y.a,{userId:m._id.toString(),project:t})}))})]})}}}]);
//# sourceMappingURL=15.1b645210.chunk.js.map