(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[38],{423:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return j}));n(38),n(63);var s=n(427),a=n.n(s);var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return e.map((function(e){return e[t]})).join(n)},c=function(e){for(var t=e.target,n=t.value,s=t.cols,a=null===n||void 0===n?void 0:n.split("\n"),i=a.length,r=0;r<a.length;r++)i+=parseInt(a[r].length/s);t.rows=i>50?50:i},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t>1?"".concat(e,"s"):e},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e<=12?"".concat(e," ").concat(l("month",e)):e%12===0?"".concat(e/12," ").concat(l("year",e)):"".concat(12-e%12," ").concat(l("year",e)," ").concat(e%12," ").concat(l("month",e))},d=["a","an","the","and","but","or","for","nor","so","yet","at","by","from","in","into","of","on","to","with","am","are","be","been","can","could","did","do","does","had","has","have","is","may","might","must","ought to","shall","should","was","were","will","would"],u=function(e){if(e&&e.length>0)return e.split(" ").filter((function(e){return!d.includes(e)}))},j=function(e){return a()(e).fromNow()}},428:function(e,t,n){var s=n(229),a=n(121),i=n(434),r=n(50);e.exports=function(e,t){return(r(e)?s:i)(e,a(t,3))}},433:function(e,t,n){var s=n(439),a=n(122);e.exports=function(e,t){return e&&s(e,t,a)}},434:function(e,t,n){var s=n(435),a=n(157);e.exports=function(e,t){var n=-1,i=a(e)?Array(e.length):[];return s(e,(function(e,s,a){i[++n]=t(e,s,a)})),i}},435:function(e,t,n){var s=n(433),a=n(436)(s);e.exports=a},436:function(e,t,n){var s=n(157);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!s(n))return e(n,a);for(var i=n.length,r=t?i:-1,c=Object(n);(t?r--:++r<i)&&!1!==a(c[r],r,c););return n}}},437:function(e,t,n){"use strict";var s=n(155),a=n(7),i=n(32);t.a=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=t&&Object(a.d)(e)===(null===t||void 0===t?void 0:t._id),c=Object(i.useQuery)("user",(function(){return Object(s.w)(e)}),{enabled:!r&&n}),l=c.isFetched,o=c.isLoading,d=c.data,u=c.refetch,j=l&&!o&&d.data.data;return{otherUserData:j,isFetched:l,isLoading:o,iAmOwnerOfThisProfile:r,refetch:u}}},439:function(e,t,n){var s=n(440)();e.exports=s},440:function(e,t){e.exports=function(e){return function(t,n,s){for(var a=-1,i=Object(t),r=s(t),c=r.length;c--;){var l=r[e?c:++a];if(!1===n(i[l],l,i))break}return t}}},858:function(e,t,n){"use strict";n.r(t);var s=n(155),a=n(42),i=n(163),r=n(154),c=n(65),l=n(89),o=n(159),d=n(164),u=n(437),j=n(428),x=n.n(j),m=n(32),b=n(17),h=n(12),f=n(15),v=n(423),g=n(2),O=function(e){var t=e.title,n=e.content;return Object(g.jsxs)("div",{className:"my-8",children:[t&&Object(g.jsx)("h4",{className:"mb-4 font-semibold tracking-tight text-lg text-gray-900 dark:text-white",children:t}),Object(g.jsx)("p",{className:"font-medium whitespace-pre-line tracking-tight text-base text-gray-600 dark:text-gray-400",children:n})]})},p=function(e){var t=e.name,n=e.value,s=e.valueClassName,a=e.nameClassName;return Object(g.jsxs)("div",{className:"py-4 border-b border-gray-200 dark:border-gray-700 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 ",children:[Object(g.jsx)("dt",{className:Object(f.a)(a,"text-sm uppercase font-medium gradient-text text-left"),children:t}),Object(g.jsx)("dd",{className:Object(f.a)(s,"mt-1 text-sm break-words dark:text-white text-right text-gray-900 sm:mt-0 sm:col-span-1"),children:n})]})},y=function(e){var t=e.userData,n=e.iAmOwnerOfThisProfile,s=e.websiteUrl,i=e.views,c=void 0===i?0:i,l=e.followingList,o=Object(d.a)(l,t._id),u=o.following,j=o.addFollow,x=o.removeFollow;return Object(g.jsx)("div",{children:Object(g.jsx)(r.a,{className:"p-6 ",content:Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"flex relative items-center justify-between",children:[n&&Object(g.jsxs)("span",{className:"dark:text-gray-400 text-gray-400 italic text-sm absolute top-0 right-0 ",children:["View count: ",c]}),Object(g.jsxs)("div",{className:"flex items-center space-x-12",children:[Object(g.jsxs)("div",{className:"",children:[Object(g.jsx)("span",{className:"sr-only",children:"13RMS"}),Object(g.jsx)("img",{className:"h-36 w-36 sm:h-36 sm:w-36 cursor-pointer rounded-full shadow-xl",src:(null===t||void 0===t?void 0:t.profilePicture)?null===t||void 0===t?void 0:t.profilePicture:h.s,alt:""})]}),Object(g.jsxs)("div",{className:"space-y-1",children:[Object(g.jsx)("h1",{className:"text-2xl leading-6 font-semibold dark:text-white text-gray-900",children:null===t||void 0===t?void 0:t.business.name}),Object(g.jsxs)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:[null===t||void 0===t?void 0:t.location.address,", ",null===t||void 0===t?void 0:t.location.city,","," ",null===t||void 0===t?void 0:t.location.country]}),Object(g.jsx)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:null===t||void 0===t?void 0:t.business.email})]})]}),Object(g.jsx)("div",{className:"absolute bottom-0 right-0",children:n?Object(g.jsx)("span",{className:"text-base leading-6 font-light  dark:text-gray-400 text-gray-600",children:"Others will see buttons here"}):Object(g.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[Object(g.jsx)(a.a,{onClick:function(){return u?x.mutate(t._id):j.mutate(t._id)},label:"Follow",gradient:!0,size:"lg",className:"px-6"}),Object(g.jsx)(a.a,{label:"Apply",link:s,gradient:!0,className:"px-6",size:"lg"})]})})]})})})})};t.default=function(e){var t,n=e.userData,a=Object(b.i)().projectId,d=Object(m.useQuery)("project",(function(){return Object(s.n)(a)})),j=d.isLoading,f=d.data,w=d.isFetched&&!j?f.data.data:{},N=Object(u.a)(null===w||void 0===w||null===(t=w.company)||void 0===t?void 0:t.profileUrl,n,!1).iAmOwnerOfThisProfile;if(j)return Object(g.jsx)(l.a,{});var k=w.company,D=w.salary,F=w.location,P=k.business,T=k.background;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{}),Object(g.jsxs)(o.a,{userData:n,customMaxWidth:"max-w-7xl",children:[Object(g.jsx)(c.a,{pageUrl:window.location.href,imageUrl:k&&k.profilePicture,pageTitle:"".concat(P.name," | ").concat(P.typeOfBusiness," | Jobs | 13RMS "),title:P.name,description:w.briefDescription,keywords:Object(v.d)(w.briefDescription)}),Object(g.jsxs)("div",{className:"flex flex-col gap-y-12",children:[Object(g.jsx)(y,{followingList:n.following,views:w.views,websiteUrl:w.website,iAmOwnerOfThisProfile:N,userData:k}),Object(g.jsx)(r.a,{content:Object(g.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(g.jsxs)("div",{className:"sm:col-span-2",children:[Object(g.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Description"}),Object(g.jsx)("div",{className:"whitespace-pre-line",children:w.briefDescription}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"flex flex-col gap-y-4",children:[x()(w.sections,(function(e){return Object(g.jsx)(O,{title:e.title,content:e.content})})),Object(g.jsx)(O,{title:"",content:w.closure})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl mb-4 font-semibold",children:"Function Description"}),Object(g.jsxs)("dl",{className:"",children:[Object(g.jsx)(p,{name:"Function Type",value:Object(v.e)(w.functionType,"name")}),Object(g.jsx)(p,{name:"Salary",value:"".concat(D.min," - ").concat(D.max," / ").concat(D.duration)}),Object(g.jsx)(p,{name:"Location",value:"".concat((null===F||void 0===F?void 0:F.city)||"--",", ").concat((null===F||void 0===F?void 0:F.country)||"--")}),Object(g.jsx)(p,{name:"Posted",value:Object(v.c)(w.postedOn)})]})]})]})}),Object(g.jsx)(r.a,{content:Object(g.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(g.jsxs)("div",{className:"sm:col-span-2",children:[Object(g.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"About the company"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"sm:flex items-center",children:[Object(g.jsx)("div",{className:"mb-4 flex-shrink-0 sm:mb-0 sm:mr-4",children:Object(g.jsx)("img",{className:"h-12 w-12  cursor-pointer  shadow-xl",src:(null===k||void 0===k?void 0:k.profilePicture)?null===k||void 0===k?void 0:k.profilePicture:h.s,alt:""})}),Object(g.jsx)("h4",{className:"text-lg font-bold",children:null===P||void 0===P?void 0:P.name})]}),Object(g.jsxs)("div",{className:"mt-4",children:[Object(g.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===T||void 0===T?void 0:T.summary)||"Test summary"}),Object(g.jsx)("br",{}),(null===P||void 0===P?void 0:P.additionalInfo)&&Object(g.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:null===P||void 0===P?void 0:P.additionalInfo})]})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Company Details"}),Object(g.jsx)(p,{name:"Company Size",value:"100"}),Object(g.jsx)(p,{name:"Type of business",value:P.typeOfBusiness}),Object(g.jsx)(p,{name:"Year of foundation",value:"2007"}),Object(g.jsx)(p,{valueClassName:"underline cursor-pointer tracking-wider",name:"Website",value:w.website})]})]})})]})]})]})}}}]);
//# sourceMappingURL=38.9d33f8d7.chunk.js.map