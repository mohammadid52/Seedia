(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[42],{414:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return d}));n(28),n(48);var i=n(426),a=n.n(i);var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>e?t.substring(0,e)+"...":t},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return t.map((function(t){return t[e]})).join(n)},c=function(t){for(var e=t.target,n=e.value,i=e.cols,a=null===n||void 0===n?void 0:n.split("\n"),o=a.length,r=0;r<a.length;r++)o+=parseInt(a[r].length/i);e.rows=o>50?50:o},s=function(t){if(t&&t.length>0)return t.split(" ").filter((function(t){return"in"!==t||"or"!==t||"of"!==t||"the"!==t||"is"!==t||"can"!==t||"so"!==t||"."!==t||"to"!==t}))},d=function(t){return a()(t).fromNow()}},421:function(t,e,n){var i=n(211),a=n(140),o=n(427),r=n(36);t.exports=function(t,e){return(r(t)?i:o)(t,a(e,3))}},427:function(t,e,n){var i=n(212),a=n(142);t.exports=function(t,e){var n=-1,o=a(t)?Array(t.length):[];return i(t,(function(t,i,a){o[++n]=e(t,i,a)})),o}},428:function(t,e,n){"use strict";n(0);var i=n(2);e.a=function(t){var e=t.className,n=t.children,a=t.size,o=void 0===a?"text-3xl":a,r=t.fontWeight,c=void 0===r?"font-semibld":r,s=t.textColor,d=void 0===s?"text-gray-900 dark:text-white":s,l=t.isLoading;return void 0!==l&&l?Object(i.jsx)("div",{className:"h-4 animate-pulse bg-gray-400 rounded ".concat(e," ").concat(o," ").concat(c," ").concat(d)}):Object(i.jsx)("h1",{className:"".concat(e," ").concat(o," ").concat(c," ").concat(d),children:n})}},441:function(t,e,n){"use strict";var i=n(2);e.a=function(t){var e=t.title,n=t.gradient,a=void 0===n||n,o=t.className;return Object(i.jsx)("h2",{className:"".concat(o," text-2xl mb-6 font-extrabold ").concat(a?"gradient-border":""," border-b pb-2 tracking-tight\n         dark:text-white text-gray-900"),children:e})}},477:function(t,e,n){"use strict";var i=n(32),a=n(135),o=n(428),r=n(8),c=n(13),s=n(10),d=n(414),l=n(2);e.a=function(t){var e,n=t.project,u=t.userId,b=t.userData,j=t.isLoading,v=void 0!==j&&j,x=n.postedBy.toString()===u,g=b,f=n.company.location,h=n.salary,m=Object(c.g)();return Object(l.jsx)("div",{onClick:function(){return m.push(r.a.viewProject(n._id))},children:Object(l.jsx)(a.a,{isLoading:v,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(l.jsxs)("div",{className:"relative max-h-64 h-64",children:[v?Object(l.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(l.jsx)("img",{className:"h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===g||void 0===g?void 0:g.profilePicture)?null===g||void 0===g?void 0:g.profilePicture:s.s,alt:""}),Object(l.jsx)(o.a,{isLoading:v,size:"text-xl",children:n.title}),Object(l.jsx)(o.a,{size:"text-base",isLoading:v,className:"tracking-wide mt-1 gradient-text",children:null===g||void 0===g||null===(e=g.business)||void 0===e?void 0:e.name}),Object(l.jsx)(o.a,{size:"text-base",textColor:"dark:text-gray-500 text-gray-400",fontWeight:"font-medium",isLoading:v,className:"tracking-wide mt-1 ",children:"".concat((null===f||void 0===f?void 0:f.city)||"--",", ").concat((null===f||void 0===f?void 0:f.country)||"--")}),Object(l.jsx)(o.a,{size:"text-base",isLoading:v,textColor:"dark:text-gray-300 text-gray-700",fontWeight:"font-medium",className:"tracking-wide mt-4 ",children:"Salary: ".concat(h.min," - ").concat(h.max," / ").concat(h.duration)}),!v&&Object(l.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(l.jsxs)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:[Object(d.c)(n.postedOn),"  ",x&&" \u2022 ".concat(n.views||0," views")]}),Object(l.jsx)("div",{children:x?Object(l.jsx)(i.a,{label:"View",onClick:function(t){t.stopPropagation(),m.push(r.a.viewProject(n._id))},disabled:v,gradient:!0}):Object(l.jsx)(i.a,{disabled:v,label:"Apply",link:n.website,gradient:!0})})]})]})})})}},695:function(t,e,n){"use strict";n.r(e);var i=n(103),a=n(138),o=n(49),r=n(441),c=n(76),s=n(8),d=n(143),l=n(141),u=n(421),b=n.n(u),j=n(477),v=n(35),x=n(13),g=n(414),f=n(2);e.default=function(t){var e=t.userData,n=(null===e||void 0===e?void 0:e.background)?b()(null===e||void 0===e?void 0:e.background.skills,(function(t){return t.name})):[],u=null===e||void 0===e?void 0:e.company,h=Object(g.d)(null===u||void 0===u?void 0:u.jobTitle),m=Object(g.d)(null===u||void 0===u?void 0:u.jobType),O=Object(l.a)(e).isBusiness,p=Object(v.useQuery)("related-jobs",(function(){return Object(a.m)([].concat(Object(i.a)(n),Object(i.a)(h),Object(i.a)(m)))}),{enabled:!O}),w=p.isLoading,y=p.data,k=p.isFetched,N=k&&!w?y.data.data:{};return O?Object(f.jsx)(x.a,{to:s.a.viewMyProjects()}):w&&!k?Object(f.jsx)(c.a,{}):Object(f.jsxs)(d.a,{userData:e,customMaxWidth:"max-w-7xl",children:[Object(f.jsx)(o.a,{keywords:"jobs, jobs at 13RMS, 13rms",pageUrl:window.location.href,pageTitle:"Jobs | 13RMS "}),Object(f.jsx)(r.a,{title:"Jobs Related To Your Preference"}),Object(f.jsx)("div",{className:"grid gap-4 grid-cols-4",children:b()(N,(function(t){return Object(f.jsx)(j.a,{userId:e._id.toString(),project:t})}))})]})}}}]);
//# sourceMappingURL=42.40d16002.chunk.js.map