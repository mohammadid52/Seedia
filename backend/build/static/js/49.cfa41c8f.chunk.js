(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[49],{494:function(t,e,a){"use strict";var i=a(2);e.a=function(t){var e=t.title,a=t.gradient,s=void 0===a||a,o=t.className;return Object(i.jsx)("h2",{className:"".concat(o," text-2xl mb-6 font-extrabold ").concat(s?"gradient-border":""," border-b pb-2 tracking-tight\n         dark:text-white text-gray-900"),children:e})}},519:function(t,e,a){"use strict";var i=a(34),s=a(188),o=a(191),r=a(8),n=a(17),c=a(15),d=a(120),l=a(2);e.a=function(t){var e,a=t.project,b=t.userId,j=t.userData,u=t.isLoading,x=void 0!==u&&u,g=a.postedBy.toString()===b,v=j,m=a.company.location,h=a.salary,O=Object(n.g)();return Object(l.jsx)("div",{onClick:function(){return O.push(r.a.viewProject(a._id))},children:Object(l.jsx)(s.a,{isLoading:x,className:"box   hover:shadow-xl transition-all  cursor-pointer",content:Object(l.jsxs)("div",{className:"relative max-h-64 h-64",children:[x?Object(l.jsx)("div",{className:"bg-gray-400 h-12 w-12 mb-4 cursor-pointer rounded-lg shadow-md"}):Object(l.jsx)("img",{className:"h-12 w-12 border-gradient border-transparent border-2 mb-4 cursor-pointer rounded-lg shadow-md",src:(null===v||void 0===v?void 0:v.profilePicture)?null===v||void 0===v?void 0:v.profilePicture:c.s,alt:""}),Object(l.jsx)(o.a,{isLoading:x,size:"text-xl",children:a.title}),Object(l.jsx)(o.a,{size:"text-base",isLoading:x,className:"tracking-wide mt-1 gradient-text",children:null===v||void 0===v||null===(e=v.business)||void 0===e?void 0:e.name}),Object(l.jsx)(o.a,{size:"text-base",textColor:"dark:text-gray-500 text-gray-400",fontWeight:"font-medium",isLoading:x,className:"tracking-wide mt-1 ",children:"".concat((null===m||void 0===m?void 0:m.city)||"--",", ").concat((null===m||void 0===m?void 0:m.country)||"--")}),Object(l.jsx)(o.a,{size:"text-base",isLoading:x,textColor:"dark:text-gray-300 text-gray-700",fontWeight:"font-medium",className:"tracking-wide mt-4 ",children:"Salary: ".concat(h.min," - ").concat(h.max," / ").concat(h.duration)}),!x&&Object(l.jsxs)("div",{className:"flex items-center justify-between inset-x-0 absolute bottom-0",children:[Object(l.jsxs)("div",{className:"text-sm text-gray-400  dark:text-gray-500",children:[Object(d.c)(a.postedOn),"  ",g&&" \u2022 ".concat(a.views||0," views")]}),Object(l.jsx)("div",{children:g?Object(l.jsx)(i.a,{label:"View",onClick:function(t){t.stopPropagation(),O.push(r.a.viewProject(a._id))},disabled:x,gradient:!0}):Object(l.jsx)(i.a,{disabled:x,label:"Apply",link:a.website,gradient:!0})})]})]})})})}},870:function(t,e,a){"use strict";a.r(e);var i=a(12),s=a(117),o=a(69),r=a(494),n=a(89),c=a(8),d=a(119),l=a(189),b=a(123),j=a.n(b),u=a(519),x=a(35),g=a(17),v=a(120),m=a(2);e.default=function(t){var e=t.userData,a=(null===e||void 0===e?void 0:e.background)?j()(null===e||void 0===e?void 0:e.background.skills,(function(t){return t.name})):[],b=null===e||void 0===e?void 0:e.company,h=Object(v.d)(null===b||void 0===b?void 0:b.jobTitle),O=Object(v.d)(null===b||void 0===b?void 0:b.jobType),p=Object(l.a)(e).isBusiness,f=Object(x.useQuery)("related-jobs",(function(){return Object(s.o)([].concat(Object(i.a)(a),Object(i.a)(h),Object(i.a)(O)))})),w=f.isLoading,y=f.data,k=f.isFetched,N=k&&!w?y.data.data:{};return p?Object(m.jsx)(g.a,{to:c.a.viewMyProjects()}):w&&!k?Object(m.jsx)(n.a,{}):Object(m.jsxs)(d.a,{userData:e,customMaxWidth:"max-w-7xl",children:[Object(m.jsx)(o.a,{keywords:"jobs, jobs at 13RMS, 13rms",pageUrl:window.location.href,pageTitle:"Jobs | 13RMS "}),Object(m.jsx)(r.a,{title:"Jobs Related To Your Preference"}),Object(m.jsx)("div",{className:"grid gap-4 grid-cols-4",children:j()(N,(function(t){return Object(m.jsx)(u.a,{userId:e._id.toString(),project:t})}))})]})}}}]);
//# sourceMappingURL=49.cfa41c8f.chunk.js.map