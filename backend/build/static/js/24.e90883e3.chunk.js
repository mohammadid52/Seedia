(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[24],{414:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return u}));n(35),n(61);var r=n(421),i=n.n(r);var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>e?t.substring(0,e)+"...":t},o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return t.map((function(t){return t[e]})).join(n)},c=function(t){for(var e=t.target,n=e.value,r=e.cols,i=null===n||void 0===n?void 0:n.split("\n"),a=i.length,o=0;o<i.length;o++)a+=parseInt(i[o].length/r);e.rows=a>50?50:a},s=["a","an","the","and","but","or","for","nor","so","yet","at","by","from","in","into","of","on","to","with","am","are","be","been","can","could","did","do","does","had","has","have","is","may","might","must","ought to","shall","should","was","were","will","would"],d=function(t){if(t&&t.length>0)return t.split(" ").filter((function(t){return!s.includes(t)}))},u=function(t){return i()(t).fromNow()}},420:function(t,e,n){var r=n(225),i=n(119),a=n(427),o=n(47);t.exports=function(t,e){return(o(t)?r:a)(t,i(e,3))}},422:function(t,e,n){var r=n(424),i=n(120);t.exports=function(t,e){return t&&r(t,e,i)}},424:function(t,e,n){var r=n(425)();t.exports=r},425:function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,a=Object(e),o=r(e),c=o.length;c--;){var s=o[t?c:++i];if(!1===n(a[s],s,a))break}return e}}},427:function(t,e,n){var r=n(428),i=n(155);t.exports=function(t,e){var n=-1,a=i(t)?Array(t.length):[];return r(t,(function(t,r,i){a[++n]=e(t,r,i)})),a}},428:function(t,e,n){var r=n(422),i=n(429)(r);t.exports=i},429:function(t,e,n){var r=n(155);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var a=n.length,o=e?a:-1,c=Object(n);(e?o--:++o<a)&&!1!==i(c[o],o,c););return n}}},431:function(t,e,n){"use strict";n(1);var r=n(2);e.a=function(t){var e=t.className,n=t.children,i=t.size,a=void 0===i?"text-3xl":i,o=t.fontWeight,c=void 0===o?"font-semibld":o,s=t.textColor,d=void 0===s?"text-gray-900 dark:text-white":s,u=t.isLoading;return void 0!==u&&u?Object(r.jsx)("div",{className:"h-4 animate-pulse bg-gray-400 rounded ".concat(e," ").concat(a," ").concat(c," ").concat(d)}):Object(r.jsx)("h1",{className:"".concat(e," ").concat(a," ").concat(c," ").concat(d),children:n})}},435:function(t,e,n){"use strict";var r=n(2);e.a=function(t){var e=t.title,n=t.gradient,i=void 0===n||n,a=t.className;return Object(r.jsx)("h2",{className:"".concat(a," text-2xl mb-6 font-extrabold ").concat(i?"gradient-border":""," border-b pb-2 tracking-tight\n         dark:text-white text-gray-900"),children:e})}},464:function(t,e,n){"use strict";var r=n(32),i=n(152),a=n(431),o=n(8),c=n(14),s=n(11),d=n(414),u=n(2);e.a=function(t){var e,n=t.project,l=t.userId,x=t.userData,g=t.isLoading,b=void 0!==g&&g,f=n.postedBy.toString()===l,h=x,j=n.company.location,v=n.salary,m=Object(c.g)();return Object(u.jsx)("div",{onClick:function(){return m.push(o.a.viewProject(n._id))},children:Object(u.jsx)(i.a,{isLoading:b,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(u.jsxs)("div",{className:"relative max-h-64 h-64",children:[b?Object(u.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(u.jsx)("img",{className:"h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===h||void 0===h?void 0:h.profilePicture)?null===h||void 0===h?void 0:h.profilePicture:s.s,alt:""}),Object(u.jsx)(a.a,{isLoading:b,size:"text-xl",children:n.title}),Object(u.jsx)(a.a,{size:"text-base",isLoading:b,className:"tracking-wide mt-1 gradient-text",children:null===h||void 0===h||null===(e=h.business)||void 0===e?void 0:e.name}),Object(u.jsx)(a.a,{size:"text-base",textColor:"dark:text-gray-500 text-gray-400",fontWeight:"font-medium",isLoading:b,className:"tracking-wide mt-1 ",children:"".concat((null===j||void 0===j?void 0:j.city)||"--",", ").concat((null===j||void 0===j?void 0:j.country)||"--")}),Object(u.jsx)(a.a,{size:"text-base",isLoading:b,textColor:"dark:text-gray-300 text-gray-700",fontWeight:"font-medium",className:"tracking-wide mt-4 ",children:"Salary: ".concat(v.min," - ").concat(v.max," / ").concat(v.duration)}),!b&&Object(u.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(u.jsxs)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:[Object(d.c)(n.postedOn),"  ",f&&" \u2022 ".concat(n.views||0," views")]}),Object(u.jsx)("div",{children:f?Object(u.jsx)(r.a,{label:"View",onClick:function(t){t.stopPropagation(),m.push(o.a.viewProject(n._id))},disabled:b,gradient:!0}):Object(u.jsx)(r.a,{disabled:b,label:"Apply",link:n.website,gradient:!0})})]})]})})})}},691:function(t,e,n){"use strict";n.r(e);var r=n(154),i=n(62),a=n(435),o=n(8),c=n(157),s=n(156),d=n(420),u=n.n(d),l=n(464),x=n(34),g=n(14),b=n(2);e.default=function(t){var e=t.userData,n=Object(x.useQuery)("my-projects",(function(){return Object(r.h)()})),d=n.isLoading,f=n.data,h=n.isFetched,j=h&&!d?f.data.data:{},v=e.business;return Object(s.a)(e).isBusiness?Object(b.jsxs)(c.a,{customParentMaxWidth:"max-w-360 relative",userData:e,customMaxWidth:"max-w-360",children:[Object(b.jsx)(i.a,{pageUrl:window.location.href,pageTitle:"".concat(v.name," | Projects | 13RMS ")}),Object(b.jsx)(a.a,{title:"Your Projects (".concat(j.length,")")}),Object(b.jsx)("div",{className:"grid gap-4 lg:grid-cols-3 xl:grid-cols-4 gris-cols-1 sm:grid-cols-2",children:u()(j,(function(t){return Object(b.jsx)(l.a,{isLoading:d&&!h,userId:e._id,userData:e,project:t},t._id.toString())}))})]}):Object(b.jsx)(g.a,{to:o.a.exploreJobs()})}}}]);
//# sourceMappingURL=24.e90883e3.chunk.js.map